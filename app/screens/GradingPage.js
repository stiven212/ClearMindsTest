import { View, Text, StyleSheet, Button, TextInput, FlatList, TouchableOpacity, Picker, Alert } from "react-native"
import React, {useState} from "react";
import { getPersonCed } from "../services/PersonServices";
import { ItemPersona } from "./ItemPerson";
import { GradePerson } from "../services/PersonServices";




export const Grading = ({route}) =>{

        const [grade, setGrade] = useState();
        const {cedula} = route.params;


        

        const [selectedValue, setSelectedValue] = useState("MAT");


        const refreshScreen = (personRetrieve) =>{

            setPersonas(personRetrieve);
        }

    return <View style={styles.container}>


        <Text style={styles.labels}>Seleccione materia</Text>

        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="MAT - Matematicas" value="MAT" />
        <Picker.Item label="ING - Ingles" value="ING" />
        <Picker.Item label="SOC - Sociales" value="SOC" />
        <Picker.Item label="MUS - Musica" value="MUS" />
      </Picker>
        
      <Text style={styles.labels}>Ingrese nota</Text>
        <TextInput
        style={styles.input}
        onChangeText={setGrade}
        value={grade}
        placeholder="Ej: 0.2"
        keyboardType="numeric"
        />
        

    <Button 
        title="Ingresar nota"

        onPress={()=>{
            if(parseFloat(grade)>1 || parseFloat(grade)<0 ){
                Alert.alert("Info", "Calificación debe estar entre 1 y 0")
            }else{

                GradePerson(cedula,selectedValue, grade)
            }
        }}

    />

    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'flex-start',
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
  