export const toolbox = {
    kind: "categoryToolbox",
    contents: [
        {
            kind: "category",
            name: "Control Flow",
            colour: "240",
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
                    type: "bez",
                    inputs: {
                        rd: {
                            shadow: {
                                type: "r0",
                            },
                        },
                        label: {
                            shadow: {
                                type: "label",
                            },
                        },
                    },
                },
                {
                    kind: "block",
                    type: "bgz",
                    inputs: {
                        rd: {
                            shadow: {
                                type: "r0",
                            },
                        },
                        label: {
                            shadow: {
                                type: "label",
                            },
                        },
                    },
                },
                {
                    kind: "block",
                    type: "jalr",
                    inputs: {
                        rs: {
                            shadow: {
                                type: "r7",
                            },
                        },
                        label: {
                            shadow: {
                                type: "label",
                            },
                        },
                    },
                },
                {
                    kind: "block",
                    type: "labelDef",
                },
                {
                    kind: "block",
                    type: "label",
                },
            ],
        },
    ],
}
