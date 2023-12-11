module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          'ios.js',
          'android.js',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': '.',
        },
      },
    ],
    ['@babel/plugin-transform-react-jsx', {runtime: 'automatic'}],
    'react-native-reanimated/plugin',
  ],
};
