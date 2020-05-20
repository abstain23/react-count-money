import React, { FC } from 'react'
import Layout from 'components/Layout'
import {useTags} from 'customHooks/useTags'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const TagList = styled.ol`
font-size:16px;
border-bottom:1px solid #d5d5d9;
line-height:20px;
margin-left:16px;
> a{
    padding: 12px 16px 12px 0;
    align-items: center;	      
    display:flex;
    justify-content: space-between;
    align-items: center;
}
`

const Tags:FC = () => {
    const {tagsData, setTagsData} = useTags()
    return (
        <Layout>
          <TagList>
            {tagsData.map(tag => (
              <Link to={'/tags/' + tag.id} key={tag.id}>
                <li className='oneline'>{tag.id}-{tag.name}</li>
              </Link>
          ))}
          </TagList>
        </Layout>
    )
}

export default Tags
 