import anna from "@/architectures/anna/plugin.js"
import armlet from "@/architectures/armlet/plugin.js"
import simpleRISC from "@/architectures/simpleRISC/plugin.js"
import insperHack1 from "@/architectures/insperHack/instructionset1/plugin.js"

const plugins = [anna, armlet, simpleRISC, insperHack1]

export const pluginRegistry = plugins.reduce((registry, plugin) => {
    registry[plugin.name] = plugin
    return registry
}, {})
