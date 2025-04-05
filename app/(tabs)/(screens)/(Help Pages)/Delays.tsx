import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Button, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null); // State to track which action is selected
  const [formData, setFormData] = useState({
    reason: '', // Common form field to show for all actions
    delayReason: '', // For delay reason dropdown
    emergencyDescription: '', // For emergency description dropdown
    routeChangeReason: '', // For route change reason dropdown
  });
  const [notificationVisible, setNotificationVisible] = useState(false); // State to control notification visibility
  const [notificationMessage, setNotificationMessage] = useState(''); // State for notification message
  const [fadeAnim] = useState(new Animated.Value(0)); // Animation value for fade effect

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Show notification
    setNotificationMessage('Form submitted successfully!');
    setNotificationVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setNotificationVisible(false);
        });
      }, 2000);
    });

    // Reset form after submission
    setFormData({ reason: '', delayReason: '', emergencyDescription: '', routeChangeReason: '' });
    setSelectedAction(null); // Close the form
  };

  const renderForm = () => {
    switch (selectedAction) {
      case 'Report Delay':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Report Delay</Text>
            <Picker
              selectedValue={formData.delayReason}
              onValueChange={(itemValue) => handleInputChange('delayReason', itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Delay Reason" value="" />
              <Picker.Item label="Heavy Traffic" value="Heavy Traffic" />
              <Picker.Item label="Road Closures" value="Road Closures" />
              <Picker.Item label="Weather Conditions" value="Weather Conditions" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Estimated Time of Delay(in minutes or hours)"
              value={formData.reason}
              onChangeText={(text) => handleInputChange('reason', text)}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        );
      case 'Report Route Change':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Report Route Change</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter New Route"
              value={formData.reason}
              onChangeText={(text) => handleInputChange('reason', text)}
            />
            <Picker
              selectedValue={formData.routeChangeReason}
              onValueChange={(itemValue) => handleInputChange('routeChangeReason', itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Route Change Reason" value="" />
              <Picker.Item label="Traffic Issues" value="Traffic Issues" />
              <Picker.Item label="Road Closures" value="Road Closures" />
              <Picker.Item label="Detour" value="Detour" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Enter Destination"
              value={formData.reason}
              onChangeText={(text) => handleInputChange('reason', text)}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        );
      case 'Emergencies':
        return (
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Emergency Report</Text>
            <Picker
              selectedValue={formData.emergencyDescription}
              onValueChange={(itemValue) => handleInputChange('emergencyDescription', itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Describe the Emergency" value="" />
              <Picker.Item label="Accident" value="Accident" />
              <Picker.Item label="Medical Emergency" value="Medical Emergency" />
              <Picker.Item label="Fire" value="Fire" />
            </Picker>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Delays</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>

      {/* Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => setSelectedAction('Report Delay')}>
          <Text style={styles.actionText}>Report Delay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => setSelectedAction('Report Route Change')}>
          <Text style={styles.actionText}>Report Route Change</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => setSelectedAction('Emergencies')}>
          <Text style={styles.actionText}>Emergencies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => setSelectedAction(null)}>
          <Text style={styles.actionText}>How to Use it</Text>
        </TouchableOpacity>
      </View>

      {/* Render form based on selected action */}
      {selectedAction && renderForm()}

      {/* Notification */}
      {notificationVisible && (
        <Animated.View style={[styles.notification, { opacity: fadeAnim }]}>
          <Text style={styles.notificationText}>{notificationMessage}</Text>
        </Animated.View>
      )}

      {/* Navigation Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>
            Here is a simple Guide on how to use it:
            if you are delayed due to traffic, weather, or other issues, tap the "report delay button"
            enter the delay reason "(e.g., heavy Traffic, road closures)". Relevant parties will be notified of this delay.
            If there is a need to re-route, tap the change route button in the app and relevant parties will be notified.
            in case of an emergency, tap the "emergency" button on the app. This will alert control center personnel and emergency services within your location.
          </Text>
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
  greeting: {
    color: '#fff',
    fontSize: 16,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  actionButton: {
    backgroundColor: '#333',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  formTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  notification: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 16,
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
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;