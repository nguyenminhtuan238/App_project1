import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Button, 
  Alert,
  TouchableOpacity
} from 'react-native';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function RegisterCarInformation() {

  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);

  // Ô xổ xuống
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string | null) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Ô nhập liệu
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleInputChange1 = (inputText: string) => {
    setText1(inputText);
  };

  const handleInputChange2 = (inputText: string) => {
    setText2(inputText);
  };

  const handleButtonPress = () => {
    Alert.alert('Input values', `Text 1: ${text1}, Text 2: ${text2}`);
  };

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
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

      <View className="mt-2 mb-10">
        <Text className="my-5 ml-2 text-[#fff] text-[20px]">
          차량 소유자
        </Text>

        <TextInput
          className="mx-2 p-[10px] mb-[15px] h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
          onChangeText={handleInputChange1}
          value={text1}
          placeholder="차량 소유자를 입력하세요."
          placeholderTextColor="#a3a2a2"
        />

        <Text className="my-5 ml-2 text-[#fff] text-[20px]">
          차량 번호
        </Text>

        <TextInput
          className="mx-2 p-[10px] mb-[15px] h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
          onChangeText={handleInputChange2}
          value={text2}
          placeholder="차량번호를 입력해주세요."
          placeholderTextColor="#a3a2a2"
        />

        <View className="mt-5 flex justify-center items-center">
          <View className="w-[200px] btn-white">
            <Button 
            title="Submit"
            onPress={handleButtonPress} 
            />
          </View>
        </View>
        
      </View>

      <View className="my-2 border-t-4 border-[#1f232c]">

        <View className="my-5 w-full h-[750px] bg-[#1f232c]">
          <Text className="mt-3 p-2 text-[#fff] text-[20px]">
            '차량조회'를 완료하시면
          </Text>

          <Text className="px-2 text-[#fff] text-[20px]">
            아래 수수료 입력란이 자동으로 채워집니다.
          </Text>

          <View className="mt-10 p-2 ">

            <Text className="mt-5 text-[#a3a2a2] text-[20px]">
              차량 번호
            </Text>
            <Text className='mt-5 w-full h-[50px] border-b border-[#a3a2a2]'></Text>

            <Text className="mt-5 text-[#a3a2a2] text-[20px]">
              자동차 모델/모델 이름
            </Text>
            <Text className='mt-5 w-full h-[50px] border-b border-[#a3a2a2]'></Text>

            <Text className="mt-5 text-[#a3a2a2] text-[20px]">
              모델 연도
            </Text>
            <Text className='mt-5 w-full h-[50px] border-b border-[#a3a2a2]'></Text>

            <Text className="mt-5 text-[#a3a2a2] text-[20px]">
              색상
            </Text>
            <Text className='mt-5 w-full h-[50px] border-b border-[#a3a2a2]'></Text>

            <Text className="mt-5 text-[#a3a2a2] text-[20px]">
             차량 등록 주소
            </Text>
            <Text className='mt-5 w-full h-[50px] border-b border-[#a3a2a2]'></Text>

          </View>
        </View>

        <View className="mt-2 flex justify-center items-center">
          <View className="w-[200px] btn-white">
            <Button 
            title="Submit"
            onPress={handleButtonPress} 
            />
          </View>
        </View>

        <View>
      <Text className="mt-5 text-[#a3a2a2] text-[20px]">Trang {currentPage}/3</Text>
      <TouchableOpacity onPress={handleNextPage}>
        <Text className="mt-5 text-[#a3a2a2] text-[20px]">Chuyển đến trang tiếp theo</Text>
      </TouchableOpacity>
    </View>
      </View>

    </ScrollView>
  );
}
