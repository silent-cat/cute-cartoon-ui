<template>
    <div class="cc-collapse-item">
        
        <div class="cc-title" @click="toggle">
            {{title}}
        </div>
        <div class="cc-content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
 props:{
     title:{
         type:String,
         required:true
     },
     name:{
         type:String
     }
 },
 data(){
     return {
         open:false,
     }
 },
 inject:['eventBus'],
 mounted(){
     this.eventBus&&this.eventBus.$on('update:selected',names=>{
         if(names.indexOf(this.name)>=0){
             
             this.open = true
         }else{
            //  if(this.single){
                 this.open=false
            //  }
         }
     })
 },
 methods:{
     toggle(){
         if(this.open){
           this.eventBus&&this.eventBus.$emit('update:removeselected',this.name)
         }else{
            this.eventBus&&this.eventBus.$emit('update:addselected',this.name)
        }
     }
 }
 
 }
</script>

<style scoped lang="scss">
.cc-collapse-item{
    >.cc-title{
        border:1px solid black;
        margin:-1px -1px 0px -1px;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding:0 8px;
    
    }
    &:first-child{
         >.cc-title{
             border-top-left-radius:4px;
             border-top-right-radius:4px;
         }
    }
     &:last-child{
         >.cc-title:last-child{
             border-bottom-left-radius:4px;
             border-bottom-right-radius:4px;
             margin-bottom:-1px;
         }
    }
    >.cc-content{
        padding: 8px;
    }
}
</style>