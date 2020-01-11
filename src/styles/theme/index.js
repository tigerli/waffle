
import dark from './dark'
import light from './light'

const darkTheme = {}
const lightTheme = {}

let Light = (primary) => {
    // console.log(primary)
    // console.log('light')
    
    // dark['@primary-color'] = primary
    Object.keys(light).forEach((key) => {
        lightTheme[`${key}`] = light[key]
    })
    lightTheme['@primary-color'] = primary
    return lightTheme
}

let Dark = (primary) => {
    // console.log(primary)
    // console.log('dark')
    // console.log(dark['@primary-color'])
    // dark['@primary-color'] = primary
    Object.keys(dark).forEach((key) => {
        darkTheme[`${key}`] = dark[key]
    })
    darkTheme['@primary-color'] = primary
    return darkTheme
}

export {
    Light,
    Dark
}
// function dark(){inject('system')(observer((props) => {
//     let { system } = props
//     light['@primary-color'] = system.primary
//     Object.keys(light).forEach((key) => {
//         lightTheme[`${key}`] = light[key]
//     })
// }))

// export default {
//     light: inject('system')(observer((props) => {
//         let { system } = props
//         light['@primary-color'] = system.primary
//         Object.keys(light).forEach((key) => {
//             lightTheme[`${key}`] = light[key]
//         })
//     })),
//     dark: inject('system')(observer((props) => {
//         let { system } = props
//         dark['@primary-color'] = system.primary
//         Object.keys(dark).forEach((key) => {
//             darkTheme[`${key}`] = dark[key]
//         })
//     }))
// }
