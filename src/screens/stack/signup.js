import React from "react"
import { Text, View, Image, Alert } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import styles from "../../styles/styles"
import logo from "../../../assets/logo.jpg"
import { generalThemeColor } from "../../styles/theme"




const SignupScreen = function () {


  return (
    <View style={styles.introCont}>

      <Image source={logo} resizeMode="contain" style={styles.introImage} />

      <Text style={{ fontSize: 30, color: generalThemeColor, fontWeight: "bold", marginBottom: 30 }}>Sign Up</Text>

      <Text style={{ marginBottom: 30 }}>Sign up implementation not in assessment</Text>

      <Icon.Button onPress={() => Alert.alert("NOTE", "Signup not in assessment details so it is not implemented")} borderRadius={20} backgroundColor={generalThemeColor} name="lock1" style={{ width: 250, justifyContent: "center" }}>SIGNUP</Icon.Button>

    </View >
  )
}


export default SignupScreen