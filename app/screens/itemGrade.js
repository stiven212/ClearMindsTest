import { View, Text, StyleSheet, Button, FlatList } from "react-native"
import React, {useState} from "react";


export const ItemGrade = ({materia}) => {

    const [promedio, setPromedio] = useState("");


  

    return (
        <View style={styles.personaStyle}>
            <Text>{materia.materia}  {materia.nombreMateria}</Text>
            <Text>{materia.nota}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    personaStyle: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'cyan',
      justifyContent:'center',
      alignItems:'strecht',
      marginBottom:10,
      

      
    },
  });