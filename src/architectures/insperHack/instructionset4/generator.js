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

            if (reg1 == "%A") {
                return `lea $${constant} ${reg1}`
            } else if (reg1 === "%D" || reg1 === "memory") {
                return `mov $${constant} ${reg1}`
            } else {
                return ``
            }
        }
        // mov
        this.generator.forBlock["mov"] = (block) => {
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)

            return `mov ${reg1} ${reg2}`
        }

        // Operations
        // twoOp
        this.generator.forBlock["twoOp"] = (block) => {
            const operator = block.getFieldValue("operator")
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)
            const reg3 = this.generator.valueToCode(block, "reg3", Order.ATOMIC)
            const reg4 = this.generator.valueToCode(block, "reg4", Order.ATOMIC)
            const reg5 = this.generator.valueToCode(block, "reg5", Order.ATOMIC)

            return `${operator} ${reg1} ${reg2} ${reg3} ${reg4} ${reg5}`
        }

        // oneOp
        this.generator.forBlock["oneOp"] = (block) => {
            const operator = block.getFieldValue("operator")
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)

            return `${operator} ${reg1}`
        }


        // Registers
        this.generator.forBlock["register"] = (block, _generator) => {
            const register = block.getFieldValue("register")

            let reg
            if (register === "memory") {
                reg = '(%A)'
            } else {
                reg = register
            }

            return [`${reg}`, Order.ATOMIC]
        }
        const generateRegister = (block, _generator) => {
            return [block.type, Order.ATOMIC]
        }

        this.generator.forBlock["%A"] = generateRegister
        this.generator.forBlock["%D"] = generateRegister
        this.generator.forBlock["memory"] = generateRegister

        // Jump
        // jmp
        this.generator.forBlock['jmp'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `jmp ${reg1}`
        }
        // jump
        this.generator.forBlock['jump'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);
            const operator = block.getFieldValue('operator');

            return `${operator} ${reg1}`
        }

        // Label
        this.generator.forBlock['label'] = (block) => {
            const label = block.getFieldValue('label');

            return `${label}: `
        }
    }
}
