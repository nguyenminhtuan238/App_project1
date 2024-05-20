import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import * as Font from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import { CheckLogin } from '../../../commons/store/user';
import DeliveryAddressFireBase from '../../../commons/services/DeliveryAddress.service';
import { GetDeliveryAddressid } from '../../../commons/store/DeliveryAddress';
import { getHidden } from '../../../commons/store/hidden';
import userFireBase from '../../../commons/services/User.services';
export default function AddAddressDeliveryAddress() {
  const user = useSelector((state: RootState) => state.user);
  const hidden = useSelector((state: RootState) => state.hidden);

  const dispatch: AppDispatch = useDispatch();
  const [Deliveryaddress, setDeliveryaddress]: any = useState([]);
  const [selectedindex, setselectedindex] = useState('');
  useEffect(() => {
    const Check = async () => {
      try {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        if (GetUser != null) {
          const DeliveryAddress: any =
            await DeliveryAddressFireBase.getallCarDeliveryAddressn(
              JSON.parse(GetUser)?.id
            );
          if (DeliveryAddress.success == false) {
            setDeliveryaddress([]);
          } else {
            setDeliveryaddress(DeliveryAddress.DeliveryAddressid);
          }
          dispatch(CheckLogin(true));
          dispatch(getHidden());
        }
      } catch (error) {}
    };
    Check();
  }, [hidden.hidden]);

  const handleAddressSelection = (Index: string) => {
    setselectedindex(Index);
  };
  useEffect(() => {
    const handeGetidDeliveryAddressr = () => {
      if (selectedindex) {
        dispatch(GetDeliveryAddressid(selectedindex));
      }
    };
    handeGetidDeliveryAddressr();
  }, [selectedindex]);
  // đổi font chữ
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
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
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or other temporary content
  }
  const HandleUpdateDelivery = async () => {
    try {
      if (selectedindex != '') {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        const data = {
          ID_delivery_address: selectedindex,
          update_at: new Date(Date.now()),
        };
        await userFireBase.updateuser(data, JSON.parse(GetUser)?.id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView className="bg-black h-screen border-t-2 border-[#2c2c2c]">
      <View className="flex flex-col">
        <View className="mt-5 min-h-[350px]">
          <FlatList
            data={Deliveryaddress}
            renderItem={({ item }) => (
              <TouchableOpacity
                //className="my-2 ml-auto mr-auto flex flex-row items-center w-[350px] h-[150px] border-2 border-white rounded-2xl"
                onPress={() => handleAddressSelection(item.id)}
              >
                <View
                  className="my-2 ml-auto mr-auto flex flex-row items-center w-[350px] h-[150px] border-2 rounded-2xl"
                  style={{
                    borderColor: selectedindex === item.id ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
                  }}
                >
                  <View className="basis-1/5 flex items-center justify-center">
                    <View
                      className="w-[30px] h-[30px] border-2 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor:
                          selectedindex === item.id ? 'black' : 'transparent',
                        borderColor:
                          selectedindex === item.id ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
                      }}
                    >
                      {selectedindex === item.id && (
                        <Pressable className="border-white rounded-full w-[15px] h-[15px] bg-yellow-500" />
                      )}
                    </View>
                  </View>
                  <View className="basis-4/5">
                    <View className="flex flex-row">
                      <Text
                        className="my-1 text-[20px] text-[#fff]"
                        style={{ fontFamily: 'Pretendard-Bold' }}
                      >
                        {item.Receiver}
                      </Text>
                      <View
                        className="ml-auto mr-5 w-[100px] h-[35px] border-2 border-white flex items-center justify-center rounded-lg"
                        style={{
                          borderColor:
                            selectedindex === item.id ? 'yellow' : 'black',
                        }}
                      >
                        <Text
                          className="text-[12px] text-white"
                          style={{
                            fontFamily: 'Pretendard-Bold',
                            color:
                              selectedindex === item.id ? 'yellow' : 'black',
                          }}
                        >
                          기본배송지
                        </Text>
                      </View>
                    </View>
                    <Text
                      className="my-1 text-[12px] text-[#AAAAAA]"
                      style={{ fontFamily: 'Pretendard-Medium' }}
                    >
                      {item.Receiver} | {item.Phone}
                    </Text>
                    <Text
                      className="my-1 text-[14px] text-[#fff]"
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      {item.Deliveryaddress}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View className="mt-auto">
          <Pressable
            className="ml-auto mr-auto my-2 w-[350px] h-[70px] flex justify-center items-center border-2 border-yellow-500 rounded-[30px]"
            onPress={() => router.push('/(tabs)/DeliveryAddress/')}
          >
            <Text
              className="text-[16px] text-yellow-500"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              + 새 주소 추가하기
            </Text>
          </Pressable>

          <Pressable
            className="ml-auto mr-auto my-2 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500  rounded-[30px]"
            onPress={HandleUpdateDelivery}
          >
            <Text
              className="text-[16px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              저장하기
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
