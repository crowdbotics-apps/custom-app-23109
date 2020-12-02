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
          style={styles.Image_5}
        />
        <TextInput
          placeholder="Type an item to search"
          style={styles.TextInput_7}
          value={this.state.TextInput_7}
          onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
        />
      </View>
      <View style={styles.View_11}>
        <View style={styles.View_12}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/nike_Ig90htB.jpg"
            }}
            style={styles.Image_15}
          />
          <Text style={styles.Text_21}>Product 1</Text>
          <Text style={styles.Text_26}>$299</Text>
        </View>
        <View style={styles.View_13}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/nike_Ig90htB.jpg"
            }}
            style={styles.Image_19}
          />
          <Text style={styles.Text_24}>Product 2</Text>
          <Text style={styles.Text_31}>$199</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { height: 200, alignItems: "center", alignContent: "center" },
  View_3: {
    width: 300,
    height: 0,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start"
  },
  Image_5: { height: 260 },
  TextInput_7: { height: 40, marginTop: 8 },
  View_11: { height: 0, flexDirection: "row", alignContent: "space-between" },
  View_12: {
    width: 150,
    height: 200,
    flexWrap: "nowrap",
    alignItems: "center"
  },
  Image_15: { height: 80, alignSelf: "flex-start" },
  Text_21: { alignSelf: "center", fontSize: 16, fontFamily: "Roboto-Regular" },
  Text_26: {
    alignSelf: "center",
    fontSize: 18,
    color: "#2a6ea2",
    fontFamily: "Roboto-Regular"
  },
  View_13: { width: 150, height: 200 },
  Image_19: { height: 80, alignSelf: "flex-start" },
  Text_24: { alignSelf: "center", fontSize: 16, fontFamily: "Roboto-Regular" },
  Text_31: {
    alignSelf: "center",
    fontSize: 18,
    color: "#2a6ea2",
    fontFamily: "Roboto-Regular"
  }
})
