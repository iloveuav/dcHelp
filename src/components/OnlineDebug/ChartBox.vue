<template>
  <a-card class="chart-card-item" :bordered="false">
    {{ title }}
    <!-- <div ref="chartDom" style="width: 100%;height:100%" /> -->
    <div v-if="chartOptions.adapter.data.length !== 0" style="margin-left:15px">
      <IW-BiaxChart ref="chartBody" :option="chartOptions" />
    </div>
    <div v-else class="withoutDataBox">
      <span class="withoutDataText"> 图表暂无数据</span>
    </div>
  </a-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import "./index.scss";
import { IBaseChartConfig } from "dcicework";

import { Card } from "ant-design-vue";

@Component({
  components: {},
})
export default class BiaxChartCard extends Vue {
  @Prop({})
  title!: string;
  @Prop({})
  chartOptions!: IBaseChartConfig;
  @Prop({})
  chartData!: Array<any>;

  @Watch("chartOptions", { immediate: true, deep: true })
  watchCardItem(newValue: any) {
    if (newValue !== undefined) {
      console.log("watch-this.chartOptions: ", this.chartOptions);
    }
  }
}
</script>

<style>
.withoutDataBox {
  height: 250px;
  text-align: center;
  line-height: 200px;
}
</style>
