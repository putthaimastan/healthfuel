import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MealsLog from "../components/MealsLog";
import { useState } from "react";


const meals = () => {
  //Mock Meal Data: Breakfast, Lunch, Dinner
  const [data,setData] = useState([
    {id:1, name:'ไข่', kcal: 72, category:'breakfast', date:''},
    {id:2, name:'ข้าวสวย', kcal: 200, category:'breakfast', date:''},
    {id:3, name:'ไข่ดาว', kcal: 90, category:'lunch', date:''},
    {id:4, name:'ข้าวสวย', kcal: 200, category:'lunch', date:''},
    {id:5, name:'ไข่ดาว', kcal: 90, category:'dinner', date:''},
    {id:6, name:'สเต็ก', kcal: 650, category:'dinner', date:''}
  ])
  
  // Group meals by Category
  const getMealsByCategory = (category: string) => {
    return data.filter((item) => item.category === category);
  };
  
  // Extract meals by Category
  const breakfastMeals = getMealsByCategory("breakfast");
  const lunchMeals = getMealsByCategory("lunch");
  const dinnerMeals = getMealsByCategory("dinner");

  // Calculate Total Kcal รวมแคลอรี่ของมื้ออาหารทั้งหมดใน array ที่ส่งเข้ามา
  const calculateTotalKcal = (meals: { kcal: number }[]) => { // 
    return meals.reduce((total, meal) => total + meal.kcal, 0);
  };


  return (
    <View className="flex-1">
      {/* Linear Gradient Background */}
      <LinearGradient className="flex-1"
        colors={["#b6fdff", "#e1f7f7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header*/}
          <Text className="text-3xl ml-10 mr-10 mt-20 mb-5 font-semibold">Today's Meal</Text>
          {/* Meals Log Breakfast*/}
          <MealsLog 
            logTitle={"Breakfast"}
            totalKcal={calculateTotalKcal(breakfastMeals)}
            mealItem={breakfastMeals}
            />

          {/* Meals Log Lunch*/}
          <MealsLog 
            logTitle={"Lunch"} 
            totalKcal={calculateTotalKcal(lunchMeals)}
            mealItem={lunchMeals}
            />

          {/* Meals Log Dinner*/}
          <MealsLog 
            logTitle={"Dinner"}
            totalKcal={calculateTotalKcal(dinnerMeals)}
            mealItem={dinnerMeals}
            />
            
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default meals;

const styles = StyleSheet.create({
});
