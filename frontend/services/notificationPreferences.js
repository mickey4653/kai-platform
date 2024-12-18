import { httpsCallable } from 'firebase/functions';

import { functions } from '@/redux/store';

const updateNotificationPreference = async (preference) => {
  try {
    const updateNotificationPreferenceFunction = httpsCallable(
      functions,
      'updateNotificationPreference'
    );
    return await updateNotificationPreferenceFunction({
      emailNotifications: preference.emailNotifications,
      pushNotifications: preference.pushNotifications,
      reminderNotifications: preference.reminders,
      theme: preference.isDarkMode,
    });
  } catch (error) {
    console.log('catch an error in service');

    throw new Error('failed to call updateNotificationPreference');
  }
};

export default updateNotificationPreference;
