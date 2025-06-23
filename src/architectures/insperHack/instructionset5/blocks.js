import * as Blockly from "blockly"

export const setupBlocklyBlocks = () =>
    Blockly.common.defineBlocksWithJsonArray([
        {
            type: "start",
            message0: "start",
            nextStatement: "",
            colour: 345,
            tooltip: "",
            helpUrl: "",
        },
        {
            type: "halt",
            message0: "halt",
            previousStatement: ["instruction", "label"],
            nextStatement: ["instruction"],
            colour: 345,
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
            type: "(%A)",
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
            "message0": "load %1 %2 into %3",
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
            "colour": 195,
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
            colour: 250,
            inputsInline: true,
        },

        {
            "type": "jmp1",
            "tooltip": "",
            "helpUrl": "",
            "message0": "if %1 jump to %2",
            "args0": [
                {
                "type": "input_value",
                "name": "condition"
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
            "type": "jmp2",
            "tooltip": "",
            "helpUrl": "",
            "message0": "if %1 go to line %2",
            "args0": [
                {
                "type": "input_value",
                "name": "condition"
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
            "type": "jmp3",
            "tooltip": "",
            "helpUrl": "",
            "message0": "if %1 repeat from %2",
            "args0": [
                {
                "type": "input_value",
                "name": "condition"
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
            "message0": "%1 %2",
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
            "type": "jump1",
            "tooltip": "",
            "helpUrl": "",
            "message0": "if %1 jump to %2",
            "args0": [
                
                {
                "type": "input_value",
                "name": "condition"
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
            "type": "jump2",
            "tooltip": "",
            "helpUrl": "",
            "message0": "if %1 go to line %2",
            "args0": [
                
                {
                "type": "input_value",
                "name": "condition"
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
            "type": "jump3",
            "tooltip": "",
            "helpUrl": "",
            "message0": "if %1 repeat from %2",
            "args0": [
                
                {
                "type": "input_value",
                "name": "condition"
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
