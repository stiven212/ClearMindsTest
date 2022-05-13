import { View, Text, StyleSheet, Button, FlatList } from "react-native"

export const ItemPersona = ({person}) => {

    return (
        <View style={styles.personaStyle}>
            <Text>{person.cedula}</Text>
            <Text>{person.nombre}</Text>
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