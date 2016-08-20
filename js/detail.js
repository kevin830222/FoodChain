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
    data = {
        reportUrl: ['http://i.imgur.com/HQtAieV.jpg'],
        nodes: [{
            name: "250cc 茉莉蜜茶 AB 6支裝",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Land use",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Cocoa butter (Organic)",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Cocoa mass (Organic)",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Hazelnuts (Organic)",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Cane sugar (Organic)",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Vegetables (Organic)",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Climate change",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Harmful substances",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Water use",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Resource depletion",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Refrigeration",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Packaging",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Human rights",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Child labour",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Coconut oil (Organic)",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Forced labour",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Health safety",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Access to water",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Freedom of association",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Access to land",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Sufficient wage",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Equal rights migrants",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Discrimination",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }, {
            name: "Working hours",
            value: {
                category: '非酒精飲料製品',
                companyName: '光泉牧場股份有限公司',
                imgUrl: 'http://mart.ibon.com.tw/mdz_file/item/21/20/01/1012/10120011618G_char_65_151231165507.jpg',
            }
        }],
        links: [
            { "source": "Total", "target": "250cc 茉莉蜜茶 AB 6支裝", "value": 0.342284047256003 },
            { "source": "250cc 茉莉蜜茶 AB 6支裝", "target": "Land use", "value": 0.32322870366987 },
            { "source": "Land use", "target": "Cocoa butter (Organic)", "value": 0.177682517071359 },
            { "source": "Land use", "target": "Cocoa mass (Organic)", "value": 0.137241325342711 },
            { "source": "Land use", "target": "Hazelnuts (Organic)", "value": 0.00433076373512774 },
            { "source": "Land use", "target": "Cane sugar (Organic)", "value": 0.00296956039863467 },
            { "source": "Land use", "target": "Vegetables (Organic)", "value": 0.00100453712203756 },
            { "source": "250cc 茉莉蜜茶 AB 6支裝", "target": "Climate change", "value": 0.0112886157414413 },
            { "source": "Climate change", "target": "Cocoa butter (Organic)", "value": 0.00676852971933996 },
            { "source": "Climate change", "target": "Cocoa mass (Organic)", "value": 0.00394686874786743 },
            { "source": "Climate change", "target": "Cane sugar (Organic)", "value": 0.000315972058711838 },
            { "source": "Climate change", "target": "Hazelnuts (Organic)", "value": 0.000218969462265292 },
            { "source": "Climate change", "target": "Vegetables (Organic)", "value": 3.82757532567656e-05 },
            { "source": "250cc 茉莉蜜茶 AB 6支裝", "target": "Harmful substances", "value": 0.00604275542495656 },
            { "source": "Harmful substances", "target": "Cocoa mass (Organic)", "value": 0.0055125989240741 },
            { "source": "Harmful substances", "target": "Cocoa butter (Organic)", "value": 0.000330017607892127 },
            { "source": "Harmful substances", "target": "Cane sugar (Organic)", "value": 0.000200138892990337 },
            { "source": "Harmful substances", "target": "Hazelnuts (Organic)", "value": 0 },
            { "source": "Harmful substances", "target": "Vegetables (Organic)", "value": 0 },
            { "source": "250cc 茉莉蜜茶 AB 6支裝", "target": "Water use", "value": 0.00148345269044703 },
            { "source": "Water use", "target": "Cocoa butter (Organic)", "value": 0.00135309891304186 },
            { "source": "Water use", "target": "Cocoa mass (Organic)", "value": 0.000105714137908639 },
            { "source": "Water use", "target": "Hazelnuts (Organic)", "value": 1.33452642581887e-05 },
            { "source": "Water use", "target": "Cane sugar (Organic)", "value": 8.78074837009238e-06 },
            { "source": "Water use", "target": "Vegetables (Organic)", "value": 2.5136268682477e-06 },
            { "source": "250cc 茉莉蜜茶 AB 6支裝", "target": "Resource depletion", "value": 0.000240519729288764 },
            { "source": "Resource depletion", "target": "Cane sugar (Organic)", "value": 0.000226237279345084 },
            { "source": "Resource depletion", "target": "Vegetables (Organic)", "value": 1.42824499436793e-05 },
            { "source": "Resource depletion", "target": "Hazelnuts (Organic)", "value": 0 },
            { "source": "Resource depletion", "target": "Cocoa mass (Organic)", "value": 0 },
            { "source": "Resource depletion", "target": "Cocoa butter (Organic)", "value": 0 },
            { "source": "250cc 茉莉蜜茶 AB 6支裝", "target": "Refrigeration", "value": 0 },
            { "source": "250cc 茉莉蜜茶 AB 6支裝", "target": "Packaging", "value": 0 },
            { "source": "Total", "target": "Human rights", "value": 0.307574096993239 },
            { "source": "Human rights", "target": "Child labour", "value": 0.0410641202645833 },
            { "source": "Child labour", "target": "Hazelnuts (Organic)", "value": 0.0105339381639722 },
            { "source": "Child labour", "target": "Cocoa mass (Organic)", "value": 0.0105 },
            { "source": "Child labour", "target": "Cocoa butter (Organic)", "value": 0.0087294420777 },
            { "source": "Child labour", "target": "Coconut oil (Organic)", "value": 0.00474399974233333 },
            { "source": "Child labour", "target": "Cane sugar (Organic)", "value": 0.00388226450884445 },
            { "source": "Child labour", "target": "Vegetables (Organic)", "value": 0.00267447577173333 },
            { "source": "Human rights", "target": "Forced labour", "value": 0.0365458590642445 },
            { "source": "Forced labour", "target": "Hazelnuts (Organic)", "value": 0.0114913076376389 },
            { "source": "Forced labour", "target": "Cocoa butter (Organic)", "value": 0.0081134807347 },
            { "source": "Forced labour", "target": "Cocoa mass (Organic)", "value": 0.00765230236575 },
            { "source": "Forced labour", "target": "Cane sugar (Organic)", "value": 0.004 },
            { "source": "Forced labour", "target": "Vegetables (Organic)", "value": 0.00296668823626667 },
            { "source": "Forced labour", "target": "Coconut oil (Organic)", "value": 0.00232208008988889 },
            { "source": "Human rights", "target": "Health safety", "value": 0.0345435327843611 },
            { "source": "Health safety", "target": "Hazelnuts (Organic)", "value": 0.0121419536385 },
            { "source": "Health safety", "target": "Cocoa mass (Organic)", "value": 0.00766772850678333 },
            { "source": "Health safety", "target": "Cocoa butter (Organic)", "value": 0.0056245892061 },
            { "source": "Health safety", "target": "Coconut oil (Organic)", "value": 0.00361616847688889 },
            { "source": "Health safety", "target": "Cane sugar (Organic)", "value": 0.00277374682533333 },
            { "source": "Health safety", "target": "Vegetables (Organic)", "value": 0.00271934613075556 },
            { "source": "Human rights", "target": "Access to water", "value": 0.0340206659360667 },
            { "source": "Access to water", "target": "Cocoa mass (Organic)", "value": 0.0105 },
            { "source": "Access to water", "target": "Cocoa butter (Organic)", "value": 0.0089274160792 },
            { "source": "Access to water", "target": "Hazelnuts (Organic)", "value": 0.0054148022845 },
            { "source": "Access to water", "target": "Cane sugar (Organic)", "value": 0.00333938149786667 },
            { "source": "Access to water", "target": "Vegetables (Organic)", "value": 0.00314663377488889 },
            { "source": "Access to water", "target": "Coconut oil (Organic)", "value": 0.00269243229961111 },
            { "source": "Human rights", "target": "Freedom of association", "value": 0.0320571523941667 },
            { "source": "Freedom of association", "target": "Hazelnuts (Organic)", "value": 0.0132312483463611 },
            { "source": "Freedom of association", "target": "Cocoa butter (Organic)", "value": 0.0077695200707 },
            { "source": "Freedom of association", "target": "Cocoa mass (Organic)", "value": 0.00510606573995 },
            { "source": "Freedom of association", "target": "Vegetables (Organic)", "value": 0.00354321156324444 },
            { "source": "Freedom of association", "target": "Cane sugar (Organic)", "value": 0.00240710667391111 },
            { "source": "Freedom of association", "target": "Coconut oil (Organic)", "value": 0 },
            { "source": "Human rights", "target": "Access to land", "value": 0.0315022209894056 },
            { "source": "Access to land", "target": "Hazelnuts (Organic)", "value": 0.00964970063322223 },
            { "source": "Access to land", "target": "Cocoa mass (Organic)", "value": 0.00938530207965 },
            { "source": "Access to land", "target": "Cocoa butter (Organic)", "value": 0.0060110791848 },
            { "source": "Access to land", "target": "Cane sugar (Organic)", "value": 0.00380818314608889 },
            { "source": "Access to land", "target": "Vegetables (Organic)", "value": 0.00264795594564445 },
            { "source": "Access to land", "target": "Coconut oil (Organic)", "value": 0 },
            { "source": "Human rights", "target": "Sufficient wage", "value": 0.0287776757227333 },
            { "source": "Sufficient wage", "target": "Cocoa mass (Organic)", "value": 0.00883512456493333 },
            { "source": "Sufficient wage", "target": "Cocoa butter (Organic)", "value": 0.0078343367268 },
            { "source": "Sufficient wage", "target": "Coconut oil (Organic)", "value": 0.00347879026511111 },
            { "source": "Sufficient wage", "target": "Hazelnuts (Organic)", "value": 0.00316254211388889 },
            { "source": "Sufficient wage", "target": "Vegetables (Organic)", "value": 0.00281013722808889 },
            { "source": "Sufficient wage", "target": "Cane sugar (Organic)", "value": 0.00265674482391111 },
            { "source": "Human rights", "target": "Equal rights migrants", "value": 0.0271146645119444 },
            { "source": "Equal rights migrants", "target": "Cocoa butter (Organic)", "value": 0.0071042315061 },
            { "source": "Equal rights migrants", "target": "Cocoa mass (Organic)", "value": 0.00636673210005 },
            { "source": "Equal rights migrants", "target": "Hazelnuts (Organic)", "value": 0.00601459775836111 },
            { "source": "Equal rights migrants", "target": "Coconut oil (Organic)", "value": 0.00429185583138889 },
            { "source": "Equal rights migrants", "target": "Cane sugar (Organic)", "value": 0.00182647471915556 },
            { "source": "Equal rights migrants", "target": "Vegetables (Organic)", "value": 0.00151077259688889 },
            { "source": "Human rights", "target": "Discrimination", "value": 0.0211217763359833 },
            { "source": "Discrimination", "target": "Cocoa mass (Organic)", "value": 0.00609671700306667 },
            { "source": "Discrimination", "target": "Cocoa butter (Organic)", "value": 0.0047738806325 },
            { "source": "Discrimination", "target": "Coconut oil (Organic)", "value": 0.00368119084494444 },
            { "source": "Discrimination", "target": "Vegetables (Organic)", "value": 0.00286009813604444 },
            { "source": "Discrimination", "target": "Cane sugar (Organic)", "value": 0.00283706180951111 },
            { "source": "Discrimination", "target": "Hazelnuts (Organic)", "value": 0.000872827909916666 },
            { "source": "Human rights", "target": "Working hours", "value": 0.02082642898975 },
            { "source": "Working hours", "target": "Hazelnuts (Organic)", "value": 0.0107216773848333 },
            { "source": "Working hours", "target": "Coconut oil (Organic)", "value": 0.00359009052944444 },
            { "source": "Working hours", "target": "Vegetables (Organic)", "value": 0.00212300379075556 },
            { "source": "Working hours", "target": "Cocoa butter (Organic)", "value": 0.0018518584356 },
            { "source": "Working hours", "target": "Cocoa mass (Organic)", "value": 0.00158227069058333 },
            { "source": "Working hours", "target": "Cane sugar (Organic)", "value": 0.000957528158533333 }
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
