import { router } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';

import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function RegisterCarInformation() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);

  // Ô xổ xuống
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleOptionSelect = (option: string | null) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

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
    Alert.alert('Input values', `차량 소유자: ${text1}, 차량 번호: ${text2}`);
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

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View className="bg-[#000]">
      <View className="border-yellow-500 border-t-4 w-1/3 " />
      <ScrollView className="bg-[#000]">
        <View className=" py-5 flex border rounded-[15px] z-10">
          <View className="flex flex-row ">
            <Text
              className="px-5 pb-2 mr-auto text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              브랜드 캠페인을 진행하려면,
            </Text>
          </View>

          <View className="flex flex-row">
            <Text
              className="px-5 pb-2 mr-auto text-[#fff] text-[20px] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              차량정보 등록은 필수입니다
            </Text>
          </View>
        </View>

        <View>
          <Pressable
            className="px-2 flex justify-center w-full h-[60px] border-b-2 border-[#a3a2a2] bg-[#1f232c]"
            onPress={toggleDropdown}
          >
            <View className="flex flex-row justify-center">
              <Text
                className="px-2 text-[#fff] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                공동 명의인 경우 차량 소유자의 예
              </Text>
              <Text
                className="text-yellow-500 ml-auto text-xl"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                V
              </Text>
            </View>
          </Pressable>

          {isOpen && (
            <View>
              {/* <Pressable className="px-2 flex justify-center w-full h-[150px] bg-[#1f232c] border-b border-[#a3a2a2]" onPress={() => handleOptionSelect('단독 소유권')}> */}
              <Pressable className="px-2 flex justify-center w-full h-[150px] bg-[#1f232c] border-b border-[#a3a2a2]">
                <Text
                  className="text-[#FFFF00] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  . 단독 소유권
                </Text>
                <Text
                  className="mt-2 text-[#fff] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  등록증 소유자의 이름: 홍길동
                </Text>
                <Text
                  className="ml-auto  text-[#fff] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  입력값: 홍길동
                </Text>
              </Pressable>

              {/* <Pressable className="px-2 flex justify-center w-full h-[200px] bg-[#1f232c] border-b border-[#a3a2a2]" onPress={() => handleOptionSelect('공유 소유권')}> */}
              <Pressable className="px-2 flex justify-center w-full h-[200px] bg-[#1f232c] border-b border-[#a3a2a2]">
                <Text
                  className="text-[#FFFF00] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  . 공유 소유권
                </Text>
                <Text
                  className="mt-2 text-[#fff] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  등록증 소유자의 이름: 홍길동 (60%), 이순자 (40%)
                </Text>
                <Text
                  className="mt-2 text-[#fff] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  홍길동 외 1명 (이순자)
                </Text>
                <Text
                  className="mt-2 ml-auto  text-[#fff] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  입력값: 홍길동
                </Text>
              </Pressable>

              {/* <Pressable className="px-2 flex justify-center w-full h-[150px] bg-[#1f232c] border-b border-[#a3a2a2]" onPress={() => handleOptionSelect('자동차 임대')}> */}
              <Pressable className="px-2 flex justify-center w-full h-[150px] bg-[#1f232c] border-b border-[#a3a2a2]">
                <Text
                  className="text-[#FFFF00] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  . 자동차 임대
                </Text>
                <Text
                  className="mt-2 text-[#fff] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  소유자 이름 증명서: 롯데렌탈㈜
                </Text>
                <Text
                  className="mt-2 ml-auto  text-[#fff] text-[20px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  입력값: 롯데렌탈㈜
                </Text>
              </Pressable>
            </View>
          )}
        </View>

        <View className="mt-2 mb-5">
          <Text
            className="my-5 ml-2 text-[#fff] text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            차량 소유자
          </Text>

          <TextInput
            className="mx-2 p-[10px] mb-[15px] h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Bold' }}
            onChangeText={handleInputChange1}
            value={text1}
            placeholder="차량 소유자를 입력하세요."
            placeholderTextColor="#a3a2a2"
          />

          <Text
            className="my-5 ml-2 text-[#fff] text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            차량 번호
          </Text>

          <TextInput
            className="mx-2 p-[10px] mb-[25px] h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Bold' }}
            onChangeText={handleInputChange2}
            value={text2}
            placeholder="차량번호를 입력해주세요."
            placeholderTextColor="#a3a2a2"
          />

          <Pressable
            className="ml-auto mr-auto w-[200px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
            //title="Submit"
            onPress={handleButtonPress}
          >
            <Text
              className="text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              차량 조회
            </Text>
          </Pressable>
        </View>

        <View className="my-2 border-t-4 border-[#1f232c]">
          <View className="my-5 w-full h-[750px] bg-[#1f232c]">
            <Text
              className="mt-3 p-2 text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              '차량조회'를 완료하시면
            </Text>

            <Text
              className="px-2 text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              아래 수수료 입력란이 자동으로 채워집니다.
            </Text>

            <View className="mt-10 p-2 ">
              <Text
                className="mt-5 text-[#a3a2a2] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                차량 번호
              </Text>

              <Text
                className="mt-5 w-full h-[50px] border-b border-[#a3a2a2]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              ></Text>

              <Text
                className="mt-5 text-[#a3a2a2] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                자동차 모델/모델 이름
              </Text>

              <Text
                className="mt-5 w-full h-[50px] border-b border-[#a3a2a2]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              ></Text>

              <Text
                className="mt-5 text-[#a3a2a2] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                모델 연도
              </Text>

              <Text
                className="mt-5 w-full h-[50px] border-b border-[#a3a2a2]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              ></Text>

              <Text
                className="mt-5 text-[#a3a2a2] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                색상
              </Text>

              <Text
                className="mt-5 w-full h-[50px] border-b border-[#a3a2a2]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              ></Text>

              <Text
                className="mt-5 text-[#a3a2a2] text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                차량 등록 주소
              </Text>

              <Text
                className="mt-5 w-full h-[50px] border-b border-[#a3a2a2]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              ></Text>
            </View>
          </View>

          <Pressable
            className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
            onPress={() => router.push('/(tabs)/RegisterCarInformation/city')}
          >
            <Text
              className="text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              계속하다
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
