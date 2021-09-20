import React, {useState, useEffect} from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,  
    FlatList, 
} from 'react-native'

import {Button} from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData{
    id: string;
    name: string;
    date?: Date;
}

export function Home(){
    const [newSkill, setNewskill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

  
    function handleAddNewSkill(){
        const data = {
            id:String(new Date().getTime()),
            name: newSkill,
        }
        setMySkills(oldState => [...oldState, data]) 
        
    }


    useEffect(()=>{
        console.log('useEffect Executado')
    }, [mySkills])

    useEffect(()=>{
        const currentHour = new Date().getHours();
        if( currentHour < 12){
                setGretting('Good morning')
        }else if (currentHour >= 12 && currentHour < 18) {
              setGretting('Good afternoon')
        }else {
                setGretting('Good night')
        }
    }, [])

  return (
    <View style={styles.container}>
       
      <Text style={styles.title}>Wellcome, Felipe</Text> 
      <Text style={styles.gretting}>{gretting}</Text> 

        <TextInput 
            style={styles.input} 
            placeholderTextColor="#555" 
            placeholder="New Skill" 
            onChangeText={setNewskill}
        /> 
     <Button onPress={handleAddNewSkill} title="Adicionar Skill" /> 
 
        <Text style={[styles.title, {marginTop: 50, marginBottom: 20}]}>My Skill</Text> 
 <FlatList 
    data={mySkills} 
    keyExtractor={item=> item.id}
    renderItem={({item})=>(
        <SkillCard skill={item.name} />
    )}
 />
      
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
    gretting: {
        fontSize: 14,
        color: '#fff'
    }
})