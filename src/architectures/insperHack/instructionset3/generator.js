import { BaseBlocklyGenerator, Order } from "@/architectures/generator.js"

export class InsperHackBlocklyGenerator extends BaseBlocklyGenerator {
    constructor() {
        super("insperHack3")
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

        // Instruction Set 2
        // lea
        this.generator.forBlock["lea"] = (block) => {
            const constant = block.getFieldValue("constant")
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC)

            return `lea $${constant} ${register}`
        }
        // mov
        this.generator.forBlock["mov"] = (block) => {
            const value = this.generator.valueToCode(block, "value", Order.ATOMIC)
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC)

            return `mov ${value} ${register}`
        }

        // Operations
        // add, sub, and, or
        this.generator.forBlock["store"] = (block) => {
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)
            const reg3 = block.getFieldValue('reg3');
            const reg4 = block.getFieldValue('reg4');
            const reg5 = block.getFieldValue('reg5');

            const operation = block.getFieldValue('operator')

            let dest1 = this.getDest(reg3)
            let dest2 = this.getDest(reg4)
            let dest3 = this.getDest(reg5)

            return `${operation} ${reg1} ${reg2} ${dest1} ${dest2} ${dest3}`
        }
        // inc/dec
        this.generator.forBlock['inc/dec'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);
            const operation = block.getFieldValue('operator')

            return `${operation} ${reg1}`
        }
        // neg/not
        this.generator.forBlock['not/neg'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);
            const operation = block.getFieldValue('operator')

            return `${operation} ${reg1}`
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
