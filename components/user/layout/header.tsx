import { View } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Header } from '@rneui/themed';
export default function Headeruser() {
  return (
    <View>
      <Header
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View>
  );
}
