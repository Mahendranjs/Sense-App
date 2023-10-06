/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NativeBaseProvider, extendTheme } from 'native-base';
import React from 'react';
import Main from './src/Navigation/navigation';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';

enableScreens();
LogBox.ignoreAllLogs()

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#2dc6c6',
        100: '#2dc6c6',
        200: '#2dc6c6',
        300: '#2dc6c6',
        400: '#2dc6c6',
        500: '#2dc6c6',
        600: '#2dc6c6',
        700: '#2dc6c6',
        800: '#2dc6c6',
        900: '#2dc6c6',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
  return(
    <NativeBaseProvider theme={theme}>
      <Main/>
    </NativeBaseProvider>
  );
};
