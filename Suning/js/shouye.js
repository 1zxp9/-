$(function() {
	$(".input1").focus(function() {
		console.log("sss");
		$("#rec_results").css({
			"display": "block"
		});
	});
	$(".icon-x").click(function() {
		$("#rec_results").css({
			"display": "none"
		});
	});
	$(".hotwords").find("a").mousemove(function() {
		$(this).css({
			"color": "red"
		}).siblings().css({
			"color": "#666"
		})
	});
	$(".ngnav").find("li").mousemove(function() {
		$(this).find("a").css({
			"color": "red"
		}).parent().siblings().find("a").css({
			"color": "#666"
		})
	});
	$(".second-list li").hover(function() {
			console.log("zx");
			var index = $(this).index();
			console.log(index);
			$(".third-item").eq(index).css({
				"display": "block",
				"z-index": "200"
			}).siblings().css({
				"display": "none"
			});
			$(this).css({"background":"red","color":"#fff"}).find("em").css({"color":"#fff"});
			$(this).find("a").css({"color":"#fff"})
		},
		function(event) {
			console.log("x");
			$(".third-item").css({
				"display": "none"
			});
			$(this).css({"background":"#fff","color":"#fff"}).find("em").css({"color":"#333"});
			$(this ).find("a").css({"color":"#333"})
			return false;
		}
	);
	$(".bannerwrapper").hover(function(event) {
			$(".leftbtn, .rightbtn").css({
				"display": "block"
			});
			return false;
		},
		function(event) {
			$(".leftbtn, .rightbtn").css({
				"display": "none"
			});
			return false;
		});
	$(".topkuang").find("li").hover(function(event) {
			$(this).find("em").css({
				"height": "14px",
				"background": "red",
				"top": "2px"
			});
			$(this).find("p").css({
				"color": "red"
			});
			return false;
		},
		function(event) {
			$(this).find("em").css({
				"height": "3px",
				"background": "#ccc",
				"top": "7px"
			});
			$(this).find("p").css({
				"color": "#444"
			});
			return false;
		});
	$(".tabnav").find("li").mouseover(function(event) {
		$(this).siblings().find("p").css({
			"color": "#333"
		}).end().find(".line6").css({
			"background": "#f2f2f2"
		});
		$(this).find("p").css({
			"color": "red"
		}).end().find(".line6").css({
			"background": "red"
		});
		var index = $(this).index();
		console.log(index);
		$(".tabcontent1").eq(index).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	});

	$(".cranknav").find("li").hover(function() {
			$(this).addClass("li1").find("P").addClass("p1")
		},
		function() {
			$(this).removeClass("li1").find("P").removeClass("p1")
		})

	$(".cranknav").find("li").click(function() {
		$(this).addClass("li2").siblings().removeClass("li2").end().find("P").addClass("p2").siblings().removeClass("p2");
		var index = $(this).index();
		console.log(index);
		$(".crankcount").eq(index).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	})
})

;
$(function() {
	var time = null
	$(".bannerwrapper").hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(fun, 2000);
	})
	var num = 0;
	time = setInterval(fun, 2000);

	function fun() {
		$(".bannerwrapper").find("li").eq(num).stop().fadeOut(2000);
		num++;
		if (num > 3) {
			num = 0;
		}
		$(".bannerwrapper").find("li").eq(num).stop().fadeIn(2000);
		$("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");

	}
	$("#min").find("span").click(function() {
		num = $(this).index();
		$(".bannerwrapper").find("li").eq(num).fadeIn(2000).siblings().fadeOut(2000);
		$(this).css("background", "black").siblings().css("background", "");
	})


	$(".rightbtn").click(function() {
		$(".bannerwrapper").find("li").eq(num).stop().fadeOut(2000);
		num++;
		if (num > 3) {
			num = 0;
		}
		$(".bannerwrapper").find("li").eq(num).stop().fadeIn(2000);
		$("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");
	})


	$(".leftbtn").click(function() {
		$(".bannerwrapper").find("li").eq(num).stop().fadeOut(2000);
		num--;
		if (num < 0) {
			num = 3;
		}
		$(".bannerwrapper").find("li").eq(num).stop().fadeIn(2000);
		$("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");
	})

})



