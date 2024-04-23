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

import { useFonts } from 'expo-font';
import { CheckBox } from '@rneui/themed';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { Ionicons } from '@expo/vector-icons';
export default function RegisteredCar() {
  const hidden = useSelector((state: RootState) => state.hidden);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [selectedIndex, setIndex] = useState(10);

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
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View className=" bg-[#000] h-screen">
      <View className="mt-5 p-3">
        <View
          className={`border ${selectedIndex === 0 ? 'border-amber-200' : 'border-gray-700'}  rounded-[10px]  mb-3 flex flex-row p-5 `}
        >
          <View className="my-auto py-auto">
            <CheckBox
              checked={selectedIndex === 0}
              onPress={() => setIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="yellow"
              uncheckedColor="white"
              containerStyle={{ backgroundColor: 'black' }}
              textStyle={{ color: '#f3bf4f', fontSize: 18 }}
            />
          </View>
          <View className="mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              15다2929
            </Text>
            <Text
              className="text-[#a3a2a2] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              저기 k5| 2020
            </Text>
          </View>
        </View>
        <View
          className={`border ${selectedIndex === 1 ? 'border-amber-200' : 'border-gray-700'}  rounded-[10px]  mb-3 flex flex-row p-5 `}
        >
          <View className="my-auto py-auto">
            <CheckBox
              checked={selectedIndex === 1}
              onPress={() => setIndex(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="yellow"
              uncheckedColor="white"
              containerStyle={{ backgroundColor: 'black' }}
              textStyle={{ color: '#f3bf4f', fontSize: 18 }}
            />
          </View>
          <View className="mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              18마7301
            </Text>
            <Text
              className="text-[#a3a2a2] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              현대 쏘나타 | 2018
            </Text>
          </View>
        </View>
        {hidden.setRegisteredCar ? (
          <Pressable
            className="border border-[#f0da5e] rounded-[30px]   p-4 flex flex-row justify-center items-center my-8"
            onPress={() => router.push('/FAQ/FAQ2')}
          >
            <Ionicons name="add-sharp" size={24} color={'#f0da5e'} />
            <Text
              className="text-[#f0da5e]  text-center "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              새 자동차 추가
            </Text>
          </Pressable>
        ) : (
          <View className="h-[60%] justify-end flex">
            <Pressable
              className="bg-[#f0da5e] rounded-[30px]   p-4 flex flex-row justify-center items-center my-8"
              onPress={() => router.push('/FAQ/FAQ2')}
            >
              <Text
                className="text-[#000]  text-center "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                구조하다
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
