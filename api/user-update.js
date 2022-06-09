const requireAuth = require("./_require-auth.js");
const { updateUser } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const authUser = event.user;
  const body = JSON.parse(event.body);
  const { uid } = event.queryStringParameters;

  // Make sure authenticated user can only update themself
  if (uid !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot update user other than yourself",
      }),
    });
  }

  await updateUser(uid, body);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
    }),
  });
});
