import React,{FC} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'

type Params = {
  id:string;
}

const TagEdit:FC = () => {
  const {id} = useParams<Params>()

  return (
    <Layout>
      <div>{id}</div>
    </Layout>
  )
}

export default TagEdit
