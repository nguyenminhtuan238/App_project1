import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import {
  toggleDialog2,
  toggleBlockWithDrawal,
} from '../../../commons/store/dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import userFireBase from '../../../commons/services/User.services';
import pointFireBase from '../../../commons/services/point.services';
import DiaLogWithDrawal from '../../../components/dialog/WithDrawal';
import BlockWithDrawal from '../../../components/dialog/BlockWithDrawal';
import { Entypo } from '@expo/vector-icons';

export default function WithDrawal() {
  const user = useSelector((state: RootState) => state.user);
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const [User, setUser]: any = useState();
  const [getPoint, setPoint]: any = useState('');
  const setBlockWithDrawal = () => {
    dispatch(toggleBlockWithDrawal());
  };
  useEffect(() => {
    const Check = async () => {
      try {
        if ((await AsyncStorage.getItem(envUser)) != null) {
          const GetUser: any = await AsyncStorage.getItem(envUser);
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          setUser(User);
        }
      } catch (error) {
        console.log(error);
      }
    };
    Check();
  }, [dialog.BlockWithDrawal]);
  const tDialog = () => {
    dispatch(toggleDialog2());
  };
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
  useEffect(() => {
    if (!fontsLoaded) {
      return undefined;
    }
  }, []);

  return (
    <>
      {user.checklogin && (
        <ScrollView className=" bg-[#000]">
          <View className=" w-[300px] h-[48px] mx-auto  flex-row justify-center items-center rounded-full bg-[#1f242a]">
            <Pressable className=" bg-[#606163] w-[150px] h-[48px] mx-auto flex justify-center items-center rounded-full ">
              <Text
                className="text-[#fff] text-[16px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                출금 신청
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/Application/')}
              className="w-[150px] h-[48px] ml-auto flex justify-center items-center rounded-full bg-[#1f242a]"
            >
              <Text
                className="text-[#5F6265] text-[16px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                신청 내역
              </Text>
            </Pressable>
          </View>
          <View className="border border-amber-200 mt-5 rounded-[20px] p-3 flex justify-between flex-row mx-5">
            <Text
              className="text-white"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              보유 포인트
            </Text>
            <Text
              className="text-amber-300"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              {user.checklogin ? User?.Point : 0}P
            </Text>
          </View>
          <View className="mt-2 mb-2">
            <View className="border-b border-gray-700  flex p-2  justify-center ">
              <Text
                className="text-white mb-2"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                출금 신청 금액
              </Text>
              <TextInput
                style={{ fontFamily: 'Pretendard-Bold' }}
                className="text-[#AAAAAA]"
                placeholder="출금할 금액을 입력해 주세요."
                onChangeText={setPoint}
                value={getPoint}
                placeholderTextColor="#575757"
              />
            </View>
          </View>
          <View className="mt-2 mb-2">
            <View className="border-b border-gray-700  flex p-2  justify-center ">
              <Text
                className="text-white mb-2"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                출금 계좌
              </Text>
              <TextInput
                style={{ fontFamily: 'Pretendard-Bold' }}
                className="text-[#AAAAAA]"
                placeholder="계좌번호를 입력해 주세요."
                onChangeText={setPoint}
                value={getPoint}
                placeholderTextColor="#575757"
              />

              {/* <Text className="border border-gray-300"  style={{ fontFamily: 'Pretendard-Bold' }}>KB국민</Text>  281902-13-159283 */}
            </View>
          </View>
          <View className="mt-2 mb-2">
            <View className="border-b border-gray-700  flex p-2  justify-end items-end ">
              <Pressable className=" bg-yellow-300 p-2  w-[30%] rounded-full">
                <Text
                  className="text-black text-[16px] text-center"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  은행 선택
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="mt-2 mb-2">
            <View className="border-b border-gray-700  flex p-2  justify-center ">
              <Text
                className="text-white mb-2"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                예금주
              </Text>
              <TextInput
                style={{ fontFamily: 'Pretendard-Bold' }}
                className="text-[#AAAAAA]"
                placeholder="예금주를 입력해 주세요."
                onChangeText={setPoint}
                value={getPoint}
                placeholderTextColor="#575757"
              />
            </View>
          </View>
          <View className="mt-2 mb-2">
            {User?.number_Address ? (
              <View className="border-b border-gray-700  flex p-2  justify-end items-end ">
                <Pressable
                  onPress={tDialog}
                  className=" bg-amber-200 p-4 w-[40%] rounded-full"
                >
                  <Text
                    className="text-black text-[10px] text-center"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    출금하기
                  </Text>
                </Pressable>
              </View>
            ) : (
              <View className="border-b border-gray-700  flex p-2  justify-end items-end ">
                <Pressable
                  onPress={setBlockWithDrawal}
                  className=" bg-[#BEBEBE] p-3 w-[40%] rounded-full"
                >
                  <Text
                    className="text-black text-[16px] text-center"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    출금하기
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
          <View className="mt-2 mb-2">
            <View className=" flex p-2  justify-end items-start ">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                출금 신청 시 유의사항
              </Text>
              <View className="mt-3 ml-3 ">
                <View className="flex flex-row">
                  <Entypo name="dot-single" size={13} color="#AAAAAA" />
                  <Text
                    className="text-[#AAAAAA] text-[12px] mb-2"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    출금 신청은 적립 포인트를 현금으로 인출하는 기능입니다.
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Entypo name="dot-single" size={13} color="#AAAAAA" />
                  <Text
                    className="text-[#AAAAAA] text-[12px] mb-2 "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    출금 신청은 1회당 최대 5만원까지 가능합니다.
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Entypo name="dot-single" size={13} color="#AAAAAA" />
                  <Text
                    className="text-[#AAAAAA] text-[12px] mb-2 "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    출금 신청한 금액은 신청일 기준 익일 입금될 예정입니다.
                    (영업일 기준/주말, 공휴일 제외)
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Entypo name="dot-single" size={13} color="#AAAAAA" />
                  <Text
                    className="text-[#AAAAAA] text-[12px] mb-2 "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    계좌정보를 정확히 입력해주세요.
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Entypo name="dot-single" size={13} color="#AAAAAA" />
                  <Text
                    className="text-[#AAAAAA] text-[12px] mb-2 "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    계좌번호 오류 등의 사유로 정상 출금이 안될 경우 1~2일 이내
                    다시 포인트로 적립하여 드립니다.
                  </Text>
                </View>
                <View className="flex flex-row">
                  <Entypo name="dot-single" size={13} color="#AAAAAA" />
                  <Text
                    className="text-[#AAAAAA] text-[12px] mb-2 "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    출금 전 서비스를 탈퇴하는 경우 신청 정보가 삭제되어 출금이
                    진행되지 않습니다.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <DiaLogWithDrawal />
          <BlockWithDrawal />
        </ScrollView>
      )}
    </>
  );
}
