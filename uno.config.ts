import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  // presetWind,
  // presetAttributify,
  // presetMini
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra';

export default defineConfig({
  presets: [
    presetUno(),
    // presetMini({}),
    // presetAttributify(),
    presetIcons({}),
    presetWebFonts({
      provider: 'google',
      fonts: {
        roboto: {
          name: 'Roboto',
          weights: ['400', '500', '700', '900'],
        },
      }
    }),
    presetExtra()
  ],
  // theme: {
  //   colors: {
  //     'chGreen': '#05a550'
  //   }
  // }
})