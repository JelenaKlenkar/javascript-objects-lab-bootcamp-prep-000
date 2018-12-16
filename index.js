var recipes = new Object ({});

var obj = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value});
  
}
var obj = { prop: 1 }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   obj[key]=value
   return obj
  
}