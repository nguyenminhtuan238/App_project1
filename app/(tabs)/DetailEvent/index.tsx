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
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function DetailEvent() {
  const User = useSelector((state: RootState) => state.user);
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
    <View className=" bg-[#000]  p-2 h-screen">
      <Image
        source={require('../../../assets/images/859f9b4e32aa93f4cabb.jpg')}
        className="h-[290] w-full "
      />

      <Text
        className="mb-4 text-[18px] text-[#fff] mx-1"
        style={{ fontFamily: 'Pretendard-Medium' }}
      >
        방 계약시 최대 9%할인쿠폰 제공
      </Text>
      <Text
        className="text-[12px] text-gray-400  mx-1"
        style={{ fontFamily: 'Pretendard-Medium' }}
      >
        2023.02.02~2023.03.16 | 직방
      </Text>
      <View className=" bg-[#000] flex  justify-between	 mx-1 my-3">
        <Text
          className="text-[#a1a0a0] text-[14px]"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          직방 - 국내 1위 부동산 플랫폼
          {'(아파트, 매매, 원룸, 오피스텔, 빌라, 쇼핑센터)'}
        </Text>
        <Text
          className="text-[#a1a0a0] text-[14px] mt-1 mb-2"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          다운로드 1위 {'(9월 22일 모바일 지수 기준)'}
        </Text>
        <Text
          className="text-[#a1a0a0] text-[14px]"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          나에게 꼭 맞는 원룸, 오피스텔, 빌라, 아파트를 찾고 계시나요? 1위
          부동산 앱에서!
        </Text>
        <View className=" bg-[#000] flex justify-center items-center p-5	w-full">
          <Pressable
            className=" bg-[#eeea14] p-5  rounded-full  w-full"
            onPress={() => router.back()}
          >
            <Text
              className="text-center text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              돌아와
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
