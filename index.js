import { GoogleSpreadsheet } from "google-spreadsheet";
import writeFile from "./writeFile.js";

const translate = async (config) => {
  console.log("Working...");
  const { apiToken, docs, basePath } = config;
  const results = docs.map(async (item) => {
    const doc = new GoogleSpreadsheet(item);
    await doc.useApiKey(apiToken);
    await doc.loadInfo();
    const fileName = doc.title;
    const count = doc.sheetCount;
    for (let i = 0; i < count; i += 1) {
      const sheet = doc.sheetsByIndex[i];
      const folder = sheet.title;
      const rows = await sheet.getRows();
      const obj = {};
      rows.forEach((item) => {
        obj[item.key] = item.value;
      });
      writeFile(basePath, folder, fileName, obj);
    }
  });
  await Promise.all(results);
  console.log("Done!");
};

export default translate;
