const requireAuth = require("./_require-auth.js");
const { getItem, deleteItem } = require("./_db.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const authUser = event.user;
  const { id } = event.queryStringParameters;

  const fetchedItem = await getItem(id);

  if (!fetchedItem) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Item does not exist",
      }),
    });
  }

  // Make sure authenticated user is the item owner
  if (fetchedItem.owner !== authUser.uid) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        message: "Cannot delete an item that you don't own",
      }),
    });
  }

  await deleteItem(id);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
    }),
  });
});
