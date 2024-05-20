import { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { Dialog } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, Foundation } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { toggleDialog1 } from '../../../commons/store/dialog';
import certificationFireBase from '../../../commons/services/Certification.services';
import ImageCerification from '../../../components/ImageBackgound/imageCerification';
import CertificationConfirm from '../../../components/dialog/Certification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import { router } from 'expo-router';
import { CheckLogin } from '../../../commons/store/user';
import { getHidden } from '../../../commons/store/hidden';
export default function Certification() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [image, setImage]: any = useState(null);
  const [image2, setImage2]: any = useState(null);
  const [image3, setImage3]: any = useState(null);
  const [choose, setChoose]: any = useState(false);
  const [Progress, setProgress]: any = useState();
  const [User, setUser]: any = useState(null);
  const [Key, setKey]: any = useState('');
  const [GetCertification, SetCertification]: any = useState(null);
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    const CheckCertification = async () => {
      if ((await AsyncStorage.getItem(envUser)) != null) {
        const GetUser: any = await AsyncStorage.getItem(envUser);
        setUser(JSON.parse(GetUser));
        try {
          const certification: any =
            await certificationFireBase.getbyidcertification(
              JSON.parse(GetUser).id
            );

          SetCertification(certification);
          certification?.image
            ? setImage({ uri: certification.image })
            : setImage(null);
          certification?.image2
            ? setImage2({ uri: certification.image2 })
            : setImage2(null);
          certification?.image3
            ? setImage3({ uri: certification.image3 })
            : setImage3(null);
        } catch (error) {
          console.log(error);
        }
      } else {
        router.push('/register/');
      }
    };
    CheckCertification();
  }, [user.checklogin]);

  const pickcamera = async (key: any) => {
    setChoose(false);

    try {
      if (permission?.status !== ImagePicker.PermissionStatus.DENIED) {
        requestPermission();
      }
      let result: any = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        if (key == 'image') {
          setImage(result.assets[0]);
        }
        if (key == 'image2') {
          setImage2(result.assets[0]);
        }
        if (key == 'image3') {
          setImage3(result.assets[0]);
        }
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const pickImage = async (key: any) => {
    setChoose(false);
    try {
      let result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        if (key == 'image') {
          setImage(result.assets[0]);
        }
        if (key == 'image2') {
          setImage2(result.assets[0]);
        }
        if (key == 'image3') {
          setImage3(result.assets[0]);
        }
        // const {uri}=result.assets[0];
        // const fileName=uri.split('/').pop()
        // const uploadResp= await certificationFireBase.uploadToFirebase(uri,fileName,"image");
        // console.log(uploadResp)
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const tDialog = async () => {
    try {
      await certificationFireBase.uploadToFirebase(
        image.uri,
        image.uri.split('/').pop(),
        'image',
        User?.id
      );
      await certificationFireBase.uploadToFirebase(
        image2.uri,
        image2.uri.split('/').pop(),
        'image2',
        User?.id
      );
      await certificationFireBase.uploadToFirebase(
        image3.uri,
        image3.uri.split('/').pop(),
        'image3',
        User?.id
      );
      const certification = await certificationFireBase.updatecertification(
        { check: true },
        User?.id
      );
      SetCertification(certification);
      dispatch(toggleDialog1());
      dispatch(CheckLogin(true));
      dispatch(getHidden());
      return;
    } catch (error) {
      console.log(error);
    }
  };
  const chooseCameraPhoto = (key: string) => {
    setChoose(true);
    setKey(key);
  };
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
    <View className=" bg-[#000] h-full">
      <Text
        className="text-white text-[20px] my-1 mx-5"
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
        후원자 정보
      </Text>
      <View className=" mb-2 flex flex-row ">
        <View className="basic-1/5  rounded-[10px] p-3 mx-5 bg-[#fff] flex flex-row justify-center">
          <Image
            source={require('../../../assets/images/Bear.png')}
            className="h-[100] w-[100] "
            resizeMode="stretch"
          />
        </View>
        <View className="basic-2/3    ml-2  flex">
          <Text
            className="text-white"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            Bad Blue
          </Text>
          <View className="flex flex-row  justify-between mt-5">
            <Text
              className="text-[#a1a0a0] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              저장 단계
            </Text>
            <Text
              className="text-[#a1a0a0] mx-3"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              30 일
            </Text>
          </View>
          <View className="flex flex-row  justify-between">
            <Text
              className="text-[#a1a0a0] "
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              포인트 혜택
            </Text>
            <Text
              className="text-[#a1a0a0] mx-3"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              25,000포인트
            </Text>
          </View>
        </View>
      </View>
      <View className="h-[20] bg-[#494949] flex flex-row justify-between 	"></View>

      <View className=" bg-[#000] flex justify-center   p-5	">
        <Text
          className="text-white text-[16px] ml-3"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          인증샷을 찍어주세요
        </Text>
        <Text
          className="text-white text-[13px] ml-3 mt-1"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          각 버튼을 터치하여 사진을 찍으세요.
        </Text>

        <View className="  flex flex-2 flex-row mt-3 w-full  	">
          {image ? (
            <ImageCerification
              image={image.uri}
              class=" mx-2 flex-1 border rounded-[2px] border-[#494949]  bg-[#494949] "
              number="01"
              text="스티커 부착 상태"
              text2="스티커 헌장이 보이도록"
            />
          ) : (
            <View className="  w-1/2 p-2 mx-2 flex border rounded-[2px] border-[#494949]  bg-[#494949] ">
              <Text
                className="text-[#eeea14]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                01
              </Text>
              <Text
                className="text-[#a1a0a0] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                스티커 부착 상태
              </Text>
              <Text
                className="text-[#eeea14] text-[9px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                스티커 헌장이 보이도록
              </Text>
              <View className="  mt-2 flex  justify-center items-center ">
                <Pressable
                  className=" bg-[#a1a0a0] p-2  justify-center items-center rounded-full w-[30%] "
                  onPress={() => chooseCameraPhoto('image')}
                >
                  <AntDesign name="camerao" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          )}
          {image2 ? (
            <ImageCerification
              image={image2.uri}
              class="mr-3 flex-2  h-[150px] flex border rounded-[2px] border-[#494949]  bg-[#494949] "
              number="02"
              text="차 뒤에"
              text2="스티커와 번호판이 포함되어 있습니다."
            />
          ) : (
            <View className=" mr-3 p-2    flex-2 flex border rounded-[2px] border-[#494949]  bg-[#494949] ">
              <Text
                className="text-[#eeea14]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                02
              </Text>
              <Text
                className="text-[#a1a0a0] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                차 뒤에
              </Text>
              <Text
                className="text-[#eeea14] text-[9px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                스티커와 번호판이 포함되어 있습니다.
              </Text>
              <View className="  mt-2 flex  justify-center items-center ">
                <Pressable
                  className=" bg-[#a1a0a0] p-2  justify-center items-center rounded-full w-[30%] "
                  onPress={() => chooseCameraPhoto('image2')}
                >
                  <AntDesign name="camerao" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          )}
        </View>
        <View className="mt-2 ">
          {image3 ? (
            <ImageCerification
              image={image3.uri}
              class=" w-full  flex justify-center m-2 h-[100px]  border rounded-[2px] border-[#494949]  bg-[#494949] "
              number="03"
              text="자동차 대시보드"
              text2="킬로미터가 선명하게 보이도록 #세금 합시다"
            />
          ) : (
            <View className=" w-full p-2 flex justify-center m-2   border rounded-[2px] border-[#494949]  bg-[#494949] ">
              <Text
                className="text-[#eeea14]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                03
              </Text>
              <Text
                className="text-[#a1a0a0] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                자동차 대시보드
              </Text>
              <Text
                className="text-[#eeea14] text-[9px]"
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                킬로미터가 선명하게 보이도록 #세금 합시다
              </Text>
              <View className="  mt-5 flex   ">
                <Pressable
                  className=" bg-[#a1a0a0] p-2  justify-center items-center rounded-full w-[20%] "
                  onPress={() => chooseCameraPhoto('image3')}
                >
                  <AntDesign name="camerao" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          )}
        </View>
        {image && image2 && image3 && GetCertification?.check == false && (
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
      <Dialog isVisible={choose} onBackdropPress={() => setChoose(false)}>
        <Dialog.Loading />
      </Dialog>
      <Dialog isVisible={choose} onBackdropPress={() => setChoose(false)}>
        <View className="text-[15px] flex flex-row justify-center items-center p-3">
          <Pressable
            className=" bg-[#ecc647] p-3  rounded-[10px] mx-3"
            onPress={() => pickcamera(Key)}
          >
            <AntDesign name="camera" size={24} color="black" />
          </Pressable>
          <Pressable
            className=" bg-[#ecc647] p-3  rounded-[10px]  mx-3"
            onPress={() => pickImage(Key)}
          >
            <Foundation name="photo" size={24} color="black" />
          </Pressable>
        </View>
      </Dialog>
      <CertificationConfirm />
    </View>
  );
}
