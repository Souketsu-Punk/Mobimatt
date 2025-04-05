import React, { useState } from 'react'; // Import useState
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
  const [locationOption, setLocationOption] = useState<string>('onlyWhenUsingApp');
  const [routeUpdatesOption, setRouteUpdatesOption] = useState<string>('onlyWhenUsingApp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '' });
  };

  const navigation = useNavigation(); // Initialized navigation

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Privacy Settings</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>

      {/* Options */}
      <Text style={styles.title}>Location Settings</Text>
      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Let others See my Location</Text>
        <RNPickerSelect
          onValueChange={(value) => setLocationOption(value)}
          items={[
            { label: 'Always', value: 'always' },
            { label: 'Never', value: 'never' },
            { label: 'Only when using the app', value: 'onlyWhenUsingApp' },
          ]}
          style={pickerSelectStyles}
          value={locationOption}
        />
      </View>

      <Text style={styles.title}>Route Updates Settings</Text>
      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Receive Route Updates</Text>
        <RNPickerSelect
          onValueChange={(value) => setRouteUpdatesOption(value)}
          items={[
            { label: 'Always', value: 'always' },
            { label: 'Never', value: 'never' },
            { label: 'Only when using the app', value: 'onlyWhenUsingApp' },
          ]}
          style={pickerSelectStyles}
          value={routeUpdatesOption}
        />
      </View>

      

      {/* Additional Menu Items */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>How We collect and use Your Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Review</Text>
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
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
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