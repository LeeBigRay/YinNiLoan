import { Platform, Dimensions } from 'react-native'

const isIphoneX = () => {
    let dimen = Dimensions.get('window')
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812)
    )
}

// 判断是否是iOS设备
const isIOS = () => {
    return Platform.OS === 'ios'
}

// 是否是Android设备
const isAndroid = () => {
    return Platform.OS === 'android'
}

//状态栏高度
const kStatusBarHeight = () => (isIOS() ? (isIphoneX() ? 44 : 20) : 0)

export {isIphoneX,
        isIOS,
        isAndroid}
