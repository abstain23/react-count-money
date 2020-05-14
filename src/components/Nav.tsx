import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import icon_money from 'icons/money.svg'
import icon_tag from 'icons/tag.svg'
import icon_count from 'icons/count.svg'

const NavWrapper = styled.nav`
box-shadow:0 0 3px rgba(0,0,0,.25);
line-height:24px;
> ul {
  display:flex;
  > li {
    flex:1;
    text-align:center;
    padding:16px;
    > img {
        width:16px;
        height:16px;
    }
  }
}
`


const Nav:any = (props:object) => {
    return (
        <NavWrapper>
          <ul>
            <li>
              <img src={icon_tag}/>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav