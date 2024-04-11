import { ScrollView } from 'react-native';
import { View } from 'react-native';
import Footer from './footer';

export default function LayoutScreen({ children }: any) {
  return (
    <View className="flex-1 ">
      <ScrollView>{children}</ScrollView>

      <Footer />
    </View>
  );
}
