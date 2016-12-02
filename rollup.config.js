import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'src/main.js',
  format: 'iife',
  plugins: [
    svelte({
      include: [ 'src/**/*.html' ],
      exclude: [ 'src/index.html' ]
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  dest: './dist/bundle.js'
};
