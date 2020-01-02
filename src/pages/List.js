import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, AsyncStorage, Image, StyleSheet, ScrollView } from 'react-native'

import logo from '../assets/logo.png'

import SpotList from '../components/SpotList'

export default function List() {
    const [techs, setTechs] = useState([])
    
    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(techs => techs.trim())

            setTechs(techsArray)
        })
    }, [])

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 45
    }
})