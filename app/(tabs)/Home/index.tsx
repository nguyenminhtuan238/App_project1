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
import userFireBase from '../../../commons/services/User.services';
export default function Home() {
  const user = useSelector((state: RootState) => state.user);
  const hidden = useSelector((state: RootState) => state.hidden);
  const dispatch: AppDispatch = useDispatch();
  const [GetCertification, SetCertification]: any = useState(null);
  const [GetUser, SetUser]: any = useState(null);
  useEffect(() => {
    const Check = async () => {
      try {
        if ((await AsyncStorage.getItem(envUser)) != null) {
          const GetUser: any = await AsyncStorage.getItem(envUser);
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          SetUser(User);
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
  }, [hidden.hidden]);

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
        source={require('../../../assets/images/backgroundhome.png')}
        resizeMode="stretch"
        className="h-[300] w-screen flex justify-center p-8 z-0 blu "
      >
        <View className="flex flex-row justify-between mt-8 z-50 ">
          <View>
            <Text
              className="text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              나의 스폰서를{' '}
            </Text>
            <Text
              className="mb-4 text-[#fff] text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              {' '}
              찾아주세요
            </Text>
            <Text
              className="text-[14px] text-gray-400"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              브랜드를 선택하고
            </Text>
            <Text
              className="mb-4 text-[14px] text-gray-400"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              {' '}
              다양한 혜택을 만나보세요.
            </Text>
            <Link
              className="mb-2 text-[18px] text-yellow-500"
              href="/(tabs)/ListProduct/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              스폰서 찾아보기
              <Ionicons
                name="chevron-forward-sharp"
                size={18}
                color="#EAB308"
                className="mt-1 ml-10"
              />
            </Link>
            {/* <Link
              className="mb-2 text-[18px] text-yellow-500"
              //href="/(tabs)/RegisterCarInformation/"
              href="/Map/"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              신청서 작성{'>'}
            </Link> */}
          </View>
          <View>
            <Image
              source={require('../../../assets/images/Bear.png')}
              className="h-[100] w-[100]"
            />
          </View>
        </View>
        <View className=" flex flex-row  justify-between mt-5">
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
        <View className=" flex flex-row  justify-between ">
          <Text
            className="border-b-2 border-gray-500 w-[25%]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          ></Text>
          <Text
            className="border-b-2 border-gray-200 w-[75%]"
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
            차량 정보를 등록해주세요
          </Text>
          <Link
            href="/register/"
            className="text-[#fff] text-[16px] mr-3"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            등록하러 가기
            <AntDesign name="right" size={13} color="white" />
          </Link>
        </View>
      )}
      <View className=" bg-black">
        <View className="p-5">
          <Image
            source={require('../../../assets/images/pagation.jpg')}
            className="w-[150] h-[5]"
            resizeMode="stretch"
          />
          <Text
            className="text-[#fff] my-3 text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            {user.checklogin ? GetUser?.Name : '홍길동'}님이 진행 중인 광고
          </Text>
          {user.checklogin ? (
            <ImageBackground
              source={require('../../../assets/images/loginsuccess.jpg')}
              resizeMode="stretch"
              className={`  flex ${GetCertification?.confirm ? 'border border-gray-600  rounded-[0px]' : 'opacity-60 p-3 border border-white rounded-[10px]'}`}
            >
              {GetCertification?.check ? (
                <>
                  {GetCertification?.confirm ? (
                    <View>
                      <View className="flex  justify-start   items-start ">
                        <Text
                          style={{ fontFamily: 'Pretendard-Bold' }}
                          className="border border-gray-300  flex  justify-start   items-start  rounded-tl-[7px] p-1 bg-gray-300 text-yellow-300"
                        >
                          D-024
                        </Text>
                      </View>
                      <Text className="p-[50px] "></Text>
                      <View className=" flex flex-row justify-end items-end mb-2">
                        <Text
                          className="text-gray-500"
                          style={{ fontFamily: 'Pretendard-Bold' }}
                        >
                          2023.01.05-03.12
                        </Text>
                        <Text
                          className="text-gray-500 mx-2"
                          style={{ fontFamily: 'Pretendard-Bold' }}
                        >
                          |
                        </Text>
                        <Text
                          className="text-white mr-2"
                          style={{ fontFamily: 'Pretendard-Bold' }}
                        >
                          {GetUser?.accumulation}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    <View className="flex  justify-center p-[50px] gap-2 items-center">
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
                  )}
                </>
              ) : (
                <View className="flex  justify-center p-[50px] gap-2  items-center">
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
                서포터를 추가해보세요!
              </Text>
              <Text
                className="text-gray-400  text-[14px]"
                style={{ fontFamily: 'Pretendard-Medium' }}
              >
                서포터를 추가하고 많은 혜택을 누려보세요.
              </Text>
              <View className="flex flex-row justify-between gap-2 items-center">
                <Link
                  href="/register/"
                  className="mb-5 text-[16px] text-yellow-300 mt-auto"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  서포터 추가하기
                  <Ionicons
                    name="chevron-forward-sharp"
                    size={18}
                    color="rgb(250, 240, 137)"
                    className="mt-10 ml-10"
                  />
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
            className="text-[#fff] my-3 text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            {user.checklogin ? GetUser?.Name : '홍길동'}님이 진행 중인 광고
          </Text>
          <ScrollView horizontal>
            <View className="border border-white bg-white rounded-[10px]   mx-3 w-[230] h-[279]">
              <Pressable
                className=" flex justify-center items-center p-3"
                onPress={() => router.push('/(tabs)/DetailProduct/')}
              >
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="h-[100] w-[100]"
                />
              </Pressable>
              <View className="flex justify-center items-center py-3  bg-black ">
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중{' '}
                  <Text
                    className="text-[#FBCE24] text-[12px]"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    26명
                  </Text>
                  이 서포트 중 입니다.
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text
                  className="text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  Bad Blue
                </Text>
                <Text
                  className="text-[12px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  대구광역시
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-[20] ">
                <Text
                  className="text-[12px] text-gray-400"
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
            <View className="border border-white bg-white rounded-[10px]   mx-3 w-[230] h-[279]">
              <Pressable
                className=" flex justify-center items-center p-3"
                onPress={() => router.push('/(tabs)/DetailProduct/')}
              >
                <Image
                  source={require('../../../assets/images/Bear.png')}
                  className="h-[100] w-[100]"
                />
              </Pressable>
              <View className="flex justify-center items-center py-3  bg-black ">
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: 'Pretendard-Medium' }}
                >
                  100명중{' '}
                  <Text
                    className="text-[#FBCE24] text-[12px]"
                    style={{ fontFamily: 'Pretendard-Medium' }}
                  >
                    26명
                  </Text>
                  이 서포트 중 입니다.
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-3 ">
                <Text
                  className="text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  Bad Blue
                </Text>
                <Text
                  className="text-[12px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  대구광역시
                </Text>
              </View>
              <View className="flex flex-row justify-between  px-1  my-[20] ">
                <Text
                  className="text-[12px] text-gray-400"
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
