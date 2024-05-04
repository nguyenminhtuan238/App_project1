import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import LayoutScreen from '../../../components/user/Homelayout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { Entypo } from '@expo/vector-icons';
export default function Rules() {
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
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <LayoutScreen>
      <View className="bg-[#fff] h-screen">
        <Text
          className=" text-[#000] text-[15px] mt-2 "
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          Keam 서비스 사용 조건
        </Text>
        <View className="pt-8">
          <ScrollView>
            <View className="flex  ">
              <Text
                className="text-[#000]  text-[15px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                제1조{'(목적)'}
              </Text>

              <Text
                className="text-[#a0a0a0]   "
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                이 약관은 "회원" 개인 상호 간 또는 "제휴 사업자", "입점
                사업자"와 "회 원" 개인 간에 상품 등을 매매하는 것을 중개하고,
                "상품" 등에 관한 정보 를 상호 교환할 수 있도록 크림
                주식회사(이하 "회사"라 합니다)가 운영, 제공하는 KREAM
                서비스(이하 "서비스")에 대한 것으로 본 약관에서는 "서비스"의
                이용과 관련하여 "회사"와 "회원"과의 권리, 의무 및 책임사 항,
                기타 필요한 사항을 규정합니다.
              </Text>
            </View>
            <View className="flex  mt-8">
              <Text
                className="text-[#000]  text-[15px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                제2조 (용어의 정의)
              </Text>

              <Text
                className="text-[#a0a0a0]   "
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                이 약관에서 사용하는 용어의 정의는 다음 각 호와 같으며, 정의되지
                않 은 용어에 대한 해석은 관계 법령 및 지침, 본 이용약관,
                개인정보취급방 침, 상관례 등에 의합니다.
              </Text>
              <View className="mt-5">
                <View className="mb-2 flex flex-row">
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={'#929191'}
                    className=" "
                  />
                  <Text
                    className="text-[#a0a0a0]  mx-2"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    "서비스"는 PC 및 /또는 모바일 환경에서 회사가 제공하는 KRE
                    AM 서비스 및 관련 서비스를 나타냅니다.
                  </Text>
                </View>
                <View className="mb-2 flex flex-row">
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={'#929191'}
                    className=" "
                  />
                  <Text
                    className="text-[#a0a0a0]  mx-2"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    "회원"은 회사의 "서비스"에 액세스하는 "서비스"이며, 본 이용
                    약관에 따라 "회사"와 서비스 계약을 체결하고 "회사"가
                    "회사"가 제공 한 "서비스"를 사용하여 "회사"가 제공합니다.
                  </Text>
                </View>
                <View className="mb-2 flex flex-row">
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={'#929191'}
                    className=" "
                  />
                  <Text
                    className="text-[#a0a0a0]  mx-2"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    "구매자"또는 "구매자"는 "제품"구매자이거나이를 위해 서비스를
                    사용하는 회원을 말합니다.
                  </Text>
                </View>
                <View className="mb-2 flex flex-row">
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={'#929191'}
                    className=" "
                  />
                  <Text
                    className="text-[#a0a0a0]  mx-2"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    "판매자"또는 "판매원"은 "서비스"에 "제품"을 등록 및
                    판매하거나 제공 할 목적으로 서비스를 사용하는 회원입니다.
                  </Text>
                </View>
                <View className="mb-2 flex flex-row">
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={'#929191'}
                    className=" "
                  />
                  <Text
                    className="text-[#a0a0a0]  mx-2"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    "입찰"은 "제품"구매 가격을 구매하기위한 "제품"또는 "제품"을
                    판매하기로 원하는 "제품"의 가격을 제공하는 행위입니다.
                  </Text>
                </View>
                <View className="mb-2 flex flex-row">
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={'#929191'}
                    className=" "
                  />
                  <Text
                    className="text-[#a0a0a0]  mx-2"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    "트랜잭션 서명"은 "입찰"을 통한 제품 거래의 설정입니다.
                  </Text>
                </View>
                <View className="mb-2 flex flex-row">
                  <Entypo
                    name="dot-single"
                    size={24}
                    color={'#929191'}
                    className=" "
                  />
                  <Text
                    className="text-[#a0a0a0]  mx-2"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    "게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "서비스"
                    상에 게시한 무자옥선, 옥향의 계보를 그린 영상 등의
                    논쟁적/반대적인 내용을 의미합니다.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </LayoutScreen>
  );
}
