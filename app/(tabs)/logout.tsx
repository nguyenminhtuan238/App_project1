import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Logout } from '../../commons/store/user';
const LogoutScreen = () => {
  useEffect(() => {
    Logout();
    router.push('/');
  }, []);

  return (
    <View>
      <Text>Đăng Xuất..........</Text>
    </View>
  );
};

export default LogoutScreen;
