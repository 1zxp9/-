// $(function() {
// 	
//      function magnify() {
//          var small = $('.small');
//          var smallpic = $('.small .smallpic');
//          var smallmove = $('.small .smallmove');
//          var big = $('.scale .big');
//          var bigpic = $('.big .bigpic');
//          var tab = $('.tab li:not(.btn)');
//          small.on('mouseover', function() {
//              smallmove.removeClass('hide').addClass('show');
//              big.removeClass('hide').addClass('show');
//              smallmove.css({
//                  "width": small.width() * big.width() / bigpic.width(),
//                  "height": small.height() * big.height() / bigpic.height()
//              });
//          });
//          small.on('mousemove', function(ev) {
//              ev = ev || event;
//              var sLeft = ev.pageX - small.offset().left - smallmove.width() / 2 - 1;
//              var sTop = ev.pageY - small.offset().top - smallmove.height() / 2 - 1;
//              if (sLeft <= 0) {
//                  sLeft = 0;
//              } else if (sLeft >= small.width() - 2 - smallmove.width()) {
//                  sLeft = small.width() - 2 - smallmove.width();
//              }
//              if (sTop <= 0) {
//                  sTop = 0;
//              } else if (sTop >= small.height() - 2 - smallmove.height()) {
//                  sTop = small.height() - 2 - smallmove.height();
//              }
//              smallmove.css({
//                  left: sLeft,
//                  top: sTop
//              });
//              var ratio = bigpic.width() / big.width();
//              bigpic.css({
//                  left: (-1) * sLeft * ratio,
//                  top: (-1) * sTop * ratio
//              });
//          }).on('mouseout', function() {
//              smallmove.addClass('hide').removeClass('show');
//              big.addClass('hide').removeClass('show');
//          });
//          tab.on('mouseenter', function() {
//              var newsrc = $(this).children().attr('src');
//              small.children('img').attr('src', newsrc);
//              big.children('img').attr('src', newsrc);
//          })
//      }
//      magnify();
//  })
//  
//  
//  
//  
//  
//  
//  	//  var str="";
//  	//  var strr="";
//  	//  let token = $.cookie("token");
//  	//  let perId = $.cookie("perId");
//  	//  let val=$.cookie("num");
//  	//  $("#ainput").val("val");
//  	//  console.log($.cookie("num"));
//  	//  if(perId!==undefined){
//  	//  	$.get("http://47.104.244.134:8080/goodsbyid.do",{"id":perId},function(data){
//  	//  		console.log(data)
//  	// 		str+=`
//  	// 		   <div class="name">${data.name}</div>
//  	// 		   <div class="price">
//  	// 		   	<span>价格:</span>
//  	// 		   	<p>￥<em>${data.price}</em></p>
//  	// 		   </div>
//  	// 		`;
//  	// 		strr+=`
//  	// 		   <div class="small">
//  	// 		   	<img class="smallpic" src="http:${data.picurl}">
//  	// 		   	<div class="smallmove"></div>
//  	// 		   </div>
//  	// 		   <ul class="tab">
//  	// 		   	<li>
//  	// 		   		<img alt="" src="http:${data.picurl}">
//  	// 		   	</li>
//  	// 		   	<li>
//  	// 		   		<img alt="" src="http:${data.picurl}">
//  	// 		   	</li>
//  	// 		   	<li>
//  	// 		   		<img alt="" src="http:${data.picurl}">
//  	// 		   	</li>
//  	// 		   </ul>
//  	// 		   <div class="big">
//  	// 		   	<img class="bigpic" src="http:${data.picurl}">
//  	// 		   </div>
//  	// 		`;
//  	// 		$(".xiangq").html(str);
//  	// 		$(".scale").html(strr);
//  	// 		$("#ainput").val("1");
//  	// 		var id=data.id;
//  	// 		 $.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
//  	// 			 console.log(data)
//  	// 			 console.log(id)
//  	// 			 for(let i=0;i<data.length;i++){
//  	// 				 if(id==data[i].gid){
//  	// 					 
//  	// 					 
//  	// 					 $("#leftbtn").click(function(){
//  	// 					 				 if( $("#ainput").val()<=1){
//  	// 					 				 	$("#ainput").val("1");
//  	// 					 				 	return;
//  	// 					 				 }
//  	// 					 				var num1=$("#ainput").val();
//  	// 					 				num1--;
//  	// 					 				$("#ainput").val(num1)
//  	// 					 				  $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[i].id,"gid":data[i].gid,"num":"-1","token":token},
//  	// 					 				 function(data){
//  	// 					 				 	console.log(data)
//  	// 					 				 }) 
//  	// 					 })
//  	// 					 $("#rightbtn").click(function(){
//  	// 					 				 var num2=$("#ainput").val();
//  	// 					 				 num2++;
//  	// 					 				 $("#ainput").val(num2)
//  	// 					 				   $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[i].id,"gid":data[i].gid,"num":"1","token":token},
//  	// 					 				  function(data){
//  	// 					 				  	console.log(data)
//  	// 					 				  }) 
//  	// 					 })	 
//  	// 					 
//  	// 					 
//  	// 					 let textamount=$("#ainput").val();
//  	// 					 $("#ainput").change(function(){
//  	// 						 let textamount1=$("#ainput").val();
//  	// 						 $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[i].id,"gid":data[i].gid,"num":textamount1-textamount,"token":token},
//  	// 						 	function(data){
//  	// 						        console.log("dsada")
//  	// 						 }) 
//  	// 					 })
//  	// 				 }
//  	// 			 }
//  	// 		 })
//  	//  	})
//  	// 	 
//  	//  }
//  	// 
//  	//  //添加购物车
//  	//  $("#jiaru").click(function(){
//  	// 	 $.get("http://47.104.244.134:8080/cartsave.do",{"gid":perId,"token":$.cookie("token")},function(data){
//  	// 	 	if(data.msg=="成功"){
//  	// 	        alert("添加购物车成功")
//  	// 	        location.href="cart.html"
//  	// 	 	}
//  	// 	 })
//  	// 	 
//  	//  })
//  	//  
//  	 
//  
//  })


