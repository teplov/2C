'use strict'

module.exports = function (name) {

  let username = name || null;
  if (!username) return 'Invalid username';

  let nikname = null;
  let aName = username.split('/');

  if (aName.length) {
    var name = aName.splice(-1,1)[0];
    nikname = name.match(/([a-z]+)/ig);
  }

  console.log(nikname);
  return '@' + nikname;
};
