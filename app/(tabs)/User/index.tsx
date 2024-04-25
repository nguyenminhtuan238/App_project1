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
export default function User() {
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
        <View className="  flex  p-8  bg-[#000] ">
          <View className="	flex flex-row justify-between mb-3">
            <View>
              <Text
                className="text-[13px] text-[#79797a]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                나의 등록정보
              </Text>
              <Pressable>
                <Text
                  className=" text-xl font-bold text-amber-300"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                  onPress={() => router.push('/Information/')}
                >
                  탑 서포터{' '}
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/Information/')}
                  />
                </Text>
              </Pressable>
              <Text
                className="text-[15px] text-[#fff]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                ssuik@naver.com
              </Text>
            </View>

            <View className="   mt-3	flex justify-center items-center ">
              <Pressable
                className="  p-1  rounded-[15px]  border border-[#e0c31d] w-[75]"
                onPress={() => router.push('/WithDrawal/')}
              >
                <Text
                  className="text-[#e0c31d] text-center text-[12px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  로그 아웃
                </Text>
              </Pressable>
            </View>
          </View>

          {/* </ImageBackground> */}
        </View>
        <View className="h-[2] bg-[#494949] flex flex-row justify-between "></View>
        <View className="p-5">
          <ScrollView>
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/Collection/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  후원수집
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
              onPress={() => router.push('/RegisteredCar/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  등록된 차량정보
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/RegisteredCar/')}
                  />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/(tabs)/DeliveryAddress/addAddress')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  배송 주소 설정
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() =>
                      router.push('/(tabs)/DeliveryAddress/addAddress')
                    }
                  />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/Establish/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  알림 설정
                </Text>

                <Text
                  className="text-[#575757]  "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/Establish/')}
                  />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/Notification/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  알림
                </Text>

                <Text
                  className="text-[#575757]  "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/Notification/')}
                  />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-4 flex"
              onPress={() => router.push('/FAQ/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  FAQ/1:1필수
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/FAQ/')}
                  />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-4 flex"
              onPress={() => router.push('/PolicyTerms/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]   text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  이용약관 및 정책
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="white"
                    onPress={() => router.push('/PolicyTerms/')}
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
