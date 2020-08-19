package com.example.blognc.client.dao;

/**
 * @Author aquarius_cxr
 * @Date 2020/8/19 22:02
 */
public class Article {

    private int id;
    private String title;
    private int readNum;
    private String nextArticle;
    private String content;
    private String time;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getReadNum() {
        return readNum;
    }

    public void setReadNum(int readNum) {
        this.readNum = readNum;
    }

    public String getNextArticle() {
        return nextArticle;
    }

    public void setNextArticle(String nextArticle) {
        this.nextArticle = nextArticle;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", readNum=" + readNum +
                ", nextArticle='" + nextArticle + '\'' +
                ", content='" + content + '\'' +
                ", time='" + time + '\'' +
                '}';
    }
}
