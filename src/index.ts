import { registerPlugin } from '@capacitor/core';

import type { ExamplePlugin } from './definitions';
import type { MyFlutterPluginPlugin } from './definitions';

const Example = registerPlugin<ExamplePlugin>('Example', {
  web: () => import('./web').then(m => new m.ExampleWeb()),
});

const MyFlutterPlugin = registerPlugin<MyFlutterPluginPlugin>('MyFlutterPlugin');


export * from './definitions';
export { Example };
export { MyFlutterPlugin };
