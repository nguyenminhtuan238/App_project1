import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  Keyboard,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import LayoutScreen from '../../../components/user/layout/layout';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { getbyidPoint, getSearchPoint } from '../../../commons/store/point';
import { getStudent } from '../../../commons/store/Student';
import { Feather, Entypo } from '@expo/vector-icons';

export default function Home() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Clicked, setClicked] = useState(false);
  const [searchPhrase, setsearchPhrase] = useState('');
  const [ID_HS, setID_HS] = useState(1);

  return (
    <LayoutScreen>
      <ImageBackground
        source={require('../../../assets/images/backgroundhome.jpg')}
        resizeMode="stretch"
        className="h-[250] w-[375] flex justify-center p-8   "
      >
        <View className="flex flex-row justify-between mt-8 ">
          <View>
            <Text className="mb-5 text-xl font-bold text-white">Đăng Nhập</Text>
            <Text className="mb-5 text-xl text-white">Đăng Nhập</Text>

            <Link className="mb-5 text-xl text-amber-400" href="/register/">
              Đăng Nhập{'>'}
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
      <View className="h-[30] bg-[#494949] flex flex-row justify-between 	">
        <Text className="text-amber-200 text-[20px] ml-3">sadsadsadad</Text>
        <Link href="/register/" className="text-white text-[20px] mr-3">
          dasdsadsad{'>'}
        </Link>
      </View>
      <View className=" bg-black">
        <View className="p-5">
          <Image
            source={require('../../../assets/images/pagation.jpg')}
            className="w-[150] h-[5]"
            resizeMode="stretch"
          />
          <Text className="text-white my-3 text-[25px]">dddddddddddđ</Text>
          <View className="border border-white rounded-[10px] p-3 flex">
            <Text className="text-white text-[25px]">dddddddddddđ</Text>
            <Text className="text-gray-400  text-[20px]">dddddddddddđ</Text>
            <View className="flex flex-row justify-between gap-2 items-center">
              <Link href="/login/" className="mb-5 text-xl text-amber-400  ">
                đasadsa{'>'}
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
          <Text className="text-white my-3 text-[25px]">dddddddddddđ</Text>
          <ScrollView horizontal>
            <View className="border border-white bg-white rounded-[10px]   mx-3 w-[230] h-[279]">
              <View className=" flex justify-center items-center p-3">
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="h-[100] w-[100]"
                />
              </View>
              <View className="flex justify-center items-center py-3  bg-black ">
                <Text className="text-white">ádsadsadsad</Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text className="text-black ">ádsadsadsad</Text>
                <Text className="text-black">ádsadsadsad</Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text className="text-black ">ádsadsadsad</Text>
                <Text className="text-amber-300">ádsadsadsad</Text>
              </View>
            </View>
            <View className="border border-white bg-white rounded-[10px]  mx-3 w-[230] h-[279]">
              <View className=" flex justify-center items-center p-3">
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="h-[100] w-[100]"
                />
              </View>
              <View className="flex justify-center items-center py-3  bg-black ">
                <Text className="text-white">ádsadsadsad</Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text className="text-black ">ádsadsadsad</Text>
                <Text className="text-black">ádsadsadsad</Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text className="text-black ">ádsadsadsad</Text>
                <Text className="text-amber-300">ádsadsadsad</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
