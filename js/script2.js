 //모델 디테일 탭메뉴
        var detBtn = $(".detail_tit > ul > li");
        var detCont = $(".detail > div");
        
        detCont.hide().eq(0).show();
        
        detBtn.click(function(e){
           e.preventDefault();
            var target = $(this);
            var Idx = target.index();
            detBtn.removeClass("active");
            target.addClass("active");
            detCont.css("display","none");
            detCont.eq(Idx).css("display","block");
        
        });
        
    //맨 하단 탑버튼
        $(function(){
            $(".top").click(function(e){
                e.preventDefault();
                $("html,body").animate({scrollTop:0},500);
            });
        });
        
    //모델 상세 애니메이션
            let cont = $(".detail > div > div");
            $(window).scroll(function(){
                let wScroll = $(this).scrollTop();
                for(let i=0; i<=6; i++){
                if(cont.eq(i).offset().top >= $(window).height()/2){
                cont.eq(i).addClass('show');
                  } else {
                      cont.addClass("show");
                  };
               };
                detBtn.click(function(){
                    cont.removeClass('show');
                });
            });    
    
    //팝업 메뉴
        var popBtn = $(".menu > ul > li");
        var popCont = $(".popup > div");

        popCont.hide().eq(0).show();
        
        $(document).ready(function(){
            popBtn.on('click',function(e){
                e.preventDefault();
                var popIdx = $(this).index();
                if (popIdx < 4){
                        $(".popup").fadeIn(500);
                        popCont.removeClass("active");
                        $(this).addClass("active");
                        popCont.css("display","none");
                        popCont.eq(popIdx).fadeIn(500);
                    } else {
                        $(".popup").fadeOut(500);
                        return false;
                    };
            });
                        
            $(".popup .pop_close").on('click',function(){
                $(this).parent().hide();
            });
        });
        
        $(document).ready(function(){
            $("#mNav").on('click',function(e){
                e.preventDefault();
                $(".popup2").show();
            })
            
            $(".popup2 .pop_close").on('click',function(){
                $(this).parent().hide();
            });
        });
        
        $(window).resize(function() {
                if($(window).width() < 1290) { 		
                    $(".popup").hide(); 
                };
        });
        
        $(window).resize(function() {
                if($(window).width() >= 1290) { 		
                    $(".popup2").hide(); 
                };
        });
        
