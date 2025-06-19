import anna from "@/architectures/anna/plugin.js"
import armlet from "@/architectures/armlet/plugin.js"
import simpleRISC from "@/architectures/simpleRISC/plugin.js"
import insperHack1 from "@/architectures/insperHack/instructionset1/plugin.js"
import insperHack2 from "@/architectures/insperHack/instructionset2/plugin.js"

const plugins = [anna, armlet, simpleRISC, insperHack1, insperHack2]

export const pluginRegistry = plugins.reduce((registry, plugin) => {
    registry[plugin.name] = plugin
    return registry
}, {})
