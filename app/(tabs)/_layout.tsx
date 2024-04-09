import '../../assets/css/global.css';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from './Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import LogoutScreen from './logout';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../commons/store';
import * as ImagePicker from 'expo-image-picker';
import { unwrapResult } from '@reduxjs/toolkit';
import { getStudent } from '../../commons/store/Student';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import store from '../../commons/store';
export default function Layout() {
  const Drawer = createDrawerNavigator();
  const Student = useSelector((state: RootState) => state.Student);
  const dispatch: AppDispatch = useDispatch();
  const [image, setImage] = useState(null);
  
  return (
   
    <Slot />
  );
}
