import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public audio : any = new Audio();
  public about : any = false;
  public folder: string;

  public playing : any = false;
  public listDisplay : any = false;
  public listImages : any = [
    'assets/photo/alex1.jpg',
    'assets/photo/alex2.jpg',
    'assets/photo/alex3.jpg',
    'assets/photo/alex4.jpg',
    'assets/photo/alex5.jpg',
    'assets/photo/alex6.jpg',
    'assets/photo/alex7.jpg',
    'assets/photo/alex8.jpg',
    'assets/photo/alex9.jpg',
    'assets/photo/alex10.jpg',
    'assets/photo/alex11.jpg',    
    
  ];
  public listSongs : any = [
    {
      'id' : 1,
      'name' : 'Leaving, On a Jet Plane',
      'src' : 'Leaving, On a Jet Plane -  Greatest Hits  Version.mp3',
      'artist' : 'John Denver',
      'time' : '4:05'
    },
    {
      'id' : 2,
      'name' : 'Sunshine on My Shoulders',
      'src' : 'Sunshine On My Shoulders.mp3',
      'artist' : 'John Denver',
      'time' : '5:11'
    },
    {
      'id' : 3,
      'name' : 'Rocky Mountain High',
      'src' : 'Rocky Mountain High.mp3',
      'artist' : 'John Denver',
      'time' : '4:43'
    },
    {
      'id' : 4,
      'name' : 'Follow Me',
      'src' : 'Follow Me -  Greatest Hits  Version.mp3',
      'artist' : 'John Denver',
      'time' : '2:54'
    },
    {
      'id' : 5,
      'name' : 'Some Broken Hearts Never Mend',
      'src' : 'Some Broken Hearts Never Mend.mp3',
      'artist' : 'Don Williams',
      'time' : '2:50'
    },
    {
      'id' : 6,
      'name' : 'It Must Be Love',
      'src' : 'It Must Be Love.mp3',
      'artist' : 'Don Williams',
      'time' : '2:31'
    },
    {
      'id' : 7,
      'name' : 'Through The Years',
      'src' : 'Through The Years - Single Version.mp3',
      'artist' : 'Kenny Rogers',
      'time' : '4:46'
    },
    {
      'id' : 8,
      'name' : 'The Gambler',
      'src' : 'The Gambler.mp3',
      'artist' : 'Kenny Rogers',
      'time' : '3:34'
    },
    {
      'id' : 9,
      'name' : 'Coward Of The County',
      'src' : 'Coward Of The County.mp3',
      'artist' : 'Kenny Rogers',
      'time' : '4:22'
    },
    {
      'id' : 10,
      'name' : 'Lady',
      'src' : 'Lady.mp3',
      'artist' : 'Kenny Rogers',
      'time' : '3:54'
    },
    {
      'id' : 11,
      'name' : 'Everything I Own',
      'src' : 'Everything I Own.mp3',
      'artist' : 'Bread',
      'time' : '3:07'
    },
    {
      'id' : 12,
      'name' : 'If',
      'src' : 'If.mp3',
      'artist' : 'Bread',
      'time' : '2:35'
    },
    {
      'id' : 13,
      'name' : 'Baby Im-a Want you',
      'src' : "Baby I'm-a Want You.mp3",
      'artist' : 'Bread',
      'time' : '2:30'
    },
    {
      'id' : 14,
      'name' : 'Make It with You',
      'src' : 'Make It with You.mp3',
      'artist' : 'Bread',
      'time' : '3:12'
    },
    {
      'id' : 15,
      'name' : 'Aubrey',
      'src' : 'Aubrey.mp3',
      'artist' : 'Bread',
      'time' : '3:39'
    },
    {
      'id' : 16,
      'name' : 'Lost Without Your Love',
      'src' : 'Lost Without Your Love.mp3',
      'artist' : 'Bread',
      'time' : '2:56'
    },
    {
      'id' : 17,
      'name' : 'Leader of the Band',
      'src' : 'Leader of the Band.mp3',
      'artist' : 'Dan Fogelberg',
      'time' : '4:16'
    },
    {
      'id' : 18,
      'name' : 'Longer',
      'src' : 'Longer.mp3',
      'artist' : 'Dan Fogelberg',
      'time' : '3:15'
    },
    {
      'id' : 19,
      'name' : 'Part of the Plan',
      'src' : 'Part of the Plan.mp3',
      'artist' : 'Dan Fogelberg',
      'time' : '3:18'
    },
    {
      'id' : 20,
      'name' : 'Rhythm of the Rain',
      'src' : 'Rhythm of the Rain.mp3',
      'artist' : 'Dan Fogelberg',
      'time' : '4:22'
    },
    {
      'id' : 21,
      'name' : 'Take It Easy',
      'src' : 'Take It Easy - 2013 Remaster.mp3',
      'artist' : 'Eagles',
      'time' : '3:31'
    },
    {
      'id' : 22,
      'name' : 'Desperado',
      'src' : 'Desperado - 2013 Remaster.mp3',
      'artist' : 'Eagles',
      'time' : '3:33'
    },
    {
      'id' : 23,
      'name' : 'How Deep Is Your Love',
      'src' : 'How Deep Is Your Love.mp3',
      'artist' : 'Bee Gees',
      'time' : '4:05'
    },
    {
      'id' : 24,
      'name' : "You've Got a Friend",
      'src' : "You've Got a Friend.mp3",
      'artist' : 'James Taylor',
      'time' : '4:28'
    },
    {
      'id' : 25,
      'name' : 'I Fall All over Again',
      'src' : 'I Fall All over Again.mp3',
      'artist' : 'Dan Hill',
      'time' : '4:22'
    },
    {
      'id' : 26,
      'name' : 'Never Thought (That I Could Love)',
      'src' : 'Never Thought (That I Could Love).mp3',
      'artist' : 'Dan Hill',
      'time' : '3:44'
    },
    {
      'id' : 27,
      'name' : "It's Sad to Belong",
      'src' : "It's Sad to Belong - Single Version.mp3",
      'artist' : 'England Dan & John Ford Coley',
      'time' : '2:53'
    },
    {
      'id' : 28,
      'name' : 'On The Wings Of Love',
      'src' : "On The Wings Of Love.mp3",
      'artist' : 'Jeffrey Osborne',
      'time' : '4:02'
    },
    {
      'id' : 29,
      'name' : 'When She Cries',
      'src' : "When She Cries.mp3",
      'artist' : 'Restless Heart',
      'time' : '3:42'
    },
    {
      'id' : 30,
      'name' : "Nothing's Gonna Change My Love for You",
      'src' : "Nothing's Gonna Change My Love for You.mp3",
      'artist' : 'George Benson',
      'time' : '4:02'
    },
    {
      'id' : 31,
      'name' : "I'd Really Love to See You Tonight",
      'src' : "I'd Really Love to See You Tonight.mp3",
      'artist' : 'England Dan & John Ford Coley',
      'time' : '2:39'
    },
    {
      'id' : 32,
      'name' : 'Born For You',
      'src' : 'Born for You.mp3',
      'artist' : 'David Pomeranz',
      'time' : '3:55'
    },
    {
      'id' : 33,
      'name' : "Don't Know What To Say (Don't Know What To Do)",
      'src' : "Don't Know What To Say (Don't Know What To Do).mp3",
      'artist' : 'Ric Segreto',
      'time' : '2:45'
    },
    {
      'id' : 34,
      'name' : 'Paint My Love',
      'src' : 'Paint My Love - 2002 Digital Remaster.mp3',
      'artist' : 'Michael Learns To Rock',
      'time' : '3:49'
    },
    {
      'id' : 35,
      'name' : 'Skyline Pigeon',
      'src' : 'Skyline Pigeon - Piano Version.mp3',
      'artist' : 'Elton John',
      'time' : '3:56'
    },

  ];
  public curImage : any = null;
  public curSong : any = null;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }
  _toggleListMenu() {
      this.listDisplay = !this.listDisplay;
  }
  _playImages(){
        let k = 0
        this._shuffle(this.listImages)
        let AniImages = ()=>{
            if(this.listImages.length <= k){
                this._shuffle(this.listImages)
                k = 0
            }
            let cur = this.listImages[k]
            this.curImage = cur
            k += 1
        }
        AniImages()
        setInterval(()=>{
          AniImages()
        },12000)   
  }
  _initSong(){
      this.listSongs.map((v)=>{
        v['active'] = false
      })
      this.curSong = this.listSongs[0]
      this.listSongs[0].active = true
      this.audio.src = 'assets/songs/'+this.curSong.src
      this.audio.load()

  }
  _playing(status){

      if(status === 1){
          this.playing = true
          this.audio.play()
          
      }else{
        this.playing = false
        this.audio.pause()
      }
  }
  _playSong(item){
    this.listSongs.map((v)=>{
        v['active'] = false
    })

    let index = this.listSongs.findIndex(x => x.id ===item.id)
    this.listSongs[index].active = true 
    this.curSong = item
    this.audio.src = 'assets/songs/'+this.curSong.src
    this.audio.load()

    if(this.playing){
      this._playing(1)
    }


  }
  _playNext(){
      this.listSongs.map((v)=>{
        v['active'] = false
      })


    let index = this.listSongs.findIndex(x => x.id ===this.curSong.id)
    let target = index + 1
    if(!this.listSongs[target]){
       target = 0
    }   
    this.listSongs[target].active = true 
    let item = this.listSongs[target]
    this.curSong = item
    this.audio.src = 'assets/songs/'+this.curSong.src
    this.audio.load()

    if(this.playing){
      this._playing(1)
    }

  }
  _playPrev(){
    this.listSongs.map((v)=>{
      v['active'] = false
    })


    let index = this.listSongs.findIndex(x => x.id ===this.curSong.id)
    let target = index - 1
    if(!this.listSongs[target]){
       target = this.listSongs.length - 1
    }
    this.listSongs[target].active = true 
    let item = this.listSongs[target]
    this.curSong = item
    this.audio.src = 'assets/songs/'+this.curSong.src
    this.audio.load()


    if(this.playing){
      this._playing(1)
    }

  }
  _openAbout(){
     this.about = !this.about
  }
  _shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this._playImages()
    this._initSong()
    this.audio.addEventListener('ended',()=>{
      this._playNext()
    })
  }

}
