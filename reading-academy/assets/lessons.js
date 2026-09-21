const LESSONS = [
{
  title:"First code", focus:"s · a · t · p · i · n · m", outcome:"I can say clean sounds and blend simple CVC words.",
  review:[{w:"sat",c:"s • a • t"},{w:"sit",c:"s • i • t"},{w:"pin",c:"p • i • n"},{w:"tap",c:"t • a • p"},{w:"tin",c:"t • i • n"},{w:"nap",c:"n • a • p"}],
  sounds:[{g:"s",p:"/s/",cue:"snake sound — no extra vowel"},{g:"a",p:"/æ/",cue:"short open vowel: cat"},{g:"t",p:"/t/",cue:"quick tongue tap — not ‘tuh’"},{g:"p",p:"/p/",cue:"small air pop — not ‘puh’"},{g:"i",p:"/ɪ/",cue:"short relaxed vowel: sit"},{g:"n",p:"/n/",cue:"voice through the nose"},{g:"m",p:"/m/",cue:"lips together; keep the voice on"}],
  clinic:"Keep consonants pure: /s/ not ‘suh’, /t/ not ‘tuh’, /p/ not ‘puh’. Extra vowels make blending much harder.",
  blend:[{w:"sat",parts:"s • a • t",m:"сидел / сесть (форма sat)"},{w:"pin",parts:"p • i • n",m:"булавка"},{w:"tap",parts:"t • a • p",m:"постучать"},{w:"tin",parts:"t • i • n",m:"жестяная банка"},{w:"nap",parts:"n • a • p",m:"короткий сон"}],
  practice:{type:"choice",title:"Blend Detective",items:[
    {p:"s • a • t",o:["sat","sit","tap"],a:"sat",h:"Point left to right. Keep the sounds short."},
    {p:"p • i • n",o:["pan","pin","tin"],a:"pin",h:"The middle sound is /ɪ/."},
    {p:"t • a • p",o:["tap","tip","sat"],a:"tap",h:"Do not start from the whole word. Blend the three sounds."}
  ]},
  story:["A pin is in a tin.","Tim sat.","Sam sat."], patterns:[],
  comprehension:{q:"Where is the pin?",o:["in a tin","on Sam","in a bag"],a:"in a tin"},
  flash:["sat","pin","tin","nap"], extra:"Read: sip · pit · pan · pat · tan · tip. Then ask your tutor to make one silly two-word phrase."
},
{
  title:"Five short vowels", focus:"a · e · i · o · u", outcome:"I can hear and read the five common short vowel sounds in simple words.",
  review:[{w:"sat",c:"s • a • t"},{w:"pin",c:"p • i • n"},{w:"map",c:"m • a • p"},{w:"sit",c:"s • i • t"},{w:"tap",c:"t • a • p"},{w:"nap",c:"n • a • p"}],
  sounds:[{g:"a",p:"/æ/",cue:"cat"},{g:"e",p:"/e/",cue:"pen"},{g:"i",p:"/ɪ/",cue:"pig"},{g:"o",p:"/ɒ/",cue:"dog — British model"},{g:"u",p:"/ʌ/",cue:"sun"}],
  clinic:"Do not replace English short vowels with Russian vowel categories. Keep them short; exaggerate the contrast first, then return to natural speech.",
  blend:[{w:"cat",parts:"c • a • t",m:"кот"},{w:"pen",parts:"p • e • n",m:"ручка"},{w:"pig",parts:"p • i • g",m:"свинья"},{w:"dog",parts:"d • o • g",m:"собака"},{w:"sun",parts:"s • u • n",m:"солнце"}],
  practice:{type:"sort",title:"Vowel Switch",buckets:["a /æ/","e /e/","i /ɪ/","o /ɒ/","u /ʌ/"],items:[
    {w:"cat",c:"a /æ/"},{w:"pen",c:"e /e/"},{w:"pig",c:"i /ɪ/"},{w:"dog",c:"o /ɒ/"},{w:"sun",c:"u /ʌ/"},{w:"bed",c:"e /e/"},{w:"cup",c:"u /ʌ/"},{w:"hot",c:"o /ɒ/"},{w:"map",c:"a /æ/"},{w:"sit",c:"i /ɪ/"}
  ]},
  story:["The cat is on a red mat.","A dog is in the sun.","The pig is in a pen."],patterns:[],
  comprehension:{q:"Which animal is in a pen?",o:["the cat","the dog","the pig"],a:"the pig"},
  flash:["cat","pen","dog","sun"], extra:"Read the mini-chain: cat → cap → cup → pup → pop. Say what changed each time."
},
{
  title:"Two letters, one sound", focus:"sh · ch · th · ng · ck", outcome:"I can spot frequent digraphs and blend them as one sound unit.",
  review:[{w:"cat",c:"c • a • t"},{w:"pen",c:"p • e • n"},{w:"pig",c:"p • i • g"},{w:"dog",c:"d • o • g"},{w:"sun",c:"s • u • n"},{w:"bed",c:"b • e • d"}],
  sounds:[{g:"sh",p:"/ʃ/",cue:"ship"},{g:"ch",p:"/tʃ/",cue:"chip"},{g:"th",p:"/θ/",cue:"thin — no voice"},{g:"th",p:"/ð/",cue:"this — voice on"},{g:"ng",p:"/ŋ/",cue:"sing"},{g:"ck",p:"/k/",cue:"duck"}],
  clinic:"For TH, the tongue is lightly between the teeth. /θ/ has no voice; /ð/ uses voice. For NG, do not add a final /g/ in words like sing.",
  blend:[{w:"ship",parts:"sh • i • p",m:"корабль"},{w:"chip",parts:"ch • i • p",m:"чип / кусочек"},{w:"thin",parts:"th • i • n",m:"тонкий"},{w:"sing",parts:"s • i • ng",m:"петь"},{w:"duck",parts:"d • u • ck",m:"утка"}],
  practice:{type:"sort",title:"Digraph Detective",buckets:["sh","ch","th","ng","ck"],items:[
    {w:"ship",c:"sh"},{w:"fish",c:"sh"},{w:"chip",c:"ch"},{w:"lunch",c:"ch"},{w:"thin",c:"th"},{w:"this",c:"th"},{w:"sing",c:"ng"},{w:"king",c:"ng"},{w:"duck",c:"ck"},{w:"sock",c:"ck"}
  ]},
  story:["This duck is in the shop.","The duck has a red sock.","A fish is in the dish."],patterns:["sh","ch","th","ng","ck"],
  comprehension:{q:"What does the duck have?",o:["a red sock","a fish","a chip"],a:"a red sock"},
  flash:["ship","thin","sing","duck"], extra:"Ask your tutor: Say thin / this / thin / this. Touch your throat. Which one uses voice?"
},
{
  title:"Smooth blending", focus:"st · sp · bl · cl · fl · gr + w/v", outcome:"I can blend adjacent consonants without adding extra vowels.",
  review:[{w:"ship",c:"sh • i • p"},{w:"duck",c:"d • u • ck"},{w:"thin",c:"th • i • n"},{w:"sing",c:"s • i • ng"},{w:"fish",c:"f • i • sh"},{w:"sock",c:"s • o • ck"}],
  sounds:[{g:"st",p:"/s/ + /t/",cue:"two sounds: stop"},{g:"sp",p:"/s/ + /p/",cue:"two sounds: spin"},{g:"bl",p:"/b/ + /l/",cue:"two sounds: black"},{g:"cl",p:"/k/ + /l/",cue:"two sounds: clap"},{g:"fl",p:"/f/ + /l/",cue:"two sounds: flat"},{g:"w / v",p:"/w/ ≠ /v/",cue:"win ≠ van"}],
  clinic:"A consonant cluster is not one new sound. Keep each consonant, but do not insert a vowel: stop = /s-t-ɒ-p/, not ‘suh-top’. For /w/, round the lips; for /v/, top teeth touch the lower lip.",
  blend:[{w:"stop",parts:"s • t • o • p",m:"остановиться"},{w:"spin",parts:"s • p • i • n",m:"крутиться"},{w:"black",parts:"b • l • a • ck",m:"чёрный"},{w:"clap",parts:"c • l • a • p",m:"хлопать"},{w:"flat",parts:"f • l • a • t",m:"плоский"}],
  practice:{type:"choice",title:"How many sounds?",items:[
    {p:"stop",o:["3 sounds","4 sounds","5 sounds"],a:"4 sounds",h:"Count phonemes, not letters."},
    {p:"black",o:["3 sounds","4 sounds","5 sounds"],a:"4 sounds",h:"ck is one /k/ sound."},
    {p:"fish",o:["3 sounds","4 sounds","5 sounds"],a:"3 sounds",h:"sh is one sound."},
    {p:"spin",o:["3 sounds","4 sounds","5 sounds"],a:"4 sounds",h:"s and p stay separate."}
  ]},
  story:["A black frog is on a flat log.","It can swim.","It slips and drops in."],patterns:["st","sp","bl","cl","fl","gr"],
  comprehension:{q:"Where is the frog first?",o:["on a flat log","in a shop","on a bus"],a:"on a flat log"},
  flash:["stop","black","clap","swim"], extra:"W/V clinic: read win · van · wet · vet. Ask your tutor to cover their mouth: can you still hear the difference?"
},
{
  title:"Magic e switch", focus:"a_e · i_e · o_e · u_e", outcome:"I can use final e to predict a common long-vowel pattern.",
  review:[{w:"stop",c:"s • t • o • p"},{w:"black",c:"b • l • a • ck"},{w:"clap",c:"c • l • a • p"},{w:"swim",c:"s • w • i • m"},{w:"frog",c:"f • r • o • g"},{w:"flat",c:"f • l • a • t"}],
  sounds:[{g:"a_e",p:"/eɪ/",cue:"cap → cape"},{g:"i_e",p:"/aɪ/",cue:"kit → kite"},{g:"o_e",p:"/əʊ/",cue:"hop → hope"},{g:"u_e",p:"/juː/",cue:"cub → cube"}],
  clinic:"In these words the final e is usually silent, but it changes the vowel pattern. Teach the pattern as a whole, then compare short/long pairs.",
  blend:[{w:"cape",parts:"c • a_e • p",m:"накидка"},{w:"kite",parts:"k • i_e • t",m:"воздушный змей"},{w:"home",parts:"h • o_e • m",m:"дом"},{w:"cube",parts:"c • u_e • b",m:"куб"},{w:"game",parts:"g • a_e • m",m:"игра"}],
  practice:{type:"choice",title:"Flip the vowel",items:[
    {p:"cap → ?",o:["cape","cope","cup"],a:"cape",h:"Keep c and p. Add the split a_e pattern."},
    {p:"kit → ?",o:["kite","kate","cute"],a:"kite",h:"The middle vowel becomes /aɪ/."},
    {p:"hop → ?",o:["hope","heap","hip"],a:"hope",h:"Look for o_e."},
    {p:"cub → ?",o:["cube","cob","cab"],a:"cube",h:"Look for u_e."}
  ]},
  story:["Mike has a bike.","He can ride home.","He has a red kite."],patterns:["a_e","i_e","o_e","u_e"],
  comprehension:{q:"What is red?",o:["the bike","the kite","the home"],a:"the kite"},
  flash:["game","bike","home","cube"], extra:"Read the pairs: tap/tape · rid/ride · hop/hope. Explain the spelling change to your tutor."
},
{
  title:"Vowel teams I", focus:"ee / ea · ai / ay", outcome:"I can recognise two frequent ways to spell /iː/ and /eɪ/.",
  review:[{w:"game",c:"g • a_e • m"},{w:"bike",c:"b • i_e • k"},{w:"home",c:"h • o_e • m"},{w:"cube",c:"c • u_e • b"},{w:"kite",c:"k • i_e • t"},{w:"name",c:"n • a_e • m"}],
  sounds:[{g:"ee",p:"/iː/",cue:"see"},{g:"ea",p:"/iː/",cue:"eat"},{g:"ai",p:"/eɪ/",cue:"rain"},{g:"ay",p:"/eɪ/",cue:"day"}],
  clinic:"These are useful patterns, not universal rules. Read the whole word and store the spelling with the word. Keep /iː/ clearly long.",
  blend:[{w:"green",parts:"g • r • ee • n",m:"зелёный"},{w:"read",parts:"r • ea • d",m:"читать"},{w:"rain",parts:"r • ai • n",m:"дождь"},{w:"play",parts:"p • l • ay",m:"играть"},{w:"team",parts:"t • ea • m",m:"команда"}],
  practice:{type:"sort",title:"Pattern Port",buckets:["ee","ea","ai","ay"],items:[
    {w:"see",c:"ee"},{w:"tree",c:"ee"},{w:"green",c:"ee"},{w:"read",c:"ea"},{w:"eat",c:"ea"},{w:"team",c:"ea"},{w:"rain",c:"ai"},{w:"paint",c:"ai"},{w:"day",c:"ay"},{w:"play",c:"ay"},{w:"stay",c:"ay"}
  ]},
  story:["It is a rainy day.","Mia and Lee stay in.","They read and play a game."],patterns:["ee","ea","ai","ay"],
  comprehension:{q:"What do Mia and Lee do?",o:["read and play","ride a bike","go on a boat"],a:"read and play"},
  flash:["green","read","rain","play"], extra:"Make two columns on paper: /iː/ and /eɪ/. Add 3 words from this lesson to each sound."
},
{
  title:"Vowel teams II", focus:"oa / ow · oo /uː/ /ʊ/", outcome:"I can read common /əʊ/ spellings and check which sound oo has in a known word.",
  review:[{w:"green",c:"g • r • ee • n"},{w:"read",c:"r • ea • d"},{w:"rain",c:"r • ai • n"},{w:"play",c:"p • l • ay"},{w:"team",c:"t • ea • m"},{w:"day",c:"d • ay"}],
  sounds:[{g:"oa",p:"/əʊ/",cue:"boat"},{g:"ow",p:"/əʊ/",cue:"snow"},{g:"oo",p:"/uː/",cue:"moon"},{g:"oo",p:"/ʊ/",cue:"book"}],
  clinic:"OO has two common pronunciations. Do not force one rule. Learn the word with its sound: moon /uː/, book /ʊ/. For OW today we practise the /əʊ/ family only.",
  blend:[{w:"boat",parts:"b • oa • t",m:"лодка"},{w:"snow",parts:"s • n • ow",m:"снег"},{w:"moon",parts:"m • oo • n",m:"луна"},{w:"book",parts:"b • oo • k",m:"книга"},{w:"coat",parts:"c • oa • t",m:"пальто"}],
  practice:{type:"sort",title:"Four sound families",buckets:["oa /əʊ/","ow /əʊ/","oo /uː/","oo /ʊ/"],items:[
    {w:"boat",c:"oa /əʊ/"},{w:"coat",c:"oa /əʊ/"},{w:"road",c:"oa /əʊ/"},{w:"snow",c:"ow /əʊ/"},{w:"show",c:"ow /əʊ/"},{w:"yellow",c:"ow /əʊ/"},{w:"moon",c:"oo /uː/"},{w:"food",c:"oo /uː/"},{w:"room",c:"oo /uː/"},{w:"book",c:"oo /ʊ/"},{w:"look",c:"oo /ʊ/"},{w:"good",c:"oo /ʊ/"}
  ]},
  story:["Joe has a yellow coat.","He goes on a boat.","He looks at the moon."],patterns:["oa","ow","oo"],
  comprehension:{q:"What colour is Joe’s coat?",o:["yellow","green","red"],a:"yellow"},
  flash:["boat","snow","moon","book"], extra:"Read: room · book · food · look. Sort them by the two oo sounds without looking at the lesson."
},
{
  title:"Real reader mission", focus:"heart words + fluency + meaning", outcome:"I can read a short Pre-A1 text, use phonics first and recognise a small set of common exception words.",
  review:[{w:"bike",c:"b • i_e • k"},{w:"green",c:"g • r • ee • n"},{w:"play",c:"p • l • ay"},{w:"boat",c:"b • oa • t"},{w:"book",c:"b • oo • k"},{w:"ship",c:"sh • i • p"}],
  sounds:[{g:"the",p:"heart word",cue:"learn the whole spelling + pronunciation"},{g:"said",p:"heart word",cue:"regular s,d; unusual ai sound"},{g:"one",p:"heart word",cue:"does not follow the simple o_e pattern"},{g:"some",p:"heart word",cue:"common exception"},{g:"are",p:"heart word",cue:"high-frequency word"},{g:"was",p:"heart word",cue:"high-frequency word"}],
  clinic:"Use phonics first. For an exception word, identify the regular parts and remember only the surprising ‘heart’ part. Never teach every frequent word as a visual shape to guess.",
  blend:[{w:"friend",parts:"f • r • ie • n • d",m:"друг"},{w:"school",parts:"s • ch • oo • l",m:"школа"},{w:"said",parts:"heart word",m:"сказал / сказала"},{w:"one",parts:"heart word",m:"один"},{w:"some",parts:"heart word",m:"несколько / немного"}],
  practice:{type:"choice",title:"Heart-word check",items:[
    {p:"Which word is the common exception?",o:["said","rain","boat"],a:"said",h:"Rain and boat follow patterns from Lessons 6–7."},
    {p:"Which word has oo = /ʊ/?",o:["moon","book","food"],a:"book",h:"Think of the two oo families."},
    {p:"Which word uses a split digraph?",o:["home","green","ship"],a:"home",h:"Look for vowel + consonant + final e."},
    {p:"Which word has a digraph at the start?",o:["ship","stop","game"],a:"ship",h:"Two letters, one sound."}
  ]},
  story:["One day, Sam and Mia are at school.","Sam has a green book.","Mia said, ‘Come and read with me.’","They sit, read and smile.","It was a good day."],patterns:[],
  comprehension:{q:"What does Sam have?",o:["a green book","a yellow coat","a red kite"],a:"a green book"},
  flash:["said","one","some","school"], extra:"Cambridge-style transfer (not official material): read the story again and answer in ONE word — Where are Sam and Mia? ________"
}
];
