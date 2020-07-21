import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { View, Text, StyleSheet, FlatList} from 'react-native'
import {getArticles} from '../../state/news/news.actions';
import {ArticalCard} from '../../components';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        // backgroundColor: 'yellow',
        alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
    },
});

const Home = ({articles, getNewsArticles}) => {

    useEffect(() => {
        getNewsArticles();
    }, [getNewsArticles]);

    const renderItem = ({ item }) => (
        <ArticalCard 
            title={item.title} 
            source={item.source.name} 
            imageUrl={item.urlToImage} 
            publishedAt={item.publishedAt}
        />
    );

    const keyExtractor = (item, index) => index.toString();

    return (
        <View style={styles.container}>
            <FlatList 
                data={articles} 
                renderItem={renderItem} 
                keyExtractor={keyExtractor} 
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const mapStateToProps = ({news}) => ({articles: news.articles});

export default connect(mapStateToProps, { getNewsArticles: getArticles })(Home);
