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

var NEW_OBJECT = {
  x : 0,
  y : 0,
  w : 15,
  vx: 3,
  vy: 1
};
