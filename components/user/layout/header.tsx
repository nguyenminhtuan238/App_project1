import { View, Image } from 'react-native';
import { Header } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Headeruser() {
  return (
    <View className="bg-[#d1d5db]">
      <Header
        leftComponent={
          <Image
            source={require('../../../assets/images/logo2.png')}
            className="w-[72] h-[24] "
          />
        }
        rightComponent={
          <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
        }
        backgroundColor={'#d1d5db'}
      />
    </View>
  );
}
