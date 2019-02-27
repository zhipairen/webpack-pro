
const { getOptions } = require('loader-utils');

module.exports = function testLoader(source){
    const options = getOptions(this);

    source = source.replace(/\[name\]/g, options.name);
  
    // 对资源应用一些转换……
    console.log('loader options:', options);
    // console.log('loader this:', this);
    return `${ JSON.stringify(source) }`; 
}