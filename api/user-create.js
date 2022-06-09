const requireAuth = require("./_require-auth.js");
const { createUser } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const authUser = event.user;
  const body = JSON.parse(event.body);

  // Make sure authenticated user can only create themself in the database
  if (body.uid !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Created user must have the same uid as authenticated user",
      }),
    });
  }

  await createUser(body.uid, body);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
    }),
  });
});
