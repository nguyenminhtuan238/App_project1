import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import LayoutScreen from '../../../components/user/Homelayout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import userFireBase from '../../../commons/services/User.services';
import pointFireBase from '../../../commons/services/point.services';
export default function Point() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [User, setUser]: any = useState();
  const [Status, setStatus]: any = useState([]);
  useEffect(() => {
    const Check = async () => {
      try {
        if ((await AsyncStorage.getItem(envUser)) != null) {
          const GetUser: any = await AsyncStorage.getItem(envUser);
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          const status: any = await pointFireBase.getbyidpoint(
            JSON.parse(GetUser)?.id
          );
          setUser(User);
          if (status.success == false) {
            setStatus([]);
          } else {
            setStatus(status.Pointid);
          }
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
    <>
      {user.checklogin ? (
        <LayoutScreen>
          <View className="bg-[#000] h-screen">
            {/* <ImageBackground
        source={require('../../../assets/images/backgroundhome.jpg')}
        resizeMode="stretch"
        className="h-[250] w-[375] flex justify-center items-center p-8   "
      > */}
            <View className="h-[250] w-[375] flex justify-center items-center p-8  bg-[#000] ">
              <View className="	flex justify-center items-center mb-3">
                <Text
                  className="text-[13px] text-[#dfdddd]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  보유 포인트
                </Text>

                <Text
                  className=" text-xl font-bold text-amber-300"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  {User?.Point}P
                </Text>

                <Text
                  className="text-[13px] text-[#41e966]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  + 적립 예정 : {User?.accumulation}P
                </Text>

                <View className="   mt-8">
                  <Pressable
                    className=" bg-[#e0c31d]   rounded-full  w-[200] h-[56px] flex justify-center items-center"
                    onPress={() => router.push('/WithDrawal/')}
                  >
                    <Text
                      className="text-black text-center text-[20px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      출금 신청
                    </Text>
                  </Pressable>
                </View>
              </View>

              {/* </ImageBackground> */}
            </View>
            <View className="h-[2] bg-[#494949] flex flex-row justify-between mb-7"></View>
            <View className=" w-[335px] h-[48px] mx-auto  flex-row justify-center items-center rounded-full bg-[#1f242a]">
              <Pressable
                onPress={() => setSearch(1)}
                className="w-[111px] h-[48px] mr-auto flex justify-center items-center rounded-full bg-[#424850]"
              >
                <Text
                  className="text-[#FFFFFF] text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  전체
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setSearch(1)}
                className="w-[111px] h-[48px] mx-auto flex justify-center items-center rounded-full bg-[#1f242a]"
              >
                <Text
                  className="text-[#5F6265] text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  적립
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setSearch(1)}
                className="w-[111px] h-[48px] ml-auto flex justify-center items-center rounded-full bg-[#1f242a]"
              >
                <Text
                  className="text-[#5F6265] text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  출금
                </Text>
              </Pressable>
            </View>

            <View className="p-5">
              {Status.length != 0 && (
                <ScrollView>
                  {Status.map((item: any, index: number) => {
                    return (
                      <View
                        className="border-b border-[#494949] p-3 flex"
                        key={index}
                      >
                        <Text
                          className="text-white my-3 text-[20px] "
                          style={{ fontFamily: 'Pretendard-Bold' }}
                        >
                          {item.exchange === 'add'
                            ? '+'
                            : item.exchange === 'minus'
                              ? '-'
                              : ''}
                          {item.Point}P
                        </Text>
                        <View className="flex flex-row ">
                          <Text
                            className={` ${item.exchange === 'add' ? 'text-[#41e966]' : item.exchange === 'minus' ? 'text-[#f85353]' : 'text-[#e9c837]'}  text-[10px]`}
                            style={{ fontFamily: 'Pretendard-Bold' }}
                          >
                            {item.StatusPoint}
                          </Text>
                          <Text
                            className="mx-1 text-[#575757]   text-[10px]"
                            style={{ fontFamily: 'Pretendard-Bold' }}
                          >
                            |
                          </Text>
                          <Text
                            className="text-[#575757]  text-[10px] "
                            style={{ fontFamily: 'Pretendard-Bold' }}
                          >
                            {new Date(item.Createdate.toDate()).getFullYear()}.
                            {new Date(item.Createdate.toDate()).getMonth() + 1}.
                            {new Date(item.Createdate.toDate()).getDay()}{' '}
                            {new Date(item.Createdate.toDate()).getHours()}.
                            {new Date(item.Createdate.toDate()).getMinutes()}.
                            {new Date(item.Createdate.toDate()).getSeconds()}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              )}
            </View>
          </View>
        </LayoutScreen>
      ) : (
        <LayoutScreen>
          <View className="bg-[#000] h-screen">
            {/* <ImageBackground
      source={require('../../../assets/images/backgroundhome.jpg')}
      resizeMode="stretch"
      className="h-[250] w-[375] flex justify-center items-center p-8   "
    > */}
            <View className="h-[250] w-[375] flex justify-center items-center p-8  bg-[#000] ">
              <View className="	flex justify-center items-center mb-3">
                <Text
                  className="text-[13px] text-[#dfdddd]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  보유 포인트
                </Text>

                <Text
                  className=" text-xl font-bold text-amber-300"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  0P
                </Text>

                <Text
                  className="text-[13px] text-[#41e966]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  + 적립 예정 : 0P
                </Text>

                <View className="   mt-8 ">
                  <Pressable
                    className=" bg-[#e0c31d]   rounded-full  w-[200] h-[56px] flex justify-center items-center"
                    onPress={() => router.push('/WithDrawal/')}
                  >
                    <Text
                      className="text-black text-center text-[20px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      출금 신청
                    </Text>
                  </Pressable>
                </View>
              </View>

              {/* </ImageBackground> */}
            </View>
            <View className="h-[2] bg-[#494949] flex flex-row justify-between mb-5"></View>
            <View className=" w-[335px] h-[48px] mx-auto my-[30px] flex-row justify-center items-center rounded-full bg-[#1f242a]">
              <Pressable
                onPress={() => setSearch(1)}
                className="w-[111px] h-[48px] mr-auto flex justify-center items-center rounded-full bg-[#424850]"
              >
                <Text
                  className="text-[#FFFFFF] text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  전체
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setSearch(1)}
                className="w-[111px] h-[48px] mx-auto flex justify-center items-center rounded-full bg-[#1f242a]"
              >
                <Text
                  className="text-[#5F6265] text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  적립
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setSearch(1)}
                className="w-[111px] h-[48px] ml-auto flex justify-center items-center rounded-full bg-[#1f242a]"
              >
                <Text
                  className="text-[#5F6265] text-[16px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  출금
                </Text>
              </Pressable>
            </View>

            <View className="p-5"></View>
          </View>
        </LayoutScreen>
      )}
    </>
  );
}
