const { GET_LINKS } = require("./util/linkQueries");
const sendQuery = require("./util/sendQuery");
const formattedResponse = require("./util/formattedResponse");

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data;

    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
