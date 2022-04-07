import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const Detail = ({ route }) =>
{
  const { item } = route.params;
  const {id, image, headLine, para, date } = item;
  return (
    <View key={id} style={styles.container}>
      <View style={styles.firstContainer}>
        <Image source={image} style={{width:400,height:300}}/>
      </View>
      <View style={styles.secondContainer}>
        <Text>{headLine}</Text>
        <Text style={{textAlign:'center'}}>{para}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
  },
  firstContainer: {
    flex: 0.4,
  },
  secondContainer: {
    flex: 0.6,
    justifyContent: "space-evenly",
    alignItems:"center"
  }
})