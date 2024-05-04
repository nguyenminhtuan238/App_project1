import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import LayoutScreen from '../../../components/user/Homelayout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign } from '@expo/vector-icons';
export default function FAQ() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [Accordion, GetAccordion] = useState(false);
  enum SetAccordion {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
  }
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
    <LayoutScreen>
      <View className="bg-[#000] h-screen">
        <View className="h-[2] bg-[#494949] flex flex-row justify-between "></View>
        <View className="p-5">
          <ScrollView>
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/Collection/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  광고 등록 후 무엇을 해야 하나요?
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <AntDesign name="caretdown" size={15} color="yellow" />
                </Text>
              </View>
            </Pressable>

            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => GetAccordion(!Accordion)}
            >
              <View className="flex flex-row justify-between">
                <View className="flex">
                  <Text
                    className="text-[#fff]  text-[15px]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    붙여넣기 신청 후 등록이 완료되기까지
                  </Text>
                  <Text
                    className="text-[#fff]  text-[15px]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    얼마나 걸리는지 궁금합니다.
                  </Text>
                </View>
                <Text
                  className="text-[#575757]  "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  {Accordion ? (
                    <AntDesign name="caretup" size={15} color="yellow" />
                  ) : (
                    <AntDesign name="caretdown" size={15} color="yellow" />
                  )}
                </Text>
              </View>
            </Pressable>
            {Accordion && (
              <View className="bg-[#4d4c4c] p-3">
                <Text className="text-[#e7d745]"     style={{ fontFamily: 'Pretendard-Bold' }}>
                  출금을 요청하시면 2~3일 이내에 입금이 처리됩니다. 출금 등록을
                  하신 후 잠시 기다려 주시면 감사하겠습니다.
                </Text>
              </View>
            )}
            <Pressable className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  스티커는 언제 떼나요?
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <AntDesign name="caretdown" size={15} color="yellow" />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-3 flex"
              onPress={() => router.push('/Establish/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  다른 광고로 대체하고 싶어요
                </Text>

                <Text
                  className="text-[#575757]  "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <AntDesign name="caretdown" size={15} color="yellow" />
                </Text>
              </View>
            </Pressable>
            <Pressable className="border-b border-[#494949] p-3 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  스티커는 언제 붙이나요?
                </Text>

                <Text
                  className="text-[#575757]  "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <AntDesign name="caretdown" size={15} color="yellow" />
                </Text>
              </View>
            </Pressable>
            <Pressable className="border-b border-[#494949] p-4 flex">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]  text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  출금을 요청하면 입금은 언제 받을 수 있나요?
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <AntDesign name="caretdown" size={15} color="yellow" />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="border-b border-[#494949] p-4 flex"
              onPress={() => router.push('/PolicyTerms/')}
            >
              <View className="flex flex-row justify-between">
                <Text
                  className="text-[#fff]   text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  멤버십을 취소하려면 어떻게 해야 하나요?
                </Text>

                <Text
                  className="text-[#575757]   "
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  <AntDesign name="caretdown" size={15} color="yellow" />
                </Text>
              </View>
            </Pressable>
            <Pressable
              className="bg-[#f0da5e] rounded-[30px]  p-4 flex justify-center items-center my-8"
              onPress={() => router.push('/FAQ/FAQ2')}
            >
              <Text
                className="text-[#575757]  text-center "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                1:1문의하기
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
