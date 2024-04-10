import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Foundation, FontAwesome5 } from '@expo/vector-icons';
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
      <View className="flex flex-row bg-black p-4 border-t-2  absolute left-0 bottom-0 right-0 h-[60]">
        <Pressable
          className="   h-8 w-1/4 "
          onPress={() => {
            setSelectedIndex(0);
            router.push('/Home/');
          }}
        >
          <View className="flex justify-items-center items-center ">
            <Foundation
              name="home"
              size={24}
              color={selectedIndex == 0 ? 'yellow' : 'white'}
            />
            {selectedIndex == 0 ? (
              <Text className="text-yellow-300  mt-1 text-[10px]">
                Trang Chu
              </Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="  h-8 w-1/4 "
          onPress={() => {
            setSelectedIndex(1);
            router.push('/login/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <Ionicons
              name="home"
              size={24}
              color={selectedIndex == 1 ? 'yellow' : 'white'}
            />
            {selectedIndex == 1 ? (
              <Text className="text-yellow-300  mt-1 text-[10px]">
                Quan ly{' '}
              </Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="  h-8 w-1/4 "
          onPress={() => {
            setSelectedIndex(2);
            router.push('/Home/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <Ionicons
              name="home"
              size={24}
              color={selectedIndex == 2 ? 'yellow' : 'white'}
            />
            {selectedIndex == 2 ? (
              <Text className="text-yellow-300  mt-1 text-[10px]">Trang </Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="  h-8 w-1/4 "
          onPress={() => {
            setSelectedIndex(3);
            router.push('/Home/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <FontAwesome5
              name="user-alt"
              size={24}
              color={selectedIndex == 3 ? 'yellow' : 'white'}
            />

            {selectedIndex == 3 ? (
              <Text className="text-yellow-300 mt-1 text-[10px]">Trang </Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
      </View>
    </>
  );
}
