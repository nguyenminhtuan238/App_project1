import { router } from 'expo-router';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import userFireBase from '../../../commons/services/User.services';
import { CheckLogin } from '../../../commons/store/user';
import DeliveryAddressFireBase from '../../../commons/services/DeliveryAddress.service';
export default function DetailApplyForSponsorship() {
  const user = useSelector((state: RootState) => state.user);
  const [DeliveryAddress, setDeliveryAddress]: any = useState();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const Check = async () => {
      try {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        if (GetUser != null) {
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          if (User?.ID_delivery_address) {
            const getDeliveryAddress: any =
              await DeliveryAddressFireBase.getbyidCarDeliveryAddress(
                User?.ID_delivery_address
              );
            setDeliveryAddress(getDeliveryAddress);
          }
          dispatch(CheckLogin(true));
        }
      } catch (error) {}
    };
    Check();
  }, [user.checklogin]);
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
    <ScrollView className=" bg-black h-full border-t-2 border-[#2c2c2c]">
      <View className="mt-5 ">
        <View className="mx-5 mb-5 flex flex-row items-center justify-center">
          <Text
            className="text-[#fff] text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            배송지
          </Text>

          <Pressable
            className="ml-auto border-2 border-yellow-500 w-[120px] h-[50px] rounded-[30px] items-center justify-center"
            onPress={() => router.push('/(tabs)/DeliveryAddress/addAddress')}
          >
            <Text
              className="text-yellow-500 text-[16px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              배송지 추가
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="mb-5 w-full h-[70px] bg-[#2c2c2c] flex flex-row items-center justify-center rounded-xl">
        <Pressable className="ml-1 w-[70px] h-[50px] bg-yellow-500 rounded-2xl flex items-center justify-center">
          <Text
            className="text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            본가
          </Text>
        </Pressable>

        <Pressable className="ml-1 w-[70px] h-[50px] rounded-2xl flex items-center justify-center">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            회사
          </Text>
        </Pressable>

        <Pressable className="ml-1 w-[70px] h-[50px] rounded-2xl flex items-center justify-center">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            외가
          </Text>
        </Pressable>

        <Pressable className="ml-1 w-[70px] h-[50px] rounded-2xl flex items-center justify-center">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            친구집
          </Text>
        </Pressable>

        <Pressable className="ml-1 w-[70px] h-[50px] rounded-2xl flex items-center justify-center">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            마늘
          </Text>
        </Pressable>
      </View>

      <View className="mx-5">
        <Text
          className="text-[14px] text-[#fff]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          {DeliveryAddress
            ? DeliveryAddress?.Deliveryaddress
            : ' 대구 달서구 호산동로 34길 21-4, 행복빌 203 [42708]'}
        </Text>

        <Text
          className="mt-2 text-[12px] text-[#AAAAAA]"
          style={{ fontFamily: 'Pretendard-Medium' }}
        >
          {DeliveryAddress ? DeliveryAddress?.Receiver : ' 홍길동'}|{' '}
          {DeliveryAddress ? DeliveryAddress?.Phone : '010-1231-1592'}
        </Text>
      </View>

      <View className="mx-5">
        <Text
          className="mt-5 mb-5 text-[16px] text-[#fff]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          배송 요청사항
        </Text>

        <Pressable className="ml-auto mr-auto w-[350px] h-[50px] border-2 border-yellow-500 rounded-xl flex items-center justify-center">
          <Text
            className="text-[16px] text-[#AAAAAA]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            배송 시 요청사항을 선택해주세요.
          </Text>
        </Pressable>
      </View>

      <View className="mt-5 border-t-[5px] border-[#2c2c2c]">
        <Text
          className="mt-5 mx-5 text-[#fff] text-[20px]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          광고 상품 정보
        </Text>

        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-[40%] object-contain bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bucks.png')}
              className="h-[120] w-[100] "
            />
          </View>
          <View className="basis-[60%] mr-3">
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              MILWAUKEE BUCKS
            </Text>
            <Text
              className="text-[#AAAAAA] text-[12px] mt-2"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              대구광역시 | 기간 : 120일
            </Text>
            <Text
              className="text-[#e1e44e] text-[16px] my-5"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              12,000P
            </Text>
            <View className="flex flex-row justify-end mt-3">
              <Text
                className="text-[#AAAAAA] text-[12px]"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                100명중 <Text className="text-yellow-500">26명</Text>이 서포트
                중 입니다.
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      <View className="my-2 mt-auto">
        <Pressable
          className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
          //onPress={() => router.push('/(tabs)/ApplyForSponsorship/detail')}
        >
          <Text
            className="text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            주문하기
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
