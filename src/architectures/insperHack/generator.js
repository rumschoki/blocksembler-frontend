import { BaseBlocklyGenerator, Order } from "@/architectures/generator.js"

export const generator = new Blockly.Generator("InsperHack")

export class InsperHackBlocklyGenerator extends BaseBlocklyGenerator {
    constructor() {
        super("insperHack")
    }

    setupGenerator() {
        super.setupGenerator()

        generator.forBlock["add"] = (block) => {
            const param1 = block.getFieldValue(block, "param1", Order.ATOMIC)
            const param2 = block.getFieldValue(block, "param2", Order.ATOMIC)
            const dest1 = block.getFieldValue(block, "dest1", Order.ATOMIC)

            return `add ${param1} ${param2} ${dest1}`
        }
    }
}
