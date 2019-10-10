$(function(){
				let token = $.cookie("token");
				console.log(token);
				let name=$.cookie("name");
				console.log(name);
				if(token!==undefined){
					$(".login").text(name);
					$(".login1").text(name);
				}
				var str="";
				let perId = $.cookie("perId");
				var cartlist=$.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
					console.log(data)
					for(let i=0;i<data.length;i++){
						str+=`
						<input class="dianquanxuan3" type="checkbox" name="" id="" value="" />
						<div class="tditem">
							<div>
								<a href=""><img src="http:${data[i].goods.picurl}" alt=""></a>
								<a href=""  style="display: none;"><img src="http:${data[i].goods.picurl}" alt=""></a>
							</div>
							<div><a href="">${data[i].goods.name}</a></div>
						</div>
						<div class="tdspecs">${data[i].goods.name}</div>
						<div class="tdprice">
							<p>￥<span class="aprice">${data[i].goods.price}</span></p>
							<p>大会据</p>
						</div>
						<div class="tdamount">
							<div class="itemamount">
								<a href="javascript:void(0);" class="btn_l">-</a>
								<input type="text" class="text-amount" value="${data[i].count}">
								<a href="javascript:void(0);" class="btn_r">+</a>
							</div>
							<div class="zizi">最多可买20件</div>
						</div>
						<div class="tdsum">￥<span class="zongjia">60.90</span></div>
						<div class="tdop">
							<a href="javascript:void(0);" class="remove">移除关注</a>
							<a href="javascript:void(0);" class="delete">删除</a>
						</div>
						`;
					}
					
					$(".splist2").html(str)
					
					for(let j=0;j<data.length;j++){
						let aprice=$(".aprice").eq(j).text();
						console.log(aprice)
						let atextamount=$(".text-amount").eq(j).val();
						$(".zongjia").eq(j).text(aprice*atextamount);
						//点击减数量
						$(".btn_l").eq(j).click(function(){
							 if( $(".text-amount").eq(j).val()<=1){
							 	$(".text-amount").eq(j).val("1");
							 	return;
							 }
							var num1=$(".text-amount").eq(j).val();
							num1--;
							$(".text-amount").eq(j).val(num1)
	
							 $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[j].id,"gid":data[j].gid,"num":"-1","token":token},
							function(data){
								console.log(data)
							}) 
							// window.location.reload()
							let aprice=$(".aprice").eq(j).text();
							console.log(aprice)
							let atextamount=$(".text-amount").eq(j).val();
							$(".zongjia").eq(j).text(aprice*atextamount)
							
							let haoduoqian=0
							let danzongjia=0
							 for(let k=0;k<$(".dianquanxuan3").length;k++){
							 	if($(".dianquanxuan3").eq(k).prop("checked")){
							 		haoduoqian+=Number($(".text-amount").eq(k).val());
									danzongjia+=Number($(".zongjia").eq(k).text());
							 	}
								$(".dsj").text(haoduoqian)
								$(".mathprice").text(danzongjia)
							 }
						})
						//点击加数量
						$(".btn_r").eq(j).click(function(){
							 var num2=$(".text-amount").eq(j).val();
							 num2++;
							 $(".text-amount").eq(j).val(num2)
							  $.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[j].id,"gid":data[j].gid,"num":"1","token":token},
							 function(data){
							 	console.log(data)
							 }) 
							 let aprice=$(".aprice").eq(j).text();
							 console.log(aprice)
							 let atextamount=$(".text-amount").eq(j).val();
							 $(".zongjia").eq(j).text(aprice*atextamount)
							 
							 let haoduoqian=0
							 let danzongjia=0
							  for(let k=0;k<$(".dianquanxuan3").length;k++){
							  	if($(".dianquanxuan3").eq(k).prop("checked")){
							  		haoduoqian+=Number($(".text-amount").eq(k).val());
							 		danzongjia+=Number($(".zongjia").eq(k).text());
							  	}
							 	$(".dsj").text(haoduoqian)
							 	$(".mathprice").text(danzongjia)
							  }
						})	
						//修改数量
						let textamount=$(".text-amount").eq(j).val();
						$(".text-amount").eq(j).change(function(){
							let textamount1=$(".text-amount").eq(j).val();
							$.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[j].id,"gid":data[j].gid,"num":textamount1-textamount,"token":token},
							function(data){
								console.log(data)
							}) 
							let aprice=$(".aprice").eq(j).text();
							console.log(aprice)
							let atextamount=$(".text-amount").eq(j).val();
							$(".zongjia").eq(j).text(aprice*atextamount);
							
							
							let haoduoqian=0
							let danzongjia=0
							 for(let k=0;k<$(".dianquanxuan3").length;k++){
							 	if($(".dianquanxuan3").eq(k).prop("checked")){
							 		haoduoqian+=Number($(".text-amount").eq(k).val());
									danzongjia+=Number($(".zongjia").eq(k).text());
							 	}
								$(".dsj").text(haoduoqian)
								$(".mathprice").text(danzongjia)
							 }
						})
						//点击删除
						$(".delete").eq(j).click(function(){
							$.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[j].id,"gid":data[j].gid,"num":"0","token":token},
							function(data){
							  window.location.reload()
							}) 
						})
						
					}
					//多选,单选
				            	$(".dianquanxuan1").click(function(){
				            	$(".dianquanxuan3").prop("checked",$(this).prop("checked"));
				            });
				            $(".dianquanxuan3").click(function(){
				            	if($(".dianquanxuan3:checked").length == $(".dianquanxuan3").length){
				            		$(".dianquanxuan1").prop("checked",true);
									$(".dianquanxuan4").prop("checked",true);
				            	}else{
				            		$(".dianquanxuan1").prop("checked",false);
									$(".dianquanxuan4").prop("checked",false);
				            	}
				            });
							
							
							//点击全选
							$(".dianquanxuan4").click(function(){
								var mathprice=0;
								var mathgeshu=0;
								$(".dsj").text("0")
								$(".mathprice").text("0")
								$(".dianquanxuan3").prop("checked",$(this).prop("checked"));
							   for(let i=0;i<$(".dianquanxuan3").length;i++){
								   mathprice+=Number($(".zongjia").eq(i).text());
							   }
							   $(".mathprice").text(mathprice)
							   if(!$(".dianquanxuan4").prop("checked")){
								   $(".mathprice").text(0)
							   }
							   for(let h=0;h<$(".dianquanxuan3").length;h++){
								   mathgeshu+=Number($(".text-amount").eq(h).val());
							   }
							      $(".dsj").text(mathgeshu)
							   if(!$(".dianquanxuan4").prop("checked")){
							      $(".dsj").text("0")
							   }
							});
							//单击计算总价
							$(".dianquanxuan3").click(function(){
								let haoduoqian=0
								let danzongjia=0
								 for(let k=0;k<$(".dianquanxuan3").length;k++){
								 	if($(".dianquanxuan3").eq(k).prop("checked")){
								 		haoduoqian+=Number($(".text-amount").eq(k).val());
										danzongjia+=Number($(".zongjia").eq(k).text());
								 	}
									$(".dsj").text(haoduoqian)
									$(".mathprice").text(danzongjia)
								 }
							})
							
							//点击删除
							$(".scxz").click(function(){
								if($(".dianquanxuan4").prop("checked")){
									
									for(let m=0;m<data.length;m++){
										$.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[m].id,"gid":data[m].gid,"num":"0","token":token},
										function(data){
										  window.location.reload()
										}) 
									}
								}
								for(let h=0;h<$(".dianquanxuan3").length;h++){
									if($(".dianquanxuan3").eq(h).prop("checked")){
										$.get("http://47.104.244.134:8080/cartupdate.do",{"id":data[h].id,"gid":data[h].gid,"num":"0","token":token},
										function(data){
										  window.location.reload()
										}) 
									}
								}
							})
							
							

				})
			})