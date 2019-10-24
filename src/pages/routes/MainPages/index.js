import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

export const Main = loadable(() => pMinDelay(import('./Main'), 300));
