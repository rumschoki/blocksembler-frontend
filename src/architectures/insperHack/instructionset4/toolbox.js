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
                    type: "memory",
                },
            ],
        },
        {
            kind: "category",
            name: "Operations",
            colour: "195",
            contents: [
                {
                    kind: "label",
                    text: "Load / Copy Address"
                },
                {
                    kind: "block",
                    type: "lea",
                    inputs: {
                        reg1: {
                            block: {
                                type: "%A",
                                fields: {
                                    text: "%A"
                                }
                            }
                        },
                    },
                },
                {
                    kind: "block",
                    type: "lea",
                    inputs: {
                        reg1: {
                            block: {
                                type: "%D",
                                fields: {
                                    text: "%D"
                                }
                            }
                        },
                    },
                },
                {
                    kind: "block",
                    type: "lea",
                    inputs: {
                        reg1: {
                            block: {
                                type: "memory",
                                fields: {
                                    text: "memory"
                                }
                            }
                        },
                    },
                },
                {
                    kind: "block",
                    type: "mov",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                        reg2: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                },
                {
                    kind: "label",
                    text: "Arithmetic Instructions"
                },
                {
                    kind: "block",
                    type: "twoOp",
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
                        reg3: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                },   
                {
                    kind: "block",
                    type: "oneOp",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "inc"
                    }
                },      
                {
                    kind: "block",
                    type: "oneOp",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "dec"
                    }
                },  
                {
                    kind: "block",
                    type: "oneOp",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "neg"
                    }
                },  
                {
                    kind: "block",
                    type: "oneOp",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "not"
                    }
                },  
            ],
        },

        {
            kind: "category",
            name: "Jumps/Labels",
            colour: "315",
            contents: [
                {
                    kind: "label",
                    text: "Label"
                },
                {
                    kind: "block",
                    type: "label",
                },
                {
                    kind: "label",
                    text: "Unconditional Jump"
                },
                {
                    kind: "block",
                    type: "jmp",
                    inputs: {
                        reg1: {
                            block: {
                                type: "%A",
                                fields: {
                                    text: "%A"
                                }
                            }
                        },
                    },
                    
                },
                {
                    kind: "label",
                    text: "Conditional Jump"
                },
                {
                    kind: "block",
                    type: "jump",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                    fields: {
                        operator: "je"
                    }
                    
                },
                {
                    kind: "block",
                    type: "jump",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                    fields: {
                        operator: "jne"
                    }
                    
                },
                {
                    kind: "block",
                    type: "jump",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                    fields: {
                        operator: "jl"
                    }
                    
                },
                {
                    kind: "block",
                    type: "jump",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                    fields: {
                        operator: "jle"
                    }
                    
                },
                {
                    kind: "block",
                    type: "jump",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                    fields: {
                        operator: "jg"
                    }
                    
                },
                {
                    kind: "block",
                    type: "jump",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                    fields: {
                        operator: "jge"
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
            name: "Overview",
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
                    type: "memory",
                },
                {
                    kind: "label",
                    text: "Load / Copy Address"
                },
                {
                    kind: "block",
                    type: "lea",
                    inputs: {
                        reg1: {
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
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                        reg2: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                },
                {
                    kind: "label",
                    text: "Arithmetic Operations"
                },
                {
                    kind: "block",
                    type: "twoOp",
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
                        reg3: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                },       
                {
                    kind: "block",
                    type: "oneOp",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%A",
                            },
                        },
                    },
                    fields: {
                        operator: "inc"
                    }
                },       
                {
                    kind: "label",
                    text: "Label"
                },
                {
                    kind: "block",
                    type: "label",
                },
                {
                    kind: "label",
                    text: "Unconditional Jump"
                },
                {
                    kind: "block",
                    type: "jmp",
                    inputs: {
                        reg1: {
                            block: {
                                type: "%A",
                                fields: {
                                    text: "%A"
                                }
                            }
                        },
                    },
                    
                },
                {
                    kind: "label",
                    text: "Conditional Jump"
                },
                {
                    kind: "block",
                    type: "jump",
                    inputs: {
                        reg1: {
                            shadow: {
                                type: "%D",
                            },
                        },
                    },
                    fields: {
                        operator: "je"
                    }
                    
                },
                {
                    kind: "label",
                    text: "Control Flow"
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
