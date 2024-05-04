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
    <View className="flex  h-screen items-center  justify-center	bg-[#000]">
      <Text
        className="text-[#fff]  bg-black rounded-full p-3 border border-[#7e7e7e4b] "
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
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

      <Text className="text-[#fff] " style={{ fontFamily: 'Pretendard-Bold' }}>
        -SNS 계정으로 쉽게 시작해보세요-
      </Text>
      <TouchableHighlight
        onPress={() => kakatalk()}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[24px] h-[24px]"
            source={require('../../../assets/images/messagecircle.png')}
          />
          <Text
            className="  ml-[20px]"
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            카카오톡 시작하기
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={signOut}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-emerald-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[24px] h-[24px]"
            source={require('../../../assets/images/naver.png')}
          />
          <Text className="ml-[20px]" style={{ fontFamily: 'Pretendard-Bold' }}>
            네이버로 시작해 보세요
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={onAppleButtonPress}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <AntDesign name="apple1" size={24} color="black" />
          <Text className="ml-[20px]" style={{ fontFamily: 'Pretendard-Bold' }}>
            사과부터 시작해 보세요
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => onGoogleButtonPress()}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[#fff] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[24px] h-[24px] "
            source={require('../../../assets/images/Google.png')}
          />
          <Text className="ml-[20px]" style={{ fontFamily: 'Pretendard-Bold' }}>
            Google 시작하기
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
