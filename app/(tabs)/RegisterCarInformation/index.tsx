import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function ListProduct() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  return (
    <ScrollView className=" bg-[#000]">
      <View className=" flex-row justify-center  border rounded-[15px]  ">
        <Pressable
          onPress={() => setSearch(1)}
          className="  bg-[#606163] p-2 rounded-tl-[10px] rounded-bl-[10px]"
        >
          <Text className="text-[#fff] text-[10px]">신병 모집</Text>
        </Pressable>
        <Pressable onPress={() => setSearch(1)} className=" bg-[#44434377] p-2">
          <Text className="text-[#a3a2a2] text-[10px]">
            채용 일정이 나와있습니다
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSearch(1)}
          className=" bg-[#44434377] p-2 rounded-tr-[10px] rounded-br-[10px]"
        >
          <Text className="text-[#a3a2a2] text-[10px]">
            모집이 종료되었습니다
          </Text>
        </Pressable>
      </View>
      <View className="mt-5">
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text className="text-[#fff] text-[20px]">배드블루</Text>
            <Text className="text-[#a3a2a2] ">대구광역시 | 시간: 7일</Text>
            <Text className="text-[#e1e44e] text-[15px]">시간: 7일</Text>
            <View className="flex flex-row justify-end">
              <Text className="text-[#a3a2a2] ">
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text className="text-[#fff] text-[20px]">배드블루</Text>
            <Text className="text-[#a3a2a2] ">대구광역시 | 시간: 7일</Text>
            <Text className="text-[#e1e44e] text-[15px]">시간: 7일</Text>
            <View className="flex flex-row justify-end">
              <Text className="text-[#a3a2a2] ">
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View> 
        </Pressable>
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text className="text-[#fff] text-[20px]">배드블루</Text>
            <Text className="text-[#a3a2a2] ">대구광역시 | 시간: 7일</Text>
            <Text className="text-[#e1e44e] text-[15px]">시간: 7일</Text>
            <View className="flex flex-row justify-end">
              <Text className="text-[#a3a2a2] ">
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text className="text-[#fff] text-[20px]">배드블루</Text>
            <Text className="text-[#a3a2a2] ">대구광역시 | 시간: 7일</Text>
            <Text className="text-[#e1e44e] text-[15px]">시간: 7일</Text>
            <View className="flex flex-row justify-end">
              <Text className="text-[#a3a2a2] ">
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
