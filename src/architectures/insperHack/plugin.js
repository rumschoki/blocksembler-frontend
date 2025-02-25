import { InsperHackEmulator } from "@/architectures/insperHack/system.js"
import { setupBlocklyBlocks } from "@/architectures/insperHack/blocks.js"
import { toolbox } from "@/architectures/insperHack/toolbox.js"
import { InsperHackBlocklyGenerator } from "@/architectures/insperHack/generator.js"
import { InsperHackAssemblyParser } from "@/architectures/insperHack/parser.js"
import { InsperHackCodeFormatter } from "@/architectures/insperHack/formatter.js"

export default {
    name: "insperHack",
    fileExtension: "asm",
    parser: new InsperHackAssemblyParser(),
    emulator: new InsperHackEmulator(),
    setupBlockBlocks: setupBlocklyBlocks,
    blocklyToolbox: toolbox,
    blocklyGenerator: new InsperHackBlocklyGenerator().generator,
    formatter: new InsperHackCodeFormatter(5, 20, ":", "#"),
}
