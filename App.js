import {Text, View, ScrollView, Alert } from 'react-native';

import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
import React, { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task)=>{
    //Add task
    setTaskList([...taskList,task]);
  }    

  const handleDeleteTask = (index) =>{
    Alert.alert(
      'Thong Bao',
       'Ban chac an muon xoa?', 
       [
        {
          text: 'OK',
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          },
        },
        {text: 'Cancel', onPress: () => {}},
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item,index)=>{
              return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
                
        </ScrollView>        
      </View>
      <Form onAddTask={handleAddTask}/>
    </View>
  );
}

