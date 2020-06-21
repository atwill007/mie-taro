import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { MieHxProps, MieHxState } from 'types/hx'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { idxList } from 'number-magic'
import BaseComponent from '../BaseComponent'
import { envInfo } from '../../common/utils'

export default class MieHx extends BaseComponent<
  MieHxProps,
  MieHxState
> {
  public static defaultProps: MieHxProps
  public static propTypes: InferProps<MieHxProps>

  public constructor(props: MieHxProps) {
    super(props)
    this.state = {
      isWEB: envInfo.isWEB
    }
  }

  private onClick = (event: CommonEvent) => {
    this.props.onClick && this.props.onClick(event)
  }

  public render(): JSX.Element {
    const {
      size
    } = this.props

    const hxClassName = `mie-hx mie-hx--${size}`

    if (this.state.isWEB) {
      const WebTag: any = `h${size}`

      return (
        <WebTag
          className={classNames(hxClassName, this.props.className)}
          style={this.props.customStyle}
          onClick={this.onClick}
        >
          {this.props.children}
        </WebTag>
      )
    }

    return (
      <View
        className={classNames(hxClassName, this.props.className)}
        style={this.props.customStyle}
        onClick={this.onClick}
      >
        {this.props.children}
      </View>
    )
  }
}

MieHx.defaultProps = {
  size: 3,
  onClick: () => {},
  customStyle: {}
}

MieHx.propTypes = {
  size: PropTypes.oneOf(idxList(6, 1)),
  onClick: PropTypes.func,
  className: PropTypes.any,
  customStyle: PropTypes.object
}
