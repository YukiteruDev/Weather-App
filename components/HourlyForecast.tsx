import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

export default function HourlyChart() {
  const [option, setOption] = useState({});
  useEffect(() => {
    const chartOptions = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        // offset: 130,
      },
      yAxis: {
        show: false,
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };
    setOption(chartOptions);
  }, []);
  return <ReactECharts option={option} />;
}
