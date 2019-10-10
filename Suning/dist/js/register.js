"use strict";

$(function () {
	$("#txt1").change(function () {
		if ($("#txt1").val() == "") {
			$(".gsbd2").text("邮箱不能为空").css({
				"display": "block"
			});
			return false;
		}
		var email = $("#txt1").val();
		if (!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
			$(".gsbd2").text("格式不正确！请重新输入").css({
				"display": "block"
			});
		} else {
			$(".gsbd2").text("格式正确");
		};
	});
});
$(function () {
	$("#txt2").change(function () {
		var password = $("#txt2").val();
		if (!password.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/)) {
			$(".gsbd3").text("格式不正确！请重新输入").css({
				"display": "block"
			});
		} else {
			$(".gsbd3").text("格式正确");
		};
	});
});
////用户名验证，邮箱验证，注册

$(function () {
	$(".zhuce").click(function (event) {
		$.get("http://47.104.244.134:8080/username.do", {
			"username": $("#txt").val()
		}, function (data) {
			console.log(data);
			if (data.msg == "失败") {
				console.log("111");
				$.get("http://47.104.244.134:8080/useremail.do", {
					"email": $("#txt1").val()
				}, function (data) {
					console.log(data);
					if (data.msg == "失败") {
						console.log("222");
						$.post("http://47.104.244.134:8080/usersave.do", {
							username: $("#txt").val(),
							password: $("#txt2").val(),
							email: $("#txt1").val(),
							sex: "男"
						}, function (data) {
							console.log(data);
						});
						location.href = "login.html";
					} else {
						alert("该邮箱已注册");
					}
				});
			} else {
				alert("该用户已注册");
			}
		});

		return false;
	});
});