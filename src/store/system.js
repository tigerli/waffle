import { observable, action, autorun } from 'mobx'
const Key = 'test5-store-data';

class System{
    @observable dark = false

    @action
    setDark = () => {
        this.dark = !this.dark
    }
}
  
export default new System()