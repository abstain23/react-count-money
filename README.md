#### react + typescript

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

```