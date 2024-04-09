import {
  TouchableHighlight,
  TextInput,
  Text,
  View,
  Image
} from 'react-native';
import { Link, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../commons/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { AntDesign} from '@expo/vector-icons';
export default function Register() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  return (
    
        <View className="flex  h-screen items-center  justify-center	bg-[#000]">
         
         <Text className="text-[#fff] ">
              dasdasdsadsa <Link href="/login/" className="text-amber-300">ádsadsad</Link>

            </Text>
            <Image source={
          require('../../assets/images/logo.jpg')}             className="w-[240px] h-[240px]"
          />
            
            <Text className="text-[#fff] ">
              -dadsadasdsad-

            </Text>
            <TouchableHighlight
              className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <View className="text-white text-center  flex flex-row "> 
              <Image
            className="w-[24px] h-[24px]"
        source={
          require('../../assets/images/messagecircle.png')}
      />
              <Text className="  ml-[20px]"> 
              Đăng a</Text>
      </View>
            </TouchableHighlight>
            <TouchableHighlight
              className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-emerald-400 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >  
            <View className="text-white text-center  flex flex-row "> 
                <Image
            className="w-[24px] h-[24px]"
        source={
          require('../../assets/images/naver.png')}
      />
              <Text className="ml-[20px]">
            
                Đăng b</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
              className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <View className="text-white text-center  flex flex-row "> 
              <AntDesign name="apple1" size={24} color="black" />
              <Text className="ml-[20px]">  Đăng b</Text>
              
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              className="w-4/5 flex justify-center py-3 px-4 my-1 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-[#fff] hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
             
              <View className="text-white text-center  flex flex-row "> 
              <Image
            className="w-[24px] h-[24px] "
        source={
          require('../../assets/images/Google.png')}
      />
            <Text className="ml-[20px]">  Đăng ky</Text>
              
              
              </View>
            </TouchableHighlight>
           
        </View>
  
  );
}
