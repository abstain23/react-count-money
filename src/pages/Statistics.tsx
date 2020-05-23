import React, { FC, useState, useEffect } from 'react'
import Layout from 'components/Layout'
import ReactEcharts from 'echarts-for-react';
import { useRecords } from 'customHooks/useRecords';
import {Select, Radio} from 'antd'
import styled from 'styled-components';
import {groupByWeek, groupByMonth, groupByYear} from 'lib/echartsMethods'
import { RadioChangeEvent } from 'antd/lib/radio';

const { Option } = Select;



const Header = styled.header`
font-size:20px;
padding:4px 8px;
display:flex;
align-items:center;
justify-content:center;
`
const RadioWrapper = styled.div`
padding:4px 8px;
.ant-radio-group {
    display:flex;
    .ant-radio-button-wrapper {
        flex:1;
        /* color:red; */
    }
}
`

const EchartWrapper = styled.div``
const Echart:FC = () => {
    const {records} = useRecords()
    const [groupData, setGroupData] = useState<Map<string, number>>(groupByWeek(records, 0))
    const [type, setType] = useState<0 | 1>(0)
    const [group, setGroup] = useState<'week' | 'month' | 'year'>('week')
    useEffect(() => {
        if(records.length) {
            if(group === 'week') {
                setGroupData(groupByWeek(records, type))
            } else if(group === 'month') {
                setGroupData(groupByMonth(records, type))
            } else if(group === 'year'){
                setGroupData(groupByYear(records, type))
            }
        }
    },[records, group, type])
    const x = [...groupData.keys()];
    const y = [...groupData.values()];
    const av =  y.reduce((a,b) => a+b,0)/y.length
    const option = {
        color:[type===0?'#40a9ff':'red'],
        grid: {
            top: '5%',
            leef:'5%',
            bottom: '10%',
            // show:true,
            // borderColor:'#40a9ff',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        // legend: {
        //     data: ['收入','支出'],
        //     textStyle: {
        //         color:'red'
        //     }
        // },
        xAxis: {
            data: x,
            axisTick: {
                interval: 0,
                lineStyle: {
                    opacity: 0
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 8,
                color: '#999999'
            },
            type: 'category'
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    opacity: 1
                }
            },
            splitLine: {
                lineStyle: {
                    opacity: 0,
                    color: '#ccc'
                }
            },
            // axisLabel: undefined,
            axisTick: undefined,
            type:'value'
        },
        series: [{
            type: 'line',
            data: y,
            smooth:true,
        }, {
            name: '平均值',
            type: 'line',
            data:[av],
            // symbol: 'none',
            lineStyle: {
                type: 'dashed',
                color: 'red',
                width: 1,
                opacity: 0.5
            }
        }, {
            name: '最大值',
            type: 'line',
            data: [500],
            symbol: 'none',
            lineStyle: {
                color: 'red',
                width: 1,
                opacity: 0.5
            }
        }]
    }
    const handleChange = (value:0 | 1) => {
        setType(value)
    }
    const onChange = (e:RadioChangeEvent) => {
        const {value} = e.target
        setGroup(value)
    }
    return (
        <div>
            <Header>
            <Select defaultValue={0} style={{ width: 120 }} onChange={handleChange}>
                <Option value={0}>收入</Option>
                <Option value={1}>支出</Option>
            </Select>
            </Header>
            <RadioWrapper>
            <Radio.Group onChange={onChange} defaultValue="week">
                <Radio.Button value="week">周</Radio.Button>
                <Radio.Button value="month">月</Radio.Button>
                <Radio.Button value="year">年</Radio.Button>
            </Radio.Group>
            </RadioWrapper>
            <EchartWrapper>
            <ReactEcharts option={option} />
            </EchartWrapper>
        </div>
    )
}


const Statistics:FC = () => {
    return (
       <Layout>
           <Echart/>
       </Layout>
    )
}

export default Statistics
