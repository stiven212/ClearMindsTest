import { View, Text, StyleSheet, Button, TextInput } from "react-native"
import React, {useState} from "react";
import {savePerson} from '../services/PersonServices';


export const Persons = ({navigation}) =>{

    const [name, onChangeName] = useState(null);
    const [surname, onChangeSurname] = useState(null);
    const [cedula, onChangeCedula] = useState(null);

    return <View style={styles.container}>
        <Text style={styles.labels} >Ingrese su nombre: </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Ej: Luis"
        />
        <Text style={styles.labels}>Ingrese su apellido: </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeSurname}
        value={surname}
        placeholder="Ej: Cárdenas"
        />
        <Text style={styles.labels}>Ingrese su cedula: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCedula}
        value={cedula}
        placeholder="Ej: 010847526944"
        keyboardType="numeric"
      />
      <Button 
        title="Guardar"
        onPress={()=>{
            
                let person = {
                    nombre: name,
                    apellido: surname,
                    cedula: cedula

                    
                }
            
            savePerson(person);
        }}
      />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center'

      
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      labels:{
          
          fontSize:20
      }
  });
  