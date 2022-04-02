import fs from "fs";

const writeFile = (basePath, folder, fileName, content) => {
  try {
    const folderName = `${basePath}/${folder}`;
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }

    fs.writeFileSync(
      `${folderName}/${fileName}.json`,
      JSON.stringify(content, null, 2),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export default writeFile;
