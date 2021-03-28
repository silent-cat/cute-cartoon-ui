<template>
    <div>
        <c-input v-model="value" placeholder="禁用输入框" disabled></c-input>
    </div>
</template>

<script>
import Input from '../../../src/Input'
export default {
 components:{
     'c-input':Input
 },
 data(){
     return {
         value:'禁用'
     }
 }
}
</script>

<style>

</style>