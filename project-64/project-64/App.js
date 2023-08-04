
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
//import { Header } from 'react-native-elements';
//import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen.js';
import {Component} from 'react';


export default class App extends Component{
render(){
  return(
    <View style = {{flex:1}}>
    <HomeScreen/>
    </View>
  )
}

}

