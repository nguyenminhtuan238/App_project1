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
export default function Home() {
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
      <ImageBackground
        source={require('../../../assets/images/backgroundhome.jpg')}
        resizeMode="stretch"
        className="h-[250] w-[375] flex justify-center p-8   "
      >
        <View className="flex flex-row justify-between mt-8 ">
          <View>
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              나의 후원자를{' '}
            </Text>
            <Text
              className="mb-4 text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              {' '}
              찾아보세요
            </Text>
            <Text
              className="text-[14px] text-[#fff]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              밴드를 선택하고
            </Text>
            <Text
              className="mb-4 text-[14px] text-[#fff]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              {' '}
              많은 사람들을 만나보세요
            </Text>
            <Link
              className="mb-2 text-[18px] text-yellow-500"
              href="/(tabs)/ListProduct/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              스폰서 찾기{'>'}
            </Link>
            <Link
              className="mb-2 text-[18px] text-yellow-500"
              //href="/(tabs)/RegisterCarInformation/"
              href="/(tabs)/ApplyForSponsorship/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              신청서 작성{'>'}
            </Link>
            <Link
              className="mb-2 text-[18px] text-yellow-500"
              //href="/(tabs)/RegisterCarInformation/"
              href="/(tabs)/RegisterCarInformation/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              차량정보 등록{'>'}
            </Link>
          </View>
          <View>
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100]"
            />
          </View>
        </View>
        <View className=" flex flex-row  justify-between ">
          <Text
            className="text-white"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            01
          </Text>
          <Text
            className="text-white opacity-[0.5]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            05
          </Text>
        </View>
        <View className=" flex flex-row  justify-between ">
          <Text
            className="border-b-2 border-gray-500 w-[25%]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          ></Text>
          <Text
            className="border-b-2 border-gray-300 w-[75%]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          ></Text>
        </View>
      </ImageBackground>
      <View className="h-[44px] bg-[#494949] flex flex-row justify-between 	p-2">
        <Text
          className="text-amber-200 text-[16px] ml-3"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          차량정보를 등록해주세요
        </Text>
        <Link
          href="/register/"
          className="text-[#fff] text-[16px] mr-3"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          등록하러 가다
          <AntDesign name="right" size={13} color="white" />
        </Link>
      </View>
      <View className=" bg-black">
        <View className="p-5">
          <Image
            source={require('../../../assets/images/pagation.jpg')}
            className="w-[150] h-[5]"
            resizeMode="stretch"
          />
          <Text
            className="text-[#fff] my-3 text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            홍길동님이 진행 중인 광고
          </Text>
          <View className="border border-[#fff] rounded-[10px] p-3 flex">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              서포터를 추가해보세요!
            </Text>
            <Text
              className="text-[#fff] text-[14px]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              서포터를 추가하고 많은 혜택을 누려보세요.
            </Text>
            <View className="flex flex-row justify-between gap-2 items-center">
              <Link
                href="/Certification/"
                className="mb-5 text-[16px] text-yellow-300 mt-auto"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                서포터 추가하기{'>'}
              </Link>
              <Image
                source={require('../../../assets/images/file.png')}
                className="h-[100] w-[100]  "
              />
            </View>
          </View>
        </View>
      </View>
      <View className=" bg-black mb-10">
        <View className="p-7">
          <Image
            source={require('../../../assets/images/pagation.jpg')}
            className="w-[150] h-[5]"
            resizeMode="stretch"
          />
          <Text
            className="text-[#fff] my-3 text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            홍길동님을 위한 추천광고
          </Text>
          <ScrollView horizontal>
            <View className="border border-white bg-white rounded-[10px]   mx-3 w-[230] h-[279]">
              <Pressable
                className=" flex justify-center items-center p-3"
                onPress={() => router.push('/(tabs)/DetailProduct/')}
              >
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="h-[100] w-[100]"
                />
              </Pressable>
              <View className="flex justify-center items-center py-3  bg-black ">
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명 중 26명이 지지하고 있습니다.
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text
                  className="text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  배드블루
                </Text>
                <Text
                  className="text-[12px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  대구광역시
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-[20] ">
                <Text
                  className="text-[12px] text-gray-400"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  시간: 30일
                </Text>
                <Text
                  className="text-amber-300 text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  25.000P
                </Text>
              </View>
            </View>
            <View className="border border-white bg-white rounded-[10px]   mx-3 w-[230] h-[279]">
              <Pressable
                className=" flex justify-center items-center p-3"
                onPress={() => router.push('/(tabs)/DetailProduct/')}
              >
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="h-[100] w-[100]"
                />
              </Pressable>
              <View className="flex justify-center items-center py-3  bg-black ">
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명 중 26명이 지지하고 있습니다.
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text
                  className="text-[16px] "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  배드블루
                </Text>
                <Text
                  className="text-[12px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  대구광역시
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-[20] ">
                <Text
                  className="text-[12px] text-gray-400"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  시간: 30일
                </Text>
                <Text
                  className="text-amber-300 text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  25.000P
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <AccessConfirm />
      <AllowAccess />
    </LayoutScreen>
  );
}
