import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center gap-10">
      <Text className="underline text-3xl">Home</Text>
      <Link href="/profile">Go profile</Link>
    </View>
  );
}
