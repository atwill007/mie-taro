# mie-taro
> 自定义taro组件库

## Install
```js
npm i mie-ui
// or
yarn add mie-ui
```

## Usage
```js
// 需要在app.js手动引入组件样式
import 'mie-taro/dist/styles/index.scss' // mie-taro styles 全局引入一次即可
// page.js 引入组件
import {
  MieHx,
  MieRichText, // 富文本展示组件
  // ...
} from 'mie-taro'
```

## Example
- [MieHx](./src/pages/components/hxView/index.tsx)
- [MieRichText](./src/pages/components/rich-text-view/index.tsx)
  - 基于Parser封装的Taro(v2.x)富文本组件
