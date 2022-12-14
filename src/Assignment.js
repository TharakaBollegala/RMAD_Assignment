import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Assignment = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    // const name = 'Apple';
    // // If CONDITIONS
    // if (name === 'BlueBerry') {
    //   console.log('Fruit 1', name);
    // } else if (name === 'Orange') {
    //   console.log('Fruit 2', name);
    // } else {
    //   console.log('Fruit 3', 'Not Available');
    // }

    //Ternary Operator
    // name === 'Orange'
    //   ? console.log('Fruit', true)
    //   : console.log('Fruit', false);

    // Switch Case
    // switch (name) {
    //   case 'Apple':
    //     console.log('Fruit', true);
    //     break;

    //   default:
    //     console.log('Fruit', false);
    //     break;
    // }

    // const marks = 75;
    // 75 -> A
    // 65 - 75 -> B
    // 55 - 65 -> C
    // 35 - 55 -> s
    // 35 - W

    // const marks = 30;
    // // If CONDITIONS
    // if (marks >= 75) {
    //   console.log('Grade - A');
    // } else if (marks >= 65) {
    //   console.log('Grade - B');
    // } else if (marks >= 55) {
    //   console.log('Grade - C');
    // } else if (marks >= 35) {
    //   console.log('Grade - S');
    // } else {
    //   console.log('Grade - W');
    // }

    // marks >= 75
    //   ? console.log('Grade - A')
    //   : marks >= 65
    //   ? console.log('Grade - B')
    //   : marks >= 55
    //   ? console.log('Grade - C')
    //   : marks >= 35
    //   ? console.log('Grade - S')
    //   : console.log('Grade - W');

    const marks = 45;
    switch (true) {
      case marks >= 75:
        console.log('Grade - A');
        break;
      case marks >= 65:
        console.log('Grade - B');
        break;
      case marks >= 55:
        console.log('Grade - C');
        break;
      case marks >= 35:
        console.log('Grade - S');
        break;

      default:
        console.log('Grade - W');
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 01</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
  },
});

export default Assignment;
