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

import { useFonts } from 'expo-font';

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';
import { Avatar } from '@rneui/themed';
export default function Notification() {
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
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
      <View className="bg-[#fff] h-screen">
        <View className="p-5">
          <ScrollView>
            <View className="  flex flex-row">
            <View className="flex p-2 basis-1/6 my-auto py-auto">
            <Avatar
    size={32}
    rounded
    source={require('../../../assets/images/logo.jpg')}
  />
            </View>
              <View className="flex p-2  ">
                <Text
                  className="text-[#000]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
               
                  확인하십시오.
                </Text>
                <Text
                  className="text-[#3f3f3f]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  우리는이 사진이 확인하기에 적합하지 않다고 판단했으며 사진을
                  요청합니다.
                </Text>
                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  1 시간 전
                </Text>
              </View>
            </View>
            <View className=" flex flex-row">
            <View className="flex p-2 basis-1/6 my-auto py-auto">
            <Avatar
    size={32}
    rounded
    source={require('../../../assets/images/logo.jpg')}
  />
            </View>
              <View className="flex p-2">
                <Text
                  className="text-[#000]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                 
                 
                  점수의 축적이 완료되었습니다.
                </Text>
                <Text
                  className="text-[#3f3f3f]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  20,000POINT 축적
                </Text>
                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  1 일 전
                </Text>
              </View>
            </View>
            <View className=" flex flex-row">
            <View className="flex p-2 basis-1/6 my-auto py-auto">
            <Avatar
    size={32}
    rounded
    source={require('../../../assets/images/logo.jpg')}
  />
            </View>
              <View className="flex p-2">
                <Text
                  className="text-[#000]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                 첨부 된
                  사진 스티커를 확인하십시오.
                </Text>
                <Text
                  className="text-[#3f3f3f]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  지정되고 결정된 스티커를 첨부하십시오
                </Text>
                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  2 일 전
                </Text>
              </View>
            </View>
            <View className="flex-row  flex">
            <View className="flex p-2 basis-1/6 my-auto py-auto">
            <Avatar
    size={32}
    rounded
    source={require('../../../assets/images/logo.jpg')}
  />
            </View>
              <View className="flex p-2">
                <Text
                  className="text-[#000]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                 
                  요청 인출이 완료되었습니다
                </Text>
                <Text
                  className="text-[#3f3f3f]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  처리 프로세스에는 철회가 필요합니다. 약 1-2 일이 소요됩니다
                </Text>
                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  3 일 전
                </Text>
              </View>
            </View>
           
            <View className=" flex flex-row">
            <View className="flex p-2 basis-1/6 my-auto py-auto">
            <Avatar
    size={32}
    rounded
    source={require('../../../assets/images/logo.jpg')}
  />
            </View>
              <View className="flex p-2">
                <Text
                  className="text-[#000]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  새로운
                  스폰서가 등록되었습니다
                </Text>
                <Text
                  className="text-[#3f3f3f]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  스폰서로 가입하고 포인트를 얻으십시오.
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  5 일전
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
  );
}
