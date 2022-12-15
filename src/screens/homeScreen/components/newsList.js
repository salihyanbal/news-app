

import React, { useEffect, useState } from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Data from "../../../db/data";
import NewsService from "../../../services/newsService";
import theme from "../../../theme";
import NewsCard from "./newsCard";



interface NewsListProps {
}

export default function NewsList() {

    var dbService = new Data()
    
    let newsService = new NewsService();
    let pageSize = 10;
    let pageIndex = 0
    const [newsResponse, setNewsResponse] = useState({});
    useEffect(() => {
        getNews(pageIndex, pageSize)
      }, []);


    useEffect(() => {
        getNews(pageIndex, pageSize)
      }, [pageIndex]);

    const getNews = async (page, pageSize) => {
        newsService
          .getNewsByPage(page, pageSize)
          .then(async (result) => {
            dbService.deleteAll("news")
            dbService.insertAll("news", result.data.articles)
            let newsSelect = await dbService.select("news", "*")
            console.log(newsSelect)
            result.data.articles = newsSelect
            setNewsResponse(result.data)
          });
    }  

    return (
        <FlatList
                data={newsResponse.articles}
                renderItem={({item}) => <View style={styles.card}><NewsCard news={item}/></View>}
            />     
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: theme.spacing.m
    },
});