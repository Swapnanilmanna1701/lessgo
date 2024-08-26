import { Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Hello there, welcome to lessgo </Text>
      <StatusBar style="auto" />
    </View>
  );
}
