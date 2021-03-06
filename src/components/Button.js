import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


export function Button({onPress}) {
  return (
    <TouchableOpacity 
    activeOpacity={.7} 
    style={styles.button} 
    onPress={onPress} 
    >
      <Text style={styles.buttonText}>Add Skill</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }

})