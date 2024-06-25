import { createVuetify } from 'vuetify'
import { components } from 'vuetify/dist/vuetify-labs.js'
import { directives } from 'vuetify/dist/vuetify.js'
import { pt } from 'vuetify/locale'
import 'vuetify/styles'

export const vuetify = createVuetify({
  components: {
    ...components
  },
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#BFC0C5',
          secondary: '#151414'
        }
      }
    }
  },
  locale: {
    locale: 'pt',
    fallback: 'pt',
    messages: { pt }
  }
})
