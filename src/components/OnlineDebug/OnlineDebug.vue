<template>
  <div class="app-container">
    <div style="margin-left:15px">
      <ChartBox title="test" :chartOptions="ChartOptions" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IBaseChartConfig } from "dcicework";
import { ChartType, DateType, ThemeType } from "dcicework/utils/Enum";
import utilFunc from "dcicework/utils/utilFunction";
import ChartBox from "./ChartBox.vue";

@Component({
  components: {
    ChartBox,
  },
})
export default class OnlineDebug extends Vue {
  // initValue

  TotalServerCount = null;

  ChartOptions: IBaseChartConfig = {
    adapter: {
      chartType: ChartType.BIAX,
      dimensions: [
        {
          clazz: "DATE",
          dateType: DateType.MONTHDAY,
          key: "createTime",
          showName: "日期",
          type: 1,
        },
      ],
      targets: [
        {
          ctype: "bar",
          digits: 0,
          key: "countNum",
          showName: "testBar",
          type: 2,
          unit: "个",
        },
        {
          ctype: "line",
          digits: 1,
          key: "differVolume",
          showName: "testLine",
          type: 2,
          unit: utilFunc.setUnit(3, 1),
        },
      ],
      data: [
        { createTime: "2021-10-25", differVolume: 50, countNum: 150 },
        { createTime: "2021-10-26", differVolume: 70, countNum: 100 },
        { createTime: "2021-10-27", differVolume: 30, countNum: 60 },
      ],
    },
    data: [],
    theme: ThemeType.MRBLACK,
  };
}
</script>
<style scoped>
.app-container {
  border: 1px solid red;
}
</style>
