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

type IconProps = {
    name:string;
    fill?:string;
} & React.SVGAttributes<SVGAElement>

function Icon(props:IconProps) {
    return (
        <svg className='icon'>
            <use xlinkHref={'#'+props.name} fill={props.fill}/>
        </svg>
    )
}

export default Icon
