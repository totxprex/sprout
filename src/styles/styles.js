import { StyleSheet, StatusBar, Platform } from "react-native";
import { generalThemeColor } from "./theme";




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enginCont: {
    flex: 1,
    width: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
  },
  introCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  introImage: {
    marginBottom: 20
  },
  headerOne: { fontSize: 30, color: generalThemeColor, fontWeight: "bold", marginBottom: 50 },
  warningText: { color: "red", fontSize: 12, marginBottom: 20 },
  profileTextRound: { marginRight: 20, width: 45, height: 45, borderRadius: 45, backgroundColor: generalThemeColor, alignItems: 'center', justifyContent: 'center' }
});


export default styles