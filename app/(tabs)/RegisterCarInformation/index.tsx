import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function RegisterCarInformation() {

  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string | null) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <ScrollView className=" bg-[#000]">

      <View className=" py-5 flex border rounded-[15px]">
        <View className="flex flex-row ">
            <Text className="px-5 pb-2 mr-auto text-[#fff] text-[20px] "> 
                브랜드 캠페인을 진행하려면, 
            </Text>
        </View>

        <View className="flex flex-row">
            <Text className="px-5 pb-2 mr-auto text-[#fff] text-[20px] ">
                차량정보 등록은 필수입니다
            </Text>
        </View>

      </View>

      <View>
            <Pressable
            className="px-2 flex justify-center w-full h-[60px] border-b-2 border-[#a3a2a2] bg-[#1f232c]"
            onPress={toggleDropdown}
            >
                <View className="flex justify-center">
                    <Text className="px-2 text-[#fff] text-[20px]">
                        공동 명의인 경우 차량 소유자의 예
                    </Text>
                </View>
            </Pressable>

            {isOpen && (
                <View>
                    <Pressable className="px-2 flex justify-center w-full h-[150px] bg-[#1f232c] border-b border-[#a3a2a2]" onPress={() => handleOptionSelect('단독 소유권')}>
                        <Text className="text-[#FFFF00] text-[20px]">
                          . 단독 소유권
                        </Text>
                        <Text className="mt-2 text-[#fff] text-[20px]">
                          등록증 소유자의 이름: 홍길동
                        </Text>
                        <Text className="ml-auto  text-[#fff] text-[20px]">
                          입력값: 홍길동
                        </Text>
                    </Pressable>

                    <Pressable className="px-2 flex justify-center w-full h-[200px] bg-[#1f232c] border-b border-[#a3a2a2]" onPress={() => handleOptionSelect('공유 소유권')}>
                        <Text className="text-[#FFFF00] text-[20px]">
                          . 공유 소유권
                        </Text>
                        <Text className="mt-2 text-[#fff] text-[20px]">
                          등록증 소유자의 이름: 홍길동 (60%), 이순자 (40%)
                        </Text>
                        <Text  className="mt-2 text-[#fff] text-[20px]">
                          홍길동 외 1명 (이순자)
                        </Text>
                        <Text className="mt-2 ml-auto  text-[#fff] text-[20px]">
                          입력값: 홍길동
                        </Text>
                    </Pressable>

                    <Pressable className="px-2 flex justify-center w-full h-[150px] bg-[#1f232c] border-b border-[#a3a2a2]" onPress={() => handleOptionSelect('자동차 임대')}>
                        <Text className="text-[#FFFF00] text-[20px]">
                          . 자동차 임대
                        </Text>
                        <Text className="mt-2 text-[#fff] text-[20px]">
                          소유자 이름 증명서: 롯데렌탈㈜
                        </Text>
                        <Text className="mt-2 ml-auto  text-[#fff] text-[20px]">
                          입력값: 롯데렌탈㈜
                        </Text>
                    </Pressable>
                </View>
            )}

            {selectedOption && (
                <View  className="px-3 flex justify-center w-full h-[50px] bg-[#1f232c] border-1 border-[#a3a2a2]">
                    <Text className="text-[#FFFF00] text-[20px]">
                        선택된: {selectedOption}
                    </Text>
                </View>
            )}
      </View>

      <View className="mt-2">
        <Pressable
          className="border-b border-gray-700 mb-2 flex flex-row p-5  justify-center "
          onPress={() => router.push('/(tabs)/DetailProduct/')}
        >
          <View className="basis-1/2 bg-white rounded-[10px] mx-3 p-5 flex flex-row justify-center">
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100]"
            />
          </View>
          <View className="basis-1/2 mr-3">
            <Text className="text-[#fff] text-[20px]">배드블루</Text>
            <Text className="text-[#a3a2a2] ">대구광역시 | 시간: 7일</Text>
            <Text className="text-[#e1e44e] text-[15px]">시간: 7일</Text>
            <View className="flex flex-row justify-end">
              <Text className="text-[#a3a2a2]">
                100명 중 26명이 지지하고 있습니다.
              </Text>
            </View>
          </View>
        </Pressable>

      </View>
    </ScrollView>
  );
}
