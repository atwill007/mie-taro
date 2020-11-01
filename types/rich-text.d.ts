import { ComponentClass } from 'react'
import { BaseProps, BaseState } from './base'

export interface MieRichTextProps extends BaseProps {
  /**
   * 富文本内容
   */
  html: string
  /**
   * 样式
   * @default ''
   */
  styleText?: string
}

export interface MieRichTextState extends BaseState {
}

declare const MieRichText: ComponentClass<MieRichTextProps>

export default MieRichText
