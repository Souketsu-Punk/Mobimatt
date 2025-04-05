import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const App = () => {
  const navigation = useNavigation();

  // State for user information
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isTwoStepEnabled, setIsTwoStepEnabled] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null); // State for profile photo

  // State for modals
  const [isUsernameModalVisible, setUsernameModalVisible] = useState(false);
  const [isPhoneNumberModalVisible, setPhoneNumberModalVisible] = useState(false);
  const [isEmailModalVisible, setEmailModalVisible] = useState(false);
  
  // State for input values in modals
  const [newUsername, setNewUsername] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // Function to validate email
  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle account deletion
  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => console.log("Account deleted") }
      ]
    );
  };

  // Function to handle modal submissions
  const handleUsernameSubmit = () => {
    setUsername(newUsername);
    setUsernameModalVisible(false);
    setNewUsername('');
  };

  const handlePhoneNumberSubmit = () => {
    if (/^\d+$/.test(newPhoneNumber)) {
      setPhoneNumber(newPhoneNumber);
      setPhoneNumberModalVisible(false);
      setNewPhoneNumber('');
    } else {
      Alert.alert("Invalid input", "Please enter a valid phone number.");
    }
  };

  const handleEmailSubmit = () => {
    if (isValidEmail(newEmail)) {
      setEmail(newEmail);
      setEmailModalVisible(false);
      setNewEmail('');
    } else {
      Alert.alert("Invalid input", "Please enter a valid email address.");
    }
  };

  // Function to handle profile photo selection
  const handleProfilePhoto = () => {
    Alert.alert(
      "Select Profile Photo",
      "Choose a source",
      [
        {
          text: "Camera",
          onPress: () => launchCamera({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
              console.log('User  cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              setProfilePhoto(response.assets[0].uri);
            }
          }),
        },
        {
          text: "Gallery",
          onPress: () => launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
              console.log('User  cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              setProfilePhoto(response.assets[0].uri);
            }
          }),
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>AccountSetting</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>

      {/* Profile Photo Section */}
      <View style={styles.profilePhotoContainer}>
        <TouchableOpacity onPress={handleProfilePhoto}>
          <Image
            source={profilePhoto ? { uri: profilePhoto } : { uri: 'https://via.placeholder.com/100' }}
            style={styles.profilePhoto}
          />
        </TouchableOpacity>
      </View>

      {/* Navigation Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => setUsernameModalVisible(true)}>
          <Text style={styles.menuText}>User  Name: {username}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => setPhoneNumberModalVisible(true)}>
          <Text style={styles.menuText}>Phone Number: {phoneNumber}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => setEmailModalVisible(true)}>
          <Text style={styles.menuText}>Email: {email}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => setIsTwoStepEnabled(!isTwoStepEnabled)}>
          <Text style={styles.menuText}>Enable 2 Step Verification: {isTwoStepEnabled ? "Enabled" : "Disabled"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleDeleteAccount}>
          <Text style={styles.menuText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      {/* Modals */}
      {/* Username Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isUsernameModalVisible}
        onRequestClose={() => setUsernameModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new username"
              value={newUsername}
              onChangeText={setNewUsername}
            />
            <Button title="Submit" onPress={handleUsernameSubmit} />
            <Button title="Cancel" onPress={() => setUsernameModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>

      {/* Phone Number Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPhoneNumberModalVisible}
        onRequestClose={() => setPhoneNumberModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new phone number"
              value={newPhoneNumber}
              onChangeText={setNewPhoneNumber}
              keyboardType="numeric"
            />
            <Button title="Submit" onPress={handlePhoneNumberSubmit} />
            <Button title="Cancel" onPress={() => setPhoneNumberModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>

      {/* Email Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEmailModalVisible}
        onRequestClose={() => setEmailModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new email"
              value={newEmail}
              onChangeText={setNewEmail}
              keyboardType="email-address"
            />
            <Button title="Submit" onPress={handleEmailSubmit} />
            <Button title="Cancel" onPress={() => setEmailModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
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
  profilePhotoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
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
    width: '100%',
  },
});

export default App;