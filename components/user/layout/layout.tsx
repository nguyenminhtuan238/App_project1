import { ScrollView } from 'react-native';
import { View } from 'react-native';
import Footer from './footer';
import Headeruser from './header';

export default function LayoutScreen({ children }: any) {
  return (
    <View className="flex-1 ">
      <Headeruser/>
      <ScrollView>{children}</ScrollView>
      <Footer/>
    </View>
  );
}
