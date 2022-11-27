import { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, FlatList, Alert } from 'react-native';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.key != key));
  };

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString()},
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be 3 simbols long", [
        { text: "Understood", onPress: () => console.log("aler closed")}
      ]);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoForm submitHandler={submitHandler} />
          <View style={styles.list}>
              <FlatList 
                data={todos}
                renderItem={({ item}) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
