import React, { useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import checkIcon from '../assets/check.png';

import { styles } from '../styles/todo-input';

type TodoInputProps = {
  addTask: (task: string) => void;
};

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (!task) {
      Alert.alert('Opa, você esqueceu de preencher o input.');
    } else {
      addTask(task);
      setTask('');
    }
  }

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === 'ios'
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow
      ]}
    >
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />

      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}
