import { View, Text, Pressable, TextInput } from 'react-native';
import { Dialog } from '@rneui/themed';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { RootState, AppDispatch } from '../../commons/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBlockWithDrawal } from '../../commons/store/dialog';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../commons/themes/global';
import userFireBase from '../../commons/services/User.services';
import { CheckLogin } from '../../commons/store/user';

export default function BlockWithDrawal() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const [User, setUser]: any = useState();
  const [getName, setName]: any = useState('');
  const [number_Address, setnumber_Address]: any = useState('');
  useEffect(() => {
    const Check = async () => {
      try {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        if (GetUser != null) {
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          setUser(User);
          setName(User?.Name);
          dispatch(CheckLogin(true));
        }
      } catch (error) {}
    };
    Check();
  }, [user.checklogin]);
  const setBlockWithDrawal = async () => {
    dispatch(toggleBlockWithDrawal());
  };
  const update = async () => {
    try {
      if (getName != '' && number_Address != '') {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        const data = {
          Name: getName,
          number_Address,
          update_at: new Date(Date.now()),
        };
        await userFireBase.updateuser(data, JSON.parse(GetUser)?.id);
        dispatch(toggleBlockWithDrawal());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Dialog
        isVisible={dialog.BlockWithDrawal}
        onBackdropPress={setBlockWithDrawal}
        className="p-5"
      >
        <View className="flex flex-row justify-between  mb-5 ">
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
            {User?.Name ? (
              <Text className="basis-1/2 text-gray-300  ml-2">
                {User?.Name}
              </Text>
            ) : (
              <TextInput
                style={{ fontFamily: 'Pretendard-Bold' }}
                className="basis-1/2 text-gray-300  ml-2"
                placeholder="이름을 입력하세요"
                onChangeText={setName}
                value={getName}
                placeholderTextColor="#D1D5DB"
              />
            )}
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
            <TextInput
              style={{ fontFamily: 'Pretendard-Bold' }}
              className="basis-1/2 text-gray-300 ml-2"
              placeholder="비포함 숫자를 입력하세요."
              onChangeText={setnumber_Address}
              value={number_Address}
              placeholderTextColor="#D1D5DB"
            />
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
            onPress={update}
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
    </View>
  );
}
