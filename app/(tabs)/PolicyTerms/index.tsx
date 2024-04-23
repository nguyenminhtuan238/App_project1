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
export default function PolicyTerms() {
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
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/PolicyTerms/Rules')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  이용약관
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/Collection/')}
                  />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/Information/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  개인 정보 정책
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/Information/')}
                  />
                </Text>
              </View>
            </Pressable>

            <Pressable className="border-b border-[#494949] p-4 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  위치별 서비스 이용약관
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/Point/')}
                  />
                </Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
