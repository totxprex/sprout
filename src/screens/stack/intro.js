import React from "react"
import { Text, ImageBackground, Image } from "react-native"
import styles from "../../styles/styles"
import bg from "../../../assets/bg.jpg"
import logo from "../../../assets/logo.jpg"
import { generalThemeColor } from "../../styles/theme"
import { Button } from "react-native-paper"


const IntroScreen = function ({ navigation }) {


  return (
    <ImageBackground imageStyle={{ opacity: 0.7 }} source={bg} style={styles.introCont}>

      <Image source={logo} resizeMode="contain" style={styles.introImage} />

      <Text style={styles.headerOne}>Welcome</Text>

      <Button onPress={() => navigation.navigate("Signup")} mode="contained" textColor={generalThemeColor} buttonColor="white" style={{ marginBottom: 20, width: "80%" }}>Sign Up</Button>

      <Button onPress={() => navigation.navigate("Login")} mode="contained" buttonColor={generalThemeColor} style={{ marginBottom: 20, width: "80%" }}>Log In</Button>

    </ImageBackground >
  )
}


export default IntroScreen