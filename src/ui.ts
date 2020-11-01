// ui构建入口
import Taro from '@tarojs/taro'

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} })

export { default as MieHx } from './components/hx'
export { default as MieRichText } from './components/rich-text'
