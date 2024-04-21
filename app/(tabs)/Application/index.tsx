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
import { Dialog } from '@rneui/themed';

import { useFonts } from 'expo-font';

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function Application() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
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
  useEffect(() => {
    if (!fontsLoaded) {
      return undefined;
    }
  }, []);

  return (
    <ScrollView className=" bg-[#000]">
      <View className=" flex-row justify-center  border rounded-[15px]  ">
        <Pressable
          onPress={() => router.push('/(tabs)/WithDrawal/')}
          className="   bg-[#44434377]  p-4 w-[100px] rounded-full  "
        >
          <Text
            className="text-[#a3a2a2] text-[10px] text-center"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            탈퇴 신청
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSearch(1)}
          className=" bg-[#606163] p-4 rounded-full"
        >
          <Text
            className=" text-[#fff]  text-[10px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            신청 내용
          </Text>
        </Pressable>
      </View>
      <View>
        <View className="border-b border-[#494949] p-3 flex">
          <Text
            className="text-white my-3 text-[20px] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            -8.000P
          </Text>
          <View className="flex flex-row ">
            <Text
              className="text-[#f85353]  text-[10px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              인도한글 철회
            </Text>
            <Text
              className="mx-1 text-[#575757]   text-[10px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              |
            </Text>
            <Text
              className="text-[#575757]  text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              2023.03.12 15.30.02
            </Text>
          </View>
        </View>
        <View className="border-b border-[#494949] p-3 flex">
          <Text
            className="text-white my-3 text-[20px] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            +20.000P
          </Text>
          <View className="flex flex-row ">
            <Text
              className="text-[#41e966]  text-[10px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              BAD BLUE 후원 완료
            </Text>
            <Text
              className="mx-1 text-[#575757]   text-[10px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              |
            </Text>
            <Text
              className="text-[#575757]  text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              2023.03.06 15.30.02
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
