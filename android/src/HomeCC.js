// import React, {Component} from 'react';
// import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

// class HomeCC extends Component {
//   render() {
//     return (
//       <>
//         <SafeAreaView style={styles.container1}>
//           {/* <View style={styles.box1}></View>
//     <View style={styles.box2}></View>
//     <View style={styles.box3}></View> */}
//           {/* <Image source={require('./CarPhoto.jpg')} style={styles.image} /> */}
//           {/* <Image
//       source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
//       style={{width: 300, height: 300}}
//     /> */}
//           <Text style={styles.myName}>React Native</Text>
//         </SafeAreaView>
//         <SafeAreaView style={styles.container2}>
//           <Text style={styles.myName}>I'm Tharaka bollegala</Text>
//         </SafeAreaView>
//       </>
//     );
//   }
// }
// const styles = StyleSheet.create(
//   {
//     container1: {
//       flex: 3,
//       backgroundColor: 'red',
//       alignItems: 'center',
//       justifyContent: 'center',
//       // flexDirection: 'row',
//     },
//     container2: {
//       flex: 1,
//       backgroundColor: 'green',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     myName: {
//       textAlign: 'center',
//       color: 'black',
//     },
//   },
//   //   name: {
//   //     textAlign: 'center',
//   //     color: 'blue',
//   //   },
//   //   box1: {
//   //     width: 100,
//   //     height: 100,
//   //     backgroundColor: 'powderblue',
//   //   },
//   //   box2: {
//   //     width: 100,
//   //     height: 100,
//   //     backgroundColor: 'skyblue',
//   //   },
//   //   box3: {
//   //     width: 100,
//   //     height: 100,
//   //     backgroundColor: 'steelblue',
//   //   },
//   //   image: {
//   //     width: 250,
//   //     height: 500,
//   //   },
// );
// export default HomeCC;

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './HomeCC.styles';

class HomeCC extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  onButtonPress() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.count}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.onButtonPress()}>
          <Text style={styles.btnTitle}>+ Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeCC;
