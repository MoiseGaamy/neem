import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Feed = ({item}) =>
{
    const { image, headLine, para, date:newDate } = item;
    const date = new Date().toDateString()
  return (
    <View style={styles.container}>
          <View style={styles.detailcontainer}>
              <View>
                  <Image style={{width:370,height:150}} source={image}/>
              </View>
         <Text style={{fontSize:18,lineHeight:30}}>{headLine}</Text>
         <Text>{para}</Text>
         <Text style={{fontSize:17}}>{newDate}</Text>
     </View>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },
    detailcontainer: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor:"#789395",
        borderRadius: 8,
        justifyContent:"space-evenly"
        // height:"80%"
    }
})