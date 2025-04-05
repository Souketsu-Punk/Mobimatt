import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

const App = () => {


  // Toggle For Dropdown
  const [isGpsVisible, setGpsVisible] = useState(false);
  const [isAppCrashVisible, setAppCrashVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [isUpdateVisible, setUpdateVisible] = useState(false);

  // Dropdown Text
  const gpsText = "Ensure Location is enabled on your device, Check for any software updates, and enable GPS tracking on the app and Restart the application. IF the issue persists, consider re-installing the application. ";
  const appCrashText = "If your app crashes frequently, try clearing the cache or reinstalling the app. You can also check for any pending updates.";
  const notificationText = "If you're not receiving notifications, ensure that notifications are enabled in the app settings and your device settings. Restart application if this issue persists.";
  const updateText = "To update the app, go to Play store/App store and check if there is an available update. You can also enable auto-updates for smoother performance.";


  const handleContactSupport = () => {
    const supportUrl = "https://www.facebook.com/"; // Replace with your support URL
    Linking.openURL(supportUrl)
      .catch((err) => console.error("Failed to open URL:", err));
  };


  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Common Issues and Solutions</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>

      {/* Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setGpsVisible(!isGpsVisible)}
        >
          <Text style={styles.actionText}>GPS not Working?</Text>
        </TouchableOpacity>
        {isGpsVisible && <Text style={styles.dropdownText}>{gpsText}</Text>}

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setAppCrashVisible(!isAppCrashVisible)}
        >
          <Text style={styles.actionText}>App crashes Frequently</Text>
        </TouchableOpacity>
        {isAppCrashVisible && <Text style={styles.dropdownText}>{appCrashText}</Text>}

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setNotificationVisible(!isNotificationVisible)}
        >
          <Text style={styles.actionText}>Not receiving Notifications?</Text>
        </TouchableOpacity>
        {isNotificationVisible && <Text style={styles.dropdownText}>{notificationText}</Text>}

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setUpdateVisible(!isUpdateVisible)}
        >
          <Text style={styles.actionText}>App Update Instructions</Text>
        </TouchableOpacity>
        {isUpdateVisible && <Text style={styles.dropdownText}>{updateText}</Text>}
      </View>

      {/* Account Summary */}
      <View style={styles.accountSummary} >
        <TouchableOpacity onPress={handleContactSupport}>
        <Text style={styles.accountTitle}>Still not working? Contact Support: </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#1B5E20',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  actionContainer: {
    padding: 10,
  },
  actionButton: {
    backgroundColor: '#333',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  dropdownText: {
    color: '#fff',
    backgroundColor: '#444',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  accountSummary: {
    backgroundColor: '#2C2C2C',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  accountTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
