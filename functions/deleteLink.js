const { DELETE_LINK } = require("./util/linkQueries");
const sendQuery = require("./util/sendQuery");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(405, { err: "Method not supported" });
  }
  const { id } = JSON.parse(event.body);
  const variables = { id };

  try {
    const { deleteLink } = await sendQuery(DELETE_LINK, variables);

    return formattedResponse(200, deleteLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
