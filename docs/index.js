const basicInfo = require('./basicInfo');
const tags = require('./tags');
const component = require('./component');
const operations = require('./operations');
const servers = require('./servers');

module.exports = {
    ...basicInfo,
    ...tags,
    ...servers,
    ...component,
    ...operations
};