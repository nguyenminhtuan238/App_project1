import { TouchableHighlight, TextInput, Text, View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../commons/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { AntDesign } from '@expo/vector-icons';
export default function Register() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  return (
    <View className="flex  h-screen items-center  justify-center	bg-[#000]">
      <Text className="text-[#fff]  bg-black rounded-full p-3 border border-[#7e7e7e4b] ">
        내 브랜드는 일상과{' '}
        <Link href="/login/" className="text-amber-300">
          함께한다
        </Link>
      </Text>
      <Image
        source={require('../../../assets/images/logo.jpg')}
        className="w-[240px] h-[240px]"
      />

      <Text className="text-[#fff] ">-SNS 계정으로 쉽게 시작해보세요-</Text>
      <TouchableHighlight className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[24px] h-[24px]"
            source={require('../../../assets/images/messagecircle.png')}
          />
          <Text className="  ml-[20px]">카카오톡 시작하기</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => router.push('/(tabs)/Confirm/')}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-emerald-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[24px] h-[24px]"
            source={require('../../../assets/images/naver.png')}
          />
          <Text className="ml-[20px]">네이버로 시작해 보세요</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <View className="text-white text-center  flex flex-row ">
          <AntDesign name="apple1" size={24} color="black" />
          <Text className="ml-[20px]"> 사과부터 시작해 보세요</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[#fff] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[24px] h-[24px] "
            source={require('../../../assets/images/Google.png')}
          />
          <Text className="ml-[20px]"> Google 시작하기</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
