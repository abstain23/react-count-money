import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Icon from 'components/Icon'


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
                {/* <svg fill='black' className='icon'>
                    <use xlinkHref='#tag' />
                </svg> */}
                <Icon name='tag'/>
                <Link to="/tags">标签页</Link>
            </li>
            <li>
                <Icon name='money'/>
                <Link to="/money">记账页</Link>
            </li>
            <li>
              <Icon name='count'/>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav