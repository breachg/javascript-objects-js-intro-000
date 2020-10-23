var playlist = {Elder: 'Sanctuary'};

function updatePlaylist(playlist, artistName, songTitle){
 Object.assign({}, playlist, {[key]: value})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Elder
}
