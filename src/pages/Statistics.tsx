import React, { FC } from 'react'
import Layout from 'components/Layout'
import ReactEcharts from 'echarts-for-react';
import day from 'dayjs'
import { recordItemType, useRecords } from 'customHooks/useRecords';


const Echart:FC = () => {
    const option = {
        // title: {
        //     text: '折线图堆叠'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    
    return (
        <div style={{width:375,height:300}}>
            <ReactEcharts option={option} />
        </div>
    )
}

const X = () => {
    const {records} = useRecords()
    const days = ():number => {
        const [year,month] = [day().year(), day().month()]
        const d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            if (month === 1) {
                return 29;
            } else {
                return d[month];
            }
        } else {
            return d[month];
        }
    }
    console.log(days())
    const groupByweek = (records:recordItemType[]):Map<string, number> => {
        const keys = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        const res = new Map<string,number>()
        let i:number;
        for( i = 0; i<keys.length; i++) {
            res.set(keys[i],0)
        }
        let r:recordItemType
        for(r of records) {
            const key = keys[day(r.creatAt).day()]
            console.log(day(r.creatAt).day())
            console.log(r.total)
            // const initVal = res.get(key)
            res.set(key, parseFloat(r.total)) 
        }
        return res
    }
    console.log(groupByweek(records))
    const groupByMonth = (records:recordItemType[]):Map<string, number> => {
        const keys:string[] = []
        const res = new Map<string, number>()
        let i:number;
        for(i = 1; i<days();i++) {
            keys.push(i.toString())
        }
        for(i=0;i<keys.length;i++) {
            res.set(keys[i],0)
        }
        let r:recordItemType
        for(r of records) {
            const key = keys[day(r.creatAt).date()]
            // const initVal = res.get(key)
            res.set(key, parseFloat(r.total)) 
        }
        return res
    }
    console.log(groupByMonth(records))
    const groupByYear = (records:recordItemType[]):Map<string, number> => {
        const keys  = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        const res = new Map<string, number>()
        let i:number;
        for(i =0; i<keys.length;i++) {
            res.set(keys[i],0)
        }
        let r:recordItemType
        for(r of records) {
            const key = keys[day(r.creatAt).month()]
            res.set(key,parseFloat(r.total))
        }
        return res
    }
    console.log(groupByYear(records))
}


const Statistics:FC = () => {
    X()
    return (
       <Layout>
           <Echart/>
       </Layout>
    )
}

export default Statistics
