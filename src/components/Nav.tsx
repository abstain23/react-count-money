import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
require('icons/money.svg') 
require('icons/tag.svg') 
require('icons/count.svg') 

// console.log(icon_money,icon_tag,icon_count)
const NavWrapper = styled.nav`
box-shadow:0 0 3px rgba(0,0,0,.25);
line-height:24px;
> ul {
  display:flex;
  > li {
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:4px;
    .icon {
        width:24px;
        height:24px;
    }
  }
}
`


const Nav:any = (props:object) => {
    return (
        <NavWrapper>
          <ul>
            <li>
                <svg fill='black' className='icon'>
                    <use xlinkHref='#tag' />
                </svg>
                <Link to="/tags">标签页</Link>
            </li>
            <li>
                <svg fill='black' className='icon'>
                    <use xlinkHref='#money' />
                </svg>
                <Link to="/money">记账页</Link>
            </li>
            <li>
                <svg fill='black' className='icon'>
                    <use xlinkHref='#count' />
                </svg>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav