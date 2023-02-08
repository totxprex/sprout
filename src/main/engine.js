import React, { useState } from "react"
import { View } from "react-native"
import IntroScreenStack from "../screens/stack/stack"
import styles from "../styles/styles"
import Profile from "../screens/profile"
import EngineContext from "../context/engine-context"


const Engine = function () {

  const [loggedIn, setLoggedIn] = useState(false)

  const [universalName, setUniversalName] = useState("")
  const [universalEmail, setUniversalEmail] = useState("")

  return (
    <EngineContext.Provider value={{ loggedIn, setLoggedIn, setUniversalEmail, setUniversalName, universalName, universalEmail }}>

      <View style={styles.enginCont}>

        {!loggedIn ? <IntroScreenStack /> : ""}

        <Profile display={loggedIn} />
      </View>
    </EngineContext.Provider>
  )
}


export default Engine