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
    padding:4px;
    .link {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    .icon {
        width:24px;
        height:24px;
    }
  }
}
`

const Nav = () => {
    return (
        <NavWrapper>
          <ul>
            <li>
                <Link to="/tags" className='link'>
                    <Icon name='tag'/>
                    标签页
                </Link>
            </li>
            <li>
                <Link to="/money" className='link'>
                    <Icon name='money'/>
                    记账页
                </Link>
            </li>
            <li>
              <Link to="/statistics" className='link'>
                <Icon name='count'/>
                  统计页
              </Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav