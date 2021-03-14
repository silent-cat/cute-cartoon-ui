<template>
    <div class="cc-collpase">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        single:{
            type:Boolean,
            default:false
        },
        selected:{
            type:Array
        }
    },
    data(){
        return {
            eventBus:new Vue,
            
        }
    },
    provide(){
        // if(this.single){
            return {
            eventBus:this.eventBus
        // }
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected',this.selected)
        this.eventBus.$on('update:addselected',name=>{
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            if(this.single){
                selectedCopy = [name]
            }
            else{
                selectedCopy.push(name)
            }
        this.eventBus.$emit('update:selected',selectedCopy)
        this.$emit('update:selected',selectedCopy)
        })

        this.eventBus.$on('update:removeselected',name=>{
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            let index=selectedCopy.indexOf(name)
            selectedCopy.splice(index,1)
        this.eventBus.$emit('update:selected',selectedCopy)
        this.$emit('update:selected',selectedCopy)
        })
        
    }
}
</script>

<style lang="scss" scoped>
.cc-collpase{
    border:1px solid black;
    border-radius:4px;
    overflow: hidden;
    
}
</style>