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
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.userName}>MobiMatt</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
      </View>

      {/* Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} >
          <Text style={styles.actionText}>Send to Mobile</Text>
        </TouchableOpacity>
        <Pressable style={styles.actionButton} onPress={()=> router.push('/(tabs)/(screens)/PushNotif')}>
          <Text style={styles.actionText}>Push Payment Notifications</Text>
        </Pressable>
        <TouchableOpacity style={styles.actionButton} onPress={()=> router.push('/(tabs)/(screens)/ReceivedPayments')}>
          <Text style={styles.actionText}>Received Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={()=> router.push('/(tabs)/(screens)/Insurance')} >
          <Text style={styles.actionText}>Insurance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={()=> router.push('/(tabs)/(screens)/Earnings')}>
          <Text style={styles.actionText}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={()=> router.push('/(tabs)/(screens)/Help')}>
          <Text style={styles.actionText}>Settings & Help</Text>
        </TouchableOpacity>
      </View>

      {/* Account Summary */}
      <View style={styles.accountSummary}>
        <Text style={styles.accountTitle}>Vehicle number:</Text>
        <Text style={styles.balance}>Driver: </Text>
        <Text style={styles.ledger}>Vehicle status(active/inactive): </Text>
        <Text style={styles.balance}>Sacco: </Text>
      </View>

      {/* Navigation Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Route: </Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Destination: </Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Vehicle Occupancy: </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Reserved seats:            Available seats:  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>EST: </Text>
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