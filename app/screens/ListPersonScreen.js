import { View, Text, StyleSheet, Button, FlatList } from "react-native"

import React,{useState} from "react";
import {ItemPersona} from './ItemPerson';
import {getPersons} from '../services/PersonServices'

export const ListPerson = ({navigation}) =>{



    const [personas, setPersonas] = useState([
        {nombre:"Andres",apellido:"Diaz",cedula:"12145"},
        {nombre:"Carlos",apellido:"Diaz",cedula:"12645"}
    ])
    
    // getPersons();

    const refreshScreen = (personRetrieve) =>{

        setPersonas(personRetrieve);
    }
    return <View style={styles.container}>
        {/* <Text>Aqui listas personas</Text> */}
        <Button title="Consultar"
        
        onPress={()=>{
            getPersons(refreshScreen) ;
        }}/>
        
        <FlatList
            data={personas}
            renderItem={({item})=>{
                return (
                    <ItemPersona
                        person={item}
                    />
                )
            }}
            />
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'strecht'

      
    },
  });
  