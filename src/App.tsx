import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ToDoType } from "@/lib/Types/ToDoType/ToDoType";
import Header from "@/components/Header/Header";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import AddToDo from "./components/AddToDo/AddToDo";

export default function App() {
  const [toDos, setToDos] = useState<ToDoType[]>([
    {
      id: 1,
      title: "First ToDo",
      description: "This is the first ToDo",
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Second ToDo",
      description: "This is the second ToDo",
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "Third ToDo",
      description: "This is the third ToDo",
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: "Fourth ToDo",
      description: "This is the fourth ToDo",
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const pressHandler = (id: number) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== id);
    });
  };

  const submitHandler = (text: string) => {
    if (text.length < 3) {
      Alert.alert("Oops! 🤪", "ToDos must be over 3 characters long. 🤭", [
        {
          text: "Understood 😱",
        },
      ]);
    } else {
      setToDos((prevToDos: ToDoType[]) => {
        return [
          {
            id: Math.random(),
            title: text,
            description: text,
            isCompleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          ...prevToDos,
        ];
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1">
        <StatusBar style="auto" />
        <Header title={`My Todos`} />
        <View className={`p-4 flex-1`}>
          <AddToDo submitHandler={submitHandler} />
          <View className="flex-1">
            <View className={``}>
              <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={toDos}
                renderItem={({ item }) => (
                  <ToDoItem toDo={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
