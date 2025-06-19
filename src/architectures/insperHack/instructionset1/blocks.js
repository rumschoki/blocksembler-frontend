import * as Blockly from "blockly"

export const setupBlocklyBlocks = () =>
    Blockly.common.defineBlocksWithJsonArray([
        {
            type: "start",
            message0: "start",
            nextStatement: "",
            colour: 0,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "halt",
            message0: "halt",
            previousStatement: ["instruction", "label"],
            nextStatement: ["instruction"],
            colour: 0,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "out",
            message0: "output %1",
            args0: [
                {
                    type: "input_value",
                    name: "register",
                    check: "register",
                },
            ],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: 45,
            tooltip: "outputs given register",
            helpUrl: "",
        },
        {
            type: "store",
            tooltip: "stores the operation of two registers to destination registers",
            helpUrl: "",
            message0: "store %1 %2 %3 %4 to registers %5, %6, %7",
            args0: [
                {
                    type: "input_dummy",
                },
                {
                    type: "input_value",
                    name: "register1",
                    check: "register",
                },
                {
                    type: "field_input",
                    name: "operation",
                    text: "operator",
                },
                {
                    type: "input_value",
                    name: "register2",
                    check: "register",
                },
                {
                    type: "input_value",
                    name: "register3",
                    check: "register",
                },
                {
                    type: "input_value",
                    name: "register4",
                    check: "register",
                },
                {
                    type: "input_value",
                    name: "register5",
                    check: "register",
                },
            ],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: 195,
        },

        {
            type: "inc",
            tooltip: "increments register",
            helpUrl: "",
            message0: "store %1 %2 %3",
            args0: [
                {
                    type: "input_dummy",
                },
                {
                    type: "input_value",
                    name: "register1",
                    check: "register",
                },
                {
                    type: "field_input",
                    name: "operation",
                    text: "++",
                },
            ],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: 195,
        },
        {
            type: "dec",
            tooltip: "decrements register",
            helpUrl: "",
            message0: "store %1 %2 %3",
            args0: [
                {
                    type: "input_dummy",
                },
                {
                    type: "input_value",
                    name: "register1",
                    check: "register",
                },
                {
                    type: "field_input",
                    name: "operation",
                    text: "--",
                },
            ],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: 195,
        },
        {
            type: "neg",
            tooltip: "negates register",
            helpUrl: "",
            message0: "store %1 %2 %3",
            args0: [
                {
                    type: "input_dummy",
                },
                {
                    type: "field_input",
                    name: "operation",
                    text: "-",
                },
                {
                    type: "input_value",
                    name: "register1",
                    check: "register",
                },
            ],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: 195,
        },
        {
            type: "not",
            tooltip: "inverts register",
            helpUrl: "",
            message0: "store %1 %2 %3",
            args0: [
                {
                    type: "input_dummy",
                },
                {
                    type: "field_input",
                    name: "operation",
                    text: "!",
                },
                {
                    type: "input_value",
                    name: "register1",
                    check: "register",
                },
            ],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: 195,
        },
        {
            type: "lea",
            tooltip: "loads address/value into register %A",
            helpUrl: "",
            message0: "load %1 %2 %3 into %4",
            args0: [
                {
                    type: "input_dummy",
                    name: "text1",
                },
                {
                    type: "field_input",
                    name: "constant",
                    text: "0",
                },
                {
                    type: "input_dummy",
                    name: "constant",
                },
                {
                    type: "input_value",
                    name: "register",
                },
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 225,
            inputsInline: true,
        },
        {
            type: "mov",
            tooltip: "copy value to destination",
            helpUrl: "",
            message0: "copy %1 %2 into %3",
            args0: [
                {
                    type: "input_dummy",
                    name: "text1",
                },
                {
                    type: "input_value",
                    name: "value",
                },
                {
                    type: "input_value",
                    name: "register",
                },
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 225,
            inputsInline: true,
        },

        {
            type: "%A",
            message0: "%A",
            output: "register",
            colour: 100,
            tooltip: "register A",
            helpUrl: "",
        },
        {
            type: "%D",
            message0: "%D",
            output: "register",
            colour: 100,
            tooltip: "register D",
            helpUrl: "",
        },
        {
            type: "(%A)",
            message0: "(%A)",
            output: "register",
            colour: 100,
            tooltip: "register M",
            helpUrl: "",
        },

        {
            type: "condition",
            tooltip: "",
            helpUrl: "",
            message0: "%1 %2 %3 0 %4",
            args0: [
                {
                    type: "input_dummy",
                },
                {
                    type: "input_value",
                    name: "register",
                },
                {
                    type: "field_input",
                    name: "operand",
                    text: "=",
                },
                {
                    type: "input_end_row",
                    name: "text2",
                },
            ],
            output: null,
            colour: 250,
            inputsInline: true,
        },

        {
            type: "cond_label",
            tooltip: "defines a specific section of the code; the label defines the entry point",
            helpUrl: "",
            message0: "repeat %1 while %2 %3",
            args0: [
                {
                    type: "field_input",
                    name: "name",
                    text: "LABEL",
                },
                {
                    type: "input_value",
                    name: "blocks",
                    align: "CENTRE",
                },
                {
                    type: "input_statement",
                    name: "condition",
                },
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 285,
            inputsInline: true,
        },

        {
            type: "label",
            tooltip: "jump to address stored in %A if %A equals 0",
            helpUrl: "",
            message0: "%1 %2 pointer jumps to location stored in %A %3 repeat section if %A is 0 %4",
            args0: [
                {
                    type: "field_input",
                    name: "name",
                    text: "LABEL",
                },
                {
                    type: "input_statement",
                    name: "blocks",
                },
                {
                    type: "input_end_row",
                    name: "condition",
                },
                {
                    type: "input_end_row",
                    name: "jump",
                },
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 285,
            inputsInline: true,
        },

        {
            type: "do_if",
            tooltip: "jump to address stored in %A and do instructions if condition is true",
            helpUrl: "",
            message0: "do %1 if %2 %3",
            args0: [
                {
                    type: "field_input",
                    name: "name",
                    text: "BLOCKS",
                },
                {
                    type: "input_value",
                    name: "blocks",
                    align: "CENTRE",
                },
                {
                    type: "input_statement",
                    name: "condition",
                },
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 285,
            inputsInline: true,
        },

        {
            type: "if_do",
            tooltip: "sum of register 1 and two is stored in destination registers",
            helpUrl: "",
            message0: "if %1 then do %2 %3 %4",
            args0: [
                {
                    type: "input_value",
                    name: "condition",
                    align: "CENTRE",
                },
                {
                    type: "field_input",
                    name: "name",
                    text: "THIS",
                },
                {
                    type: "input_end_row",
                    name: "label",
                    align: "CENTRE",
                },
                {
                    type: "input_statement",
                    name: "blocks",
                },
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 285,
            inputsInline: true,
        },
    ])
