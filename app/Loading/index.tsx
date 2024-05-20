import { router } from 'expo-router';
import { useEffect } from 'react';
import { View, Image } from 'react-native';

export default function Loading() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/(tabs)/Home/');
    }, 3000);
  });
  return (
    <View className="flex  h-screen items-center  justify-center	bg-[#000]">
      <Image
        source={require('../../assets/images/logo.jpg')}
        className="w-[240px] h-[240px]"
      />
    </View>
  );
}
