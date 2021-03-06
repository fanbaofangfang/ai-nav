/*!-------------------------------------------------------------------------------------------
JAVASCRIPT project compiled files - Modern browsers + ie9+

Version:    1.0.0 - 2014
author:     Burocratik
email:      hello@burocratik.com
website:    http://www.burocratik.com
* @preserve
--------------------------------------------------------------------------------------------*/
function checkPage() {
    var e = window.location.pathname
        , o = window.location.origin
        , n = e.replace(/^\/+|\/+$/g, "")
        , t = e.split("/")
        , s = t.pop();
    return $("body").hasClass("how") ? (startSlider(),
        copyClipboard(),
        startSocial(),
        !1) : $("body").hasClass("project") ? (startSlider(),
            startSocial(),
            !1) : $("body").hasClass("home") ? (initHomeAnimation(),
                !1) : void 0
}
function loadSection(e) {
    NProgress.start();
    var o = window.location.pathname
        , n = window.location.hostname;
    "/" == o ? _$nextContentTemp.load("/home/index #content", function () {
        $.doTimeout(300, function () {
            ajaxLoad()
        })
    }) : _$nextContentTemp.load("index #content", function () {
        $.doTimeout(300, function () {
            ajaxLoad()
        })
    })
}
function initHomeAnimation() {
    $(".c_browsers").removeClass("hideBrowsers"),
        $(".c_browsers .browser").css("width", "100%");
    var e = $(".browser:nth-child(1)").attr("id") + "Bg";
    if ($body.removeClass("how01 how02 how03 how04 proj01 proj02 proj03 chromeBg firefoxBg internetExplorerBg safariBg operaBg"),
        $body.addClass(e),
        $body.hasClass("mobile") || mqmaxw960.matches) {
        if ($(".kwicks").kwicks("destroy"),
            !mqmaxw960.matches)
            return $body.addClass("allowHover"),
                $(".c_browsers .browser").css({
                    width: "50%"
                }),
                !1;
        $body.removeClass("allowHover"),
            $("#content").css({
                top: "0",
                left: "0",
                "-webkit-overflow-scrolling": "touch",
                height: "100%",
                "overflow-y": "scroll"
            })
    } else
        setTimeout(function () {
            $(".browser:nth-child(1)").addClass("firstAnim")
        }, 1e3),
            setTimeout(function () {
                $(".browser:nth-child(2)").addClass("firstAnim")
            }, 1100),
            setTimeout(function () {
                $(".kwicks").kwicks({
                    maxSize: "65%",
                    spacing: 0,
                    behavior: "menu",
                    easing: "easeOutCubic"
                }),
                    $(".c_browsers .browser").removeClass("firstAnim"),
                    $body.addClass("allowHover")
            }, 2500)
}
function resizeHome() {
    $(".c_browsers").removeClass("hideBrowsers"),
        $(".c_browsers .browser").css("width", "100%");
    var e = $(".browser:nth-child(1)").attr("id") + "Bg";
    if ($body.removeClass("how01 how02 how03 how04 proj01 proj02 proj03 chromeBg firefoxBg internetExplorerBg safariBg operaBg"),
        $body.addClass(e),
        $(".kwicks").kwicks("destroy"),
        $body.hasClass("mobile") || mqmaxw960.matches) {
        if (!mqmaxw960.matches)
            return $body.addClass("allowHover"),
                $(".c_browsers .browser").css({
                    width: "50%"
                }),
                !1;
        $body.removeClass("allowHover"),
            $(".c_browsers .browser").css({
                width: "100%",
                left: "0"
            }),
            $("#content").css({
                top: "0",
                left: "0",
                "-webkit-overflow-scrolling": "touch",
                height: "100%",
                overflow: "scroll"
            })
    } else
        $(".kwicks").kwicks({
            maxSize: "50%",
            spacing: 0,
            behavior: "menu",
            easing: "easeOutCubic"
        }),
            $(".c_browsers .browser").removeClass("firstAnim"),
            $body.addClass("allowHover")
}
function resize_langMenu() {
    var e = $(window).height();
    $(".main_menu ul").css("height", e),
        $(".lang-picker ul").css({
            height: e - 70,
            "overflow-y": "scroll"
        })
}
function startSlider() {
    $("#da-slider").cslider(),
        $("body").removeClass("bgCause bgWorks bgSteps bgDownload bgInsert bgInclude bgCall")
}
function copyClipboard() {
    var e = new ZeroClipboard($(".clip_copy"), {
        moviePath: "scripts/ZeroClipboard.swf",
        debug: !1
    });
    e.on("aftercopy", function (e) {
        var o = $(".clip_copy").html();
        $(".clip_copy").addClass("zeroclipboard-copied"),
            $(".clip_copy").html("Copied! <span></span>"),
            $.doTimeout(1500, function () {
                $(".clip_copy").removeClass("zeroclipboard-copied"),
                    $(".clip_copy").html(o)
            })
    })
}
function startSocial() {
    $(".social ul a").on("click", function () {
        var e = window.open($(this).attr("href"), "", "height=480,width=560");
        return window.focus && e.focus(),
            !1
    })
}
$(document).ready(function () {
    resize_langMenu(),
        FastClick.attach(document.body),
        $(".hoefler-link").on("click", function () {
            ga("send", {
                hitType: "event",
                eventCategory: "Hoefler&CO",
                eventAction: "Click",
                eventLabel: "Hoefler Fonts Menu Link"
            })
        }),
        mqmaxw960 = window.matchMedia("only screen and (max-width: 960px)"),
        $body = $("body"),
        checkPage(),
        $(document).on("click", "a[rel=external]", function () {
            var e = $(this)
                , o = window.open(e.attr("href"));
            return o.closed
        }),
        $(document).on("click", ".lang-picker", function (e) {
            e.preventDefault(),
                $(this).hasClass("lang-open") ? ($(".lang-picker").removeClass("lang-open scrolling"),
                    setTimeout(function () {
                        $(".lang-picker").removeClass("lang-openColor")
                    }, 350)) : ($(this).addClass("lang-open lang-openColor"),
                        setTimeout(function () {
                            $(".lang-picker").addClass("scrolling")
                        }, 200))
        }),
        $(document).on("click", ".lang-open ul a", function (e) {
            e.preventDefault();
            var o = $(this).attr("href");
            window.location.href = o
        }),
        $(".lang-picker ul li:first-child").hover(function () {
            $(".scrolling").addClass("fadeOut")
        }, function () {
            $(".scrolling").removeClass("fadeOut")
        }),
        $(document).on("touchstart click", ".menu a", function (e) {
            $("#container").addClass("menu_open"),
                $(".menu").delay(10).fadeOut(50)
        }),
        $(document).on("touchstart click", ".menu_open .pusher", function () {
            $("#container").removeClass("menu_open"),
                $(".lang-picker").removeClass("lang-open lang-openColor scrolling"),
                $(".menu").delay(300).fadeIn(90)
        }),
        $(document).on("keydown", function (e) {
            switch (e.which) {
                case 27:
                    return $("#container").removeClass("menu_open"),
                        $(".menu").delay(300).fadeIn(90),
                        !1
            }
        });
    var e = !0;
    $(document).on("click", "nav a.btnAjax", function (o) {
        if ($("body").hasClass("noajax") || !window.history.pushState)
            return !0;
        o.preventDefault();
        var n = $(this)
            , t = n.attr("href");
        $("nav a").removeClass("active"),
            n.addClass("active"),
            $("#container").removeClass("menu_open");
        var s = t
            , a = n.attr("data-url") + "/"
            , i = n.attr("data-title") + " | ";
        e && history.pushState({}, i, a),
            e = !0;
        var r = window.location.pathname.split("/");
        return "" == r[1] && (a = "/",
            i = ""),
            $("title").html(i + "Outdated Browser"),
            loadSection(s),
            !1
    }),
        window.addEventListener && window.addEventListener("popstate", function (o) {
            return !!o.state && void (e = !1)
        }),
        $.cookie("cookie_keep_calm") || $(".mobile .keep_calm").show(),
        $(".keep_calm").on("touchstart click", function () {
            $("body").hasClass("error404") || ($(this).hide(),
                $.cookie("cookie_keep_calm", "true", {
                    expires: 1,
                    path: "/"
                }))
        })
}),
    _$nextContentTemp = $(".loadContent.next"),
    $(window).on("resize", $.debounce(500, function () {
        resizeHome(),
            resize_langMenu()
    })),
    window.addEventListener("orientationchange", function () { }, !1);
