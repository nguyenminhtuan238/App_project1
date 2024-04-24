import '../../assets/css/global.css';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
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
import Home from './Home';
import { HiddenRegisteredCar } from '../../commons/store/hidden';

export default function Layout() {
  const hidden = useSelector((state: RootState) => state.hidden);
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
  });

  if (!fontsLoaded) {
    return undefined;
  }

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
                color="white"
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
        name="Point/index"
        options={{
          headerTitle: '포인트',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerTitleAlign: 'center',
          headerRight: () => (
            <View className="flex flex-row justify-around ">
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="white"
              />

              <Badge
                status="error"
                value=""
                containerStyle={{ position: 'absolute', top: 1, left: 18 }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="ListProduct/index"
        options={{
          headerTitle: '기부자',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
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
          headerTitle: '기부자',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
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
        name="WithDrawal/index"
        options={{
          headerTitle: '출금 요청',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.push('/Point/')}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="User/index"
        options={{
          headerTitle: 'MY',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerTitleAlign: 'center',
          headerRight: () => (
            <View className="flex flex-row justify-around ">
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="white"
              />

              <Badge
                status="error"
                value=""
                containerStyle={{ position: 'absolute', top: 1, left: 18 }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="Application/index"
        options={{
          headerTitle: '신청 내용',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.push('/Point/')}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="RegisterCarInformation/index"
        options={{
          headerTitle: '차량정보 등록',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={router.back}
                />
              </Text>
            </View>
          ),
          headerRight: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                1
                <Text
                  className="text-[#a3a2a2] text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  /3
                </Text>
              </Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="RegisterCarInformation/city"
        options={{
          headerTitle: '차량정보 등록',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={router.back}
                />
              </Text>
            </View>
          ),
          headerRight: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                2
                <Text
                  className="text-[#a3a2a2] text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  /3
                </Text>
              </Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="RegisterCarInformation/district"
        options={{
          headerTitle: '차량정보 등록',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={router.back}
                />
              </Text>
            </View>
          ),
          headerRight: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                3
                <Text
                  className="text-[#a3a2a2] text-[15px]"
                  style={{ fontFamily: 'Pretendard-Bold' }}
                >
                  /3
                </Text>
              </Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ApplyForSponsorship/index"
        options={{
          headerTitle: '신청서 작성',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text 
                className="text-white text-[15px] "
                style={{fontFamily: "Pretendard-Bold"}}
              >
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
        name="ApplyForSponsorship/detail"
        options={{
          headerTitle: '신청서 작성',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
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
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },

          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
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

      <Stack.Screen
        name="Certification/index"
        options={{
          headerTitle: '확인',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },

          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
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
        name="Information/index"
        options={{
          headerTitle: '내 정보',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.back()}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Collection/index"
        options={{
          headerTitle: '내 광고 컬렉션',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.back()}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Establish/index"
        options={{
          headerTitle: '알림 설정',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.back()}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="PolicyTerms/index"
        options={{
          headerTitle: '이용약관 및 정책',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.back()}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="FAQ/index"
        options={{
          headerTitle: 'FAQ/1:1필수',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.back()}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="FAQ/FAQ2"
        options={{
          headerTitle: 'FAQ/1:1필수',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <View className="mr-1">
              <Text
                className="text-white text-[15px] "
                style={{ fontFamily: 'Pretendard-Bold' }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  onPress={() => router.back()}
                />
              </Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="RegisteredCar/index"
        options={{
          headerTitle: hidden.setRegisteredCar ? '내 차 정보' : '',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: () => (
            <>
              {hidden.setRegisteredCar && (
                <View className="mr-1">
                  <Text
                    className="text-white text-[15px] "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    <Ionicons
                      name="chevron-back"
                      size={24}
                      color="white"
                      onPress={() => router.back()}
                    />
                  </Text>
                </View>
              )}
            </>
          ),
          headerRight: () => (
            <>
              {hidden.setRegisteredCar ? (
                <Pressable
                  className="bg-[#555555] rounded-[30px]  p-2 flex flex-row justify-center items-center my-8"
                  onPress={() => dispatch(HiddenRegisteredCar())}
                >
                  <Text
                    className="text-[#fff]  text-center "
                    style={{ fontFamily: 'Pretendard-Bold' }}
                  >
                    편집자
                  </Text>
                </Pressable>
              ) : (
                <View className="flex flex-row ">
                  <Pressable
                    className="bg-[#555555] rounded-[30px]  p-2  "
                    onPress={() => dispatch(HiddenRegisteredCar())}
                  >
                    <Text
                      className="text-[#fff]  text-center "
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      조정
                    </Text>
                  </Pressable>
                  <Pressable
                    className="bg-[#555555] rounded-[30px]  p-2 flex flex-row ml-2 "
                    onPress={() => router.push('/FAQ/FAQ2')}
                  >
                    <Text
                      className="text-[#f84a4a]  text-center "
                      style={{ fontFamily: 'Pretendard-Bold' }}
                    >
                      삭제
                    </Text>
                  </Pressable>
                </View>
              )}
            </>
          ),
        }}
      />
    </Stack>
  );
}
