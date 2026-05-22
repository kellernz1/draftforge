import fs from "node:fs";

const raw = JSON.parse(fs.readFileSync("champion.json", "utf8")).data;

const roleSets = {
  Top: new Set(
    [
      "Aatrox",
      "Akali",
      "Ambessa",
      "Aurora",
      "Camille",
      "Cho'Gath",
      "Darius",
      "Dr. Mundo",
      "Fiora",
      "Galio",
      "Gangplank",
      "Garen",
      "Gnar",
      "Gragas",
      "Gwen",
      "Heimerdinger",
      "Illaoi",
      "Irelia",
      "Jax",
      "Jayce",
      "Kayle",
      "Kennen",
      "Kled",
      "K'Sante",
      "Malphite",
      "Maokai",
      "Mordekaiser",
      "Nasus",
      "Olaf",
      "Ornn",
      "Pantheon",
      "Poppy",
      "Quinn",
      "Renekton",
      "Rengar",
      "Riven",
      "Rumble",
      "Ryze",
      "Sett",
      "Shen",
      "Singed",
      "Sion",
      "Tahm Kench",
      "Teemo",
      "Trundle",
      "Tryndamere",
      "Udyr",
      "Urgot",
      "Vayne",
      "Vladimir",
      "Volibear",
      "Warwick",
      "Wukong",
      "Yasuo",
      "Yone",
      "Yorick",
      "Zaahen",
    ],
  ),
  Jungle: new Set(
    [
      "Amumu",
      "Bel'Veth",
      "Briar",
      "Diana",
      "Ekko",
      "Elise",
      "Evelynn",
      "Fiddlesticks",
      "Gragas",
      "Graves",
      "Hecarim",
      "Ivern",
      "Jarvan IV",
      "Jax",
      "Karthus",
      "Kayn",
      "Kha'Zix",
      "Kindred",
      "Lee Sin",
      "Lillia",
      "Maokai",
      "Master Yi",
      "Nidalee",
      "Nocturne",
      "Nunu & Willump",
      "Olaf",
      "Poppy",
      "Rammus",
      "Rek'Sai",
      "Rell",
      "Rengar",
      "Sejuani",
      "Shaco",
      "Shyvana",
      "Skarner",
      "Taliyah",
      "Trundle",
      "Udyr",
      "Vi",
      "Viego",
      "Volibear",
      "Warwick",
      "Wukong",
      "Xin Zhao",
      "Zac",
      "Zaahen",
    ],
  ),
  Mid: new Set(
    [
      "Ahri",
      "Akali",
      "Akshan",
      "Anivia",
      "Annie",
      "Aurelion Sol",
      "Aurora",
      "Azir",
      "Brand",
      "Cassiopeia",
      "Corki",
      "Diana",
      "Ekko",
      "Fizz",
      "Galio",
      "Heimerdinger",
      "Hwei",
      "Irelia",
      "Jayce",
      "Karma",
      "Kassadin",
      "Katarina",
      "LeBlanc",
      "Lissandra",
      "Lucian",
      "Lux",
      "Malzahar",
      "Mel",
      "Naafiri",
      "Neeko",
      "Orianna",
      "Qiyana",
      "Ryze",
      "Seraphine",
      "Smolder",
      "Swain",
      "Sylas",
      "Syndra",
      "Taliyah",
      "Talon",
      "Tristana",
      "Twisted Fate",
      "Veigar",
      "Vel'Koz",
      "Vex",
      "Viktor",
      "Vladimir",
      "Xerath",
      "Yasuo",
      "Yone",
      "Zed",
      "Ziggs",
      "Zoe",
    ],
  ),
  ADC: new Set(
    [
      "Aphelios",
      "Ashe",
      "Caitlyn",
      "Corki",
      "Draven",
      "Ezreal",
      "Jhin",
      "Jinx",
      "Kai'Sa",
      "Kalista",
      "Kog'Maw",
      "Lucian",
      "Mel",
      "Miss Fortune",
      "Nilah",
      "Samira",
      "Senna",
      "Seraphine",
      "Sivir",
      "Smolder",
      "Tristana",
      "Twitch",
      "Varus",
      "Vayne",
      "Xayah",
      "Yunara",
      "Zeri",
      "Ziggs",
    ],
  ),
  Support: new Set(
    [
      "Alistar",
      "Amumu",
      "Ashe",
      "Bard",
      "Blitzcrank",
      "Brand",
      "Braum",
      "Janna",
      "Karma",
      "Leona",
      "Lulu",
      "Lux",
      "Maokai",
      "Mel",
      "Milio",
      "Morgana",
      "Nami",
      "Nautilus",
      "Neeko",
      "Pantheon",
      "Poppy",
      "Pyke",
      "Rakan",
      "Rell",
      "Renata Glasc",
      "Senna",
      "Seraphine",
      "Sett",
      "Sona",
      "Soraka",
      "Swain",
      "Tahm Kench",
      "Taric",
      "Thresh",
      "Vel'Koz",
      "Xerath",
      "Yuumi",
      "Zilean",
      "Zyra",
    ],
  ),
};

