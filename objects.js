var playlist = {Elder: 'Sanctuary'};

function updatePlaylist(object, artistName, songTitle){
 Object.assign({}, playlist, {'Tome Petty': 'Free Fallin'})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
}
