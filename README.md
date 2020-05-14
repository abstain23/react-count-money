#### react + typescript

#### create-react-app

`@import-normalize; 普通化浏览器样式，让所有浏览器看起来都差不多`

#### 使用dart-sass 代替node-sass

`yarn add node-sass@npm:dart-sass`

#### 在tsconfig下修改baseUrl

```js
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

#### css in js

```
yarn add styled-components

由于是typescrip，需要安装声明文件
yarn add --dev @types/styled-components

如果安装了sass，可以在里面使用sass
```


#### react-eject 暴漏配置文件


#### [跨平台中文字体解决方案](https://github.com/zenozeng/fonts.css/)

#### 使用import svg遇到的问题(svg-sprite-loader svgo-loader)

```js
import icon_money from 'icons/money.svg'
import icon_tag from 'icons/tag.svg'
import icon_count from 'icons/count.svg'

console.log(icon_money,icon_tag,icon_count)

如果不使用一下引入的变量， svg会无效果
所以使用require
require('icons/money.svg') 
require('icons/tag.svg') 
require('icons/count.svg') 
```