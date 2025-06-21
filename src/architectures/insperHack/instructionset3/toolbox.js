export const toolbox = {
    kind: "categoryToolbox",
    contents: [
        {
            kind: "category",
            name: "Registers",
            colour: "100",
            contents: [
                {
                    kind: "block",
                    type: "%A",
                },
                {
                    kind: "block",
                    type: "%D",
                },
                {
                    kind: "block",
                    type: "(%A)",
                },
            ],
        },
        {
            kind: "category",
            name: "Operations",
            colour: "195",
            contents: [
                {
                    kind: "block",
                    type: "lea",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                },
                {
                    kind: "block",
                    type: "mov",
                    inputs: {
                        value: {
                            shadow: {
                                type: "%A",
                            },
                        },
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                },
                {
                    kind: "block",
                    type: "store",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                        reg2: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                },
                {
                    kind: "block",
                    type: "inc",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    }
                },
                {
                    kind: "block",
                    type: "dec",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    }
                },
                {
                    kind: "block",
                    type: "neg",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    }
                },
                {
                    kind: "block",
                    type: "not",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    }
                },
            ],
        },
        {
            kind: "category",
            name: "Control flow",
            colour: "45",
            contents: [
                {
                    kind: "block",
                    type: "start",
                },
                {
                    kind: "block",
                    type: "out",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    }
                    
                },
                {
                    kind: "block",
                    type: "halt",
                },
            ],
        },
        {
            kind: "category",
            name: "Label",
            colour: "285",
            contents: [
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },    
                    fields: {
                        operand: "=",
                    }                
                },
                {
                    kind: "block",
                    type: "cond_label",
                    inputs: {
                        // TO-DO: set condition block [ %A=0 ] as default block
                        condition: {
                            type: "condition",              
                        },     
                        
                    },
                    fields: {
                        "name": "LABEL",
                    }
                },
                {
                    kind: "block",
                    type: "label",
                },
                {
                    kind: "block",
                    type: "do_if",
                },
                {
                    kind: "block",
                    type: "if_do",
                },
            ],
        },
    ],
}
