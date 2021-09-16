import React from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity
} from 'react-native'

export function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome, Felipe</Text> 
        <TextInput 
            style={styles.input} 
            placeholderTextColor="#555" 
            placeholder="New Skill" 
        /> 
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.button}>
            <Text style={styles.buttonText}>Adicionar Skill</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop: 50}]}>My Skills</Text> 

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
    button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        
    }
})