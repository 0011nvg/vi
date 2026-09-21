const LESSONS = [
{
  title:"Первый код · First code", focus:"s · a · t · p · i · n · m", outcome:"Я могу произносить чистые звуки и склеивать простые CVC-слова.",
  review:[{w:"sat",c:"s • a • t"},{w:"sit",c:"s • i • t"},{w:"pin",c:"p • i • n"},{w:"tap",c:"t • a • p"},{w:"tin",c:"t • i • n"},{w:"nap",c:"n • a • p"}],
  sounds:[{g:"s",p:"/s/",cue:"как шипение змеи — без добавочного гласного"},{g:"a",p:"/æ/",cue:"короткий открытый звук, как в cat"},{g:"t",p:"/t/",cue:"короткий звук кончиком языка — не «тэ» и не «та»"},{g:"p",p:"/p/",cue:"короткий воздушный толчок — не «пэ»"},{g:"i",p:"/ɪ/",cue:"короткий расслабленный звук, как в sit"},{g:"n",p:"/n/",cue:"голос идёт через нос"},{g:"m",p:"/m/",cue:"губы вместе, голос продолжается"}],
  clinic:"На старте особенно важно не добавлять после согласных лишний гласный. /s/, /t/, /p/ произносим коротко и чисто: добавочный звук мешает ребёнку склеивать слово.",
  blend:[{w:"sat",parts:"s • a • t",m:"сидел / сесть (форма sat)"},{w:"pin",parts:"p • i • n",m:"булавка"},{w:"tap",parts:"t • a • p",m:"постучать"},{w:"tin",parts:"t • i • n",m:"жестяная банка"},{w:"nap",parts:"n • a • p",m:"короткий сон"}],
  practice:{type:"choice",title:"Code Lock · Кодовый замок",gameNote:"Открой код: прочитай звуковую дорожку и выбери слово.",items:[
    {p:"s • a • t",o:["sat","sit","tap"],a:"sat",h:"Веди пальцем слева направо и не растягивай паузы между звуками."},
    {p:"p • i • n",o:["pan","pin","tin"],a:"pin",h:"Середина слова — короткий /ɪ/."},
    {p:"t • a • p",o:["tap","tip","sat"],a:"tap",h:"Не угадывай слово целиком. Склей три звука."}
  ]},
  story:["A pin is in a tin.","Tim sat.","Sam sat."], patterns:[],
  comprehension:{q:"Where is the pin?",o:["in a tin","on Sam","in a bag"],a:"in a tin"},
  flash:["sat","pin","tin","nap"], extra:"Прочитай: sip · pit · pan · pat · tan · tip. Затем попроси учителя составить из знакомых слов смешную короткую фразу."
},
{
  title:"Короткие гласные · Short vowels", focus:"a · e · i · o · u", outcome:"Я различаю и читаю пять частых коротких гласных в простых словах.",
  review:[{w:"sat",c:"s • a • t"},{w:"pin",c:"p • i • n"},{w:"map",c:"m • a • p"},{w:"sit",c:"s • i • t"},{w:"tap",c:"t • a • p"},{w:"nap",c:"n • a • p"}],
  sounds:[{g:"a",p:"/æ/",cue:"cat"},{g:"e",p:"/e/",cue:"pen"},{g:"i",p:"/ɪ/",cue:"pig"},{g:"o",p:"/ɒ/",cue:"dog — британская модель"},{g:"u",p:"/ʌ/",cue:"sun"}],
  clinic:"Не подменяем английские короткие гласные привычными русскими. Сначала полезно сделать контраст чуть заметнее, а затем вернуться к естественному звучанию.",
  blend:[{w:"cat",parts:"c • a • t",m:"кот"},{w:"pen",parts:"p • e • n",m:"ручка"},{w:"pig",parts:"p • i • g",m:"свинья"},{w:"dog",parts:"d • o • g",m:"собака"},{w:"sun",parts:"s • u • n",m:"солнце"}],
  practice:{type:"sort",title:"Vowel Switch · Переключатель гласных",gameNote:"Перетащи смыслом, а не угадыванием: прочитай слово и отправь его к правильному гласному.",buckets:["a /æ/","e /e/","i /ɪ/","o /ɒ/","u /ʌ/"],items:[
    {w:"cat",c:"a /æ/"},{w:"pen",c:"e /e/"},{w:"pig",c:"i /ɪ/"},{w:"dog",c:"o /ɒ/"},{w:"sun",c:"u /ʌ/"},{w:"bed",c:"e /e/"},{w:"cup",c:"u /ʌ/"},{w:"hot",c:"o /ɒ/"},{w:"map",c:"a /æ/"},{w:"sit",c:"i /ɪ/"}
  ]},
  story:["The cat is on a red mat.","A dog is in the sun.","The pig is in a pen."],patterns:[],
  comprehension:{q:"Which animal is in a pen?",o:["the cat","the dog","the pig"],a:"the pig"},
  flash:["cat","pen","dog","sun"], extra:"Прочитай цепочку cat → cap → cup → pup → pop. После каждого шага скажи, что именно изменилось: одна буква, один звук или оба."
},
{
  title:"Две буквы — один звук", focus:"sh · ch · th · ng · ck", outcome:"Я узнаю частые диграфы и читаю их как одну звуковую единицу.",
  review:[{w:"cat",c:"c • a • t"},{w:"pen",c:"p • e • n"},{w:"pig",c:"p • i • g"},{w:"dog",c:"d • o • g"},{w:"sun",c:"s • u • n"},{w:"bed",c:"b • e • d"}],
  sounds:[{g:"sh",p:"/ʃ/",cue:"ship"},{g:"ch",p:"/tʃ/",cue:"chip"},{g:"th",p:"/θ/",cue:"thin — без голоса"},{g:"th",p:"/ð/",cue:"this — с голосом"},{g:"ng",p:"/ŋ/",cue:"sing"},{g:"ck",p:"/k/",cue:"duck"}],
  clinic:"Для TH кончик языка слегка выходит между зубами: /θ/ произносим без голоса, /ð/ — с голосом. В sing не добавляем в конце отдельный /g/.",
  blend:[{w:"ship",parts:"sh • i • p",m:"корабль"},{w:"chip",parts:"ch • i • p",m:"чип / кусочек"},{w:"thin",parts:"th • i • n",m:"тонкий"},{w:"sing",parts:"s • i • ng",m:"петь"},{w:"duck",parts:"d • u • ck",m:"утка"}],
  practice:{type:"memory",title:"Digraph Memory · Память диграфов",gameNote:"Открой две карточки. Пара засчитывается, если слово совпадает с его буквенным кодом.",pairs:[
    {word:"ship",code:"sh"},{word:"chip",code:"ch"},{word:"thin",code:"th"},{word:"sing",code:"ng"},{word:"duck",code:"ck"}
  ]},
  story:["This duck is in the shop.","The duck has a red sock.","A fish is in the dish."],patterns:["sh","ch","th","ng","ck"],
  comprehension:{q:"What does the duck have?",o:["a red sock","a fish","a chip"],a:"a red sock"},
  flash:["ship","thin","sing","duck"], extra:"Произнеси thin / this / thin / this и положи пальцы на горло. Где появляется голос? Объясни учителю одним коротким правилом."
},
{
  title:"Плавное склеивание", focus:"st · sp · bl · cl · fl · gr + w/v", outcome:"Я склеиваю соседние согласные без вставленного гласного.",
  review:[{w:"ship",c:"sh • i • p"},{w:"duck",c:"d • u • ck"},{w:"thin",c:"th • i • n"},{w:"sing",c:"s • i • ng"},{w:"fish",c:"f • i • sh"},{w:"sock",c:"s • o • ck"}],
  sounds:[{g:"st",p:"/s/ + /t/",cue:"два звука: stop"},{g:"sp",p:"/s/ + /p/",cue:"два звука: spin"},{g:"bl",p:"/b/ + /l/",cue:"два звука: black"},{g:"cl",p:"/k/ + /l/",cue:"два звука: clap"},{g:"fl",p:"/f/ + /l/",cue:"два звука: flat"},{g:"w / v",p:"/w/ ≠ /v/",cue:"win ≠ van"}],
  clinic:"Сочетание согласных — это не новый единый звук. Сохраняем каждый согласный, но не вставляем между ними гласный: stop = /s-t-ɒ-p/. Для /w/ губы округляются, для /v/ верхние зубы касаются нижней губы.",
  blend:[{w:"stop",parts:"s • t • o • p",m:"остановиться"},{w:"spin",parts:"s • p • i • n",m:"крутиться"},{w:"black",parts:"b • l • a • ck",m:"чёрный"},{w:"clap",parts:"c • l • a • p",m:"хлопать"},{w:"flat",parts:"f • l • a • t",m:"плоский"}],
  practice:{type:"choice",title:"Sound Scanner · Сканер звуков",gameNote:"Просканируй слово и посчитай именно звуки, а не буквы.",items:[
    {p:"stop",o:["3 sounds","4 sounds","5 sounds"],a:"4 sounds",h:"Считай фонемы: s + t + o + p."},
    {p:"black",o:["3 sounds","4 sounds","5 sounds"],a:"4 sounds",h:"ck передаёт один звук /k/."},
    {p:"fish",o:["3 sounds","4 sounds","5 sounds"],a:"3 sounds",h:"sh — один звук."},
    {p:"spin",o:["3 sounds","4 sounds","5 sounds"],a:"4 sounds",h:"s и p остаются двумя отдельными звуками."}
  ]},
  story:["A black frog is on a flat log.","It can swim.","It slips and drops in."],patterns:["st","sp","bl","cl","fl","gr"],
  comprehension:{q:"Where is the frog first?",o:["on a flat log","in a shop","on a bus"],a:"on a flat log"},
  flash:["stop","black","clap","swim"], extra:"Мини-клиника W/V: прочитай win · van · wet · vet. Попроси учителя закрыть нижнюю часть лица листом: можешь ли ты услышать разницу без визуальной подсказки?"
},
{
  title:"Magic e · переключатель гласной", focus:"a_e · i_e · o_e · u_e", outcome:"Я узнаю частый шаблон с финальной e и меняю чтение гласной.",
  review:[{w:"stop",c:"s • t • o • p"},{w:"black",c:"b • l • a • ck"},{w:"clap",c:"c • l • a • p"},{w:"swim",c:"s • w • i • m"},{w:"frog",c:"f • r • o • g"},{w:"flat",c:"f • l • a • t"}],
  sounds:[{g:"a_e",p:"/eɪ/",cue:"cap → cape"},{g:"i_e",p:"/aɪ/",cue:"kit → kite"},{g:"o_e",p:"/əʊ/",cue:"hop → hope"},{g:"u_e",p:"/juː/",cue:"cub → cube"}],
  clinic:"В этих словах финальная e обычно не произносится отдельно, но меняет шаблон чтения гласной. Полезно сравнивать короткие пары: cap/cape, kit/kite, hop/hope.",
  blend:[{w:"cape",parts:"c • a_e • p",m:"накидка"},{w:"kite",parts:"k • i_e • t",m:"воздушный змей"},{w:"home",parts:"h • o_e • m",m:"дом"},{w:"cube",parts:"c • u_e • b",m:"куб"},{w:"game",parts:"g • a_e • m",m:"игра"}],
  practice:{type:"transform",title:"Word Transformer · Трансформатор слов",gameNote:"Добавь финальную e и найди новое слово. После ответа прочитай обе формы вслух.",items:[
    {from:"cap",to:"cape",options:["cape","cope","cup"],hint:"Сохрани c и p. Добавь шаблон a_e."},
    {from:"kit",to:"kite",options:["kite","kate","cute"],hint:"Гласная меняется на /aɪ/."},
    {from:"hop",to:"hope",options:["hope","heap","hip"],hint:"Ищи шаблон o_e."},
    {from:"cub",to:"cube",options:["cube","cob","cab"],hint:"Ищи шаблон u_e."}
  ]},
  story:["Mike has a bike.","He can ride home.","He has a red kite."],patterns:["a_e","i_e","o_e","u_e"],
  comprehension:{q:"What is red?",o:["the bike","the kite","the home"],a:"the kite"},
  flash:["game","bike","home","cube"], extra:"Прочитай пары tap/tape · rid/ride · hop/hope. Затем объясни учителю по-русски, что именно делает финальная e в этих примерах."
},
{
  title:"Команды гласных I", focus:"ee / ea · ai / ay", outcome:"Я узнаю два частых способа записать /iː/ и /eɪ/.",
  review:[{w:"game",c:"g • a_e • m"},{w:"bike",c:"b • i_e • k"},{w:"home",c:"h • o_e • m"},{w:"cube",c:"c • u_e • b"},{w:"kite",c:"k • i_e • t"},{w:"name",c:"n • a_e • m"}],
  sounds:[{g:"ee",p:"/iː/",cue:"see"},{g:"ea",p:"/iː/",cue:"eat"},{g:"ai",p:"/eɪ/",cue:"rain"},{g:"ay",p:"/eɪ/",cue:"day"}],
  clinic:"Это полезные частые шаблоны, а не абсолютные правила для всех английских слов. Читаем слово целиком и запоминаем его написание вместе со звучанием.",
  blend:[{w:"green",parts:"g • r • ee • n",m:"зелёный"},{w:"read",parts:"r • ea • d",m:"читать"},{w:"rain",parts:"r • ai • n",m:"дождь"},{w:"play",parts:"p • l • ay",m:"играть"},{w:"team",parts:"t • ea • m",m:"команда"}],
  practice:{type:"sort",title:"Pattern Port · Порт шаблонов",gameNote:"Каждое слово должно пришвартоваться к своему буквосочетанию.",buckets:["ee","ea","ai","ay"],items:[
    {w:"see",c:"ee"},{w:"tree",c:"ee"},{w:"green",c:"ee"},{w:"read",c:"ea"},{w:"eat",c:"ea"},{w:"team",c:"ea"},{w:"rain",c:"ai"},{w:"paint",c:"ai"},{w:"day",c:"ay"},{w:"play",c:"ay"},{w:"stay",c:"ay"}
  ]},
  story:["It is a rainy day.","Mia and Lee stay in.","They read and play a game."],patterns:["ee","ea","ai","ay"],
  comprehension:{q:"What do Mia and Lee do?",o:["read and play","ride a bike","go on a boat"],a:"read and play"},
  flash:["green","read","rain","play"], extra:"Сделай на бумаге две колонки: /iː/ и /eɪ/. Добавь в каждую по три слова из урока, а затем прочитай их без подсказки."
},
{
  title:"Команды гласных II", focus:"oa / ow · oo /uː/ /ʊ/", outcome:"Я читаю частые варианты /əʊ/ и проверяю, какой звук oo нужен в знакомом слове.",
  review:[{w:"green",c:"g • r • ee • n"},{w:"read",c:"r • ea • d"},{w:"rain",c:"r • ai • n"},{w:"play",c:"p • l • ay"},{w:"team",c:"t • ea • m"},{w:"day",c:"d • ay"}],
  sounds:[{g:"oa",p:"/əʊ/",cue:"boat"},{g:"ow",p:"/əʊ/",cue:"snow"},{g:"oo",p:"/uː/",cue:"moon"},{g:"oo",p:"/ʊ/",cue:"book"}],
  clinic:"У oo есть два частых варианта чтения. Не придумываем одно правило на все случаи: запоминаем слово вместе со звуком — moon /uː/, book /ʊ/. В этом уроке ow тренируем только в группе /əʊ/.",
  blend:[{w:"boat",parts:"b • oa • t",m:"лодка"},{w:"snow",parts:"s • n • ow",m:"снег"},{w:"moon",parts:"m • oo • n",m:"луна"},{w:"book",parts:"b • oo • k",m:"книга"},{w:"coat",parts:"c • oa • t",m:"пальто"}],
  practice:{type:"sort",title:"Sound Islands · Острова звуков",gameNote:"Прочитай слово и отправь его на правильный «остров» по написанию и звучанию.",buckets:["oa /əʊ/","ow /əʊ/","oo /uː/","oo /ʊ/"],items:[
    {w:"boat",c:"oa /əʊ/"},{w:"coat",c:"oa /əʊ/"},{w:"road",c:"oa /əʊ/"},{w:"snow",c:"ow /əʊ/"},{w:"show",c:"ow /əʊ/"},{w:"yellow",c:"ow /əʊ/"},{w:"moon",c:"oo /uː/"},{w:"food",c:"oo /uː/"},{w:"room",c:"oo /uː/"},{w:"book",c:"oo /ʊ/"},{w:"look",c:"oo /ʊ/"},{w:"good",c:"oo /ʊ/"}
  ]},
  story:["Joe has a yellow coat.","He goes on a boat.","He looks at the moon."],patterns:["oa","ow","oo"],
  comprehension:{q:"What colour is Joe’s coat?",o:["yellow","green","red"],a:"yellow"},
  flash:["boat","snow","moon","book"], extra:"Прочитай room · book · food · look. Разложи слова по двум звукам oo уже без подсказки на экране."
},
{
  title:"Миссия настоящего читателя", focus:"heart words + fluency + meaning", outcome:"Я читаю короткий текст уровня Pre-A1, сначала использую phonics и узнаю небольшой набор частых исключений.",
  review:[{w:"bike",c:"b • i_e • k"},{w:"green",c:"g • r • ee • n"},{w:"play",c:"p • l • ay"},{w:"boat",c:"b • oa • t"},{w:"book",c:"b • oo • k"},{w:"ship",c:"sh • i • p"}],
  sounds:[{g:"the",p:"heart word",cue:"слово-исключение: запоминаем неожиданный фрагмент"},{g:"said",p:"heart word",cue:"s и d регулярны, сочетание ai звучит неожиданно"},{g:"one",p:"heart word",cue:"не читается по простому шаблону o_e"},{g:"some",p:"heart word",cue:"частое слово-исключение"},{g:"are",p:"heart word",cue:"частое слово"},{g:"was",p:"heart word",cue:"частое слово"}],
  clinic:"Сначала используем phonics. В слове-исключении отмечаем то, что читается предсказуемо, и отдельно запоминаем только неожиданную часть. Не превращаем все частотные слова в картинки для визуального угадывания.",
  blend:[{w:"friend",parts:"f • r • ie • n • d",m:"друг"},{w:"school",parts:"s • ch • oo • l",m:"школа"},{w:"said",parts:"heart word",m:"сказал / сказала"},{w:"one",parts:"heart word",m:"один"},{w:"some",parts:"heart word",m:"несколько / немного"}],
  practice:{type:"choice",title:"Reader Rescue · Спаси чтение",gameNote:"Выбери ответ и объясни, какой код помог тебе его найти.",items:[
    {p:"Which word is the common exception?",o:["said","rain","boat"],a:"said",h:"Rain и boat следуют знакомым шаблонам из уроков 6–7."},
    {p:"Which word has oo = /ʊ/?",o:["moon","book","food"],a:"book",h:"Вспомни две группы oo."},
    {p:"Which word uses a split digraph?",o:["home","green","ship"],a:"home",h:"Ищи гласную + согласную + финальную e."},
    {p:"Which word has a digraph at the start?",o:["ship","stop","game"],a:"ship",h:"Две буквы передают один звук."}
  ]},
  story:["One day, Sam and Mia are at school.","Sam has a green book.","Mia said, ‘Come and read with me.’","They sit, read and smile.","It was a good day."],patterns:[],
  comprehension:{q:"What does Sam have?",o:["a green book","a yellow coat","a red kite"],a:"a green book"},
  flash:["said","one","some","school"], extra:"Transfer task в стиле Pre-A1 (не официальный материал Cambridge): перечитай текст и ответь ОДНИМ словом — Where are Sam and Mia? ________"
}
];
