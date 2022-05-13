import { View, Text, StyleSheet, Button } from "react-native"
import { StatusBar } from 'expo-status-bar';


export const Home=({navigation})=>{
    return (<View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.title1}>Aplicación de calificaciones</Text>
          </View>
    
          <View style={styles.buttons}>
    
          <Button title="INGRESAR PERSONA" 
          onPress={() => {
              navigation.navigate('PersonNav')
          }}
          />
          <Button title="LISTAR PERSONAS" 
          onPress={() => {
              navigation.navigate('PersonsNav')
          }}
          
          />
          <Button title="INGRESAR NOTA" 
          onPress={() => {
              navigation.navigate('GradeNav')
          }}
          
          />
          <Button title="MOSTRAR NOTAS" 
          onPress={() => {
              navigation.navigate('GradesNav')
          }}
          
          
          />
          </View>
      
          <StatusBar style="auto" />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      
    },
    buttons:{
      flex: 3,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    title:{
      flex:1,
      justifyContent:'center',
    },
    title1:{
      fontSize:30
  
    }
  });
  