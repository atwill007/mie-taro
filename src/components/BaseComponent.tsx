import { Component } from '@tarojs/taro'
import { BaseProps, BaseState } from 'types/base'

export default class BaseComponent<P = BaseProps, S = BaseState> extends Component<P, S> {
  public constructor(props: P) {
    super(props)
  }

  static options = {
    // addGlobalClass: true
  }
}
