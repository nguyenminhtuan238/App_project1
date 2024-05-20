import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userFireBase from '../../../commons/services/User.services';
import { envUser } from '../../../commons/themes/global';
import { CheckLogin } from '../../../commons/store/user';
import DeliveryAddressFireBase from '../../../commons/services/DeliveryAddress.service';
export default function DeliveryAddress() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [Postalcode, setPostalcode] = useState('');
  const [Address, setAddress] = useState('');
  const [Detailedaddress, setDetailedaddress] = useState('');
  const [Deliveryaddress, setDeliveryaddress] = useState('');
  const [Receiver, setReceiver] = useState('');
  const [Phone, setPhone] = useState('');
  // chọn district
  const [selectedAddress, setSelectedAddress] = useState('false');
  const handleAddressSelection = (address: string) => {
    if (selectedAddress === 'false') {
      setSelectedAddress(address);
    } else {
      setSelectedAddress(address);
    }
  };
  useEffect(() => {
    const Check = async () => {
      try {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        if (GetUser != null) {
          dispatch(CheckLogin(true));
        } else {
          router.push('/register/');
        }
      } catch (error) {}
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
  if (!fontsLoaded) {
    return undefined; // Hoặc trả về một phần tử loading
  }
  const HandleAddDeliverry = async () => {
    try {
      const GetUser: any = await AsyncStorage.getItem(envUser);
      const data = {
        Postalcode,
        Address,
        Deliveryaddress,
        Receiver,
        Phone,
        select: selectedAddress,
        ID_User: JSON.parse(GetUser)?.id,
      };
      await DeliveryAddressFireBase.AddCarDeliveryAddress(data);
      dispatch(CheckLogin(true));
      router.push('/DeliveryAddress/addAddress');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView className="bg-[#000] border-t-2 border-[#2c2c2c]">
      <View className="m-5">
        <Text
          className="text-[16px] text-[#fff]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          우편번호
        </Text>

        <TextInput
          className="p-2 h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
          style={{ fontFamily: 'Pretendard-Medium' }}
          onChangeText={setPostalcode}
          value={Postalcode}
          placeholder="10239"
          placeholderTextColor="#AAAAAA"
        />

        <Pressable
          className="mt-5 ml-auto w-[150px] h-[50px] flex justify-center items-center bg-yellow-500 rounded-full"
          //title="Submit"
          //onPress={handleButtonPress}
        >
          <Text
            className="text-[16px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            우편번호 찾기
          </Text>
        </Pressable>
      </View>

      <View className="mx-5">
        <View className="my-5">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            주소지
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Medium' }}
            onChangeText={setAddress}
            value={Address}
            placeholder="경기도 고양시 일산동구 마두1동"
            placeholderTextColor="#AAAAAA"
          />
        </View>

        <View className="my-5">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            상세주소
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#a3a2a2] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Medium' }}
            onChangeText={setDetailedaddress}
            value={Detailedaddress}
            placeholder="동아아파트 601동 1401호우편번호"
            placeholderTextColor="#AAAAAA"
          />
        </View>

        <View className="my-5">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            배송지명
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Medium' }}
            onChangeText={setDeliveryaddress}
            value={Deliveryaddress}
            placeholder="집"
            placeholderTextColor="#AAAAAA"
          />
        </View>

        <View className="my-5">
          <Text
            className="text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            수령인
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Medium' }}
            onChangeText={setReceiver}
            value={Receiver}
            placeholder="김포비"
            placeholderTextColor="#AAAAAA"
          />
        </View>

        <View className="my-5">
          <Text
            className="mb-2 text-[16px] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            휴대폰
          </Text>

          <TextInput
            className="p-2 h-[50px] text-[#fff] text-[20px] border-b border-[#a3a2a2]"
            style={{ fontFamily: 'Pretendard-Medium' }}
            onChangeText={setPhone}
            value={Phone}
            placeholder="010-1523-1699"
            placeholderTextColor="#AAAAAA"
          />
        </View>
      </View>

      <View className="m-5">
        <Pressable
          onPress={() =>
            handleAddressSelection(
              selectedAddress === 'false' ? 'true' : 'false'
            )
          }
        >
          <View className="ml-auto flex flex-row">
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 40,
                backgroundColor:
                  selectedAddress === 'false' ? 'black' : 'transparent',
                borderWidth: 2,
                borderColor: selectedAddress === 'true' ? 'yellow' : 'white', // Thêm thuộc tính borderColor với giá trị 'white' để đặt màu viền là màu trắng
              }}
            >
              {selectedAddress === 'true' && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Pressable className="border-yellow-500 rounded-full w-[15px] h-[15px] bg-yellow-500" />
                </View>
              )}
            </View>
            <Text
              className="mx-2 text-[16px] text-[#fff]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              기본 배송지로 설정
            </Text>
          </View>
        </Pressable>

        <Pressable
          className="ml-auto mr-auto my-5 w-[350px] h-[70px] flex justify-center items-center bg-yellow-500 rounded-full"
          onPress={HandleAddDeliverry}
        >
          <Text
            className="text-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            저장하기
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
