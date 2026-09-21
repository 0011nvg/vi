const STAGES=[
{id:"review",name:"Разминка",short:"Warm-up",mins:3},
{id:"notice",name:"Новый звук",short:"Sound",mins:5},
{id:"blend",name:"Собери слово",short:"Build",mins:7},
{id:"practice",name:"Игра",short:"Play",mins:6,game:true},
{id:"read",name:"Слова + история",short:"Story",mins:6,game:true},
{id:"exit",name:"Секретное слово",short:"Final game",mins:3,game:true}
];
const KEY="readingAcademyQuest_final";
const WORLDS=[
 {name:"Sound Detective",icon:"🔎",tag:"CASE 01",mission:"Find the secret sounds",token:"🔍",color:"detective"},
 {name:"Vowel Volcano",icon:"🌋",tag:"CASE 02",mission:"Save the vowel words",token:"🔥",color:"volcano"},
 {name:"Digraph Dungeon",icon:"🏰",tag:"CASE 03",mission:"Unlock the sound doors",token:"🗝️",color:"dungeon"},
 {name:"Blend Racetrack",icon:"🏎️",tag:"CASE 04",mission:"Blend to the finish",token:"🏁",color:"race"},
 {name:"Magic-E Lab",icon:"✨",tag:"CASE 05",mission:"Switch the vowel power",token:"⚡",color:"magic"},
 {name:"Pattern Port",icon:"⚓",tag:"CASE 06",mission:"Sort the spelling cargo",token:"⚓",color:"port"},
 {name:"Sound Islands",icon:"🏝️",tag:"CASE 07",mission:"Map the sound islands",token:"🗺️",color:"islands"},
 {name:"Reader HQ",icon:"🏆",tag:"FINAL CASE",mission:"Crack the reading code",token:"🏆",color:"hq"}
];
let state=load(),currentLesson=Math.min(Math.max(parseInt(location.hash.replace("#lesson-",""))||1,1),LESSONS.length),currentStage=0,tutorMode=false;
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{done:{},stages:{},currentLesson:1}}catch(e){return{done:{},stages:{},currentLesson:1}}}
function save(){state.currentLesson=currentLesson;localStorage.setItem(KEY,JSON.stringify(state));progress()}
function esc(s){return String(s).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function sk(n,s){return n+":"+s}
function progress(){
 const done=Object.values(state.done||{}).filter(Boolean).length,pct=Math.round(done/LESSONS.length*100),bar=document.getElementById("topProgress");
 if(bar){bar.style.width=pct+"%";bar.parentElement.setAttribute("aria-label","Прогресс курса "+pct+"%")} renderMap();
}
function renderMap(){
 const g=document.getElementById("courseGrid");if(!g)return;
 g.innerHTML=LESSONS.map((l,i)=>{const w=WORLDS[i],locked=i>0&&!state.done[i];
 return `<button class="mission world-${w.color} ${state.done[i+1]?"done":""} ${locked?"locked":""}" data-open="${i+1}" type="button" ${locked?'aria-label="Уровень пока закрыт"':""}><span><span class="quest-icon">${state.done[i+1]?w.token:w.icon}</span><span class="num">${w.tag}</span><h3>${w.name}</h3><p>${w.mission}</p></span><span class="status">${state.done[i+1]?"🏆 TOKEN FOUND":locked?"🔒 COMPLETE LEVEL "+i:"PLAY QUEST →"}</span></button>`}).join("");
 g.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>{const n=+b.dataset.open;if(n>1&&!state.done[n-1]){b.classList.add("locked-shake");setTimeout(()=>b.classList.remove("locked-shake"),500);return}openLesson(n)});
 renderInventory();
}
function openLesson(n){currentLesson=n;currentStage=0;location.hash="lesson-"+n;save();renderLesson();document.getElementById("workspace").scrollIntoView({behavior:"smooth",block:"start"})}
function completeStage(){
 state.stages[sk(currentLesson,currentStage)]=true;
 if(currentStage===5){state.done[currentLesson]=true;save();renderLesson();showReward();return}
 currentStage++;save();renderLesson();
}
function tutor(text){return `<div class="tutor-note ${tutorMode?"show":""}"><b>🔒 Для учителя</b><br>${text}</div>`}
function questName(n){return WORLDS[n-1].name}
function renderInventory(){
 let el=document.getElementById("questInventory");if(!el)return;
 el.innerHTML=WORLDS.map((w,i)=>`<span class="token ${state.done[i+1]?"found":""}" title="${w.name}">${state.done[i+1]?w.token:"?"}</span>`).join("");
}
function showReward(){
 const w=document.getElementById("workspace"),all=Object.values(state.done||{}).filter(Boolean).length,world=WORLDS[currentLesson-1];
 const final=all===LESSONS.length;
 w.innerHTML=`<div class="reward-screen ${final?"final-reward":""}" role="status"><div class="confetti" aria-hidden="true">★ ✦ ● ★ ✦ ● ★</div><div class="reward-burst">${final?"🏆":world.token}</div><div class="reward-eyebrow">${final?"SECRET CODE COMPLETE":"TOKEN FOUND · "+world.tag}</div><h2>${final?"YOU ARE A READING HERO!":"QUEST COMPLETE!"}</h2><p>${final?"Все 8 секретов собраны. Reading HQ открыта!":"Ты прошёл "+world.name+" и забрал новый жетон."}</p><div class="reward-badge">${final?"🌟 READING HERO BADGE 🌟":world.token+" "+world.name.toUpperCase()+" TOKEN"}</div><div class="token-row">${WORLDS.map((x,i)=>`<span class="token ${state.done[i+1]?"found":""}">${state.done[i+1]?x.token:"?"}</span>`).join("")}</div><div class="reward-actions"><button class="btn primary" id="rewardAgain" type="button">🎮 Ещё раунд</button>${currentLesson<LESSONS.length?`<button class="btn yellow" id="rewardNext" type="button">🔓 LEVEL ${currentLesson+1}: ${WORLDS[currentLesson].name}</button>`:""}</div><div class="keks-reward"><b>Кекс:</b> ${final?"«Код собран! Теперь ты настоящий Reading Hero. Но у английского ещё полно секретов…»":"«Есть! "+world.token+" наш. Я уже вижу следующий секрет!»"}</div></div>`;
 document.getElementById("rewardAgain").onclick=()=>{currentStage=3;renderLesson()};
 const n=document.getElementById("rewardNext");if(n)n.onclick=()=>openLesson(currentLesson+1);
}
function frame(title,lead,body,note,extra=""){
 const s=STAGES[currentStage];
 return `<div class="stage-kicker">${s.game?"🎮 ":""}${s.name} · ${s.mins} мин</div>
 <h3 class="stage-title">${title}</h3><p class="stage-lead">${lead}</p>${body}${tutor(note)}
 ${extra?`<details class="extra"><summary>⭐ Ещё одно задание</summary><div>${extra}</div></details>`:""}
 <div class="stage-footer"><small>⭐ Собирай звёзды за каждый этап!</small><div><button class="btn small ghost" id="tutorToggle" type="button">${tutorMode?"Спрятать":"Для учителя"}</button> <button class="btn small yellow" id="stageDone" type="button">${currentStage===5?"🏆 Урок готов!":"Готово! ⭐ →"}</button></div></div>`;
}
function renderLesson(){
 const l=LESSONS[currentLesson-1],w=document.getElementById("workspace");
 const stars=STAGES.filter((s,i)=>state.stages[sk(currentLesson,i)]).length;
 const world=WORLDS[currentLesson-1];w.innerHTML=`<div class="quest-strip world-${world.color}"><span>${world.icon} ${world.tag}</span><b>${questName(currentLesson)}</b><span>⭐ ${stars}/6 · ${world.mission}</span></div><div class="lesson-shell"><div class="lesson-hero kids-hero"><div><div class="lesson-no">LEVEL ${currentLesson} · ⭐ ${stars}/6</div><h2>${esc(l.title)}</h2><p class="kid-goal">Сегодня научимся: ${esc(l.focus)}</p></div><div class="timebox"><strong>30</strong>мин</div></div><div class="stage-nav">${STAGES.map((s,i)=>`<button class="stage-tab ${i===currentStage?"active":""} ${state.stages[sk(currentLesson,i)]?"done":""}" data-stage="${i}" type="button"><span class="stage-emoji">${["👀","👂","🧩","🎮","📚","🔐"][i]}</span>${s.name}<br><small>${s.mins} мин</small></button>`).join("")}</div><div class="stage-body" id="stageBody"></div></div>`;
 w.querySelectorAll("[data-stage]").forEach(b=>b.onclick=()=>{currentStage=+b.dataset.stage;renderLesson()});renderStage();
}
function renderStage(){
 const l=LESSONS[currentLesson-1],b=document.getElementById("stageBody");
 b.innerHTML=[review,notice,blend,play,read,exit][currentStage](l);
 document.getElementById("stageDone").onclick=completeStage;
 document.getElementById("tutorToggle").onclick=()=>{tutorMode=!tutorMode;renderStage()};
 if(currentStage===0)wireReview();if(currentStage===2)wireBlend(l);if(currentStage===3)wirePlay(l);if(currentStage===4)wireRead(l);if(currentStage===5)wireExit(l);
}
function review(l){
 const body=`<div class="kid-task"><div class="task-mascot">👀</div><h4>Узнаешь эти слова?</h4><p>Прочитай. Нажми на слово и проверь себя.</p><div class="word-row big-words">${l.review.map(x=>`<button class="word-chip reviewword" type="button">${esc(x.w)}<small hidden>${esc(x.c)}</small></button>`).join("")}</div><div class="mini-win">⭐ Прочитал? Выбери самое лёгкое слово!</div></div>`;
 return frame("Словесная разминка","Давай разбудим английский! 🚀",body,"Попросите ребёнка сначала прочитать самостоятельно. Подсказку открывайте только после попытки.",l.extra);
}
function wireReview(){document.querySelectorAll(".reviewword").forEach(b=>b.onclick=()=>{b.classList.toggle("revealed");b.querySelector("small").hidden=!b.querySelector("small").hidden})}
function notice(l){
 const body=`<div class="kid-task sound-quest"><div class="task-mascot">👂</div><h4>Слушай → повторяй → найди</h4><div class="sound-grid">${l.sounds.map(x=>`<button class="sound-card sound-pop" type="button"><b>${esc(x.g)}</b><div class="sound">${esc(x.p)}</div><small>${esc(x.cue)}</small></button>`).join("")}</div><div class="mini-win">🎯 Можешь показать нужные буквы, когда учитель называет звук?</div></div>`;
 return frame("Охота за звуками","Слушай звук. Найди его. Скажи сам!",body,l.clinic);
}
function blend(l){
 const x=l.blend[0],body=`<div class="blend-box"><div class="blend-stage kid-build"><div class="task-mascot">🧩</div><div class="blend-parts" id="blendParts">${esc(x.parts)}</div><div class="blend-answer" id="blendAnswer"><span>Склей звуки!</span></div><div class="blend-actions"><button class="btn primary" id="blendReveal" type="button">✨ Проверить</button><button class="btn" id="blendNext" type="button">🎲 Другое слово</button></div></div><div class="card yellow kid-side"><h4>Суперсила читателя</h4><p>👆 Веди слева направо.</p><p>👄 Скажи звуки.</p><p>⚡ Склей их в слово!</p><div class="feedback" id="blendCounter"></div></div></div>`;
 return frame("Собери слово","Как пазл — только из звуков.",body,"Не называйте целое слово первым. Дайте опору только на трудном звуке.",l.extra);
}
function wireBlend(l){let i=0,p=document.getElementById("blendParts"),a=document.getElementById("blendAnswer"),c=document.getElementById("blendCounter");const show=()=>{p.textContent=l.blend[i].parts;a.innerHTML="<span>сначала прочитай сам</span>";c.textContent=`Слово ${i+1} из ${l.blend.length}`};document.getElementById("blendReveal").onclick=()=>a.innerHTML=`${esc(l.blend[i].w)}<small>${esc(l.blend[i].m)}</small>`;document.getElementById("blendNext").onclick=()=>{i=(i+1)%l.blend.length;show()};show()}
function gameBanner(l){const w=WORLDS[currentLesson-1];return `<div class="game-banner world-${w.color}"><span class="game-badge">${w.icon} MINI QUEST</span><div><b>${w.mission}</b><small>${esc(l.practice.title.split("·")[0])} · читай, чтобы пройти дальше!</small></div><span class="game-skill">⭐ +1</span></div>`}
function play(l){
 let body=gameBanner(l),p=l.practice;
 if(p.type==="choice")body+=`<div class="quiz">${p.items.map((q,i)=>`<div class="qcard" data-q="${i}"><div class="qprompt">${esc(q.p)}</div><div class="qoptions">${shuffle(q.o).map(o=>`<button class="qopt" data-answer="${esc(o)}" type="button">${esc(o)}</button>`).join("")}</div><div class="feedback"></div><button class="btn small ghost hintbtn" type="button">Нужна подсказка?</button><div class="hintbox">${esc(q.h)}</div></div>`).join("")}</div>`;
 if(p.type==="sort")body+=`<div class="sort-area"><div class="sort-bank"><p>Прочитай слово, выбери его и отправь в правильную группу.</p><div class="word-row">${shuffle(p.items).map(x=>`<button class="word-chip sortword" data-cat="${esc(x.c)}" type="button">${esc(x.w)}</button>`).join("")}</div><button class="btn small" id="sortClear" type="button">Очистить / Try again</button><div class="sort-feedback" id="sortFeedback"></div></div><div class="sort-buckets">${p.buckets.map(x=>`<div class="bucket"><b>${esc(x)}</b><button class="btn small bucketbtn" data-bucket="${esc(x)}" type="button">Положить слово</button></div>`).join("")}</div></div>`;
 if(p.type==="memory"){const cards=shuffle(p.pairs.flatMap((x,i)=>[{pair:i,kind:"word",label:x.word},{pair:i,kind:"code",label:x.code}]));body+=`<div class="memory-game"><div class="memory-status" id="memoryStatus">Найди ${p.pairs.length} пар: слово + его буквенный код.</div><div class="memory-grid">${cards.map(x=>`<button class="memory-card" data-pair="${x.pair}" data-kind="${x.kind}" type="button"><span class="memory-back">?</span><span class="memory-front">${esc(x.label)}</span></button>`).join("")}</div><button class="btn small" id="memoryReset" type="button">Перемешать заново</button></div>`}
 if(p.type==="transform")body+=`<div class="transform-game">${p.items.map((q,i)=>`<div class="transform-card" data-transform="${i}"><div class="transform-from">${esc(q.from)}</div><div class="transform-arrow">+ e →</div><div class="transform-options">${shuffle(q.options).map(o=>`<button class="qopt" data-transform-answer="${esc(o)}" type="button">${esc(o)}</button>`).join("")}</div><div class="feedback"></div><button class="btn small ghost transform-hint" type="button">Нужна подсказка?</button><div class="hintbox">${esc(q.hint)}</div></div>`).join("")}</div>`;
 return frame(WORLDS[currentLesson-1].name+" Challenge","Готов? Выполни миссию и забери ⭐",body,"Не используй скорость, жизни и штрафы. После ответа спроси: «Как ты понял(а)? Покажи код». Игра должна усиливать noticing/retrieval, а не отвлекать от языковой цели.",l.extra);
}
function wirePlay(l){
 const p=l.practice;
 document.querySelectorAll(".hintbtn,.transform-hint").forEach(b=>b.onclick=()=>b.nextElementSibling.classList.toggle("show"));
 if(p.type==="choice")document.querySelectorAll(".qcard").forEach((card,i)=>card.querySelectorAll(".qopt").forEach(b=>b.onclick=()=>{card.querySelectorAll(".qopt").forEach(x=>x.classList.remove("correct","wrong"));const ok=b.dataset.answer===p.items[i].a;b.classList.add(ok?"correct":"wrong");card.querySelector(".feedback").textContent=ok?"Верно. Объясни, какой code помог.":"Пока нет. Перечитай код и попробуй снова."}));
 if(p.type==="sort"){let selected=null,words=[...document.querySelectorAll(".sortword")],fb=document.getElementById("sortFeedback");words.forEach(w=>w.onclick=()=>{if(w.classList.contains("sorted"))return;words.forEach(x=>x.classList.remove("selected"));w.classList.add("selected");selected=w;fb.textContent="Слово выбрано. Прочитай его ещё раз."});document.querySelectorAll(".bucketbtn").forEach(b=>b.onclick=()=>{if(!selected){fb.textContent="Сначала выбери слово.";return}if(selected.dataset.cat===b.dataset.bucket){selected.classList.remove("selected");selected.classList.add("sorted");selected.disabled=true;fb.textContent="Верно. Прочитай слово вслух.";selected=null}else fb.textContent="Не эта группа. Сравни spelling и sound."});document.getElementById("sortClear").onclick=()=>{words.forEach(w=>{w.disabled=false;w.classList.remove("selected","sorted")});selected=null;fb.textContent="Новый раунд."}}
 if(p.type==="memory"){let open=[],matched=new Set(),cards=[...document.querySelectorAll(".memory-card")],status=document.getElementById("memoryStatus");const close=()=>{open.forEach(c=>c.classList.remove("open"));open=[]};cards.forEach(c=>c.onclick=()=>{if(c.classList.contains("matched")||c.classList.contains("open")||open.length===2)return;c.classList.add("open");open.push(c);if(open.length===2){let a=open[0],b=open[1],ok=a.dataset.pair===b.dataset.pair&&a.dataset.kind!==b.dataset.kind;if(ok){a.classList.add("matched");b.classList.add("matched");matched.add(a.dataset.pair);open=[];status.textContent=`Пара найдена. Готово ${matched.size} из ${p.pairs.length}. Прочитай слово.`;if(matched.size===p.pairs.length)status.textContent="Все пары найдены! Назови буквенные коды по памяти."}else{status.textContent="Не пара. Подумай, какой code работает в слове.";setTimeout(close,800)}}});document.getElementById("memoryReset").onclick=()=>renderStage()}
 if(p.type==="transform")document.querySelectorAll(".transform-card").forEach((card,i)=>card.querySelectorAll("[data-transform-answer]").forEach(b=>b.onclick=()=>{card.querySelectorAll("[data-transform-answer]").forEach(x=>x.classList.remove("correct","wrong"));let ok=b.dataset.transformAnswer===p.items[i].to;b.classList.add(ok?"correct":"wrong");card.querySelector(".feedback").textContent=ok?`Верно: ${p.items[i].from} → ${p.items[i].to}. Прочитай обе формы.`:"Пока нет. Сохрани согласные и проверь vowel pattern."}));
}
function highlight(text,patterns){
 let ps=patterns.filter(Boolean).sort((a,b)=>b.length-a.length),out="",i=0;
 while(i<text.length){let hit="",step=0;for(const p of ps){if(p.includes("_")){let q=p.split("_");if(q.length===2&&i+2<text.length&&text[i].toLowerCase()===q[0]&&/[a-z]/i.test(text[i+1])&&text[i+2].toLowerCase()===q[1]){hit=text.slice(i,i+3);step=3;break}}else if(text.slice(i,i+p.length).toLowerCase()===p.toLowerCase()){hit=text.slice(i,i+p.length);step=p.length;break}}if(hit){out+="<mark>"+esc(hit)+"</mark>";i+=step}else out+=esc(text[i++])}return out;
}
function read(l){
 const q=l.comprehension,story=l.story.map(x=>`<p>${highlight(x,l.patterns)}</p>`).join("");
 const vocab=l.vocab||[];
 const cards=shuffle(vocab).map(x=>`<button class="picture-card" data-vocab="${esc(x.w)}" type="button"><span class="pic" aria-hidden="true">${x.icon}</span><span class="picture-word">${esc(x.w)}</span></button>`).join("");
 const wordBank=shuffle(vocab).map(x=>`<button class="vocab-word" data-wordpick="${esc(x.w)}" type="button">${esc(x.w)}</button>`).join("");
 const body=`<div class="story-lab"><div class="vocab-zone"><div class="mini-label">🎮 GAME · PICTURE HUNT</div><h4>Найди пару!</h4><p class="microcopy">Картинка → слово. Собери все пары.</p><div class="picture-grid">${cards}</div><div class="vocab-bank">${wordBank}</div><div class="feedback" id="vocabFeedback">0 / ${vocab.length} ⭐</div></div>
 <div class="reader"><div class="story"><div class="mini-label">📖 MINI-STORY</div>${story}</div><div class="reader-side"><div class="read-check"><h4>🎭 Читай как актёр!</h4><p>Сначала медленно. Потом красиво и плавно.</p><button class="btn small" id="toggleMarks" type="button">${l.patterns.length?"Спрятать подсказки":"Текст готов"}</button></div><div class="read-check"><h4>🔎 Детектив</h4><p><b>${esc(q.q)}</b></p><div class="choice-row">${shuffle(q.o).map(o=>`<button data-read-answer="${esc(o)}" type="button">${esc(o)}</button>`).join("")}</div><div class="feedback" id="readFeedback"></div></div></div></div></div>`;
 return frame("Картинки, слова, история!","Сначала поиграй со словами. Потом найди их в истории.",body,"Картинка поддерживает значение, но написанное слово всегда остаётся видимым: задача — читать, а не угадывать.",l.extra);
}
function wireRead(l){
 const q=l.comprehension;document.querySelectorAll("[data-read-answer]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-read-answer]").forEach(x=>x.classList.remove("correct","wrong"));let ok=b.dataset.readAnswer===q.a;b.classList.add(ok?"correct":"wrong");document.getElementById("readFeedback").textContent=ok?"Yes! Find the proof in the story.":"Try again. Read the story clue."});
 let t=document.getElementById("toggleMarks");if(l.patterns.length){let on=true;t.onclick=()=>{on=!on;document.getElementById("storyText");document.querySelector(".story").innerHTML=`<div class="mini-label">MINI-STORY</div>`+(on?l.story.map(x=>`<p>${highlight(x,l.patterns)}</p>`):l.story.map(x=>`<p>${esc(x)}</p>`)).join("");t.textContent=on?"Hide code":"Show code"}}else t.disabled=true;
 let selectedPic=null,found=new Set(),fb=document.getElementById("vocabFeedback");
 document.querySelectorAll("[data-vocab]").forEach(b=>b.onclick=()=>{if(b.classList.contains("matched"))return;document.querySelectorAll("[data-vocab]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedPic=b;fb.textContent="Теперь найди слово! 👀"});
 document.querySelectorAll("[data-wordpick]").forEach(b=>b.onclick=()=>{if(!selectedPic){fb.textContent="Сначала выбери картинку 👆";return}if(b.dataset.wordpick===selectedPic.dataset.vocab){selectedPic.classList.remove("selected");selectedPic.classList.add("matched");b.classList.add("matched");b.disabled=true;found.add(b.dataset.wordpick);fb.textContent=found.size===(l.vocab||[]).length?"Все пары собраны! 🏆":"Есть пара! ⭐ Прочитай слово." ;selectedPic=null}else{b.classList.add("wrong");setTimeout(()=>b.classList.remove("wrong"),500);fb.textContent="Почти! Прочитай ещё раз."}});
}
function exit(l){
 const body=`<div class="game-banner"><span class="game-badge">🔐 FINAL BOSS</span><div><b>Mystery Word Vault</b><small>Открой сейф: запомни слово и восстанови его!</small></div><span class="game-skill">🎁 PRIZE</span></div><div class="activity-grid"><div class="flash"><div class="eyebrow">2 секунды → спрятать → написать</div><p>Посмотри на слово. Когда оно исчезнет, восстанови его по памяти.</p><div class="flash-display" id="flashDisplay">готов?</div><button class="btn yellow" id="flashStart" type="button">Показать mystery word</button><div style="margin-top:10px"><label class="sr-only" for="flashInput">Напиши слово</label><input id="flashInput" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="напиши слово"><button class="btn" id="flashCheck" type="button">Проверить</button></div><div class="feedback" id="flashFeedback"></div></div><div class="card blue"><h4>🏁 Последний шаг</h4><p>Прочитай учителю любимое слово и одну строчку. Потом забирай награду!</p><p><b>Как было?</b></p><div class="confidence"><button data-confidence="1" type="button">🧩 Ещё потренируюсь</button><button data-confidence="2" type="button">⭐ Получается!</button><button data-confidence="3" type="button">🚀 Я могу!</button></div><p id="confidenceText" class="feedback"></p></div></div>`;
 return frame("Секретное слово 🔐","Посмотри. Запомни. Напечатай!",body,"Для более сильной phonics–spelling связи можно не показывать слово, а произнести его. Ребёнок сегментирует звуки и записывает spelling.",l.extra);
}
function wireExit(l){
 let target="",d=document.getElementById("flashDisplay"),inp=document.getElementById("flashInput"),fb=document.getElementById("flashFeedback");
 document.getElementById("flashStart").onclick=()=>{target=l.flash[Math.floor(Math.random()*l.flash.length)];d.textContent=target;inp.value="";fb.textContent="";setTimeout(()=>{d.textContent="••••";inp.focus()},2000)};
 document.getElementById("flashCheck").onclick=()=>{if(!target){fb.textContent="Сначала покажи mystery word.";return}let ok=inp.value.trim().toLowerCase()===target.toLowerCase();fb.textContent=ok?"Верно. Прочитай слово ещё раз.":"Пока нет. Какой sound–spelling кусочек пропущен?";if(ok)d.textContent=target};
 document.querySelectorAll("[data-confidence]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-confidence]").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.getElementById("confidenceText").textContent=b.dataset.confidence==="1"?"Понятно, что повторить в начале следующего урока.":b.dataset.confidence==="2"?"Хорошо. Короткий retrieval закрепит навык.":"Супер. Следующий урок всё равно вернёт часть кода — spaced recycling."});
}
document.getElementById("diagCalc").onclick=()=>{let n=[...document.querySelectorAll("[data-diag]")].filter(x=>x.checked).length,r=document.getElementById("diagResult");r.textContent=n<=1?"Начни с урока 1: Первый код.":n===2?"Начни с урока 2: Короткие гласные.":n===3?"Начни с урока 3; если диграфы уверенные — можно с урока 4.":"Можно начать с урока 5, а уроки 6–8 использовать как основной маршрут.";r.style.display="block"};
document.getElementById("resetAll").onclick=()=>{if(confirm("Сбросить весь прогресс Reading Academy для нового ученика?")){localStorage.removeItem(KEY);state={done:{},stages:{},currentLesson:1};currentLesson=1;currentStage=0;history.replaceState(null,"","#course");progress();renderLesson();document.querySelectorAll("[data-diag]").forEach(x=>x.checked=false);document.getElementById("diagResult").style.display="none"}};
window.addEventListener("hashchange",()=>{let n=parseInt(location.hash.replace("#lesson-",""));if(n>=1&&n<=LESSONS.length&&n!==currentLesson){currentLesson=n;currentStage=0;save();renderLesson()}});
renderMap();progress();renderLesson();
