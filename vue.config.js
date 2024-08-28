const { defineConfig } = require('@vue/cli-service');


module.exports = defineConfig({
  transpileDependencies: true
});


// module.exports = {
//   module: {
//     rules: [
//       // ... other rules omitted

//       // this will apply to both plain `.scss` files
//       // AND `<style lang="scss">` blocks in `.vue` files
//       {
//         test: /\.scss$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   },
//   // plugin omitted
// }

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: ' @import "@scr/assets/styles.scss"; '
//       }
//     }
//   }
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//     ],
//   },
// };
