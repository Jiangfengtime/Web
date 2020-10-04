const common = require('./common');
const utils = require('./utils');

// 引入css, 不能省略后缀
require('./style.css');

common.info('Hello world!' + utils.add(100, 200));