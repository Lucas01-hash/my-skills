import React from "react"
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export function SkillCard({ skill, key, onPress }) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      key={key}
      onPress={() => onPress(key)}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})