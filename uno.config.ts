import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  // presetWind,
  // presetAttributify,
  // presetMini
} from 'unocss'

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
          weights: ['400', '700', '900'],
        },
      }
    }),
  ],
  // theme: {
  //   colors: {
  //     'chGreen': '#05a550'
  //   }
  // }
})