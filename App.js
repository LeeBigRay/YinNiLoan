import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from './pages/home';
import LoanList from './pages/loanlist';
import Me from './pages/me';
import {px2dp} from './uiAdapt';
import TabBarItem from './utils/TabBarItem';
import Swiper from 'react-native-swiper'

const TabNav = TabNavigator({
    Home:
        {
            screen: Home,
            navigationOptions:({navigation}) => {
                return ({
                    tabBarLabel: '首页',
                    tabBarIcon:({focused,tintColor}) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            normalImage={require('./assets/pfb_tabbar_homepage_2x.png')}
                            selectedImage={require('./assets/pfb_tabbar_homepage_selected_2x.png')}
                        />
                    )
                });
            }
        },
    LoanList: {
        screen: LoanList,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '同城',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./assets/pfb_tabbar_homepage_2x.png')}
                    selectedImage={require('./assets/pfb_tabbar_homepage_selected_2x.png')}
                />
            )
        }),
    },
    Me: {
        screen: Me,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '我的',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./assets/pfb_tabbar_homepage_2x.png')}
                    selectedImage={require('./assets/pfb_tabbar_homepage_selected_2x.png')}
                />
            )
   
        }),
    }
}, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: 'rgb(22,131,251)',
            inactiveTintColor: '#959595',
            pressColor: 'rgb(22,131,251)',
            style: { backgroundColor: '#ffffff', height: 52,borderTopColor:'#e6e6e6',borderTopWidth:1},
            indicatorStyle: { height: 1 },
            showIcon: true,
            labelStyle: {
                fontSize: px2dp(12),
                marginTop: px2dp(1)
            },
            iconStyle: {
                width: px2dp(25),
                height: px2dp(25)
            }
        }
    })

const Navigator = StackNavigator({
    TabNav: { screen: TabNav }
  },
  {
      initialRouteName: 'TabNav',
      headerMode: 'screen'
  })

// const styles = StyleSheet.create({
//     icon: {
//         width: px2dp(48),
//         height: px2dp(42),
//         resizeMode: 'contain'
//     }
// });

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="rgba(0,0,0,0.1)" translucent={true} />
                <Navigator />
            </View>
        )
    }
}
