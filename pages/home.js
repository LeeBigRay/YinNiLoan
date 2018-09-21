import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper'

export default class Home extends Component {
  render() {
    return (
      <View>
      <Swiper showsButtons={false} height={180}>
      <Image source={require('./assets/pfb_tabbar_homepage_2x.png')} style={styles.img} />
      <Image source={require('./assets/pfb_tabbar_homepage_2x.png')} style={styles.img} />
    </Swiper>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  conpptainer: {
    flex: 1,
    backgroundColor: 'rgba(251,82,31,1.0)',
    alignItems: 'center',
  },
  scroviewContain: {
    width: kScreenWidth,
    alignItems: 'center',
  },

  swiperContain: {
    height: 180,
  },
  wrapper: {
  },
  //布局还是没搞清楚，暂时先这样
  img: {
    width: kScreenWidth,
    height: px2dp(180),
    resizeMode: 'contain'
  },
  cardView: {
    flex: 1,
    alignItems: 'center',
    width: kScreenWidth - 10,
    backgroundColor: 'white',
    borderTopWidth: 10,
    borderTopColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card: {
    flex: 1
  }

})

