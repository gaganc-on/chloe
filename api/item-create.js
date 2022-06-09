const requireAuth = require("./_require-auth.js");
const { createItem } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const authUser = event.user;
  const body = JSON.parse(event.body);

  // Make sure authenticated user is not setting someone else as the owner
  if (body.owner !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "You can only set yourself as the item owner",
      }),
    });
  }

  const item = await createItem(body);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: item,
    }),
  });
});