const tierSets = {
  S: new Set([
    "Alistar",
    "Ambessa",
    "Aphelios",
    "Aurora",
    "Azir",
    "Braum",
    "Corki",
    "Jinx",
    "Kai'Sa",
    "Kalista",
    "K'Sante",
    "Leona",
    "Nautilus",
    "Orianna",
    "Rell",
    "Renekton",
    "Rumble",
    "Sejuani",
    "Skarner",
    "Taliyah",
    "Varus",
    "Vi",
    "Wukong",
    "Xin Zhao",
  ]),
  A: new Set([
    "Aatrox",
    "Ahri",
    "Akali",
    "Annie",
    "Ashe",
    "Bard",
    "Blitzcrank",
    "Caitlyn",
    "Camille",
    "Ezreal",
    "Galio",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hwei",
    "Ivern",
    "Jarvan IV",
    "Jax",
    "Jayce",
    "Jhin",
    "Karma",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Maokai",
    "Mel",
    "Milio",
    "Miss Fortune",
    "Morgana",
    "Neeko",
    "Nidalee",
    "Nocturne",
    "Ornn",
    "Poppy",
    "Rakan",
    "Renata Glasc",
    "Ryze",
    "Senna",
    "Seraphine",
    "Smolder",
    "Sylas",
    "Syndra",
    "Tahm Kench",
    "Tristana",
    "Twisted Fate",
    "Viego",
    "Viktor",
    "Xayah",
    "Yone",
    "Yunara",
    "Zac",
    "Zeri",
    "Ziggs",
  ]),
  C: new Set([
    "Dr. Mundo",
    "Garen",
    "Illaoi",
    "Katarina",
    "Master Yi",
    "Nasus",
    "Qiyana",
    "Rammus",
    "Shaco",
    "Sion",
    "Sona",
    "Teemo",
    "Tryndamere",
    "Vel'Koz",
    "Yorick",
    "Yuumi",
  ]),
};

const magicDamage = new Set([
  "Ahri",
  "Amumu",
  "Anivia",
  "Annie",
  "Aurelion Sol",
  "Aurora",
  "Azir",
  "Brand",
  "Cassiopeia",
  "Diana",
  "Ekko",
  "Elise",
  "Evelynn",
  "Fiddlesticks",
  "Fizz",
  "Galio",
  "Gragas",
  "Gwen",
  "Heimerdinger",
  "Hwei",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kennen",
  "LeBlanc",
  "Lillia",
  "Lissandra",
  "Lux",
  "Malphite",
  "Malzahar",
  "Mel",
  "Mordekaiser",
  "Morgana",
  "Neeko",
  "Nidalee",
  "Orianna",
  "Rumble",
  "Ryze",
  "Seraphine",
  "Shyvana",
  "Singed",
  "Swain",
  "Syndra",
  "Taliyah",
  "Teemo",
  "Twisted Fate",
  "Veigar",
  "Vel'Koz",
  "Vex",
  "Viktor",
  "Vladimir",
  "Xerath",
  "Yuumi",
  "Zac",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
]);

