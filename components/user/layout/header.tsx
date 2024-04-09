import { View,Image } from 'react-native';
import { Header } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Headeruser() {
  return (
    <View  className="bg-[#d1d5db]">
      <Header
        leftComponent={<Image source={
          require('../../../assets/images/logo2.jpg')}             className="w-[24px] h-[24px]"
          />}
        rightComponent={<MaterialCommunityIcons name="bell-outline" size={24} color="black" />}
        backgroundColor={"#d1d5db"}
        
      />
    </View>
  );
}
