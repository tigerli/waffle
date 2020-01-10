import theme from '@styles/theme'

export function modifyVars(vars){
    window.less.modifyVars(vars)
}

export function modifyModel(model){
    let {darkTheme, lightTheme} = theme
    console.log(lightTheme)
    if(model){
        window.less.modifyVars(darkTheme)
    }else{
        window.less.modifyVars(lightTheme)
    }
}