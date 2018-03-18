import { TabBarBottom, TabNavigator } from 'react-navigation'
import CalendarScreen from '../screens/CalendarScreen'
import EventsScreen from '../screens/EventsScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons/index'
import React from 'react'
import NewEventScreen from '../screens/NewEventScreen'

const Navigation = TabNavigator(
    {
        Calendar: {screen: CalendarScreen},
        Events: {screen: EventsScreen},
        New: {screen: NewEventScreen},
    },
    {
        initialRouteName: 'New',
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state
                let iconName
                switch (routeName) {
                    case 'Calendar':
                        iconName = `calendar`
                        break
                    case 'Events':
                        iconName = `calendar-multiple`
                        break
                    case 'New':
                        iconName = 'calendar-plus'
                        break
                    default:
                        iconName = 'calendar'
                }

                return <MaterialCommunityIcons name={iconName} size={35}
                                               color={tintColor}/>
            },
            tabBarLabel: ({focused, tintColor}) => {
                const {routeName} = navigation.state
                switch (routeName) {
                    case 'Calendar':
                        return `Kalenteri`
                    case 'Events':
                        return `Tapahtumat`
                    case 'New':
                        return 'Uusi'
                    default:
                        break
                }
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

export default Navigation