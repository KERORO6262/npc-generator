更新日期：20250907
Create by ChatGPT5

📘 NPC Generator 模組說明 (FoundryVTT v12.343 + dnd5e)
功能特色
一鍵生成 D&D 5e NPC（使用 /npc 指令）。
資料完全外部化：名字、背景、個性、怪癖、性別、年齡、長相描述與種族風味，全都在 TXT/JSON 檔中維護，方便擴充。
年齡系統：依各種族的壽命與分布（青年/壯年/老年/高齡）隨機抽樣，並附中文標籤。
性別：從 genders.txt 池隨機抽取，生成時固定顯示在背景最後一行。
外觀描述：身形、髮色、瞳色、特徵、種族風味（如精靈耳尖、矮人鬍鬚）組合生成。
裝備/法術：從 JSON 檔載入，與類型 (Bandit/Guard/Thug...) 綁定，Actor 建立後自動帶入。
輕鬆擴展：只要新增 TXT 或 JSON，就能立即影響生成結果，無需改程式。

📂 檔案結構
modules/
└─ npc-generator/
   ├─ module.json
   ├─ npc-data-loader.js
   ├─ npc-generator.js        ← 核心程式（僅用於組裝，無硬編碼）
   ├─ README.md
   └─ data/
      ├─ config/
      │  └─ config.json       ← 全域設定：路徑、種族、類型、年齡分布、技能、語言
      │
      ├─ first_names.txt      ← 名字（名）
      ├─ last_names.txt       ← 名字（姓）
      ├─ backgrounds.txt      ← 背景敘述
      ├─ personalities.txt    ← 個性特徵
      ├─ quirks.txt           ← 怪癖特徵
      ├─ genders.txt          ← 性別池
      │
      ├─ appearance/
      │  ├─ builds.txt        ← 身形（精瘦/矮壯...）
      │  ├─ hair_colors.txt   ← 髮色
      │  ├─ eye_colors.txt    ← 瞳色
      │  ├─ marks.txt         ← 特徵/穿著/疤痕
      │  └─ race/             ← 種族外觀風味
      │     ├─ Human.txt
      │     ├─ Elf.txt
      │     ├─ Dwarf.txt
      │     ├─ Halfling.txt
      │     └─ Tiefling.txt
      │
      ├─ ages/
      │  └─ labels.txt        ← 年齡分桶對照 (young=青年, adult=壯年...)
      │
      ├─ npc_gear.json        ← 類型對應裝備
      └─ npc_spells.json      ← 類型對應法術


⚙️ 安裝步驟
將整個 npc-generator 資料夾放到：
FoundryVTT/Data/modules/
重新啟動 FoundryVTT。
在世界的 模組管理 (Manage Modules) 勾選 NPC Generator。
儲存並進入遊戲。

▶️ 使用方法
在聊天輸入：
/npc
→ 系統會立即建立一個隨機 NPC，並顯示在 Actors 列表。

NPC 資料內容：
名稱：名字 姓氏 (類型, 種族)
Details → Background：
背景：...
個性：...
怪癖：...
長相：...
年齡：120（老年）
性別：女
（性別固定在最後一行，年齡在倒數第二行）
Details → Biography：同樣內容，但用 HTML 段落格式。
Items：自動帶入該類型的裝備與法術。

🛠️ 如何擴充
新增名字：直接編輯 first_names.txt 與 last_names.txt。
新增背景/個性/怪癖：在對應 TXT 增加新行。
修改外觀：到 appearance/ 增加更多描述，或新增其他種族檔案。
修改性別池：編輯 genders.txt（例如加入「非二元」）。
調整年齡分布：
編輯 config/config.json → races[*].age.buckets
編輯 ages/labels.txt 修改標籤顯示文字。
修改裝備/法術：直接編輯 npc_gear.json 或 npc_spells.json。

🔮 未來進階規劃
依性別切換取名池（例如男性/女性/中性名字分檔）。
依職類調整年齡分布（例如守衛偏年輕、長老偏年長）。
年齡修正屬性（例如老年 -1 DEX +1 WIS）。
指令參數：允許輸入 /npc elf guard 女 指定條件生成。