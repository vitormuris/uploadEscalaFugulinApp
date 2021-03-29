import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default function List () {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        });
    }, []);

    return <Text>Sei lá autoCapitalize</Text>
}