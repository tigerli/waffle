import { G2 } from 'bizcharts'
import { observable, action } from 'mobx'
const { Global } = G2 // 获取 Global 全局对象
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
            // Global.setTheme('dark')
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