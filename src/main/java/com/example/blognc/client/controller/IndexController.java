package com.example.blognc.client.controller;

import com.example.blognc.client.dao.Article;
import com.example.blognc.client.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * @Author aquarius_cxr
 * @Date 2020/8/18 21:20
 */
@Controller
public class IndexController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/index")
    public String index(Model model){
        List<Article> articles = articleService.selectArticle();
        model.addAttribute("articles", articles);
        return "left";
    }

    @GetMapping("/article")
    public String article(){
        return "article";
    }

    @GetMapping("/message")
    public String message(){
        return "message";
    }

    @GetMapping("/right")
    public String right(){
        return "right";
    }
}
