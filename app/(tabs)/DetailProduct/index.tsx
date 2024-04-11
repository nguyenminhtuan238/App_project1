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
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function DetailProduct() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  return (
    <View className=" bg-[#a8a7a7]">
      <View className=" mb-2 flex flex-row p-5  justify-center   ">
        <View className="  rounded-[10px] mx-5  flex flex-row justify-center">
          <Image
            source={require('../../../assets/images/Bear.png')}
            className="h-[250] w-[250] "
            resizeMode="stretch"
          />
        </View>
      </View>
      <View className="h-[30] bg-[#494949] flex flex-row justify-between 	">
        <Text className="text-amber-200 text-[20px] ml-3">sadsadsadad</Text>
      </View>

      <View className=" bg-[#000] flex  justify-between p-5	">
        <Text className="text-white text-[25px] ml-3">sadsadsadad</Text>
        <Text className="text-white text-[15px] ml-3 mt-1">sadsadsadad</Text>
        <Text className="text-[#a1a0a0] text-[15px] ml-3 mt-5">
          sadsadsadad
        </Text>
        <View className=" bg-[#000] flex flex-row justify-end mt-10	">
          <Text className="text-white text-[25px] ml-3 Text-right">
            sadsadsadad
          </Text>
        </View>
        <View className=" bg-[#000] flex justify-center items-center p-5	w-full">
          <Pressable
            className=" bg-[#eeea14] p-5  rounded-full  w-full"
            onPress={() => router.push('/register/')}
          >
            <Text className="text-black text-center text-[20px]">adsadsad</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
