import { TouchableHighlight, TextInput, Text, View, Image } from 'react-native';
import {useFonts} from 'expo-font'

import { Formik } from 'formik';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../commons/store';
import { LoginUser } from '../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { AntDesign } from '@expo/vector-icons';
export default function Login() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  // đổi font chữ
  const [fontsLoaded] = useFonts({
    'Pretendard-Black': require('../../assets/fonts/Pretendard-Black.otf'),
    'Pretendard-Bold': require('../../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-ExtraBold': require('../../assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-ExtraLight': require('../../assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-Light': require('../../assets/fonts/Pretendard-Light.otf'),
    'Pretendard-Medium': require('../../assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-Regular': require('../../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-SemiBold': require('../../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Thin': require('../../assets/fonts/Pretendard-Thin.otf'),
  })

  if(!fontsLoaded) {
    return undefined;
  }

  return (
    <Formik
      initialValues={{ Email: '', password: '' }}
      onSubmit={async (values) => {
        try {
          // const res = await dispatch(LoginUser(values));
          // const login = unwrapResult(res);
          if (values.Email == 'mt' && values.password == '123') {
            router.push('/Home/');
          }
          // return login;
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View className="flex  h-screen items-center  justify-center	bg-[#000]">
          <Image
            source={require('../../assets/images/logo.jpg')}
            className="w-[240px] h-[240px]"
          />
          <TextInput
            onChangeText={handleChange('Email')}
            onBlur={handleBlur('Email')}
            value={values.Email}
            placeholder="이메일"

            style={{fontFamily: "Pretendard-Bold"}}
            className="appearance-none block w-4/5 mb-3 px-3 py-2 border bg-[#fff] border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry={true}
            value={values.password}
            placeholder="비밀번호"

            style={{fontFamily: "Pretendard-Bold"}}
            className="appearance-none block w-4/5 mb-3 px-3 py-2 border bg-[#fff] border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <View className="  flex flex-row justify-start w-4/5	">
            <Text 
              className=" text-[#afaeae] "
              style={{fontFamily: "Pretendard-Bold"}}
            >
              이메일 생성/비밀번호 복구
            </Text>
          </View>

          <View className="mt-[80px] mb-[40px] flex  flex-row items-center  justify-center">
            <TouchableHighlight className="p-2 bg-amber-300 rounded-full mx-1">
              <Image
                className="w-[24px] h-[24px]"
                source={require('../../assets/images/messagecircle.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight className="p-2 bg-emerald-400 rounded-full mx-1">
              <Image
                className="w-[24px] h-[24px]"
                source={require('../../assets/images/naver.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight className="p-2 bg-[#000] rounded-full mx-1">
              <AntDesign name="apple1" size={24} color="white" />
            </TouchableHighlight>
            <TouchableHighlight className="p-2 bg-[#fff] rounded-full mx-1">
              <Image
                className="w-[24px] h-[24px]"
                source={require('../../assets/images/Google.png')}
              />
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            onPress={() => handleSubmit()}
            className="w-4/5 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Text 
              className="text-white text-center"
              style={{fontFamily: "Pretendard-Bold"}}
            >
              로그인
            </Text>
          </TouchableHighlight>
          <Text 
            className="text-[#fff] mt-2 pr-1"
            style={{fontFamily: "Pretendard-Bold"}}
          >
            계정이 없나요?
            <Link
              href="/register/"
              className="text-amber-300 hover:bg-amber-100 ml-2"
              style={{fontFamily: "Pretendard-Bold"}}
            >
              등록하다
            </Link>
          </Text>
        </View>
      )}
    </Formik>
  );
}
