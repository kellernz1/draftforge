import type { Champion } from "../types/Champion";

// Dataset gerado a partir do Data Dragon 16.10.1 e ajustado para o meta competitivo do patch 26.10.
// Tiers: S = prioridade alta/flex/pro play, A = forte e draftavel, B = situacional, C = niche ou baixo valor competitivo.
export const champions: Champion[] = [
  {
    "id": "aatrox",
    "name": "Aatrox",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Bruiser"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "ahri",
    "name": "Ahri",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Assassin",
      "WaveClear",
      "Dive"
    ],
    "tier": "A",
    "counters": [
      "zed",
      "talon",
      "akali"
    ],
    "goodWith": [
      "vi",
      "jarvan-iv",
      "wukong"
    ],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "akali",
    "name": "Akali",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Mixed",
    "tags": [
      "Assassin",
      "Dive"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "akshan",
    "name": "Akshan",
    "roles": [
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Assassin",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "alistar",
    "name": "Alistar",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Engage",
      "Knockup",
      "Peel",
      "Frontline"
    ],
    "tier": "S",
    "counters": [
      "rell",
      "leona",
      "nautilus"
    ],
    "goodWith": [
      "kalista",
      "kaisa",
      "varus"
    ],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "ambessa",
    "name": "Ambessa",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Bruiser",
      "Dive",
      "Mobility",
      "Initiator",
      "Assassin"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "amumu",
    "name": "Amumu",
    "roles": [
      "Jungle",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Support",
      "Peel",
      "Frontline",
      "Engage"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "anivia",
    "name": "Anivia",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "annie",
    "name": "Annie",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "aphelios",
    "name": "Aphelios",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Scaling"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [
      "thresh",
      "lulu",
      "braum"
    ],
    "weakAgainst": [
      "vi",
      "skarner",
      "nautilus"
    ],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "ashe",
    "name": "Ashe",
    "roles": [
      "ADC",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Marksman",
      "Support",
      "Peel",
      "Poke"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "aurelion-sol",
    "name": "Aurelion Sol",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear",
      "Scaling"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "aurora",
    "name": "Aurora",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Mobility",
      "AoE",
      "Pick",
      "WaveClear",
      "Assassin",
      "Dive"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "azir",
    "name": "Azir",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Scaling",
      "WaveClear",
      "AoE",
      "Marksman"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [
      "sejuani",
      "rell",
      "skarner"
    ],
    "weakAgainst": [
      "leblanc",
      "taliyah",
      "vi"
    ],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "bard",
    "name": "Bard",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "belveth",
    "name": "Bel'Veth",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "blitzcrank",
    "name": "Blitzcrank",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Support",
      "Peel",
      "Frontline"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "brand",
    "name": "Brand",
    "roles": [
      "Mid",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "braum",
    "name": "Braum",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Peel",
      "Shield",
      "Frontline"
    ],
    "tier": "S",
    "counters": [
      "nautilus",
      "leona",
      "rell"
    ],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "briar",
    "name": "Briar",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "caitlyn",
    "name": "Caitlyn",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Poke",
      "Early"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "camille",
    "name": "Camille",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "cassiopeia",
    "name": "Cassiopeia",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "chogath",
    "name": "Cho'Gath",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Mage",
      "Frontline",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "corki",
    "name": "Corki",
    "roles": [
      "Mid",
      "ADC"
    ],
    "damageType": "Mixed",
    "tags": [
      "Marksman",
      "Poke",
      "WaveClear",
      "Scaling",
      "Mage"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "darius",
    "name": "Darius",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "diana",
    "name": "Diana",
    "roles": [
      "Jungle",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "dr-mundo",
    "name": "Dr. Mundo",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Fighter",
      "Frontline",
      "Bruiser"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "draven",
    "name": "Draven",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Early"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "ekko",
    "name": "Ekko",
    "roles": [
      "Jungle",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Mage",
      "WaveClear",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "elise",
    "name": "Elise",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Mage",
      "WaveClear",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "evelynn",
    "name": "Evelynn",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Mage",
      "WaveClear",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "ezreal",
    "name": "Ezreal",
    "roles": [
      "ADC"
    ],
    "damageType": "Magic",
    "tags": [
      "Marksman",
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "fiddlesticks",
    "name": "Fiddlesticks",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "fiora",
    "name": "Fiora",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "fizz",
    "name": "Fizz",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Fighter",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "galio",
    "name": "Galio",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Mage",
      "Frontline",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "gangplank",
    "name": "Gangplank",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "garen",
    "name": "Garen",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "gnar",
    "name": "Gnar",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "gragas",
    "name": "Gragas",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Fighter",
      "Mage",
      "Bruiser",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "graves",
    "name": "Graves",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "gwen",
    "name": "Gwen",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Fighter",
      "Bruiser"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "hecarim",
    "name": "Hecarim",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "heimerdinger",
    "name": "Heimerdinger",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "hwei",
    "name": "Hwei",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "illaoi",
    "name": "Illaoi",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "irelia",
    "name": "Irelia",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "ivern",
    "name": "Ivern",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "janna",
    "name": "Janna",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "jarvan-iv",
    "name": "Jarvan IV",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser",
      "Engage"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "jax",
    "name": "Jax",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Mixed",
    "tags": [
      "Fighter",
      "Bruiser"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "jayce",
    "name": "Jayce",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Marksman",
      "Bruiser",
      "Poke"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "jhin",
    "name": "Jhin",
    "roles": [
      "ADC"
    ],
    "damageType": "Magic",
    "tags": [
      "Marksman",
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "jinx",
    "name": "Jinx",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Scaling",
      "AoE",
      "WaveClear"
    ],
    "tier": "S",
    "counters": [
      "vayne",
      "tristana"
    ],
    "goodWith": [
      "thresh",
      "leona",
      "lulu",
      "braum"
    ],
    "weakAgainst": [
      "zed",
      "vi",
      "blitzcrank"
    ],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "ksante",
    "name": "K'Sante",
    "roles": [
      "Top"
    ],
    "damageType": "Mixed",
    "tags": [
      "Tank",
      "Bruiser",
      "Frontline",
      "Peel"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "kaisa",
    "name": "Kai'Sa",
    "roles": [
      "ADC"
    ],
    "damageType": "Mixed",
    "tags": [
      "Marksman",
      "Mage",
      "WaveClear"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "kalista",
    "name": "Kalista",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Early",
      "Bully",
      "Mobility"
    ],
    "tier": "S",
    "counters": [
      "zeri",
      "smolder"
    ],
    "goodWith": [
      "renata-glasc",
      "alistar",
      "rell"
    ],
    "weakAgainst": [
      "ashe",
      "braum",
      "nautilus"
    ],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "karma",
    "name": "Karma",
    "roles": [
      "Mid",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear",
      "Poke"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "karthus",
    "name": "Karthus",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "kassadin",
    "name": "Kassadin",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Mage",
      "WaveClear",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "katarina",
    "name": "Katarina",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Mage",
      "WaveClear",
      "Dive"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "kayle",
    "name": "Kayle",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Marksman",
      "WaveClear",
      "Scaling"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "kayn",
    "name": "Kayn",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "kennen",
    "name": "Kennen",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "khazix",
    "name": "Kha'Zix",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Assassin",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "kindred",
    "name": "Kindred",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "kled",
    "name": "Kled",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "kogmaw",
    "name": "Kog'Maw",
    "roles": [
      "ADC"
    ],
    "damageType": "Mixed",
    "tags": [
      "Marksman",
      "Mage",
      "WaveClear",
      "Scaling"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "leblanc",
    "name": "LeBlanc",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Mage",
      "WaveClear",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "lee-sin",
    "name": "Lee Sin",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "leona",
    "name": "Leona",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Engage",
      "Stun",
      "Root",
      "Frontline",
      "Peel"
    ],
    "tier": "S",
    "counters": [
      "vayne",
      "soraka",
      "lux"
    ],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "lillia",
    "name": "Lillia",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Fighter",
      "Mage",
      "Bruiser",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "lissandra",
    "name": "Lissandra",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [
      "zed",
      "akali",
      "yasuo",
      "yone"
    ],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "lucian",
    "name": "Lucian",
    "roles": [
      "Mid",
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Assassin",
      "Dive",
      "Early"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "lulu",
    "name": "Lulu",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "lux",
    "name": "Lux",
    "roles": [
      "Mid",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear",
      "Poke"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "malphite",
    "name": "Malphite",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Mage",
      "Frontline",
      "WaveClear",
      "Engage"
    ],
    "tier": "B",
    "counters": [
      "fiora",
      "quinn",
      "yasuo"
    ],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "malzahar",
    "name": "Malzahar",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "maokai",
    "name": "Maokai",
    "roles": [
      "Top",
      "Jungle",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Support",
      "Peel",
      "Frontline"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "master-yi",
    "name": "Master Yi",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "mel",
    "name": "Mel",
    "roles": [
      "Mid",
      "ADC",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "milio",
    "name": "Milio",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "miss-fortune",
    "name": "Miss Fortune",
    "roles": [
      "ADC"
    ],
    "damageType": "Magic",
    "tags": [
      "Marksman",
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "mordekaiser",
    "name": "Mordekaiser",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Fighter",
      "Mage",
      "Bruiser",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "morgana",
    "name": "Morgana",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [
      "blitzcrank",
      "leona",
      "nautilus",
      "vi"
    ],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "naafiri",
    "name": "Naafiri",
    "roles": [
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Assassin",
      "Fighter",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "nami",
    "name": "Nami",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "nasus",
    "name": "Nasus",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "nautilus",
    "name": "Nautilus",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Engage",
      "Root",
      "Knockup",
      "Frontline",
      "Peel"
    ],
    "tier": "S",
    "counters": [
      "jinx",
      "jhin",
      "vayne"
    ],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "neeko",
    "name": "Neeko",
    "roles": [
      "Mid",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "nidalee",
    "name": "Nidalee",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Assassin",
      "Mage",
      "WaveClear",
      "Dive",
      "Poke",
      "Early"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "nilah",
    "name": "Nilah",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "nocturne",
    "name": "Nocturne",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "nunu-and-willump",
    "name": "Nunu & Willump",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Mage",
      "Frontline",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "olaf",
    "name": "Olaf",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "orianna",
    "name": "Orianna",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Shield",
      "AoE",
      "WaveClear",
      "Scaling"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [
      "malphite",
      "vi",
      "jarvan-iv",
      "wukong"
    ],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "ornn",
    "name": "Ornn",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Frontline",
      "Engage"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "pantheon",
    "name": "Pantheon",
    "roles": [
      "Top",
      "Support"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Peel",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "poppy",
    "name": "Poppy",
    "roles": [
      "Top",
      "Jungle",
      "Support"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Fighter",
      "Peel",
      "Frontline",
      "Bruiser"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "pyke",
    "name": "Pyke",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Assassin",
      "Peel",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "qiyana",
    "name": "Qiyana",
    "roles": [
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Assassin",
      "Dive"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "quinn",
    "name": "Quinn",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Assassin",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "rakan",
    "name": "Rakan",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Peel",
      "Engage"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "rammus",
    "name": "Rammus",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Frontline"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "reksai",
    "name": "Rek'Sai",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "rell",
    "name": "Rell",
    "roles": [
      "Jungle",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Engage",
      "Knockup",
      "Frontline",
      "Peel"
    ],
    "tier": "S",
    "counters": [
      "jinx",
      "varus",
      "aphelios"
    ],
    "goodWith": [
      "jinx",
      "varus",
      "taliyah"
    ],
    "weakAgainst": [
      "morgana",
      "janna",
      "braum"
    ],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "renata-glasc",
    "name": "Renata Glasc",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "renekton",
    "name": "Renekton",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Bruiser",
      "Frontline",
      "Early",
      "Bully",
      "Stun",
      "Tank"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "rengar",
    "name": "Rengar",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Assassin",
      "Fighter",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "riven",
    "name": "Riven",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "rumble",
    "name": "Rumble",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "AoE",
      "WaveClear",
      "Early",
      "Bruiser"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "ryze",
    "name": "Ryze",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "samira",
    "name": "Samira",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Assassin",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "sejuani",
    "name": "Sejuani",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Engage",
      "Stun",
      "Slow",
      "Frontline"
    ],
    "tier": "S",
    "counters": [
      "lee-sin",
      "jarvan-iv",
      "xin-zhao"
    ],
    "goodWith": [
      "renekton",
      "ksante",
      "azir"
    ],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "senna",
    "name": "Senna",
    "roles": [
      "ADC",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Marksman",
      "Peel"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "seraphine",
    "name": "Seraphine",
    "roles": [
      "Mid",
      "ADC",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "sett",
    "name": "Sett",
    "roles": [
      "Top",
      "Support"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Peel",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "shaco",
    "name": "Shaco",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Assassin",
      "Dive"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "shen",
    "name": "Shen",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Frontline"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "shyvana",
    "name": "Shyvana",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "singed",
    "name": "Singed",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Mage",
      "Frontline",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "sion",
    "name": "Sion",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Fighter",
      "Frontline",
      "Bruiser"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "sivir",
    "name": "Sivir",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "skarner",
    "name": "Skarner",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Tank",
      "Engage",
      "Suppression",
      "Frontline",
      "Bruiser"
    ],
    "tier": "S",
    "counters": [
      "jinx",
      "aphelios",
      "azir"
    ],
    "goodWith": [
      "orianna",
      "azir",
      "jinx"
    ],
    "weakAgainst": [
      "morgana",
      "taliyah",
      "poppy"
    ],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "smolder",
    "name": "Smolder",
    "roles": [
      "Mid",
      "ADC"
    ],
    "damageType": "Mixed",
    "tags": [
      "Marksman",
      "Mage",
      "WaveClear",
      "Scaling"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "sona",
    "name": "Sona",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "soraka",
    "name": "Soraka",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "swain",
    "name": "Swain",
    "roles": [
      "Mid",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "sylas",
    "name": "Sylas",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Assassin",
      "WaveClear",
      "Dive"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "syndra",
    "name": "Syndra",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "tahm-kench",
    "name": "Tahm Kench",
    "roles": [
      "Top",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Support",
      "Peel",
      "Frontline"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "taliyah",
    "name": "Taliyah",
    "roles": [
      "Jungle",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Poke",
      "WaveClear",
      "AoE"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [
      "rell",
      "vi",
      "nautilus"
    ],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "talon",
    "name": "Talon",
    "roles": [
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Assassin",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "taric",
    "name": "Taric",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Tank",
      "Peel",
      "Frontline"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "teemo",
    "name": "Teemo",
    "roles": [
      "Top"
    ],
    "damageType": "Magic",
    "tags": [
      "Marksman",
      "Mage",
      "WaveClear"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "thresh",
    "name": "Thresh",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Tank",
      "Peel",
      "Frontline"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "tristana",
    "name": "Tristana",
    "roles": [
      "Mid",
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Assassin",
      "Dive"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "trundle",
    "name": "Trundle",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "tryndamere",
    "name": "Tryndamere",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "twisted-fate",
    "name": "Twisted Fate",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Marksman",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "twitch",
    "name": "Twitch",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Assassin",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "udyr",
    "name": "Udyr",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Mixed",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "urgot",
    "name": "Urgot",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "varus",
    "name": "Varus",
    "roles": [
      "ADC"
    ],
    "damageType": "Mixed",
    "tags": [
      "Marksman",
      "Poke",
      "Root",
      "WaveClear",
      "Mage"
    ],
    "tier": "S",
    "counters": [
      "kalista",
      "xayah",
      "kaisa"
    ],
    "goodWith": [
      "nautilus",
      "ashe",
      "karma"
    ],
    "weakAgainst": [
      "vi",
      "nautilus",
      "malphite"
    ],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "vayne",
    "name": "Vayne",
    "roles": [
      "Top",
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman",
      "Assassin",
      "Dive",
      "Scaling"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "veigar",
    "name": "Veigar",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear",
      "Scaling"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "velkoz",
    "name": "Vel'Koz",
    "roles": [
      "Mid",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "vex",
    "name": "Vex",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "vi",
    "name": "Vi",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Bruiser",
      "Dive",
      "Initiator",
      "Suppression",
      "Early",
      "Assassin"
    ],
    "tier": "S",
    "counters": [
      "jinx",
      "zed",
      "lucian"
    ],
    "goodWith": [
      "ahri",
      "orianna",
      "galio"
    ],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "viego",
    "name": "Viego",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "viktor",
    "name": "Viktor",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "vladimir",
    "name": "Vladimir",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Fighter",
      "Bruiser",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "volibear",
    "name": "Volibear",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Mixed",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "warwick",
    "name": "Warwick",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Mixed",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "wukong",
    "name": "Wukong",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Bruiser",
      "Engage",
      "Knockup",
      "Dive",
      "Tank",
      "Frontline"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "xayah",
    "name": "Xayah",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "xerath",
    "name": "Xerath",
    "roles": [
      "Mid",
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear",
      "Poke"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "xin-zhao",
    "name": "Xin Zhao",
    "roles": [
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Bruiser",
      "Early",
      "Dive",
      "Frontline",
      "Tank"
    ],
    "tier": "S",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier S estimado para draft competitivo."
  },
  {
    "id": "yasuo",
    "name": "Yasuo",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "yone",
    "name": "Yone",
    "roles": [
      "Top",
      "Mid"
    ],
    "damageType": "Mixed",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "yorick",
    "name": "Yorick",
    "roles": [
      "Top"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Tank",
      "Frontline",
      "Bruiser"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "yunara",
    "name": "Yunara",
    "roles": [
      "ADC"
    ],
    "damageType": "Mixed",
    "tags": [
      "Marksman"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "yuumi",
    "name": "Yuumi",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "C",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier C estimado para draft competitivo."
  },
  {
    "id": "zaahen",
    "name": "Zaahen",
    "roles": [
      "Top",
      "Jungle"
    ],
    "damageType": "Physical",
    "tags": [
      "Fighter",
      "Assassin",
      "Bruiser",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "zac",
    "name": "Zac",
    "roles": [
      "Jungle"
    ],
    "damageType": "Magic",
    "tags": [
      "Tank",
      "Fighter",
      "Frontline",
      "Bruiser",
      "Engage"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "zed",
    "name": "Zed",
    "roles": [
      "Mid"
    ],
    "damageType": "Physical",
    "tags": [
      "Assassin",
      "Dive"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "zeri",
    "name": "Zeri",
    "roles": [
      "ADC"
    ],
    "damageType": "Physical",
    "tags": [
      "Marksman"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "ziggs",
    "name": "Ziggs",
    "roles": [
      "Mid",
      "ADC"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear",
      "Poke"
    ],
    "tier": "A",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier A estimado para draft competitivo."
  },
  {
    "id": "zilean",
    "name": "Zilean",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Support",
      "Mage",
      "Peel",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "zoe",
    "name": "Zoe",
    "roles": [
      "Mid"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "WaveClear",
      "Poke"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  },
  {
    "id": "zyra",
    "name": "Zyra",
    "roles": [
      "Support"
    ],
    "damageType": "Magic",
    "tags": [
      "Mage",
      "Support",
      "Peel",
      "WaveClear"
    ],
    "tier": "B",
    "counters": [],
    "goodWith": [],
    "weakAgainst": [],
    "notes": "Atualizado para patch 16.10.1 / 26.10. Tier B estimado para draft competitivo."
  }
];
