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

    var myChart = echarts.init(document.getElementById('main'));
    myChart.showLoading();

    $.ajax({
            url: '/track/',
            data: {
                addr: '1B5hGxuLTiSyrZrT8vfcCoXNnZqPLBuLFf'
            }
        })
        .done(function(data) {
            data = JSON.parse(data);
            
            myChart.hideLoading();

            myChart.setOption({
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

            if (data.reportUrl.length == 0) {
                $('#report').html('無檢驗報告');
            }
            htmlString = '';
            for (var i in data.reportUrl) {
                var reportUrl = data.reportUrl[i];
                htmlString += '<image style="width:100%" src="' + reportUrl + '">';
            }
            $('#report').html(htmlString);


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
