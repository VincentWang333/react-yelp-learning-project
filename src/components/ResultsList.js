import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetail';
import {withNavigation} from'react-navigation';


const ResultsList = ({title,results,navigation}) =>{
    if(!results.length){
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style = {styles.titleStyle}>
                {title}
            </Text>
            <FlatList
                data = {results}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                keyExtractor = {(result) =>result.id}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={() =>navigation.navigate('ResultsShow',{id:item.id})}>
                            <ResultDetails result = {item}></ResultDetails>
                        </TouchableOpacity>
                    )
                    
                }}
            ></FlatList>
        </View>

    );
};



const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight:'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
});


export default withNavigation(ResultsList);