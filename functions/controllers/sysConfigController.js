console.log('cloud function start 1 line');
const functions = require('firebase-functions');
// const admin = require('firebase-admin');
exports.updateNotificationPreference = functions.https.onCall(
  async (data, context) => {
    try {
      console.log('call updateNotificationPreference start');
      console.log(data);
      const { emailNotifications, pushNotifications, reminders, isDarkMode } =
        data;
      if (emailNotifications) {
        console.log('get email and send email');
      }
      if (pushNotifications) {
        console.log('get push and send push');
      }
      if (reminders) {
        console.log('get reminders and send reminders');
      }
      if (!isDarkMode) {
        console.log('light on');
      }

      // Perform the necessary logic to update the notification preference
      return {
        status: 'success',
        message: 'Notification preference updated successfully',
      };
    } catch (error) {
      // Handle error
      console.error('Error updating notification preference:', error);
      throw new Error('Failed to update notification preference');
    }
  }
);

// module.exports = updateNotificationPreference;
