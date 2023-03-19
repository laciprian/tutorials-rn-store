import React, {useEffect, useState} from "react";
import yelp from '../api/yelp';
import {Text, View} from "react-native";
import SearchBar from "../components/SearchBar";

export default () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    console.log('Hi there');
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose'
                }
            });
            console.log(response.data.businesses);
            setResults(response.data.businesses);
        } catch (err) {
            setErrMsg('Something whent wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errMsg];
};
