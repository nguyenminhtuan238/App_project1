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

import LayoutScreen from '../../../components/user/Homelayout/layout';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { Entypo } from '@expo/vector-icons';
import AccessConfirm from '../../../components/dialog/AccessConfirm';
import AllowAccess from '../../../components/dialog/AllowAccess';
import { toggleNavigationbar } from '../../../commons/store/Navigationbar';
export default function FAQ2() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
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
    <LayoutScreen>
      <View className="bg-[#000] h-screen">
        <View className="h-[2] bg-[#494949] flex flex-row justify-between "></View>
        <View className="p-5">
          <Text
            className="text-[#fff] text-[18px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            영업시간 안내
          </Text>
          <View className="p-1">
            <View className=" flex flex-row">
              <Entypo name="dot-single" size={24} color={'#929191'} />
              <Text className="text-[#929191]  text-[12px]">
                신청은 24시간 가능합니다
              </Text>
            </View>
            <View className=" flex flex-row">
              <Entypo name="dot-single" size={24} color={'#929191'} />
              <Text className="text-[#929191]  text-[12px]">
                응대시간 : 평일 11:00~18:00 (토,일,공휴일 휴무)
              </Text>
            </View>
            <View className=" flex flex-row">
              <Entypo name="dot-single" size={24} color={'#929191'} />
              <Text className="text-[#929191] text-[12px]">
                답변시간 이후 접수된 문의사항은 업무시간 내 순차적으로 답변해
                드립니다.
              </Text>
            </View>
          </View>
          <Pressable className="bg-[#f0da5e] rounded-[30px]  p-4 flex justify-center items-center my-8">
            <Text
              className="text-[#575757]  text-center "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              1:1문의하기
            </Text>
          </Pressable>
        </View>
      </View>
    </LayoutScreen>
  );
}
