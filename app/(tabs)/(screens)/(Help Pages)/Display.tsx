import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link, router } from 'expo-router';



const App = () => {
  const navigation = useNavigation();
  return (


    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Display Settings</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>

      {/* Navigation Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Font Size</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Font Color</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Color Theme</Text>
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
  balance: {
    color: '#76FF03',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ledger: {
    color: '#fff',
    fontSize: 14,
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