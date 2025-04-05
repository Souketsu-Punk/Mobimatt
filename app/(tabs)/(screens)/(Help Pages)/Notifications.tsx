import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Switch, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const NotificationPreferences = () => {
  const navigation = useNavigation();

  // State for notification preferences
  const [notificationSound, setNotificationSound] = useState('default');
  const [isVibrationEnabled, setIsVibrationEnabled] = useState(false);
  const [isDisplayNotificationsEnabled, setIsDisplayNotificationsEnabled] = useState(true);
  const [isImportantRemindersEnabled, setIsImportantRemindersEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Notification Preferences</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>

      {/* Notification Settings */}
      <View style={styles.menu}>
        {/* Notification Sound */}
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Notification Sound</Text>
          <RNPickerSelect
            onValueChange={(value) => setNotificationSound(value)}
            items={[
              { label: 'Default', value: 'default' },
              { label: 'Chime', value: 'chime' },
              { label: 'Alert', value: 'alert' },
              { label: 'None', value: 'none' },
            ]}
            style={pickerSelectStyles}
            value={notificationSound}
          />
        </View>

        {/* Vibration Toggle */}
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Vibration</Text>
          <Switch
            value={isVibrationEnabled}
            onValueChange={setIsVibrationEnabled}
          />
        </View>

        {/* Display Notifications Toggle */}
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Display Notifications</Text>
          <Switch
            value={isDisplayNotificationsEnabled}
            onValueChange={setIsDisplayNotificationsEnabled}
          />
        </View>

        {/* Important Notifications Reminder Toggle */}
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Remind me of Important Notifications</Text>
          <Switch
            value={isImportantRemindersEnabled}
            onValueChange={setIsImportantRemindersEnabled}
          />
        </View>


        {/* Additional Settings */}
        <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert("Additional Settings", "Additional settings can be configured here.")}>
          <Text style={styles.menuText}>Additional Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#2C2C2C',
    marginTop: 5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#2C2C2C',
    marginTop: 5,
  },
});

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
  menu: {
    backgroundColor: '#2C2C2C',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NotificationPreferences;