;
$(function() {
	var time = null
	$(".kuai").hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(fun, 2000);
	})
	var num = 0;
	time = setInterval(fun, 2000);

	function fun() {
		$(".kuai").find(".kuai1").eq(num).stop().fadeOut(2000);
		num++;
		if (num > 2) {
			num = 0;
		}
		$(".kuai").find(".kuai1").eq(num).stop().fadeIn(2000);
		// $("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");

	}
	// $("#min").find("span").click(function() {
	// 	num = $(this).index();
	// 	$(".kuai").find("kuai1").eq(num).fadeIn(2000).siblings().fadeOut(2000);
	// 	$(this).css("background", "black").siblings().css("background", "");
	// })


	$(".pointright").click(function(event) {
		$(".kuai").find(".kuai1").eq(num).stop().fadeOut(2000);
		num++;
		if (num > 2) {
			num = 0;
		}
		$(".kuai").find(".kuai1").eq(num).stop().fadeIn(2000);
		// $("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");
		return false;
	})


	$(".pointleft").click(function(event) {
		$(".kuai").find(".kuai1").eq(num).stop().fadeOut(2000);
		num--;
		if (num < 0) {
			num = 2;
		}
		$(".kuai").find(".kuai1").eq(num).stop().fadeIn(2000);
		// $("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");
		return false;
	})

})


;
$(function() {
	var time = null
	$(".sagetu").hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(fun, 2000);
	})
	var num = 0;
	time = setInterval(fun, 2000);

	function fun() {
		$(".sagetu").find("li").eq(num).stop().fadeOut(2000);
		num++;
		if (num > 2) {
			num = 0;
		}
		$(".sagetu").find("li").eq(num).stop().fadeIn(2000);
		// $("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");

	}
	// $("#min").find("span").click(function() {
	// 	num = $(this).index();
	// 	$(".kuai").find("kuai1").eq(num).fadeIn(2000).siblings().fadeOut(2000);
	// 	$(this).css("background", "black").siblings().css("background", "");
	// })


	$(".pointright1").click(function(event) {
		$(".sagetu").find("li").eq(num).stop().fadeOut(2000);
		num++;
		if (num > 2) {
			num = 0;
		}
		$(".sagetu").find("li").eq(num).stop().fadeIn(2000);
		// $("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");
		return false;
	})


	$(".pointleft1").click(function(event) {
		$(".sagetu").find("li").eq(num).stop().fadeOut(2000);
		num--;
		if (num < 0) {
			num = 2;
		}
		$(".sagetu").find("li").eq(num).stop().fadeIn(2000);
		// $("#min").find("span").eq(num).css("background", "black").siblings().css("background", "");
		return false;
	})

})

