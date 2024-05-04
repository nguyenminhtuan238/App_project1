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
import { Dialog } from '@rneui/themed';

import { useFonts } from 'expo-font';

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { toggleDialog2 } from '../../../commons/store/dialog';

export default function WithDrawal() {
  const Point = useSelector((state: RootState) => state.point);
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [BlockWithDrawal, setBloack] = useState(false);
  const tDialog = () => {
    dispatch(toggleDialog2());
  };
  const setBlockWithDrawal = () => {
    setBloack(!BlockWithDrawal);
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
    <ScrollView className=" bg-[#000]">
      <View className=" flex-row justify-center  border rounded-[15px]  ">
        <Pressable
          onPress={() => setSearch(1)}
          className="  bg-[#606163] p-4 w-[100px] rounded-full  "
        >
          <Text
            className="text-[#fff] text-[10px] text-center"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            탈퇴 신청
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push('/Application/')}
          className=" bg-[#44434377] p-4 rounded-full"
        >
          <Text
            className="text-[#a3a2a2] text-[10px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            신청 내용
          </Text>
        </Pressable>
      </View>
      <View className="border border-amber-200 mt-5 rounded-[20px] p-3 flex justify-between flex-row mx-5">
        <Text className="text-white" style={{ fontFamily: 'Pretendard-Bold' }}>
          보관금액
        </Text>
        <Text
          className="text-amber-300"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          8.000P
        </Text>
      </View>
      <View className="mt-2 mb-2">
        <View className="border-b border-gray-700  flex p-2  justify-center ">
          <Text
            className="text-white mb-2"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            출금요청금액
          </Text>
          <Text
            className=" text-[#575757] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            8000
          </Text>
        </View>
      </View>
      <View className="mt-2 mb-2">
        <View className="border-b border-gray-700  flex p-2  justify-center ">
          <Text
            className="text-white mb-2"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            출금계좌
          </Text>
          <Text
            className=" text-[#575757] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            ádsadsa
          </Text>
        </View>
      </View>
      <View className="mt-2 mb-2">
        <View className="border-b border-gray-700  flex p-2  justify-end items-end ">
          <Pressable
            onPress={() => setSearch(1)}
            className=" bg-amber-200 p-2 w-[25%] rounded-full"
          >
            <Text
              className="text-black text-[10px] text-center"
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
            계정 소유자
          </Text>
          <Text
            className=" text-[#575757] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            ádsadsa
          </Text>
        </View>
      </View>
      <View className="mt-2 mb-2">
        <View className="border-b border-gray-700  flex p-2  justify-end items-end ">
          <Pressable
            onPress={setBlockWithDrawal}
            className=" bg-amber-200 p-4 w-[40%] rounded-full"
          >
            <Text
              className="text-black text-[10px] text-center"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              돈을 인출하세요
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="mt-2 mb-2">
        <View className=" flex p-2  justify-end items-start ">
          <Text
            className="text-white text-[15px] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            출금등록시 주의사항
          </Text>
          <View className="mt-3 ml-3">
            <Text
              className="text-[#575757] text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              출금요청은 적립된 포인트를 현금으로 출금하는 기능입니다.
            </Text>
            <Text
              className="text-[#575757] text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              1회 최대 5만원까지 출금신청 가능
            </Text>
            <Text
              className="text-[#575757] text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              출금신청 금액은 신청일 기준 약 1일 동안 보류됩니다. (영업일
              기준으로 계산됨/주말, 홀수일 제외)
            </Text>
            <Text
              className="text-[#575757] text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              계좌정보를 정확하게 입력해주세요
            </Text>
            <Text
              className="text-[#575757] text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              계좌번호 오류 등의 사유로 정상적인 출금이 불가능한 경우, 1~2일
              이내에 포인트가 환급됩니다.
            </Text>
            <Text
              className="text-[#575757] text-[10px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              탈퇴 이전에 서비스를 탈퇴할 경우, 등록정보는 삭제되며 탈퇴가
              처리되지 않습니다.
            </Text>
          </View>
        </View>
      </View>
      <Dialog isVisible={dialog.WithDrawal} onBackdropPress={tDialog}>
        <Dialog.Loading />
      </Dialog>
      <Dialog isVisible={dialog.WithDrawal} onBackdropPress={tDialog}>
        <View className="text-[15px] flex justify-center items-center">
          <AntDesign name="checkcircleo" size={40} color="orange" />
        </View>
        <View className="flex flex-cols justify-center items-center my-3 ">
          <Text
            className="text-[15px] font-bold "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            출금신청이
          </Text>
          <Text
            className="text-[15px] font-bold "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            완료되었습니다
          </Text>
        </View>
        <Text
          className="text-[12px] text-[#7e7e7e]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          출금 신청한 금액은 신청일 기준 익일 입금될 예정입니다. (영업일
          기준/주말, 공휴일 제외)
        </Text>
        <View className=" flex justify-center items-center mt-5">
          <Pressable
            className=" bg-[#ecc647] p-3  rounded-[10px]  w-full"
            onPress={tDialog}
          >
            <Text
              className="text-white text-center text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              확인
            </Text>
          </Pressable>
        </View>
      </Dialog>
      <Dialog isVisible={BlockWithDrawal} onBackdropPress={setBlockWithDrawal}>
        <Dialog.Loading />
      </Dialog>
      <Dialog isVisible={BlockWithDrawal} onBackdropPress={setBlockWithDrawal}>
        <View className="flex flex-row justify-between  mb-5">
          <Text
            className="text-[15px] font-bold "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            지급명세서 발행을 위한 정보 수집
          </Text>
          <Pressable onPress={setBlockWithDrawal}>
            <Entypo name="cross" size={24} color="black" />
          </Pressable>
        </View>
        <View className="flex bg-gray-200 p-5">
          <Text
            className="text-[13px] text-[#000]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            {' '}
            고유 식별 정보 수집
          </Text>
          <View className="flex flex-row  mt-3">
            <View className="my-auto py-auto">
              <FontAwesome name="circle" size={13} color="yellow" />
            </View>
            <Text
              className="text-[13px] text-[#000] mx-3"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              주민등록번호/외국인등록번호
            </Text>
          </View>
        </View>
        <View className="border-b border-gray-300">
          <View className="flex flex-row my-3 ">
            <Text
              className="basis-1/3"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              이름
            </Text>
            <Text
              className="basis-1/2 text-gray-300"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              이름을 입력하세요
            </Text>
          </View>
        </View>
        <View className="border-b border-gray-300">
          <View className="flex flex-row my-3 ">
            <Text
              className="basis-1/3"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              영주권등록번호(외국인등록번호)
            </Text>
            <Text
              className="basis-1/2 text-gray-300"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              비포함 숫자를 입력하세요.
            </Text>
          </View>
        </View>
        <View className="mt-5">
          <Text
            className="text-[12px] text-[#7e7e7e]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            -청구서 작성을 위해 주민등록번호를 수집하며, 한 번만 입력하시면 향후
            거래 기록에 사용됩니다.
          </Text>
          <Text
            className="text-[12px] text-[#7e7e7e]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            -수집된 정보는{' '}
            <Text style={{ fontFamily: 'Pretendard-Bold' }}>
              {' '}
              법적 보유기간 종료 후 즉시 파기
            </Text>{' '}
            됩니다.
          </Text>
          <Text
            className="text-[12px] text-[#7e7e7e]"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            -본 동의를 거부하실 수 있으나, 동의를 거부하실 경우 어떠한 이익도
            받으실 수 없습니다.
          </Text>
          <Text
            className="text-[12px] text-[#7e7e7e] mt-2"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            *SSUIK 관련 소득은
            <Text
              className="text-[#ecc647]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              {' '}
              소득세법 제2조(기타소득)
            </Text>{' '}
            에 해당하며, 동법 제164조에 따른 지급신고를 위해 주민등록번호(또는
            외국인등록번호)를 수집합니다.
          </Text>
        </View>
        <View className=" flex justify-center items-center mt-5">
          <Pressable
            className=" bg-[#ecc647] p-3  rounded-[30px]  w-full"
            onPress={setBlockWithDrawal}
          >
            <Text
              className="text-white text-center text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              등을 확인하고
            </Text>
          </Pressable>
        </View>
      </Dialog>
    </ScrollView>
  );
}
