require('dotenv').config({ path: '../.env' }); // Ensure this is at the top
const admin = require('firebase-admin');

admin.initializeApp();

const userController = require('./controllers/userController');
const kaiAIController = require('./controllers/kaiAIController');
const { seedDatabase } = require('./cloud_db_seed');
const sysConfigController = require('./controllers/sysConfigController');

seedDatabase();

/* Migration Scripts */
// const {
// } = require("./migrationScripts/modifyChallengePlayersData");
const migrationScripts = {};

module.exports = {
  /* Authenticaition */
  signUpUser: userController.signUpUser,

  /* Kai AI */
  chat: kaiAIController.chat,
  tool: kaiAIController.tool,
  createChatSession: kaiAIController.createChatSession,

  /* Migration Scripts - For running  */
  ...migrationScripts,

  /* sysconfig */
  updateNotificationPreference:
    sysConfigController.updateNotificationPreference,
};
