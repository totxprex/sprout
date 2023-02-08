import React, { useContext, useState } from "react"
import { Text, View, Image } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import styles from "../../styles/styles"
import EngineContext from "../../context/engine-context"
import logo from "../../../assets/logo.jpg"
import { generalThemeColor } from "../../styles/theme"
import { TextInput } from "react-native-paper"

const LoginScreen = function () {

  const [showNameWarning, setShowNameWarning] = useState(false)
  const [showEmailWarning, setShowEmailWarning] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const { setLoggedIn, setUniversalEmail, setUniversalName } = useContext(EngineContext)



  function login() {
    if (!name || !email) return

    setLoggedIn(true)
    setUniversalEmail(email)
    setUniversalName(name)
  }


  return (
    <View style={styles.introCont}>

      <Image source={logo} resizeMode="contain" style={styles.introImage} />

      <Text style={{ fontSize: 30, color: generalThemeColor, fontWeight: "bold", marginBottom: 50 }}>Set Up Profile</Text>

      <TextInput onChangeText={(text) => {
        setName(text)
        if (!name) setShowNameWarning(true)
      }} mode="outlined" style={{ marginBottom: 10, width: "80%" }} outlineColor={generalThemeColor} activeOutlineColor={generalThemeColor} placeholder="Name" label="Name" />

      <View style={{ alignItems: 'flex-start', width: '80%' }}>
        <Text style={[styles.warningText, { opacity: Number(`${showNameWarning ? 0 : 1}`) }]}>Name is required!</Text>
      </View>

      <TextInput onChangeText={(text) => {
        setEmail(text)
        if (!email) setShowEmailWarning(true)
      }} mode="outlined" style={{ marginBottom: 10, width: "80%" }} outlineColor={generalThemeColor} activeOutlineColor={generalThemeColor} placeholder="Email" label="Email" />

      <View style={{ alignItems: 'flex-start', width: '80%' }}>
        <Text style={[styles.warningText, { opacity: Number(`${showEmailWarning ? 0 : 1}`) }]}>Email is required!</Text>
      </View>



      <Icon.Button onPress={login} borderRadius={20} backgroundColor={generalThemeColor} name="lock1" style={{ width: 250, justifyContent: "center" }}>LOGIN</Icon.Button>

    </View >
  )
}


export default LoginScreen