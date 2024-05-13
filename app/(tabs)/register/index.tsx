import { TouchableHighlight, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../commons/store';
import { AntDesign } from '@expo/vector-icons';
import { supabase } from '../../../commons/themes/supabase';
import { makeRedirectUri } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import {
  createSessionFromUrl,
  LoginGoogle,
  Logout,
} from '../../../commons/store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
export default function Register() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  WebBrowser.maybeCompleteAuthSession();
  const redirectTo = makeRedirectUri();
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

  async function onGoogleButtonPress() {
    try {
      await dispatch(LoginGoogle());

      if (await AsyncStorage.getItem(envUser)) {
        router.push('/Loading/');
      }
    } catch (error: any) {
      console.log(error);
    }
  }
  const signOut = async () => {
    try {
      await Logout();
      console.log('logout success');
    } catch (error) {
      console.error(error);
    }
  };
  const kakatalk = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo,
          skipBrowserRedirect: true,
        },
      });
      if (error) throw error;

      const res = await WebBrowser.openAuthSessionAsync(
        data?.url ?? '',
        redirectTo
      );
      if (res.type === 'success') {
        const { url } = res;
        await createSessionFromUrl(url);
      }
    } catch (err) {
      console.log(err);
    }
  };
  async function onAppleButtonPress() {
    try {
      //      // Generate secure, random values for state and nonce
      //   const rawNonce = uuid();
      //   const state = uuid();
      //   // Configure the request
      //   appleAuthAndroid.configure({
      //     // The Service ID you registered with Apple
      //     clientId: '1026350917181-f39b38ahkukcofbf1e3hncgq4v0pa9ir.apps.googleusercontent.com',
      //     // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
      //     // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
      //     redirectUri: '',
      //     // The type of response requested - code, id_token, or both.
      //     responseType: appleAuthAndroid.ResponseType.ALL,
      //     // The amount of user information requested from Apple.
      //     scope: appleAuthAndroid.Scope.ALL,
      //     // Random nonce value that will be SHA256 hashed before sending to Apple.
      //     nonce: rawNonce,
      //     // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
      //     state,
      //   });
      //   // Open the browser window for user sign in
      //   const response = await appleAuthAndroid.signIn();
      // console.log(response)
      // Send the authorization code to your backend for verification
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View className="flex h-screen items-center justify-center bg-[#000] py-[80px]">
      
      <View 
        className="w-[225px] h-[148px]"
      >
<<<<<<< HEAD
=======
        내 브랜드는 일상과{' '}
        <Text
          className="text-amber-300"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          함께한다
        </Text>
      </Text>
      <Image
        source={require('../../../assets/images/logo.jpg')}
        className="w-[240px] h-[240px]"
      />
>>>>>>> d10ef9417b665940d34de0d0e9b922d677d527ed

        <View 
          className="mx-auto mb-[10px] w-[230px] h-[44px] border border-[#FFFFFF] rounded-full"
        >
          <Text className="mx-auto my-auto">
            <Text 
              className="text-[16px] text-[#FFFFFF]"
              style={{ fontFamily: 'Pretendard-Medium' }}
            >
              일상생활과 함께하는
            </Text>
            <Text className="text-[16px] text-amber-300">
              <Link
                href="/login/"
                style={{ fontFamily: 'Pretendard-Medium' }}
              > 내 브랜드
              </Link>
            </Text>
          </Text>
        </View>

        <View 
          className="mx-auto mt-[10px] w-[213px] h-[84px] "
        >
          <View 
            className="mx-auto my-auto"
          >
            <View className="mb-auto w-[212.39px] h-[7.71px] bg-[#F6CA23] mb-[15px]" />

            <View 
              className="mx-auto my-auto"
            >
              <Image
              source={require('../../../assets/images/logo15.jpg')}
              className="w-[212px] h-[40px]"
            />
            </View>

            <View
              className="mt-auto flex flex-row mt-[15px]"
            >
              <View className="w-[56.61px] h-[7.3px] bg-[#FFFFFF] mr-auto"/>
              <View className="w-[56.15px] h-[7.3px] bg-[#FFFFFF]"/>
              <View className="w-[56.15px] h-[7.3px] bg-[#FFFFFF] ml-auto"/>

            </View>

          </View>
        </View>
      </View>
      
      <Text
        className="text-[#FFFFFF] text-[14px] mt-auto mb-[20px]"
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
        - SNS계정으로 간편하게 시작하기 -
      </Text>
<<<<<<< HEAD
      <TouchableHighlight className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <View className="text-white text-center flex flex-row ">
=======
      <TouchableHighlight
        onPress={() => kakatalk()}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
>>>>>>> d10ef9417b665940d34de0d0e9b922d677d527ed
          <Image
            className="w-[32px] h-[32px]"
            source={require('../../../assets/images/messagecircle.png')}
          />
          <Text
            className="mx-auto my-auto text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            카카오톡으로 시작하기
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
<<<<<<< HEAD
        onPress={() => router.push('/(tabs)/Confirm/')}
        className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium  bg-emerald-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
=======
        onPress={signOut}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-emerald-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>>>>>>> d10ef9417b665940d34de0d0e9b922d677d527ed
      >
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[32px] h-[32px]"
            source={require('../../../assets/images/naver.png')}
          />
          <Text
            className="mx-auto my-auto text-[16px] text-[#FFFFFF]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            네이버로 시작하기
          </Text>
        </View>
      </TouchableHighlight>
<<<<<<< HEAD
      <TouchableHighlight 
        className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
=======
      <TouchableHighlight
        onPress={onAppleButtonPress}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>>>>>>> d10ef9417b665940d34de0d0e9b922d677d527ed
      >
        <View className="text-white text-center  flex flex-row ">
          <AntDesign name="apple1" size={18} color="black" />
          <Text
            className="mx-auto my-auto text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            사과부터 시작해 보세요
          </Text>
        </View>
      </TouchableHighlight>
<<<<<<< HEAD
      <TouchableHighlight 
        className="w-[335px] h-[60px] flex justify-center py-[20px] px-[20px] my-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#fff] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center flex flex-row ">
=======
      <TouchableHighlight
        onPress={() => onGoogleButtonPress()}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[#fff] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
>>>>>>> d10ef9417b665940d34de0d0e9b922d677d527ed
          <Image
            className="w-[32px] h-[32px] "
            source={require('../../../assets/images/Google.png')}
          />
          <Text
            className="mx-auto my-auto text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            Google 시작하기
          </Text>
        </View>
      </TouchableHighlight>
    
    </View>
  );
}
