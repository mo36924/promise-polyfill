import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        dir: 'dist',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs'
      },
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js'
      },
      {
        file: 'dist/polyfill.js',
        format: 'es'
      }
    ],
    plugins: [
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true
        },
        ecma: 5,
        safari10: true
      })
    ]
  }
];
