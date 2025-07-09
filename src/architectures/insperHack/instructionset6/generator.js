import { BaseBlocklyGenerator, Order } from "@/architectures/generator.js"

export class InsperHackBlocklyGenerator extends BaseBlocklyGenerator {
    constructor() {
        super("insperHack6")
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
        this.generator.forBlock["nop"] = (block, _generator) => {

            return `nop`
        }
        this.generator.forBlock["out"] = (block) => {
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC)

            return `out ${register}`
        }

        // Instruction Set 5
        // lea
        this.generator.forBlock["lea"] = (block) => {
            const constant = block.getFieldValue("constant")
            const reg1 = this.generator.valueToCode(block, "reg1", Order.ATOMIC)

            if (reg1 == "%A") {
                return `lea $${constant} ${reg1}`
            } else if (reg1 === "%D" || reg1 === "(%A)") {
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
        // mov immediate/address
        this.generator.forBlock["mov_address"] = (block) => {
            const value = block.getFieldValue("value")
            const reg2 = this.generator.valueToCode(block, "reg2", Order.ATOMIC)
                
            return `mov $${value} ${reg2}`
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
                code = `\n jmp ${register}`
            } else {
                code = `\n ${operand} ${register}`
            }            

            return [code, Order.ATOMIC]
        }

        //Label & Jump
        // Conditional Jump
        this.generator.forBlock["label"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');
            const label = block.getFieldValue("label")
            const condition = this.generator.valueToCode(block, "condition", Order.ATOMIC)

            if (label === "") {
                return `${instructions}`
            } else {
                return `${label}: ${instructions} ${condition}` 
            }
        }
        // Unconditional Jump
        this.generator.forBlock["jump"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');
            const label = block.getFieldValue("label")

            if (label === "") {
                return `${instructions}`
            } else {
                return `${label}: ${instructions}` 
            }
        }


        // multilines label
        this.generator.forBlock["label_statement"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');
            const label = block.getFieldValue("label")

            if (label === "") {
                return `${instructions}`
            } else {
                return `${label}: ${instructions}` 
            }
        }


        // Comments
        // Block
        this.generator.forBlock["comment"] = (block) => {

            return ""
        }

        // Section
        this.generator.forBlock["comment_statement"] = (block) => {
            const instructions = this.generator.statementToCode(block, 'instructions');
            const comment = block.getFieldValue("comment")

            return `${instructions}`
        }
    }
}
