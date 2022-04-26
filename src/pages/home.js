import React, { Fragment, useState } from 'react'
import {
  Platform, ScrollView, StyleSheet,
  Text,
  TextInput, View
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'



export function Home() {

  const [newSkill, setNewSkill] = useState()
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    let skillAlreadyExists = mySkills.find(item => item === newSkill)
    console.log(skillAlreadyExists)
    if (newSkill) {
      if (!skillAlreadyExists) {
        setMySkills((oldSkills) => [...oldSkills, newSkill])
      } else {
        alert('A skill já existe e não pode ser mais adicionada')
      }
    } else {
      alert('O campo não pode ser vazio')
    }
  }

  function handleExcludMySkills(id) {
    let oldSkills = mySkills
    oldSkills.splice(id, 1)
    setMySkills([...oldSkills])
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.title}> Welcome, Lucas</Text>

        <TextInput
          style={styles.input}
          placeholder='new skill'
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
        />

      <Button onPress={handleAddNewSkill}/>

        <Text style={[styles.title, { marginVertical: 30 }]}>
          My Skills
        </Text>
        <ScrollView>
          {
            mySkills.map((skill, key) => (
              <SkillCard skill={skill} key={key} onPress={handleExcludMySkills}/>
            ))
          }
        </ScrollView>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 8,
    borderRadius: 7,
    marginTop: 30,
  },
})