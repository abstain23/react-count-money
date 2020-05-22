import React, { FC, useEffect, useRef } from 'react'
import Layout from 'components/Layout'
import ReactEcharts from "echarts-for-react"
import echarts from 'echarts'


const Echarts: FC = () => {
    const echartsRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if(echartsRef.current) {
            var myChart = echarts.init(echartsRef.current);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        }
    }, [])
        return (
            <div id="main" ref={echartsRef} style={{width: '375px',height:'500px'}}></div>
        )
    }

    const Statistics: FC = () => {
        return (
            <Layout>
                <Echarts/>
            </Layout>
        )
    }

    export default Statistics
