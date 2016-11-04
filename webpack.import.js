const fs = require('fs');
const path = require('path');

const LOADED_PATTERN = /^\d+\./;

let loadCss = (pathCss, insertPath) => {
  var files = [];
  for(var f of fs.readdirSync(pathCss)){
    if(LOADED_PATTERN.test(f)){
      files.push(`'${insertPath + '/' + f}'`);
    }
  }
  files.sort();
  return files;
};

let loadJs = (pathJs, insertPath) => {
  var files = [];
  var dones = [];
  for(var f of fs.readdirSync(pathJs)){
    if(LOADED_PATTERN.test(f)){
      if(f.indexOf('[DONE]') !== -1){
        dones.push(`'${insertPath + '/' + f}'`);
      }else{
        files.push(`'${insertPath + '/' + f}'`);
      }
    }
  }
  files.sort();
  dones.sort();
  return {
      files: files,
      dones: dones
  };
};

let loadComponents = (pathComponents, insertPath) => {
  let componentJs = [];
  let loadComponent = (pathComponents, level, insertPath) => {
    componentJs[level] = [];
    for(let f of fs.readdirSync(pathComponents)){
      let path0 = path.join(pathComponents, f);
      let stat = fs.lstatSync(path0);
      if(stat.isDirectory()){
        loadComponent(path0, level+1, insertPath+'/'+f);
      }else if(/\.js$/.test(f)){
        componentJs[level].push(`'${insertPath+'/'+f}'`);
      }
    }
  }
  loadComponent(pathComponents, 0, insertPath);
  var all = [];
  for(var i in componentJs){
    componentJs[i].sort();
    all = all.concat(componentJs[i]);
  }
  return all;
};

let content = ["require('../public/index.htm');"];

let css = loadCss(path.join(__dirname, 'public', 'css'), '../public/css');
content.push(`require.ensure([${css.join(',\n\t')}], (require) => {
    require([${css.join(',\n\t')}]);
})`);

let js = loadJs(path.join(__dirname, 'public', 'js'), '../public/js');
let com = loadComponents(path.join(__dirname, 'public', 'components'), '../public/components');

content.push(`require([${js.files.join(',\n\t')}], (require) => {
    require([${com.join(',\n\t\t')}], (require) => {
        require([${js.dones.join(',\n\t')}]);
    });
})`);

fs.writeFileSync(path.join(__dirname, 'webpack', 'app.js'), content.join('\n\n'));
console.log("Added route into config file!"); 