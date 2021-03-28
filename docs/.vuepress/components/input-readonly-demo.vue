<template>
    <div>
        <c-input v-model="value" placeholder="只读输入框" readonly></c-input>
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
         value:'内容只读'
     }
 }
}
</script>

<style>

</style>