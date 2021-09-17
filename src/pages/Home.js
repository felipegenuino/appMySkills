import React, {useState} from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
} from 'react-native'

import {Button} from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
    const [newSkill, setNewskill] = useState('');
    const [mySkill, setMySkill] = useState([]);

    function handleAddNewSkill(){
        setMySkill(oldState => [...oldState, newSkill]) 
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome, Felipe</Text> 
        <TextInput 
            style={styles.input} 
            placeholderTextColor="#555" 
            placeholder="New Skill" 
            onChangeText={setNewskill}
        /> 
     <Button onPress={handleAddNewSkill}/> 

        <Text style={[styles.title, {marginTop: 50, marginBottom: 20}]}>My Skill</Text> 
 
       {mySkill.map( skill => (
          <SkillCard  skill={skill}/> 
       ))
       }
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70, 
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e15',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },  
})