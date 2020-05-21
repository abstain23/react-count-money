import React from 'react'
import Nav from 'components/Nav'
import styled from 'styled-components'

const Wrapper = styled.div`
max-height:100vh;
display: flex;
flex-direction:column;
`

const Main = styled.div`
flex-grow:1;
overflow:auto;
display:flex;
flex-direction:column;
.ant-steps {
    display:flex;
    
}
`

// type Props = {
//     children:ReactNode | JSX.Element[] | JSX.Element
// }

const Layout:React.FC = (props) => {
    return (
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav></Nav>
        </Wrapper>
    )
}

export default Layout
