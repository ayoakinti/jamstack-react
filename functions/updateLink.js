const { UPDATE_LINK } = require("./util/linkQueries");
const sendQuery = require("./util/sendQuery");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  const { name, url, description, _id: id, archived } = JSON.parse(event.body);
  const variables = { name, url, description, id, archived };

  try {
    const { updateLink } = await sendQuery(UPDATE_LINK, variables);

    return formattedResponse(200, updateLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
