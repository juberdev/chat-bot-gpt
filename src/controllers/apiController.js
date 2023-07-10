const fileService = require("../services/file/fileService");
const fineTuneServices = require("../services/file/fineTuneService");

async function TrandformData(req, res) {
  await fileService.TransformData();

  res.send();
}

async function UploadFile(req, res) {
  const response = await fileService.UploadFile();
  res.status(response.status).send(response.data);
}

async function ListFile(req, res) {
  const response = await fileService.ListFile();
  res.status(response.status).send(response.data);
}

async function RetrieveFile(req, res) {
  var fileId = req.query["fileId"];

  const response = await fileService.RetrieveFile(fileId);

  if (response == "fileid not found") {
    res.status(400).send(response);
  } else {
    res.status(response.status).send(response.data);
  }
}

async function DeleteFile(req, res) {
  var fileId = req.query["fileId"];

  const response = await fileService.DeleteFile(fileId);

  if (response == "fileid not found") {
    res.status(400).send(response);
  } else {
    res.status(response.status).send(response.data);
  }
}


async function CreateFineTune(req, res){
    var fileId = req.query["fileId"];


    const response = await fineTuneServices.CreateFineTune(fileId);

    res.status(response.status).send(response.data);
}
module.exports = {
  TrandformData,
  UploadFile,
  ListFile,
  RetrieveFile,
  DeleteFile,
  CreateFineTune
};
