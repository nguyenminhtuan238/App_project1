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
export default function District() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [selectedDistrict, setSelectedDistrict] = useState('');

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
  const handleDistrictSelection = (district: string) => {
    setSelectedDistrict(district);
  };

  const data = [
    { id: '1', name: '수원시' },
    { id: '2', name: '성남시' },
    { id: '3', name: '고양시' },
    { id: '4', name: '부천시' },
    { id: '5', name: '용인시' },
    { id: '6', name: '안산시' },
    { id: '7', name: '안즈엉 시' },
    { id: '8', name: '남양주시' },
    { id: '9', name: '의정부시' },
    { id: '10', name: '평택시' },
    { id: '11', name: '시흥시' },
    { id: '12', name: '화성시' },
    { id: '13', name: '광명시' },
    { id: '14', name: '파주시' },
    { id: '15', name: '군포시' },
    { id: '16', name: '광주시' },
    { id: '17', name: '김포시' },
    { id: '18', name: '이천시' },
    { id: '19', name: '구리시' },
    { id: '20', name: '양주시' },
    { id: '21', name: '안성시' },
    { id: '22', name: '포천시' },
    { id: '23', name: '오산시' },
    { id: '24', name: '하남시' },
    { id: '25', name: '의왕시' },
    { id: '26', name: '여주군' },
    { id: '27', name: '동두천군' },
    { id: '28', name: '양평군' },
    { id: '29', name: '과천시' },
    { id: '30', name: '가평군' },
    { id: '31', name: '연천군' },
    // Add more city options as needed
  ];

  const renderItem = ({ item }: { item: any }) => (
    <View>
      <TouchableOpacity
        onPress={() =>
          handleDistrictSelection(
            selectedDistrict === item.name ? '' : item.name
          )
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
              selectedDistrict === item.name ? 'black' : 'transparent',
            marginRight: 5,
            borderWidth: 2,
            borderColor: selectedDistrict === item.name ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
          }}
        >
          {selectedDistrict === item.name && (
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
            fontWeight: selectedDistrict === item.name ? 'bold' : 'normal',
            color: selectedDistrict === item.name ? 'white' : '#a3a2a2',
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="bg-[#000] h-full border-yellow-500 border-t-4 w-3/3">
      <View className=" py-5 flex border rounded-[15px]">
        <View className="flex flex-row ">
          <Text
            className="px-5 pb-2 mr-auto text-[#fff] text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            주로 운전하는 시/군을
          </Text>
        </View>

        <View className="flex flex-row">
          <Text
            className="px-5 pb-2 mr-auto text-[#fff] text-[20px] "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            선택하세요.
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
