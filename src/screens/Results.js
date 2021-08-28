import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native'
import UserCard from '../components/UserCard';
import { u1, u2, u3, u4, u5, u6, u8, u9, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20 } from '../api';
import { InfoContext } from '../hooks/infoContext';
const Results = () => {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [dates, setDates] = useState([]);
    const [meals, setMeals] = useState({});
    const { data } = useContext(InfoContext);
    const users = [u1, u2, u3, u4, u5, u6, u8, u9, u10, u11];
    let userObj = {};

    useEffect(() => {
        const from = new Date(data.from);
        const to = new Date(data.to);
        const _dates = [];
        for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
            _dates.push(`${day.toISOString().slice(0,10)}`)
        }
        setDates(_dates)
    }, [data]);

    useEffect(() => {
        setMeals(userObj)
    }, [data])

    // if (!Object.keys(userObj).length) return null
    return (
        <FlatList
            data={users}
            keyExtractor={item => item.profile.name}
            numColumns={2} 
            renderItem={(item) => {
                const { name, pictureUrl } = item.item.profile;
                const { dateToDayId, daysWithDetails } = item.item.calendar;
                dates.map(res => !!dateToDayId[res] && (userObj[name] = { userId: daysWithDetails[dateToDayId[res]].day.userId, name,  meals: !!userObj[name] ? [...userObj[name].meals ,...Object.keys(daysWithDetails[dateToDayId[res]].details.mealsWithDetails)] : Object.keys(daysWithDetails[dateToDayId[res]].details.mealsWithDetails) }))
                return (
                    <UserCard name={name} pictureUrl={pictureUrl} userID={!!meals[name] && meals[name].userId} meals={!!meals[name] && meals[name].meals.length}/>
                )
            }}
        />
    );
}
 
export default Results;