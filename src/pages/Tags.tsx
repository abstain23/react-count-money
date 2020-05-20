import React, { FC } from 'react'
import Layout from 'components/Layout'
import {useTags} from 'customHooks/useTags'
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

const Tags:FC = () => {
    const {tagsData, findTagById} = useTags()
    const history = useHistory()
    const handleEditClick = (id:number) => {
      history.push('/tags/'+ id)
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
            {tagsData.map(tag => (
                    <li className='oneline' key={tag.id}>
                      <div className='type'>{findTagById(tag.id)?.name }</div>
                      <div className='content'>
                        <span>1111000</span>
                        <span className='oneline'>备注：dsdsdasdasdasdasdassasdasdasdasdddasdasdasdsadasdasdasdasdasdasdasdasdas</span>
                      </div>
                      <div className='btnWrapper'>
                      <Button shape='circle' icon={<EditFilled/>} onClick={() => handleEditClick(tag.id)}></Button>
                      <Button shape='circle' icon={<DeleteFilled/>} onClick={() => handleEditClick(tag.id)}></Button>
                      </div>
                    </li>
          ))}
          </TagList>
        </Layout>
    )
}

export default Tags
 