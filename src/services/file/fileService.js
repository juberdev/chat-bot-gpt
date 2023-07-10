var xlsx = require("xlsx");
var fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "token ai",
});

const openai = new OpenAIApi(configuration);

async function TransformData() {
  var workbook = xlsx.readFile("src/shared/data-set.xlsx");
  var shet_name_list = workbook.SheetNames;
  var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[shet_name_list[0]]);

  for (const item of xlData) {
    var obj = `{"prompt":  "${
      item.Question
    } ->", "completion" : "${item.Answer.replace("[", "").replace(
      "]",
      ""
    )} END"}`;

    await fs.appendFileSync(
      "src/shared/data-set.jsonl",
      obj,
      "utf8",
      function () {}
    );
    await fs.appendFileSync(
      "src/shared/data-set.jsonl",
      "\r\n",
      "utf8",
      function () {}
    );
  }
}

async function UploadFile() {
  const response = await openai.createFile(
    fs.createReadStream("src/shared/data-set.jsonl"),
    "fine-tune"
  );

  return response;
}

async function ListFile() {
  const response = await openai.listFiles();

  return response;
}

async function RetrieveFile(fileId) {
  try {
    const response = await openai.retrieveFile(fileId);
    
    return response;
  } catch (error) {
    return "fileid not found";
  }
}

async function DeleteFile(fileId) {
    try {
      const response = await openai.deleteFile(fileId);
  
      return response;
    } catch (error) {
      return "fileid not found";
    }
  }

module.exports = {
  TransformData,
  UploadFile,
  ListFile,
  RetrieveFile,
  DeleteFile
};
