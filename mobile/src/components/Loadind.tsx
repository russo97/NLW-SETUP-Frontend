import {
  View,
  StyleSheet,
  ActivityIndicator
} from "react-native";

export default function Loading () {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09090A'
  }
});
