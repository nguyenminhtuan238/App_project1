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
                  광고 신청 후에는 어떻게 하나요?
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
                    스티커 신청 후, 얼마 만에 등록을
                  </Text>
                  <Text
                    className="text-[#fff]  text-[15px]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    완료해야 하는지 궁금합니다.
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
                <Text
                  className="text-[#e7d745]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  출금 신청을 하시면, 통상 2~3일 내에 입금 처리 됩니다. 출금
                  신청을 하시고, 조금만 기다려주시면 감사드리겠습니다.
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
                  다른 광고로 교체하고 싶어요.
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
                  스티커 부착은 언제하나요?
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
                  출금 신청하면 언제 입금되나요?
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
                  회원탈퇴는 어떻게 하나요?
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
                1:1 문의하기
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
