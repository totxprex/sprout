import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IntroScreen from "./intro"
import LoginScreen from "./login"
import SignupScreen from "./signup"


const IntroScreenStack = function () {


  const IntroStack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <IntroStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro">

        <IntroStack.Screen name="Intro" component={IntroScreen}></IntroStack.Screen>

        <IntroStack.Screen name="Login" component={LoginScreen}></IntroStack.Screen>

        <IntroStack.Screen name="Signup" component={SignupScreen}></IntroStack.Screen>


      </IntroStack.Navigator>
    </NavigationContainer>
  )
}


export default IntroScreenStack