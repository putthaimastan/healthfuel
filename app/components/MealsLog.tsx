import { View, Text, Button, FlatList } from "react-native";

interface MealsLogProps {
  logTitle: string;
  totalKcal: number;
  mealItem?: MealList[];
}

export default function MealsLog({
  logTitle,
  totalKcal,
  mealItem = [],
}: MealsLogProps) {
  console.log(logTitle, totalKcal, mealItem);

  return (
    // Meals Log Boxes
    <View className="bg-white rounded-2xl p-5 m-10">
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
          <View className="h-0.5 bg-gray-300 my-2" />
        </View>
      ))}

    </View>
  );
}

/* Meals Log to Add Meals StackNavigator*/
