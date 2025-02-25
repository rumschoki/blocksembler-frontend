import Blockly from "blockly"

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        type: "add",
        tooltip: "adds the values of two registers and stores to destination",
        helpUrl: "",
        message0: "%1 %2 %3 %4 %5 %6 %7 %8",
        args0: [
            {
                type: "field_label_serializable",
                text: "add",
                name: "text",
            },
            {
                type: "field_label_serializable",
                text: "%",
                name: "text1",
            },
            {
                type: "field_input",
                name: "param1",
                text: "A",
            },
            {
                type: "field_label_serializable",
                text: "%",
                name: "text2",
            },
            {
                type: "field_input",
                name: "param2",
                text: "D",
            },
            {
                type: "field_label_serializable",
                text: "%",
                name: "text3",
            },
            {
                type: "field_input",
                name: "dest1",
                text: "A",
            },
            {
                type: "input_value",
                name: "add",
            },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 195,
    },
])
