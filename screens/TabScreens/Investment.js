import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native'
import React from 'react';
import Feed from '../Feed.js';

const Investment = ({navigation}) =>
{
  const data = [
    {
      image: require("../../assets/shop.jpg"),
      headLine: "Looking for Investor",
      para: `i'm about to start a new business in clothing and.
       is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
      date: new Date().toDateString(),
    },
    {
      image: require("../../assets/cafe.jpg"),
      headLine: "Looking for a shareholder",
      para: `i'm about to start a new business in cafe and i'm looking for a shareholder 
       is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
      date: new Date().toLocaleDateString(),
    },
    // {
    //   image: require("../../assets/restaurant.jpg"),
    //   headLine: "Looking for sponsor",
    //   para: `i'm about to start a new business in restaurant and i'm looking for a sponsor
    //   to join me and start this journey together.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    //    PageMaker including versions of Lorem Ipsum.`,
    //   date: new Date().toLocaleDateString(),
    // },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.feed}>
        <Text>Investment Feed</Text>
      </View>
      <View style={styles.feedContainer}>
        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('feed', { item })}><Feed item={item}/></TouchableOpacity> }/>
      </View>
    </View>
  )
}

export default Investment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
  },
  feed: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
    
  },
  feedContainer: {
    flex: 1,
  }
})