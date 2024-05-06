import '../../assets/css/global.css';

import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../commons/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { router, Slot, Stack, Tabs } from 'expo-router';

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
          headerTitle: '관리 홈',
          headerTitleStyle: { fontFamily: 'Pretendard-Black', color: 'white' },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Stack>
  );
}
