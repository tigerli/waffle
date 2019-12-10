import { observable, action, trace } from 'mobx'

class User{
    @observable.shallow info = {}

    @action
    setInfo = (info) => {
        trace(true)
        this.info = info
    }
}
  
export default new User()