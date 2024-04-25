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

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function ApplyForSponsorship() {
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
    <View className=" bg-black h-full border-t-2 border-[#2c2c2c]">
      <View className="my-5 ">
        <View className="mx-5 mb-5 flex flex-row items-center justify-center">
          <Text
            className="text-[#fff] text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            배송지를 추가해주세요.
          </Text>

          <Pressable
            className="ml-auto bg-yellow-500 w-[120px] h-[50px] rounded-full items-center justify-center"
            onPress={() => router.push('/(tabs)/DeliveryAddress/')}
          >
            <Text
              className="text-black text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              배송지 추가
            </Text>
          </Pressable>
        </View>

        <Text
          className="mx-3 mb-5 text-[#a3a2a2] text-[15px]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          배송지를 한 번만 추가해놓으면 이후에 편리하게 선택할 수 있어 요.
        </Text>
      </View>

      <View className="border-t-[5px] border-[#2c2c2c]">
        <Text
          className="mt-5 mx-5 text-[#fff] text-[20px]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          광고 상품 정보
        </Text>

        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-[40%] object-contain bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bucks.png')}
              className="h-[120] w-[100] "
            />
          </View>
          <View className="basis-[60%] mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              MILWAUKEE BUCKS
            </Text>
            <Text
              className="text-[#a3a2a2] mt-2"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              대구광역시 | 기간 : 120일
            </Text>
            <Text
              className="text-[#e1e44e] text-[20px] my-5"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              12,000P
            </Text>
            <View className="flex flex-row justify-end mt-3">
              <Text
                className="text-[#a3a2a2]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                100명중 <Text className="text-yellow-500">26명</Text>이 서포트
                중 입니다.
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      <View className="my-2 mt-auto">
        <Pressable
          className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
          onPress={() => router.push('/(tabs)/ApplyForSponsorship/detail')}
        >
          <Text
            className="text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            주문하기
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
