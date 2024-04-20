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

import {useFonts} from 'expo-font'

import LayoutScreen from '../../../components/user/Homelayout/layout';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import AccessConfirm from '../../../components/dialog/AccessConfirm';
import AllowAccess from '../../../components/dialog/AllowAccess';
export default function Point() {
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
  })

  if(!fontsLoaded) {
    return undefined;
  }

  return (
    <LayoutScreen>
      <View className="bg-[#000] h-screen">
        {/* <ImageBackground
        source={require('../../../assets/images/backgroundhome.jpg')}
        resizeMode="stretch"
        className="h-[250] w-[375] flex justify-center items-center p-8   "
      > */}
        <View className="h-[250] w-[375] flex justify-center items-center p-8  bg-[#000] ">
          <View className="	flex justify-center items-center mb-3">
            <Text 
              className="text-[13px] text-[#dfdddd]"
              style={{fontFamily: "Pretendard-Bold"}}
            >포인트 유지 
            </Text>

            <Text 
              className=" text-xl font-bold text-amber-300"
              style={{fontFamily: "Pretendard-Bold"}}
            >
              8.000P
            </Text>

            <Text 
              className="text-[13px] text-[#41e966]"
              style={{fontFamily: "Pretendard-Bold"}}
            >
              +누적: 25,000P 
            </Text>

            <View className="   mt-3	flex justify-center items-center ">
              <Pressable
                className=" bg-[#e0c31d] p-5  rounded-full  w-[150]"
                onPress={() => router.push('/register/')}
              >
                <Text 
                  className="text-black text-center text-[20px]"
                  style={{fontFamily: "Pretendard-Bold"}}
                >
                탈퇴 신청
                </Text>
              </Pressable>
            </View>
          </View>

          {/* </ImageBackground> */}
        </View>
        <View className="h-[2] bg-[#494949] flex flex-row justify-between mb-5"></View>
        <View className=" flex-row justify-center  border rounded-[15px]  ">
          <Pressable
            onPress={() => setSearch(1)}
            className="  bg-[#606163] p-3 rounded-tl-[10px] rounded-bl-[10px]"
          >
            <Text 
              className="text-[#fff] text-[10px]"
              style={{fontFamily: "Pretendard-Bold"}}
            >
              총 
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSearch(1)}
            className=" bg-[#44434377] p-3"
          >
            <Text 
              className="text-[#a3a2a2] text-[10px]"
              style={{fontFamily: "Pretendard-Bold"}}
            >
            가게
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSearch(1)}
            className=" bg-[#44434377] p-3 rounded-tr-[10px] rounded-br-[10px]"
          >
            <Text 
              className="text-[#a3a2a2] text-[10px]"
              style={{fontFamily: "Pretendard-Bold"}}
            >
             철회하다
            </Text>
          </Pressable>
        </View>
        <View className="p-5">
          <ScrollView>
            <View className="border-b border-[#494949] p-3 flex">
              <Text 
                className="text-white my-3 text-[20px] "
                style={{fontFamily: "Pretendard-Bold"}}
              >
                -8.000P
              </Text>
              <View className="flex flex-row ">
                <Text 
                  className="text-[#f85353]  text-[10px]"
                  style={{fontFamily: "Pretendard-Bold"}}
                >
                인도한글 철회
                </Text>
                <Text 
                  className="mx-1 text-[#575757]   text-[10px]"
                  style={{fontFamily: "Pretendard-Bold"}}
                >
                  |
                </Text>
                <Text 
                  className="text-[#575757]  text-[10px] "
                  style={{fontFamily: "Pretendard-Bold"}}
                >
                  2023.03.12 15.30.02
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <Text 
                className="text-white my-3 text-[20px] "
                style={{fontFamily: "Pretendard-Bold"}}
              >
                +20.000P
              </Text>
              <View className="flex flex-row ">
                <Text 
                  className="text-[#41e966]  text-[10px]"
                  style={{fontFamily: "Pretendard-Bold"}}
                >
                BAD BLUE 후원 완료
                </Text>
                <Text 
                  className="mx-1 text-[#575757]   text-[10px]"
                  style={{fontFamily: "Pretendard-Bold"}}
                >
                  |
                </Text>
                <Text 
                  className="text-[#575757]  text-[10px] "
                  style={{fontFamily: "Pretendard-Bold"}}
                >
                2023.03.06 15.30.02
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
