/**
 * @author rmersich
 */

$(document).ready(function() {
	windowW = $(window).width();
	windowH = $(window).height();
	
		$("#ur").width(windowW/2);		
		$("#ul").width(windowW/2);
		$("#ll").width(windowW/2);		
		$("#lr").width(windowW/2);
		
		$("#ul").height(windowH/2);
		$("#ur").height(windowH/2);				
		$("#ll").height(windowH/2);
		$("#lr").height(windowH/2);
		
		$("#ur").css("left",(windowW/2)+"px");
		$("#lr").css("left",(windowW/2)+"px");
		
		$("#ll").css("top",(windowH/2)+"px");
		$("#lr").css("top",(windowH/2)+"px");
		
		centerW = windowW*0.08;
		centerH = windowH*0.08;
		centerPosX = windowW/2;
		centerPosY = windowH/2;
		
		$("#center_scroll").width(parseInt(centerW));
		$("#center_scroll").height(parseInt(centerH));
		$("#center_scroll").css({
			"left":(centerPosX-centerW/2)+"px",
			"top":(centerPosY-centerH/2)+"px"
		});
		$("#center_scroll").draggable({
		axis:"x",
		containment: "body",
		scroll:false,
		drag:function(){
			
			draggedDivPosX = parseInt($("#center_scroll").css("left"));
			draggedDivCenterX = draggedDivPosX+centerW/2;
			
			leftW = draggedDivCenterX;
			rightW = windowW-draggedDivCenterX;
			
			$("#ur").css("left",draggedDivCenterX+"px");
			$("#lr").css("left",draggedDivCenterX+"px");
			
			$("#ur").width(rightW);		
			$("#ul").width(leftW);
			$("#ll").width(leftW);		
			$("#lr").width(rightW);
		}
		});
});


