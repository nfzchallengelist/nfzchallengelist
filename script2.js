window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    //THE LIST !!!
    
    { name: 'silly goober area', id: '101574741', author: 'lunatism & iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/OoO4I_R3F5k', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/50000.mp3', type: 'Challenge' },

    { name: 'PINEAPPLEUPSIDEDOWN', id: '93081214', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/2SJF8UDYw9M', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/22222.mp3', type: 'Challenge' },
    
    { name: 'MGSSMITMCHASTSEBBTGA', id: '103024910', author: 'BekahFan82', verifier: 'BekahFan82', videoUrl: 'https://youtu.be/Ih6UNtTfGT8', songUrl:'', type: 'Challenge' },

    { name: 'mc Inaw RT quT22', id: '97388724', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/OKdBUATmHd8', songUrl:'', type: 'Challenge' },
    
    { name: '3Si is Dead', id: '95573883', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/xyI-hFyE47I', songUrl:'', type: 'Challenge' },

    { name: 'Throwing Flashbang', id: '101576176', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=Alr4rs1Ug3g', songUrl:'', type: 'Challenge' },
    
    { name: 'Q', id: '93045504', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/mq6NkJ49cso', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/667198.mp3', type: 'Challenge' },

    { name: 'Hello Bro', id: '102874314', author: 'lunatism', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/x6Ewq5xnd1E', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1192265.mp3', type: 'Challenge' },

    { name: 'RASAtone', id: '10164821', author: 'Tortellini', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/vPIwIH-cJ1s', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/11313.mp3', type: 'Challenge' },

    { name: 'CYBERGIRL', id: '101377264', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/7lCxgFR1HrY', songUrl:'', type: 'Challenge' },
    
    { name: 'never take yourself', id: '92575160', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/lKSkVU1WS2s', songUrl:'', type: 'Challenge' },

    { name: 'Dollr 78', id: '102123679', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/U5Kc4gwLNxI', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1228352.mp3', type: 'Challenge' },
    
    { name: 'Streamline', id: '95921211', author: 'HyetalL', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/iTzSRvHPsEo', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/67368.mp3', type: 'Challenge' },
    
    { name: 'otakemo dansu', id: '92591135', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/dy5XfrS6ngw', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/572268.mp3', type: 'Challenge' },

    { name: 'ermm Awkward', id: '102533575', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/sA4X_lYUACI', songUrl:'', type: 'Challenge' },

    { name: '3 SECOND FINLEY', id: '102480578', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/6sy6uxADudM', songUrl:'', type: 'Challenge' },
    
    { name: 'monter ONE HUNDRED', id: '98201570', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://www.youtube.com/watch?v=hhseQlpFHe4', songUrl:'', type: 'Challenge' },

    { name: 'Pale Ball in the Sky', id: '93235300', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/D-BLEt7Rob0', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1082232.mp3', type: 'Challenge' },

    { name: 'Crystal Meth X', id: '103004684', author: 'HyetalL', verifier: 'EllieFan28', videoUrl: 'https://youtu.be/Q2suBfGY1rk', songUrl:'', type: 'Challenge' },
    
    { name: 'ROYGBIV', id: '102175129', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/IV-ujq9tRmc', songUrl:'', type: 'Challenge' },
    
    { name: '1 seconds ache', id: '93302141', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/vmCTbD8g5Hc', songUrl:'', type: 'Challenge' },

    { name: 'hologram circus', id: '102877260', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/JT63mDISgrg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/767365.mp3', type: 'Challenge' },

    { name: 'Rasa NFZ Edition', id: '103541842', author: 'BekahFan82', verifier: 'BekahFan82', videoUrl: 'https://youtu.be/PDDlQ2VP7sw', songUrl:'', type: 'Challenge' },

    { name: 'fubuki', id: '102756426', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/BXOgzijUc-I', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/739959.mp3', type: 'Challenge' },

    { name: 'Dantes Inferno', id: '99683393', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/eq6PGWcyUSg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/758448.mp3', type: 'Challenge' },

    { name: 'PEEP', id: '92116696', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/JfLPnRfMVRE', songUrl:'', type: 'Challenge' },
    
    { name: 'misr beis burgr', id: '92545202', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ON8q6T2Qmmo', songUrl:'', type: 'Challenge' },
    
    { name: 'ACHE', id: '92030106', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/Pqk_4qR_5-M', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/818027.mp3', type: 'Challenge' },
    
    { name: '  BITTER  ', id: '102297237', author: 'iamfinley', verifier: 'lunatism', videoUrl: 'https://youtu.be/3V31u7ftrPU', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1229890.mp3', type: 'Challenge' },

    { name: 'blind S', id: '102519547', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/W7B_iExMBr8', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/375303.mp3', type: 'Challenge' },

    { name: 'nenenenenenenene', id: '103016104', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/JggBPdJpdcY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/124614.mp3', type: 'Challenge' },
    
    { name: 'Shinu', id: '94807515', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v-kjDdP-CKg', songUrl:'', type: 'Challenge' },

    { name: 'owens', id: '102764790', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/_kSu8YzkVHY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/213318.mp3', type: 'Challenge' },
    
    { name: 'SHAMELESS', id: '92635514', author: 'iamfinleyy', verifier: 'rinjello', videoUrl: 'https://youtu.be/t7vqWLtMO5o', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/35353.mp3', type: 'Challenge' },
    
    { name: 'forgotten', id: '93240831', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/2ibS2zQLW98', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/509162.mp3', type: 'Challenge' },

    { name: 'do u', id: '102866711', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/m7UzTpSvSWw', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/635452.mp3', type: 'Challenge' },
    
    { name: 'ON THE DANCE FLOOR', id: '97098955', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/26cLLP6iYaU?si=ukqYBCEC52dPYSqK', songUrl:'', type: 'Challenge' },
    
    { name: '3 second roxor', id: '92433126', author: 'iamfinleyy', verifier: 'Speedmanman', videoUrl: 'https://youtu.be/44PAFVgFRa8', songUrl:'', type: 'Challenge' },
   
    { name: 'WOWee', id: '92059623', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/lVBndG76UdY', songUrl:'', type: 'Challenge' },
    
    { name: 'Leaves', id: '97306244', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://www.youtube.com/watch?v=PpOP9tZtmmY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/421244.mp3', type: 'Challenge' },
    
    { name: 'airborne', id: '92186881', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/8bqC1GO6BIs', songUrl:'', type: 'Challenge' },

    { name: 'soarer', id: '97265119', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://www.youtube.com/watch?v=Dpk1yA5o5ps', songUrl:'', type: 'Challenge' },
 
    { name: 'Based Penguins', id: '92024672', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://www.youtube.com/watch?v=xOTNT1yq4wI', songUrl:'', type: 'Challenge' },
    
    { name: 'hello legacy list', id: '97793177', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/GHjVik7TLq0?si=lqixS0LFX36VYRq8', songUrl:'', type: 'Challenge' },

    { name: 'blend S', id: '102455213', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/XB11VQGLvpo', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/375303.mp3', type: 'Challenge' },

    { name: 'silent', id: '102188940', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/QMe90XsK684', songUrl:'', type: 'Challenge' },

    { name: 'GIRL HELL 1999', id: '103088356', author: 'rinjello', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/mcupPSRBE54', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/63.mp3', type: 'Challenge' },
    
    { name: 'The Frozen Crypt', id: '95212065', author: 'Hectorien', verifier: 'HyetalL', videoUrl: 'https://youtu.be/0pSzZDgeaCM', songUrl:'', type: 'Challenge' },
    
    { name: '4 seconds icremrob', id: '93302229', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/mXbGVM0FXrk', songUrl:'', type: 'Challenge' },
       
    { name: 'dohiyoer is dead', id: '97448225', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/DvfybjTpRkI', songUrl:'', type: 'Challenge' },

    // EXTENDED LIST 
    
    { name: 'Zpinhg', id: '102059403', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/DNdb79wDajc?si=iS47bjdjBG6cKhJrv', songUrl:'', type: 'Challenge' },
    
    { name: 'SPACK', id: '92147966', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/0MmxMthPf04', songUrl:'', type: 'Challenge' },
    
    { name: '3 second jello', id: '93201795', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=oUG37s7jnBY', songUrl:'', type: 'Challenge' },
  
    { name: 'meta fight back', id: '100786753', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/XyzzqLqijlI', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/599036.mp3', type: 'Challenge' },
               
    { name: 'Elijahs Funhouse', id: '102301277', author: 'EllieFan28', verifier: 'EllieFan28', videoUrl: 'https://youtu.be/SbQx5RUBlpw', songUrl:'', type: 'Challenge' },
    
    { name: 'STARRY SUNSET', id: '101576722', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/atONAiI-KMg', songUrl:'', type: 'Challenge' },
    
    { name: 'Acheloos', id: '93991257', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v38Lpv_8Hmk', songUrl:'', type: 'Challenge' },
    
    { name: 'CGHALLEGNE 4 FINLEY', id: '101697470', author: 'lunatism', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/7oj8zNUAo2Q', songUrl:'', type: 'Challenge' },
    
    { name: 'owo', id: '92690170', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/vPvRNoYdU7I', songUrl:'', type: 'Challenge' },
   
    { name: 'Under Heroine I', id: '92182309', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/4cK_ZNj7D7c', songUrl: 'https://cdn.discordapp.com/attachments/965511410287259650/1126300422714433556/203958.mp3?ex=660dec82&is=65fb7782&hm=87ede7ff368cba6dfa46aa571281b9d3a882fa4b8c5842cae885170a059ce990&', type: 'Challenge' },

    { name: 'UTMANING', id: '92265300', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/7wgGPKZvCyQ', songUrl:'', type: 'Challenge' },
    
    { name: 'supa girl racer', id: '102597018', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/I_g4KHYA4iM', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1.mp3', type: 'Challenge' }, 
    
    { name: 'JeanPaulEtSesBonAmis', id: '92486595', author: 'BekahFan82', verifier: 'BekahFan82', videoUrl: 'https://youtu.be/LzN-D9z1BsM', songUrl:'', type: 'Challenge' },
    
    { name: 'MudPuddle', id: '101815269', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/HYdo1PPwISY', songUrl:'', type: 'Challenge' },  
    
    { name: '3 seconds icremrob', id: '92107867', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/LVHez78-neE', songUrl:'', type: 'Challenge' },

    { name: 'FREE taCO SalaD', id: '103258614', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/SOMOlx_ra9M', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/24235.mp3', type: 'Challenge' },
    
    { name: 'KILLER', id: '92146539', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/JLkMh7-xyMA', songUrl:'', type: 'Challenge' },
    
    { name: 'paranoid', id: '103413511', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/z-QcQdP7KRE?si=e-I2AMv5R_zeUCoO', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/23861.mp3', type: 'Challenge' },
    
    { name: 'NOFUTURETERROR', id: '92062723', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/dqM7Ll6FNKY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/380587.mp3', type: 'Challenge' },

    { name: 'DeMode Ship', id: '102993733', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/hMa9p3rdZPQ', songUrl:'', type: 'Challenge' },
    
    { name: 'Loona Mayor', id: '102376285', author: 'iamfinleyy', verifier: 'lunatism', videoUrl: 'https://youtu.be/n50xO0AJlik', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/944600.mp3', type: 'Challenge' },

    { name: 'summit 3', id: '101829250', author: 'Zkasper', verifier: 'Zkasper', videoUrl: 'https://www.youtube.com/watch?v=iKiZZNOkWSs', songUrl:'', type: 'Challenge' },
    
    { name: 'walnut', id: '100748201', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/ET9dEbh6k70', songUrl:'', type: 'Challenge' },

    { name: '3 second hector', id: '93411036', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/HUO1LtLDpIU', songUrl:'', type: 'Challenge' },

    { name: 'Banned', id: '103323903', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/6koz2RVuuXU', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/10003210.mp3', type: 'Challenge' },
    
    { name: 'Acheron Noclip 2', id: '98047767', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/JAyO3mzq7Yg', songUrl:'', type: 'Challenge' },

    { name: 'Figure It Out', id: '102421994', author: 'iamfinleyy', verifier: 'EllieFan28', videoUrl: 'https://youtu.be/0mOkMdb7FSc', songUrl:'', type: 'Challenge' },

    { name: 'ne uchi', id: '102953276', author: 'martijn07', verifier: 'martijn07', videoUrl: 'https://youtu.be/YT2l9ZILNfY', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1095412.mp3', type: 'Challenge' },
    
    { name: 'Thinley', id: '102332969', author: 'iamfinleyy', verifier: 'rinjello', videoUrl: 'https://youtu.be/zQTd_3_Gp2A', songUrl:'', type: 'Challenge' },   
    
    { name: 'xobama', id: '92020976', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/Jovw88VaXuY', songUrl:'', type: 'Challenge' },
    
    { name: 'we can rest now', id: '97129065', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/CvX5aM0B3yg', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/-49452.mp3', type: 'Challenge' },
    
    { name: 'lgbt quiz', id: '93168829', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=eWegyQUVyuI', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/818027.mp3', type: 'Challenge' },
    
    { name: 'im sorry', id: '92267104', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/h5IFr2s3IyU', songUrl:'', type: 'Challenge' },
    
    { name: 'floater', id: '92118988', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/QXjNe8sHeUk', songUrl:'', type: 'Challenge' },
    
    { name: '8  pm chsallenge', id: '92748808', author: 'lunatism', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/rOpTlFJZM8o', songUrl:'', type: 'Challenge' },

    { name: 'nfzcls', id: '92036087', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/ScPaEm-5HME', songUrl:'', type: 'Challenge' },
    
    { name: 'idk im bored', id: '96256691', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=xChN8VjJA7A', songUrl:'', type: 'Challenge' },

    { name: 'bday challenge', id: '95310118', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/Hgge5EZPT-s?si=I3CGB_ajVy4krWqN', songUrl:'', type: 'Challenge' },
    
    { name: 'Devilish Alcoholic', id: '101383870', author: 'HyetalL', verifier: 'HyetalL', videoUrl: 'https://youtu.be/MeLtGa4o7Dc?si=IMbpEBYpT9VR37GA', songUrl:'', type: 'Challenge' },
    
    { name: 'Youll Be Gone', id: '102422448', author: 'Speedmanman & EllieFan28', verifier: 'Speedmanman', videoUrl: 'https://youtu.be/FNIYjsYeu4E', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/158965.mp3', type: 'Challenge' },

    { name: 'w hat am i doing', id: '102539366', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/yWPLe7CGPcM', songUrl:'', type: 'Challenge' },
    
    { name: 'Miss Tick', id: '97238047', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/RyvLx7MLB8k', songUrl:'', type: 'Challenge' },

    { name: 'WeetabiX', id: '101917735', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/p5Xt2inViRQ', songUrl:'', type: 'Challenge' },

    { name: 'Elijahs Number', id: '102190066', author: 'iamfinleyy', verifier: 'BekahFan82', videoUrl: 'https://youtu.be/d6BpqdoBc1Q', songUrl:'', type: 'Challenge' },
    
    { name: '24hr iamfinley chalk', id: '100976162', author: 'DrigeOrDraig', verifier: 'DrigeOrDraig', videoUrl: 'https://youtu.be/xke2YYdLQJU', songUrl:'', type: 'Challenge' },
    
    { name: 'Wase MasE', id: '92126003', author: 'Cubangaming1', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/gJfQNreLhBU', songUrl:'', type: 'Challenge' },

    { name: 'DeMode Wave', id: '101660635', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ua9EQCpjjak', songUrl:'', type: 'Challenge' },

    { name: 'surrender the throne', id: '101558967', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/wVJEa1P3lU0', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/1271915.mp3', type: 'Challenge' },

    { name: 'john jonson chal', id: '103263223', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/eyuf2fs_oK0', songUrl:'', type: 'Challenge' },
    
    { name: 'TURBO', id: '101446495', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://www.youtube.com/watch?v=A9Jl_S37GlM', songUrl:'https://github.com/nfzchallengelist/nfzchallengelist.github.io/raw/main/nongs/503544.mp3', type: 'Challenge' }
    
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
