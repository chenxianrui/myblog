function toggleFullScreen() {
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

$(function () {
    $("#zhuye").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span class='words'>返回主页</span>");
        });
    $("#zhuye").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#liuyan").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 35px;\">留言板</span>");
        });
    $("#liuyan").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#dingyue").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 60px;\">我的GitHub</span>");
        });
    $("#dingyue").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#ziti").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 90px;\">切换字体风格</span>");
        });
    $("#ziti").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#yejianmoshi").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 138px;\">夜间模式</span>");
        });
    $("#yejianmoshi").mouseleave(
        function () {
            $(".lay-clic").empty();
        });

    $("#quanping").mouseenter(
        function () {
            $(".lay-clic").empty();
            $(".lay-clic").append("<span style=\"margin-left: 175px;\">全屏模式</span>");
        });
    $("#quanping").mouseleave(
        function () {
            $(".lay-clic").empty();
        });
});

//夜间模式

//回复
function btn_reply() {
    if ($(".btn-reply").css("display").toString() === "block"){
        $(".btn-reply").css("display","none");
    }else{
        $(".btn-reply").css("display","block");
    }

}

//悬浮留言