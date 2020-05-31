import { CSSProperties } from 'react'

// 基础props
export interface BaseProps {
  className?: string
  customStyle?: string | CSSProperties
}

// 基础state
export interface BaseState {
  isWEB?: boolean
  isWEAPP?: boolean
  isALIPAY?: boolean
}