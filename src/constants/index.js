 
 import{
    apple,
    doe,
    HamBars,
    close,
    iPhone12,
    macBookair,
    macBook12,
    iphone,
    applesupport,
    applelogo2,
    doe_in,
    BangsO,
    beats_buds,
    macbookpro14and16,
    iwatch_series,
    iwatch,
    iPhone_14pro,
    airpods
 } from '../assets';
 
 export const navLinks = [
    {
      id: "mac",
      title: "Mac",
      submenu:[
        {
            id:"view all ipad",
            title:"View all",
        },
        {
            id:"macbookpro",
            title:'MacBook Pro 14" and 16"',
        },
        {
            id:'macbook',
            title:'MacBook Pro 13" ',
        },
        {
            id:'macbookair',
            title:'MacBook Air"',
        },
        {
            id:'imac',
            title:'iMac',
        }
      ]
      
    },
    {
      id: "ipad",
      title: "iPad",
      submenu:[
        {
            id:"view all ipad",
            title:"View all",
        },
        {
            id:"ipadpro",
            title:'iPad Pro',
        },
        {
            id:'ipadair',
            title:'iPad Air"',
        },
        {
            id:'ipad',
            title:'iPad"',
        },
        {
            id:'ipadMini',
            title:'iPad Mini',
        }
      ]
    },
    {
      id: "iphone",
      title: "iPhone",
      submenu:[
        {
            id:"view all iphone",
            title:"View all",
        },
        {
            id:"iphone14",
            title:'iPhone 14',
        },
        {
            id:'iphone13',
            title:'iPhone 13"',
        },
        {
            id:'iphone 12',
            title:'iPhone 12',
        },
        {
            id:'iphonese',
            title:'iPhone SE',
        }
      ]
    },
    {
        id: "ipod",
        title: "iPod",
        submenu:[
            {
                id:"view all ipod",
                title:"View all",
            },
            {
                id:"ipodTouch",
                title:'iPod Touch',
            },
            
          ]
    },
    {
        id: "iwatch",
        title: "iWatch",
        submenu:[
            {
                id:"view all",
                title:"View all",
            },
            {
                id:"appleWatch SE",
                title:'Apple WatchSE',
            },
            
          ]
    },
    {
        id: "accessories",
        title: "Accessories",
        submenu:[
            {
                id:"mac",
                title:"Mac",
            },
            {
                id:"iphone",
                title:'iPhone',
            },
            {
                id:'ipod',
                title:'iPod',
            },
            {
                id:'beats',
                title:'Beats by Dre',
            },
            {
                id:'airpods',
                title:'Air pods',
            },
            {
                id:'B&o',
                title:'Bangs & Olufsen',
            },
            
            {
                id:'jbl',
                title:'JBL/Harman Kardon',
            },
            {
                id:'bose',
                title:'Bose',
            }
          ]
    },
     
    {
        id: "contact",
        title: "Contact/Support",

        
    },
]
const featuredProducts=[
    {
        products:"B&O",
        icon:BangsO
    },

    {
        products:"iWatch",
        icon:iwatch_series
    },

    {
        products:"Beats Buds",
        icon:beats_buds
    },
    {
        products:"MacBook 14 and 16",
        icon:macbookpro14and16
    },
    {
        products:"air pods",
        icon:airpods
    }
]

export{featuredProducts}