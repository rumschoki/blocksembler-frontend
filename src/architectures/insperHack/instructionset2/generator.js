import { BaseBlocklyGenerator, Order } from "@/architectures/generator.js"

export class InsperHackBlocklyGenerator extends BaseBlocklyGenerator {
    constructor() {
        super("insperHack2")
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
        // add
        this.generator.forBlock['add'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);
            const reg2 = this.generator.valueToCode(block, 'reg2', Order.ATOMIC);
            const reg3 = block.getFieldValue('reg3');
            const reg4 = block.getFieldValue('reg4');
            const reg5 = block.getFieldValue('reg5');

            let dest1 = this.getDest(reg3)
            let dest2 = this.getDest(reg4)
            let dest3 = this.getDest(reg5)

            return `add ${reg1} ${reg2} ${dest1} ${dest2} ${dest3}`
        }
        // sub
        this.generator.forBlock['sub'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);
            const reg2 = this.generator.valueToCode(block, 'reg2', Order.ATOMIC);
            const reg3 = block.getFieldValue('reg3');
            const reg4 = block.getFieldValue('reg4');
            const reg5 = block.getFieldValue('reg5');

            let dest1 = this.getDest(reg3)
            let dest2 = this.getDest(reg4)
            let dest3 = this.getDest(reg5)

            return `sub ${reg1} ${reg2} ${dest1} ${dest2} ${dest3}`
        }
        // and 
        this.generator.forBlock['and'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);
            const reg2 = this.generator.valueToCode(block, 'reg2', Order.ATOMIC);
            const reg3 = block.getFieldValue('reg3');
            const reg4 = block.getFieldValue('reg4');
            const reg5 = block.getFieldValue('reg5');

            let dest1 = this.getDest(reg3)
            let dest2 = this.getDest(reg4)
            let dest3 = this.getDest(reg5)

            return `and ${reg1} ${reg2} ${dest1} ${dest2} ${dest3}`
        }
        // or
        this.generator.forBlock['or'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);
            const reg2 = this.generator.valueToCode(block, 'reg2', Order.ATOMIC);
            const reg3 = block.getFieldValue('reg3');
            const reg4 = block.getFieldValue('reg4');
            const reg5 = block.getFieldValue('reg5');

            let dest1 = this.getDest(reg3)
            let dest2 = this.getDest(reg4)
            let dest3 = this.getDest(reg5)

            return `or ${reg1} ${reg2} ${dest1} ${dest2} ${dest3}`
        }
        // inc
        this.generator.forBlock['inc'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `inc ${reg1}`
        }
        // dec
        this.generator.forBlock['dec'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `dec ${reg1}`
        }
        // neg
        this.generator.forBlock['neg'] = (block) => {
            const reg1 = this.generator.valueToCode(block, 'reg1', Order.ATOMIC);

            return `neg ${reg1}`
        }
        // not
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
            let cond
            switch (operand) {
                // equal
                // TO-DO: only jmp when register is A
                case "=":
                    cond = "mp"
                    break
                case "e":
                    cond = "mp"
                    break
                case "is":
                    cond = "mp"
                    break
                case "equal":
                    cond = "mp"
                    break
                case "equals":
                    cond = "mp"
                    break
                // not equal
                case "!=":
                    cond = "ne"
                    break
                case "ne":
                    cond = "ne"
                    break
                case "is not equal":
                    cond = "ne"
                    break
                case "is not equal to":
                    cond = "ne"
                    break
                case "not equal to":
                    cond = "ne"
                // lower
                case "<":
                    cond = "l"
                    break
                case "smaller":
                    cond = "l"
                    break
                case "smaller than":
                    cond = "l"
                    break
                // lower equal
                case "<=":
                    cond = "le"
                    break
                case "le":
                    cond = "le"
                    break
                case "smaller":
                    cond = "le"
                    break
                // greater
                case ">":
                    cond = "g"
                    break
                case "g":
                    cond = "g"
                    break
                case "greater":
                    cond = "g"
                    break
                case "greater than":
                    cond = "g"
                    break
                case "bigger than":
                    cond = "g"
                    break
                case "bigger":
                    cond = "g"
                    break
                // greater equal
                case ">=":
                    cond = "ge"
                    break
                case "ge":
                    cond = "ge"
                    break
                case "greater equal":
                    cond = "ge"
                    break
                default:
                    cond = "[condition]"
                    break
            }

            const code = `j${cond} ${register}`
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
