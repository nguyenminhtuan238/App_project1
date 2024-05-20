import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { CheckBox } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import userFireBase from '../../../commons/services/User.services';
import { CheckLogin } from '../../../commons/store/user';
import CarRegistrationFireBase from '../../../commons/services/CarRegistration.services';
import { GetCarRegistrationid } from '../../../commons/store/CarRegistration';
import { getHidden, HiddenRegisteredCar } from '../../../commons/store/hidden';
export default function RegisteredCar() {
  const hidden = useSelector((state: RootState) => state.hidden);
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [Search, setSearch] = useState(1);
  const [selectedIndex, setIndex] = useState(10);
  const [CarRegistration, setCarRegistration]: any = useState([]);
  useEffect(() => {
    const Check = async () => {
      try {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        if (GetUser != null) {
          const User: any = await userFireBase.getbyiduser(
            JSON.parse(GetUser)?.id
          );
          const CarRegistration =
            await CarRegistrationFireBase.getallCarRegistration(
              JSON.parse(GetUser)?.id
            );
          if (CarRegistration.success == false) {
            setCarRegistration([]);
          } else {
            setCarRegistration(CarRegistration.CarRegistrationid);
          }
          dispatch(CheckLogin(true));
          dispatch(getHidden());
        }
      } catch (error) {}
    };
    Check();
  }, [hidden.hidden]);
  useEffect(() => {
    const handeGetidCar = () => {
      if (selectedIndex) {
        dispatch(GetCarRegistrationid(selectedIndex));
      }
    };
    handeGetidCar();
  }, [selectedIndex]);
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
    <ScrollView className=" bg-[#000] h-screen">
      <View className="mt-5 p-3">
        {CarRegistration.length != 0 && (
          <View>
            {CarRegistration.map((item: any, index: number) => {
              return (
                <View
                  key={item.id}
                  className={`border ${selectedIndex === item.id ? 'border-amber-200' : 'border-gray-700'}  rounded-[10px]  mb-3 flex flex-row p-5 `}
                >
                  <View className="my-auto py-auto">
                    <CheckBox
                      checked={selectedIndex === item.id}
                      onPress={() => setIndex(item.id)}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="yellow"
                      uncheckedColor="white"
                      containerStyle={{ backgroundColor: 'black' }}
                      textStyle={{ color: '#f3bf4f', fontSize: 18 }}
                    />
                  </View>
                  <View className="mr-3">
                    <Text
                      className="text-[#fff] text-[20px]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      {item.vehiclenumber}
                    </Text>
                    <Text
                      className="text-[#a3a2a2] "
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      {item.Carcolor}| {item.Modelyear}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
        {hidden.setRegisteredCar ? (
          <Pressable
            className="border border-[#f0da5e] rounded-[30px]   p-4 flex flex-row justify-center items-center my-8"
            onPress={() => router.push('/RegisterCarInformation/')}
          >
            <Ionicons name="add-sharp" size={24} color={'#f0da5e'} />
            <Text
              className="text-[#f0da5e]  text-center "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              새 자동차 추가
            </Text>
          </Pressable>
        ) : (
          <Pressable
            className="bg-[#f0da5e] rounded-[30px] mt-[100px]  p-4 flex flex-row justify-center items-center "
            onPress={() => router.push('/FAQ/FAQ2')}
          >
            <Text
              className="text-[#fff]  text-center "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              구조하다
            </Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}
