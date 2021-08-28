import React, { useState } from 'react';
import { Text,View } from 'react-native'
import { InfoContext } from './hooks/infoContext';
import Generate from './screens/Generate';
import Results from './screens/Results';

const Index = () => {
    const [data, setData] = useState({});
    const contexts = { data, setData }
    return (
        <InfoContext.Provider value={contexts}>
            <Generate/>
            <Results/>
        </InfoContext.Provider>
    );
}
 
export default Index;