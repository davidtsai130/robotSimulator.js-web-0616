'use strict';

const directions = [ 'north', 'east', 'south', 'west' ];

class Robot {
  constructor(bearing, coordinates) {
  this.bearing = bearing;
  this.coordinates = coordinates;
}
  orient(direction) {
      if (directions.indexOf(direction !== -1)) { 
        this.bearing = direction;
      } else {
        throw new Error('Invalid Robot Bearing')
      }
  }

  turnRight() {
    if (directions.indexOf(this.bearing) + 1 > directions.length - 1) {
      this.bearing = directions[0];
    } else {
    this.bearing = directions[directions.indexOf(this.bearing) + 1];
    }
  }    

  turnLeft() {
    if (directions.indexOf(this.bearing) - 1 < 0) {
      this.bearing = directions[3];
    } else {
    this.bearing = directions[directions.indexOf(this.bearing) - 1];
    }
  }    

  at(x, y) {
    this.coordinates = [x, y]
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1;
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1;
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1;
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1;
    }
  }

  instructions(commands) {
    var action = []
    var array = commands.split('')
    array.forEach(function(letter) {
      if (letter === "R") {
        action.push("turnRight");
      } else if (letter === "L") {
        action.push("turnLeft");
      } else if (letter === "A") {
        action.push("advance");
      }
    })
    return action;
  }

  place(commands) {
    this.coordinates = [commands['x'], commands['y']]
    this.bearing = commands['direction']
  }

  evaluate(message){
   var result = this.instructions(message)
   for (var i = 0; i < result.length; i++)
    { this[result[i]]()
    }
 }

}

