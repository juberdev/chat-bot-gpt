const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "token ai",

});

const openai = new OpenAIApi(configuration);

async function CreateFineTune(fileId) {
  try {
    console.log(fileId);


    const ft = await openai.createFineTune({
        training_file: fileId,
        model: 'davinci'
    });
    // const response = await openai.createFineTune({
    //   training_file: fileId,
    //   model: "davinci",
    //   suffix:"question-answer-01"
    // });
    return ft;
  } catch (error) {

    console.log(error);
    

    return { status: 400, data: error };
  }
}

module.exports = {
  CreateFineTune,
};
