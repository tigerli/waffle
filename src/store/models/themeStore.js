import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'
class themeStore {
    
    @persist @observable dark
    @persist @observable theme
    @persist @observable primary


    @action setPrimary = (color) => {
        this.primary = color
    }
}

export default new themeStore()