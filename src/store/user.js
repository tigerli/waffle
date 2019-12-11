import { action, observable } from 'mobx'

class User{
    @observable info = new Map()

    @action //动作
    setInfo = (info) => {
        this.info.replace(info)
    }
}
  
export default new User()