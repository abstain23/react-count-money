import React, { FC, useState, useEffect } from 'react'
import Layout from 'components/Layout'
import ReactEcharts from 'echarts-for-react';
import { useRecords } from 'customHooks/useRecords';
import {Select, Radio} from 'antd'
import styled from 'styled-components';
import {groupByWeek, groupByMonth, groupByYear,pieDataType ,pieDataByWeek, pieDataByMonth, pieDataByYear} from 'lib/echartsMethods'
import { RadioChangeEvent } from 'antd/lib/radio';
import { useTags } from 'customHooks/useTags';

const { Option } = Select;



const Header = styled.header`
font-size:20px;
padding:4px 8px;
display:flex;
align-items:center;
justify-content:center;
background:#40a9ff;
`
const RadioWrapper = styled.div`
padding:4px 8px;
background:#40a9ff;
.ant-radio-group {
    display:flex;
    border:none;
    .ant-radio-button-wrapper {
        flex:1;
        /* color:red; */
    }
}
`

const WrapperLine = styled.div`
`
const EchartPieWrapper = styled.div`
border-top:1px solid #ccc;
padding:4px 8px;
height:215px;
.echarts-for-react {
    width:100%;
    height:100% !important;
}
`

const Echart:FC = () => {
    const {records} = useRecords()
    const {findTagsByIds} = useTags()
    const [groupData, setGroupData] = useState<Map<string,{value:number,tagsId:number[]}>>(groupByWeek(records, 0))
    const [pieData, setPieData] = useState<pieDataType[]>([])
    const [type, setType] = useState<0 | 1>(0)
    const [group, setGroup] = useState<'week' | 'month' | 'year'>('week')
    useEffect(() => {
        if(records.length) {
            if(group === 'week') {
                setGroupData(groupByWeek(records, type))
                setPieData(pieDataByWeek(records,type))
            } else if(group === 'month') {
                setGroupData(groupByMonth(records, type))
                setPieData(pieDataByMonth(records,type))
            } else if(group === 'year'){
                setGroupData(groupByYear(records, type))
                setPieData(pieDataByYear(records,type))
            }
        }
    },[records, group, type])
    const x = [...groupData.keys()];
    const y = [];
    for(let {value} of groupData.values()) {
        y.push(value)
    }
    // const pieData:{value:number,name?:string | undefined}[] = []
    // const tt = [...groupData.values()]
    // console.log(tt)
    // tt.forEach(item => pieData.push({value:item.value, name:findTagsByIds(item.tagsId).join('-')}))
    // console.log()
    // const av =  y.reduce((a,b) => a+b,0)/y.length
    // const pieData:{value:number,name:string}[] =[] 
    // y.forEach(item => {
    //     pieData.push({value:item})
    // })
    // console.log(pieData)
    // console.log(findTagsByIds(pieData))
    const option = {
        color:[type===0?'#40a9ff':'red'],
        grid: {
            top: '10%',
            left:'4%',
            bottom: '8%',
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
            // name: type === 0 ?'收入':'支出'
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
        // legend:{
        //     ori
        // },
        series: [
            {
                name: type === 0 ?'收入来源': '支出用途',
                type: 'pie',
                center:['50%','50%'],
                radius: ['0%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    // position: 'center'
                    position:'outside'
                },
                labelLine:{
                    show:true
                },
                // emphasis: {
                //     label: {
                //         show: true,
                //         fontSize: '30',
                //         fontWeight: 'bold'
                //     }
                // },
                data: pieData.map(item => {
                    return {
                        ...item,
                        // eslint-disable-next-line
                        name:findTagsByIds(JSON.parse(item.name)).join('-')
                    }
                })
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
                <Radio.Button value="week">周</Radio.Button>
                <Radio.Button value="month">月</Radio.Button>
                <Radio.Button value="year">年</Radio.Button>
            </Radio.Group>
            </RadioWrapper>
            <WrapperLine>
                <ReactEcharts option={option} />
            </WrapperLine>
           </section>
            <section>
                <EchartPieWrapper>
                 <header>{type===0?'收入排行榜': '支出排行榜'}</header>
                    <ReactEcharts option={option2} />
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