//量贩汇
$(function(){
	var str=""
	$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":"13","page":"3","limit":"3"},function(data){
			for(let j=0;j<data.data.length;j++){
					str +=
						`
					   <li>
					   	<a href="javascript:void(0);" title="伊利 谷粒多 谷物牛奶饮品 红谷牛奶 粗粮牛奶 12*250ml">
					   		<img src="http:${(data.data)[j].picurl}"  perId="${(data.data)[0].id}">
					   		<p class="name">${(data.data)[j].name}</p>
					   		<p class="price">"¥"<em>${(data.data)[j].price}</em></p>
					   	</a>
					   	<a href="" class="iconfont icon-shoppingcart-over"></a>
					   </li>
					`;
			}	
					$(".kuai1").find("ul").html(str)
					$(".kuai1").find("img").click(function(){
						var perId=$(this).attr("perId");
						$.cookie("perId",perId , {
							path: "/",
							expires: 7
						});
						console.log(perId);
						location.href="html/detail.html";
					})
	})
})
//排行榜
$(function(){
	var str=""
	for(let i=1;i<=$(".crankcount").length;i++){
	$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":"13","page":"3","limit":i},function(data){
			for(let j=0;j<10;j++){
					str +=
						`
					   <li>
					   	<a href="javascript:void(0);" title="伊利 谷粒多 谷物牛奶饮品 红谷牛奶 粗粮牛奶 12*250ml">
					   		<img src="http:${(data.data)[0].picurl}"  perId="${(data.data)[0].id}">
					   		<p class="name">${(data.data)[0].name}</p>
					   		<p class="price">¥<em>${(data.data)[0].price}</em></p>
					   	</a>
					   	<a href="" class="iconfont icon-shoppingcart-over"></a>
					   </li>
					`;
				}	
					$(".crankcount").eq(i-1).find("ul").html(str)
					str="";
					$(".crankcount").find("img").click(function(){
						var perId=$(this).attr("perId");
						$.cookie("perId",perId , {
							path: "/",
							expires: 7
						});
						console.log(perId);
						location.href="html/detail.html";
					})
		
					
	})
	}
})
//优选好物
$(function(){
	var str="";
	for(let i=1;i<=$(".tabcontent1").length;i++){
		
		$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":"13","page":"3","limit":i},function(data){
				for(let j=0;j<4;j++){
					
						str +=
							`
		                   <li>
		                   	<a href="javascript:void(0);" class="zcc">
		                   		<img src="http:${(data.data)[0].picurl}" perId="${(data.data)[0].id}"  class="imga">
		                   		<p class="name">${(data.data)[0].name}</p>
		                   		<p class="price">
		                   			¥&nbsp;
		                   			<em>${(data.data)[0].price}</em>
		                   		</p>
		                   	</a>
		                   	<a href="" class="iconfont icon-shoppingcart-over"></a>
		                   </li>
						`;	
				    }	
					console.log(i-1)
					$(".tabcontent1").eq(i-1).find("ul").html(str)
					str="";
					$(".tabcontent1").find("img").click(function(){
						var perId=$(this).attr("perId");
						$.cookie("perId",perId , {
							path: "/",
							expires: 7
						});
						console.log(perId);
						location.href="html/detail.html";
					})
				})
				
	}	
})


//超级市场
$(function() {
	var str = "";
	$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":"13","page":"3","limit":"1"},function(data){
		//console.log($("#rec").find("li").length)
		for (let i = 0; i < 8; i++) {
			str +=
				`
	      	   <li>
	      	   	<a href="javascript:void(0);" class="zxp">
	      	   		<img src="http:${(data.data)[0].picurl}" alt="" perId="${(data.data)[0].id}">
	      	   		<p class="name">${(data.data)[0].name}</p>
	      	   		<p class="price">
	      	   			¥&nbsp;
	      	   			<em>${(data.data)[0].price}</em>
	      	   		</p>
	      	   	</a>
	      	   	<a href="" class="iconfont icon-shoppingcart-over"></a>
	      	   </li>
	      	`;
		}
		$(".col22").find("ul").html(str)
		$(".col22").find("img").click(function(){
			var perId=$(this).attr("perId");
			$.cookie("perId",perId , {
				path: "/",
				expires: 7
			});
			console.log(perId);
			location.href="html/detail.html";
		})
	})
})
//猜你喜欢
$(function() {
	var str = "";
	$.get("http://47.104.244.134:8080/goodsbytid.do",{"tid":"13","page":"3","limit":"1"},function(data){
		//console.log($("#rec").find("li").length)
		for (let i = 0; i < 50; i++) {
			str +=
				`
	      	   <li>
	      	   		<a href="javascript:void(0);" class="zxp1">
	      	   			<img src="http:${(data.data)[0].picurl}" alt="" perId="${(data.data)[0].id}">
	      	   			<p class="name">${(data.data)[0].name}</p>
	      	   			<p class="price">
	      	   				¥&nbsp;
	      	   				<em>${(data.data)[0].price}</em>
	      	   			</p>
	      	   		</a>
	      	   	    <a href="" class="iconfont icon-shoppingcart-over"></a>
	      	   </li>
	      	`;
		}
		$("#rec").html(str)
		$("#rec").find("img").click(function(){
			var perId=$(this).attr("perId");
			$.cookie("perId",perId , {
				path: "/",
				expires: 7
			});
			console.log(perId);
			location.href="html/detail.html";
		})
	})
})

