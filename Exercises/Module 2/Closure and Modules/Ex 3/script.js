const SongsManager = function () {
    _songBase = []

    AddSong = (songName, songLink) => this._songBase[songName] = this.ShortenLink(songLink)

    GetSong = (songName) => console.log(`"https://www.youtube.com/watch?v=` + this._songBase[songName])

    ListSongs = () => console.log(this._songBase)

    ShortenLink = (songLink) => songLink.slice(32)

    return {
        addSong: AddSong,
        getSong: GetSong,
        listSongs: ListSongs
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
//songsManager.listSongs()
songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