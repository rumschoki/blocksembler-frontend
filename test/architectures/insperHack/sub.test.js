import { SubInstruction, InsperHackInstructionFactory } from "@/architectures/insperHack/instructions";
import {expect, test, vi} from "vitest";
import {Word} from "../../../src/architectures/system";

//sub-(%A), %D, %D
test("Test 1.1: sub-instruction to machine code (a=1)", () => {
    let instruction = new SubInstruction(['(%A)', '%D', '%D']);
    // 111 a cccccc ddd jjj
    let expectedCode = "111" + "1" + "000111" + "010" + "000";

    expect(instruction.toMachineCode()).toBe(expectedCode);
});

test("Test 1.2: sub-instruction to machine code (a=0)", () => {
    let instruction = new SubInstruction(['%A', '%D', '%D']);
    // 111 a cccccc ddd jjj
    let expectedCode = "111" + "0" + "000111" + "010" + "000";

    expect(instruction.toMachineCode()).toBe(expectedCode);
});

test("Test 2.1: creating sub-instruction from mnemonic (memory access)", () => {
    let factory = new InsperHackInstructionFactory();

    let inst = factory.createFromMnemonic("Sub", ['(%A)', '%D', '%D']);
    let expected = new SubInstruction(['(%A)', '%D', '%D']);

    expect(inst).toMatchObject(expected);
});

test("Test 2.1: creating sub-instruction from mnemonic", () => {
    let factory = new InsperHackInstructionFactory();

    let inst = factory.createFromMnemonic("Sub", ['%A', '%D', '%D']);
    let expected = new SubInstruction(['%A', '%D', '%D']);

    expect(inst).toMatchObject(expected);
});

test("Test 3: create sub-instruction from machine code", () => {
    let machineCode = "111" + "1" + "000111" + "010" + "000";

    let expectedInstruction = new SubInstruction(['(%A)', '%D', '%D']);

    let factory = new InsperHackInstructionFactory();
    let instruction = factory.createFromOpCode([Word.fromString(machineCode)], 0);

    expect(instruction).toMatchObject(expectedInstruction);
});

test("Test 4.1: substract two registers and store to different register", () => {
    let pcWord = Word.fromSignedIntValue(0);
    let regAWord = Word.fromSignedIntValue(17);
    let regDWord = Word.fromSignedIntValue(5);

    let emulator = {
        registers: {
            'pc': pcWord,
            '%A': regAWord,
            '%D': regDWord,
        },
    };

    let instruction = new SubInstruction(['%A', '%D', '%D']);

    instruction.executeOn(emulator);

    expect(regAWord.toSignedIntValue()).toBe(17);
    expect(regDWord.toSignedIntValue()).toBe(12);
});

test("Test 4.2: substract two registers and store to different register", () => {
    let pcWord = Word.fromSignedIntValue(0);
    let regAWord = Word.fromSignedIntValue(0);
    let regDWord = Word.fromSignedIntValue(5);

    let emulator = {
        registers: {
            'pc': pcWord,
            '%A': regAWord,
            '%D': regDWord,
        },
        memory: [Word.fromSignedIntValue(10)],
    };

    let instruction = new SubInstruction(['(%A)', '%D', '%D']);

    instruction.executeOn(emulator);

    expect(regAWord.toSignedIntValue()).toBe(0);
    expect(regDWord.toSignedIntValue()).toBe(5);
});
