import { router } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';

import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { useEffect } from 'react';
import { envUser } from '../../../commons/themes/global';
import userFireBase from '../../../commons/services/User.services';
import { CheckLogin } from '../../../commons/store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function DetailProduct() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const Check = async () => {
      try {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        if (GetUser != null) {
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          dispatch(CheckLogin(true));
        }
      } catch (error) {}
    };
    Check();
  }, [user.checklogin]);
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
    <View className=" bg-[#a8a7a7]">
      <View className=" mb-2 flex flex-row p-5  justify-center   ">
        <View className="  rounded-[10px] mx-5  flex flex-row justify-center">
          <Image
            source={require('../../../assets/images/Bear.png')}
            className="h-[290] w-[290] "
            resizeMode="stretch"
          />
        </View>
      </View>
      <View className="h-[38] bg-[#494949] flex flex-row items-center	">
        <Text
          className="text-amber-200 text-[12px] ml-3"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          100명 중 26명이 지지하고 있습니다.
        </Text>
      </View>

      <View className=" bg-[#000] flex  justify-between p-5	">
        <Text
          className="text-white text-[24px] ml-3"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          Bad Blue
        </Text>
        <Text
          className="text-white text-[14px] ml-3 mt-1"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          시간: 30일
        </Text>
        <Text
          className="text-[#a1a0a0] text-[14px] ml-3 mt-5"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          배드블루 대구광역시
        </Text>
        <View className=" bg-[#000] flex flex-row justify-end mt-10	">
          <Text
            className="text-white text-[24px] ml-3 Text-right"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            25,000P 적립 가능
          </Text>
        </View>
        <View className=" bg-[#000] flex justify-center items-center p-5	w-full">
          {user.checklogin ? (
            <Pressable className=" bg-[#eeea14] p-5  rounded-full  w-full">
              <Text
                className="text-center text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                스폰서 신청
              </Text>
            </Pressable>
          ) : (
            <Pressable
              className=" bg-[#eeea14] p-5  rounded-full  w-full"
              onPress={() => router.push('/register/')}
            >
              <Text
                className="text-center text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                스폰서 신청
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}
