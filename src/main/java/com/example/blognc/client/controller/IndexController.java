package com.example.blognc.client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @Author aquarius_cxr
 * @Date 2020/8/18 21:20
 */
@Controller
public class IndexController {

    @GetMapping("/index")
    public String index(){
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
