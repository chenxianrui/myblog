$(function () {
    $("#write-article").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span>写文章</span>");
        });
    $("#write-article").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#manager-article").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 35px;\">文章管理</span>");
        });
    $("#manager-article").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#manager-com").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 65px;\">评论管理</span>");
        });
    $("#manager-com").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#manager-visiter").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 100px;\">访客管理</span>");
        });
    $("#manager-visiter").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#night-style").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 138px;\">夜间模式</span>");
        });
    $("#night-style").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#huge-com").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 175px;\">全屏模式</span>");
        });
    $("#huge-com").mouseleave(
        function () {
            $(".lay-clic").empty();
        });
});

