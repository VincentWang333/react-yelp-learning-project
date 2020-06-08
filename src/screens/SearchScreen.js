import React, {useState} from 'react';
import{View, Text, StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useReults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useReults();
    
    const filterResultsByPrice = (price) =>{
        //price === '$' || '$$' || '$$$'
        return results.filter(result=>{
            return result.price == price;
        });
    };



    return(
        <>
            <SearchBar 
                term = {term} 
                onTermChange = {(newTerm) => setTerm(newTerm)}
                onTermSubmitted = {() => searchApi(term)}
            ></SearchBar>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultsList
                    results = {filterResultsByPrice('$')}
                    title = "Cost Effective"
                ></ResultsList>
                <ResultsList
                    results = {filterResultsByPrice('$$')}
                    title = 'Bit Pricier'
                ></ResultsList>
                <ResultsList
                    results = {filterResultsByPrice('$$$')}
                    title = "Big Spender"
                ></ResultsList>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});


export default SearchScreen;