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
    /* &.ok {
      height:128px;
      float:right;
    } */
    /* &.zero {
      width:50%
    } */
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
      &:nth-child(10),
      &:nth-child(13) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(14) {
        background:#B8B8B8;
      }
      &:nth-child(12),
      &:nth-child(15) {
        background:#A9A9A9;
      }
      &:nth-child(16) {
        background:#9A9A9A;
      }
      &:active {
          background:#ccc;
        }
  }
}
`

export default Wrapper