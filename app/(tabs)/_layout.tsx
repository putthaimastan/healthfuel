import { Tabs } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Svg, Path, Circle } from "react-native-svg";

// Fixed TabBar component with proper navigation
const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={tw`flex-row bg-white shadow-lg h-16 items-center justify-around border-t border-gray-200`}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Colors
        const activeColor = "#1EAFB3";
        const inactiveColor = "#B2E4E5";
        const currentColor = isFocused ? activeColor : inactiveColor;

        // Get the appropriate icon based on route name
        const renderIcon = () => {
          switch (route.name) {
            case 'index':
              return (
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <Path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </Svg>
              );
            case 'meals':
              return (
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <Path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <Path d="M6 1v7" />
                  <Path d="M10 1v7" />
                  <Path d="M14 1v7" />
                </Svg>
              );
            case 'metric':
              return (
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Path d="M3 3v18h18" />
                  <Path d="m19 9-5 5-4-4-3 3" />
                </Svg>
              );
            case 'goals':
              return (
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Circle cx="12" cy="12" r="10" />
                  <Path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
                </Svg>
              );
            case 'profile':
              return (
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <Circle cx="12" cy="7" r="4" />
                </Svg>
              );
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={tw`items-center justify-center px-2 py-1`}
            activeOpacity={0.7}
          >
            <View 
              style={[
                tw`p-2 rounded-full`,
                isFocused && tw`bg-blue-50`
              ]}
            >
              {renderIcon()}
            </View>
            
            <Text
              style={[
                tw`text-xs mt-0.5 font-medium`,
                { color: currentColor },
                isFocused && tw`font-bold`
              ]}
            >
              {label}
            </Text>
            
            {isFocused && (
              <View 
                style={[
                  tw`absolute -bottom-1 h-1 rounded-full bg-blue-400`,
                  { width: 20 }
                ]}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          title: "Meals",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="metric"
        options={{
          title: "Stats",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;