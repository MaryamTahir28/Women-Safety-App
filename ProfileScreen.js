import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ProfileScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('');
    const [district, setDistrict] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [emergencyPhone, setEmergencyPhone] = useState('');

    const handleSubmit = () => {
        navigation.navigate('Home'); 
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Update Profile</Text>
            {renderInputField("Name", name, setName, "user")}
            {renderInputField("CNIC", cnic, setCnic, "address-card")}
            {renderInputField("Select Your District", district, setDistrict, "globe")}
            {renderInputField("Select Your Gender", gender, setGender, "transgender-alt")}
            {renderInputField("Select Your Age", age, setAge, "birthday-cake")}
            {renderInputField("Address", address, setAddress, "home")}
            {renderInputField("Emergency Phone No", emergencyPhone, setEmergencyPhone, "phone")}
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const renderInputField = (placeholder, value, setValue, iconName) => (
    <View style={styles.inputContainer}>
        <Icon name={iconName} size={24} color="#800080" />
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#800080"
            value={value}
            onChangeText={setValue}
            autoCapitalize="none"
            color="#800080"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        backgroundColor: 'pink',
        color: 'white',
        padding: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        borderColor: 'pink',
        borderWidth: 2,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 5,
        width: '100%',
        padding: 5,
    },
    input: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
        color: '#800080', 
    },
    buttonContainer: {
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        //width: '9%',
        backgroundColor: 'pink',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        padding: 10,
    },
});

export default ProfileScreen;
