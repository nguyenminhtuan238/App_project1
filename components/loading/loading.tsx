import { View, Image } from 'react-native';

export default function Loading() {
  return (
    <View className="flex  h-screen items-center  justify-center	bg-[#000]">
      <Image
        source={require('../../assets/images/logo.jpg')}
        className="w-[240px] h-[240px]"
      />
    </View>
  );
}
