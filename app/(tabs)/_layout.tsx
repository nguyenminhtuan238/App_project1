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
export default function Layout() {
  const Drawer = createDrawerNavigator();
  const Student = useSelector((state: RootState) => state.Student);
  const dispatch: AppDispatch = useDispatch();
  const [image, setImage] = useState(null);
  useEffect(() => {
    const getTT = async () => {
      try {
        const res = await dispatch(getStudent());
        const get = unwrapResult(res);

        return get;
      } catch (error) {
        console.log(error);
      }
    };
    getTT();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      return;
    }
  };
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            {Student.isloading && (
              <View className="h-[200] w-full items-center border-[#f4f4f4] border-b-[1] bg-[#8e8e8f] justify-center">
                {Student.Student[0].Hinh !== null ? (
                  <Image
                    source={{
                      uri:
                        process.env.EXPO_PUBLIC_IMAGEUSERd +
                        'userimg/' +
                        Student.Student[0].Hinh,
                    }}
                    className="h-[130] w-[130] rounded-full"
                  />
                ) : (
                  <Image
                    source={{
                      uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
                    }}
                    className="h-[130] w-[130] rounded-full"
                  />
                )}
                <Text className="text-white">{Student.Student[0].Ten}</Text>
              </View>
            )}
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'blue',
        drawerLabelStyle: {
          color: '#111',
        },
      }}
    >
      <Drawer.Screen
        name="Trang Chủ"
        component={Home}
        options={{
          drawerLabel: 'Trang Chủ',

          title: 'Trang Chủ',
          drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
    

      <Drawer.Screen
        name="Đăng Xuất"
        component={LogoutScreen}
        options={{
          drawerLabel: 'Đăng Xuất',
          title: 'Đăng Xuất',
          drawerIcon: () => (
            <MaterialIcons name="logout" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
