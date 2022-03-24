const deleteAsset = require("./deleteAsset");
const getAssets = require("./getAssets");

module.exports = (router, db) => {
  // GET ALL ASSETS FOR USER (Images, NPCs)
  // GET -> /users/:u_id/campaigns/:c_id/assets
  getAssets(router, db);

  // DELETE asset from map
  // DELETE -> /users/:u_id/campaigns/:c_id/assets/:a_id
  deleteAsset(router, db);
};
