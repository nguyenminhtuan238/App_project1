import { Slot } from 'expo-router';
import '../../assets/css/global.css';
import { Provider } from 'react-redux';
import store from '../../commons/store';
export default function Layout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
