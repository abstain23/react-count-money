import React,{FC} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Icon from 'components/Icon'

const Header = styled.header`
background:#fff;
display:flex;
align-items:center;
padding:8px 8px;
svg {
  width:1.5em;
  height:1.5em;
}
span {
  flex:1;
  display:flex;
  justify-content:center;
}
`

const Main = styled.main`
padding-left:8px;
font-size:14px;
ul > li {
  margin-left: 16px;
  padding: 12px 0 12px 16px;
  border-bottom: 1px solid #ddd;
  label {
    display:flex;
    align-items:center;
    .name {
      color: #999;
      margin-right: 16px;
    }
    .type {
      height:40px;
      display:flex;
      align-items:center;
      background:#f5f5f5;
      border:none;
    }
  }
}
`


type Params = {
  id:string;
}

const TagEdit:FC = () => {
  const {id} = useParams<Params>()
  const history = useHistory()
  const handdeClick = () => {
    console.log('x')
    history.goBack()
  }
  return (
    <Layout>
      <Header>
        <Icon name='back' onClick={handdeClick}/>
        <span>编辑-{id}</span>
      </Header>
      <Main>
        <ul>
          <li>
            <label>
              <span className='name'>类型</span>
              <span className='type'>支出</span>
            </label>
          </li>
          <li>
            <label>
              <span className='name'>金额</span>
              <input className='type' />
            </label>
          </li>
          <li>
          <label>
              <span className='name'>日期</span>
              <span className='type'>支出</span>
            </label>
          </li>
          <li>
            <label>
              <span className='name'>备注</span>
              <input className='type' />
            </label>
          </li>
        </ul>
      </Main>
    </Layout>
  )
}

export default TagEdit
