# NPC Generator (FoundryVTT v12.343 + dnd5e)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/KERORO6262/npc-generator)](https://github.com/KERORO6262/npc-generator/releases)
[![Downloads](https://img.shields.io/github/downloads/KERORO6262/npc-generator/total.svg)](https://github.com/KERORO6262/npc-generator/releases)
[![Issues](https://img.shields.io/github/issues/KERORO6262/npc-generator)](https://github.com/KERORO6262/npc-generator/issues)
[![Stars](https://img.shields.io/github/stars/KERORO6262/npc-generator)](https://github.com/KERORO6262/npc-generator/stargazers)

一個 FoundryVTT 模組，可快速生成帶有名字、背景、個性、怪癖、外觀、年齡與裝備的 D&D 5e NPC。  
所有資料來源皆外部化，方便編輯與擴充。

---

## ✨ 功能特色
- **一鍵生成 NPC**：在聊天框輸入 `/npc` 即可。  
- **資料外部化**：名字、背景、個性、怪癖、性別、年齡、外觀與種族風味皆由 TXT/JSON 管理。  
- **年齡系統**：依各種族壽命分布隨機抽齡（青年/壯年/老年/高齡），並附上標籤。  
- **性別生成**：從 `genders.txt` 抽取，固定顯示在背景最後一行。  
- **外觀描述**：隨機組合身形、髮色、瞳色、特徵及種族風味（例：精靈耳尖、矮人鬍鬚）。  
- **裝備/法術**：依 NPC 類型自動加載 JSON 定義。  
- **輕鬆擴展**：編輯 TXT/JSON 檔即可修改模組行為，無需改程式。

---

## 📂 專案結構
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


---

## ⚙️ 安裝
1. 將 `npc-generator` 複製到 FoundryVTT 的模組資料夾：
2. 重新啟動 Foundry。  
3. 在 **Manage Modules** 勾選 **NPC Generator**。  

### GitHub Raw 安裝
複製以下連結到 Foundry 的「安裝模組」→「透過 Manifest 安裝」：
https://raw.githubusercontent.com/KERORO6262/npc-generator/main/module.json

---

## ▶️ 使用方式
在聊天輸入：/npc
生成的 NPC 會出現在 **Actors**。  
範例背景欄位：
背景：曾經是城鎮守衛…
個性：忠誠但頑固
怪癖：喜歡收集破銅爛鐵
長相：結實、黑髮、碧眼、左耳有環
年齡：42（壯年）
性別：男

---

## 🛠️ 如何擴充
- **名字池**：編輯 `first_names.txt`、`last_names.txt`。  
- **背景/個性/怪癖**：對應 TXT 每行新增一條。  
- **外觀描述**：修改 `appearance/` 下檔案。  
- **性別池**：編輯 `genders.txt`。  
- **年齡分布**：修改 `config/config.json` 的 `races[*].age.buckets`；修改 `ages/labels.txt` 改顯示文字。  
- **裝備/法術**：編輯 `npc_gear.json`、`npc_spells.json`。  

---

## 🔮 Roadmap
- [ ] 依性別切換取名池  
- [ ] 依 NPC 類型調整年齡分布  
- [ ] 年齡修正屬性  
- [ ] 指令參數 `/npc elf guard 女`

---

## 📜 授權
MIT License
