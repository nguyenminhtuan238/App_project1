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

import {useFonts} from 'expo-font'

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function AddAddressDeliveryAddress() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);

  // đổi font chữ
  const [fontsLoaded] = useFonts({
    'Pretendard-Black': require('../../../assets/fonts/Pretendard-Black.otf'),
    'Pretendard-Bold': require('../../../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-ExtraBold': require('../../../assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-ExtraLight': require('../../../assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-Light': require('../../../assets/fonts/Pretendard-Light.otf'),
    'Pretendard-Medium': require('../../../assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-Regular': require('../../../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-SemiBold': require('../../../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Thin': require('../../../assets/fonts/Pretendard-Thin.otf'),
  })

  if(!fontsLoaded) {
    return undefined;
  }

  return (
    <View className="bg-black h-screen border-t-2 border-[#2c2c2c]">
      <ScrollView>
        <View className="flex flex-col">

          <View className="mt-5 min-h-[450px]">
            <Pressable
              className="my-2 ml-auto mr-auto flex flex-row items-center w-[350px] h-[150px] border-2 border-yellow-500 rounded-2xl"
            >
              <View 
                className="basis-1/5"
              >
                <Pressable>

                </Pressable>
              </View>

              <View 
                className="basis-4/5"
              >
                <Text
                  className="my-1 text-[20px] text-[#fff]"
                >
                  본가
                </Text>
                <Text
                  className="my-1 text-[15px] text-[#fff]"
                >
                  송길동 | 010-1231-1592
                </Text>
                <Text
                  className="my-1 text-[15px] text-[#fff]"
                >
                  대구 달서구 호산동로 34길 21-4, 행복일 203 [42708]
                </Text>
              </View>
        
            </Pressable>

            <Pressable
              className="my-2 ml-auto mr-auto flex flex-row items-center w-[350px] h-[150px] border-2 border-yellow-500 rounded-2xl"
            >
              <View 
                className="basis-1/5"
              >
                <Pressable>

                </Pressable>
              </View>

              <View 
                className="basis-4/5"
              >
                <Text
                  className="my-1 text-[20px] text-[#fff]"
                >
                  회사
                </Text>
                <Text
                  className="my-1 text-[15px] text-[#fff]"
                >
                  박서준 | 010-1231-1592
                </Text>
                <Text
                  className="my-1 text-[15px] text-[#fff]"
                >
                  대구 달서구 호산동로 34길 21-4, 행복일 203 [42708]
                </Text>
              </View>
        
            </Pressable>
          
          </View>

          <View className="mt-auto">
            <Pressable 
              className="ml-auto mr-auto my-2 w-[350px] h-[70px] flex justify-center items-center border-2 border-yellow-500 rounded-full"
              //onPress={() => router.push('/(tabs)/ApplyForSponsorship/detail')}
            >
              <Text
                className="text-[20px] text-yellow-500"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                + 새 주소 추가하기
              </Text>
            </Pressable>

            <Pressable 
              className="ml-auto mr-auto my-2 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
              //onPress={() => router.push('/(tabs)/ApplyForSponsorship/detail')}
            >
              <Text
                className="text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                저장하기
              </Text>
            </Pressable>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
}
