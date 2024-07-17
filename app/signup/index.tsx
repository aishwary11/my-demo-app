import { useState } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Home = () => {
  const [user, setUser] = useState<User>({ username: '', email: '', password: '' });
  const onPress = (event: GestureResponderEvent) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        inputMode="text"
        onChangeText={text => setUser({ ...user, username: text })}
        defaultValue={user.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        inputMode="email"
        onChangeText={text => setUser({ ...user, email: text })}
        defaultValue={user.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        inputMode="text"
        onChangeText={text => setUser({ ...user, password: text })}
        defaultValue={user.password}
      />
      <Pressable
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
