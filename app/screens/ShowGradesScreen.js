import { View, Text, StyleSheet, Button, TextInput, FlatList, TouchableOpacity, Picker } from "react-native"
import React, {useState} from "react";
import { getPersonCed } from "../services/PersonServices";
import { ItemPersona } from "./ItemPerson";
import { ItemGrade } from "./itemGrade";
import { getGrades } from "../services/PersonServices";




export const ListGrades = ({navigation}) =>{

        const [cedula, setCedula] = useState();

        const [promedio, setPromedio] = useState("");

        let sum= 0;
    
        const [materias, setMaterias] = useState([
           

        ])

        const refreshScreen = (personRetrieve) =>{

            setMaterias(personRetrieve);
            console.log("Materias", personRetrieve[0].nota)


            let nota1= parseFloat(personRetrieve[0].nota)
            let nota2= parseFloat(personRetrieve[1].nota)
            let nota3= parseFloat(personRetrieve[2].nota)
            let nota4= parseFloat(personRetrieve[3].nota)
            
            let suma= nota1+ nota2 + nota3 + nota4
            console.log("Materias", suma)
            
            let prom = (suma /4).toFixed(2)
            
            console.log("Promedio", prom)

            setPromedio("Promedio: "+ prom)

            
            
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
                title="Buscar Calificaciones"
                onPress={()=>{
                    getGrades(cedula, refreshScreen)
                }}
        />

            <FlatList
            data={materias}
            renderItem={({item})=>{

                sum = sum + item.nota

                return (
                    

                    <ItemGrade
                        materia={item}
                    />
                    
                )
            
            }}
            keyExtractor={(item)=>{
                return item.codigo;
              }}
            />

            <Text style={styles.labels}>{promedio}</Text>

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
  