import { TouchableHighlight, TextInput, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../commons/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { AntDesign } from '@expo/vector-icons';
export default function Register() {
  const user = useSelector((state: RootState) => state.user);
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
    <View className="flex h-screen items-center justify-center bg-[#000] py-[80px]">
      
      <View 
        className="w-[225px] h-[148px]"
      >

        <View 
          className="mx-auto mb-[10px] w-[230px] h-[44px] border border-[#FFFFFF] rounded-full"
        >
          <Text className="mx-auto my-auto">
            <Text 
              className="text-[16px] text-[#FFFFFF]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              일상생활과 함께하는
            </Text>
            <Text className="text-[16px] text-amber-300">
              <Link
                href="/login/"
                style={{ fontFamily: 'Pretendard-Medium' }}
              > 내 브랜드
              </Link>
            </Text>
          </Text>
        </View>

        <View 
          className="mx-auto mt-[10px] w-[213px] h-[84px] "
        >
          <View 
            className="mx-auto my-auto"
          >
            <View className="mb-auto w-[212.39px] h-[7.71px] bg-[#F6CA23] mb-[15px]" />

            <View 
              className="mx-auto my-auto"
            >
              <Image
              source={require('../../../assets/images/logo15.jpg')}
              className="w-[212px] h-[40px]"
            />
            </View>

            <View
              className="mt-auto flex flex-row mt-[15px]"
            >
              <View className="w-[56.61px] h-[7.3px] bg-[#FFFFFF] mr-auto"/>
              <View className="w-[56.15px] h-[7.3px] bg-[#FFFFFF]"/>
              <View className="w-[56.15px] h-[7.3px] bg-[#FFFFFF] ml-auto"/>

            </View>

          </View>
        </View>
      </View>
      
      <Text
        className="text-[#FFFFFF] text-[14px] mt-auto mb-[20px]"
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
        - SNS계정으로 간편하게 시작하기 -
      </Text>
      <TouchableHighlight className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <View className="text-white text-center flex flex-row ">
          <Image
            className="w-[32px] h-[32px]"
            source={require('../../../assets/images/messagecircle.png')}
          />
          <Text
            className="mx-auto my-auto text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            카카오톡으로 시작하기
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => router.push('/(tabs)/Confirm/')}
        className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium  bg-emerald-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[32px] h-[32px]"
            source={require('../../../assets/images/naver.png')}
          />
          <Text
            className="mx-auto my-auto text-[16px] text-[#FFFFFF]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            네이버로 시작하기
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight 
        className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <AntDesign name="apple1" size={18} color="black" />
          <Text
            className="mx-auto my-auto text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            사과부터 시작해 보세요
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight 
        className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#fff] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center flex flex-row ">
          <Image
            className="w-[32px] h-[32px] "
            source={require('../../../assets/images/Google.png')}
          />
          <Text
            className="mx-auto my-auto text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            Google 시작하기
          </Text>
        </View>
      </TouchableHighlight>
    
    </View>
  );
}
