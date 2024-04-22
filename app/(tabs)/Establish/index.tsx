import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, Switch } from 'react-native';

import { useFonts } from 'expo-font';

import LayoutScreen from '../../../components/user/Homelayout/layout';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Establish() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
      <View className="bg-[#000] h-screen">
        <View className="h-[2] bg-[#494949] flex flex-row justify-between "></View>
        <View className="p-5">
          <ScrollView>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px] my-auto p-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  애플리케이션 정보 설치
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px] my-auto p-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  알림이 가득 참
                </Text>

                <View className="text-[#575757] ">
                  <Switch
                    trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    className="scale-x-[1.5] scale-y-[1.5]"
                  />
                </View>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px] my-auto p-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  알림 소리
                </Text>

                <View className="text-[#575757] ">
                  <Switch
                    trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    className="scale-x-[1.5] scale-y-[1.5]"
                  />
                </View>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px] my-auto p-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  진동 알림
                </Text>

                <View className="text-[#575757] ">
                  <Switch
                    trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    className="scale-x-[1.5] scale-y-[1.5]"
                  />
                </View>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex p-2">
                <Text
                  className="text-[#fff]  text-[18px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  마케팅 정보 수신에 동의합니다.
                </Text>

                <Text
                  className="text-[#f0da5e]  text-[15px] "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  이벤트와 혜택에 대한 정보를 받아보실 수 있습니다.
                </Text>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px] my-auto p-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  이메일 수신에 동의
                </Text>

                <View className="text-[#575757] ">
                  <Switch
                    trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    className="scale-x-[1.5] scale-y-[1.5]"
                  />
                </View>
              </View>
            </View>
            <View className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[18px] my-auto p-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  SMS 수신에 동의
                </Text>

                <View className="text-[#575757] ">
                  <Switch
                    trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                    thumbColor="#f4f3f4"
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    className="scale-x-[1.5] scale-y-[1.5]"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
