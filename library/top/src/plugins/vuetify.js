/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
// import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   theme: {
//     themes: {
//       light: {
//         colors: {
//           primary: '#1867C0',
//           secondary: '#5CBBF6',
//         },
//       },
//     },
//   },
// })



import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors:    {
      primary: "#607d8b",
      secondary: "#00bcd4",
      accent: "#cddc39",
      error: "#f44336",
      warning: "#ffc107",
      info: "#3f51b5",
      success: "#009688",
      },
}

export default createVuetify({
// export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})

