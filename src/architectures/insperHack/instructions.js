import { BaseInstruction } from "../instructions";
import { Word } from "../system";

export class InsperHackInstructionFactory {
  createFromMnemonic(mnemonic, args) {
    let instructionClass = this.getInstructionClassByMnemonic(mnemonic);
    return new instructionClass(args);
  }

  getInstructionClassByMnemonic(mnemonic) {
    return mnemonicToClass[mnemonic];
  }

  createFromOpCode(memory, address) {
    const code = memory[address].toBitString();

    // is lea ?
    // true then return lea class

    // is jump-instruction ?
    // true then find jump-instruction

    // is nop ? (no dest, no jump -> dest=000, jmp=000)

    // is inc or dec

    // c-bits instructions (ALU-code -> a and c bits)
    let aluCode = code.slice(3, 10);

    switch (aluCode) {
      case "0000010": // D+A
        return AddInstruction.fromMachineCode(code);
      case "1000010": // D+M
        return AddInstruction.fromMachineCode(code);
      case "0000111": // A-D
        return SubInstruction.fromMachineCode(code);
      case "0010011": // D-A
        return SubInstruction.fromMachineCode(code);
      case "1000111": // D-M
        return SubInstruction.fromMachineCode(code);
      case "1010011": // M-D
        return SubInstruction.fromMachineCode(code);
      // …
      case "0000000": // D&A
        return AndInstruction.fromMachineCode(code);
      case "1000000": // M&D
        return AndInstruction.fromMachineCode(code);
      case "0010101": // D|A
        return OrInstruction.fromMachineCode(code);
      case "1010101": // M|D
        return OrInstruction.fromMachineCode(code);
      default:
        break;
    }
  }

  getInstructionClassByOpCode(opCode) {
    // find class c with identical opCode
    return mnemonicToClass.filter((c) => c.opCode === opCode)[0];
  }
}

export class InsperHackInstruction extends BaseInstruction {
  get op1() {
    return this.args[0];
  }
  get op2() {
    return this.args[1];
  }
  get dest() {
    return this.args.slice(2);
  }

  static extractMemoryBit(code) {
    return code.slice(3, 4);
  }
  static extractOpCode(code) {
    return code.slice(4, 10);
  }
  static extractDestCode(code) {
    return code.slice(10, 13);
  }
  static extractJumpCode(code) {
    return code.slice(13, 16);
  }

  // append 000 for no jump operations
  noJump(code) {
    code += "000";
    return code;
  }

  getRegValue(system, operand) {
    return system.registers[operand];
  }

  getMemoryAddress(system) {
    // get value of Memory
    let address = system.registers["%A"].toUnsignedIntValue();
    // set value
    return system.memory[address];
  }

  getImmediateValue(operand) {
    //turns immediate into a number - then a Word
    let imm = parseInt(operand.slice(1));
    return Word.fromSignedIntValue(imm);
  }

  isMemoryAccess(param) {
    return param.startsWith("(");
  }
}

export class TwoOpInstruction extends InsperHackInstruction {
  // checks if argument is valid and returns its code
  matchCode(code) {
    let memoryBit = this.extractMemoryBit(code);
    let opCode = this.extractOpCode(code);
    let cCode = memoryBit + opCode;

    if (cCode in this.cCodeToArgs) {
      return this.cCodeToArgs[cCode];
    } else {
      throw new Error("Argument is not valid.");
    }
  }
  argsToDests = {
    "000": [""],
    100: ["%A"],
    "010": ["%D"],
    "001": ["(%A)"],
    110: ["%A", "%D"],
    101: ["%A", "(%A)"],
    "011": ["%D", "(%A)"],
    111: ["%A", "%D", "(%A)"],
  };
  // checks if destination(arg) is valid and returns its code
  matchDest(arg) {
    let destCode;
    if (arg in this.argsToDests) {
      destCode = this.argsToDests[arg];
    } else {
      throw new Error("Destination is not valid.");
    }
  }
  // matches dest code to given arguments
  argsToDestCode(args) {
    let destCode = [0, 0, 0];
    args = args.slice(1);
    args.forEach((arg) => {
      if (arg === "%A") {
        destCode[0] = 1;
      }
      if (arg === "%D") {
        destCode[1] = 1;
      }
      if (arg === "(%A)") {
        destCode[2] = 1;
      }
    });
    return destCode.join("");
  }
  // matches single dest to code
  argsToDestCode(arg) {
    let destCode = [0, 0, 0];
    if (arg === "%A") {
      destCode[0] = 1;
    }
    if (arg === "%D") {
      destCode[1] = 1;
    }
    if (arg === "(%A)") {
      destCode[2] = 1;
    }
    return destCode.join("");
  }
  // gets the word of the operand which supposed to be reg or mem
  getRMWord(system, op) {
    // reg/mem
    let opWord;
    if (this.isMemoryAccess(op)) {
      opWord = this.getMemoryAddress(system);
    } else if (op.startsWith("%")) {
      opWord = this.getRegValue(system, op);
    } else {
      throw new Error(
        "Argument not valid: Needs to be register or memory access."
      );
    }
    return opWord;
  }
  // gets the word of the operand which supposed to be reg, mem or im
  getRMIWord(system, op) {
    // reg/mem/im
    let opWord;
    if (this.isMemoryAccess(op)) {
      opWord = this.getMemoryAddress(system);
    } else if (op.startsWith("%")) {
      opWord = this.getRegValue(system, op);
    } else if (op.startsWith("$")) {
      opWord = this.getImmediateValue(op);
    } else {
      throw new Error(
        "Argument not valid: Needs to be register, memory access or immediate value."
      );
    }
    return opWord;
  }
}

