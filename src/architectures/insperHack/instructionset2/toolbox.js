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
                    type: "add",
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
                    }
                },
                {
                    kind: "block",
                    type: "sub",
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
                    }
                },
                {
                    kind: "block",
                    type: "and",
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
                    }
                },
                {
                    kind: "block",
                    type: "or",
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
                    }
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
                    
                },
                {
                    kind: "block",
                    type: "cond_label",
                    inputs: {
                        // TO-DO: set condition block [ %A=0 ] as default block
                    },
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
