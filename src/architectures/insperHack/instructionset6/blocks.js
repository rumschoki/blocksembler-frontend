import * as Blockly from "blockly"

//Blockly.utils.colour.setHsvSaturation(0.45) // 0 (inclusive) to 1 (exclusive), defaulting to 0.45
//Blockly.utils.colour.setHsvValue(0.65) // 0 (inclusive) to 1 (exclusive), defaulting to 0.65

export const setupBlocklyBlocks = () =>
    Blockly.common.defineBlocksWithJsonArray([
        {
            type: "start",
            message0: "start",
            nextStatement: "",
            colour: 800,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "halt",
            message0: "halt",
            previousStatement: ["instruction", "label"],
            nextStatement: ["instruction"],
            colour: 800,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "nop",
            message0: "nop",
            previousStatement: null,
            nextStatement: null,
            colour: 999,
            tooltip: "gives the cpu time to do the jump operation",
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
            colour: 345,
            tooltip: "outputs given register",
            helpUrl: "",
        },

        {
            type: "%A",
            message0: "%A",
            output: "register",
            colour: 104,
            tooltip: "register A",
            helpUrl: "",
        },
        {
            type: "%D",
            message0: "%D",
            output: "register",
            colour: 104,
            tooltip: "register D",
            helpUrl: "",
        },
        {
            type: "(%A)",
            message0: "RAM[A]",
            output: "register",
            colour: 160,
            tooltip: "RAM[A] is the value stored in the RAM at address stored in register %A",
            helpUrl: "",
        },

        {
            "type": "lea",
            "tooltip": "load constant into register",
            "helpUrl": "",
            "message0": "load address %1 %2 into %3",
            "args0": [
                {
                "type": "field_input",
                "name": "constant",
                "text": "0"
                },
                {
                "type": "input_dummy",
                "name": "operator"
                },
                {
                "type": "input_value",
                "name": "reg1"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 22,
            "inputsInline": true
        },
                    
        {
            type: "mov",
            tooltip: "copy value of register into destination",
            helpUrl: "",
            message0: "copy %1 %2 into %3",
            args0: [
                {
                "type": "input_value",
                "name": "reg1"
                },
                {
                "type": "input_dummy",
                "name": "operator"
                },
                {
                "type": "input_value",
                "name": "reg2"
                }
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 224,
            inputsInline: true,
        },

        {
            type: "mov_address",
            tooltip: "copy address into register",
            helpUrl: "",
            message0: "copy address %1 %2 into %3",
            args0: [
                {
                "type": "field_input",
                "name": "value"
                },
                {
                "type": "input_dummy",
                "name": "operator"
                },
                {
                "type": "input_value",
                "name": "reg2"
                }
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 224,
            inputsInline: true,
        },

        {
            "type": "twoOp",
            "tooltip": "does operation on first two registers and stores to given destination registers",
            "helpUrl": "",
            "message0": "%1 %2 %3 --> %4 %5 %6",
            "args0": [
                {
                "type": "input_value",
                "name": "reg1"
                },
                {
                "type": "field_dropdown",
                "name": "operator",
                "options": [
                    [
                    "+",
                    "add"
                    ],
                    [
                    "-",
                    "sub"
                    ],
                    [
                    "and",
                    "and"
                    ],
                    [
                    "or",
                    "or"
                    ]
                ]
                },
                {
                "type": "input_value",
                "name": "reg2"
                },
                {
                "type": "input_value",
                "name": "reg3"
                },
                {
                "type": "input_value",
                "name": "reg4"
                },
                {
                "type": "input_value",
                "name": "reg5"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 195,
            "inputsInline": true
        },    
        
        {
            "type": "oneOp",
            "tooltip": "does operation on register and stores to itself",
            "helpUrl": "",
            "message0": "%1 %2",
            "args0": [
                {
                "type": "field_dropdown",
                "name": "operator",
                "options": [
                    [
                    "inc",
                    "inc"
                    ],
                    [
                    "dec",
                    "dec"
                    ],
                    [
                    "neg",
                    "neg"
                    ],
                    [
                    "not",
                    "not"
                    ]
                ]
                },
                {
                "type": "input_value",
                "name": "reg1"
                },
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 50,
            "inputsInline": true
        }, 

        {
            type: "condition",
            tooltip: "",
            helpUrl: "",
            message0: "%1 %2 %3 0 %4",
            args0: [
                {
                    type: "input_dummy",
                    name: "condition"
                },
                {
                    type: "input_value",
                    name: "register",
                },
                {
                "type": "field_dropdown",
                "name": "operand",
                "options": [
                    [
                    "=",
                    "je"
                    ],
                    [
                    "!=",
                    "jne"
                    ],
                    [
                    "<",
                    "jl"
                    ],
                    [
                    ">",
                    "jg"
                    ],
                    [
                    "<=",
                    "jle"
                    ],
                    [
                    ">=",
                    "jge"
                    ],
                ]
                },
                {
                    type: "input_end_row",
                    name: "text2",
                },
            ],
            output: null,
            colour: 256,
            inputsInline: true,
        },

        {
            "type": "label",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2 %3 repeat if %4",
            "args0": [
                {
                "type": "field_input",
                "name": "label",
                "text": "LOOP"
                },
                {
                "type": "input_value",
                "name": "NAME"
                },
                {
                "type": "input_statement",
                "name": "instructions"
                },
                {
                "type": "input_value",
                "name": "condition"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 289,
            "inputsInline": false
        },

        {
            "type": "jump",
            "tooltip": "jumps to address stored in %A",
            "helpUrl": "",
            "message0": "%1 %2 %3 repeat",
            "args0": [
                {
                "type": "field_input",
                "name": "label",
                "text": "LOOP"
                },
                {
                "type": "input_value",
                "name": "NAME"
                },
                {
                "type": "input_statement",
                "name": "instructions"
                },
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 289,
            "inputsInline": false
        },


        {
            type: "label_statement",
            tooltip: "give the section a name e.g. VAR",
            helpUrl: "",
            message0: "%1 %2",
            args0: [
                {
                    type: "field_input",
                    name: "label",
                    text: "SET X",
                },
                {
                    type: "input_statement",
                    name: "instructions"
                },
            ],
            "previousStatement": null,
            "nextStatement": null,
            colour: 289,
            inputsInline: true,
        },
        {
            type: "comment_statement",
            tooltip: "describe this section",
            helpUrl: "",
            message0: "; %1 %2 %3",
            args0: [
                {
                    type: "field_input",
                    name: "label",
                    text: "TO-DO: something great",
                },
                {
                "type": "input_end_row",
                "name": "label"
                },
                {
                    type: "input_statement",
                    name: "instructions"
                },
            ],
            "previousStatement": null,
            "nextStatement": null,
            colour: 999,
            inputsInline: true,
        },

        {
            "type": "comment",
            "tooltip": "write a comment about this section",
            "helpUrl": "",
            "message0": "; %1 %2",
            "args0": [
                {
                "type": "field_input",
                "name": "comment",
                "text": "comment"
                },
                {
                "type": "input_dummy",
                "name": "comment"
                },
            ],
            "output": null,
            "colour": 999,
            "inputsInline": true
        },

    ])
