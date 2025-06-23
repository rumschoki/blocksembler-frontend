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
                                type: "(%A)",
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
                    fields: {
                        operator: "add"
                    }
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
                    fields: {
                        operator: "sub"
                    }
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
                    fields: {
                        operator: "and"
                    }
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
                    fields: {
                        operator: "or"
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
                    type: "jmp1",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "je"
                                },
                                inputs: {
                                    register: {
                                        block: {
                                            type: "%A",
                                            fields: {
                                                text: "%A"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                },
                {
                    kind: "block",
                    type: "jmp2",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "je"
                                },
                                inputs: {
                                    register: {
                                        block: {
                                            type: "%A",
                                            fields: {
                                                text: "%A"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                },
                {
                    kind: "block",
                    type: "jmp3",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "je"
                                },
                                inputs: {
                                    register: {
                                        block: {
                                            type: "%A",
                                            fields: {
                                                text: "%A"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                },
                {
                    kind: "label",
                    text: "Conditional Jump"
                },
                {
                    kind: "block",
                    type: "jump1",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "jl"
                                },
                                inputs: {
                                    register: {
                                         shadow: {
                                type: "%D",
                            },
                                    }
                                }
                            }
                        }
                    } 
                },
                {
                    kind: "block",
                    type: "jump2",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "jl"
                                },
                                inputs: {
                                    register: {
                                         shadow: {
                                type: "%D",
                            },
                                    }
                                }
                            }
                        }
                    } 
                },
                {
                    kind: "block",
                    type: "jump3",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "jl"
                                },
                                inputs: {
                                    register: {
                                         shadow: {
                                type: "%D",
                            },
                                    }
                                }
                            }
                        }
                    } 
                },
                {
                    kind: "label",
                    text: "Conditions"
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
                        operand: "jge",
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
                    type: "(%A)",
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
                    type: "jmp1",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "je"
                                },
                                inputs: {
                                    register: {
                                        block: {
                                            type: "%A",
                                            fields: {
                                                text: "%A"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                },
                {
                    kind: "block",
                    type: "jmp2",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "je"
                                },
                                inputs: {
                                    register: {
                                        block: {
                                            type: "%A",
                                            fields: {
                                                text: "%A"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                },
                {
                    kind: "block",
                    type: "jmp3",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "je"
                                },
                                inputs: {
                                    register: {
                                        block: {
                                            type: "%A",
                                            fields: {
                                                text: "%A"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                },
                {
                    kind: "label",
                    text: "Conditional Jump"
                },
                {
                    kind: "block",
                    type: "jump1",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "jl"
                                },
                                inputs: {
                                    register: {
                                         shadow: {
                                type: "%D",
                            },
                                    }
                                }
                            }
                        }
                    } 
                },
                {
                    kind: "block",
                    type: "jump2",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "jl"
                                },
                                inputs: {
                                    register: {
                                         shadow: {
                                type: "%D",
                            },
                                    }
                                }
                            }
                        }
                    } 
                },
                {
                    kind: "block",
                    type: "jump3",
                    inputs: {
                        condition: {
                            block: {
                                type: "condition",
                                fields: {
                                    operand: "jl"
                                },
                                inputs: {
                                    register: {
                                         shadow: {
                                type: "%D",
                            },
                                    }
                                }
                            }
                        }
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
