import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar"
import useResults from "../hook/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMsg] = useResults();

    const filterResults = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <ScrollView>
                <ResultList results={filterResults('$')} title="Cost efective"/>
                <ResultList results={filterResults('$$')} title="Bit pracier"/>
                <ResultList results={filterResults('$$$')} title="Big spender"/>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
