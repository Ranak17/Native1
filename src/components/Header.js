import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flatlist from './Flatlist';

export default function Header() {
  return (
    <View style={styles.container}>
        {/* <Text style={{fontSize:20}}>Karan</Text>
        <Text>Karan</Text>
        <Text >Karan</Text>
        <Text>Karan</Text>
        <Text>Karan</Text> */}
        <Flatlist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    marginTop:50,
    // flex:1,
    // flexDirection:'row'
  },
});
