import {BaseParser} from "@/architectures/parser.js";
import {InsperHackInstructionFactory} from "@/architectures/insperHack/instructions.js";

export class InsperHackAssemblyParser extends BaseParser {
    constructor() {
        super(new InsperHackInstructionFactory(), "#", " ", ":");
    }

    isLabelReference(arg) {
        return arg.startsWith('&')
    }

    labelReferenceToName(arg) {
        return arg.slice(1);
    }

    labelToVal(labelAddress, instructionAddress) {
        return labelAddress - instructionAddress - 1;
    }
}
