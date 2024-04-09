import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Footer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handle = (value: number) => {
    setSelectedIndex(value);
    if (value == 0) {
      router.push('/Home/');
    } else {
      router.push('/');
    }
  };
  return (
    <>
      <View className="flex flex-row bg-white p-3">
        <Pressable
          className="bg-white   h-8 w-1/3 "
          onPress={() => {
            setSelectedIndex(0);
            router.push('/Home/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <Ionicons
              name="home"
              size={24}
              color={selectedIndex == 0 ? 'blue' : 'black'}
            />
            {selectedIndex == 0 ? (
              <Text className="text-blue-700">Trang Chu</Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="bg-white   h-8 w-1/3 "
          onPress={() => {
            setSelectedIndex(1);
            router.push('/TTT/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <Ionicons
              name="home"
              size={24}
              color={selectedIndex == 1 ? 'blue' : 'black'}
            />
            {selectedIndex == 1 ? (
              <Text className="text-blue-700">Quan ly </Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="bg-white   h-8 w-1/3 "
          onPress={() => {
            setSelectedIndex(2);
            router.push('/QLD/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <Ionicons
              name="home"
              size={24}
              color={selectedIndex == 2 ? 'blue' : 'black'}
            />
            {selectedIndex == 2 ? (
              <Text className="text-blue-700">Trang </Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
      </View>
    </>
  );
}
