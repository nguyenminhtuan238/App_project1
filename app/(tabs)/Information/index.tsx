import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import LayoutScreen from '../../../components/user/Homelayout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import userFireBase from '../../../commons/services/User.services';
import { CheckLogin } from '../../../commons/store/user';
export default function Information() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState('male');
  const [User, setUser]: any = useState();
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birthday, setBirthday] = useState('');
  const [Address, setAddress] = useState('');
  const [activity, setactivity] = useState('');
  useEffect(() => {
    const Check = async () => {
      try {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        if (GetUser != null) {
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          setUser(User);
          if (User.Gender) {
            setSearch(User.Gender);
          }
          dispatch(CheckLogin(true));
        }
      } catch (error) {}
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
  const updateUser = async () => {
    try {
      if (Phone != '' && Birthday != '' && Address != '' && activity != '') {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        const data = {
          Name,
          Phone,
          Gender: Search,
          Birthday,
          Address,
          activity,
          update_at: new Date(Date.now()),
        };
        await userFireBase.updateuser(data, JSON.parse(GetUser)?.id);
        dispatch(CheckLogin(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user.checklogin && (
        <LayoutScreen>
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
                      이름
                    </Text>

                    {User?.Name ? (
                      <Text
                        className="text-[#575757]   "
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        {User?.Name}
                      </Text>
                    ) : (
                      <TextInput
                        placeholder="이름 입력"
                        onChangeText={setName}
                        value={Name}
                        className="text-[#575757]   "
                        placeholderTextColor="#575757"
                      />
                    )}
                  </View>
                </View>
                <View className="border-b border-[#494949] flex">
                  <View className="flex p-2">
                    <Text
                      className="text-[#fff]  text-[18px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      이메일
                    </Text>

                    {User?.Email && (
                      <Text
                        className="text-[#575757]   "
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        {User?.Email}
                      </Text>
                    )}
                  </View>
                </View>
                <View className="border-b border-[#494949]  flex">
                  <View className="flex p-2">
                    <Text
                      className="text-[#fff]  text-[18px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      전화 번호
                    </Text>

                    {User?.Phone ? (
                      <Text
                        className="text-[#575757]   "
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        {User?.Phone}
                      </Text>
                    ) : (
                      <TextInput
                        placeholder="전화번호를 입력해 주세요"
                        onChangeText={setPhone}
                        value={Phone}
                        className="text-[#575757]   "
                        placeholderTextColor="#575757"
                      />
                    )}
                  </View>
                </View>
                <View className="border-b border-[#494949]  flex">
                  <View className="flex p-2">
                    <Text
                      className="text-[#fff]  text-[18px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      생일
                    </Text>

                    {User?.Birthday ? (
                      <Text
                        className="text-[#575757]   "
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        {User?.Birthday}
                      </Text>
                    ) : (
                      <TextInput
                        placeholder="생일을 입력해 주세요"
                        onChangeText={setBirthday}
                        value={Birthday}
                        className="text-[#575757]   "
                        placeholderTextColor="#575757"
                      />
                    )}
                  </View>
                </View>
                <View className="border-b border-[#494949] p-2 flex">
                  <Text
                    className="text-[#fff]  text-[18px] mb-3"
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    섹스
                  </Text>
                  <View className="flex flex-row ">
                    <Pressable
                      className={`${Search === 'male' ? 'bg-[#e0c31d]' : 'border border-[#9e9d9d]'} rounded-[5px] mx-1 p-1`}
                      onPress={() => setSearch('male')}
                    >
                      <Text
                        className={`${Search === 'male' ? 'text-[#000]' : 'text-[#575757]'}   text-[18px]`}
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        남성
                      </Text>
                    </Pressable>
                    <Pressable
                      className={`${Search === 'female' ? 'bg-[#e0c31d]' : 'border border-[#9e9d9d]'} rounded-[5px] mx-1 p-1`}
                      onPress={() => setSearch('female')}
                    >
                      <Text
                        className={`${Search === 'female' ? 'text-[#000]' : 'text-[#575757]'}   text-[18px]`}
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        여성
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <View className="border-b border-[#494949] p-2 flex">
                  <View className="flex p-2">
                    <Text
                      className="text-[#fff]  text-[18px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      주소
                    </Text>

                    {User?.Address ? (
                      <Text
                        className="text-[#575757]   "
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        {User?.Address}
                      </Text>
                    ) : (
                      <TextInput
                        placeholder="주소를 입력하세요."
                        onChangeText={setAddress}
                        value={Address}
                        className="text-[#575757]   "
                        placeholderTextColor="#575757"
                      />
                    )}
                  </View>
                </View>
                <View className="p-2 flex">
                  <View className="flex p-2">
                    <Text
                      className="text-[#fff]  text-[18px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      주요 활동 영역
                    </Text>

                    {User?.activity ? (
                      <Text
                        className="text-[#575757]   "
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        {User?.activity}
                      </Text>
                    ) : (
                      <TextInput
                        placeholder="주요 활동 분야를 입력하세요."
                        onChangeText={setactivity}
                        value={activity}
                        className="text-[#575757]   "
                        placeholderTextColor="#575757"
                      />
                    )}
                  </View>
                </View>
                <Pressable
                  className="bg-[#f0da5e] rounded-[30px] mt-5  p-4 flex justify-center items-center"
                  onPress={() => updateUser()}
                >
                  <Text
                    className="text-[#575757]  text-center "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    구조하다
                  </Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>
        </LayoutScreen>
      )}
    </>
  );
}
