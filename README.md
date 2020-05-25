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


#### useEffect

```js
useState 异步更新问题
 const showInput = () => {
        setInputVisible(() => {
            return true
        })
        // console.log(inputVisible)
        此时的inputEl.current还是空的
        // setTimeout(() => {
        //  inputEl.current!.focus()   
        // });
    }

使用useEffect解决，监听inputVisible的变化
useEffect(() => {
        // console.log('cc')
        // console.log(inputEl.current)
        if(inputVisible) {
            inputEl.current && inputEl.current.focus()
        }
    }, [inputVisible])


```

#### 受控组件与非受控组件

受控组件时时监听 `value onChange`
非受控组件 `defaultValue onBlur`


#### Partial 代表部分

```ts
const [selected, setSelected] = useState({
        tags: [] as string[],
        note:'',
        category: 0 as categoryType,
        amount: '0'
    })
  obj: Partial<typeof selected>

  obj可以是对象里面的任意一项
```

#### react-router

```js

exact 精准匹配

```

#### 安卓端input聚焦的时候，底部导航栏会上去， ios端input聚焦端时候，页面会放大

```js
解决办法
在容器里面加上
useEffect(() => {
        document.getElementById('layout')!.style.height = document.body.clientHeight + 'px'
    }, [])
  解决安卓端问题
  index.html 加上
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />  禁止缩放
```