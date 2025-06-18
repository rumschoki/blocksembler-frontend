import anna from "@/architectures/anna/plugin.js"
import armlet from "@/architectures/armlet/plugin.js"
import simpleRISC from "@/architectures/simpleRISC/plugin.js"
import insperHack from "@/architectures/insperHack/plugin.js"

const plugins = [anna, armlet, simpleRISC, insperHack]

export const pluginRegistry = plugins.reduce((registry, plugin) => {
    registry[plugin.name] = plugin
    return registry
}, {})
