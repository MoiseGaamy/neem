import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pay = () => {
  return (
    <View style={styles.container}>
      <Text>Pay</Text>
    </View>
  )
}

export default Pay

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"yellow"
    }
})