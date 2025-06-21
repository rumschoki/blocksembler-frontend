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
                    type: "movi",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
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
                    fields: {
                        operator: "add"
                    }
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
                    fields: {
                        operator: "sub"
                    }
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
                    fields: {
                        operator: "and"
                    }
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
                    fields: {
                        operator: "or"
                    }
                },
                {
                    kind: "block",
                    type: "inc/dec",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "inc",
                    }
                },
                {
                    kind: "block",
                    type: "inc/dec",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "dec",
                    }
                },
                {
                    kind: "block",
                    type: "not/neg",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "not",
                    }
                },
                {
                    kind: "block",
                    type: "not/neg",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "neg",
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
                                type: "%D",
                            },
                        },
                    },    
                    fields: {
                        operand: "je",
                    }                
                },
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },    
                    fields: {
                        operand: "jne",
                    }                
                },
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },    
                    fields: {
                        operand: "jl",
                    }                
                },
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },    
                    fields: {
                        operand: "jg",
                    }                
                },
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },    
                    fields: {
                        operand: "jle",
                    }                
                },
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },    
                    fields: {
                        operand: "jge",
                    }                
                },
                {
                    kind: "block",
                    type: "conditional_label1",
                    // TO-DO: set condition block [ %A=0 ] as default block
                },
                {
                    kind: "block",
                    type: "conditional_label2",
                    // TO-DO: set condition block [ %A=0 ] as default block
                },
            ],
        },
        {
            kind: "category",
            name: "All",
            colour: "345",
            contents: [
                {
                    kind: "label",
                    text: "Registers"
                },
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
                {
                    kind: "label",
                    text: "Operations"
                },
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
                    type: "movi",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
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
                    fields: {
                        operator: "add"
                    }
                },
                {
                    kind: "block",
                    type: "inc/dec",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "inc",
                    }
                },
                {
                    kind: "block",
                    type: "not/neg",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "not",
                    }
                },
                {
                    kind: "block",
                    type: "not/neg",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "neg",
                    }
                },
                {
                    kind: "label",
                    text: "Control Flow / Labels"
                },
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },    
                    fields: {
                        operand: "je",
                    }                
                },
                {
                    kind: "block",
                    type: "conditional_label1",
                    // TO-DO: set condition block [ %A=0 ] as default block
                },
                {
                    kind: "block",
                    type: "conditional_label2",
                    // TO-DO: set condition block [ %A=0 ] as default block
                },
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
    ],
}
