
$(document).ready(function(){
	//실습1 
	var i=0;
	$(".out").mouseover(function(){
		$(".out p:first").text("mouseover");
		$(".out p:last").text(++i);
	});




	//실습2
	function max_open(event){
		var maxwindow = window.open(event.data.url,"",event.data.winattributes);
		maxwindow.moveTo(0,0);
		maxwindow.resizeTo(screen.availWidth, screen.availHeight); //모니터 객체
	}
	$("#b1").on("click",{url:"http://www.google.com",winattributes:"resize=1, scrollbars=1, status=1"},max_open);
	



	//실습3
	function flash(){
		$("#off_test").show().fadeOut("slow");
	}
	$("#bind").click(function(){
		$("body").on("click","#theone",flash).find("#theone").text("Can Click!");
	});
	$("#unbind").click(function(){
		$("body").off("click","#theone",flash).find("#theone").text("Does nothing...");
	});



	//실습4
	function update(j){
		var n = parseInt(j.text(),10);
		j.text(n+1);
	}
	$("#trigger_test button:first").click(function(){
		update($("span:first"));
	});
	$("#trigger_test button:last").click(function(){
		update($("span:last"));
		$("#trigger_test button:first").trigger("click");
	});



	//실습5
	$("#image").click(function(){
		if($("#image").attr("src") =="CAT1.jpg"){
			$("#image").attr("src","CAT2.jpg");
		} else {
			$("#image").attr("src","CAT1.jpg");
		}
	});

	//실습6
	var imgArray = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg",]
	var albumIndex = 0;
	$("#imgAlbum").attr("src",imgArray[albumIndex]);
	$("#imgAlbum").click(function(){
		albumIndex=(albumIndex+1)%imgArray.length;
		$("#imgAlbum").attr("src",imgArray[albumIndex]);
		
	});


	//실습7 메뉴
	$("a.main-menu").mouseover(function(){
        $(this).css("background-color","green");
        $(this).css("font-size",20);
    });
    $("a.main-menu").mouseout(function(){
        $(this).css("background","none");
        $(this).css("font-size","16px");
    });


    //실습8 스케줄 노트
    function change_position(obj) {
    	var l = ($(window).width()-obj.width())/2;
    	var t = ($(window).height()-obj.height())/2;
    	obj.css({top:t,left:l});
    }
    $("#add_img").click(function(){
    	//$("#note_form").attr("class","popup");
    	$("#note_form").addClass("popup");

    	change_position($(".popup"));
    	//$("#note_form").show();
    	//$("#note_form").css("display","block");
    	$("#note_form").show().fadeOut("slow").slideDown(3000);
    });
    $(window).resize(function(){change_position($(".popup"));});

    $("#add_note").click(function(){
    	var title = $("#note_title").val();
    	var date = $("#note_date").val();
    	var content = $("#note_content").val();
    	var note = title+"\n"+date+"\n"+content;
    	alert(note);


    	$("#note_title").val("");
    	$("#note_date").val("");
    	$("#note_content").val("");
    	//$("#note_form").hide();
    	$("#note_form").hide().fadeIn(3000).slideUp("slideUp");
    	

    	$("#note").append("<p>"+title+"<br>"+date+"<br>"+content+"<br></p>");
    });

    //실습9
    $("#moving_button").click(function(){
		
 		if( $("#moving_box").width() <= $("#animation_test").width()-50){
    		$("#animation_test").animate({height:"+=50px"});
    		$("#moving_box").animate({height:"+=50px",width:"+=50px",right:"0"});
    	}
    });


    ////////////////jquery 실습///////////////////////
    //실습1

    // $(".accordion").each(function(){
    // 	var alldd = $(this).find("dd");
    // 	alldd.hide();
    // 	var alldt = $(this).find("dt");
    // 	alldt.css("cursor","pointer");
    // 	$("dt").click(function(){
    // 		alldd.hide();
    // 		$(this).next().show();

    // 		alldt.css("cursor","pointer");
    // 		$(this).css("cursor","default");
    // 	});
    // });

    //이건 잘못된 코드 accordion 아래만 
    // $("dd").each(function(){
    // 	$(this).hide();
    // });

	$(".accordion").each(function(){
		var dl = $(this);
		var allDt = dl.find("dt");
		var allDd = dl.find("dd");
		function closeAll(){
			allDd.addClass("closed");
			allDt.addClass("closed");
		}
		function open(dt,dd){
			dt.removeClass("closed");
			dd.removeClass("closed");
		}
		closeAll();
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();
			closeAll();
			open(dt,dd);
		});
	});
	var interval = 3000;
	$(".slideshow").each(function(){
		var timer;
		var container = $(this);
		function switching(){
			var imgs = container.find('img');
			var first = imgs.eq(0);
			var second = imgs.eq(1);
			first.appendTo(container).fadeOut(2000);
			second.fadeIn();
		}
		function startTimer(){
			timer = setInterval(switching,interval);
		}
		
		function stopTimer(){
			clearInterval(timer);
		}
		container.hover(stopTimer,startTimer);
		startTimer();
	})
    
});


