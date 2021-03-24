const { CREATE_LINK } = require("./util/linkQueries");
const sendQuery = require("./util/sendQuery");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description, archived: false };

  try {
    const { createLink } = await sendQuery(CREATE_LINK, variables);

    return formattedResponse(200, createLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
