import { View, Text, Keyboard, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React , {useState} from 'react'

import styles from './style'
const Form = (props) => {
  const [task, setTask] = useState('');//khoi tao number co gia tri la 1
  const handleAddTask = () => {
    if(task.length === 0){
      alert('Vui long nhap task');
      return false;
    }
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss(); //an ban phim
  };

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
        style={styles.addTask}
    >
      <TextInput 
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholder='Your Task' 
          style={styles.input}
         
      />
      <TouchableOpacity
        onPress={handleAddTask}
      >
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
       </TouchableOpacity>

      
    </KeyboardAvoidingView>
  )
}

export default Form