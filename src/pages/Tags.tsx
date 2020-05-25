import React, { FC, Fragment } from 'react'
import Layout from 'components/Layout'
// import {useTags} from 'customHooks/useTags'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {Button, Popconfirm, message} from 'antd'
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import {useRecords, recordItemType} from 'customHooks/useRecords'
import day from 'dayjs'

const Header = styled.header`
background:#40a9ff;
padding:16px 8px;
.total {
  display:flex;
  align-items:center;
  > div {
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    .label {
      font-size: 12px;
      color: #fff;
      margin-bottom: 4px;
    }
    .value {
      font-size:12px;
      span {
        font-size:20px;
      }
    }
  }
}
`


const TagList = styled.ol`
font-size:16px;
line-height:20px;
margin-left:16px;
li {
  padding: 12px 16px 12px 0; 
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow: inset 0 -0.5px 0.5px -0.5px rgba(0,0,0,.3);
  .type {
  width:32px;
  height:32px;
  border-radius:50px;
  border:1px solid #ccc;
  font-size:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:16px;
}
.content {
  flex:1;
  display:flex;
  flex-direction:column;
  font-size:14px;
  max-width: 60%;
  }
.btnWrapper {
  width:72px;
}
.ant-btn {
  margin-right:4px;
  }
}
`
const Title = styled.h4`
  font-size: 16px;
  line-height: 20px;
  padding-top: 8px;
`;

type tagObj = {
    tagsId:number[],
    category: 0 | 1,
    id?:number,
    note?:string,
    total?:string,
    amount?:string
}

const dayObj:{[K:number]:string} = {
  0:'星期天',
  1:'星期一',
  2:'星期二',
  3:'星期三',
  4:'星期四',
  5:'星期五',
  6:'星期六',
}

const Tags:FC = () => {
    // const {findTagById} = useTags()
    const {records, delRecord} = useRecords()
    records.forEach((r,i) => r.id = i )
    const history = useHistory()
    const hash:{[k:string]:recordItemType[]} = {}
    // const inComeArr:number[] = records.filter(r => {
    //   return r.category === 1
    // }).map(item => parseFloat(item.total))
    // const allIncome:number = inComeArr.reduce((a,b) => a + b,0)
    // 总收入
    const allIncome:number = records.filter(r => {
        return r.category === 0
      }).map(item => parseFloat(item.total)).reduce((a,b) => a + b,0)
    // console.log(allIncome)
    // 总支出
    const allOutlay:number =  records.filter(r => {
      return r.category === 1
    }).map(item => parseFloat(item.total)).reduce((a,b) => a + b,0)

    records.forEach(r => {
      const key = day(r.creatAt).format('YYYY-MM-DD')
      if(!(key in hash)) {
        hash[key] = []
      }
      hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a,b) => {
      if(a[0] === b[0]) return 0
      if(a[0] > b[0]) return -1
      if(a[0] < b[0]) return 1
      return 0
    })
    // console.log(array)
    const handleEditClick = (id:number) => {
      history.push('/tags/'+ id)
    }
    const handleDeleteClick = (id:number) => {
      delRecord(id)
    }
    return (
        <Layout>
          <Header>
           <div className='total'>
             <div>
               <span className='label'>总收入</span>
               <span className='value'>
                 <span>{allIncome.toString().split('.')[0]}</span>
                 {allIncome.toString().split('.')[1] ? '.'+allIncome.toString().split('.')[1] : '.00'}
               </span>
             </div>
             <div>
               <span className='label'>总支出</span>
              <span className='value'>
                  <span>{allOutlay.toString().split('.')[0]}</span>
                 {allOutlay.toString().split('.')[1] ? '.'+allIncome.toString().split('.')[1] : '.00'}
              </span>
             </div>
           </div>
          </Header>
          <TagList>
            {array.map(([date, records]) => (
                    <Fragment key={date}>
                      <Title>{date} {dayObj[day(date).day()]}</Title>
                      {records.map(tag => (
                        <li className='oneline' key={tag.tagsId.toString() + Math.random()}>
                        <div className='type'>{tag.category === 0 ? '纳' : '出' }</div>
                        <div className='content'>
                        <span>金额：{tag.total}</span>
                        <span className='oneline'>备注：{tag.note}</span>
                        </div>
                        <div className='btnWrapper'>
                        <Button shape='circle' icon={<EditFilled/>} onClick={() => handleEditClick(tag.id!)}></Button>
                        <Popconfirm  title="您确定要删除该项吗？" 
                                     okText="Yes" 
                                     cancelText="No" 
                                     placement='bottomRight'
                                     onCancel={() => {message.info({content:'取消删除！',duration:1})}}
                                     onConfirm={() => {handleDeleteClick(tag.id!)}}
                                     >
                        <Button shape='circle' icon={<DeleteFilled/>}></Button>
                        </Popconfirm>
                        </div>
                      </li>
                      ))}
                    </Fragment>
                    
                    
          ))}
          </TagList>
        </Layout>
    )
}

export default Tags
 