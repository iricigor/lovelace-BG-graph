import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/BG-graph.ts',
  output: {
    file: 'dist/BG-graph.js',
    format: 'es',
  },
  plugins: [typescript(), terser()],
};