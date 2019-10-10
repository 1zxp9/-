"use strict";

$(function () {
	var token = $.cookie("token");
	console.log(token);
	var name = $.cookie("name");
	console.log(name);
	if (token !== undefined) {
		$(".login").text(name);
		$(".login1").text(name);
	}
	var str = "";
	var perId = $.cookie("perId");
	var cartlist = $.get("http://47.104.244.134:8080/cartlist.do", { "token": token }, function (data) {
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			str += "\n\t\t\t\t\t\t<input class=\"dianquanxuan3\" type=\"checkbox\" name=\"\" id=\"\" value=\"\" />\n\t\t\t\t\t\t<div class=\"tditem\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a href=\"\"><img src=\"http:" + data[i].goods.picurl + "\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t<a href=\"\"  style=\"display: none;\"><img src=\"http:" + data[i].goods.picurl + "\" alt=\"\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div><a href=\"\">" + data[i].goods.name + "</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tdspecs\">" + data[i].goods.name + "</div>\n\t\t\t\t\t\t<div class=\"tdprice\">\n\t\t\t\t\t\t\t<p>\uFFE5<span class=\"aprice\">" + data[i].goods.price + "</span></p>\n\t\t\t\t\t\t\t<p>\u5927\u4F1A\u636E</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tdamount\">\n\t\t\t\t\t\t\t<div class=\"itemamount\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn_l\">-</a>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"text-amount\" value=\"" + data[i].count + "\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn_r\">+</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"zizi\">\u6700\u591A\u53EF\u4E7020\u4EF6</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"tdsum\">\uFFE5<span class=\"zongjia\">60.90</span></div>\n\t\t\t\t\t\t<div class=\"tdop\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"remove\">\u79FB\u9664\u5173\u6CE8</a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"delete\">\u5220\u9664</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
		}

		$(".splist2").html(str);

		var _loop = function _loop(j) {
			var aprice = $(".aprice").eq(j).text();
			console.log(aprice);
			var atextamount = $(".text-amount").eq(j).val();
			$(".zongjia").eq(j).text(aprice * atextamount);
			//点击减数量
			$(".btn_l").eq(j).click(function () {
				if ($(".text-amount").eq(j).val() <= 1) {
					$(".text-amount").eq(j).val("1");
					return;
				}
				var num1 = $(".text-amount").eq(j).val();
				num1--;
				$(".text-amount").eq(j).val(num1);

				$.get("http://47.104.244.134:8080/cartupdate.do", { "id": data[j].id, "gid": data[j].gid, "num": "-1", "token": token }, function (data) {
					console.log(data);
				});
				// window.location.reload()
				var aprice = $(".aprice").eq(j).text();
				console.log(aprice);
				var atextamount = $(".text-amount").eq(j).val();
				$(".zongjia").eq(j).text(aprice * atextamount);

				var haoduoqian = 0;
				var danzongjia = 0;
				for (var k = 0; k < $(".dianquanxuan3").length; k++) {
					if ($(".dianquanxuan3").eq(k).prop("checked")) {
						haoduoqian += Number($(".text-amount").eq(k).val());
						danzongjia += Number($(".zongjia").eq(k).text());
					}
					$(".dsj").text(haoduoqian);
					$(".mathprice").text(danzongjia);
				}
			});
			//点击加数量
			$(".btn_r").eq(j).click(function () {
				var num2 = $(".text-amount").eq(j).val();
				num2++;
				$(".text-amount").eq(j).val(num2);
				$.get("http://47.104.244.134:8080/cartupdate.do", { "id": data[j].id, "gid": data[j].gid, "num": "1", "token": token }, function (data) {
					console.log(data);
				});
				var aprice = $(".aprice").eq(j).text();
				console.log(aprice);
				var atextamount = $(".text-amount").eq(j).val();
				$(".zongjia").eq(j).text(aprice * atextamount);

				var haoduoqian = 0;
				var danzongjia = 0;
				for (var k = 0; k < $(".dianquanxuan3").length; k++) {
					if ($(".dianquanxuan3").eq(k).prop("checked")) {
						haoduoqian += Number($(".text-amount").eq(k).val());
						danzongjia += Number($(".zongjia").eq(k).text());
					}
					$(".dsj").text(haoduoqian);
					$(".mathprice").text(danzongjia);
				}
			});
			//修改数量
			var textamount = $(".text-amount").eq(j).val();
			$(".text-amount").eq(j).change(function () {
				var textamount1 = $(".text-amount").eq(j).val();
				$.get("http://47.104.244.134:8080/cartupdate.do", { "id": data[j].id, "gid": data[j].gid, "num": textamount1 - textamount, "token": token }, function (data) {
					console.log(data);
				});
				var aprice = $(".aprice").eq(j).text();
				console.log(aprice);
				var atextamount = $(".text-amount").eq(j).val();
				$(".zongjia").eq(j).text(aprice * atextamount);

				var haoduoqian = 0;
				var danzongjia = 0;
				for (var k = 0; k < $(".dianquanxuan3").length; k++) {
					if ($(".dianquanxuan3").eq(k).prop("checked")) {
						haoduoqian += Number($(".text-amount").eq(k).val());
						danzongjia += Number($(".zongjia").eq(k).text());
					}
					$(".dsj").text(haoduoqian);
					$(".mathprice").text(danzongjia);
				}
			});
			//点击删除
			$(".delete").eq(j).click(function () {
				$.get("http://47.104.244.134:8080/cartupdate.do", { "id": data[j].id, "gid": data[j].gid, "num": "0", "token": token }, function (data) {
					window.location.reload();
				});
			});
		};

		for (var j = 0; j < data.length; j++) {
			_loop(j);
		}
		//多选,单选
		$(".dianquanxuan1").click(function () {
			$(".dianquanxuan3").prop("checked", $(this).prop("checked"));
		});
		$(".dianquanxuan3").click(function () {
			if ($(".dianquanxuan3:checked").length == $(".dianquanxuan3").length) {
				$(".dianquanxuan1").prop("checked", true);
				$(".dianquanxuan4").prop("checked", true);
			} else {
				$(".dianquanxuan1").prop("checked", false);
				$(".dianquanxuan4").prop("checked", false);
			}
		});

		//点击全选
		$(".dianquanxuan4").click(function () {
			var mathprice = 0;
			var mathgeshu = 0;
			$(".dsj").text("0");
			$(".mathprice").text("0");
			$(".dianquanxuan3").prop("checked", $(this).prop("checked"));
			for (var _i = 0; _i < $(".dianquanxuan3").length; _i++) {
				mathprice += Number($(".zongjia").eq(_i).text());
			}
			$(".mathprice").text(mathprice);
			if (!$(".dianquanxuan4").prop("checked")) {
				$(".mathprice").text(0);
			}
			for (var h = 0; h < $(".dianquanxuan3").length; h++) {
				mathgeshu += Number($(".text-amount").eq(h).val());
			}
			$(".dsj").text(mathgeshu);
			if (!$(".dianquanxuan4").prop("checked")) {
				$(".dsj").text("0");
			}
		});
		//单击计算总价
		$(".dianquanxuan3").click(function () {
			var haoduoqian = 0;
			var danzongjia = 0;
			for (var k = 0; k < $(".dianquanxuan3").length; k++) {
				if ($(".dianquanxuan3").eq(k).prop("checked")) {
					haoduoqian += Number($(".text-amount").eq(k).val());
					danzongjia += Number($(".zongjia").eq(k).text());
				}
				$(".dsj").text(haoduoqian);
				$(".mathprice").text(danzongjia);
			}
		});

		//点击删除
		$(".scxz").click(function () {
			if ($(".dianquanxuan4").prop("checked")) {

				for (var m = 0; m < data.length; m++) {
					$.get("http://47.104.244.134:8080/cartupdate.do", { "id": data[m].id, "gid": data[m].gid, "num": "0", "token": token }, function (data) {
						window.location.reload();
					});
				}
			}
			for (var h = 0; h < $(".dianquanxuan3").length; h++) {
				if ($(".dianquanxuan3").eq(h).prop("checked")) {
					$.get("http://47.104.244.134:8080/cartupdate.do", { "id": data[h].id, "gid": data[h].gid, "num": "0", "token": token }, function (data) {
						window.location.reload();
					});
				}
			}
		});
	});
});