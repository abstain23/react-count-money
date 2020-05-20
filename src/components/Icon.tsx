import React from 'react'
// require('icons/money.svg') 
// require('icons/tag.svg') 
// require('icons/count.svg') 

// 引入icons文件夹的所有icon typescript 下 需要安装 yarn add -D @types/webpack-env
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

// interface iconProps {
//     name:string;
//     fill:string;
// }

type Props = {
    name?:string
} & React.SVGAttributes<SVGElement>
// type Props = {
//     name?: string
//   } & React.SVGAttributes<SVGElement>

function Icon(props:Props) {
    const {name, children, ...rest} = props
    return (
        <svg className='icon' {...rest}>
            {props.name && <use xlinkHref={'#'+props.name} />}
        </svg>
    )
}

export default Icon