export class AddInstruction extends TwoOpInstruction {
  static cCodeToArgs = {
    "0101010": ["$0"],
    "0111111": ["$1"],
    "0111010": ["$-1"],
    "0000010": ["%D"],
    "0000010": ["%A"],
    1000010: ["(%A)"],
  };
  argsToCcode = {
    $0: "0101010", //a+c Code
    $1: "0111111",
    "$-1": "0111010",
    "%D": "0000010",
    "%A": "0000010",
    "(%A)": "1000010",
  };

  static fromMachineCode(code) {
    let params = this.matchCode(code);
    let dests = this.matchDest(code);
    let args = params.concat(dests);

    return new AddInstruction(args);
  }

  toMachineCode() {
    // setup instruction code
    let code = "111";
    // get opCode and append
    let opCode = this.argsToCcode[this.args[0]];
    code += opCode;
    // append params and destinations
    code += this.noJump(this.argsToDestCode(this.args));
    return code;
  }

  executeOn(system) {
    let op1Word = this.getRMWord(system, this.op1);
    let op2Word = this.getRMIWord(system, this.op2);

    // overwirte each destination with sum of op1Word and op2Word
    this.dest.forEach((dest) => {
      let destWord = this.getRMWord(system, dest);
      // set result word
      destWord.set(op1Word.add(op2Word));
    });
  }
}

export class SubInstruction extends TwoOpInstruction {
  static cCodeToArgs = {
    "0101010": ["$0"],
    "0111111": ["$1"],
    "0111010": ["$-1"],
    "0010011": ["%D", "%A"],
    "0000111": ["%A", "%D"],
    1010011: ["%D", "(%A)"],
    1000111: ["(%A)", "%D"],
  };
  argsToCcode = {
    $0: "0101010", //a+c Code
    $1: "0111111",
    "$-1": "0111010",
    "%D": "0000010",
    "%A": "0000010",
    "(%A)": "1000010", //need to be changed
  };
  static cCodeToDests = {
    "000": [""],
    100: ["%A"],
    "010": ["%D"],
    "001": ["(%A)"],
    110: ["%A", "%D"],
    101: ["%A", "(%A)"],
    "011": ["%D", "(%A)"],
    111: ["%A", "%D", "(%A)"],
  };

  static fromMachineCode(code) {
    let params = this.matchCode(code);
    let dests = this.matchDest(code);
    let args = params.concat(dests);

    return new SubInstruction(args);
  }

  toMachineCode() {
    // setup instruction code
    let code = "111";
    // get opCode and append
    let opCode = this.argsToCcode[this.args[0]];
    code += opCode;
    // append params and destinations
    code += this.noJump(this.createDestCodeFrom(this.args));
    return code;
  }

  executeOn(system) {
    let op1Word = this.getRMWord(system, this.op1);
    let op2Word = this.getRMIWord(system, this.op2);

    // overwirte each destination with substract of op1Word and op2Word
    this.dest.forEach((dest) => {
      // destinations one of mem/reg
      let destWord = this.getRMWord(system, dest);
      // set result word
      destWord.set(op1Word.subtract(op2Word));
    });
  }
}

export class RsubInstruction extends TwoOpInstruction {}

export class AndInstruction extends TwoOpInstruction {
  static cCodeToArgs = {
    "0000000": ["%A", "%D"],
    1000000: ["(%A)", "%D"],
  };
  argsToCcode = {
    "%D": ["0000000", "1000000"], //a+c Code
    "%A": "0000000",
    "(%A)": "1000000",
  };

  static fromMachineCode(code) {
    let params = this.matchCode(code);
    let dests = this.matchDest(code);
    let args = params.concat(dests);

    return new AndInstruction(args);
  }

  toMachineCode() {
    // setup instruction code
    let code = "111";
    // get opCode and append
    let opCode = this.argsToCcode[this.args[0]];
    code += opCode;
    // append params and destinations
    code += this.noJump(this.argsToDestCode(this.args[1]));
    return code;
  }

  executeOn(system) {
    let op1Word = this.getRMWord(system, this.op1);
    let op2Word = this.getRMWord(system, this.op2);

    // overwirte destination with and of op1Word and op2Word
    let destWord = this.getRMWord(system, this.dest); // only one given destination
    // set result word
    destWord.set(op1Word.and(op2Word));
  }
}

export class OrInstruction extends TwoOpInstruction {
  static cCodeToArgs = {
    "0010101": ["%A", "%D"],
    1000000: ["(%A)", "%D"],
  };
  argsToCcode = {
    "%D": ["0010101", "1010101"], //a+c Code
    "%A": "0010101",
    "(%A)": "1010101",
  };

  static fromMachineCode(code) {
    let params = this.matchCode(code);
    let dests = this.matchDest(code);
    let args = params.concat(dests);

    return new OrInstruction(args);
  }

  toMachineCode() {
    // setup instruction code
    let code = "111";
    // get opCode and append
    let opCode = this.argsToCcode[this.args[0]];
    code += opCode;
    // append params and destinations
    code += this.noJump(this.argsToDestCode(this.args[1]));
    return code;
  }

  executeOn(system) {
    let op1Word = this.getRMWord(system, this.op1);
    let op2Word = this.getRMWord(system, this.op2);

    // overwirte destination with or of op1Word and op2Word
    let destWord = this.getRMWord(system, this.dest); // only one given destination
    // set result word
    destWord.set(op1Word.or(op2Word));
  }
}

const mnemonicToClass = {
  add: AddInstruction,
  sub: SubInstruction,
  rsub: RsubInstruction,
  and: AndInstruction,
  or: OrInstruction,
};
