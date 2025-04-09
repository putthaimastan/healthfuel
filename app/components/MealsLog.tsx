import { useRouter } from "expo-router";
import { View, Text,TouchableOpacity } from "react-native";

interface MealsLogProps {
  logTitle: string;
  totalKcal: number;
  mealItem: Array <{ name: string; kcal: number }>;
}

export default function MealsLog({
  logTitle,
  totalKcal,
  mealItem,
}: MealsLogProps) {

  //Routing
  const router = useRouter();


  console.log(logTitle, totalKcal, mealItem);

  return (
    // Meals Log Boxes
    <View className="bg-white rounded-2xl p-5 ml-10 mr-10 mt-7">
      <View className="flex-row justify-between">
        <Text className="text-xl font-semibold text-primary decoration-solid">
          {logTitle}
        </Text>
        <Text className="text-xl font-semibold text-primary ">
          {totalKcal} Kcal
        </Text>
      </View>

      {/*Horizon Line*/}
      <View className="h-0.5 bg-primary mt-3"></View>

      {mealItem.map((item, index) => (
        <View key={`${item.name}-${index}`}>
          {/* Meal row */}
          <View className="flex-row justify-between m-1">
            <Text className="text-xl font-semibold">{item.name}</Text>
            <Text className="text-xl font-semibold">{item.kcal} Kcal</Text>
          </View>

          {/* Divider line below each meal */}
          <View className="h-0.5 bg-gray-300 my-3" />
        </View>
      ))}

      {/* Add More Meal Button & Route to AddMeals Screen*/}
      <TouchableOpacity
        onPress={() => {
          const category = logTitle.toLowerCase();
          router.push(`/addmeals/${category}`);
        }}
        className="bg-primary p-2 rounded-xl w-full"
      >
        <Text className="text-white text-center text-xl font-semibold">
          Add More Meal
        </Text>
      </TouchableOpacity>
    </View>
  );
}

