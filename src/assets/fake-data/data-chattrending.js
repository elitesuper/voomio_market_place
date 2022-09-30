import imgavatar from '../images/avatar/character1.png'
import imgavatar1 from '../images/avatar/character2.png'
import imgavatar2 from '../images/avatar/character3.png'
import imgavatar3 from '../images/avatar/character4.png'
import sampleimg from '../images/box-item/dancing-dog.png'

export const chatdata = [
  {
    chatid:1,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"dog bless",
    specnum: 33,
    imgs:null,
    belong:null,
  },{
    chatid:2,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"Lorem ipsum dolor",
    imgs:null,
    specnum: null,
    belong:null,
  },{
    chatid:3,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs:null,
    specnum: null,
    belong:{
      name:"@user327",
      avatar:imgavatar2,
      usermessage:"That's Ok!"
    },

  },{
    chatid:4,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs:null,
    specnum: null,
    belong:null,

  },{
    chatid:5,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"dog bless",
    specnum: 33,
    imgs:sampleimg,
    specnum: null,
    belong:null,
  }
]

export const onlineusers=[
  {
    userid:1,
    useravatar:imgavatar,
    username:'@user123789',
    verified:true
  },{
    userid:2,
    useravatar:imgavatar1,
    username:'@LoremIpsum',
    verified:true
  },{
    userid:3,
    useravatar:imgavatar2,
    username:'@user12334532',
    verified:false
  },{
    userid:4,
    useravatar:imgavatar,
    username:'@user123789',
    verified:true
  },{
    userid:5,
    useravatar:imgavatar2,
    username:'@user123789',
    verified:false
  },{
    userid:6,
    useravatar:imgavatar,
    username:'@user123789',
    verified:true
  },{
    userid:7,
    useravatar:imgavatar1,
    username:'@user123789',
    verified:false
  },{
    userid:8,
    useravatar:imgavatar3,
    username:'@user123789',
    verified:true
  },
]

export const threads = [
  {
    username:"@user1234567",
    comments:"44 comments",
    messages:[
      {
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget justo nec nisi blandit feugiat. Vestibulum vel ex nec neque varius pharetra.",
        time:"2 days ago"
      },{
        message:"This is test version.",
        time:"2 days ago"
      },{
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time:"3 days ago"
      },{
        message:"Si alicui credis, credet et tibi.",
        time:"4 days ago"
      },{
        message:"Illic res est usquam. Quaeso ne dubita.",
        time:"5 days ago"
      }
    ]
  },
  {
    username:"@user1234567",
    comments:"44 comments",
    messages:[
      {
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget justo nec nisi blandit feugiat. Vestibulum vel ex nec neque varius pharetra.",
        time:"2 days ago"
      },{
        message:"This is test version.",
        time:"2 days ago"
      },{
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time:"3 days ago"
      },{
        message:"Si alicui credis, credet et tibi.",
        time:"4 days ago"
      },{
        message:"Illic res est usquam. Quaeso ne dubita.",
        time:"5 days ago"
      }
    ]
  },
  {
    username:"@user1234567",
    comments:"44 comments",
    messages:[
      {
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget justo nec nisi blandit feugiat. Vestibulum vel ex nec neque varius pharetra.",
        time:"2 days ago"
      },{
        message:"This is test version.",
        time:"2 days ago"
      },{
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time:"3 days ago"
      },{
        message:"Si alicui credis, credet et tibi.",
        time:"4 days ago"
      },{
        message:"Illic res est usquam. Quaeso ne dubita.",
        time:"5 days ago"
      }
    ]
  }
]

export const thread =  {
    username:"@user1234567",
    comments:"44 comments",
    messages:[
      {
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget justo nec nisi blandit feugiat. Vestibulum vel ex nec neque varius pharetra.",
        time:"2 days ago"
      },{
        message:"This is test version.",
        time:"2 days ago"
      },{
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time:"3 days ago"
      },{
        message:"Si alicui credis, credet et tibi.",
        time:"4 days ago"
      },{
        message:"Illic res est usquam. Quaeso ne dubita.",
        time:"5 days ago"
      }
    ]
  }
