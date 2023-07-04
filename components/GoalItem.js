import { StyleSheet ,View,Text,Pressable, Button} from "react-native"

export default function GoalItem({text,onDeleteItem,id}) {
    
    return (
        
            <View style={styles.goalItem} >
                <Pressable onPress={onDeleteItem.bind(this,id)}
                style={({pressed})=> pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{text}</Text>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#525FE1',
        
    },
    pressedItem:{
        opacity:'0.5'
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})
