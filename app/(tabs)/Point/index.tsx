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
export default function Point() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);

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
            <Text className="text-[13px] text-[#dfdddd]">밴드를 선택하고 </Text>

            <Text className=" text-xl font-bold text-amber-300">
              나의 후원자를{' '}
            </Text>

            <Text className="text-[13px] text-[#41e966]">밴드를 선택하고 </Text>

            <View className="   mt-3	flex justify-center items-center ">
              <Pressable
                className=" bg-[#e0c31d] p-5  rounded-full  w-[150]"
                onPress={() => router.push('/register/')}
              >
                <Text className="text-black text-center text-[20px]">
                  adsadsad
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
            <Text className="text-[#fff] text-[10px]">신병 모집</Text>
          </Pressable>
          <Pressable
            onPress={() => setSearch(1)}
            className=" bg-[#44434377] p-3"
          >
            <Text className="text-[#a3a2a2] text-[10px]">
              채용 일정이 나와있습니다
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSearch(1)}
            className=" bg-[#44434377] p-3 rounded-tr-[10px] rounded-br-[10px]"
          >
            <Text className="text-[#a3a2a2] text-[10px]">
              모집이 종료되었습니다
            </Text>
          </Pressable>
        </View>
        <View className="p-5">
          <ScrollView>
            <View className="border-b border-[#494949] p-3 flex">
              <Text className="text-white my-3 text-[20px] ">
                광고는 홍길동이 맡았다.
              </Text>
              <View className="flex flex-row ">
                <Text className="text-[#f85353]  text-[10px]">
                  광고는 홍길동이 맡았다.
                </Text>
                <Text className="mx-1 text-[#575757]   text-[10px]">|</Text>
                <Text className="text-[#575757]  text-[10px] ">
                  광고는 홍길동이 맡았다.
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <Text className="text-white my-3 text-[20px] ">
                광고는 홍길동이 맡았다.
              </Text>
              <View className="flex flex-row ">
                <Text className="text-[#f85353]  text-[10px]">
                  광고는 홍길동이 맡았다.
                </Text>
                <Text className="mx-1 text-[#575757]   text-[10px]">|</Text>
                <Text className="text-[#575757]  text-[10px] ">
                  광고는 홍길동이 맡았다.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
