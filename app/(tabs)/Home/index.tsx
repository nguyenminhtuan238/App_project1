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

  return (
    <LayoutScreen>
      <ImageBackground
        source={require('../../../assets/images/backgroundhome.jpg')}
        resizeMode="stretch"
        className="h-[250] w-[375] flex justify-center p-8   "
      >
        <View className="flex flex-row justify-between mt-8 ">
          <View>
            <Text className=" text-xl font-bold text-white">
              나의 후원자를{' '}
            </Text>
            <Text className="mb-4 text-xl font-bold text-white">
              {' '}
              찾아보세요
            </Text>
            <Text className="text-[13px] text-[#dfdddd]">밴드를 선택하고 </Text>
            <Text className="mb-4 text-[13px] text-[#dfdddd]">
              {' '}
              많은 사람들을 만나보세요
            </Text>
            <Link className="mb-4 text-xl text-amber-400" href="/(tabs)/ListProduct/">
              스폰서 찾기{'>'}
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
          <Text className="text-white">01</Text>
          <Text className="text-white opacity-[0.5]">05</Text>
        </View>
        <View className=" flex flex-row  justify-between ">
          <Text className="border-b-2 border-gray-500 w-[25%]"></Text>
          <Text className="border-b-2 border-gray-300 w-[75%]  "></Text>
        </View>
      </ImageBackground>
      <View className="h-[30] bg-[#494949] flex flex-row justify-between 	p-2">
        <Text className="text-amber-200 text-[10px] ml-3">
          차량정보를 등록해주세요차량정보를 등록해주세요
        </Text>
        <Link href="/register/" className="text-white text-[10px] mr-3">
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
          <Text className="text-white my-3 text-[25px]">
            광고는 홍길동이 맡았다.
          </Text>
          <View className="border border-white rounded-[10px] p-3 flex">
            <Text className="text-white text-[20px]">서포터 한명 더!</Text>
            <Text className="text-gray-400  text-[15px]">
              서포터를 추가하고 다양한 혜택을 누려보세요
            </Text>
            <View className="flex flex-row justify-between gap-2 items-center">
              <Link
                href="/Certification/"
                className="mb-5 text-xl text-amber-400  "
              >
                더 많은 지지자{'>'}
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
          <Text className="text-white my-3 text-[25px]">
            광고는 홍길동이 맡았다.
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
                <Text className="text-white">
                  100명 중 26명이 지지하고 있습니다.
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text className="text-black ">배드블루</Text>
                <Text className="text-black">대구광역시</Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-[20] ">
                <Text className="text-black ">시간: 30일</Text>
                <Text className="text-amber-300">25.000P</Text>
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
                <Text className="text-white">
                  100명 중 26명이 지지하고 있습니다.
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text className="text-black ">배드블루</Text>
                <Text className="text-black">대구광역시</Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-[20] ">
                <Text className="text-black ">시간: 30일</Text>
                <Text className="text-amber-300">25.000P</Text>
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