//右侧边栏
$(function() {
	$(".icon-duanxin").hover(function() {
			console.log("xxx")
			$(".icon-duanxin").siblings().animate({
				"left": "-47px"
			}, 500)
		},
		function() {
			$(".icon-duanxin").siblings().animate({
				"left": "47px"
			}, 500);
		})

	$(".snmiddle").find("i").hover(function() {
			console.log("xxx")
			$(this).siblings().animate({
				"left": "-47px"
			}, 500)
		},
		function() {
			$(this).siblings().animate({
				"left": "47px"
			}, 500);
		})

	$(".icon-saoma").hover(function() {
			console.log($(this).siblings())
			$(this).siblings().animate({
				"left": "-134px"
			}, 300)
		},
		function() {
			$(this).siblings().animate({
				"left": "134px"
			}, 500);
		})
	$(".snbottom").find("i").hover(function() {
			console.log("xxx")
			$(this).siblings().animate({
				"left": "-73px"
			}, 500)
		},
		function() {
			$(this).siblings().animate({
				"left": "73px"
			}, 500);
		})

})
//左边栏
$(function() {
	var flag = true
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		if (st > 400) {
			$(".floatbarer").show();
		} else {
			$(".floatbarer").hide();
		}
		if (flag) {
			for (let i = 0; i < $(".clouti").length; i++) {
				if (st >= $(".clouti").eq(i).offset().top - $(".clouti").eq(i).outerHeight() / 2) {
					$(".louti li").eq(i).addClass("hover").siblings().removeClass("hover")
				}
			}
		}
	})
	$(".louti li:not(:last)").click(function(event) {
		flag = false;

		var index = $(this).index();
		$("html,body").stop().animate({
			"scrollTop": $(".clouti").eq(index).offset().top
		}, 300, function() {
			flag = true;
		});
		$(this).addClass("hover").siblings().removeClass("hover")
		return false;
	})
	$(".louti li:last").click(function(event) {
		flag = false;
		$("html,body").stop().animate({
			"scrollTop": 0
		}, 500, function() {
			flag = true;
		});
	})
	return false;
});
$(function() {
	$(".floattitle").hover(function() {
			$(this).find("p").css({
				"display": "block"
			})
		},
		function() {
			$(this).find("p").css({
				"display": "none"
			})
		})
})



//点击进入详情页
$(function() {
	$(".input1")[0].oninput = function() {
		$("#rec_results").css({
			"display": "none"
		});
		console.log("safas")
		let val = $(".input1").val();
		$.getJSON("http://suggest.taobao.com/sug?q=" + val + "&callback=?", data => {
			var str = "";
			for (var i in data.result) {
				// console.log(data.result[i][0]);
				str += `<li>${data.result[i][0]}</li>`;
			}
			$("#oUl").html(str);
			$("#oUl").find("li").mousemove(function(){
				$(this).css({"background":"#E4E4E4"}).siblings().css({"background":"#fff"})
			})
		})
                       }
	})
	
	
	
	// <!--点击进入详情页-->
	$(function() {
		let token = $.cookie("token");
		console.log(token);
		let name = $.cookie("name");
		console.log(name);
		if (token !== undefined) {
			$(".login").text(name);
			$(".login1").text(name);
		}
	})
	
	$(function() {
		$(".minicart").click(function(event) {
			location.href = "html/cart.html";
			return false;
		})
	
	})
	