const mixedDamage = new Set([
  "Akali",
  "Corki",
  "Jax",
  "Kai'Sa",
  "Kog'Maw",
  "K'Sante",
  "Smolder",
  "Udyr",
  "Varus",
  "Volibear",
  "Warwick",
  "Yone",
  "Yunara",
]);

const manualTags = {
  Alistar: ["Tank", "Engage", "Knockup", "Peel", "Frontline"],
  Ambessa: ["Bruiser", "Dive", "Mobility", "Initiator"],
  Aphelios: ["Marksman", "Scaling"],
  Aurora: ["Mage", "Mobility", "AoE", "Pick"],
  Azir: ["Mage", "Scaling", "WaveClear", "AoE"],
  Braum: ["Tank", "Peel", "Shield", "Frontline"],
  Corki: ["Marksman", "Poke", "WaveClear", "Scaling"],
  Jinx: ["Marksman", "Scaling", "AoE", "WaveClear"],
  "K'Sante": ["Tank", "Bruiser", "Frontline", "Peel"],
  Kalista: ["Marksman", "Early", "Bully", "Mobility"],
  Leona: ["Tank", "Engage", "Stun", "Root", "Frontline"],
  Nautilus: ["Tank", "Engage", "Root", "Knockup", "Frontline"],
  Orianna: ["Mage", "Shield", "AoE", "WaveClear", "Scaling"],
  Rell: ["Tank", "Engage", "Knockup", "Frontline"],
  Renekton: ["Bruiser", "Frontline", "Early", "Bully", "Stun"],
  Rumble: ["Mage", "AoE", "WaveClear", "Early"],
  Sejuani: ["Tank", "Engage", "Stun", "Slow", "Frontline"],
  Skarner: ["Tank", "Engage", "Suppression", "Frontline"],
  Taliyah: ["Mage", "Poke", "WaveClear", "AoE"],
  Varus: ["Marksman", "Poke", "Root", "WaveClear"],
  Vi: ["Bruiser", "Dive", "Initiator", "Suppression", "Early"],
  Wukong: ["Bruiser", "Engage", "Knockup", "Dive"],
  "Xin Zhao": ["Bruiser", "Early", "Dive", "Frontline"],
};

const counterMap = {
  Ahri: ["zed", "talon", "akali"],
  Alistar: ["rell", "leona", "nautilus"],
  Braum: ["nautilus", "leona", "rell"],
  Jinx: ["vayne", "tristana"],
  Kalista: ["zeri", "smolder"],
  Leona: ["vayne", "soraka", "lux"],
  Lissandra: ["zed", "akali", "yasuo", "yone"],
  Malphite: ["fiora", "quinn", "yasuo"],
  Morgana: ["blitzcrank", "leona", "nautilus", "vi"],
  Nautilus: ["jinx", "jhin", "vayne"],
  Rell: ["jinx", "varus", "aphelios"],
  Sejuani: ["lee-sin", "jarvan-iv", "xin-zhao"],
  Skarner: ["jinx", "aphelios", "azir"],
  Varus: ["kalista", "xayah", "kaisa"],
  Vi: ["jinx", "zed", "lucian"],
};

const goodWithMap = {
  Ahri: ["vi", "jarvan-iv", "wukong"],
  Alistar: ["kalista", "kaisa", "varus"],
  Aphelios: ["thresh", "lulu", "braum"],
  Azir: ["sejuani", "rell", "skarner"],
  Jinx: ["thresh", "leona", "lulu", "braum"],
  Kalista: ["renata-glasc", "alistar", "rell"],
  Orianna: ["malphite", "vi", "jarvan-iv", "wukong"],
  Rell: ["jinx", "varus", "taliyah"],
  Sejuani: ["renekton", "ksante", "azir"],
  Skarner: ["orianna", "azir", "jinx"],
  Taliyah: ["rell", "vi", "nautilus"],
  Varus: ["nautilus", "ashe", "karma"],
  Vi: ["ahri", "orianna", "galio"],
};

const weakAgainstMap = {
  Aphelios: ["vi", "skarner", "nautilus"],
  Azir: ["leblanc", "taliyah", "vi"],
  Jinx: ["zed", "vi", "blitzcrank"],
  Kalista: ["ashe", "braum", "nautilus"],
  Rell: ["morgana", "janna", "braum"],
  Skarner: ["morgana", "taliyah", "poppy"],
  Varus: ["vi", "nautilus", "malphite"],
};

