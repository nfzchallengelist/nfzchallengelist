window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    //THE LIST !!!!

    { name: 'Chromium', id: '111230305', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/pDwnU8nTHfk', songUrl:'', type: 'Challenge' },

    { name: 'Stratus', id: '112018114', author: 'lunatism & iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/60XK5d78tdQ', songUrl:'', type: 'Challenge' },
    
    { name: 'Steel', id: '108166595', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/Q0sWjIuOUlc', songUrl:'', type: 'Challenge' },

    { name: 'HAWK TUAH POOKIE', id: '112380395', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://www.youtube.com/watch?v=0xRu-8lnHAY', songUrl:'', type: 'Challenge' },
    
    { name: 'silly goober area', id: '101574741', author: 'lunatism & iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/OoO4I_R3F5k', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/50000.mp3', type: 'Challenge' },

    { name: 'mc Inaw RT quT22', id: '97388724', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/OKdBUATmHd8', songUrl:'', type: 'Challenge' },

    { name: 'STING', id: '103865963', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/13rYMxWreVM', songUrl:'', type: 'Challenge' },
    
    { name: 'VANITAS', id: '105938507', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/Z8n3W11Ulm0', songUrl:'', type: 'Challenge' },

    { name: 'scrinpoingchallenge2', id: '113286244', author: 'DJ_', verifier: 'DJ_', videoUrl: 'https://youtu.be/FBwi-7GgT50', songUrl:'', type: 'Challenge' },

    { name: 'PINEAPPLEUPSIDEDOWN', id: '93081214', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/2SJF8UDYw9M', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/22222.mp3', type: 'Challenge' },
    
    { name: 'grumbo circles', id: '112130433', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://www.youtube.com/watch?v=G6-WQA9HZuE', songUrl:'', type: 'Challenge' },

    { name: 'IMPOSSIBLE SPAM', id: '60714354', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/DplCWtDi9iw', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/refs/heads/main/nongs/805997.mp3', type: 'Challenge' },
    
    { name: 'MGSSMITMCHASTSEBBTGA', id: '103024910', author: 'Elijah', verifier: 'Elijah', videoUrl: 'https://youtu.be/Ih6UNtTfGT8', songUrl:'', type: 'Challenge' },

    { name: 'GDACHE CHALLENGE', id: '109049853', author: 'lunatismm & Elijah', verifier: 'iandoggie', videoUrl: 'https://youtu.be/UwP8DPTy1h0', songUrl:'', type: 'Challenge' },

    { name: 'Unnamed 0', id: '81660662', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/y9KIE_D9Rxo', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1131108.mp3', type: 'Challenge' },

    { name: 'Q', id: '93045504', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/mq6NkJ49cso', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/667198.mp3', type: 'Challenge' },

    { name: 'Throwing Flashbang', id: '101576176', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=Alr4rs1Ug3g', songUrl:'', type: 'Challenge' },

    { name: 'moldy bread', id: '109462448', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/uzIzIcdIzLE', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/refs/heads/main/nongs/5000019.mp3', type: 'Challenge' },

    { name: 'ship granddad', id: '112155345', author: 'Icecreamrib & lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/KdTh_IFZOhI', songUrl:'', type: 'Challenge' },
    
    { name: '3Si is Dead', id: '95573883', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/xyI-hFyE47I', songUrl:'', type: 'Challenge' },
    
    { name: 'Hello Bro', id: '102874314', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/x6Ewq5xnd1E', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1192265.mp3', type: 'Challenge' },

    { name: 'RASAtone', id: '101648218', author: 'Tortellini', verifier: 'iamfinley', videoUrl: 'https://youtu.be/vPIwIH-cJ1s', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/11313.mp3', type: 'Challenge' },

    { name: 'Floor Demon', id: '109762602', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/5sHQE6w3-2I', songUrl:'', type: 'Challenge' },

    { name: 'wave practice', id: '109435107', author: 'lunatism', verifier: 'lunatism', videoUrl: 'novideo', songUrl:'', type: 'Challenge' },
    
    { name: 'CYBERGIRL', id: '101377264', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/7lCxgFR1HrY', songUrl:'', type: 'Challenge' },
    
    { name: 'never take yourself', id: '92575160', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/lKSkVU1WS2s', songUrl:'', type: 'Challenge' },

    { name: 'Dollr 78', id: '102123679', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/U5Kc4gwLNxI', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1228352.mp3', type: 'Challenge' },
    
    { name: 'blue clapper', id: '105173148', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/rt6FbTNqHFg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/85448.mp3', type: 'Challenge' },
    
    { name: 'Streamline', id: '95921211', author: 'HyetalL', verifier: 'iamfinley', videoUrl: 'https://youtu.be/iTzSRvHPsEo', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/67368.mp3', type: 'Challenge' },
    
    { name: '1 seconds ache', id: '93302141', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/vmCTbD8g5Hc', songUrl:'', type: 'Challenge' },
    
    { name: 'otakemo dansu', id: '92591135', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/dy5XfrS6ngw', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/572268.mp3', type: 'Challenge' },
    
    { name: 'ermm Awkward', id: '102533575', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/sA4X_lYUACI', songUrl:'', type: 'Challenge' },

    { name: 'expectations', id: '109788390', author: 'Icecreamrib', verifier: 'iamfinley', videoUrl: 'https://youtu.be/nzUoHQJ6o-Y?si=JDL_PkcStYXMP55P', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/refs/heads/main/nongs/3233.mp3', type: 'Challenge' },
    
    { name: 'Place', id: '109115961', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/532g8Kts_uw', songUrl:'', type: 'Challenge' },

    { name: '3 SECOND FINLEY', id: '102480578', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/6sy6uxADudM', songUrl:'', type: 'Challenge' },
    
    { name: 'o neko', id: '104388452', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/v1BzCGH6SZA', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1105168.mp3', type: 'Challenge' },
    
    { name: 'mises bis borgar', id: '103541842', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/eAhz8wvlP9g', songUrl:'', type: 'Challenge' },
    
    { name: 'monter ONE HUNDRED', id: '98201570', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://www.youtube.com/watch?v=hhseQlpFHe4', songUrl:'', type: 'Challenge' },

    { name: 'lagtrain', id: '104943322', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/sO6AdfH_wC4', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1302114.mp3', type: 'Challenge' },

    { name: 'Tahanene', id: '103592746', author: 'Cubangaming1', verifier: 'iamfinley', videoUrl: 'https://youtu.be/GT1O4cxQJKI', songUrl:'', type: 'Challenge' },
    
    { name: 'Crystal Meth X', id: '103004684', author: 'HyetalL', verifier: 'MartijnFan99', videoUrl: 'https://youtu.be/Q2suBfGY1rk', songUrl:'', type: 'Challenge' },

    { name: 'Estrelar', id: '111877932', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/8oY3eaBPvA8', songUrl:'', type: 'Challenge' },
  
    { name: 'Shower X', id: '110151581', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'no video', songUrl:'', type: 'Challenge' },
    
    { name: 'Pale Ball in the Sky', id: '93235300', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/D-BLEt7Rob0', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1082232.mp3', type: 'Challenge' },

    { name: 'Mini SeanDu X', id: '112855619', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/M9UHByxJNdM?si=nnsjqvzfM1huExyF', songUrl:'', type: 'Challenge' },
 
    { name: 'ROYGBIV', id: '102175129', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/IV-ujq9tRmc', songUrl:'', type: 'Challenge' },

    { name: 'UTMANING II', id: '107856675', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/UqZCxG9VbUg', songUrl:'', type: 'Challenge' },
   
    { name: 'Rasa NFZ Edition', id: '103389425', author: 'Elijah', verifier: 'Elijah', videoUrl: 'https://youtu.be/PDDlQ2VP7sw', songUrl:'', type: 'Challenge' },

    { name: '45 Cows', id: '104266867', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/zPs_FP5sD_4', songUrl:'', type: 'Challenge' },
    
    { name: 'MURDER', id: '104009041', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/aytLnqf8xs4', songUrl:'', type: 'Challenge' },
   
    { name: 'hologram circus', id: '102877260', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/JT63mDISgrg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/767365.mp3', type: 'Challenge' },

    { name: 'fubuki', id: '102756426', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/BXOgzijUc-I', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/739959.mp3', type: 'Challenge' },
    
    { name: 'wachu gonna do', id: '103613180', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/dxQ3kw660ek', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/812814.mp3', type: 'Challenge' },
    
    { name: '  BITTER  ', id: '102297237', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/3V31u7ftrPU', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1229890.mp3', type: 'Challenge' },

     { name: 'breakout redux redux', id: '108738784', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/61Re4_TS9h0', songUrl:'', type: 'Challenge' },

    { name: 'Jimmy bob94   Yuppp', id: '112865040', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/syATDowLQnA?si=VEIO5yUJdMlTURJC', songUrl:'', type: 'Challenge' },

    { name: '3 second flamewall', id: '104212895', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/ikdOfNcS48Y', songUrl:'', type: 'Challenge' },

    { name: 'Dantes Inferno', id: '99683393', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/eq6PGWcyUSg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/758448.mp3', type: 'Challenge' },

    { name: 'EVIL 3si', id: '109073906', author: 'iamfinley & Icecreamrib', verifier: 'iamfinley', videoUrl: 'https://youtu.be/4XLYM4AErLI', songUrl:'', type: 'Challenge' },
    
    { name: 'blind S', id: '102519547', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/W7B_iExMBr8', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/375303.mp3', type: 'Challenge' },
    
    { name: 'weird challenge ig 2', id: '105585763', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/qhrz2PaJMZg', songUrl:'', type: 'Challenge' },
 
    { name: 'PEEP', id: '92116696', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/JfLPnRfMVRE', songUrl:'', type: 'Challenge' },
  
    { name: 'bass slug', id: '107805103', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/PfL6rhjLRdg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1203358.mp3', type: 'Challenge' },
    
    { name: 'Lunar Ascent', id: '103667292', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/lnQTS_1Kczs', songUrl:'', type: 'Challenge' },
    
    { name: 'misr beis burgr', id: '92545202', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ON8q6T2Qmmo', songUrl:'', type: 'Challenge' },
    
    { name: 'ACHE', id: '92030106', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/Pqk_4qR_5-M', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/818027.mp3', type: 'Challenge' },
 
    { name: 'im so brazy', id: '104179317', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/b8qU7zNwo-g', songUrl:'', type: 'Challenge' },

    { name: 'Machinery', id: '109205312', author: 'bloxyyt & lunatismm', verifier: 'bloxyyt', videoUrl: 'https://youtu.be/Das48nHYyUo', songUrl:'', type: 'Challenge' },

    { name: 'Radius', id: '107147932', author: 'lunatismm', verifier: 'lunatismm', videoUrl: 'https://youtu.be/rhH6NUbxxnw', songUrl:'', type: 'Challenge' },
    
    { name: 'nenenenenenenene', id: '103016104', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/JggBPdJpdcY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/124614.mp3', type: 'Challenge' },
    
    { name: 'Shinu', id: '94807515', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v-kjDdP-CKg', songUrl:'', type: 'Challenge' },

    { name: 'ULTIMATE fart2', id: '111071164', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/0hBbTu8QMc0', songUrl:'', type: 'Challenge' },

    { name: '3sWhy', id: '108899957', author: 'iamfinley & Icecreamrib', verifier: 'iamfinley', videoUrl: 'https://youtu.be/mKGCrdGClso', songUrl:'', type: 'Challenge' },

    { name: 'owens', id: '102764790', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/_kSu8YzkVHY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/213318.mp3', type: 'Challenge' },
    
    { name: 'hello legacy list', id: '97793177', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/GHjVik7TLq0?si=lqixS0LFX36VYRq8', songUrl:'', type: 'Challenge' },

    { name: 'Xtraalos', id: '108626982', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/SXXVMlf5yEc', songUrl:'', type: 'Challenge' },
    
    { name: 'waltz', id: '108536068', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/j8cDYqueX4E', songUrl:'', type: 'Challenge' },
    
    { name: 'soarer', id: '97265119', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://www.youtube.com/watch?v=Dpk1yA5o5ps', songUrl:'', type: 'Challenge' },

    { name: 'silly adventures', id: '109358049', author: 'lunatism', verifier: 'lunatism', videoUrl: 'novideo', songUrl:'', type: 'Challenge' },

    { name: 'Digya', id: '104012821', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/I3-UeHFZoeM', songUrl:'', type: 'Challenge' },
    
    { name: 'SHAMELESS', id: '92635514', author: 'iamfinley', verifier: 'rinjello', videoUrl: 'https://youtu.be/t7vqWLtMO5o', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/35353.mp3', type: 'Challenge' },
    
    { name: 'forgotten', id: '107187358', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/2ibS2zQLW98', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/509162.mp3', type: 'Challenge' },
    
    { name: 'ON THE DANCE FLOOR', id: '97098955', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/26cLLP6iYaU?si=ukqYBCEC52dPYSqK', songUrl:'', type: 'Challenge' },
   
    { name: '3 second roxor', id: '92433126', author: 'iamfinley', verifier: 'iandoggie', videoUrl: 'https://youtu.be/44PAFVgFRa8', songUrl:'', type: 'Challenge' },
   
    { name: 'WOWee', id: '92059623', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/lVBndG76UdY', songUrl:'', type: 'Challenge' },

    { name: 'do u', id: '102866711', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/m7UzTpSvSWw', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/635452.mp3', type: 'Challenge' },
    
    { name: 'costco breakin', id: '108626644', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/p35KUQLHa54', songUrl:'', type: 'Challenge' },

    { name: 'Modest Simon', id: '110789981', author: 'nykolol', verifier: 'nykolol', videoUrl: 'https://youtu.be/i6ummXeFUps', songUrl:'', type: 'Challenge' },
    
    { name: 'Leaves', id: '97306244', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://www.youtube.com/watch?v=PpOP9tZtmmY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/421244.mp3', type: 'Challenge' },
    
    { name: 'airborne', id: '92186881', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/8bqC1GO6BIs', songUrl:'', type: 'Challenge' },
    
    { name: 'blend S', id: '102455213', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/XB11VQGLvpo', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/375303.mp3', type: 'Challenge' },

    { name: 'silent', id: '102188940', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/QMe90XsK684', songUrl:'', type: 'Challenge' },

    { name: 'GIRL HELL 1999', id: '107187409', author: 'rinjello', verifier: 'iamfinley', videoUrl: 'https://youtu.be/mcupPSRBE54', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/63.mp3', type: 'Challenge' },

    { name: 'pingkschtro po', id: '106881328', author: 'lunatismm', verifier: 'iamfinley', videoUrl: 'https://youtu.be/1KkFmeUsuXE', songUrl:'', type: 'Challenge' },
    
    { name: '4 seconds icremrob', id: '93302229', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/mXbGVM0FXrk', songUrl:'', type: 'Challenge' },
 
    { name: 'Based Penguins', id: '92024672', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://www.youtube.com/watch?v=xOTNT1yq4wI', songUrl:'', type: 'Challenge' },
    
    { name: 'Acheronhouse 82', id: '108405549', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/8YVQOiBzOh0', songUrl:'', type: 'Challenge' },
       
    { name: 'dohiyoer is dead', id: '97448225', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/DvfybjTpRkI', songUrl:'', type: 'Challenge' },
    
    { name: 'Zpinhg', id: '102059403', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/DNdb79wDajc?si=iS47bjdjBG6cKhJrv', songUrl:'', type: 'Challenge' },
    
    { name: 'SPACK', id: '92147966', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/0MmxMthPf04', songUrl:'', type: 'Challenge' },
    
    { name: '3 second jello', id: '107187597', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=oUG37s7jnBY', songUrl:'', type: 'Challenge' },
  
    { name: 'meta fight back', id: '100786753', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/XyzzqLqijlI', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/599036.mp3', type: 'Challenge' },
    
    { name: 'Elijahs Funhouse', id: '102301277', author: 'MartijnFan99', verifier: 'MartijnFan99', videoUrl: 'https://youtu.be/SbQx5RUBlpw', songUrl:'', type: 'Challenge' },
    
    { name: 'STARRY SUNSET', id: '101576722', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/atONAiI-KMg', songUrl:'', type: 'Challenge' },
    
    { name: 'Acheloos', id: '93991257', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v38Lpv_8Hmk', songUrl:'', type: 'Challenge' },

    { name: 'The Frozen Crypt', id: '95212065', author: 'Hectorien', verifier: 'HyetalL', videoUrl: 'https://youtu.be/0pSzZDgeaCM', songUrl:'', type: 'Challenge' },
    
    { name: 'ITNWOTF', id: '104305608', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/7HDrdia-LX4', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1116734.mp3', type: 'Challenge' },

    { name: 'ebola', id: '109534605', author: 'nykolol', verifier: 'iamfinley', videoUrl: 'https://youtu.be/B2yYhxb2vYo', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/466362.mp3', type: 'Challenge' },

    { name: 'CGHALLEGNE 4 FINLEY', id: '101697470', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/7oj8zNUAo2Q', songUrl:'', type: 'Challenge' },

    { name: 'The BOUNCYHOUSE', id: '109131261', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/X9V9l49lXp8', songUrl:'', type: 'Challenge' },
  
    { name: 'challenge by linnea', id: '107131356', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/TQhwEz9Jgx0', songUrl:'', type: 'Challenge' },
      
    { name: 'owo', id: '92690170', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/vPvRNoYdU7I', songUrl:'', type: 'Challenge' },

    { name: 'wave time', id: '90144148', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/zWRtEH9i2n4', songUrl:'', type: 'Challenge' },

    { name: 'Osamason circles', id: '105937345', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/igw8FMY-llM', songUrl: 'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/4231.mp3', type: 'Challenge' },

    { name: 'Under Heroine I', id: '92182309', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/4cK_ZNj7D7c', songUrl: 'https://cdn.discordapp.com/attachments/965511410287259650/1126300422714433556/203958.mp3?ex=660dec82&is=65fb7782&hm=87ede7ff368cba6dfa46aa571281b9d3a882fa4b8c5842cae885170a059ce990&', type: 'Challenge' },

    { name: 'UTMANING', id: '92265300', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/7wgGPKZvCyQ', songUrl:'', type: 'Challenge' },

    { name: 'Cargotics', id: '108046012', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/e82nAyKaqrQ', songUrl:'', type: 'Challenge' },
    
    { name: 'supa girl racer', id: '107187928', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/I_g4KHYA4iM', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1.mp3', type: 'Challenge' }, 

    { name: 'DeMode Ship', id: '102993733', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/hMa9p3rdZPQ', songUrl:'', type: 'Challenge' },
    
    { name: 'JeanPaulEtSesBonAmis', id: '92486595', author: 'Elijah', verifier: 'Elijah', videoUrl: 'https://youtu.be/LzN-D9z1BsM', songUrl:'', type: 'Challenge' },
 
    { name: 'BornTheJohnnyWay', id: '108899006', author: 'iamfinley & bloxyyt', verifier: 'iamfinley', videoUrl: 'https://youtu.be/dlIHSnxMvX8', songUrl:'', type: 'Challenge' },

    { name: 'Rimming and Timming', id: '105267749', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/TbC_qAqmiy0', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/906615.mp3', type: 'Challenge' },
    
    { name: 'MudPuddle', id: '101815269', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/HYdo1PPwISY', songUrl:'', type: 'Challenge' },  

    { name: 'Meet me in Grenville', id: '104233454', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/UFbtNoijKuY', songUrl:'', type: 'Challenge' },

    { name: '3 seconds icremrob', id: '92107867', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/LVHez78-neE', songUrl:'', type: 'Challenge' },

    { name: '5 MINUTE CHALLENGE', id: '108802022', author: 'lunatismm', verifier: 'lunatiamm', videoUrl: 'https://youtu.be/OzqWxrobNUk', songUrl:'', type: 'Challenge' },

    { name: 'FREE taCO SalaD', id: '103258614', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/SOMOlx_ra9M', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/24235.mp3', type: 'Challenge' },

    { name: 'Exit Or JohnSean Lmk', id: '109876743', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'video', songUrl:'', type: 'Challenge' },

    { name: '     space     ', id: '84450638', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/HvL5RSKUq20', songUrl:'', type: 'Challenge' },
 
    { name: 'the xfinley burger', id: '110175488', author: 'nykolol', verifier: 'iamfinley', videoUrl: 'video', songUrl:'', type: 'Challenge' },
    
    { name: 'KILLER', id: '92146539', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/JLkMh7-xyMA', songUrl:'', type: 'Challenge' },
    
    { name: 'PARANOID', id: '103413511', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/z-QcQdP7KRE?si=e-I2AMv5R_zeUCoO', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/23861.mp3', type: 'Challenge' },
    
    { name: 'NOFUTURETERROR', id: '92062723', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/dqM7Ll6FNKY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/380587.mp3', type: 'Challenge' },

    { name: 'im naked', id: '107923432', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/V1CV5oca-DQ', songUrl:'', type: 'Challenge' },
    
    { name: 'Loona Mayor', id: '102376285', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/n50xO0AJlik', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/944600.mp3', type: 'Challenge' },
    
    { name: 'summit 3', id: '101829250', author: 'Zkasper', verifier: 'Zkasper', videoUrl: 'https://www.youtube.com/watch?v=iKiZZNOkWSs', songUrl:'', type: 'Challenge' },
    
    { name: 'walnut', id: '100748201', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/ET9dEbh6k70', songUrl:'', type: 'Challenge' },

    { name: 'halfduck', id: '107140609', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/jRCfmr6-a_c', songUrl:'', type: 'Challenge' },

    { name: 'Banned', id: '103323903', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/6koz2RVuuXU', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/10003210.mp3', type: 'Challenge' },

    { name: 'Figure It Out', id: '102421994', author: 'iamfinley', verifier: 'MartijnFan99', videoUrl: 'https://youtu.be/0mOkMdb7FSc', songUrl:'', type: 'Challenge' },

    { name: '3 second hector', id: '93411036', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/HUO1LtLDpIU', songUrl:'', type: 'Challenge' },
  
    { name: 'ne uchi', id: '102953276', author: 'martijn07', verifier: 'martijn07', videoUrl: 'https://youtu.be/YT2l9ZILNfY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1095412.mp3', type: 'Challenge' },
    
    { name: 'Thinley', id: '102332969', author: 'iamfinley', verifier: 'rinjello', videoUrl: 'https://youtu.be/zQTd_3_Gp2A', songUrl:'', type: 'Challenge' },   
    
    { name: 'xobama', id: '92020976', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/Jovw88VaXuY', songUrl:'', type: 'Challenge' },
    
    { name: 'we can rest now', id: '97129065', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/CvX5aM0B3yg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/-49452.mp3', type: 'Challenge' },

    { name: 'the boffle house', id: '110607610', author: 'nykolol', verifier: 'nykolol', videoUrl: 'novideo', songUrl:'', type: 'Challenge' },
   
    { name: 'lgbt quiz', id: '109537358', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=eWegyQUVyuI', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/818027.mp3', type: 'Challenge' },
    
    { name: 'im sorry', id: '92267104', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/h5IFr2s3IyU', songUrl:'', type: 'Challenge' },
    
    { name: 'floater', id: '92118988', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/QXjNe8sHeUk', songUrl:'', type: 'Challenge' },
    
    { name: '8  pm chsallenge', id: '92748808', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/rOpTlFJZM8o', songUrl:'', type: 'Challenge' },

    { name: 'nfzcls', id: '92036087', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/ScPaEm-5HME', songUrl:'', type: 'Challenge' },

    { name: 'Acheron Noclip 2', id: '98047767', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/JAyO3mzq7Yg', songUrl:'', type: 'Challenge' },
    
    { name: 'FRUIT NEVER CLEAR', id: '108370965', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/03v4U-NoPp4', songUrl:'', type: 'Challenge' },
   
    { name: 'Take Me Away', id: '108174518', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/owOOCP_mS5w', songUrl:'', type: 'Challenge' },

    { name: 'king c burgers chall', id: '109485011', author: 'nykolol', verifier: 'nykolol', videoUrl: 'https://youtu.be/Uf1AblixIgw', songUrl:'', type: 'Challenge' },
    
    { name: 'KIRB', id: '103492485', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/VcXfTgEy3Go', songUrl:'', type: 'Challenge' },
    
    { name: 'idk im bored', id: '107187959', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=xChN8VjJA7A', songUrl:'', type: 'Challenge' },

    { name: 'bday challenge', id: '95310118', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/Hgge5EZPT-s?si=I3CGB_ajVy4krWqN', songUrl:'', type: 'Challenge' },
    
    { name: 'Devilish Alcoholic', id: '101383870', author: 'HyetalL', verifier: 'HyetalL', videoUrl: 'https://youtu.be/MeLtGa4o7Dc?si=IMbpEBYpT9VR37GA', songUrl:'', type: 'Challenge' },
    
    { name: 'Youll Be Gone', id: '102422448', author: 'iandoggie & MartijnFan99', verifier: 'iandoggie', videoUrl: 'https://youtu.be/FNIYjsYeu4E', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/158965.mp3', type: 'Challenge' },

    { name: 'w hat am i doing', id: '102539366', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/yWPLe7CGPcM', songUrl:'', type: 'Challenge' },

    { name: 'Stomp', id: '104058867', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/tIGaeE40hIs', songUrl:'', type: 'Challenge' },

    { name: 'Miss Tick', id: '97238047', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/RyvLx7MLB8k', songUrl:'', type: 'Challenge' },

    { name: 'WeetabiX', id: '101917735', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/p5Xt2inViRQ', songUrl:'', type: 'Challenge' },
    
    { name: 'DeMode Wave', id: '101660635', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ua9EQCpjjak', songUrl:'', type: 'Challenge' },
    
    { name: 'Elijahs Number', id: '102190066', author: 'iamfinley', verifier: 'Elijah', videoUrl: 'https://youtu.be/d6BpqdoBc1Q', songUrl:'', type: 'Challenge' },
    
    { name: '24hr iamfinley chalk', id: '100976162', author: 'DrigeOrDraig', verifier: 'DrigeOrDraig', videoUrl: 'https://youtu.be/xke2YYdLQJU', songUrl:'', type: 'Challenge' },

    { name: 'bubby drop', id: '108651928', author: 'lunatismm', verifier: 'lunatismm', videoUrl: 'https://youtu.be/JTyRYbZGldo', songUrl:'', type: 'Challenge' },
    
    { name: 'Wase MasE', id: '92126003', author: 'Cubangaming1', verifier: 'iamfinley', videoUrl: 'https://youtu.be/gJfQNreLhBU', songUrl:'', type: 'Challenge' },
    
    { name: 'TURBO', id: '101446495', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://www.youtube.com/watch?v=A9Jl_S37GlM', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/503544.mp3', type: 'Challenge' },

    { name: 'toolsix challenge', id: '82111517', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/SQAoRdgNung', songUrl:'', type: 'Challenge' },

    { name: 'surrender the throne', id: '101558967', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/wVJEa1P3lU0', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1271915.mp3', type: 'Challenge' },

    { name: '10 jump barry', id: '107447596', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/29InDlnQ3Rw', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/761394.mp3', type: 'Challenge' },
  
    { name: 'john jonson chal', id: '103263223', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/eyuf2fs_oK0', songUrl:'', type: 'Challenge' },
    
    { name: 'Cobra', id: '92521006', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://youtu.be/njChUxU7418', songUrl:'', type: 'Challenge' },
    
    { name: 'a m level', id: '92521006', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ZPOzJATQO2k', songUrl:'', type: 'Challenge' },
    
    { name: 'SNITCHes Get sTICHES', id: '93145754', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/9EFxqiC0v3g', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/930302.mp3', type: 'Challenge' },

    { name: 'yea same bro', id: '101888877', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/1Wl_d4GNnVM', songUrl:'', type: 'Challenge' },
    
    { name: '7 CLICK BAERSTARD', id: '92021716', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/ZVQzNANy_Ik', songUrl:'', type: 'Challenge' },

    { name: 'h  Afg', id: '102516347', author: 'lunatism & iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/7-OhaQqjpGw', songUrl:'', type: 'Challenge' },
    
    { name: 'and or is milk', id: '93085309', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=cI5Ux3MQcwc', songUrl:'', type: 'Challenge' },
   
    { name: 'Bla9y W GO7', id: '93212972', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/NHoW-xtndmY', songUrl:'', type: 'Challenge' },

    { name: 'tje among', id: '102336747', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/OcdOioFU-Q0', songUrl:'', type: 'Challenge' },
    
    { name: 'maybe the hard', id: '92003489', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/SZw5maq_6ZA', songUrl:'', type: 'Challenge' },
    
    { name: 'Doggie Challenge 22', id: '97567598', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/zjlZNVIXZN8', songUrl:'', type: 'Challenge' },

    { name: 'Tasty Challenge', id: '107964223', author: 'lunatism', verifier: 'iamfinley', videoUrl: 'https://youtu.be/d4e3VjKsyXI', songUrl:'', type: 'Challenge' },
    
    { name: 'Himalayan SeaSalt', id: '101968419', author: 'Zkasper', verifier: 'Zkasper', videoUrl: 'https://www.youtube.com/watch?v=kD4soqQfU2k', songUrl:'', type: 'Challenge' },
    
    { name: 'diego aint clearing', id: '92059623', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/K_c02JMp48g', songUrl:'', type: 'Challenge' },
    
    { name: 'Get it Together', id: '92035976', author: 'Shadowpan69420', verifier: 'iamfinley', videoUrl: 'videourl', songUrl:'', type: 'Challenge' },  

    { name: 'super fartbreaker 49', id: '100788855', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'https://youtu.be/-VuPf2fsv0E', songUrl:'', type: 'Challenge' },
   
    { name: 'actual', id: '92054335', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/xDwMBFhVIk0', songUrl:'', type: 'Challenge' },
    
    { name: 'Dohiyoer', id: '97334410', author: 'OWOSHA', verifier: 'OWOSHA', videoUrl: 'videourl', songUrl:'', type: 'Challenge' },
   
    { name: 'check general', id: '97683510', author: 'EllieFan28', verifier: 'EllieFan28', videoUrl: 'https://youtu.be/UldAfQ9zsiw', songUrl:'', type: 'Challenge' },
  
    { name: 'fauxureta', id: '92003404', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
 
    { name: 'the Thingimajig', id: '101440099', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/sSCXBO-7470', songUrl:'', type: 'Challenge' },
    
    { name: 'grandma parkinson', id: '101391857', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/C6dyWA2V-sI', songUrl:'', type: 'Challenge' },
    
    { name: 'mobiel chalng', id: '102070782', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/mBfSBJ7XhPY', songUrl:'', type: 'Challenge' },
    
    { name: 'WTFdohiyoWTF', id: '97375482', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/iXu3G6CAMX0', songUrl:'', type: 'Challenge' },
    
    { name: 'finlerstackdurrrrrrr', id: '92064848', author: 'Tortellini', verifier: 'Tortellini', videoUrl: 'videourl', songUrl:'', type: 'Challenge' }, 
    
    { name: '5  am chsallenge', id: '92610835', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/J2tZdz6rQHk', songUrl:'', type: 'Challenge' },
    
    { name: 'up and down mode', id: '97415982', author: 'lunatism', verifier: 'lunatism', videoUrl: 'videourl', songUrl:'', type: 'Challenge' },

    { name: 'you bresidied it', id: '85358151', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/sxd2Ve_AKvI', songUrl:'', type: 'Challenge' },
    
    { name: 'OHHidoyhoyo', id: '101832346', author: 'iamfinley', verifier: 'KiaraDoggie', videoUrl: 'https://www.youtube.com/watch?v=3r1o01zROB4', songUrl:'', type: 'Challenge' },
    
    { name: 'they call me messer', id: '97716826', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://youtu.be/rD3Mo59_XTw', songUrl:'', type: 'Challenge' },
    
    { name: 'hello extended list', id: '93122627', author: 'lunatism', verifier: 'lunatism', videoUrl: 'videourl', songUrl:'', type: 'Challenge' },
  
    { name: 'core bore glore', id: '92126842', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'shipyp chamber', id: '96919048', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'videourl', songUrl:'', type: 'Challenge' },
    
    { name: 'switchy twitchy', id: '95259509', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=uWxLqb5CNVI', songUrl:'', type: 'Challenge' },
    
    { name: '3  am chsallenge', id: '102030953', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/IxgS7spcqpM', songUrl:'', type: 'Challenge' },
    
    { name: 'Sonic Wave Infinity', id: '97128437', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/Zv-vzQP4JRo', songUrl:'', type: 'Challenge' },
    
    { name: 'if i were a rock', id: '101571607', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/W2tEmwDKX2I', songUrl:'', type: 'Challenge' },

    { name: '3 second REAL', id: '97128437', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/plNiGf-Bnl8', songUrl:'', type: 'Challenge' },

    { name: 'finley ohio trip', id: '92202872', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
  
    { name: 'jundice 2', id: '95815064', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },

    { name: 'p oo', id: '95815064', author: 'lunatismm', verifier: 'lunatismm', videoUrl: 'https://youtu.be/0A1-rLY4KqE', songUrl:'', type: 'Challenge' },
    
    { name: 'microclick hell', id: '92127106', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
     {name: 'spider but not', id: '98051806', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/JR9r4RX6o6E', songUrl:'', type: 'Challenge' },
    
    { name: 'los demonicos extrem', id: '97595421', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/qJ1P6tv0YbI', songUrl:'', type: 'Challenge' },
    
    { name: 'gurkin', id: '95873564', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'brosinf', id: '94206441', author: 'jaundiceplier', verifier: 'iamfinley', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
     { name: '3 click hector', id: '95956602', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/4I0kL7_x7aQ', songUrl:'', type: 'Challenge' },

    { name: 'Greg', id: '95244928', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/TYGCov-nurY', songUrl:'', type: 'Challenge' },
    
    { name: '4  am chsallenge', id: '92668659', author: 'lunatism', verifier: 'lunatism', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'hi but not hi by krm', id: '93350188', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/EgUD8EYINrI', songUrl:'', type: 'Challenge' },
    
    { name: 'if i were a fish', id: '93197387', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'https://youtu.be/270zfAHp_Vg', songUrl:'', type: 'Challenge' },
    
    { name: '2  am chsallenge', id: '92491018', author: 'lunatism', verifier: 'lunatism', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'TheWholeWorldAndYou', id: '92081453', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: '2 POINT 2 IS OUT', id: '97457554', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },

    { name: 'EXTREEME DEMON', id: '97522511', author: 'lunatism', verifier: 'lunatism', videoUrl: 'videourl', songUrl:'', type: 'Challenge' },
    
    { name: 'dohiyo is dead', id: '92096970', author: 'Shadowpan69420 & iamfinley', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'the first ever', id: '92002834', author: 'iamfinley', verifier: 'iamfinley', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },

    { name: 'jundice 1', id: '93447664', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'The Finley', id: '92550525', author: 'lunatism', verifier: 'lunatism', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'grim cut the ace', id: '92002827', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'Dohiyosmell', id: '92066186', author: 'iamfinley & ache', verifier: 'ache', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'ian747563', id: '92066186', author: 'KiaraDoggie', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },

    { name: 'Dohiyo', id: '92026674', author: 'iamfinley', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },

    { name: 'Amazingchallenge1', id: '92035699', author: 'Donkey', verifier: 'iamfinley', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },

    { name: 'finley go usacolon 3', id: '92003494', author: 'KiaraDoggie', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },

    { name: 'NoFinleyZone Challen', id: '92026897', author: 'Greysonn', verifier: 'Greysonn', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'top 1 easy', id: '92591808', author: 'lunatism', verifier: 'lunatism', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'hardest challenbge', id: '92593859', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', songUrl:'', type: 'Challenge' },
    
    { name: 'fcuk you ben', id: '97155742', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/t_WmytBqquM', songUrl:'', type: 'Challenge' },

    { name: 'EASY FINALE', id: '111428550', author: 'lunatism', verifier: 'lunatism', videoUrl: 'novideo', songUrl:'', type: 'Challenge' }
    
    
    //don't put a comma at the end of the last level... or you will Die !!!!!!!
    
  ];

  var challengeList = document.getElementById('challengeList');

  levels.forEach(function(level, index) {
    var listItem = document.createElement('div');
    listItem.classList.add('list-item');
    var listNumber = document.createElement('div');
    listNumber.classList.add('list-number');
    listNumber.textContent = '#' + (index + 1);
    var listThumbnail = document.createElement('div');
    listThumbnail.classList.add('list-thumbnail');
    listThumbnail.style.pointerEvents = 'none'; // Add this line
    var thumbnailLink = document.createElement('a');
    thumbnailLink.href = level.videoUrl;
    thumbnailLink.target = '_blank';
    var thumbnailImage = document.createElement('img');
    thumbnailImage.classList.add('list-image');
    thumbnailImage.alt = 'Level thumbnail';
    var videoId = extractVideoId(level.videoUrl);
    var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg';
    thumbnailImage.src = thumbnailUrl;
    thumbnailLink.appendChild(thumbnailImage);
    listThumbnail.appendChild(thumbnailLink);
    var listInfo = document.createElement('div');
    listInfo.classList.add('list-info');
    var levelName = document.createElement('p');
    levelName.classList.add('level-name');
    levelName.textContent = level.name;
    listInfo.appendChild(levelName);
    listItem.appendChild(listNumber);
    listItem.appendChild(listThumbnail);
    listItem.appendChild(listInfo);
    challengeList.appendChild(listItem);

  
// Display the popup
listItem.addEventListener('click', function() {
  // Get the video ID from the video URL
  var videoId = extractVideoId(levels[index].videoUrl);

  // Create the iframe element for the embedded video
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + videoId;
  iframe.width = '560';
  iframe.height = '315';
  iframe.frameborder = '0';
  iframe.allowfullscreen = true;
  iframe.style.border = 'none';
  iframe.style.borderRadius = "10px";

  // Get the popup element
  var popup = document.getElementById('popup');

  // Clear the existing content of 'popup-video'
  var popupVideo = document.getElementById('popup-video');
  popupVideo.innerHTML = '';

  // Append the iframe to the popup video
  popupVideo.appendChild(iframe);

  // Populate the popup with the corresponding information
  document.getElementById('popup-name').textContent = levels[index].name;
  document.getElementById('popup-id').textContent = levels[index].id;
  document.getElementById('popup-author').textContent = levels[index].author;
  document.getElementById('popup-verifier').textContent = levels[index].verifier;
  document.getElementById('popup-song').textContent = levels[index].songUrl;

  // Display the popup
  popup.classList.add('visible');

  // Check if songUrl is present and not empty before displaying the button
  if (levels[index].songUrl && levels[index].songUrl.trim() !== "") {
    var songButton = document.getElementById('popup-song');
    songButton.textContent = "Download NONG"; // Set custom text for the button
    songButton.addEventListener('click', function() {
      window.open(levels[index].songUrl, '_self');
    });
    songButton.style.display = '';
  } else {
    // Hide the button if songUrl is empty or not provided
    var songButton = document.getElementById('popup-song');
    songButton.style.display = 'none';
  }

});

// Close the popup when the close button is clicked
document.getElementById('popup-close').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.classList.remove('visible');

  // Get the iframe element
  var iframe = document.getElementById('popup-video').querySelector('iframe');

  // Pause the video and reset the source
  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  iframe.src = '';
});

  function extractVideoId(url) {
    var match = url.match(/(?:[?&]v=|\/embed\/|\/\d\/|\/vi\/|youtu\.be\/|\/embed\/|\/\d\/|\/vi\/)([^#&?/]+)/i);
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }
})});
