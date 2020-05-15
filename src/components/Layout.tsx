import React, { ReactNode } from 'react'
import Nav from 'components/Nav'
import styled from 'styled-components'

const Wrapper = styled.div`
height:100vh;
display: flex;
flex-direction:column;
`

const Main = styled.div`
flex-grow:1;
overflow:auto;
`

type Props = {
    children:ReactNode | JSX.Element[] | JSX.Element
}

function Layout(props:Props) {
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