const slug = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/'/g, "")
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace("wukong", "wukong")
    .replace("kaisa", "kaisa")
    .replace("khazix", "khazix")
    .replace("kogmaw", "kogmaw")
    .replace("ksante", "ksante")
    .replace("reksai", "reksai")
    .replace("velkoz", "velkoz");

const defaultRoles = (champion) => {
  const roles = Object.entries(roleSets)
    .filter(([, set]) => set.has(champion.name))
    .map(([role]) => role);

  if (roles.length > 0) {
    return roles;
  }

  if (champion.tags.includes("Marksman")) return ["ADC"];
  if (champion.tags.includes("Support")) return ["Support"];
  if (champion.tags.includes("Assassin")) return ["Mid"];
  if (champion.tags.includes("Tank")) return ["Top"];
  if (champion.tags.includes("Fighter")) return ["Top"];
  return ["Mid"];
};

const tierFor = (name) => {
  if (tierSets.S.has(name)) return "S";
  if (tierSets.A.has(name)) return "A";
  if (tierSets.C.has(name)) return "C";
  return "B";
};

const damageFor = (name, tags) => {
  if (mixedDamage.has(name)) return "Mixed";
  if (magicDamage.has(name) || tags.includes("Mage") || tags.includes("Support")) return "Magic";
  return "Physical";
};

const enrichTags = (champion, roles) => {
  const tags = new Set([...(manualTags[champion.name] ?? champion.tags)]);

  if (roles.includes("Support")) tags.add("Peel");
  if (champion.tags.includes("Tank")) {
    tags.add("Tank");
    tags.add("Frontline");
  }
  if (champion.tags.includes("Fighter")) tags.add("Bruiser");
  if (champion.tags.includes("Marksman")) tags.add("Marksman");
  if (champion.tags.includes("Mage")) {
    tags.add("Mage");
    tags.add("WaveClear");
  }
  if (champion.tags.includes("Assassin")) {
    tags.add("Assassin");
    tags.add("Dive");
  }
  if (["Alistar", "Amumu", "Jarvan IV", "Leona", "Malphite", "Nautilus", "Ornn", "Rakan", "Rell", "Sejuani", "Skarner", "Wukong", "Zac"].includes(champion.name)) tags.add("Engage");
  if (["Ashe", "Caitlyn", "Jayce", "Karma", "Lux", "Nidalee", "Varus", "Xerath", "Ziggs", "Zoe"].includes(champion.name)) tags.add("Poke");
  if (["Aphelios", "Aurelion Sol", "Azir", "Jinx", "Kayle", "Kog'Maw", "Smolder", "Vayne", "Veigar"].includes(champion.name)) tags.add("Scaling");
  if (["Caitlyn", "Draven", "Kalista", "Lucian", "Nidalee", "Renekton", "Xin Zhao"].includes(champion.name)) tags.add("Early");

  return [...tags].slice(0, 8);
};

const champions = Object.values(raw)
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((champion) => {
    const roles = defaultRoles(champion);
    const id = slug(champion.name);
    return {
      id,
      name: champion.name,
      roles,
      damageType: damageFor(champion.name, champion.tags),
      tags: enrichTags(champion, roles),
      tier: tierFor(champion.name),
      counters: counterMap[champion.name] ?? [],
      goodWith: goodWithMap[champion.name] ?? [],
      weakAgainst: weakAgainstMap[champion.name] ?? [],
      notes: `Atualizado para patch 16.10.1 / 26.10. Tier ${tierFor(champion.name)} estimado para draft competitivo.`,
    };
  });

const body = `import type { Champion } from "../types/Champion";

// Dataset gerado a partir do Data Dragon 16.10.1 e ajustado para o meta competitivo do patch 26.10.
// Tiers: S = prioridade alta/flex/pro play, A = forte e draftavel, B = situacional, C = niche ou baixo valor competitivo.
export const champions: Champion[] = ${JSON.stringify(champions, null, 2)};
`;

fs.writeFileSync("src/data/champions.ts", body);
