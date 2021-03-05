const expect =chai.expect
import Vue from 'vue'

import Button from '../src/Button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button',()=>{
    it('按钮存在',()=>{
        expect(Button).to.be.ok
    })
})