import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

require('raf').polyfill(global);

// polyfill require.context
registerRequireContextHook();
