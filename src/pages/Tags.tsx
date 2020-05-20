import React, { FC } from 'react'
import Layout from 'components/Layout'
// import {useTags} from 'customHooks/useTags'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from 'antd'
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const Header = styled.header`
background:#fff;
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
      color: #a38932;
      margin-bottom: 4px;
    }
    .value {
      font-size:12px;
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
type tagObj = {
    tagsId:number[],
    category: 0 | 1,
    note?:string,
    total?:string,
    amount?:string
}

const Tags:FC = () => {
    // const {findTagById} = useTags()
    const tagsData = JSON.parse(window.localStorage.getItem('listRecord') || '[]') as tagObj[]
    const history = useHistory()
    const handleEditClick = (id:number) => {
      history.push('/tags/'+ id)
    }
    const handleDeleteClick = (id:number) => {
      console.log(id)
    }
    return (
        <Layout>
          <Header>
           <div className='total'>
             <div>
               <span className='label'>收入</span>
               <span className='value'>1111</span>
             </div>
             <div>
               <span className='label'>支出</span>
               <span className='value'>1111</span>
             </div>
           </div>
          </Header>
          <TagList>
            {tagsData.map((tag,index) => (
                    <li className='oneline' key={tag.tagsId.toString() + Math.random()}>
                      <div className='type'>{tag.category === 0 ? '纳' : '出' }</div>
                      <div className='content'>
                      <span>金额：{tag.total}</span>
                      <span className='oneline'>备注：{tag.note}</span>
                      </div>
                      <div className='btnWrapper'>
                      <Button shape='circle' icon={<EditFilled/>} onClick={() => handleEditClick(index)}></Button>
                      <Button shape='circle' icon={<DeleteFilled/>} onClick={() => handleDeleteClick(index)}></Button>
                      </div>
                    </li>
          ))}
          </TagList>
        </Layout>
    )
}

export default Tags
 