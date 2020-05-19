import React, { FC, MouseEvent } from 'react'
import Wrapper from './NumberPadSection/Wrapper'

type Props = {
  value: string,
  onChange:(output:string) => void
}

const NumberPadSection: FC<Props> = (props) => {
  // const [output, _setOutput] = useState<string>('0')
  const {value:output, onChange} = props

  const setOutput = (output:string) => {
    if(output.length > 16) {
      output = output.slice(0,16)
    }
    onChange(output)
  }
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
        /* if(output === '0') return
        const arr = output.split('')
        if(arr.length === 1) return
        arr.splice(arr.length - 1)
        setOutput(arr.join('')) */
        if(output.length === 1) {
          setOutput('0')
        } else {
          setOutput(output.slice(0, -1))
        }
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