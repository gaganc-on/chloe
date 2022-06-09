const requireAuth = require("./_require-auth.js");
const { getItem } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const authUser = event.user;
  const { id } = event.queryStringParameters;

  const item = await getItem(id);

  if (!item) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Item does not exist",
      }),
    });
  }

  // Make sure authenticated user is the item owner
  if (item.owner !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot fetch an item that you don't own",
      }),
    });
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: item,
    }),
  });
});
