import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Icon from 'components/Icon'


const NavWrapper = styled.nav`
box-shadow:0 0 3px rgba(0,0,0,.25);
line-height:24px;
background:white;
> ul {
  display:flex;
  margin-bottom:0;
  > li {
    flex:1;
    padding:4px;
    a {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .icon {
        width:24px;
        height:24px;
        }
    &.active {
      color: #40a9ff;
      svg {
        fill:#40a9ff;
        }
      }
    }
  }
}
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" exact activeClassName='active'>
            <Icon name='detail' />
                    明细
                </NavLink>
        </li>
        <li>
          <NavLink to="/money">
            <Icon name='money' />
                    记账
                </NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <Icon name='count' />
                  统计
              </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav