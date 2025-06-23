import { InsperHackEmulator } from "@/architectures/insperHack/system.js"
import { setupBlocklyBlocks } from "@/architectures/insperHack/instructionset5/blocks.js"
import { toolbox } from "@/architectures/insperHack/instructionset5/toolbox.js"
import { InsperHackBlocklyGenerator } from "@/architectures/insperHack/instructionset5/generator.js"
import { InsperHackAssemblyParser } from "@/architectures/insperHack/parser.js"
import { InsperHackCodeFormatter } from "@/architectures/insperHack/formatter.js"

export default {
    name: "insperHack5",
    fileExtension: "asm",
    parser: new InsperHackAssemblyParser(),
    emulator: new InsperHackEmulator(),
    setupBlockBlocks: setupBlocklyBlocks,
    blocklyToolbox: toolbox,
    blocklyGenerator: new InsperHackBlocklyGenerator().generator,
    formatter: new InsperHackCodeFormatter(5, 20, ":", "#"),
}
