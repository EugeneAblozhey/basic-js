const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here 
  if(Array.isArray(arr)){
    let newArr = [];
    arr.forEach(item => {
      if(typeof(item) === 'string'){
        newArr.push(item.split('').filter(elem => elem != ' ')[0].toUpperCase());
      }
    })
    if(newArr.length > 0){
      return newArr.sort().join('');
    } else {
      return false;
    } 
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
