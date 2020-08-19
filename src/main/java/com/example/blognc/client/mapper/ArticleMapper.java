package com.example.blognc.client.mapper;

import com.example.blognc.client.dao.Article;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @Author aquarius_cxr
 * @Date 2020/8/19 22:04
 */
@Mapper
public interface ArticleMapper {

    @Select("select * from article;")
    public List<Article> selectArticle();
}
