import { View, Text, StyleSheet, Button, TextInput, FlatList, TouchableOpacity, Picker } from "react-native"
import React, {useState} from "react";
import { getPersonCed } from "../services/PersonServices";
import { ItemPersona } from "./ItemPerson";



export const Grades = ({navigation}) =>{

        const [cedula, setCedula] = useState();

        const [personas, setPersonas] = useState([
           
            
        ])

        const refreshScreen = (personRetrieve) =>{

            setPersonas(personRetrieve);
        }

    return <View style={styles.container}>


        <Text style={styles.labels}>Ingrese Cedula de estudiante a buscar</Text>
        
        <TextInput
        style={styles.input}
        onChangeText={setCedula}
        value={cedula}
        placeholder="Ej: 0915806402"
        />
        <Button 
                title="Buscar Persona"
                onPress={()=>{
                    getPersonCed(cedula, refreshScreen)
                }}
        />

            <FlatList
            data={personas}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('GradingNav', {cedula:item.cedula})
                    }}>

                    <ItemPersona
                        person={item}
                        />
                    </TouchableOpacity>
                )
            }}
            />

    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'flex-start',
      alignItems:'strech',
      paddingTop: 40,

      
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
  