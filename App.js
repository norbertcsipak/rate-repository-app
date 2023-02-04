import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from './assets/components/RepositoryList/RepositoryList';

function App() {
  return (
    <View>
      <RepositoryList />
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

export default App;
