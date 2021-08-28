import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';


const UserCard = (props) => {
    const { name, pictureUrl, userID, meals } = props;
    const [mood, setMood] = useState();
    useEffect(() => {
        if(meals) {
            if(meals > 10) {
                setMood('Superactive')
            } else if(meals > 5) {
                setMood('Active')
            } else {
                setMood("bored")
            }
        }
    }, [meals]);
    return (
        <View style={{ borderWidth: .5, borderColor: '#707070', width: '50%', marginBottom: 10 }}>
            <Text style={{backgroundColor: mood === 'Superactive' ? 'green' : mood === 'Active' ? 'blue' : mood === 'bored' ? 'red' : null, color: '#fff', paddingHorizontal: 2}}>{mood}</Text>
            {!!pictureUrl && <Image source={{ uri: 'https://chaldal.tech/assignment-assets/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg' }} style={{ width: "100%", height: 100, resizeMode: 'contain' }}/>}
            <View style={{ margin: 10 }}>
                <Text>{name}</Text>
                <Text>{userID}</Text>
            </View>
        </View>
    );
}
 
export default UserCard;