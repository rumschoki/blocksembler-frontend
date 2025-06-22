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
        // mov immediate
        this.generator.forBlock["movi"] = (block) => {
            const constant = block.getFieldValue("constant")
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)

            return `mov $${constant} ${reg1}`
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
                code = `\n jmp ${register} \n`
            } else {
                code = `\n ${operand} ${register} \n`
            }            

            return [code, Order.ATOMIC]
        }

        // Conditional Labels
        // 1
        this.generator.forBlock["conditional_label1"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');
            const label = block.getFieldValue("label")
            const condition = this.generator.valueToCode(block, "condition", Order.ATOMIC)

            return `${label}:\n ${instructions} ${condition}` 
        }
        // 2
        this.generator.forBlock["conditional_label2"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');           
            const condition = this.generator.valueToCode(block, "condition", Order.ATOMIC)
            const label = block.getFieldValue("label")

            return `${label}:\n ${instructions} ${condition}` 
        }
        // 3
        this.generator.forBlock["conditional_label3"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');           
            const condition = this.generator.valueToCode(block, "condition", Order.ATOMIC)
            const label = block.getFieldValue("label")

            return `${label}:\n ${instructions} ${condition}` 
        }
        // 4
        this.generator.forBlock["conditional_label4"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');           
            const condition = this.generator.valueToCode(block, "condition", Order.ATOMIC)
            const label = block.getFieldValue("label")

            return `${label}:\n ${instructions} ${condition}` 
        }
        // 5
        this.generator.forBlock["conditional_label5"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');           
            const condition = this.generator.valueToCode(block, "condition", Order.ATOMIC)
            const label = block.getFieldValue("label")

            return `${label}:\n ${instructions} ${condition}` 
        }

        // Label
        // 1
        this.generator.forBlock["label1"] = (block) => {
            const label = block.getFieldValue("label")

            return `${label}:` 
        }

        // Jump
        // 1
        this.generator.forBlock["jump1"] = (block) => {
            const condition = this.generator.valueToCode(block, "condition", Order.ATOMIC)
            const label = block.getFieldValue("label")

            return `${condition}` 
        }

        // Comments
        // 1 basic floating comment -> no effect in code
        this.generator.forBlock["comment1"] = (block) => {
            const text = block.getFieldValue('text');

            return `` 
        }
    }
}
