import shrimpimg from '../images/sealevel/shrimp.png';
import minnowimg from '../images/sealevel/minnow.png';
import seahorseimg from '../images/sealevel/seahorse.png';
import starfishimg from '../images/sealevel/starfish.png';
import lobsterimg from '../images/sealevel/lobster.png';
import kingcrabimg from '../images/sealevel/kingcrab.png';
import stingrayimg from '../images/sealevel/stingray.png';
import marlinimg from '../images/sealevel/marlin.png';
import dolphinimg from '../images/sealevel/dolphin.png';
import sharkimg from '../images/sealevel/shark.png';
import whaleimg from '../images/sealevel/whale.png';
import octopusimg from '../images/sealevel/octopus.png';

export const levels = [
	{
		id:1,
		name:"Shrimp",
		PTS:0,
		imgicon:shrimpimg
	},{
		id:2,
		name:"Minnow",
		PTS:5000,
		imgicon:minnowimg
	},{
		id:3,
		name:"Sea Horse",
		PTS:10000,
		imgicon:seahorseimg
	},{
		id:4,
		name:"Starfish",
		PTS:25000,
		imgicon:starfishimg
	},{
		id:5,
		name:"Lobster",
		PTS:40000,
		imgicon:lobsterimg
	},{
		id:6,
		name:"King Crab",
		PTS:70000,
		imgicon:kingcrabimg
	},{
		id:7,
		name:"String Ray",
		PTS:100000,
		imgicon:stingrayimg
	},{
		id:8,
		name:"Marlin",
		PTS:200000,
		imgicon:marlinimg
	},{
		id:9,
		name:"Dolphin",
		PTS:350000,
		imgicon:dolphinimg
	},	{
		id:10,
		name:"Shark",
		PTS:500000,
		imgicon:sharkimg
	},{
		id:11,
		name:"Whale",
		PTS:750000,
		imgicon:whaleimg
	},{
		id:12,
		name:"Octopus",
		PTS:1000000,
		imgicon:octopusimg
	},
]

export const pointsystems =[
	{
		type:"NFT",
		datas:[
			{
				id:"nft-1",
				pts:1000,
				desc:"List for sale: 50 per day at least 1, 7 days in a row"
			},
			{
				id:"nft-2",
				pts:1000,
				desc:"Sell: 50 per day at least 1, sell everyday for 7 days"
			},
			{
				id:"nft-3",
				pts:1000,
				desc:"Buy: At least 1 NFT 100, 7 in a row"
			}
		]
	},{
		type:"PROFILE",
		datas:[
			{
				id:"profile-1",
				pts:500,
				desc:"Connect your Twitter"
			},
			{
				id:"profile-2",
				pts:500,
				desc:"Connect your Instagram"
			},
			{
				id:"profile-3",
				pts:100,
				desc:"Set NFT as PFP (max once per month)"
			},
			{
				id:"profile-4",
				pts:100,
				desc:"Set NFT as Banner (max once per month)"
			}
		]
	},{
		type:"ACTIVITY",
		datas:[
			{
				id:"activity-1",
				pts:500,
				desc:"Wallet Connection, per Chain"
			},
			{
				id:"activity-2",
				pts:1,
				desc:"Gain Followers (max 40 PTS per month)"
			},
			{
				id:"activity-3",
				pts:1,
				desc:"Follow others (max 40 PTS per month)"
			},
			{
				id:"activity-4",
				pts:1,
				desc:"Leave a comment (max 200 PTS once per month)"
			},
			{
				id:"activity-5",
				pts:1000,
				desc:"Sign up for Voomio Emails"
			}
		]
	},
]