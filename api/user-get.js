const requireAuth = require("./_require-auth.js");
const { getUser } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const authUser = event.user;
  const { uid } = event.queryStringParameters;

  // Prevent access to user other than yourself
  // Note: You may want to remove this depending on your needs
  if (uid !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot access user other than yourself",
      }),
    });
  }

  const user = await getUser(uid);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      data: user,
    }),
  });
});
