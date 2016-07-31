;(function($){
    $.fn.toolTip=function(option){
        /**
         * 错误提示信息框
         * @type {string}
         */
        var w=$(window);
        var defaults={
            css:{left:0,width:"auto"},
            msg:"错误提示",
            delay:3500,
            arrow:true
        };
        typeof option=="object"&&$.extend(defaults,option);
        $(".toolTip_error_msg").size()==0&&$("body").append('<div class="toolTip_error_msg"><p>错误提示</p></div>');
        var tip=$(".toolTip_error_msg");
        defaults.arrow?tip.find(".arrow").removeClass("hide"):tip.find(".arrow").addClass("hide");
        tip.css({"top":w.scrollTop()+w.height()*0.8+"px","visibility":"hidden","max-width":"80%"}).find("p").html(defaults.msg);
        tip.css(defaults.css).show();
        tip.css({"visibility":"visible","left":(w.width()-tip[0].offsetWidth)/2});
        setTimeout(function(){
            tip.hide();
        },defaults.delay);
    };
})($);
