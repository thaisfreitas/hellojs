var greater = function (name){
  var hello = function (){
    return 'hello ' + name ;
  };
  return hello;
};

module.exports = greater;
