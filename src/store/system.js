import { observable, action } from 'mobx'
// import dark from '@/styles/theme/dark'
// import light from '@/styles/theme/light'
class System{
   
    @observable dark = false
    @observable collapsed = false
    @observable drawer = false
    @observable mode = 'inline'
    @observable theme = 'light'
    @observable primary = '#2196f3'

    @action
    setDark = () => {
        this.dark = !this.dark
        if(this.dark){
            this.theme = 'dark'
            //window.less.modifyVars(dark)
        }else{
            this.theme = 'light'
            //window.less.modifyVars(light)
        }
    }
    @action
    setCollapsed = () => {
        this.collapsed = !this.collapsed
    }
    @action
    setDrawer = () => {
        this.drawer = !this.drawer
    }
    @action
    setPrimary = (color) => {
        this.primary = color
    }
}
  
export default new System()