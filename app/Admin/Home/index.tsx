import { Button } from '@rneui/base';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Linking from 'expo-linking';
export default function HomeAdmin() {
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
  useEffect(() => {
    if (!fontsLoaded) {
      return undefined;
    }
  }, []);

  return (
    <View className="flex-1 h-screen justify-center items-center bg-[#000]">
      {/* <Text>Click to enable BackgroundGeolocation</Text>
      <Switch value={enabled} onValueChange={setEnabled} />
      <Text style={{ fontFamily: 'monospace', fontSize: 12 }}>{location}</Text> */}
      <Button
        title="관리 홈"
        color="yellow"
        titleStyle={{ color: '#000', fontFamily: 'Pretendard-Bold' }}
        onPress={() => {
          Linking.openURL('https://adminpage-react-native.flutterflow.app');
        }}
      />
    </View>
  );
}
