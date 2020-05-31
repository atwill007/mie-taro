import Taro from '@tarojs/taro'

const ENV = Taro.getEnv()

export const envInfo = {
  env: ENV,
  isWEB: ENV === Taro.ENV_TYPE.WEB,
  isWEAPP: ENV === Taro.ENV_TYPE.WEAPP,
  isALIPAY: ENV === Taro.ENV_TYPE.ALIPAY
}
