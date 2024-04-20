import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';

import {useFonts} from 'expo-font'

import { Dialog } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { toggleDialog1 } from '../../../commons/store/dialog';
export default function Certification() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const [image, setImage] = useState(null);
  const tDialog = () => {
    dispatch(toggleDialog1());
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      return;
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
  })

  if(!fontsLoaded) {
    return undefined;
  }
  
  return (
    <View className=" bg-[#000] h-full">
      <Text className="text-white text-[20px] my-1 mx-5">후원자 정보</Text>
      <View className=" mb-2 flex flex-row ">
        <View className="basic-1/5  rounded-[10px] p-3 mx-5 bg-[#fff] flex flex-row justify-center">
          <Image
            source={require('../../../assets/images/Bear.png')}
            className="h-[100] w-[100] "
            resizeMode="stretch"
          />
        </View>
        <View className="basic-2/3    ml-2  flex">
          <Text className="text-white">Bad Blue</Text>
          <View className="flex flex-row  justify-between mt-5">
            <Text className="text-[#a1a0a0] ">저장 단계</Text>
            <Text className="text-[#a1a0a0] mx-3">30 일</Text>
          </View>
          <View className="flex flex-row  justify-between">
            <Text className="text-[#a1a0a0] ">포인트 혜택</Text>
            <Text className="text-[#a1a0a0] mx-3">25,000포인트</Text>
          </View>
        </View>
      </View>
      <View className="h-[20] bg-[#494949] flex flex-row justify-between 	"></View>

      <View className=" bg-[#000] flex justify-center   p-5	">
        <Text className="text-white text-[16px] ml-3">인증샷을 찍어주세요</Text>
        <Text className="text-white text-[13px] ml-3 mt-1">
          각 버튼을 터치하여 사진을 찍으세요.
        </Text>

        <View className=" bg-[#000] flex flex-row  mt-3 	">
          {image ? (
            <ImageBackground
              source={{ uri: image }}
              className="basic-1/2  w-1/2 mx-2 flex border rounded-[2px] border-[#494949]  bg-[#494949] "
            >
              <Text className="text-[#eeea14]">01</Text>
              <Text className="text-[#a1a0a0] ">스티커 부착 상태</Text>
              <Text className="text-[#eeea14] text-[9px]">
                스티커 헌장이 보이도록
              </Text>
            </ImageBackground>
          ) : (
            <View className="basic-1/2  w-1/2 p-2 mx-2 flex border rounded-[2px] border-[#494949]  bg-[#494949] ">
              <Text className="text-[#eeea14]">01</Text>
              <Text className="text-[#a1a0a0] ">스티커 부착 상태</Text>
              <Text className="text-[#eeea14] text-[9px]">
                스티커 헌장이 보이도록
              </Text>
              <View className="  mt-5 flex  justify-center items-center ">
                <Pressable
                  className=" bg-[#a1a0a0] p-2  justify-center items-center rounded-full w-[30%] "
                  onPress={pickImage}
                >
                  <AntDesign name="camerao" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          )}
          <View className="basic-1/2 w-1/2 mr-3 p-2    flex border rounded-[2px] border-[#494949]  bg-[#494949] ">
            <Text className="text-[#eeea14]">02</Text>
            <Text className="text-[#a1a0a0] ">차 뒤에</Text>
            <Text className="text-[#eeea14] text-[9px]">
              스티커와 번호판이 포함되어 있습니다.
            </Text>
            <View className="  mt-5 flex  justify-center items-center ">
              <Pressable
                className=" bg-[#a1a0a0] p-2  justify-center items-center rounded-full w-[30%] "
                onPress={pickImage}
              >
                <AntDesign name="camerao" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        </View>
        <View className=" w-full p-2 flex justify-center m-2   border rounded-[2px] border-[#494949]  bg-[#494949] ">
          <Text className="text-[#eeea14]">03</Text>
          <Text className="text-[#a1a0a0] ">자동차 대시보드</Text>
          <Text className="text-[#eeea14] text-[9px]">
            킬로미터가 선명하게 보이도록 #세금 합시다
          </Text>
          <View className="  mt-5 flex   ">
            <Pressable
              className=" bg-[#a1a0a0] p-2  justify-center items-center rounded-full w-[20%] "
              onPress={pickImage}
            >
              <AntDesign name="camerao" size={24} color="white" />
            </Pressable>
          </View>
        </View>
        {image && (
          <View className=" bg-[#000] flex justify-center items-center p-2	w-full">
            <Pressable
              className=" bg-[#eeea14] p-5  rounded-[5px]  w-full"
              onPress={tDialog}
            >
              <Text className="text-black text-center text-[20px]">업로드</Text>
            </Pressable>
          </View>
        )}
      </View>
      <Dialog isVisible={dialog.Certification} onBackdropPress={tDialog}>
        <Dialog.Loading />
      </Dialog>
      <Dialog isVisible={dialog.Certification} onBackdropPress={tDialog}>
        <View className="text-[15px] flex justify-center items-center">
          <AntDesign name="checkcircleo" size={40} color="orange" />
        </View>
        <View className="flex flex-cols justify-center items-center my-3 ">
          <Text className="text-[15px] font-bold ">
            사진 업로드가 완료되었습니다
          </Text>
        </View>
        <Text className="text-[12px] ">
          사진 촬영이 잘못되었거나, 검수에 부적합하다고 판단될 경우 재촬영을
          요청할 수 도 있습니다
        </Text>
        <View className=" flex justify-center items-center mt-5">
          <Pressable
            className=" bg-[#ecc647] p-3  rounded-[10px]  w-full"
            onPress={tDialog}
          >
            <Text className="text-white text-center text-[20px]">홈으로</Text>
          </Pressable>
        </View>
      </Dialog>
    </View>
  );
}
