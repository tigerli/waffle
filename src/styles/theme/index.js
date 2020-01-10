
import dark from './dark'
import light from './light'
const themeVars = require('./vars.json')

const defaultTheme = {}
const darkTheme = {}
const lightTheme = {}

Object.keys(dark).forEach((key) => {
    darkTheme[`${key}`] = dark[key]
})
Object.keys(light).forEach((key) => {
    lightTheme[`${key}`] = light[key]
})

themeVars.forEach((group) => {
    group.children.forEach((item) => {
        let { value } = item
        if (item.type === 'number') {
            value += item.unit
        }
        defaultTheme[item.name] = value
    })
})

export default {
    defaultTheme,
    lightTheme,
    darkTheme
}
