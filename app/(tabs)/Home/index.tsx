import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';

import { useFonts } from 'expo-font';

import LayoutScreen from '../../../components/user/Homelayout/layout';
import { CheckLogin, Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import AccessConfirm from '../../../components/dialog/AccessConfirm';
import AllowAccess from '../../../components/dialog/AllowAccess';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import certificationFireBase from '../../../commons/services/Certification.services';
export default function Home() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [GetCertification, SetCertification]: any = useState(null);
  useEffect(() => {
    const Check = async () => {
      try {
        if ((await AsyncStorage.getItem(envUser)) != null) {
          const GetUser: any = await AsyncStorage.getItem(envUser);
          const certification: any =
            await certificationFireBase.getbyidcertification(
              JSON.parse(GetUser).id
            );
          if (certification.success == false) {
            const data = {
              image: '',
              image2: '',
              image3: '',
              check: false,
              confirm: false,
            };
            await certificationFireBase.Addcertification(
              data,
              JSON.parse(GetUser).id
            );
            SetCertification(certification);
          }
          SetCertification(certification);
          dispatch(CheckLogin(true));
        }
      } catch (error) {
        console.log(error);
      }
    };
    Check();
  }, [user.checklogin]);

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
      <ImageBackground
        source={require('../../../assets/images/backgroundhome.jpg')}
        resizeMode="stretch"
        className=" w-[375px] h-[260px] flex justify-center p-8 mx-auto"
      >
        <View className="flex flex-row justify-between mt-8 ">
          <View>
            <Text
              className="text-[#FFFFFF] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              나의 스폰서를{' '}
            </Text>
            <Text
              className="mb-4 text-[#FFFFFF] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              
              찾아주세요
            </Text>
            <Text
              className="text-[14px] text-[#FFFFFF]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              브랜드를 선택하고
            </Text>
            <Text
              className="mb-4 text-[14px] text-[#FFFFFF]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              다양한 혜택을 만나보세요.
            </Text>
            <Link
              className="mb-2 text-[16px] text-yellow-500"
              href="/(tabs)/ListProduct/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              스폰서 찾아보기
              <AntDesign name="right" size={16} color="#c5c04b" />
            </Link>
            {/* <Link
              className="mb-2 text-[18px] text-yellow-500"
              //href="/(tabs)/RegisterCarInformation/"
              href="/Map/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              신청서 작성{'>'}
            </Link>
            <Link
              className="mb-2 text-[18px] text-yellow-500"
              //href="/(tabs)/RegisterCarInformation/"
              href="/Admin/Home/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              차량정보 등록{'>'}
            </Link> */}
          </View>
          <View>
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[113.73px] w-[101.74px] mt-[30px] ml-[70px]"
            />
          </View>
        </View>
        <View className=" flex flex-row  justify-between ">
          <Text
            className="text-white"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            01
          </Text>
          <Text
            className="text-white opacity-[0.5]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            05
          </Text>
        </View>
        <View className=" flex flex-row justify-between ">
          <Text
            className="border-b-2 border-gray-500 w-[25%]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          ></Text>
          <Text
            className="border-b-2 border-gray-300 w-[75%]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          ></Text>
        </View>
      </ImageBackground>
      {!user.checklogin && (
        <View className="h-[44px] bg-[#494949] flex flex-row justify-between 	p-2">
          <Text
            className="text-amber-200 text-[16px] ml-3"
            style={{ fontFamily: 'Pretendard-Medium' }}
          >
            차량정보를 등록해주세요
          </Text>
          <Link
            href="/register/"
            className="text-[#fff] text-[16px] mr-3"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            등록하러 가다
            <AntDesign name="right" size={13} color="white" />
          </Link>
        </View>
      )}
      <View className=" bg-black">
        <View className="p-5">
          <Image
            source={require('../../../assets/images/pagation.jpg')}
            className="w-[150] h-[5] mt-5"
            resizeMode="stretch"
          />
          <Text
            className="text-[#FFFFFF] my-3 text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            홍길동님이 진행 중인 광고
          </Text>
          {user.checklogin ? (
            <ImageBackground
              source={require('../../../assets/images/loginsuccess.jpg')}
              resizeMode="stretch"
              className="border border-white rounded-[10px] p-3 flex opacity-60"
            >
              {GetCertification?.check ? (
                <View className="flex  justify-center p-3 gap-2 items-center">
                  <Link
                    href="/Certification/"
                    className="mb-2 text-xl text-amber-400 text-[20px]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    정확성....
                  </Link>

                  <Text
                    className="text-white  text-[14px]"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    사진 인증을 검토 중입니다
                  </Text>
                </View>
              ) : (
                <View className="flex  justify-center p-3 gap-2 items-center">
                  <Link
                    href="/Certification/"
                    className="mb-2 text-xl text-yellow-300 text-[20px]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    스폰서 확인 및 시작하기
                  </Link>

                  <Text
                    className="text-gray-400  text-[15px]"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    차량에 부착된 불법 스티커를 확인해 주세요.
                  </Text>
                </View>
              )}
            </ImageBackground>
          ) : (
            <View className="border border-white rounded-[10px] p-3 flex">
              <Text
                className="text-white text-[20px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                서포터 한명 더!
              </Text>
              <Text
                className="text-white  text-[14px]"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                서포터를 추가하고 다양한 혜택을 누려보세요
              </Text>
              <View className="flex flex-row justify-between gap-2 items-center">
                <Link
                  href="/register/"
                  className="mb-5 text-[16px] text-yellow-300 mt-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  더 많은 지지자{'>'}
                </Link>
                <Image
                  source={require('../../../assets/images/file.png')}
                  className="h-[100] w-[100]  "
                />
              </View>
            </View>
          )}
        </View>
      </View>
      <View className=" bg-black mb-10">
        <View className="p-7">
          <Image
            source={require('../../../assets/images/pagation.jpg')}
            className="w-[150] h-[5]"
            resizeMode="stretch"
          />
          <Text
            className="text-[#FFFFFF] my-3 text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            홍길동님을 위한 추천광고
          </Text>
          <ScrollView horizontal>
            <View className="border border-white bg-white rounded-[12px] mr-[40px] w-[230] h-[279]">
              <Pressable
                className="w-[230px] h-[157px] flex justify-center items-center"
                onPress={() => router.push('/(tabs)/DetailProduct/')}
              >
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="w-[105px] h-[116.67px]"
                />
              </Pressable>
              <View className="w-[230px] h-[38px] flex justify-center items-center bg-[#2E2E2E] ">
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중 
                  <Text 
                    className="text-yellow-300 " 
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    {' '} 26명
                  </Text>
                  이 서포트 중 입니다.
                </Text>
              </View>
              <View className="w-[230px] h-[50px] px-[12px] py-[10px] flex flex-row justify-between">
                <Text
                  className="text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  Bad Blue
                </Text>
                <View
                  className="w-[75px] h-[30px] px-[6px] py-[3px] bg-[#F3F3F3]"
                >
                  <Text
                    className="text-[12px] text-[#2E2E2E] mx-auto my-auto"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    대구광역시
                  </Text>
                </View>
              </View>
              <View className="w-[230px] h-[34px] px-[12px] pb-[10px] flex flex-row justify-between">
                <Text
                  className="text-[12px] text-[#000000]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  기간 : 30일
                </Text>
                <Text
                  className="text-amber-300 text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  25.000P
                </Text>
              </View>
            </View>
       
            <View className="border border-white bg-white rounded-[12px] mr-[40px] w-[230] h-[279]">
              <Pressable
                className="w-[230px] h-[157px] flex justify-center items-center"
                onPress={() => router.push('/(tabs)/DetailProduct/')}
              >
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="w-[105px] h-[116.67px]"
                />
              </Pressable>
              <View className="w-[230px] h-[38px] flex justify-center items-center bg-[#2E2E2E] ">
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중 
                  <Text 
                    className="text-yellow-300 " 
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    {' '} 26명
                  </Text>
                  이 서포트 중 입니다.
                </Text>
              </View>
              <View className="w-[230px] h-[50px] px-[12px] py-[10px] flex flex-row justify-between">
                <Text
                  className="text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  Bad Blue
                </Text>
                <View
                  className="w-[75px] h-[30px] px-[6px] py-[3px] bg-[#F3F3F3]"
                >
                  <Text
                    className="text-[12px] text-[#2E2E2E] mx-auto my-auto"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    대구광역시
                  </Text>
                </View>
              </View>
              <View className="w-[230px] h-[34px] px-[12px] pb-[10px] flex flex-row justify-between">
                <Text
                  className="text-[12px] text-[#000000]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  기간 : 30일
                </Text>
                <Text
                  className="text-amber-300 text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  25.000P
                </Text>
              </View>
            </View>

            <View className="border border-white bg-white rounded-[12px] mr-[40px] w-[230] h-[279]">
              <Pressable
                className="w-[230px] h-[157px] flex justify-center items-center"
                onPress={() => router.push('/(tabs)/DetailProduct/')}
              >
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="w-[105px] h-[116.67px]"
                />
              </Pressable>
              <View className="w-[230px] h-[38px] flex justify-center items-center bg-[#2E2E2E] ">
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중 
                  <Text 
                    className="text-yellow-300 " 
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    {' '} 26명
                  </Text>
                  이 서포트 중 입니다.
                </Text>
              </View>
              <View className="w-[230px] h-[50px] px-[12px] py-[10px] flex flex-row justify-between">
                <Text
                  className="text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  Bad Blue
                </Text>
                <View
                  className="w-[75px] h-[30px] px-[6px] py-[3px] bg-[#F3F3F3]"
                >
                  <Text
                    className="text-[12px] text-[#2E2E2E] mx-auto my-auto"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    대구광역시
                  </Text>
                </View>
              </View>
              <View className="w-[230px] h-[34px] px-[12px] pb-[10px] flex flex-row justify-between">
                <Text
                  className="text-[12px] text-[#000000]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  기간 : 30일
                </Text>
                <Text
                  className="text-amber-300 text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  25.000P
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <AccessConfirm />
      <AllowAccess />
    </LayoutScreen>
  );
}
