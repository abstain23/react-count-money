import React from 'react';
import './App.scss';
import styled from 'styled-components'

const Button = styled.button({
  color:'grey',
  background:'white'
})
const Button2 = styled.button`
  color: red;
  background:green;
  &:hover {
    background:red;
  }
  border: 10px solid red;
`

function App() {
  
  return (
    <div>
      <Button>你好</Button>
      <Button2>你好2</Button2>
    </div>
  );
}

export default App;
