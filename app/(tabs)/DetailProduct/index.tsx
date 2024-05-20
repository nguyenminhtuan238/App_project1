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
    <View className=" bg-[#000] h-full">
      <View className="h-[290px] flex flex-row justify-center bg-[#CCCCCC] ">
        <View className="mx-auto my-auto">
          <Image
            source={require('../../../assets/images/Bear.png')}
            className="h-[233] w-[233] "
            resizeMode="stretch"
          />
        </View>
      </View>

      <View className="h-[38] px-[20px] py-[10px] bg-[#2E2E2E] flex flex-row items-center	">
        <Text
          className="text-[#FFFFFF] text-[12px]"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          100명중{' '}
          <Text
            className="text-yellow-300"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            {' '}
            26명
          </Text>
          이 지지하고 있습니다.
        </Text>
      </View>

      <View className="  flex  justify-between p-5	">
        <Text
          className="text-[#FFFFFF] text-[24px]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          Bad Blue
        </Text>
        <Text
          className="text-[#FFFFFF] text-[14px] mt-1"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          시간:
          <Text
            className="text-yellow-300"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            {' '}
            30일{' '}
          </Text>
        </Text>
        <Text
          className="text-[#a1a0a0] text-[14px]  mt-5"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          배드블루 대구광역시
        </Text>

        <View className="ml-auto flex flex-row mt-10">
          <Text
            className="text-yellow-300 text-[24px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            25,000P
          </Text>
          <Text
            className="text-[#FFFFFF] text-[24px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            {' '}
            적립 가능
          </Text>
        </View>

        <View className="mt-[20px]">
          {user.checklogin ? (
            <Pressable
              className="w-[335px] h-[56px] mx-auto my-auto bg-[#eeea14] rounded-full"
              onPress={() => router.push('/ApplyForSponsorship/detail')}
            >
              <Text
                className="mx-auto my-auto text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                스폰서 신청
              </Text>
            </Pressable>
          ) : (
            <Pressable
              className="w-[335px] h-[56px] mx-auto my-auto bg-[#eeea14] rounded-full"
              onPress={() => router.push('/register/')}
            >
              <Text
                className="mx-auto my-auto text-[20px]"
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
