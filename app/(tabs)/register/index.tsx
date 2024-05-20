import { TouchableHighlight, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../commons/store';
import { supabase } from '../../../commons/themes/supabase';
import * as WebBrowser from 'expo-web-browser';
import { createSessionFromUrl } from '../../../commons/store/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { envUser } from '../../../commons/themes/global';
import * as AuthSession from 'expo-auth-session';
import * as Crypto from 'expo-crypto';
import { Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { useEffect } from 'react';
import * as Random from 'expo-random';
import NaverLogin from '@react-native-seoul/naver-login';

export default function Register() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  WebBrowser.maybeCompleteAuthSession();
  const redirectTo = AuthSession.makeRedirectUri();
  const red = 'https://com.ssuik.android//';
  const NAVER_CLIENT_ID = 'Xid9nstEoq9BckjoZhtP';
  const NAVER_CLIENT_SECRET = 'A_oaiTg1Re';
  const AUTHORIZATION_ENDPOINT = 'https://nid.naver.com/oauth2.0/authorize';
  const authUrl = `${AUTHORIZATION_ENDPOINT}?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${encodeURIComponent(red)}`;
  const generateState = async () => {
    const randomBytes = await Random.getRandomBytesAsync(16);
    return Array.from(randomBytes)
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  };
  const initializeNaverLogin = () => {
    NaverLogin.initialize({
      appName: 'app',
      consumerKey: NAVER_CLIENT_ID,
      consumerSecret: NAVER_CLIENT_SECRET,
      disableNaverAppAuthIOS: true,
    });
  };
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: NAVER_CLIENT_ID,
      redirectUri: redirectTo,
      scopes: [],
      extraParams: {
        response_type: 'code',
        client_secret: NAVER_CLIENT_SECRET,
      },
    },
    {
      authorizationEndpoint: 'https://nid.naver.com/oauth2.0/authorize',
      tokenEndpoint: 'https://nid.naver.com/oauth2.0/token',
    }
  );

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

  /** This key is setup in iOS. So don't touch it */
  const serviceUrlScheme: any = 'navertest';
  if (!fontsLoaded) {
    return undefined;
  }

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
  const naver = async () => {
    try {
      //   await promptAsync()
      //  console.log(redirectTo,response)
      await initializeNaverLogin();
      const loginResult = await NaverLogin.login();
      console.log(loginResult);

      // if (loginResult.accessToken) {
      //   const profileResult = await getProfile(loginResult.accessToken);
      //   setProfile(profileResult);
      // }
    } catch (error) {
      console.error('Authorization Error', error);
    }
  };
  return (
    <View className="flex  h-screen items-center  justify-center	bg-[#000]">
      <Text
        className="text-[#fff] text-[16px]  bg-black rounded-full p-3 border border-[#7e7e7e4b] "
        style={{ fontFamily: 'Pretendard-Medium' }}
      >
        일상생활과 함께하는{' '}
        <Text
          className="text-amber-300"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          내 브랜드
        </Text>
      </Text>
      <Image
        source={require('../../../assets/images/logo.jpg')}
        className="w-[240px] h-[240px]"
      />

      <Text
        className="text-[#fff] text-[14px]"
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
        -SNS계정으로 간편하게 시작하기-
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
            className="ml-[20px] text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            카카오톡으로 시작하기
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={naver}
        className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-emerald-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <View className="text-white text-center  flex flex-row ">
          <Image
            className="w-[24px] h-[24px]"
            source={require('../../../assets/images/naver.png')}
          />
          <Text
            className="ml-[20px] text-[16px]"
            style={{ fontFamily: 'Pretendard-SemiBold' }}
          >
            네이버로 시작하기
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
