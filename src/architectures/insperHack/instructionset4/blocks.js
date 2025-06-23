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
            type: "memory",
            message0: "memory",
            output: "register",
            colour: 100,
            tooltip: "memory",
            helpUrl: "",
        },

        {
            "type": "lea",
            "tooltip": "load constant into register",
            "helpUrl": "",
            "message0": "lea %1 %2 in %3",
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
            "colour": 75,
            "inputsInline": true
        },
                    
        {
            type: "mov",
            tooltip: "copy value to destination",
            helpUrl: "",
            message0: "mov %1 %2 to %3",
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
            colour: 225,
            inputsInline: true,
        },

        {
            "type": "twoOp",
            "tooltip": "does operation on first two registers and stores to given destination registers",
            "helpUrl": "",
            "message0": "%1 %2 %3 --> %4 %5 %6",
            "args0": [
                {
                "type": "field_dropdown",
                "name": "operator",
                "options": [
                    [
                    "add",
                    "add"
                    ],
                    [
                    "sub",
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
                "name": "reg1"
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
            "colour": 195,
            "inputsInline": true
        }, 

        {
            "type": "jmp",
            "tooltip": "",
            "helpUrl": "",
            "message0": "jmp %1 %2 ||| %3",
            "args0": [
                {
                "type": "input_dummy",
                "name": "operator"
                },
                {
                "type": "input_value",
                "name": "reg1"
                },
                {
                    type: "field_input",
                    name: "label",
                    text: "LABEL",
                },
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 315,
            "inputsInline": true
        },

        {
            "type": "label",
            "tooltip": "",
            "helpUrl": "",
            "message0": "||| %1 %2",
            "args0": [
                {
                    type: "field_input",
                    name: "label",
                    text: "LABEL",
                },
                {
                "type": "input_dummy",
                "name": "label"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 315,
            "inputsInline": true
        },
        {
            "type": "jump",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2 ||| %3",
            "args0": [
                {
                "type": "field_dropdown",
                "name": "operator",
                "options": [
                    [
                    "je",
                    "je"
                    ],
                    [
                    "jne",
                    "jne"
                    ],
                    [
                    "jl",
                    "jl"
                    ],
                    [
                    "jle",
                    "jle"
                    ],
                    [
                    "jg",
                    "jg"
                    ],
                    [
                    "jge",
                    "jge"
                    ]
                ]
                },
                {
                "type": "input_value",
                "name": "reg1"
                },
                {
                    type: "field_input",
                    name: "label",
                    text: "LABEL",
                },
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 315,
            "inputsInline": true
        },
    ])
