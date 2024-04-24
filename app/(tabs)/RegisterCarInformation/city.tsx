import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
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

  if (!fontsLoaded) {
    return null; // or other temporary content
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
        onPress={() =>
          handleCitySelection(selectedCity === item.name ? '' : item.name)
        }
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 10,
          marginBottom: 30, // Add marginBottom to create space between items
          width: 120,
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 40,
            backgroundColor:
              selectedCity === item.name ? 'black' : 'transparent',
            marginRight: 5,
            borderWidth: 2,
            borderColor: selectedCity === item.name ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
          }}
        >
          {selectedCity === item.name && (
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
          className="text-[20px] ml-1 mr-5"
          style={{
            fontFamily: 'Pretendard-Bold',
            fontWeight: selectedCity === item.name ? 'bold' : 'normal',
            color: selectedCity === item.name ? 'white' : '#a3a2a2',
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="bg-[#000] h-full">
      <View className="top-0 left-0 z-10 border-yellow-500 border-t-4 w-2/3" />
      <View className="py-5 flex border rounded-[15px]">
        <View className="flex flex-row">
          <Text
            className="px-5 pb-2 mr-auto text-[#fff] text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            주로 운전하는 도/시를
          </Text>
        </View>
        <View className="flex flex-row">
          <Text
            className="px-5 pb-2 mr-auto text-[#fff] text-[20px] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            선택해주세요.
          </Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Display three items per row
        contentContainerStyle={{ paddingVertical: 10 }} // Add vertical padding
        className="ml-auto"
      />

      <View className="my-2 border-t-4 border-[#1f232c]">
        <Pressable 
          className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
          onPress={() => router.push('/(tabs)/RegisterCarInformation/district')}
        >
          <Text
            className="text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            계속하다
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
