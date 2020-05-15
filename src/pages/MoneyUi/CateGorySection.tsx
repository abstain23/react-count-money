import styled from 'styled-components'

const CateGorySection = styled.section`
font-size:24px;
box-shadow:0 -1px 1px rgba(0,0,0,.25);
ul {
    display:flex;
    margin:0;
    /* background:white; */
    li {
        flex:1;
        text-align:center;
        padding: 18px 0;
        &.selected {
            position:relative;
            color:#1890ff;
            &::after {
                content:'';
                position:absolute;
                display:block;
                background:#1890ff;
                bottom:0;
                left:0;
                height:2px;
                width:100%;
            }
        }
    }
}
`

export default CateGorySection