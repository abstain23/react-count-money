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