package com.example.blognc.client.service;

import com.example.blognc.client.dao.Article;
import com.example.blognc.client.mapper.ArticleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author aquarius_cxr
 * @Date 2020/8/19 22:05
 */
@Service
public class ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    public List<Article> selectArticle(){
        List<Article> articles = articleMapper.selectArticle();
        return articles;
    }
}
