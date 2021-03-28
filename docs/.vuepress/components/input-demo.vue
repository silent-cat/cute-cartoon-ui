<template>
    <div>
        <c-input v-model="value" placeholder="请输入内容"></c-input>
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
         value:''
     }
 }
}
</script>

<style>

</style>