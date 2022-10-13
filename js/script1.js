 //배너 이미지 슬라이드
        $(function(){
            var slidecount = $(".banner .slide > div").length;
            var currentIdx = 0;
            var $slidePrev = $(".banner .prev");
            var $slideNext = $(".banner .next");
            var winWidth = $(window).width();
            
            $slidePrev.on('click',function(){
                currentIdx = 0;
                var slidePosition = currentIdx*(-1224)+"px";
                $(".banner .slide").animate({left:slidePosition},400);
            });
            
            $slideNext.on('click',function(){
                if (currentIdx = slidecount){
                    currentIdx--;
                } else {
                    currentIdx = 0;
                }
                var slidePosition = currentIdx*(-1224)+"px";
                $(".banner .slide").animate({left:slidePosition},400);
                
                $(window).resize(function() {
                if($(window).width() < 1290) { 		
                    $(".banner .slide").animate({left:0+"px"},0); 	
                } 
            });

            });
        });
        
    //모델 오버뷰 탭메뉴
        var modBtn = $(".model_name > ul > li");
        var modCont = $(".model_cont > div");
        
        modCont.hide().eq(0).show();
        
        modBtn.click(function(e){
           e.preventDefault();
            var target = $(this);
            var Idx = target.index();
            modBtn.removeClass("active");
            target.addClass("active");
            modCont.css("display","none");
            modCont.eq(Idx).css("display","block");
        });
        
    //맨 하단 탑버튼
        $(function(){
            $(".top").click(function(e){
                e.preventDefault();
                $("html,body").animate({scrollTop:0},500);
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
