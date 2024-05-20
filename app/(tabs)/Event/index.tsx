import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import LayoutScreen from '../../../components/user/Homelayout/layout';

export default function Event() {
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch]: any = useState('진행중인 이벤트');

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
      <ScrollView className=" bg-[#000] h-screen">
        <View className=" flex-row justify-center  border rounded-[15px] mt-3 ">
          <Pressable
            onPress={() => setSearch('진행중인 이벤트')}
            className={`${Search == '진행중인 이벤트' ? 'bg-[#606163]' : 'bg-[#44434377]'}   p-2 rounded-tl-[10px] rounded-bl-[10px]`}
          >
            <Text
              className={` ${Search == '진행중인 이벤트' ? 'text-[#fff]' : 'text-[#a3a2a2]'} text-[16px]`}
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              진행중인 이벤트
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSearch('종료된 이벤트')}
            className={`${Search == '종료된 이벤트' ? 'bg-[#606163]' : 'bg-[#44434377]'} bg-[#44434377] p-2 `}
          >
            <Text
              className={`${Search == '종료된 이벤트' ? 'text-[#fff]' : 'text-[#a3a2a2]'} text-[16px] my-auto py-auto`}
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              종료된 이벤트
            </Text>
          </Pressable>
        </View>
        {Search == '진행중인 이벤트' ? (
          <View className="mt-5">
            <Pressable onPress={() => router.push('/DetailEvent/')}>
              <View className="flex  justify-center items-center ">
                <Image
                  source={require('../../../assets/images/Image1.jpg')}
                  resizeMode="stretch"
                  className="h-[200] w-full flex justify-center p-8  "
                />
              </View>

              <Text
                className="mb-4 text-[18px] text-[#fff] mx-1"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                방 계약시 최대 9%할인쿠폰 제공
              </Text>

              <Text
                className="text-[12px] text-gray-400"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                2023.02.02~2023.03.16
              </Text>
            </Pressable>
            <Pressable>
              <View className="flex  justify-center items-center">
                <Image
                  source={require('../../../assets/images/Image2.jpg')}
                  resizeMode="stretch"
                  className="h-[200] w-full flex justify-center p-8   "
                />
              </View>

              <Text
                className="mb-4 text-[18px] text-[#fff] mx-1"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                배달의 민족에서 사장님들을 위한 쿠폰북을..
              </Text>

              <Text
                className="text-[12px] text-gray-400"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                2023.02.02~2023.03.16
              </Text>
            </Pressable>
          </View>
        ) : (
          <View className="mt-5">
            <View>
              <View className="flex  justify-center items-center opacity-[0.5]">
                <Image
                  source={require('../../../assets/images/Image1.jpg')}
                  resizeMode="stretch"
                  className="h-[200] w-full flex justify-center p-8  "
                />
              </View>

              <Text
                className="mb-4 text-[18px] text-[#fff] mx-1"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                방 계약시 최대 9%할인쿠폰 제공
              </Text>

              <Text
                className="text-[12px] text-gray-400"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                2023.02.02~2023.03.16
              </Text>
            </View>
            <View>
              <View className="flex  justify-center items-center opacity-[0.5]">
                <Image
                  source={require('../../../assets/images/Image2.jpg')}
                  resizeMode="stretch"
                  className="h-[200] w-full flex justify-center p-8   "
                />
              </View>

              <Text
                className="mb-4 text-[18px] text-[#fff] mx-1"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                배달의 민족에서 사장님들을 위한 쿠폰북을..
              </Text>

              <Text
                className="text-[12px] text-gray-400"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                2023.02.02~2023.03.16
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </LayoutScreen>
  );
}
