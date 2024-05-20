import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';
export default function Notification() {
  const user = useSelector((state: RootState) => state.user);
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
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View className="bg-[#000] h-screen">
      <View className="h-[2] bg-[#494949] flex flex-row justify-between "></View>
      <View className="p-5">
        <ScrollView>
          <View className="border-b border-[#494949]  flex">
            <View className="flex p-2">
              <Text
                className="text-[#fff]  text-[18px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <AntDesign name="camera" size={24} color="yellow" />{' '}
                확인하십시오.
              </Text>
              <Text
                className="text-[#fff]  text-[15px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                우리는이 사진이 확인하기에 적합하지 않다고 판단했으며 사진을
                요청합니다.
              </Text>
              <Text
                className="text-[#575757]   "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                1 시간 전
              </Text>
            </View>
          </View>
          <View className="border-b border-[#494949] flex">
            <View className="flex p-2">
              <Text
                className="text-[#fff]  text-[18px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons name="logo-usd" size={24} color="yellow" />
                점수의 축적이 완료되었습니다.
              </Text>
              <Text
                className="text-[#fff]  text-[15px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                20,000POINT 축적
              </Text>
              <Text
                className="text-[#575757]   "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                1 일 전
              </Text>
            </View>
          </View>
          <View className="border-b border-[#494949]  flex">
            <View className="flex p-2">
              <Text
                className="text-[#fff]  text-[18px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <AntDesign name="camera" size={24} color="yellow" /> 첨부 된
                사진 스티커를 확인하십시오.
              </Text>
              <Text
                className="text-[#fff]  text-[15px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                지정되고 결정된 스티커를 첨부하십시오
              </Text>
              <Text
                className="text-[#575757]   "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                2 일 전
              </Text>
            </View>
          </View>
          <View className="border-b border-[#494949]  flex">
            <View className="flex p-2">
              <Text
                className="text-[#fff]  text-[18px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons name="logo-usd" size={24} color="yellow" />
                요청 인출이 완료되었습니다
              </Text>
              <Text
                className="text-[#fff]  text-[15px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                처리 프로세스에는 철회가 필요합니다. 약 1-2 일이 소요됩니다
              </Text>
              <Text
                className="text-[#575757]   "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                3 일 전
              </Text>
            </View>
          </View>
          <View className="border-b border-[#494949] p-2 flex">
            <Text
              className="text-[#fff]  text-[18px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              <Ionicons name="logo-usd" size={24} color="yellow" />
              철수가 완료되었습니다
            </Text>
            <Text
              className="text-[#fff]  text-[15px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              마침내 30,000 원을 철수했습니다
            </Text>

            <Text
              className="text-[#575757]   "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              5 일전
            </Text>
          </View>
          <View className="border-b border-[#494949] p-2 flex">
            <View className="flex p-2">
              <Text
                className="text-[#fff]  text-[18px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Foundation name="home" size={24} color="yellow" /> 새로운
                스폰서가 등록되었습니다
              </Text>
              <Text
                className="text-[#fff]  text-[15px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                스폰서로 가입하고 포인트를 얻으십시오.
              </Text>

              <Text
                className="text-[#575757]   "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                5 일전
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
