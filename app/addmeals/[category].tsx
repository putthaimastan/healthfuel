import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, Text, TextInput,TouchableOpacity } from "react-native";
import { useLayoutEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";



export default function AddMeals() {
  const { category } = useLocalSearchParams();
  const navigation = useNavigation();

  // Update header title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${category?.toString().toUpperCase()}`,
      //headerShown: true,
    });
  }, [navigation, category]);

  //Sending Meal and Kcal 
  const [mealName, setMealName] = useState('');
  const [mealKcal, setMealKcal] = useState('');

  console.log(mealName,mealKcal)

  return (
    <View className="flex-1">
      {/* Linear Gradient Background */}
      <LinearGradient
        className="flex-1"
        colors={["#b6fdff", "#e1f7f7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Category Header in 1st Char is Uppercase Format*/}
        <Text className="text-3xl ml-10 mr-10 mt-20 mb-5 font-semibold self-center">
          {category?.toString().charAt(0).toUpperCase() +
            category?.toString().slice(1).toLowerCase()}
        </Text>

        <View className="m-10">
          {/* Meal Name Input */}
          <Text className="text-xl font-semibold">Meals</Text>
          <TextInput
            className="text-xl font-semibold rounded-lg bg-gray-50 p-4 mt-5"
            //placeholderTextColor="rgba(0,0,0,0.2)"
            //placeholder="Enter Meals Name"
            keyboardType="default"
            //Submitting Meal's Name
            value={mealName}
            onChangeText={(mealName) => setMealName(mealName)}
          />
          {/* Kcal Input */}
          <Text className="font-semibold text-xl mt-10">Kcal</Text>
          <View className="flex-row">
            <TextInput
              className="font-semibold text-xl rounded-lg bg-gray-50 mt-5 w-32 p-4"
              //placeholderTextColor="rgba(0,0,0,0.2)"
              //placeholder="Enter Meals Calories"
              keyboardType="number-pad"
              //Submitting Meal's Kcal
              value={mealKcal}
              onChangeText={(mealKcal) => setMealKcal(mealKcal)}
            />
            <Text className="font-semibold text-xl text-primary self-center mt-5 ml-3">
              Kcal
            </Text>

            {/* Button Field */}
          </View>
          <View className="flex-row justify-between mt-10">
            {/* Clear Button */}
            <TouchableOpacity
              className="bg-white rounded-xl w-40 p-4 items-center justify-center"
              onPress={() => {setMealName(''); setMealKcal('');}}
            >
              {/* Clear Button's Style*/}
              <Text className="text-primary text-center text-xl font-semibold">
                Clear
              </Text>
            </TouchableOpacity>

            {/* Add Meals Button */}
            <TouchableOpacity
              className="bg-primary rounded-xl w-40 p-4 items-center justify-center"
              onPress={() => {}}
            >
              {/* Add Meals Button's Style*/}
              <Text className="text-white text-center text-xl font-semibold">
                Add Meal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

//Insert Meal name & Kcal
/*
const insertData = (name: string, kcal: number, category: string) => {
    console.log(name, kcal, category);
  };
*/
