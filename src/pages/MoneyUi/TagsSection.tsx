import styled from 'styled-components'
const TagsSection = styled.section`
background:#fff;
padding:12px 4px;
ol {
    font-size:14px;
    .ant-tag-checkable {
        border: 1px solid #d9d9d9;
        border-radius:18px;
        padding:3px 18px;
        margin:8px 12px;
    }
}
> .ant-btn {
        margin-left:12px;
        font-family:inherit;
        font-size:12px;
    }
`
export default TagsSection