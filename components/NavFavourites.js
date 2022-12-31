import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { Icon } from '@rneui/base';

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "4951 Cherry Ave San Jose, CA 95118",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "1 Hacker Way, Menlo Park, CA 94025",
  },
  {
    id: "789",
    icon: "school",
    location: "School",
    destination: "Los Angeles, CA 90095,",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
      )}
      renderItem={({ item: { location, icon, destination } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default NavFavourites

const styles = StyleSheet.create({})