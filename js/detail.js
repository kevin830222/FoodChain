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

    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();

    var data = {
        reportUrl: ['http://i.imgur.com/Zldl1mY.jpg'],
        nodes: [{
            name: "福全香鬆瀨戶風味",
            value: {
                category: '調味製品',
                companyName: '福全食品股份有限公司',
                imgUrl: 'http://i.imgur.com/B8luJyt.jpg',
            }
        }, {
            name: "福全香鬆櫻花蝦香味",
            value: {
                category: '調味製品',
                companyName: '福全食品股份有限公司',
                imgUrl: 'http://i.imgur.com/kmbeAN9.jpg',
            }

        }, {
            name: "福全乳糖",
            value: {
                category: '葡萄糖',
                companyName: '福全乳品股份有限公司',
                imgUrl: 'http://i.imgur.com/kHux6gb.jpg',
            }
        }, {
            name: "福全奶粉",
            value: {
                category: '乳粉',
                companyName: '福全乳品加工廠股份有限公司',
                imgUrl: 'http://i.imgur.com/s01cPIr.jpg',
            }
        }, {
            name: "福全生乳",
            value: {
                category: '乳水',
                companyName: '福全牧場股份有限公司',
                imgUrl: 'http://i.imgur.com/Clm8Ciy.jpg',
            }

        }, {
            name: "福全砂糖",
            value: {
                category: '砂糖',
                companyName: '福全糖業股份有限公司',
                imgUrl: 'http://i.imgur.com/Ztf5cxS.jpg',
            }
        }, {
            name: "福全乾鰹節片",
            value: {
                category: '水產製品',
                companyName: '福全水產加工廠企業有限公司',
                imgUrl: 'http://i.imgur.com/DmAq9r0.jpg',
            }
        }, {
            name: "福全乾燥櫻花蝦",
            value: {
                category: '水產製品',
                companyName: '福全水產加工廠企業有限公司',
                imgUrl: 'http://i.imgur.com/ELq32IU.jpg',
            }
        }, {
            name: "福全鰹節",
            value: {
                category: '活生鮮冷藏魚產品',
                companyName: '福全水產股份有限公司',
                imgUrl: 'http://i.imgur.com/hZctLXV.jpg',
            }
        }, {
            name: "福全櫻花蝦",
            value: {
                category: '活生鮮冷凍冷藏甲殼類產品',
                companyName: '福全水產股份有限公司',
                imgUrl: 'http://i.imgur.com/B0o34fv.jpg',
            }
        }, {
            name: "福全馬鈴薯片",
            value: {
                category: '澱粉及其產物',
                companyName: '福全農產品加工廠企業有限公司',
                imgUrl: 'http://i.imgur.com/sZGSNEB.jpg',
            }
        }, {
            name: "福全馬鈴薯",
            value: {
                category: '澱粉及其產物',
                companyName: '福全農產運銷股份有限公司',
                imgUrl: 'http://i.imgur.com/BO2Abjm.jpg',
            }
        }, {
            name: "福全醬油",
            value: {
                category: '醬油',
                companyName: '福全醬油股份有限公司',
                imgUrl: 'http://i.imgur.com/jmXOXXB.jpg',
            }

        }, {
            name: "福全芝麻",
            value: {
                category: '其他穀類、塊根、塊莖等製品',
                companyName: '福全食品股份有限公司',
                imgUrl: '',
            }
        }, {
            name: "福全有機黃豆",
            value: {
                category: '黃豆或豆類及其相關加工製品',
                companyName: '福全黃豆食品加工企業有限公司',
                imgUrl: 'http://i.imgur.com/nLUhxsz.jpg',
            }
        }],
        links: [
            { "source": "福全香鬆瀨戶風味", "target": "福全乳糖", "value": 1 },
            { "source": "福全香鬆瀨戶風味", "target": "福全砂糖", "value": 1 },
            { "source": "福全香鬆瀨戶風味", "target": "福全乾鰹節片", "value": 1 },
            { "source": "福全香鬆瀨戶風味", "target": "福全乾馬鈴薯片", "value": 1 },
            { "source": "福全香鬆瀨戶風味", "target": "福全醬油", "value": 1 },
            { "source": "福全香鬆瀨戶風味", "target": "福全芝麻", "value": 1 },
            { "source": "福全香鬆櫻花蝦香味", "target": "福全乳糖", "value": 1 },
            { "source": "福全香鬆櫻花蝦香味", "target": "福全砂糖", "value": 1 },
            { "source": "福全香鬆櫻花蝦香味", "target": "福全乾燥櫻花蝦", "value": 1 },
            { "source": "福全香鬆櫻花蝦香味", "target": "福全馬鈴薯片", "value": 1 },
            { "source": "福全香鬆櫻花蝦香味", "target": "福全醬油", "value": 1 },
            { "source": "福全香鬆櫻花蝦香味", "target": "福全芝麻", "value": 1 },
            { "source": "福全乳糖", "target": "福全奶粉", "value": 1 },
            { "source": "福全奶粉", "target": "福全生乳", "value": 1 },
            { "source": "福全醬油", "target": "福全有機黃豆", "value": 1 },
            { "source": "福全乾鰹節片", "target": "福全鰹節", "value": 1 },
            { "source": "福全乾燥櫻花蝦", "target": "福全櫻花蝦", "value": 1 },
            { "source": "福全馬鈴薯片", "target": "福全馬鈴薯", "value": 1 }
        ]
    };


    myChart.hideLoading();

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function(params, ticket, callback) {
                if (params.dataType == 'edge') {
                    return '來源：' + params.data.source +
                        '<br>產物：' + params.data.target +
                        '<br>交易量：' + params.data.value;
                }
                if (params.dataType == 'node') {
                    return '產物名稱：' + params.data.name +
                        '<br>產品分類：' + params.data.value.category +
                        '<br>公司名稱：' + params.data.value.companyName +
                        '<br><img style="height:200px" src="' + params.data.value.imgUrl + '">';
                }
            },
        },
        series: [{
            type: 'sankey',
            layout: 'none',
            data: data.nodes,
            links: data.links,
            right: 'auto',
            left: '10%',
            label: {
                normal: {
                    position: 'left',
                    textStyle: {
                        color: '#494C56'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#99E6CD',
                    borderWidth: 0,
                    // borderColor: '#aaa'
                }
            },
            lineStyle: {
                normal: {
                    color: '#A3F5DB',
                    curveness: 0.5
                }
            }
        }]
    });

    myChart.on('mouseover', function(params) {
        console.log(params);
    });

    $('#addr').html(getQueryVariable('addr'));

    var stars = 2;
    var htmlString = '';
    for (var i = 0; i < stars; i++) {
        htmlString += '<image src="img/star.png" style="width:100px;margin:10px">';
    }
    for (var i = 0; i < 3 - stars; i++) {
        htmlString += '<image src="img/unstar.png" style="width:100px;margin:10px">';
    }
    $('#stars').html(htmlString);

    if (data.reportUrl.length == 0) {
        $('#report').html('無檢驗報告');
    }
    htmlString = '';
    for (var i in data.reportUrl) {
        var reportUrl = data.reportUrl[i];
        htmlString += '<image style="width:100%" src="' + reportUrl + '">';
    }
    $('#report').html(htmlString);

    $.ajax({
            url: 'http://13.94.40.52:8000/track?addr=1B5hGxuLTiSyrZrT8vfcCoXNnZqPLBuLFf',
        })
        .done(function(response) {
            console.log(response);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });


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
