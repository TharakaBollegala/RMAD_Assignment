import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const HomeFC = () => {
  const [counter, setCounter] = useState(0);

  return (
    // eslint-disable-next-line no-undef
    <View style={Styles.counter}>
      <Text style={Styles.title}>This is Home Functional Component</Text>
      <Text style={Styles.title}>{'Count is ${counter}'}</Text>

      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
        style={styles.btn}>
        <Text style={styles.title}>Add +1 to Count</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeFC;
