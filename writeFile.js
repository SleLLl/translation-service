import fs from "fs";
import appRoot from "app-root-path";

const writeFile = (basePath, folder, fileName, content) => {
  try {
    const folderName = `${appRoot.path}/${basePath}/${folder}`;
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
