
const REASONS = [
"your text lights up my face, it makes me the happiest as your notification sound is different than any other notification so that sound toh makes me gooo insane smileeeeyy",
"your smile is the prettiest one i’ve ever seen, I love every smiling photo of you and it makes me smile as well",
"I absolutely love your voice, your voice actually calms me down and makes me realize how much I love everything about you",
"you’re my little smarty pants, my outstanding boy side waalo ko bhi padhke aane do",
"you’re so dumb like kuch bhi bolte ho aap plus your stickers yet so cute (you’re not funnier)",
"you make me laugh and that is a sign that you can hit this 😔",
"you’re my gora chitta chiknu boy with soft cheeks that i’d eat daily",
"I smile uncontrollably when its you, like what is your issue why are you so cute why do I wanna kiss you out of nowhere",
"you’re my natural blush (i visibly blush when someone mentions you) with giggles btw",
"I feel super comfortable with you (you’re my best friend)",
"I love when you’re around (even in the form of texts or call)",
"I’m always thinking about you (even when i’m alone i pretend like I’m talking to you)",
"I’d give up anything for your cute ahh, like I would actually stop eating fries also or even chicken atp (you’re so lovable)",
"I feel like the world is better when you’re always there for me, hate the days when we dont text feels like someone hitting me with a stone dil pe", 
"even tho we argue a lot, you’re still the one i want at the end of the day. everyday. everytime.",
"i’ve loved your laugh since day 1 (jabh aap kapil sharma dekhte hoge toh poori galli ko pata lag jata hoga ifykyk)",
"i’ve always wished for us to workout (from years)",
"I love that you’re disciplined, it’s so impressive",
"I absolutely love your dressing sense omg (your sweaters I’ll def steal)",
"our blood groups perfectly compliment each other a- and a+",
"2 , 4 , 6 , 8 (you fit perfectly in my family)", 
"I have so many playlists for you (i imagine us with every song)",
"you’re so sweet and perfect that every sweet ka name suits you as a nickname (barfi, kaju katli, rasgulla)",
"i’ve always loved your interest in astronomy & loved your facts about black holes", 
"you’re so hardworking omg i still remember your crazy schedule for uni and you still talked to me + worked out (aap toh yaar kamaal hi ho)",
"you balance everything so nicely, i’ve never felt like you don’t make time for me",
"I still remember holding your arm and it being the best moment of my life (i was the happiest girl ever)",
"I love that it’s been almost 7 years of knowing you and i wanna be with you till the end of my life", 
"I miss you everyday yet i feel super close to you everyday (thank you for always being there for me)",
"I love when you asked me out on 18 jan with a voice note, it still makes me giggle",
"Thank you for always listening to me yap non stop & never complaining (i love you)",
"I love when i always ask you to call you never say no (itni pasand hu mein aapko 🙄🥺)",
"I love that you love cute animals like me awww (remember when you got a puppy ghar pe cause your dost ki mom said no to the dog)",
"I literally dream everyday about you like everyday its insane (recent one was us living in a small ghar temporary cause you got recruited for army)",
"YOU COOOOK omggg meri toh zindagi set ho jayegi aapke saath (vibhu mere liye coffee lao)",
"I love that you’ve gained aura by being with me (jk you have the best personality ever)",
"I love your taste in movies (scared games, lego batman) i’d watch everything you say",
"I'd eat paneer everyday for you and i’d cook for you (itna love hai aapse mujhe)",
"I love your cute little specs you’re so cute (would clean them everyday for you)",
"I only open my gallery everyday for your pictures (YOUR SMILEEE 🥺)",
"I'd give you cute cute kids just to have mini you’s (die for your genes)",
"aapke cute little nakhre dekhna is funny, like awwwww idhar aaoo",
"I have so many memories of us, so much of cute stuff it’s insane (i love holding your hand btw)",
"I am so so so grateful for you, you’re the best boyfriend ever and a great friend too (ok multitasker 😳)",
"when someone says arshdeep kaur sharma mera susu nikal jaata hai 💕",
"mera toh hai hi even manraj loves you (itne pyaar kese ho aap)",
"I look at every cute reel or post and think us (you’re always my first thought)",
"I always pray for you at the gurudwara (batane se kuch hota toh nahi na esa na ho bhagwaan gussa ho jayen)",
"I always talk to god about us (we have very long conversations before my bedtime, dw good thing only love u)",
"I might be a machar cause i love those veins (dabado mujhe)",
"every coupley thing makes me cringe but I’d do all of those things with you (happily btw)",
"mujhe aapka phone number yaad hai this is such an useless thing to mention but yesss (kitni vehli hu)",
"I only send funny best reels to you (aur koi nahi smash paata jese aap)",
"whenever i hear a gossip or anything interesting my first thought is anshul ko bataungi (dimaag ki memory full kardungi aapki)",
"I could just say you’re perfect but fir 159 days kese honge, you’re the best for me (hehehe)",
"I absolutely LOVE your hair, so soft so silky i’ll eat them (wish i could touch daily)",
"I think you know me the best out of everyone since you remember things about me and that’s so cute i love you cutu",
"if there was a friends wrapped you’d be #1 with i think over 100,000 mins together omg (my no.1 human)",
"your abs give me random burst of motivation to workout LIVE LAUGH ANSHUL KE ABS OMG",
"I giggle every time you say i love you i just act non chalant about it",
"I love how you’re so patient with me, during every argument im so thankful for you",
"I love when you get overexcited over small things like dholu bholu 😭",
"I love that we’re at same freakquency i can never imagine saying all the things to anyone else cause no one would understand",
"you’re my perfect match for everything complete opposites but still going strong (1 year omgg)",
"I still remember telling simar that i like you and she telling everyone and all of them crashing out to bring us together (everyone loves you)", 
"every cute movie i watch i imagine us in it and note down things we’d def do in the future (we’ll recreate everything together 💗)",
"I would prioritize your khushi over mine any day so if you feel like you cannot share things with me think again nigga i’ll punch you 🫶🏻",
"I absolutely adore that you always say you draw bad but the cute drawings you’ve made for me are my absolute favourite (i love your drawings thank you so much)", 
"I LOVE THE WEBSITE YOU MADE ME HELLO? it’s so detailed and so cute (i’ll literally kiss you so hard)",
"I talk to my all stuffed animals about you and it’s my favourite things to do (they love you)",  
"I still remember the first time we help hands omg mera toh hogaya tha thank god aapne haath aage kiya tha (you’re so pyaara anshul 😭)",
"the cutest funny thing i think we had ek time pe was saying i too love you instead of i love you too wth was that 😭", 
"the best thing of my day is waking up to your reels and texts makes me smile so much hehehehe",
"I love when you say that i’m on your mind always aww like awww lemme give you head then", 
"I love how you’re so super focused on something sometimes like idk how to explain it but yes (you’re hawt)",
"I still remember you introducing me to bs it was the best playing with you (you’re a pro anshul WTF i used to flex random kids ke saamne that played bs or mentioned it)", 
"our freakiness is insane and the fact mummy has read the chats is crazy anshul aap hi ghar mein aaoge abh mere mein aur himmat nahi bachi",
"remember when we didn’t confessed 24 mein and we married bs mein it was the best day of my life because i was allowed to call you husband 😝😝 ",
"you know the secrets everything atp about me my family like either aap meri family ka part banoga ya fir basss (pls join my family 🥺)",
"I think even preeti di is soooo inspiring she’s so intelligent and well balanced acchi sangat mein rehte ho aap (love u preeti di)",
"i’ve never heard zayada pahadi aapse but i can absolutely imagine us arguing in pahadi and punjabi 😭😭😭 it’ll be so funny cause it’s lowkey similar", 
"even though i get super mad at your jokes mujhe hassi aati hai kya yaar dumb lil baby always in masti mood cutu sa",
"I love your crazy weird sa humour and your reels (even tho i have no words almost all the time) but yes i love when you send me reels", 
"I would still love to go to himachal with you to see that ghar jangalo mein (if it still exists) and literally everywhere you hold memories with linked to your childhood",
"I loveeeeeee the fact that one day i’ll get to dress you (in my clothes) and take photos of you, do your makeup and hairstyles everything (praying for those days 🤞🏼)",
"remember when we used to play bs and we used to 1v1 and you used to let me scoreeee omgg youre so hot I love you fine ass man 😋",
"I love that you remember that i like jhumkas and you said that youre gonna buy me some one day, even tho i'd never accept it because shaadi se pehle no gifts",
"Your music taste is sooo good my fav song ever from your playlist is sleep on the left side it makes me blush insanely hard", 
"I love when you call me baccha its so funny and so cute (funny cause I think more than being a couple we’re friends)",
"I love how you take my side sometimes omg when I tell you about how everyone is annoying me with their stuff and im so done youre like tell ritika youre with meee like awww youre so darn cute",
"I love asking you would you rather questions and surprisingly you give good responses to those like im impressed actually good work baby",
"I love making cute artworks for you cause its so cute making you something and then seeing your cute lil happy speechless reaction awww",
"I would clean your specs everyday for you, youre such a little cute sa boy aww",
"Omg remember when I had your bs account?? Insta account?? Like everything wtf was that I used be on cloud 9 like wtf itna pyaar aur trust like aww kiss me", 
"When you used to say that trophies dont matter to me you do when I used to complain that me or manraj would tilt you if we play from your phone or with you",
"Yk anshul I love that youre so kind with others, so respectful you are so nice to manraj day 1 se the way you talk to him pyaar se just makes me fall in love with you more and more",
"I love listening to your past experiences like your Himachal ghost stories and everything I wanna know everything about you a to z one day",
"I love that no matter kitne bhi voice notes I listen to you listen to all of them regardless of the constant yapping and woh bhi normal speed mein bhai nahi mujhse na hota (podcasts)",
"I absolutely love your handwriting for some reason?? Its so like idk I have  page of my lakhbir singh book class 8 with your handwriting I look at it till date (its rust ki equation yaad hogayi hai)",
"I love your baby pictures they’re soooo cute and funny kitne mastikhor the aap ho abhi bhi tho but yes best is the flower one 😭 bro its like a actor typa photoshoot u look cute asf",
"I still remember you saying that you love me more than Henry cavil, sacred games and paneer that was the best day of my life (I love you more than bhindi and rajma chawal and chicken biryani)",
"I can’t wait to see you code or like solve leetcodes and feed you and annoy you (01101001 01101100 01111001)",
"Omg our first hug was the best everrr, I was like do u wanna hug and you agreed do you remember ham haha gaye the woh scary se abandoned place 😭 thank you for always being with me at that time (nahi but le jaati thi bhai)",
"We love love papad yk papad is my childhood love and specially teekhe ones and we both love it, we should do a papad date (I can eat like 4-5 easy, we can compete)",
"I think I get the weirdest burst of energy and yapping when it comes to you, like I wanna tell you everything from a to z what happened to me, why and then crash out, idk what I’d do if aap sunne ke liye nahi hote 💔", 
"Normally I cannot talk or be with someone like everyday, I have my days where im like yeah no but with you I can talk like non stop and mujhe aap mein ghusna bohot accha lagta hai (we discussed this ritika discussion call pe also 🥰)",
"I LOVE YOUR MUSIC TASTE, I love every playlist you’ve ever made for meeeee. Yk day 1 se I stalk your spotty so I used to save every playlist you put on your profile (I still do)",
"I stalk you on every app we are added on like on a daily basis cause youre always on my mind its so fun stalking but pls dont stop doing stuff just because I stalk you kitni vehli hu mein bhai",
"I dont wanna admit it like weird hai but ive stopped thinking negative about myself kaafi hadd tak all tanks to you lol, I feel so loved with you hehehehehehehe (I hope you do too)",
"Sometimes I dont understand what I do cause like youre my crush but youre my baby also but then youre my best friend also then im just like hmmm yeah I just think youre the best my everything",
"Yk I lowkey see you as my google and what no everything that comes to my mind I need to ask you, you know when I see something or think something I have knowledge in I always ask you first cause pehle aap se sunnuning believe everything you say",
"You should teach me stuff like headstand and all and like soccer and all so I can check off my 2026 to do things?? It would be the best if you couldddd cause aapko toh sabh aata hi hai heheh I’ll teach you hmm about medicines? Biology? Psychology?", 
"I love when you share things with me like I remember everything you tell me (almost) like the shoulder pain reason, rash things and when you were accused of smoking and you old maths teacher kv ki that i used to joke about you having a crush on LOL then navraj bhaiya ki gf etc etc its so fun remembering your things and your stories",
"Youre the siddhart malhotra to my Karan Johar (get it cause we’re both gay but youre fine shyt too) but ill hopefully be your Kiara??? Your wife??? Better be",
"Aapke mere ghar pe rajma chawal pending hai btw….aajao abh jaldi se khilaun aapkooo papa ke fav hoge vese aap",
"I lowkey wanna watch minions with you, I always watch alone cause like only family knows they’re my fav and you so lowkey I’d love to watch them with you it’ll be in my memory forever", 
"I lowkey wanna beat you in badminton cause hekdi nail dungi and if you beat me ill literally kiss you so hard that next time youll lose daily on purpose",
"If I was gay id def force you to date me and do homo things with me but id wont name you butterscotch but like rasmalai cause like hmmm lemme lick that upppp I’d lowkey eat you",
"I love how when I crashout on you, youre mostly calm and try to listen to me it’s really admirable. I hope ive made you feel the same way hard maybe? You do, let me know how it goes can do better or be better for you",
"I love how youre curious about everything and always listen to things closely and the eye contact tf ya youre just like incredibly like ai cannot replace me type vibe lolll, like umm wow come here",
"You always make me laugh somewhat or somehow when im pissed at you or we’re on call then im like huh why was I even mad at this cutie?? Its so funny but also so adorable about it",
"You promised me that youre gonna cook, massage and do stuff for me, now dont get me wrong id marry you even if you didnt but like okay hottie like im sold. SMASH ho aap",
"I love the way when I used to complaint about my skin or like headache youre just like paani peeyo like even tho I lowkey was like bhai paani and headache what, it lowkey reminded me of drink water lollll",
"YOURE FROM HIMACHAL?? Hello I’d do anything to be in Himachal id love it go on trails with you, eat all types of dhaams and just do whatever you do. All with you.",
"YOU LOVE PUPPIES YOU LOVE KIDS what else do I need absolutely imagine us having both I’d toh actually like go insane if we have cute babies and puppies ill actually hyperventilate when I come home, all this and the love of my life like omg (manifesting)",
"Remember once you made a video of your hair making a heart you sent me that on 10 jan 2025 and I still watch it till date its extremely cute like awww",
"I love when we call woh like hourssss take jaati hai even if its me yapping like its so fun to be with you call, remember when we video called we sat in silence for like 2 hours like wtf 😭 blessed my eyes tho like damn",
"I would love to learn saari history from you Mughals, kings, ind pal, wars everything non stop geopolitics matlab sabh ill hear everything for hoursss, your knowledge actually impresses me",
"I LOVE TALKING ABOUT YOU ALL DAYYY like koi bhi ho im like yk anshul…like pushups baat ho anshul coding ki baat anshul sports ki anshul politics anshul matlab abh bas ghar waalo ka reh gaya sunna baki sabh ka toh done hai",
"I still remember us looking at constellations discussing like what random ahh things and just you lowkey convinced me to be a panda nanny then you drop the bomb ki only Chinese citizens can be I was like wah, day 1 se aapki beaten sunnti thi",
"Remember when I used to draw random smiles on your notebooks and just annoy you itnaaa and when I used to steal your bag and just everything lol I loved annoying you, and now you ragebait how tables have turned", 
"Yk youre the first boy ive hugged or held hands with, like im not even lying. And first time too I was so scared to touch you not because you were a boy because you were ANSHUL, my anshul",
"I love when you sing on calls randomly?? Its so funny cause I make fun of you for bad singing or just like please bas kar but low-key it makes me blush…like even tho its completely not even realted to me im jus like omg stawwpp 🤭",
"I absolutely adore how much you love your mom even tho im scared of her but its so cute hearing you hug her, miss her, its just really sweet (hug your mom meri taraf se bhi)",
"I never ever imagined id date you, even tho I really admired you day 1 se I never realized how to started crushing on you, then how it slowly turned into love and fir bas it was literally just you. Like I feel like youre the one like my endgame",
"I LOVE YOUR CLOTHESSSSS, whenever I see you dressed up even tuition pe I was like basss mujhe dedo yeh. Remember I asked you for one of your t-shirts before going to Canada hmm dish nahi rahi meri closet mein",
"I remember when you used to come play meri galli mein for me🥺 it was the cutest thank you baby mere saath time spend karne ke liye itna awww you used to come meet me whenever I planned I love you",
"I had your cricket bat when we were non contact yk I used to clean it occasionally I saw it daily and I kept it dhyaan se hoping id give it back to you someday, I did Canada jaane se pehle, it was the best I was happy to see you",
"I literally can’t help falling in love with you daily, I feel like as the days goes by we just understand each other better, im toh super comfortable with you and its just I love you more each and everyday, im so grateful for you anshul",
"This is not a reason but ca youuu pleaseee say or write my name and send it to me, id be super happy Its the best for meeee",
"I LOVE when I ask for kissis from you, aap de dete ho like whatttt Bahar ho tabh bhi and the day you gave me 27 kisses was the best I was like over the moon mera hogaya tha bassss",
"I love that you get excited over your festivals with me and say oh our first Diwali our first lohri like awww what a darn cutieeeee thank you yaar",
"When you wrote me suchhhh a long paragraph on my birthday just you raw typing over 6000 words was just insane and then you said you ate chocolate at 12 am to celebrate aww anshul 🥺 I cannot wait to celebrate my birthdays with you", 
"Its so nice even re read our chats I love re reading them and I Starr the messages to read them again and again and laugh at it or just go awww and most of them are you sending me your videos hehehe",
"I would love our kids to have your genes, maths karvana aap unko aur ill pitch in and just be like hmm is papa bothering you then ill give them treats so they’ll be like omg mummy is my fav (hehehe evil plan)",
"Thank you you being with me babe it means the world to me, you once said if youll date you’d never want us to be long distance despite that you asked me to be your girlfriend literally 2 months after, really thanks for choosing this, for us, it means a lot",
"We’ve been through insane ups and downs insane fights and insane bas no contacts bhi while dating but yet always one of us finds the way back to each other, are we destine to be or what. I pray that we are and we fulfil that destiny I love you",
"I honestly watched you growing up from quiet reserved, to opening up, then to complete extrovert idk kitna nahi hai yeh kitna galat but for me ive seen this aap mein ive seen you get taller than me, its just really insane and we’re literally childhood sweethearts", 
"I remember in may when I was doing drama cause mami ji said something really bad and I deactivated everything and just vanished I think that day anshul 18 times and when I saw my phone I was like damn I think you lowkey saved me from doing something insane to myself (tehehe) thank you love",
"I love when I say something insanely cringe youre like no yaar aapka pyaar cringe nahi hai matlab cringe hai but bolna nahi kyunki mein bol rahi hu accha ji ajao fir kissi du",
"You know lowkey when I imagine my future now its not like when I have a husband kids its like when I have anshul as my husband and we have kids meine mann pakka karliya hai anshul ive locked you in my heart",
"One of our best happy moments was when you were talking with my dada ji, I adore and admire my dada ji a lot and seeing you talk to him so kindly gently and you guys discussing navy and all I was like so happy damaad milgaya types I was like running andar ghar ke bahar baar baar blushing and mom was like wtfff",
"Tujhe pata hai on our days of no contacts like living torture for me, I always wanna text you everyday just be like I love you can we end the no contact please but idk kyu I dont I think weirdly but yes loving you takes less effort than pretending that I dont love you",
"Yk sometimes when I panic a lot or overthink a lot I just think about you and somehow im like a bit calmer I smile and yk its a neuroscience fact that thinking about loved one can calm brain, stress kam and even physical pain youre my loved one anshul",
"I cannot wait to add you into my family, be a part of yours, it makes me beyond happy. I try to change certain things or habits about myself thats seen as weird bad so I can at least try to be better version of myself with you and my parents and just everyone special in my life. You make me better",
"I love when aryan calls me bhabhi lolll and that too best bhabhi mera toh wahi ho jaata hai I get so giggly its insane bhai, im glad you have a great friend like aryan hehe you deserve the best and more",
"You can pull both a moustache and clean shave off like wthhh thats actually like insane like how id smash both version yaar like wow if Henry Cavill saw you he’d be like damn handsome boy ngl youre so handsome", 
"I know ive said it so many times but I love the website you made me sooooo much yaar anshul wth why are you so cute the cursor has pink trail and hearts when you click yaaarrrr kya yaaarrrrrr im gonna cry its the best thing ever 🥺💗",
"I can’t wait to meet you super soon anshul, I wanna hug you the highest, kiss you the most and just be stuck to you 24/7. Thank you for the amazing yearrrrrssss I absolutely adore every bits and parts of our relationship. I LOVE YOU SHULI"

];

