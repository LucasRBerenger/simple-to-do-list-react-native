import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const Layout: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<{ key: string; value: string }[]>([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  const deleteTask = (taskKey: string) => {
    setTasks(tasks.filter((item) => item.key !== taskKey));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteTask(item.key)}>
            <Text style={styles.task}>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center', 
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  task: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f8f8f8',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Layout;
