var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var SQUARE = {
  x : 0,  //x position of square
  y : 0,  //y position of square
  w : 15, //width of square
  vx: 3,  //horizontal velocity
  vy: 1   //vertical velocity
};
