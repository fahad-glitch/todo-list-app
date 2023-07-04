import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,Image } from 'react-native'

export default function GoalInput({ onAddGoal, visible ,invisible}) {


    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enterText) {
        setEnteredGoalText(enterText);
    }

    function goalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={visible} animationType='slide'>

            <View style={styles.inputContainer}>
                <View style={styles.inputContainerItem}>

                <Image style={styles.image} source={require('../assets/goal.png')} />
                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <TextInput style={styles.textInput} placeholder='Your Course Goal' onChangeText={goalInputHandler} value={enteredGoalText} />
                </View>
                </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>

                <Button title='Add Goal' onPress={goalHandler} color="#001C30"/>
                </View>
                <View style={styles.button}>

                <Button title='Cancel' onPress={invisible} color="#001C30"/>
                </View>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:"#FFA41B"
    },
    inputContainerItem:{
        flexDirection:"row",
        width:"100%"
    }
    ,
    image:{
        width:90,
        height:90,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#001C30',
        width: '100%',
        color:"white",
        padding: 8,
    },
    buttonContainer: {
        marginTop:4,
        flexDirection:"row"
    },
    button:{
        width:100 ,
        marginHorizontal:8 ,
    }
})