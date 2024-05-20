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
      <View className=" w-[335px] h-[48px] mx-auto my-[30px] flex-row justify-center items-center rounded-full bg-[#1f242a]">
        <Pressable
          onPress={() => setSearch(1)}
          className="w-[111px] h-[48px] mr-auto flex justify-center items-center rounded-full bg-[#424850]"
        >
          <Text
            className="text-[#FFFFFF] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            모집중
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSearch(1)}
          className="w-[111px] h-[48px] mx-auto flex justify-center items-center rounded-full bg-[#1f242a]"
        >
          <Text
            className="text-[#5F6265] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            모집 예정
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSearch(1)}
          className="w-[111px] h-[48px] ml-auto flex justify-center items-center rounded-full bg-[#1f242a]"
        >
          <Text
            className="text-[#5F6265] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            모집 종료
          </Text>
        </Pressable>
      </View>

      <View className="w-[335px] mx-auto">
        <Pressable
          className="w-[335px] h-[141px] mb-[20px] border-b border-gray-700 "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="flex flex-row justify-center">
            <View className="h-[120px] w-[120px] mr-[12px] bg-white rounded-[12px] flex flex-row justify-center">
              <Image
                source={require('../../../assets/images/Bear.png')}
                className="w-[75px] h-[85px] mx-auto my-auto"
              />
            </View>
            <View className="w-[203px] h-[120px]">
              <Text
                className="text-[#FFFFFF] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                Bad Blue
              </Text>
              <Text
                className="text-[#AAAAAA] text-[12px]"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                대구광역시 | 기간 : 7일
              </Text>
              <Text
                className="text-[#e1e44e] text-[16px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                25,000P
              </Text>

              <View className="mt-auto ml-auto">
                <Text
                  className="text-[#FFFFFF] text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중
                  <Text className="text-[#e1e44e]"> 26명</Text>이 서포트 중
                  입니다.
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          className="w-[335px] h-[141px] mb-[20px] border-b border-gray-700 "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="flex flex-row justify-center">
            <View className="h-[120px] w-[120px] mr-[12px] bg-white rounded-[12px] flex flex-row justify-center">
              <Image
                source={require('../../../assets/images/Bear.png')}
                className="w-[75px] h-[85px] mx-auto my-auto"
              />
            </View>
            <View className="w-[203px] h-[120px]">
              <Text
                className="text-[#FFFFFF] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                Bad Blue
              </Text>
              <Text
                className="text-[#AAAAAA] text-[12px]"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                대구광역시 | 기간 : 7일
              </Text>
              <Text
                className="text-[#e1e44e] text-[16px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                25,000P
              </Text>

              <View className="mt-auto ml-auto">
                <Text
                  className="text-[#FFFFFF] text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중
                  <Text className="text-[#e1e44e]"> 26명</Text>이 서포트 중
                  입니다.
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          className="w-[335px] h-[141px] mb-[20px] border-b border-gray-700 "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="flex flex-row justify-center">
            <View className="h-[120px] w-[120px] mr-[12px] bg-white rounded-[12px] flex flex-row justify-center">
              <Image
                source={require('../../../assets/images/Bear.png')}
                className="w-[75px] h-[85px] mx-auto my-auto"
              />
            </View>
            <View className="w-[203px] h-[120px]">
              <Text
                className="text-[#FFFFFF] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                Bad Blue
              </Text>
              <Text
                className="text-[#AAAAAA] text-[12px]"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                대구광역시 | 기간 : 7일
              </Text>
              <Text
                className="text-[#e1e44e] text-[16px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                25,000P
              </Text>

              <View className="mt-auto ml-auto">
                <Text
                  className="text-[#FFFFFF] text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중
                  <Text className="text-[#e1e44e]"> 26명</Text>이 서포트 중
                  입니다.
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable
          className="w-[335px] h-[141px] mb-[20px] border-b border-gray-700 "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="flex flex-row justify-center">
            <View className="h-[120px] w-[120px] mr-[12px] bg-white rounded-[12px] flex flex-row justify-center">
              <Image
                source={require('../../../assets/images/Bear.png')}
                className="w-[75px] h-[85px] mx-auto my-auto"
              />
            </View>
            <View className="w-[203px] h-[120px]">
              <Text
                className="text-[#FFFFFF] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                Bad Blue
              </Text>
              <Text
                className="text-[#AAAAAA] text-[12px]"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                대구광역시 | 기간 : 7일
              </Text>
              <Text
                className="text-[#e1e44e] text-[16px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                25,000P
              </Text>

              <View className="mt-auto ml-auto">
                <Text
                  className="text-[#FFFFFF] text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중
                  <Text className="text-[#e1e44e]"> 26명</Text>이 서포트 중
                  입니다.
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
