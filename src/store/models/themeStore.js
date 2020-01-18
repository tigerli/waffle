import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'
class themeStore {
    
    @persist @observable dark
    @persist @observable theme
    @persist @observable primary
    
    @action init = (foo) => {
        this.dark = foo.dark
        this.theme = foo.theme
        this.primary = foo.primary
    }

    @action setPrimary = (color) => {
        this.primary = color
    }

    @action setDark = () => {
        this.dark = !this.dark
        if(this.dark){
            this.theme = 'dark'
        }else{
            this.theme = 'light'
        }
    }

}

export default new themeStore()