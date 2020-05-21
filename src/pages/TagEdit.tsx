import React,{FC, useRef} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import {Button,message} from 'antd'
import { useTags } from 'customHooks/useTags'
import day from 'dayjs'

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
text-align:center;
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
type tagObj = {
  tagsId:number[],
  category: 0 | 1,
  note?:string,
  total?:string,
  amount?:string,
  creatAt:string
}

const TagEdit:FC = () => {
  const {id} = useParams<Params>()
  // const [tagObj,setTah] = useState({})
  const {findTagById} = useTags()
  const inputTotal = useRef<HTMLInputElement>(null)
  const inputNote = useRef<HTMLInputElement>(null)
  const listRecord:tagObj[] = JSON.parse(window.localStorage.getItem('listRecord') || '[]')
  const {category, note, total, tagsId, creatAt } = listRecord[parseInt(id)] || {} as tagObj
  // console.log(listRecord[parseInt(id)])
  const tagsName = tagsId.map(tagId => findTagById(tagId)?.name)
  // console.log(tagsName)
  const history = useHistory()
  let submitObj:{total?:string,note?:string} = {};
  const handdeClick = () => {
    console.log('x')
    history.goBack()
  }

  const handletoatlChange = () => {
    submitObj.total = inputTotal.current?.value
  }
  const handleNoteChange = () => {
    submitObj.note = inputNote.current?.value
  }
  const handelSubmit = () => {
    let obj = {...listRecord[parseInt(id)], ...submitObj}
    // console.log(obj)
    listRecord[parseInt(id)] = obj
    // console.log(listRecord[parseInt(id)])
    window.localStorage.setItem('listRecord',JSON.stringify(listRecord))
    message.success({content:'更新成功！',duration:1})
    history.goBack()
  }
  return (
    <Layout>
      <Header>
        <Icon name='back' onClick={handdeClick}/>
        <span>编辑-{category === 0 ? '收入' : '支出' + '-'}{note && `-${note}`}</span>
      </Header>
      <Main>
        <ul>
          <li>
            <label>
              <span className='name'>类型</span>
              <span className='type'>{category === 0? '收入' : '支出'}</span>
            </label>
          </li>
          <li>
            <label>
              <span className='name'>{category === 0? '来源' : '用途'}</span>
              <span className='type'>{tagsName && tagsName.join('，')}</span>
            </label>
          </li>
          <li>
            <label>
              <span className='name'>金额</span>
              <input className='type' defaultValue={total} onBlur={handletoatlChange} ref={inputTotal}/>
            </label>
          </li>
          <li>
          <label>
              <span className='name'>日期</span>
              <span className='type'>{day(creatAt).format('YYYY-MM-DD')}</span>
            </label>
          </li>
          <li>
            <label>
              <span className='name'>备注</span>
              <input className='type' defaultValue={note} onBlur={handleNoteChange} ref={inputNote}/>
            </label>
          </li>
        </ul>
        <Button shape='round'onClick={handelSubmit}>提交更改</Button>
      </Main>
    </Layout>
  )
}

export default TagEdit
