import '../../assets/css/global.css';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../commons/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { router, Slot, Stack, Tabs } from 'expo-router';
import { Provider } from 'react-redux';
import store from '../../commons/store';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';

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
              source={require('../../assets/images/logo23.png')}
              className="w-[72] h-[24] "
              resizeMode="stretch"
            />
          ),
          headerRight: () => (
            <View className="flex flex-row justify-around ">
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="black"
              />

              <Badge
                status="error"
                value=""
                containerStyle={{ position: 'absolute', top: 1, left: 18 }}
              />
            </View>
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

      <Stack.Screen
        name="Confirm/index"
        options={{
          headerTitle: '이용 약관에 동의',
          headerTitleStyle: { color: 'white' },
          headerTitleAlign: 'center',
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
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
    </Stack>
  );
}
