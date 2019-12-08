import { observable, action } from 'mobx'

class System{
    @observable dark = false
    @observable collapsed = false
    @observable drawer = false
    
    @observable mode = 'inline'
    @observable theme = 'light'
    
    @action
    setDark = () => {
        this.dark = !this.dark
        if(this.dark){
            this.theme = 'dark'
        }else{
            this.theme = 'light'
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
}
  
export default new System()