<template>
  <c-tabs :selected.sync="selectedTab">
    <c-tabs-head>
      <c-tabs-item name="tab1">
        Tab1
      </c-tabs-item>
      <c-tabs-item name="tab2">Tab2</c-tabs-item>
      <c-tabs-item name="tab3" disabled>Tab3</c-tabs-item>
      <c-tabs-item name="tab4">Tab4</c-tabs-item>
    </c-tabs-head>
    <c-tabs-body>
      <c-tabs-panel name="tab1">内容1</c-tabs-panel>
      <c-tabs-panel name="tab2">内容2</c-tabs-panel>
      <c-tabs-panel name="tab3">内容3</c-tabs-panel>
      <c-tabs-panel name="tab4">内容4</c-tabs-panel>
    </c-tabs-body>
  </c-tabs>
</template>

<script>
import Tabs from '../../../src/Tabs'
import TabsHead from '../../../src/TabsHead'
import TabsBody from '../../../src/TabsBody'
import TabsItem from '../../../src/TabsItem'
import TabsPanel from '../../../src/TabsPanel'
export default {
    components:{
        'c-tabs':Tabs,
        'c-tabs-head':TabsHead,
        'c-tabs-item':TabsItem,
        'c-tabs-body':TabsBody,
        'c-tabs-panel':TabsPanel,
    },
    data(){
        return {
            selectedTab:'tab1'
        }
    }
}
</script>

<style></style>
