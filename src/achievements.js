//achievements list taken from the steam web api
const achievements = {
  vinyl0: {
    defaultvalue: 0,
    displayName: "Vinyl #0",
    hidden: 1,
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/afe81040f9fe00f80756d191141e36967cdaee80.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/17b14ae91518763b1219334fcbf7e58baa87d073.jpg",
  },
  vinyl1: {
    defaultvalue: 0,
    displayName: "Vinyl #1",
    hidden: 1,
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/c2c57cdedbbae835042ae6c31a9140b70e00f247.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/17b14ae91518763b1219334fcbf7e58baa87d073.jpg",
  },
  vinyl2: {
    defaultvalue: 0,
    displayName: "Vinyl #2",
    hidden: 1,
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/423960b689a6c4685cd234dd504eb497b864582f.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/17b14ae91518763b1219334fcbf7e58baa87d073.jpg",
  },
  vinyl3: {
    defaultvalue: 0,
    displayName: "Vinyl #3",
    hidden: 1,
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/f670e671a4e93483e3b708166afddbcc773ede90.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/17b14ae91518763b1219334fcbf7e58baa87d073.jpg",
  },
  vinyl4: {
    defaultvalue: 0,
    displayName: "Vinyl #4",
    hidden: 1,
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/c3e65e902f37446c2c14a5cc702667a2f6e97066.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/17b14ae91518763b1219334fcbf7e58baa87d073.jpg",
  },
  vinyl5: {
    defaultvalue: 0,
    displayName: "Vinyl #5",
    hidden: 1,
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/ea47a9dac3ee03c7399a398e53193909d28145a9.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/17b14ae91518763b1219334fcbf7e58baa87d073.jpg",
  },
  phone: {
    defaultvalue: 0,
    displayName: "Hello?",
    hidden: 0,
    description: '"Your estimated wait time is forever."',
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/70aad69cdf709b79e9c37ecd5cfbb1ea1affb77e.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/958137ceb9cb55380792f35be3e210f1c238cb5b.jpg",
  },
  fly: {
    defaultvalue: 0,
    displayName: "I believe I can fly",
    hidden: 0,
    description: "...but no you can't, because you're a sheep.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/52f20c3538aa36fceae73d24875e700b70384300.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/06331c2e6081b48a1ec489024381d72d9e9d7114.jpg",
  },
  skill1: {
    defaultvalue: 0,
    displayName: "Double jump!",
    hidden: 0,
    description: '"Taking You Higher"',
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/fc99bbd5ca67df2681020c31a53e55a7ca6d46ac.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/2b8c474865546ffe7fd8d38d23889ecf96741bc0.jpg",
  },
  skill2: {
    defaultvalue: 0,
    displayName: "Time to run!",
    hidden: 0,
    description: "GOTTA GO FAST",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/4dcee3b7a7da712f7367a7f00613f245e871bb2a.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/7844c98da2f6759f5dd34636e1ab2c04522f7c24.jpg",
  },
  skill3: {
    defaultvalue: 0,
    displayName: "Weird magic...",
    hidden: 0,
    description: "But now you can fly.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/35bdac75e830dcf56cda9af1514df6b0f5bb8b8a.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/a3f9ed201b9e4849b199d6dc50a8a441b31ab746.jpg",
  },
  scary: {
    defaultvalue: 0,
    displayName: "What?",
    hidden: 0,
    description: "Something happened here...",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/fa542b5828d7d5695c58186fad5930a6de67b612.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/09843cec25d32987fa493c89eb73862cca7c5fe5.jpg",
  },
  patches1: {
    defaultvalue: 0,
    displayName: "Hi Patches!",
    hidden: 0,
    description: "You made a new friend!",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/a8593c37b19ff5541ef610ccffea7f9468a8bbf6.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/fe39040b0c219c70bed0f4fb0147b29fa7e9e436.jpg",
  },
  elevator: {
    defaultvalue: 0,
    displayName: "It's working!",
    hidden: 0,
    description: "Such an engineer.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/8a5610af54930a6473cad7ec7bf387c6d5182d2e.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/b46e2ddd272fcf75e6639d0b0813c9a1f5ce8c9d.jpg",
  },
  crystals: {
    defaultvalue: 0,
    displayName: "Shine bright like a crystal",
    hidden: 0,
    description: "You lit all the crystals!",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/b3d745e33fcc9d68ffebf7533007b3ed07dfaabe.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/4f411906def1757627dc420f1f31c5d4ee8bbe38.jpg",
  },
  chair: {
    defaultvalue: 0,
    displayName: "You spin me right 'round",
    hidden: 0,
    description: "BABY, RIGHT 'ROUND",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/bb5f856f9f5d3adcb12b5a2129ab9a77ab7c2f8a.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/efc6374ff23a7bbf9cf74f33742baf5161962489.jpg",
  },
  speedrun1: {
    defaultvalue: 0,
    displayName: "That's a record!",
    hidden: 0,
    description: "You beat the game in 45 minutes.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/75b31f64095c93704f6bf7b290c38c3a091c22a2.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/ba93178f33d687d74825930c0561d0f1227e6e8b.jpg",
  },
  speedrun2: {
    defaultvalue: 0,
    displayName: "Hello, speedrunner.",
    hidden: 1,
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/f857d0e0e192bd5b331917f844bc54dc1cf5b468.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/ba93178f33d687d74825930c0561d0f1227e6e8b.jpg",
  },
  flower: {
    defaultvalue: 0,
    displayName: "It's just a flower...",
    hidden: 0,
    description: "It feels nostalgic here.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/630b370e045df6f4f0ab898aa29847cd07f68c95.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/01535c76d710a05b8808cea7abe6e419e871a869.jpg",
  },
  door: {
    defaultvalue: 0,
    displayName: "Open the door!",
    hidden: 0,
    description: "You have activated the 6 levers.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/09a771d48b2edc13cb5f21fc3732838365a60e57.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/b1dded870974f751892b5fe7f520c7014c089274.jpg",
  },
  records: {
    defaultvalue: 0,
    displayName: "Lore master",
    hidden: 0,
    description: "You listened to all the tapes.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/d5f451648bd89cbe53e635a41cabd7cfcf5a46ee.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/499dc4fd289f8f5738a917e6c8d28086cc057009.jpg",
  },
  trap: {
    defaultvalue: 0,
    displayName: "Ancient trap",
    hidden: 0,
    description: "Archaeologist is a dangerous job.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/c6599dc96e651a628352a9ff39bdcbb9bdcad453.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/33c4e634589932c2feb3c243c318542364aae797.jpg",
  },
  run: {
    defaultvalue: 0,
    displayName: "The way of the rabbit",
    hidden: 0,
    description: "Run as fast as you can.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/a6279dd4f5e74229918f5c7c36bada8ea43247e5.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/60997977b01ae56380304f1d904307429820bd68.jpg",
  },
  patches2: {
    defaultvalue: 0,
    displayName: "Complicated relationship",
    hidden: 0,
    description: "You showed Patches who's the boss.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/de39309fd2e46573943ea765786a85d2721e657f.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/d801cd3dd5be37e587ed6d25b5c2d28aa4c6a86a.jpg",
  },
  paris: {
    defaultvalue: 0,
    displayName: "Oh!",
    hidden: 0,
    description: "I know this place!",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/40cc45e6e8448bac7c8062b052874cb44736d7b4.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/0c177147f90e1553101244b91481f547a06f972b.jpg",
  },
  easteregg: {
    defaultvalue: 0,
    displayName: "You found Sheepy!",
    hidden: 0,
    description: "Wait, another Sheepy?",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/2033c5f047b0cf2248ceea18d7ca6783b652cbcc.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/c3ec492cfa67722e7e46599ded2f63ccb9db15e9.jpg",
  },
  portal: {
    defaultvalue: 0,
    displayName: "The End",
    hidden: 0,
    description: "You finished the game.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/06238508f23f31998858d8fddf6f73a6f8ae1e82.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/ee9399e24a07f5c971ceed446172275bc15fce18.jpg",
  },
  nodeath: {
    defaultvalue: 0,
    displayName: "SHEEPY STRONG",
    hidden: 0,
    description: "You finished the game without dying.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/74753d1df9dbbc9b1f899934992b83a37683b0d3.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/f8586a9fd0319a260b8a84c91727455872388b0f.jpg",
  },
  dontgiveup: {
    defaultvalue: 0,
    displayName: "It's a hard one...",
    hidden: 0,
    description: "You can do it!",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/a3cb3f2456fc678f7c052f03091caea8e321a669.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/629665d2f9ca555d00ce011becd8bd641bf4c61c.jpg",
  },
  voice: {
    defaultvalue: 0,
    displayName: "Your destiny...",
    hidden: 0,
    description: "... is awaiting you.",
    icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/81d66f545121ddf2c53b775c1011ad0e3d85d421.jpg",
    icongray:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/1568400/3e9c3d39a927f4d8bf8ffc955f20fbd932493bbb.jpg",
  },
};

