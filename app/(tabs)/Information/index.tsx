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
import { AntDesign, Ionicons } from '@expo/vector-icons';
import AccessConfirm from '../../../components/dialog/AccessConfirm';
import AllowAccess from '../../../components/dialog/AllowAccess';
import { toggleNavigationbar } from '../../../commons/store/Navigationbar';
export default function Information() {
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
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <LayoutScreen>
      <View className="bg-[#000] h-screen">
     
        <View className="h-[2] bg-[#494949] flex flex-row justify-between "></View>
        <View className="p-5">
          <ScrollView>
            <View className="border-b border-[#494949]  flex">
              <View className="flex p-2">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  이름
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                홍길동
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949] flex">
              <View className="flex p-2">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                 이메일
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                povi@navar.com
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949]  flex">
              <View className="flex p-2">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  전화 번호
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                010-1324-5192
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949]  flex">
              <View className="flex p-2">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  생일
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                880215
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949] p-2 flex">
            <Text
                  className="text-[#fff]  text-[18px] mb-3"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  섹스
                </Text>
              <View className="flex flex-row ">
           
                <Pressable className="bg-[#e0c31d] rounded-[5px] mx-1 p-1">
                <Text
                  className="text-[#000]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  남성
                </Text>
                </Pressable>
                <Pressable className="rounded-[5px] border border-[#9e9d9d] p-1">
                <Text
                  className="text-[#575757]  "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                 여성
                </Text>
                </Pressable>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex p-2">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  주소
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                대구광역시 달서구 호산동 381-3 행복한바이 101호
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex p-2">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  주요 활동 영역
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                대구광역시 달서구
                </Text>
              </View>
            </View>
            <Pressable className="bg-[#f0da5e] rounded-[30px]  p-4 flex justify-center items-center">
                
                <Text
                  className="text-[#575757]  text-center "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                 구조하다
                </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
