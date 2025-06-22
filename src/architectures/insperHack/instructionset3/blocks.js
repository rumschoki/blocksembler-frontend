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
            message0: "(%A)",
            output: "register",
            colour: 100,
            tooltip: "register M",
            helpUrl: "",
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
            colour: 75,
            inputsInline: true,
        },
        {
            "type": "movi",
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
            "type": "store",
            "tooltip": "store operations between two registers to destinations",
            "helpUrl": "",
            "message0": "store %1 %2 %3 %4 to %5 , %6 , %7 %8",
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
                        "&&",
                        "and"
                        ],
                        [
                        "||",
                        "or"
                        ]
                    ]
                },
                {
                "type": "input_dummy",
                "name": "operator"
                },
                {
                "type": "input_value",
                "name": "reg2"
                },
                {
                    "type": "field_dropdown",
                    "name": "reg3",
                    "options": [
                        [
                        "%A",
                        "%A"
                        ],
                        [
                        "%D",
                        "%D"
                        ],
                        [
                        "(%A)",
                        "(%A)"
                        ],
                        [
                        "none",
                        "none"
                        ]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "reg4",
                    "options": [
                        [
                        "none",
                        "none"
                        ],
                        [
                        "%A",
                        "%A"
                        ],
                        [
                        "%D",
                        "%D"
                        ],
                        [
                        "(%A)",
                        "(%A)"
                        ]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "reg5",
                    "options": [
                        [
                        "none",
                        "none"
                        ],
                        [
                        "%A",
                        "%A"
                        ],
                        [
                        "%D",
                        "%D"
                        ],
                        [
                        "(%A)",
                        "(%A)"
                        ]
                    ]
                },
                {
                "type": "input_dummy",
                "name": "dests"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 195,
            "inputsInline": true
        },
                    

        {
            type: "inc/dec",
            tooltip: "increments/decrements register and stores result to itself",
            helpUrl: "",
            message0: "store %1 %2",
            args0: [
                {
                    type: "input_value",
                    name: "reg1",
                },
                {
                    "type": "field_dropdown",
                    "name": "operator",
                    "options": [
                        [
                        "++",
                        "inc"
                        ],
                        [
                        "--",
                        "dec"
                        ],
                    ]
                },
            ],
            previousStatement: null,
            nextStatement: null,
            colour: 195,
            inputsInline: true,
        },

        {
            "type": "not/neg",
            "tooltip": "increments/decrements register and stores result to itself",
            "helpUrl": "",
            "message0": "store %1 %2 %3",
            "args0": [
                {
                "type": "field_dropdown",
                "name": "operator",
                "options": [
                    [
                    "!",
                    "not"
                    ],
                    [
                    "-",
                    "neg"
                    ]
                ]
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
            "type": "conditional_label1",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 repeat %2 if %3 %4",
            "args0": [
                {
                "type": "input_statement",
                "name": "instructions"
                },
                {
                "type": "field_input",
                "name": "label",
                "text": "THIS"
                },
                {
                "type": "input_dummy",
                "name": "label"
                },
                {
                "type": "input_value",
                "name": "condition"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 285,
            "inputsInline": true
        },

        {
            "type": "conditional_label2",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 while %2 %3 section %4",
            "args0": [
                {
                "type": "input_statement",
                "name": "instructions"
                },
                {
                "type": "input_value",
                "name": "condition"
                },
                {
                "type": "field_input",
                "name": "label",
                "text": "REPEAT"
                },
                {
                "type": "input_dummy",
                "name": "label"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 285,
            "inputsInline": true
        },

        {
            "type": "conditional_label3",
            "tooltip": "",
            "helpUrl": "",
            "message0": "do %1 %2 while %3 %4",
            "args0": [
                {
                "type": "field_input",
                "name": "label",
                "text": "THIS"
                },
                {
                "type": "input_statement",
                "name": "instructions"
                },
                {
                "type": "input_value",
                "name": "condition"
                },
                {
                "type": "input_dummy",
                "name": "label"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 285,
            "inputsInline": true
        },

        {
            "type": "conditional_label4",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2 while %3 repeat section %4",
            "args0": [
                {
                "type": "field_input",
                "name": "label",
                "text": "NAME"
                },
                {
                "type": "input_statement",
                "name": "instructions"
                },
                {
                "type": "input_value",
                "name": "condition"
                },
                {
                "type": "input_dummy",
                "name": "label"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 285,
            "inputsInline": true
        },

        {
            "type": "conditional_label5",
            "tooltip": "",
            "helpUrl": "",
            "message0": "%1 %2 if %3 repeat section %4",
            "args0": [
                {
                "type": "field_input",
                "name": "label",
                "text": "NAME"
                },
                {
                "type": "input_statement",
                "name": "instructions"
                },
                {
                "type": "input_value",
                "name": "condition"
                },
                {
                "type": "input_dummy",
                "name": "label"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 285,
            "inputsInline": true
        },

        {
            "type": "label1",
            "tooltip": "insert the name for this line in your porgramm",
            "helpUrl": "",
            "message0": "label %1 %2",
            "args0": [
                {
                "type": "field_input",
                "name": "label",
                "text": "NAME"
                },
                {
                "type": "input_dummy",
                "name": "label"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 285,
            "inputsInline": true
        },

        {
            "type": "jump1",
            "tooltip": "",
            "helpUrl": "",
            "message0": "if %1 then jump to label %2 %3",
            "args0": [
                {
                "type": "input_value",
                "name": "condition"
                },
                {
                "type": "field_input",
                "name": "label",
                "text": "NAME"
                },
                {
                "type": "input_end_row",
                "name": "label"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 285,
            "inputsInline": true
        },
                    

        {
            "type": "comment1",
            "tooltip": "",
            "helpUrl": "",
            "message0": "// %1 %2",
            "args0": [
                {
                "type": "field_input",
                "name": "text",
                "text": "comment"
                },
                {
                "type": "input_end_row",
                "name": "NAME"
                }
            ],
            "colour": 30,
            "inputsInline": true
        },
                                           
    ])