var achievement_status = {};
var channel = new BroadcastChannel("achievements");

function load_achievements() {
  if (!localStorage.getItem("achievements")) {
    for (let achievement_name in achievements) {
      achievement_status[achievement_name] = false;
    }
    save_achievements();
  }
  else {
    achievement_status = JSON.parse(localStorage.getItem("achievements"));
  }
}

function save_achievements() {
  localStorage.setItem("achievements", JSON.stringify(achievement_status));
}

function activate_achievement(name) {
  if (achievement_status[name]) return;
  achievement_status[name] = true;
  let achievement = achievements[name];
  save_achievements();

  let notification = document.createElement("div");
  notification.className = "notification";

  let img = document.createElement("img");
  img.className = "notification_img";
  let text_div = document.createElement("div");
  text_div.className = "achievement_text";
  let title_element = document.createElement("p");
  title_element.className = "achievement_title";
  let description_element = document.createElement("p");
  description_element.className = "achievement_description";

  img.src = achievement.icon;
  title_element.innerText = "Achievement Unlocked!";
  description_element.innerText = achievement.displayName;

  text_div.append(title_element);
  text_div.append(description_element);
  notification.append(img);
  notification.append(text_div);

  document.body.append(notification);
  setTimeout(() => {
    notification.remove();
  }, 6000)

  //notify other tabs
  channel.postMessage(name);
}

