import {
  TouchableHighlight,
  TextInput,
  Text,
  View,
  ImageBackground,
  RootTag,
} from 'react-native';
import { Formik } from 'formik';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../commons/store';
import { LoginUser } from '../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
export default function Login() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values) => {
        try {
          // const res = await dispatch(LoginUser(values));
          // const login = unwrapResult(res);
          if(values.username=="mt" && values.password=="123"){
          router.push('/Home/');
          }
          // return login;
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View className="flex  h-screen items-center  justify-center	">
          <ImageBackground
            source={require('../../assets/images/Hinhnen.jpg')}
            className="w-full flex  h-screen items-center  justify-center"
          >
            <Text className="mb-5 text-xl">Đăng Nhập</Text>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="Nhập Tên Tài Khoản"
              className="appearance-none block w-4/5 mb-3 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              value={values.password}
              placeholder="Nhập mật Khẩu"
              className="appearance-none block w-4/5 mb-3 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <TouchableHighlight
              onPress={() => handleSubmit()}
              className="w-4/5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Text className="text-white text-center">Đăng Nhập</Text>
            </TouchableHighlight>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}
