import { ReactNode, useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, Switch } from 'react-native';
import { useFonts } from 'expo-font';
import LayoutScreen from '../../../components/user/Homelayout/layout';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import settingFireBase from '../../../commons/services/Setting.services';
import Loading from '../../../components/loading/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
export default function Establish() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const [notice, setnotice] = useState(false);
  const [sound, setsound] = useState(false);
  const [Vibration, setVibration] = useState(false);
  const [ReceiveEmails, setReceiveEmails] = useState(false);
  const [ReceiveSMS, setReceiveSMS] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [User, setUser]: any = useState(null);
  useEffect(() => {
    const CheckSetting = async () => {
      if ((await AsyncStorage.getItem(envUser)) != null) {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        setUser(JSON.parse(GetUser));
        try {
          const setting: any = await settingFireBase.getbyidsetting(
            JSON.parse(GetUser).id
          );
          if (setting.success == true) {
            setnotice(setting.notice);
            setsound(setting.sound);
            setVibration(setting.Vibration);
            setReceiveEmails(setting.ReceiveEmails);
            setReceiveSMS(setting.ReceiveSMS);
            setisloading(true);
          } else {
            await settingFireBase.Addsetting(
              { notice, sound, Vibration, ReceiveEmails, ReceiveSMS },
              JSON.parse(GetUser).id
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    CheckSetting();
  }, []);
  const Getsetting = async () => {
    try {
      const setting: any = await settingFireBase.getbyidsetting(User?.id);
      setnotice(setting.notice);
      setsound(setting.sound);
      setVibration(setting.Vibration);
      setReceiveEmails(setting.ReceiveEmails);
      setReceiveSMS(setting.ReceiveSMS);
      setisloading(true);
      return setting;
    } catch (error) {
      console.log(error);
    }
  };

  const updateSetting = async (data: object) => {
    try {
      await settingFireBase.updatesetting(data, User?.id);
      await Getsetting();
    } catch (error) {
      console.log(error);
    }
  };
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
      {isloading ? (
        <LayoutScreen>
          <View className="bg-[#000] h-screen">
            <View className="h-[2] bg-[#494949] flex flex-row justify-between "></View>
            <View className="p-5">
              <ScrollView>
                <View className="border-b border-[#494949] p-3 flex">
                  <View className="flex flex-row justify-between">
                    <Text
                      className="text-[#fff]  text-[18px] my-auto p-auto"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      애플리케이션 정보 설치
                    </Text>
                  </View>
                </View>
                <View className="border-b border-[#494949] p-3 flex">
                  <View className="flex flex-row justify-between">
                    <Text
                      className="text-[#fff]  text-[18px] my-auto p-auto"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      알림이 가득 참
                    </Text>

                    <View className="text-[#575757] ">
                      <Switch
                        trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                          setnotice(!notice),
                            updateSetting({ notice: !notice });
                        }}
                        value={notice}
                        className="scale-x-[1.5] scale-y-[1.5]"
                      />
                    </View>
                  </View>
                </View>
                <View className="border-b border-[#494949] p-3 flex">
                  <View className="flex flex-row justify-between">
                    <Text
                      className="text-[#fff]  text-[18px] my-auto p-auto"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      알림 소리
                    </Text>

                    <View className="text-[#575757] ">
                      <Switch
                        trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                          setsound(!sound), updateSetting({ sound: !sound });
                        }}
                        value={sound}
                        className="scale-x-[1.5] scale-y-[1.5]"
                      />
                    </View>
                  </View>
                </View>
                <View className="border-b border-[#494949] p-3 flex">
                  <View className="flex flex-row justify-between">
                    <Text
                      className="text-[#fff]  text-[18px] my-auto p-auto"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      진동 알림
                    </Text>

                    <View className="text-[#575757] ">
                      <Switch
                        trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                          setVibration(!Vibration),
                            updateSetting({ Vibration: !Vibration });
                        }}
                        value={Vibration}
                        className="scale-x-[1.5] scale-y-[1.5]"
                      />
                    </View>
                  </View>
                </View>
                <View className="border-b border-[#494949] p-3 flex">
                  <View className="flex p-2">
                    <Text
                      className="text-[#fff]  text-[18px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      마케팅 정보 수신에 동의합니다.
                    </Text>

                    <Text
                      className="text-[#f0da5e]  text-[15px] "
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      이벤트와 혜택에 대한 정보를 받아보실 수 있습니다.
                    </Text>
                  </View>
                </View>
                <View className="border-b border-[#494949] p-3 flex">
                  <View className="flex flex-row justify-between">
                    <Text
                      className="text-[#fff]  text-[18px] my-auto p-auto"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      이메일 수신에 동의
                    </Text>

                    <View className="text-[#575757] ">
                      <Switch
                        trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                          setReceiveEmails(!ReceiveEmails),
                            updateSetting({ ReceiveEmails: !ReceiveEmails });
                        }}
                        value={ReceiveEmails}
                        className="scale-x-[1.5] scale-y-[1.5]"
                      />
                    </View>
                  </View>
                </View>
                <View className="border-b border-[#494949] p-3 flex">
                  <View className="flex flex-row justify-between">
                    <Text
                      className="text-[#fff]  text-[18px] my-auto p-auto"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      SMS 수신에 동의
                    </Text>

                    <View className="text-[#575757] ">
                      <Switch
                        trackColor={{ false: '#f0efbd', true: '#f0da5e' }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                          setReceiveSMS(!ReceiveSMS),
                            updateSetting({ ReceiveSMS: !ReceiveSMS });
                        }}
                        value={ReceiveSMS}
                        className="scale-x-[1.5] scale-y-[1.5]"
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </LayoutScreen>
      ) : (
        <Loading />
      )}
    </>
  );
}
