import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';

import { useFonts } from 'expo-font';

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function DeliveryAddress() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);

   // chọn district
   const [selectedAddress, setSelectedAddress] = useState('false');
   const handleAddressSelection = (address: string) => {
    if(selectedAddress === 'false'){
      setSelectedAddress(address);
    } else {
      setSelectedAddress(address);
    }
    
  };

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

  // Ô nhập liệu
  const [text1, setText1] = useState('');

  const handleInputChange1 = (inputText: string) => {
    setText1(inputText);
  };

  const [text2, setText2] = useState('');

  const handleInputChange2 = (inputText: string) => {
    setText2(inputText);
  };

  const [text3, setText3] = useState('');

  const handleInputChange3 = (inputText: string) => {
    setText3(inputText);
  };

  const [text4, setText4] = useState('');

  const handleInputChange4 = (inputText: string) => {
    setText4(inputText);
  };

  const [text5, setText5] = useState('');

  const handleInputChange5 = (inputText: string) => {
    setText5(inputText);
  };

  const [text6, setText6] = useState('');

  const handleInputChange6 = (inputText: string) => {
    setText6(inputText);
  };

  if (!fontsLoaded) {
    return undefined; // Hoặc trả về một phần tử loading
  }

  return (
    <ScrollView className="bg-[#000] border-t-2 border-[#2c2c2c]">
      <View className="m-5">
        <Text
          className="text-[20px] text-[#fff]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          우편번호
        </Text>

        <TextInput
          className="p-2 h-[50px] text-[#a3a2a2] text-[20px] border-b border-[#a3a2a2]"
          style={{ fontFamily: 'Pretendard-Bold' }}
          onChangeText={handleInputChange1}
          value={text1}
          placeholder="10239"
          placeholderTextColor="#a3a2a2"
        />

        <Pressable
          className="mt-5 ml-auto w-[150px] h-[50px] flex justify-center items-center bg-yellow-500 rounded-full"
          //title="Submit"
          //onPress={handleButtonPress}
        >
          <Text
            className="text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            우편번호 찾기
          </Text>
        </Pressable>
      </View>

      <View className="mx-5">
        <View className="my-5">
          <Text
            className="text-[20px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            주소지
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#a3a2a2] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Bold' }}
            onChangeText={handleInputChange2}
            value={text2}
            placeholder="경기도 고양시 일산동구 마두1동"
            placeholderTextColor="#a3a2a2"
          />
        </View>

        <View className="my-5">
          <Text
            className="text-[20px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            상세주소
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#a3a2a2] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Bold' }}
            onChangeText={handleInputChange3}
            value={text3}
            placeholder="동아아파트 601동 1401호우편번호"
            placeholderTextColor="#a3a2a2"
          />
        </View>

        <View className="my-5">
          <Text
            className="text-[20px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            배송지명
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#a3a2a2] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Bold' }}
            onChangeText={handleInputChange4}
            value={text4}
            placeholder="집"
            placeholderTextColor="#a3a2a2"
          />
        </View>

        <View className="my-5">
          <Text
            className="text-[20px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            수령인
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#a3a2a2] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Bold' }}
            onChangeText={handleInputChange5}
            value={text5}
            placeholder="김포비"
            placeholderTextColor="#a3a2a2"
          />
        </View>

        <View className="my-5">
          <Text
            className="mb-2 text-[20px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            휴대폰
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#a3a2a2] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Bold' }}
            onChangeText={handleInputChange6}
            value={text6}
            placeholder="010-1523-1699"
            placeholderTextColor="#a3a2a2"
          />
        </View>
      </View>

      <View className="m-5">
        <Pressable
          onPress={() =>
            handleAddressSelection(
              selectedAddress === 'false' ? 'true' : 'false',
            )
          }
        >
          <View className="ml-auto flex flex-row">
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 40,
                backgroundColor:
                selectedAddress === 'false' ? 'black' : 'transparent',
                borderWidth: 2,
                borderColor: selectedAddress === 'true' ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
              }}
            >
              {selectedAddress === 'true' && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Pressable className="border-yellow-500 rounded-full w-[15px] h-[15px] bg-yellow-500" />
                </View>
              )}
              
            </View>
            <Text
              className="mx-2 text-[20px] text-[#fff]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              기본 배송지로 설정
            </Text>
          </View>
        </Pressable>
        

        <Pressable
          className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
          onPress={() => router.push('/ApplyForSponsorship/detail')}
        >
          <Text
            className="text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            저장하기
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
