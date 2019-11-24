import React from 'react';
import { inject, observer } from 'mobx-react'

const A = inject('systemStore')(observer((props) =>{
  let {systemStore} = props
  return (
    <div>
      store: {systemStore.dark}
      <div onClick={()=>{ systemStore.setDark()}}>dsa</div>
    </div>
  );
}))

export default A;