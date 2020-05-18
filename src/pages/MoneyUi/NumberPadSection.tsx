import React, { FC, useState, MouseEvent } from 'react'
import styled from 'styled-components'



const Wrapper = styled.section`
display:flex;
flex-direction:column;
.output {
  background:white;
  font-size:36px;
  line-height:72px;
  text-align:right;
  padding:0 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,.25),
              inset 0  5px 5px -5px rgba(0,0,0,.25);
}
.pad {
  /* display:flex; */
  /* flex-wrap:wrap; */
  button {
    width:25%;
    height:64px;
    float:left;
    border:none;
    &.ok {
      height:128px;
      float:right;
    }
    &.zero {
      width:50%
    }
    &.point {font-size:34px}
    &:nth-child(2),
    &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
      &:active {
          background:#ccc;
        }
  }
}
`

const NumberPadSection: FC = () => {
  const [output, setOutput] = useState<string>('0')
  const handleClick = (e: MouseEvent) => {
    const text = (e.target as HTMLElement).textContent
    if (!text) return
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(output === '0') {
          setOutput(text)
        } else {
          setOutput(output + text)
        }
        break
      case '.':
        if(output.indexOf(text) >= 0) {
          return
        } else {
          setOutput(output + text)
        }
        break
      case 'OK':
        console.log(text)
        break
      case '清空':
        setOutput('0')
        break
      case '删除':
        if(output === '0') return
        const arr = output.split('')
        if(arr.length === 1) return
        arr.splice(arr.length - 1)
        setOutput(arr.join(''))
        break
    }

  }
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className='pad clearfix' onClick={handleClick}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button className='point'>.</button>
      </div>
    </Wrapper>
  )
}
export default NumberPadSection