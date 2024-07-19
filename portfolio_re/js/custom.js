$(function () {
    /* 마우스 휠 이벤트 */
    $('.wrap>section').on('wheel', function (e) {
        e.preventDefault();
        let nav;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            nav = $(this).prev();
        } else {
            nav = $(this).next();
        }

        if (nav.length) {
            let moveTop = nav.offset().top;
            // console.log(moveTop);
            $('html,body').stop().animate({
                scrollTop: moveTop,
            }, 500);
        }
    });
    /* 마우스 휠 이벤트 끝 */


    $('ul.hashNav li a').click(function () {
        let nav = $(this.hash).offset().top;
        $('html,body').stop().animate({
            scrollTop: nav
        }, 500);
    });

    $('.contents .fx .num li').click(function () {
        let i = $(this).index();
        let ro = 90 * (i + 1);
        $('.contents .fx .num').css({
            'transform': `rotate(-${ro}deg)`,
            'transition': '0.6s'
        });
        $('.contents .fx .num ul li em').css({
            'transform': `rotate(${ro}deg)`,
            'transition': '0.6s'
        })
        $('.contents .fx .num li').removeClass('on');
        $(this).addClass('on');
        $('.contents .con_all>div').removeClass('on').eq(i).addClass('on');
    });


    $('.list .play').click(function () {
        $('.list .lp ').toggleClass('on')
    })
    let SectionId = ['#top', '#profile', '#design', '#coding', '#team', '#contact'];

    $('.slide_nav_all .slide_nav').click(function () {
        let i = $(this).index();
        $('.slide_nav_all .slide_nav').removeClass('on').eq(i).addClass('on');
        $('html, body').stop().animate({
            scrollTop: $(SectionId[i]).offset().top,
        }, 800,);
    })


    $(window).scroll(function(){
        let st = $(this).scrollTop();
        for(let i =0; i<SectionId.length; i++){
            let lastSection = i ==SectionId.length-1? $(document).height():$(SectionId[i+1]).offset().top;
            if(st >= $(SectionId[i]).offset().top && st<lastSection){
                if(i == 3){
                    $('.slide_nav_all').addClass('on');
                }else{
                    $('.slide_nav_all').removeClass('on')
                }
                $('.slide_nav_all .slide_nav').removeClass('on').eq(i).addClass('on');
            }
        }
    });
})