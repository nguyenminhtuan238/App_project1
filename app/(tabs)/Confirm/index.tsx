import { TouchableHighlight, TextInput, Text, View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../commons/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { CheckBox } from '@rneui/themed';
import { useState } from 'react';
export default function Confirm() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [selectedIndex, setIndex] = useState(10);
  return (
    <View className="flex  h-screen	bg-[#000] z-20">
      <Image
        resizeMode="cover"
        source={require('../../../assets/images/logo.jpg')}
        className="w-[100px] h-[100px] ml-2"
      />
      <Text className="text-[#fff]  text-[15px] w-1/2  h-1/6">
        SSUlK에 오신 것을 환영합니다
      </Text>
      <View className="bg-[#000] pl-2">
        <View className="flex flex-row w-full">
          <CheckBox
            checked={selectedIndex === 0}
            onPress={() => setIndex(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="gray"
            uncheckedColor="gray"
            title="모든 이용약관에 동의합니다 (필수)"
            containerStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: '#f3bf4f', fontSize: 18 }}
          />
        </View>
        <View className="flex flex-row  justify-between  w-full">
          <CheckBox
            checked={selectedIndex === 1}
            onPress={() => setIndex(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="gray"
            uncheckedColor="gray"
            title="18세 이상인지 확인하세요(필수)"
            containerStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white', fontSize: 12 }}
          />
        </View>
        <View className="flex flex-row  justify-between  w-full">
          <CheckBox
            checked={selectedIndex === 2}
            onPress={() => setIndex(2)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="gray"
            uncheckedColor="gray"
            title="이용약관 동의(필수)"
            containerStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white', fontSize: 12 }}
          />
          <Link
            href="/(tabs)/DetailProduct/"
            className="text-[#d8ad35] Text-[12] m-2 py-2"
          >
            더보기
          </Link>
        </View>
        <View className="flex flex-row  justify-between  w-full">
          <CheckBox
            checked={selectedIndex === 3}
            onPress={() => setIndex(3)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="gray"
            uncheckedColor="gray"
            title="개인정보 수집 및 이용에 대한 동의(필수)"
            containerStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white', fontSize: 12 }}
          />
          <Link
            href="/(tabs)/DetailProduct/"
            className="text-[#d8ad35] Text-[12] m-2 py-2 mr-3"
          >
            더보기
          </Link>
        </View>
        <View className="flex flex-row  justify-between w-full">
          <CheckBox
            checked={selectedIndex === 4}
            onPress={() => setIndex(4)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="gray"
            uncheckedColor="gray"
            title="위치기반 서비스 이용 동의(필수)"
            containerStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white', fontSize: 12 }}
          />
          <Link
            href="/(tabs)/DetailProduct/"
            className="text-[#d8ad35] Text-[12] m-2 py-2"
          >
            더보기
          </Link>
        </View>
        <View className="flex flex-row  justify-between   w-full">
          <CheckBox
            checked={selectedIndex === 5}
            onPress={() => setIndex(5)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="gray"
            uncheckedColor="gray"
            title="마케팅 정보 수신 동의(선택)"
            containerStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white', fontSize: 12 }}
          />
          <Link
            href="/(tabs)/DetailProduct/"
            className="text-[#d8ad35] Text-[12] m-2 py-2"
          >
            더보기
          </Link>
        </View>
        <View className="flex justify-center items-center px-2">
          <TouchableHighlight className=" mt-3 flex justify-center items-center py-3 w-full  border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[#dadadacc] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <View className="text-white text-center  flex flex-row ">
              <Text className="ml-[20px]">계속하다</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
