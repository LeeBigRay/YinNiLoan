import { Dimensions } from 'react-native';
import React, { Component } from 'react';

const basePixelWidth = 375
const px2dp = (px) => {
    return px * Dimensions.get('window').width / basePixelWidth
}

export { px2dp }

/**
 * 美工出标注图的时候，通常是按照屏幕宽度750出的。如果需求是UI根据不同屏幕尺寸，做等比例的缩放
 * 比如要设置View的宽度为屏幕的一半，如：
 * <View style={{width: px2dp(375)}} />
 */