$(function(){
			 var str="";
			 var strr="";
			 let token = $.cookie("token");
			 let perId = $.cookie("perId");
			 let val=$.cookie("num");
			 $("#ainput").val("val");
			 console.log($.cookie("num"));
			 if(perId!==undefined){
			 	$.get("http://47.104.244.134:8080/goodsbyid.do",{"id":perId},function(data){
			 		console.log(data)
					str+=`
					   <div class="name">${data.name}</div>
					   <div class="price">
					   	<span>价格:</span>
					   	<p>￥<em>${data.price}</em></p>
					   </div>
					`;
					strr+=`
					   <div class="small">
					   	<img class="smallpic" src="http:${data.picurl}">
					   	<div class="smallmove"></div>
					   </div>
					   <ul class="tab">
					   	<li>
					   		<img alt="" src="http:${data.picurl}">
					   	</li>
					   	<li>
					   		<img alt="" src="http:${data.picurl}">
					   	</li>
					   	<li>
					   		<img alt="" src="http:${data.picurl}">
					   	</li>
					   </ul>
					   <div class="big">
					   	<img class="bigpic" src="http:${data.picurl}">
					   </div>
					`;
					$(".xiangq").html(str);
					$(".scale").html(strr);
					
					
					function magnify() {
					    var small = $('.small');
					    var smallpic = $('.small .smallpic');
					    var smallmove = $('.small .smallmove');
					    var big = $('.scale .big');
					    var bigpic = $('.big .bigpic');
					    var tab = $('.tab li:not(.btn)');
					    small.on('mouseover', function() {
					        smallmove.removeClass('hide').addClass('show');
					        big.removeClass('hide').addClass('show');
					        smallmove.css({
					            "width": small.width() * big.width() / bigpic.width(),
					            "height": small.height() * big.height() / bigpic.height()
					        });
					    });
					    small.on('mousemove', function(ev) {
					        ev = ev || event;
					        var sLeft = ev.pageX - small.offset().left - smallmove.width() / 2 - 1;
					        var sTop = ev.pageY - small.offset().top - smallmove.height() / 2 - 1;
					        if (sLeft <= 0) {
					            sLeft = 0;
					        } else if (sLeft >= small.width() - 2 - smallmove.width()) {
					            sLeft = small.width() - 2 - smallmove.width();
					        }
					        if (sTop <= 0) {
					            sTop = 0;
					        } else if (sTop >= small.height() - 2 - smallmove.height()) {
					            sTop = small.height() - 2 - smallmove.height();
					        }
					        smallmove.css({
					            left: sLeft,
					            top: sTop
					        });
					        var ratio = bigpic.width() / big.width();
					        bigpic.css({
					            left: (-1) * sLeft * ratio,
					            top: (-1) * sTop * ratio
					        });
					    }).on('mouseout', function() {
					        smallmove.addClass('hide').removeClass('show');
					        big.addClass('hide').removeClass('show');
					    });
					    tab.on('mouseenter', function() {
					        var newsrc = $(this).children().attr('src');
					        small.children('img').attr('src', newsrc);
					        big.children('img').attr('src', newsrc);
					    })
					}
					magnify();
					
					
					
					
					
					
					
					
					
					
					
					
					$("#ainput").val("1");
					var id=data.id;
					 $.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
						 console.log(data)
						 console.log(id)
						 for(let i=0;i<data.length;i++){
							 if(id==data[i].gid){
								 
								 
								 $("#leftbtn").click(function(){
								 				 if( $("#ainput").val()<=1){
								 				 	$("#ainput").val("1");
								 				 	return;
								 				 }
								 				var num1=$("#ainput").val();
								 				num1--;
								 				$("#ainput").val(num1)
								 				  $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[i].id,"gid":data[i].gid,"num":"-1","token":token},
								 				 function(data){
								 				 	console.log(data)
								 				 }) 
								 })
								 $("#rightbtn").click(function(){
								 				 var num2=$("#ainput").val();
								 				 num2++;
								 				 $("#ainput").val(num2)
								 				   $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[i].id,"gid":data[i].gid,"num":"1","token":token},
								 				  function(data){
								 				  	console.log(data)
								 				  }) 
								 })	 
								 
								 
								 let textamount=$("#ainput").val();
								 $("#ainput").change(function(){
									 let textamount1=$("#ainput").val();
									 $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[i].id,"gid":data[i].gid,"num":textamount1-textamount,"token":token},
									 	function(data){
									        console.log("dsada")
									 }) 
								 })
							 }
						 }
					 })
			 	})
				 
			 }
	
			 //添加购物车
			 $("#jiaru").click(function(){
				 $.get("http://47.104.244.134:8080/cartsave.do",{"gid":perId,"token":$.cookie("token")},function(data){
				 	if(data.msg=="成功"){
				        alert("添加购物车成功")
				        location.href="cart.html"
				 	}
				 })
				 
			 })
			 
			 
		
		})