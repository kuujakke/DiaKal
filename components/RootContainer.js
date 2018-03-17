import { TabBarBottom, TabNavigator } from 'react-navigation'
import CalendarScreen from '../screens/CalendarScreen'
import EventsScreen from '../screens/EventsScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons/index'
import React from 'react'

const RootContainer = TabNavigator(
    {
        Calendar: {screen: CalendarScreen},
        Events: {screen: EventsScreen},
    },
    {
        initialRouteName: 'Events',
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state
                let iconName
                if (routeName === 'Calendar') {
                    iconName = `calendar`
                } else if (routeName === 'Events') {
                    iconName = `calendar-multiple`
                }

                return <MaterialCommunityIcons name={iconName} size={35}
                                               color={tintColor}/>
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'teal',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    },
)

export default RootContainer