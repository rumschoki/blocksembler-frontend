import { BaseBlocklyGenerator, Order } from "@/architectures/generator.js"

export class InsperHackBlocklyGenerator extends BaseBlocklyGenerator {
    constructor() {
        super("insperHack")
    }

    setupGenerator() {
        super.setupGenerator()

        this.generator.forBlock["start"] = (_block, _generator) => {
            return ""
        }
        this.generator.forBlock["halt"] = (_block, _generator) => {
            return ".halt";
        };
        this.generator.forBlock["out"] = (block) => {
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC);

            return `out ${register}`;
        };

        // Instruction Set 1
        this.generator.forBlock["lea"] = (block) => {
            const constant = block.getFieldValue("constant")
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC)

            return `lea $${constant} ${register}`
        }
        this.generator.forBlock["mov"] = (block) => {
            const value = this.generator.valueToCode(block, "value", Order.ATOMIC)
            const register = this.generator.valueToCode(block, "register", Order.ATOMIC)

            return `mov ${value} ${register}`
        }

        // Operations
        this.generator.forBlock["store"] = (block) => {
            const register1 = this.generator.valueToCode(block, "register1", Order.ATOMIC)
            const register2 = this.generator.valueToCode(block, "register2", Order.ATOMIC)
            const register3 = this.generator.valueToCode(block, "register3", Order.ATOMIC)
            const operation = block.getFieldValue("operation")

            let op
            switch (operation) {
                case "+":
                    op = "and"
                    break
                case "plus":
                    op = "and"
                    break
                case "-":
                    op = "sub"
                    break
                case "minus":
                    op = "sub"
                    break
                case "and":
                    op = "and"
                    break
                case "or":
                    op = "or"
                    break
                case "&&":
                    op = "and"
                    break
                case "||":
                    op = "or"
                    break
                default:
                    op = "[operator]"
                    break
            }

            return `${op} ${register1} ${register2} ${register3}`
        }
        this.generator.forBlock["inc"] = (block) => {
            const register1 = this.generator.valueToCode(block, "register1", Order.ATOMIC)
            const operation = block.getFieldValue("operation")

            let op;
            switch (operation) {
                case "inc":
                    op = "inc"
                    break
                case "++":
                    op = "inc"
                    break
                case "increment":
                    op = "inc"
                    break
                case "dec":
                    op = "dec"
                    break
                case "--":
                    op = "dec"
                    break
                case "decrement":
                    op = "dec"
                    break
                default:
                    op = "[operator]"
                    break
            }

            return `${op} ${register1}`
        }
        this.generator.forBlock["dec"] = (block) => {
            const register1 = this.generator.valueToCode(block, "register1", Order.ATOMIC)
            const operation = block.getFieldValue("operation")

            let op;
            switch (operation) {
                case "inc":
                    op = "inc"
                    break
                case "++":
                    op = "inc"
                    break
                case "increment":
                    op = "inc"
                    break
                case "dec":
                    op = "dec"
                    break
                case "--":
                    op = "dec"
                    break
                case "decrement":
                    op = "dec"
                    break
                default:
                    op = "[operator]"
                    break
            }

            return `${op} ${register1}`
        }
        this.generator.forBlock["neg"] = (block) => {
            const register1 = this.generator.valueToCode(block, "register1", Order.ATOMIC)
            const operation = block.getFieldValue("operation")
            let op;
            switch (operation) {
                case "neg":
                    op = "neg"
                    break
                case "negation":
                    op = "neg"
                    break
                case "-":
                    op = "neg"
                    break
                case "minus":
                    op = "neg"
                    break
                default:
                    op = "[operator]"
                    break
            }

            return `${op} ${register1}`
        }
        this.generator.forBlock["not"] = (block) => {
            const register1 = this.generator.valueToCode(block, "register1", Order.ATOMIC)
            const operation = block.getFieldValue("operation")
            let op;
            switch (operation) {
                case "not":
                    op = "not"
                    break
                case "invert":
                    op = "not"
                    break
                case "!":
                    op = "not"
                    break
                default:
                    op = "[operator]"
                    break
            }

            return `${op} ${register1}`
        }

        this.generator.forBlock['condition'] = (block) => {
            const register = this.generator.valueToCode(block, 'register', Order.ATOMIC);
            const operand = block.getFieldValue('operand');
            let cond;
            switch (operand) {
                // equal
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

            const code = `j${cond} ${register}`;
            return [code, Order.ATOMIC];
        }


        // Registers
        
        this.generator.forBlock["register"] = (block, _generator) => {
            const register = block.getFieldValue("register");

            return [`${register}`, Order.ATOMIC];
        };
        const generateRegister = (block, _generator) => {
            return [block.type, Order.ATOMIC]
        }

        this.generator.forBlock["%A"] = generateRegister
        this.generator.forBlock["%D"] = generateRegister
        this.generator.forBlock["(%A)"] = generateRegister

        // Instruction Set 2


        // Label
        this.generator.forBlock["cond_label"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}`
        }
        this.generator.forBlock["do_if"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}`
        }
        this.generator.forBlock["if_do"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}`
        }
        this.generator.forBlock["label"] = (block) => {
            const text = block.getFieldValue("name")
            const value = this.generator.valueToCode(block, "blocks", Order.ATOMIC)

            return `${text}: ${value}`
        }
    }
}
