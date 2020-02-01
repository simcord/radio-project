let myRadio = {
stations: [
  {
    name:'Pop',
        songs:[
          {title:'PYT',
            artist: 'Michael Jackson'},
          {title:'Beat it',
            artist: 'Michael Jackson'},
          {title:'Bad',
            artist: 'Michael Jackson'}
        ]
      },
  {
    name:'Rock',
        songs:[
          {title:'Heaven or Hell',
            artist: 'Gone'},
          {title:'What Do You Want',
            artist: 'Gone'},
          {title:'Justice',
            artist: 'Gone'}
        ]
      },
  {
    name:'Country BluesGrass',
        songs:[
          {title:'Corn on the Cob',
            artist:'Scott McGraw'},
          {title:'Give me my Boots',
            artist:'Scott McGraw'},
          {title:'My pickup Truck',
            artist:'Scott McGraw'}
        ]
      }
],
random: function() {


    let station = this.stations[Math.floor(Math.random() * this.stations.length)];
    let song = station.songs[Math.floor(Math.random() * station.songs.length)];
        console.log("Now Playing Track: "+ song.title + " Artist: " + song.artist);
}
}
myRadio.random()
