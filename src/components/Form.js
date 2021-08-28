import React, { useContext, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { InfoContext } from '../hooks/infoContext';

const Line = () => {
    return (
        <View style={{ borderBottomColor: 'green', borderBottomWidth: .5, marginBottom: 10 }}/>
    )
}

const Mood = (props) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={props.onPress}>
            {props.toogle ? <AntDesign name="checkcircle" size={15} color='green' /> : <AntDesign name="checkcircleo" size={15} color='green' />}
            <Text style={{color: 'green', marginLeft: 10}}>{props.label}</Text>
        </TouchableOpacity>
    )
}
const Form = (props) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [active, setActive] = useState(false);
    const [superactive, setSuperactive] = useState(false);
    const [bored, setBored] = useState(false);
    const {data, setData} = useContext(InfoContext);
    return ( 
        <View style={{borderWidth: .5, borderColor: 'green', padding: 5 }}>
            <Text style={{fontSize: 20, color: 'green', marginBottom: 5}}>Date</Text>
            <Line/>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
                <Text style={{width:"20%", color: 'green'}}>From</Text>
                <TextInput style={{borderWidth: .5, borderColor: 'green', width:"80%"}} placeholder='YYYY-MM-DD' value={from} onChangeText={(e) => setFrom(e)}/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{width:"20%", color: 'green'}}>To</Text>
                <TextInput style={{borderWidth: .5, borderColor: 'green',width:"80%"}} placeholder='YYYY-MM-DD' value={to} onChangeText={(e) => setTo(e)}/>
            </View>
            <Text style={{fontSize: 20, color: 'green', marginBottom: 5}}>Status</Text>
            <Line/>
            <View>
                <Mood toogle={active} label='Active' onPress={() => setActive(!active)}/>
                <Mood toogle={superactive} label='Superactive' onPress={() => setSuperactive(!superactive)}/>
                <Mood toogle={bored} label='Bored' onPress={() => setBored(!bored)}/>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20}} onPress={() => setData({ from, to, active, superactive, bored })}><Text style={{fontSize: 18, color: 'white', backgroundColor: 'green', padding: 5}}>Generate</Text></TouchableOpacity>
        </View>
    );
}
 
export default Form;