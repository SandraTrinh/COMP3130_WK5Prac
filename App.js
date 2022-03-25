import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppTextInput from './app/components/AppTextInput';

export default function App() {
  return (
    <View style={styles.container}>
      <AppTextInput autoCapitalize='none' autoCorrect={false} placeholder="UserName"/>
      <AppTextInput
      autoCapitalize='none'
      autoCorrect={false}
      placeholder="Enter your Password"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
