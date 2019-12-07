import { configure } from '@storybook/vue';

import '../src/assets/styles/index.scss';
import '../src/RegisterToVue.ts'


// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
