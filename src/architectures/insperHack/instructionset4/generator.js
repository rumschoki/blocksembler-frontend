import { BaseBlocklyGenerator, Order } from "@/architectures/generator.js"

export class InsperHackBlocklyGenerator extends BaseBlocklyGenerator {
    constructor() {
        super("insperHack4")
    }

    getDest(reg) {
        if (reg == 'none') {
            return ''
        }
        else {
            return reg
        }
    }

    setupGenerator() {
        super.setupGenerator()

        // Control flow
        this.generator.forBlock["start"] = (_block, _generator) => {
            return ""
        }
        this.generator.forBlock["halt"] = (_block, _generator) => {
            return ".halt"
        }
        this.generator.forBlock["out"] = (block) => {
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC)

            return `out ${register}`
        }

        // Instruction Set 4
        // lea
        this.generator.forBlock["lea"] = (block) => {
            const constant = block.getFieldValue("constant")
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)

            return `lea $${constant} ${reg1}`
        }
        // mov
        this.generator.forBlock["mov"] = (block) => {
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)

            return `mov ${reg1} ${reg2}`
        }

        // Operations
        // add
        this.generator.forBlock["add"] = (block) => {
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)
            const reg3 = this.generator.valueToCode(block, "reg3", Order.ATOMIC)
            const reg4 = this.generator.valueToCode(block, "reg4", Order.ATOMIC)
            const reg5 = this.generator.valueToCode(block, "reg5", Order.ATOMIC)

            return `add ${reg1} ${reg2} ${reg3} ${reg4} ${reg5}`
        }
        // sub
        this.generator.forBlock["aub"] = (block) => {
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)
            const reg3 = this.generator.valueToCode(block, "reg3", Order.ATOMIC)
            const reg4 = this.generator.valueToCode(block, "reg4", Order.ATOMIC)
            const reg5 = this.generator.valueToCode(block, "reg5", Order.ATOMIC)

            return `aub ${reg1} ${reg2} ${reg3} ${reg4} ${reg5}`
        }
        // and
        this.generator.forBlock["and"] = (block) => {
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)
            const reg3 = this.generator.valueToCode(block, "reg3", Order.ATOMIC)
            const reg4 = this.generator.valueToCode(block, "reg4", Order.ATOMIC)
            const reg5 = this.generator.valueToCode(block, "reg5", Order.ATOMIC)

            return `and ${reg1} ${reg2} ${reg3} ${reg4} ${reg5}`
        }
        // or
        this.generator.forBlock["or"] = (block) => {
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)
            const reg3 = this.generator.valueToCode(block, "reg3", Order.ATOMIC)
            const reg4 = this.generator.valueToCode(block, "reg4", Order.ATOMIC)
            const reg5 = this.generator.valueToCode(block, "reg5", Order.ATOMIC)

            return `or ${reg1} ${reg2} ${reg3} ${reg4} ${reg5}`
        }

        // inc
        this.generator.forBlock['inc'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `inc ${reg1}`
        }
        //dec
        this.generator.forBlock['dec'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `dec ${reg1}`
        }

        // not
        this.generator.forBlock['neg'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `neg ${reg1}`
        }
        // neg
        this.generator.forBlock['not'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `not ${reg1}`
        }


        // Registers
        this.generator.forBlock["register"] = (block, _generator) => {
            const register = block.getFieldValue("register")

            return [`${register}`, Order.ATOMIC]
        }
        const generateRegister = (block, _generator) => {
            return [block.type, Order.ATOMIC]
        }

        this.generator.forBlock["%A"] = generateRegister
        this.generator.forBlock["%D"] = generateRegister
        this.generator.forBlock["(%A)"] = generateRegister

        // Condition
        this.generator.forBlock["condition"] = (block) => {
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC)
            const operand = block.getFieldValue("operand")
            let code;

            if (register === "%A" && operand === "je") {
                code = `jmp ${register}`
            } else {
                code = `${operand} ${register}`
            }            

            return [code, Order.ATOMIC]
        }

        // Label
        this.generator.forBlock["cond_label"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}` // TO-DO: Blocks in C-Block should render instruction-code
        }
        this.generator.forBlock["do_if"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}` // TO-DO: Blocks in C-Block should render instruction-code
        }
        this.generator.forBlock["if_do"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}` // TO-DO: Blocks in C-Block should render instruction-code
        }
        this.generator.forBlock["label"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}` // TO-DO: Blocks in C-Block should render instruction-code
        }
    }
}
