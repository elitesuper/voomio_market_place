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
    usermessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specnum: 33,
    imgs:[
      sampleimg,
    ]
  },{
    chatid:2,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs:[],
  },{
    chatid:3,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs:[],
  },{
    chatid:4,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    belongid:2,
    usermessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgs:[],
  },{
    chatid:5,
    username:"@user123789",
    useravatar:imgavatar,
    time:"Today @ 4:10",
    usermessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specnum: 33,
    imgs:[
      sampleimg,
    ]
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
