import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

type AddToDoProps = {
  submitHandler: (id: string) => void;
};

export default function AddToDo({ submitHandler }: AddToDoProps) {
  const [text, setText] = useState("");

  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <View>
      <TextInput className={`border p-4`} onChangeText={changeHandler} />
      <Button title={`Add ToDo`} onPress={() => submitHandler(text)} />
    </View>
  );
}
