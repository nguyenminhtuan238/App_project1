import '../../assets/css/global.css';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../commons/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { getStudent } from '../../commons/store/Student';
import { router, Slot, Stack, Tabs } from 'expo-router';
import { Provider } from 'react-redux';
import store from '../../commons/store';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
export default function Layout() {
  const Drawer = createDrawerNavigator();
  const Student = useSelector((state: RootState) => state.Student);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Stack>
      <Stack.Screen
        name="Home/index"
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Image
              source={require('../../assets/images/logo2.png')}
              className="w-[72] h-[24] "
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="black"
            />
          ),
          headerStyle: {
            backgroundColor: '#d1d5db',
          },
        }}
      />
      <Stack.Screen
        name="ListProduct/index"
        options={{
          headerTitle: '기부자',
          headerTitleStyle: { color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text className="text-white text-[15px] ">
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={router.back}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="DetailProduct/index"
        options={{
          headerTitle: 'ListProduct',
          headerTitleStyle: { color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text className="text-white text-[15px] ">
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={router.back}
                />
              </Text>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
