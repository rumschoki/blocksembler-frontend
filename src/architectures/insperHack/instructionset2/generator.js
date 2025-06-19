import { BaseBlocklyGenerator, Order } from "@/architectures/generator.js"

export class InsperHackBlocklyGenerator extends BaseBlocklyGenerator {
    constructor() {
        super("insperHack2")
    }

    setupGenerator() {
        super.setupGenerator()

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
        //lea
        //mov

        // Operations
        // add
        // sub
        // inc
        // dec
        // neg
        // not

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
