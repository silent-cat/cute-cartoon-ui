<template>
    <div>
        <c-input type="password" placeholder="password"></c-input>
        <c-input type="time"></c-input>
        <c-input type="date"></c-input>
        <c-input type="search" placeholder="可清空"></c-input>
        <c-input type="week"></c-input>
    </div>
</template>

<script>
import Input from '../../../src/Input'
export default {
 components:{
     'c-input':Input
 },
}
</script>

<style>

</style>