import { ToDoType } from "@/lib/Types/ToDoType/ToDoType";
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

type ToDoItemProps = {
  toDo: ToDoType;
  pressHandler: (id: number) => void;
};

export default function ToDoItem({ toDo, pressHandler }: ToDoItemProps) {
  return (
    <TouchableOpacity
      className="border border-dashed my-2 flex-row justify-between items-center p-4 bg-gray-200"
      onPress={() => pressHandler(toDo.id)}
    >
      <Text className="p-4">
        {toDo.title} - {toDo.description}
      </Text>
      <FontAwesome6 name="trash" size={24} color="red" />
    </TouchableOpacity>
  );
}
