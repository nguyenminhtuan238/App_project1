import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {useFonts} from 'expo-font'

import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
export default function AddAddressDeliveryAddress() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);

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
  })

  if(!fontsLoaded) {
    return undefined;
  }

  const data = [
    {
      key: '1',
      title: '본가',
      name: '송길동',
      phone: '010-1231-1592',
      address: '대구 달서구 호산동로 34길 21-4, 행복일 203 [42708]',
    },
    {
      key: '2',
      title: '회사',
      name: '박서준',
      phone: '010-1231-1592',
      address: '대구 달서구 호산동로 34길 21-4, 행복일 203 [42708]',
    },
  ];

  // Chọn địa chỉ
  // const [selectedTitle, setSelectedTitle] = useState('');
  // const [selectedName, setSelectedName] = useState('');
  // const [selectedPhone, setSelectedPhone] = useState('');
  // const [selectedAddress, setSelectedAddress] = useState('');

  // const handleAddressSelection = (title: string, name: string, phone: string, address: string) => {
  //   setSelectedTitle(title);
  //   setSelectedName(name);
  //   setSelectedPhone(phone);
  //   setSelectedAddress(address);
  // };

  return (
    <SafeAreaView className="bg-black h-screen border-t-2 border-[#2c2c2c]">
      <View className="flex flex-col">

        <View className="mt-5 min-h-[450px]">
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="my-2 ml-auto mr-auto flex flex-row items-center w-[350px] h-[150px] border-2 border-yellow-500 rounded-2xl"
                // onPress={() =>
                //   handleAddressSelection(
                //     selectedTitle === item.title ? '' : item.title,
                //     selectedName === item.name ? '' : item.name,
                //     selectedPhone === item.phone ? '' : item.phone,
                //     selectedAddress === item.address ? '' : item.address,
                //   )
                // }
              >
                <View className="basis-1/5">
                  {/* <View 
                    className="w-30 h-30 border-2"
                    style={{
                      backgroundColor:
                      selectedAddress === item.address ? 'black' : 'transparent',
                      marginRight: 5,
                      borderWidth: 2,
                      borderColor: selectedAddress === item.address ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
                    }}
                  >
                    {selectedAddress === item.address && (
                      <Pressable className="border-yellow-500 rounded-full w-[15px] h-[15px] bg-yellow-500" />
                    )}
                  </View> */}
                </View>
                <View className="basis-4/5">
                  <Text
                    className="my-1 text-[20px] text-[#fff]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    className="my-1 text-[15px] text-[#a3a2a2]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    {item.name} | {item.phone}
                  </Text>
                  <Text
                    className="my-1 text-[15px] text-[#fff]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    {item.address}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.key}
          />

        </View>

        <View className="mt-auto">
          <Pressable 
            className="ml-auto mr-auto my-2 w-[350px] h-[70px] flex justify-center items-center border-2 border-yellow-500 rounded-full"
            onPress={() => router.push('/(tabs)/DeliveryAddress/')}
          >
            <Text
              className="text-[20px] text-yellow-500"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              + 새 주소 추가하기
            </Text>
          </Pressable>

          <Pressable 
            className="ml-auto mr-auto my-2 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
            //onPress={() => router.push('/(tabs)/ApplyForSponsorship/detail')}
          >
            <Text
              className="text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              저장하기
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}
