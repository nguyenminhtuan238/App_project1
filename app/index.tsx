import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Redirect } from 'expo-router';
import { useEffect } from 'react';

export default function startPage() {
  useEffect(() => {
    async function checkLogin() {
      const env: string = process.env.EXPO_PUBLIC_TOKEN!;
      const Token = await AsyncStorage.getItem(env);
      if (Token) {
        router.push('/(tabs)/Home/');
      }
    }
    checkLogin();
  }, []);
  return <Redirect href="/Home/" />;
}
