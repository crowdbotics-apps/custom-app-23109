import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_7: "" }

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3}>
        <Image
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/crowdbotics.jpg"
          }}
        />
        <TextInput
          placeholder="Type an item to search"
          style={styles.TextInput_7}
          value={this.state.TextInput_7}
          onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: { height: 200, alignItems: "center", alignContent: "center" },
  ImageBackground_3: { width: 600, height: 200, backgroundSize: "cover" },
  Image_6: { height: 400, borderBottomWidth: 20 },
  View_1: { height: 200, alignItems: "center", alignContent: "center" },
  ImageBackground_3: { width: 600, height: 0, alignItems: "center" },
  Image_5: {},
  TextInput_7: { width: "0100%", paddingLeft: 180 },
  View_11: { alignSelf: "center", flexDirection: "row" },
  View_12: { width: 120, alignSelf: "flex-start" },
  View_13: { width: 130, alignSelf: "flex-start" },
  View_1: { height: 200, alignItems: "center", alignContent: "center" },
  View_3: { width: 300, height: 200, alignItems: "center" },
  Image_5: {},
  View_1: { height: 200, alignItems: "center", alignContent: "center" },
  View_3: { width: 300, height: 200, alignItems: "center" },
  Image_5: {},
  TextInput_7: { marginTop: 8, marginBottom: 15 }
})
