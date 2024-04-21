import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
<<<<<<< HEAD
  TextInput,
  Button,
  Alert,
} from 'react-native';

import { useFonts } from 'expo-font';
=======
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { useFonts } from 'expo-font'
import * as Font from 'expo-font';
>>>>>>> ed9d2099a76b9a2c159cb0df616d7071bbd177c9

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
<<<<<<< HEAD
=======

>>>>>>> ed9d2099a76b9a2c159cb0df616d7071bbd177c9
export default function City() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
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
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

<<<<<<< HEAD
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

  // chuyyenr trang
  // const [currentPage, setCurrentPage] = useState(0);

  // const handleNextPage = () => {
  //   if (currentPage < 3) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

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
=======
  if (!fontsLoaded) {
    return null; // or other temporary content
>>>>>>> ed9d2099a76b9a2c159cb0df616d7071bbd177c9
  }

  // chọn city 
  const handleCitySelection = (city: string) => {
    setSelectedCity(city);
  };

  const data = [
    { id: '1', name: '서울' },
    { id: '2', name: '경기도' },
    { id: '3', name: '부산' },
    { id: '4', name: '대구광역시' },
    { id: '5', name: '이천광역시' },
    { id: '6', name: '대전' },
    { id: '7', name: '도시 울산' },
    { id: '8', name: '광주' },
    { id: '9', name: '강원도' },
    { id: '10', name: '충청북도' },
    { id: '11', name: '충처남도' },
    { id: '12', name: '전라북도' },
    { id: '13', name: '전라남도' },
    { id: '14', name: '경상북도' },
    { id: '15', name: '경상남도' },
    { id: '16', name: '세종특별자치도' },
    { id: '17', name: '제주특별자치도' },
    // Add more city options as needed
  ];
  
  const renderItem = ({ item }: { item: any }) => (
    <View>
      <TouchableOpacity
        onPress={() => handleCitySelection(selectedCity === item.name ? '' : item.name)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 10,
          marginBottom: 30,  // Add marginBottom to create space between items
          width: 120,
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 40,
            backgroundColor: selectedCity === item.name ? 'black' : 'transparent',
            marginRight: 5,
            borderWidth: 2,
            borderColor: selectedCity === item.name ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
          }}
        >
          {selectedCity === item.name && (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Pressable className="border-yellow-500 rounded-full w-[15px] h-[15px] bg-yellow-500"/>
            </View>
          )}
        </View>
        <Text 
        className='text-[20px] ml-1 mr-5'
          style={{ fontFamily: "Pretendard-Bold", fontWeight: selectedCity === item.name ? 'bold' : 'normal', color: selectedCity === item.name ? 'white' : '#a3a2a2' }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
<<<<<<< HEAD
    <ScrollView className=" bg-[#000]">
      <View className=" py-5 flex border rounded-[15px]">
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
          <View className="flex justify-center">
            <Text
              className="px-2 text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              공동 명의인 경우 차량 소유자의 예
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

        {/* {selectedOption && (
                <View  className="px-3 flex justify-center w-full h-[50px] bg-[#1f232c] border-1 border-[#a3a2a2]">
                    <Text 
                      className="text-[#FFFF00] text-[20px]"
                      style={{fontFamily: "Pretendard-Bold"}}
                    >
                        선택된: {selectedOption}
                    </Text>
                </View>
            )} */}
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
=======
    <View className="bg-[#000] h-full">
      <View className="top-0 left-0 z-10 border-yellow-500 border-t-4 w-2/3"/>
      <View className="py-5 flex border rounded-[15px]">
        <View className="flex flex-row">
          <Text
            className="px-5 pb-2 mr-auto text-[#fff] text-[20px]"
            style={{ fontFamily: "Pretendard-Bold" }}
>>>>>>> ed9d2099a76b9a2c159cb0df616d7071bbd177c9
          >
            주로 운전하는 도/시를
          </Text>
<<<<<<< HEAD
        </Pressable>
=======
        </View>
        <View className="flex flex-row">
          <Text
            className="px-5 pb-2 mr-auto text-[#fff] text-[20px] "
            style={{ fontFamily: "Pretendard-Bold" }}
          >
            선택해주세요.
          </Text>
        </View>
>>>>>>> ed9d2099a76b9a2c159cb0df616d7071bbd177c9
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}  // Display three items per row
        contentContainerStyle={{ paddingVertical: 10 }}  // Add vertical padding
        className='ml-auto'
      />

      <View className="my-2 border-t-4 border-[#1f232c]">
<<<<<<< HEAD
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

        <Pressable className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full">
          <Link
            className="text-[20px]"
            href="/(tabs)/RegisterCarInformation/district"
            style={{ fontFamily: 'Pretendard-Bold' }}
=======
        <Pressable
          className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
        >
          <Link
            className="text-[20px]"
            href="/(tabs)/RegisterCarInformation/district"
            style={{ fontFamily: "Pretendard-Bold" }}
>>>>>>> ed9d2099a76b9a2c159cb0df616d7071bbd177c9
          >
            계속하다
          </Link>
        </Pressable>
      </View>

<<<<<<< HEAD
        {/* <View className="mt-2 flex justify-center items-center">
          <View className="w-[200px] btn-white">
            <Button 
            title="Submit"
            onPress={handleButtonPress} 
            />
          </View>
        </View> */}

        {/* <View>
      <Text className="mt-5 text-[#a3a2a2] text-[20px]">Trang {currentPage}/3</Text>
      <TouchableOpacity onPress={handleNextPage}>
        <Text className="mt-5 text-[#a3a2a2] text-[20px]">Chuyển đến trang tiếp theo</Text>
      </TouchableOpacity>
          </View>*/}
      </View>
    </ScrollView>
=======
    </View>
>>>>>>> ed9d2099a76b9a2c159cb0df616d7071bbd177c9
  );
}