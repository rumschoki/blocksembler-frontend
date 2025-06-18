export const toolbox = {
    kind: "categoryToolbox",
    contents: [

        {
            kind: "category",
            name: "Instruction Set 1",
            colour: "195",
            contents: [
                {
                    kind: "block",
                    type: "start",
                },
                {
                    kind: "block",
                    type: "halt",
                },
                {
                    kind: "block",
                    type: "out",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%D"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "store",
                    inputs: {
                        register1: {
                            shadow: {
                                type: "%A"
                            }
                        },
                        register2: {
                            shadow: {
                                type: "%A"
                            }
                        },
                        register3: {
                            shadow: {
                                type: "%A"
                            }
                        },
                        register4: {
                            shadow: {
                                type: "%A"
                            }
                        },
                        register5: {
                            shadow: {
                                type: "%A"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "inc",
                    inputs: {
                        register1: {
                            shadow: {
                                type: "%A"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "dec",
                    inputs: {
                        register1: {
                            shadow: {
                                type: "%A"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "neg",
                    inputs: {
                        register1: {
                            shadow: {
                                type: "%A"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "not",
                    inputs: {
                        register1: {
                            shadow: {
                                type: "%A"
                            }
                        },
                    }
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
                    kind: "block",
                    type: "lea",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%A"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "mov",
                    inputs: {
                        value: {
                            shadow: {
                                type: "%A"
                            }
                        },
                        register: {
                            shadow: {
                                type: "%D"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "condition",
                    inputs: {
                        register: {
                            shadow: {
                                type: "%A"
                            }
                        },
                    }
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
                    type: "cond_label",
                    inputs: {
                        
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
