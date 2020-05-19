import React, { FC } from 'react'
import Layout from 'components/Layout'
import {useTags} from 'customHooks/useTags'
import {Steps} from 'antd'

const {Step} = Steps

const Tags:FC = () => {
    const {tagsData, setTagsData} = useTags()
    return (
        <Layout>
           <Steps direction='vertical' size='small'>
               {tagsData.map(tag => (
                   <Step key={tag} status='finish' title={tag} description='支出'/>
               ))}
           </Steps>
        </Layout>
    )
}

export default Tags
