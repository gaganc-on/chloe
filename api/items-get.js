const requireAuth = require("./_require-auth.js");
const { getItemsByOwner } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const authUser = event.user;
  const { owner } = event.queryStringParameters;

  // Make sure owner is authenticated user
  if (owner !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot get items that belong to a different owner",
      }),
    });
  }

  const items = await getItemsByOwner(owner);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: items,
    }),
  });
});
