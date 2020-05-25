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

const EchartPieWrapper = styled.div`
border-top:1px solid #ccc;
padding:4px 8px;
`
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
    // const av =  y.reduce((a,b) => a+b,0)/y.length
    const option = {
        color:[type===0?'#40a9ff':'red'],
        grid: {
            top: '5%',
            left:'4%',
            bottom: '10%',
            // show:true,
            // borderColor:'#40a9ff',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
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
                fontSize: 6,
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
            axisLabel: {
                interval: 0,
                fontSize: 8,
                color: '#999999'
            },
            type:'value',
            name: type === 0 ?'收入':'支出'
        },
        series: [{
            type: 'line',
            name: type === 0 ?'收入':'支出',
            data: y,
            smooth:true,
            lineStyle:{
                opacity:0.5
            },
            markLine : {
                symbol : 'none',
                itemStyle : {
                  normal : {
                    color:type===0?'#40a9ff':'red',
                    label : {
                      show:true,
                      position:'insideStartTop',
                      formatter: '{b}： {c}'
                    }
                  }
                },
                data : [{type : 'average', name: '平均值'},{type : 'max', name: '最大值',label:{position:'insideEndTop'}}] 
                // ,label:{distance:20}
              }
        }]
    }
    const option2 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
    };
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
           <section>
           <RadioWrapper>
            <Radio.Group onChange={onChange} defaultValue="week">
                <Radio.Button value="week">本周</Radio.Button>
                <Radio.Button value="month">本月</Radio.Button>
                <Radio.Button value="year">本年</Radio.Button>
            </Radio.Group>
            </RadioWrapper>
            <EchartWrapper>
                <ReactEcharts option={option} />
            </EchartWrapper>
           </section>
            <section>
                <EchartPieWrapper>
                 <header>{type===0?'收入排行榜': '支出排行榜'}</header>
                 <EchartWrapper>
                    <ReactEcharts option={option2} />
                </EchartWrapper>
                </EchartPieWrapper>
            </section>
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