function achievement_div(achievement) {
  let name = achievement.name;
  let div = document.createElement("div");
  div.className = "achievement_div";
  let img = document.createElement("img");
  img.className = "achievement_img"

  if (achievement_status[name])
    img.src = achievement.icon;
  else
    img.src = achievement.icongray;

  let text_div = document.createElement("div");
  text_div.className = "achievement_text";
  let title_element = document.createElement("p");
  title_element.className = "achievement_title";
  let description_element = document.createElement("p");
  description_element.className = "achievement_description";

  if (achievement.hidden && !achievement_status[name]) {
    title_element.innerText = "Hidden Achievement";
    img.src = "hidden.png";
  }
  else {
    title_element.innerText = achievement.displayName;
    description_element.innerText = achievement.description || "";
  }

  text_div.append(title_element);
  text_div.append(description_element);
  div.append(img);
  div.append(text_div);

  return div;
}

function populate_grid(achievements_list, grid) {
  grid.innerHTML = "";
  if (!achievements_list.length) {
    grid.style.display = "none";
    return;
  }

  for (let achievement of achievements_list) {
    let div = achievement_div(achievement);
    grid.append(div);
  }
  grid.style.display = "grid";
}

function populate_achievements() {
  //reorder achievements
  let unlocked = [];
  let locked = [];
  let hidden = [];

  for (let name in achievements) {
    let achievement = achievements[name];
    achievement.name = name;

    if (achievement_status[name]) 
      unlocked.push(achievement);
    else if (achievement.hidden)
      hidden.push(achievement);
    else
      locked.push(achievement);
  }
  locked = locked.concat(hidden);

  let unlocked_header = document.getElementById("unlocked_header");
  let locked_header = document.getElementById("locked_header");

  unlocked_header.style.display = unlocked.length ? "block" : "none";
  locked_header.style.display = locked.length ? "block" : "none";
  
  populate_grid(unlocked, document.getElementById("unlocked_grid"));
  populate_grid(locked, document.getElementById("locked_grid"));
}

function index_load() {
  populate_achievements();
  channel.onmessage = () => {
    load_achievements();
    populate_achievements();
  };
}

//disable back/forward cache to reduce memory usage
window.addEventListener("unload", function(){});
window.addEventListener("beforeunload", function(){});

load_achievements();