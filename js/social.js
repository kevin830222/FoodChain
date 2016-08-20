/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() {
    //Preloader 
    $('#status').delay(300).fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
    $('body').delay(550).css({ 'overflow': 'visible' });
})

$(document).ready(function() {
    //animated logo
    $(".navbar-brand").hover(function() {
        $(this).toggleClass("animated shake");
    });

    //animated scroll_arrow
    $(".img_scroll").hover(function() {
        $(this).toggleClass("animated infinite bounce");
    });

    //Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
    wow = new WOW({
        mobile: false
    });
    wow.init();

    //MagnificPopup
    $('.image-link').magnificPopup({ type: 'image' });


    // OwlCarousel N1
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    // OwlCarousel N2
    $("#owl-demo-1").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    //SmothScroll
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 600);
                return false;
            }
        }
    });

    var scoreChart = echarts.init(document.getElementById('score-chart'));
    var cpChart = echarts.init(document.getElementById('cp-chart'));
    var activeChart = echarts.init(document.getElementById('active-chart'));
    scoreChart.setOption(option = {
        title: {
            text: '正負評',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
            ],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    });
    cpChart.setOption(option = {
        title: {
            text: '性價比',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335 },
                { value: 310 },
            ]
        }]
    });
    activeChart.setOption(option = {
        title: {
            text: '活躍度',
            left: 'center',
        },
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }]
    });

    var stars = 2;
    var htmlString = '';
    for (var i = 0; i < stars; i++) {
        htmlString += '<image src="img/star.png" style="width:100px;margin:10px">';
    }
    for (var i = 0; i < 3 - stars; i++) {
        htmlString += '<image src="img/unstar.png" style="width:100px;margin:10px">';
    }
    $('#stars').html(htmlString);


});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}
