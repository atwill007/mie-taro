import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MieRichText } from '@mie-taro'
import { richTextList } from './data'

import './index.less'

class RichTextView extends Component {
  render () {

    return (
      <View className='hx-view'>
        <MieRichText html={richTextList[0].html} styleText={richTextList[0].styleText} />
        <MieRichText html={richTextList[1].html} styleText={richTextList[1].styleText} />
      </View>
    )
  }
}

export default RichTextView  as ComponentType
