import React, { useContext } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { generalThemeColor } from "../styles/theme"
import EngineContext from "../context/engine-context"
import styles from "../styles/styles"
import Icon from "react-native-vector-icons/AntDesign"


const Profile = function ({ display }) {

  const { setLoggedIn, universalName, universalEmail } = useContext(EngineContext)

  if (!display) return

  return (
    <View style={[styles.introCont, { justifyContent: 'flex-start', padding: 20 }]}>

      <View style={{ alignItems: "center", flexDirection: 'row', width: "100%", justifyContent: 'flex-start' }}>

        <TouchableOpacity onPress={() => setLoggedIn(false)} style={{ marginRight: 20, height: "100%" }}>
          <Icon name="leftcircle" size={45} color={generalThemeColor} />
        </TouchableOpacity>

        <View style={{ height: "100%" }}>
          <Text style={{ fontSize: 30, color: generalThemeColor, fontWeight: "bold", marginBottom: 50 }}>Your Profile</Text>
        </View>

      </View>

      <View style={{ alignItems: "center", flexDirection: 'row', width: "100%", justifyContent: 'flex-start' }}>

        <View style={styles.profileTextRound}>
          <Text style={{ color: 'white', fontSize: 20 }}>{universalName.slice(0, 1)}</Text>
        </View>

        <View>

          <Text style={{ fontSize: 17, fontWeight: "bold", }}>{universalName}</Text>

          <Text style={{ fontSize: 15, color: "grey" }}>{universalEmail}</Text>
        </View>
      </View>






    </View >
  )
}


export default Profile