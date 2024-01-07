import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  presetAttributify
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({}),
    presetWebFonts({
      provider: 'google',
      fonts: {
        roboto: {
          name: 'Roboto',
          weights: ['400', '600', '800'],
        },
      }
    }),
  ],
})