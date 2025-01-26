import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    NavigationContainer,
} from '@react-navigation/native';
import { Fonts } from '../utils/theme';
import Home from '../screens/Home/Home';
import { Image, Text } from 'react-native';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Routes = () => {

    const TabNavigation = () => {
        return (
            <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarInactiveTintColor: 'rgba(0,0,0,0.47)',
                    tabBarLabelStyle: [
                        {
                            fontSize: 14,
                            marginBottom: 20,
                            fontWeight: 'bold',
                            fontFamily: Fonts.Font_Semi_Bold
                        },
                    ],
                    tabBarStyle: [
                        {
                            display: 'flex',
                            backgroundColor: 'white',
                            height: 100,
                        },
                        null,
                    ],
                })}
            >
                <Tab.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused, color, size }) => {
                            return <Text style={{ fontFamily: focused ? Fonts.Font_Primary : Fonts.Font_Primary, color: 'black', fontSize: 12 }}>Home</Text>
                        },
                        tabBarLabelStyle: {
                            color: 'white'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Image source={require('../assets/icons/home.png')}/>
                        },
                    }}
                />
                <Tab.Screen
                    name={'Profile'}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused, color, size }) => {
                            return <Text style={{ fontFamily: focused ? Fonts.Font_Primary : Fonts.Font_Primary, color: 'black', fontSize: 12 }}>Professional</Text>
                        },
                        tabBarLabelStyle: {
                            color: 'white'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Image source={require('../assets/icons/profile.png')}/>
                        },
                    }}
                />
                <Tab.Screen
                    name={'Users'}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused, color, size }) => {
                            return <Text style={{ fontFamily: focused ? Fonts.Font_Primary : Fonts.Font_Primary, color: 'black', fontSize: 12 }}>Users</Text>
                        },
                        tabBarLabelStyle: {
                            color: 'white'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Image source={require('../assets/icons/users.png')}/>
                        },
                    }}
                />
                <Tab.Screen
                    name={'Inbox'}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused, color, size }) => {
                            return <Text style={{ fontFamily: focused ? Fonts.Font_Primary : Fonts.Font_Primary, color: 'black', fontSize: 12 }}>Inbox</Text>
                        },
                        tabBarLabelStyle: {
                            color: 'white'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Image source={require('../assets/icons/chat.png')}/>
                        },
                    }}
                />
                                <Tab.Screen
                    name={'Account'}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabel: ({ focused, color, size }) => {
                            return <Text style={{ fontFamily: focused ? Fonts.Font_Primary : Fonts.Font_Primary, color: 'black', fontSize: 12 }}>Inbox</Text>
                        },
                        tabBarLabelStyle: {
                            color: 'white'
                        },
                        tabBarIcon: ({ focused, color, size }) => {
                            return <Image source={require('../assets/icons/account.png')}/>
                        },
                    }}
                />
                
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Dashboard" component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Routes