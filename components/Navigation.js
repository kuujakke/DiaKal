import React from 'react'
import { TabBarBottom, TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons/index'
import CalendarScreen from '../screens/CalendarScreen'
import EventsScreen from '../screens/EventsScreen'
import NewEventScreen from '../screens/NewEventScreen'
import CalculatorScreen from '../screens/CalculatorScreen'

const Navigation = TabNavigator(
    {
        Calendar: {screen: CalendarScreen},
        Events: {screen: EventsScreen},
        New: {screen: NewEventScreen},
        Calculator: {screen: CalculatorScreen}
    },
    {
        initialRouteName: 'Events',
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
                    case 'Calculator':
                        iconName = 'calculator'
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
                    case 'Calculator':
                        return 'Laskin'
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