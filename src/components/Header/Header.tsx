import { Text, View } from "react-native";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <View className="bg-blue-500 p-4 shadow-md">
      <Text className="text-white text-center text-xl font-bold">{title}</Text>
    </View>
  );
}
