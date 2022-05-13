import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './app/screens/HomeScreen';
import { Grades } from './app/screens/AddGradesScreen';
import { ListGrades } from './app/screens/ShowGradesScreen';
import { Persons } from './app/screens/AddPersonScreen';
import { ListPerson } from './app/screens/ListPersonScreen';
import { loadFirebaseConfiguration } from './app/utils/FirebaseConfig';
import { Grading } from './app/screens/GradingPage';



const Stack = createNativeStackNavigator();


export default function App() {
  loadFirebaseConfiguration();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeNav' component={Home}/>
        <Stack.Screen name='PersonsNav' component={ListPerson} />
        <Stack.Screen name='GradesNav' component={ListGrades} />
        <Stack.Screen name='GradeNav' component={Grades} />
        <Stack.Screen name='PersonNav' component={Persons} />
        <Stack.Screen name='GradingNav' component={Grading} />
      </Stack.Navigator>

    </NavigationContainer>
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
