import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import userFireBase from '../../../commons/services/User.services';
import pointFireBase from '../../../commons/services/point.services';
export default function Application() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [Status, setStatus]: any = useState([]);
  useEffect(() => {
    const Check = async () => {
      try {
        if ((await AsyncStorage.getItem(envUser)) != null) {
          const GetUser: any = await AsyncStorage.getItem(envUser);
          const status: any = await pointFireBase.getbyidpoint(
            JSON.parse(GetUser)?.id
          );
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
  useEffect(() => {
    if (!fontsLoaded) {
      return undefined;
    }
  }, []);

  return (
    <ScrollView className=" bg-[#000]">
      <View className=" w-[300px] h-[48px] mx-auto  flex-row justify-center items-center rounded-full bg-[#1f242a]">
        <Pressable
          onPress={() => router.push('/(tabs)/WithDrawal/')}
          className=" bg-[#1f242a] w-[150px] h-[48px] mx-auto flex justify-center items-center rounded-full "
        >
          <Text
            className="text-[#5F6265] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            출금 신청
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSearch(1)}
          className="w-[150px] h-[48px] ml-auto flex justify-center items-center rounded-full  bg-[#606163]"
        >
          <Text
            className="text-[#fff] text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            신청 내역
          </Text>
        </Pressable>
      </View>
      <View>
        {Status.length != 0 && (
          <View>
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
          </View>
        )}
      </View>
    </ScrollView>
  );
}
