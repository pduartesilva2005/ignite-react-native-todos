import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  FlatListProps
} from 'react-native';

import { styles } from '../styles/my-tasks-list';

function FlatListHeaderComponent() {
  return (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={item.done ? styles.taskButtonDone : styles.taskButton}
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
              testID={`marker-${index}`}
            />
            <Text style={item.done ? styles.taskTextDone : styles.taskText}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  );
}
