import {useState} from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';

export default function App() {

  const [enteredGoalText,setEnteredGoalText] = useState('');
  const [goal,setGoal]=useState([]);
  function addGoalHandler()
  {
    setGoal((currentgoalText)=>[...currentgoalText,enteredGoalText]);
  }
  function goalInputHandler(enterText){
    setEnteredGoalText(enterText);
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
       {
        goal.map((item)=> <Text key={item}>{item}</Text>)
       }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    appContainer:{
      flex:1,
      paddingTop: 50,
      paddingHorizontal:16
    },
    inputContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:24,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc'
    },
    textInput:{
      borderWidth:1,
      borderColor:'#cccccc',
      width:'70%',
      marginRight:8,
      padding:8,
    },
    goalsContainer:{
      flex:6,
    }
}); 
