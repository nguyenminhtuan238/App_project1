import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function ListProduct() {
  const user = useSelector((state: RootState) => state.user);
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
    <ScrollView className=" bg-[#000]">
      <View className=" flex-row justify-center  border rounded-[15px]  ">
        <Pressable
          onPress={() => setSearch(1)}
          className="  bg-[#606163] p-2 rounded-tl-[10px] rounded-bl-[10px]"
        >
          <Text
            className="text-[#fff] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            모집중
          </Text>
        </Pressable>
        <Pressable onPress={() => setSearch(1)} className=" bg-[#44434377] p-2">
          <Text
            className="text-[#a3a2a2] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            모집 예정
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSearch(1)}
          className=" bg-[#44434377] p-2 rounded-tr-[10px] rounded-br-[10px]"
        >
          <Text
            className="text-[#a3a2a2] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            모집 종료
          </Text>
        </Pressable>
      </View>
      <View className="mt-5">
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              배드블루
            </Text>
            <Text
              className="text-[#AAAAAA] text-[12px]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              대구광역시 | 시간: 7일
            </Text>
            <Text
              className="text-[#e1e44e] text-[16px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              시간: 7일
            </Text>
            <View className="flex flex-row justify-end">
              <Text
                className="text-[#a3a2a2] text-[12px] mt-5"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              배드블루
            </Text>
            <Text
              className="text-[#AAAAAA] text-[12px]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              대구광역시 | 시간: 7일
            </Text>
            <Text
              className="text-[#e1e44e] text-[16px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              시간: 7일
            </Text>
            <View className="flex flex-row justify-end">
              <Text
                className="text-[#a3a2a2] text-[12px] mt-5"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              배드블루
            </Text>
            <Text
              className="text-[#AAAAAA] text-[12px]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              대구광역시 | 시간: 7일
            </Text>
            <Text
              className="text-[#e1e44e] text-[16px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              시간: 7일
            </Text>
            <View className="flex flex-row justify-end">
              <Text
                className="text-[#a3a2a2] text-[12px] mt-5"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>

        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5 justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100] "
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              배드블루
            </Text>
            <Text
              className="text-[#AAAAAA] text-[12px]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              대구광역시 | 시간: 7일
            </Text>
            <Text
              className="text-[#e1e44e] text-[16px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              시간: 7일
            </Text>
            <View className="flex flex-row justify-end">
              <Text
                className="text-[#a3a2a2] text-[12px] mt-5"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
