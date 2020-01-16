import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'
class Test {
    constructor(foo) {
        this.name = foo.name
        this.count = foo.count
    }
    
    @persist @observable  name
    @persist @observable  count

    @action setName = () => {
        this.name = this.name+',name'
    }
}

export default new Test({name: 'aaa', count: 0})