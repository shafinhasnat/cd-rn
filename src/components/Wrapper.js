import React from 'react';
import { View } from 'react-native';

const Wrapper = (props) => {
    return ( 
        <View style={{ padding: 10 }}>
            {props.children}
        </View>
    );
}
 
export default Wrapper;