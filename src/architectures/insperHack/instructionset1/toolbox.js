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
                                type: "%D"
                            }
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
                                type: "%A"
                            }
                        },
                    }
                },
                {
                    kind: "block",
                    type: "cond_label",
                    inputs: {
                        // TO-DO: set condition block [ %A=0 ] as default block
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
