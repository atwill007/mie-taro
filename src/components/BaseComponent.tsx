import { Component } from '@tarojs/taro'
import { BaseProps, BaseState } from 'types/base'

export default class BaseComponent<P = BaseProps, S = BaseState> extends Component<P, S> {
  public constructor(props: P) {
    super(props)
  }

  static options = {
    // 全局样式类是微信小程序定义的一套用于修改组件内部样式的方案。如果希望组件外样式类能够影响组件内部，可以在组件构造器中的 options.addGlobalClass 字段设置为 true（Taro UI 的组件均开启了此特性）。这个特性从小程序基础库版本 2.2.3 开始支持
    addGlobalClass: true
  }
}
