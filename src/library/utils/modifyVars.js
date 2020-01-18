import {Light, Dark} from '@styles/theme'

export async function modifyVars(model, primary) {
    //window.less.modifyVars(vars)
    console.log(model, primary)
    if(model){
        await window.less.modifyVars(Dark(primary))
    }else{
        await console.log(window.less.modifyVars(Light(primary)))
    }
}

// export function modifyModel(model){
//     // let {dark, light} = theme
//     // let dark = Dark
//     // console.log(Dark())
//     // console.log(Light())
    
// }