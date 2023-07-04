import { useState } from 'react';
import { StyleSheet, View, FlatList ,Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [modalVisible, setModalVisible]= useState(false)
  const [goal, setGoal] = useState([]);

  function startAddGoalHandler(){
    setModalVisible(true);
  }

  function stopAddGoalHandler(){
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoal((currentgoalText) => [...currentgoalText, {text:enteredGoalText, id:Math.random().toString()}]);
    stopAddGoalHandler();
  }
  function deletGoalHandler(id){
    setGoal((currentGoals)=>{
      return currentGoals.filter((goal)=> goal.id !==id);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* Goal Input Header */}
      <Button title='Add New Goal' color='#001C30' onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} invisible={stopAddGoalHandler}/>
      {/* Goal Body */}
      <View style={styles.goalsContainer}>
        {/* Goal items */}
        <FlatList data={goal} renderItem={(itemData) => 
          {
            return <GoalItem text={itemData.item.text} onDeleteItem={deletGoalHandler} id={itemData.item.id}/>;
          }
        }
        keyExtractor={(item,index)=>{
          return item.id;
        }} 
        alwaysBounceVertical={false} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:"#FFA41B"
  },
  
  goalsContainer: {
    flex: 6,
  },
  
}); 
