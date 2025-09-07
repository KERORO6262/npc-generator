/**
 * 讀取一個 .txt 檔，每行轉成陣列元素 (自動去除空白/空行)
 * @param {string} filePath - 例如 "modules/myNpcGen/data/first_names.txt"
 * @return {Promise<string[]>}
 */
export async function loadTextFileToArray(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`無法讀取檔案: ${filePath} (${response.status})`);
  }
  const text = await response.text();
  return text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);
}

/**
 * 讀取一個 .json 檔，並轉成物件。
 * @param {string} filePath - 例如 "modules/myNpcGen/data/npc_gear.json"
 * @return {Promise<object>}
 */
export async function loadJSONFile(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`無法讀取 JSON: ${filePath} (${response.status})`);
  }
  return response.json();
}