// ====== HARD LOCK SETTINGS ======
const LOCK_HOURS = 24; // unlock every 24 hours

// Storage keys
const KEY_USED = "lovejar_used_indices";
const KEY_NEXT_UNLOCK = "lovejar_next_unlock_ms";
const KEY_LAST_REASON = "lovejar_last_reason_index";

const jarBtn = document.getElementById("jarBtn");
const statusEl = document.getElementById("status");

const modal = document.getElementById("cardModal");
const closeModal = document.getElementById("closeModal");
const card = document.getElementById("card");
const reasonText = document.getElementById("reasonText");
const doneBtn = document.getElementById("doneBtn");



function nowMs() { return Date.now(); }

function getUsed() {
  try { return JSON.parse(localStorage.getItem(KEY_USED)) ?? []; }
  catch { return []; }
}
function setUsed(arr) {
  localStorage.setItem(KEY_USED, JSON.stringify(arr));
}

function getNextUnlockMs() {
  const v = localStorage.getItem(KEY_NEXT_UNLOCK);
  return v ? Number(v) : 0;
}
function setNextUnlockMs(ms) {
  localStorage.setItem(KEY_NEXT_UNLOCK, String(ms));
}

function formatCountdown(msLeft) {
  const totalSeconds = Math.max(0, Math.floor(msLeft / 1000));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  // e.g. "13h 22m" (or include seconds if you want)
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function isLocked() {
  const now = new Date();
  const indiaNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  return indiaNow.getTime() < getNextUnlockMs();
}

let countdownTimerId = null;

function startLiveCountdown({ statusEl, unlockAtMs, jarBtn }) {
  if (countdownTimerId) clearInterval(countdownTimerId);

  function format(ms) {
    const totalSec = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h}h ${m}m ${s}s`;
  }

  function tick() {
    const now = new Date();
    const indiaNow = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

  const remaining = getNextUnlockMs() - indiaNow.getTime();

    if (remaining <= 0) {
      statusEl.className = "unlocked";
statusEl.textContent = "Tap the jar to unlock today’s reason 💗";
      jarBtn.disabled = false;
      clearInterval(countdownTimerId);
countdownTimerId = null;
      return;
    }

   statusEl.className = "countdown";
statusEl.textContent = `Next reason unlocks in ${format(remaining)} 💞`;

     jarBtn.disabled = true;
  }

  tick(); // update immediately
  countdownTimerId = setInterval(tick, 1000);
}



function openModalWithReason(idx) {
  reasonText.textContent = REASONS[idx];
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  card.classList.remove("open"); // start closed
  statusEl.textContent = "💘";
}

function closeModalNow() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  card.classList.remove("open");
}

function lockForNext() {
  const now = new Date();

  // Get current time in India
  const indiaNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  // Next unlock = next India midnight
  const nextIndiaMidnight = new Date(indiaNow);
  nextIndiaMidnight.setHours(24, 0, 0, 0);

  setNextUnlockMs(nextIndiaMidnight.getTime());
 startLiveCountdown({ statusEl, unlockAtMs: getNextUnlockMs(), jarBtn });
}

function initUI() {
  if (isLocked()) {
    jarBtn.disabled = true;
    startLiveCountdown({ statusEl, unlockAtMs: getNextUnlockMs(), jarBtn });

  } else {
    jarBtn.disabled = false;
    statusEl.textContent = "Tap the jar to unlock today’s reason 💕";
  }
}

function getNextOrderedIndex() {
  const usedCount = getUsed().length;
  if (usedCount >= REASONS.length) return -1;
  return usedCount; // next reason in order
}

jarBtn.addEventListener("click", () => {
  if (isLocked()) {
    startLiveCountdown({ statusEl, unlockAtMs: getNextUnlockMs(), jarBtn });
    return;
  }

  const idx = getNextOrderedIndex();
  if (idx === -1) {
    statusEl.textContent = "A big hug and a date timeeee 💖";
    return;
  }

  // Mark as used
  const used = getUsed();
  used.push(idx);
  setUsed(used);
  localStorage.setItem(KEY_LAST_REASON, String(idx));

  // Show card
  openModalWithReason(idx);

  // Immediately lock for next time (India midnight)
  lockForNext();
});


// Card flip/open
card.addEventListener("click", () => {
  card.classList.toggle("open");
});

doneBtn.addEventListener("click", () => {
  closeModalNow();
});

closeModal.addEventListener("click", () => {
  closeModalNow();
});

// First load
initUI();
