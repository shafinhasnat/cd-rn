import React, { useContext } from 'react';
import { Text } from 'react-native'
import Form from '../components/Form';
import UserCard from '../components/UserCard';
import Wrapper from '../components/Wrapper';
import { InfoContext } from '../hooks/infoContext';
import Results from './Results';
const Generate = () => {
    const { data } = useContext(InfoContext);
    return ( 
        <Wrapper>
            <Form/>
        </Wrapper>
     );
}
 
export default Generate;