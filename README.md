# NPC Generator (FoundryVTT v12.343 + dnd5e)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/KERORO6262/npc-generator)](https://github.com/KERORO6262/npc-generator-dnd5e-fvtt/releases)
[![Downloads](https://img.shields.io/github/downloads/KERORO6262/npc-generator/total.svg)](https://github.com/KERORO6262/npc-generator-dnd5e-fvtt/releases)
[![Issues](https://img.shields.io/github/issues/KERORO6262/npc-generator)](https://github.com/KERORO6262/npc-generator-dnd5e-fvtt/issues)
[![Stars](https://img.shields.io/github/stars/KERORO6262/npc-generator)](https://github.com/KERORO6262/npc-generator-dnd5e-fvtt/stargazers)

🌐 [English](README.md) | [中文](README.zh.md)

A FoundryVTT module that quickly generates D&D 5e NPCs with names, backgrounds, personalities, quirks, appearances, ages, and equipment.  
All data sources are externalized for easy editing and expansion.

---

## ✨ Features
- **One-click NPC generation**: Simply type `/npc` in the chat box.  
- **Externalized data**: Names, backgrounds, personalities, quirks, gender, age, appearance, and racial flavor are all managed via TXT/JSON files.  
- **Age system**: Randomly selects age according to each race's lifespan distribution (youth/adult/elder/ancient) and attaches labels.  
- **Gender generation**: Drawn from `genders.txt`, always displayed in the last line of the background field.  
- **Appearance description**: Randomly combines body type, hair color, eye color, features, and racial traits (e.g., elf pointed ears, dwarf beard).  
- **Equipment/Spells**: Automatically loads from JSON definitions based on NPC type.  
- **Easily extendable**: Modify TXT/JSON files to change module behavior, no coding required.  

---

## 📂 Project Structure
```
npc-generator/
├─ module.json
├─ npc-data-loader.js
├─ npc-generator.js
├─ README.md
└─ data/
├─ config/
│ └─ config.json
│
├─ first_names.txt
├─ last_names.txt
├─ backgrounds.txt
├─ personalities.txt
├─ quirks.txt
├─ genders.txt
│
├─ appearance/
│ ├─ builds.txt
│ ├─ hair_colors.txt
│ ├─ eye_colors.txt
│ ├─ marks.txt
│ └─ race/
│ ├─ Human.txt
│ ├─ Elf.txt
│ ├─ Dwarf.txt
│ ├─ Halfling.txt
│ └─ Tiefling.txt
│
├─ ages/
│ └─ labels.txt
│
├─ npc_gear.json
└─ npc_spells.json
```
---

---

## ⚙️ Installation
1. Copy the `npc-generator` folder into your FoundryVTT `modules` directory.  
2. Restart Foundry.  
3. Enable **NPC Generator** in **Manage Modules**.  

### GitHub Raw Installation
Copy the following link into Foundry’s “Install Module” → “Install via Manifest”:  
https://raw.githubusercontent.com/KERORO6262/npc-generator-dnd5e-fvtt/main/module.json  

---

## ▶️ Usage
Type `/npc` in the chat box.  
The generated NPC will appear in **Actors**.  
Example background field:
Background: Once served as a town guard…
Personality: Loyal but stubborn
Quirk: Collects junk and scrap
Appearance: Muscular, black hair, blue eyes, earring on left ear
Age: 42 (Adult)
Gender: Male

---

## 🛠️ How to Extend
- **Name pools**: Edit `first_names.txt` and `last_names.txt`.  
- **Backgrounds/Personalities/Quirks**: Add one entry per line in the corresponding TXT file.  
- **Appearance descriptions**: Modify files under `appearance/`.  
- **Gender pool**: Edit `genders.txt`.  
- **Age distribution**: Adjust `races[*].age.buckets` in `config/config.json`; edit `ages/labels.txt` for display text.  
- **Equipment/Spells**: Edit `npc_gear.json` and `npc_spells.json`.  

---

## 🔮 Roadmap
- [ ] Gender-based naming pools  
- [ ] Age distribution adjusted by NPC type  
- [ ] Age affecting attributes  
- [ ] Command parameters `/npc elf guard female`

---

## 📜 License
MIT License
