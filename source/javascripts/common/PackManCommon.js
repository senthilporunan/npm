import _ from 'lodash';
import fs from 'fs';
import {dirname, resolve} from 'path';
import module from 'module';

let execSync = require('child_process').execSync;
let getPreferences = () => global.PackMan.preferences;

let _load = module._load;
module._load = (cmd, request, parent, isMain) => {
  try {
    return _load(cmd, request, parent, isMain);
  } catch(e) {
    let path = dirname(parent.paths[parent.paths.length - 1]);
    try {
      let child = execSync(`${cmd} ${request}`,
          { cwd: `${path}`, stdio:[], timeout: global.PackMan.preferences.timeout });
      return _load(cmd, request, parent, isMain);
    }
    catch(ex) {
      throw ex;
    }
  }
};
