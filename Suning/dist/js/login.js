"use strict";

$(function () {
	$(".logintab").find("a").mouseover(function () {
		$(this).addClass("yanse").siblings().removeClass("yanse");
		$(this).find("i").addClass("ii").end().siblings().find("i").removeClass("ii");
		var index = $(this).index();
		$(".tabpane").eq(index).css({
			"display": "block"
		}).siblings().css({
			"display": "none"
		});
	});
});

$(function () {

	$(".denglu").click(function (event) {
		// let token = $.cookie("token");
		$.post("http://47.104.244.134:8080/userlogin.do", {
			"name": $("#text1").val(),
			"password": $("#text2").val()
		}, function (data) {
			console.log(data);
			if (data.code == 0) {
				console.log("sdas");
				$.cookie("name", $("#text1").val(), {
					path: "/",
					expires: 7
				});
				$.cookie("token", data.data.token, {
					path: "/",
					expires: 7
				});
				location.href = "../shouye.html";
			} else {
				alert("账户或密码错误");
				$("#text1").val("");
				$("#text2").val("");
			}
		});
		return false;
	});
});
// $(function() {
// 	$(".denglu").click(function(event) {
// 		// let token = $.cookie("token");
// 		$.post("http://47.104.244.134:8080/userlogin.do", {
// 				"name": $("#text1").val(),
// 				"password": $("#text2").val()
// 			},
// 			function(data) {
// 				console.log(data);
// 				if (data.code == 0) {
// 					console.log("sdas")
// 					$.cookie("name",$("#text1").val() , {
// 						path: "/",
// 						expires: 7
// 					});
// 					$.cookie("token", data.data.token, {
// 						path: "/",
// 						expires: 7
// 					});
// 					location.href = "../shouye.html"	
// 				}
// 			})
// 		return false;
// 	})
// 
// })
//