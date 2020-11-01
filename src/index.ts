// 组件库入口
import Taro from '@tarojs/taro'

import './styles/index.scss'

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} })

export { default as MieHx } from './components/hx'
export { default as MieRichText } from './components/rich-text'
