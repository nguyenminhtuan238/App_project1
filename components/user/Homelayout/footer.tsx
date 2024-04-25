import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Foundation, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../commons/store';
import { toggleNavigationbar } from '../../../commons/store/Navigationbar';
export default function Footer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const Navigationbar = useSelector((state: RootState) => state.Navigationbar);
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <View className="flex flex-row bg-black p-4 border-t-2  absolute left-0 bottom-0 right-0 h-[60]">
        <Pressable
          className="   h-8 w-1/4 "
          onPress={() => {
            dispatch(toggleNavigationbar(0));
            router.push('/Home/');
          }}
        >
          <View className="flex justify-items-center items-center ">
            <Foundation
              name="home"
              size={24}
              color={Navigationbar.setSelectedbar == 0 ? 'yellow' : 'white'}
            />
            {Navigationbar.setSelectedbar == 0 ? (
              <Text className="text-yellow-300  mt-1 text-[10px]">집</Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="  h-8 w-1/4 "
          onPress={() => {
            dispatch(toggleNavigationbar(1));
            router.push('/Map/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <MaterialCommunityIcons
              name="calendar-star"
              size={24}
              color={Navigationbar.setSelectedbar == 1 ? 'yellow' : 'white'}
            />

            {Navigationbar.setSelectedbar == 1 ? (
              <Text className="text-yellow-300  mt-1 text-[10px]">이벤트</Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="  h-8 w-1/4 "
          onPress={() => {
            dispatch(toggleNavigationbar(2));
            router.push('/Point/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <MaterialCommunityIcons
              name="file-powerpoint-box-outline"
              size={24}
              color={Navigationbar.setSelectedbar == 2 ? 'yellow' : 'white'}
            />

            {Navigationbar.setSelectedbar == 2 ? (
              <Text className="text-yellow-300  mt-1 text-[10px]">
                가리키다{' '}
              </Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
        <Pressable
          className="  h-8 w-1/4 "
          onPress={() => {
            dispatch(toggleNavigationbar(3));
            router.push('/User/');
          }}
        >
          <View className="flex justify-items-center items-center">
            <FontAwesome5
              name="user-alt"
              size={24}
              color={Navigationbar.setSelectedbar == 3 ? 'yellow' : 'white'}
            />

            {Navigationbar.setSelectedbar == 3 ? (
              <Text className="text-yellow-300 mt-1 text-[10px]">내 거</Text>
            ) : (
              ''
            )}
          </View>
        </Pressable>
      </View>
    </>
  );
}
