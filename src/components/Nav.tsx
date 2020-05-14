import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Icon from 'components/Icon'


const NavWrapper = styled.nav`
box-shadow:0 0 3px rgba(0,0,0,.25);
line-height:24px;
> ul {
  display:flex;
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
      color: red;
      svg {
        fill:red;
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
          <NavLink to="/tags" activeClassName='active'>
            <Icon name='tag' />
                    标签页
                </NavLink>
        </li>
        <li>
          <NavLink to="/money">
            <Icon name='money' />
                    记账页
                </NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <Icon name='count' />
                  统计页
              </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav