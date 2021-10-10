const ansiEscapes = require('ansi-escapes');

let state = 0;
/*
States:
0 - main menu
1 - songs
2 - settings
 */
let refreshRate = 2;
let songlist = ["Galaxy Collapse", "Korutoki"]

// setup for stdin
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(key) {
  if (key === '\u0003') { // keep crtl+c
    process.exit();
  }
  if (state == 0) {
    if (key == '1') {
      state = 1;
    } else if (key == '2') {
      refreshSongs()
      state = 2
    } else if (key == '3') {
      process.exit();
    }
  }
});

process.stdout.write(ansiEscapes.clearScreen)

function mainGameLoop() {
  process.stdout.write(ansiEscapes.cursorTo(0,0))
  if (state == 0) {
    process.stdout.write("Main Menu: \n\n1. Songs\n2. Settings\n3. Exit\n\nInput:")
  } else if (state == 1) {
    process.stdout.write("Songs:")
    for (var i = 0; i < songList.length; i++) {
      songList[i]
    }
  }

  setTimeout(mainGameLoop, refreshRate)
}

mainGameLoop()

function refreshSongs() {
  // WIP
}
