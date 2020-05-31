import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { BaseProps, BaseState } from './base'

export interface MieHxProps extends BaseProps {
  /**
   * h1-h6
   * @default 3
   */
  size?: 1 | 2 | 3 | 4 | 5 | 6
  /**
   * 点击时触发
   */
  onClick?: CommonEventFunction
}

export interface MieHxState extends BaseState {
}

declare const MieHx: ComponentClass<MieHxProps>

export default MieHx
