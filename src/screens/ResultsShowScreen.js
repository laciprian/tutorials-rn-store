import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async () => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect((id) => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>Results SHow {result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image
                        style={styles.image}
                        source={{uri: item}}
                    />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 300
    }
});

export default ResultsShowScreen;
