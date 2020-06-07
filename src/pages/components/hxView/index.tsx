import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MieHx } from '@mie-taro'

import './index.less'

class HxView extends Component {

  render () {
    return (
      <View className='hx-view'>
        <MieHx>default h3</MieHx>
        <MieHx size={1}>custom h1</MieHx>
        <MieHx size={5} className="hx-view__blue">blue h5</MieHx>
      </View>
    )
  }
}

export default HxView  as ComponentType
