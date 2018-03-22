import React from 'react'
import { TabBarBottom, TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons/index'
import EventsScreen from '../screens/EventsScreen'
import NewEventScreen from '../screens/NewEventScreen'
import CalculatorScreen from '../screens/CalculatorScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Navigation = TabNavigator(
    {
        Events: {screen: EventsScreen},
        New: {screen: NewEventScreen},
        Calculator: {screen: CalculatorScreen},
        Settings: {screen: SettingsScreen}
    },
    {
        initialRouteName: 'Events',
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state
                let iconName
                switch (routeName) {
                    case 'Events':
                        iconName = `calendar-multiple`
                        break
                    case 'New':
                        iconName = 'calendar-plus'
                        break
                    case 'Calculator':
                        iconName = 'calculator'
                        break
                    case 'Settings':
                        iconName = 'settings'
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
                    case 'Events':
                        return `Tapahtumat`
                    case 'New':
                        return 'Uusi'
                    case 'Calculator':
                        return 'Laskin'
                    case 'Settings':
                        return 'Asetukset'
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