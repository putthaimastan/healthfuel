import {View,Text,TextInput,Button} from "react-native"

export default function AddMeals(){
    return(
        <View>
            {/* Meals Input */}
            <Text>Meals</Text>
            <TextInput
            placeholder="Enter Meals Name"
            keyboardType="default"
            />
            {/* Kcal Input */}
            <Text>Kcal</Text>
            <TextInput
            placeholder="Enter Meals Calories"
            keyboardType="number-pad"
            />
            {/* Add Meals Button */}
            <Button title="Add Meals"/>
        </View>
    )
}