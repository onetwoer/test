!function(){function a(){$(".gold-grid li.activate .icon-gold").draggable({}).on("draggable:start",function(a){var b=$(a.target),c=b.closest("li"),d=c.find(".copy");0===d.size()&&(d=b.clone().addClass("copy")),d.appendTo(b.closest("li"))}).on("draggable:stop",function(a,b){var c=$(b.item),d=c.closest("li");d.is("[data-index]")&&d.find(".copy").remove()});var a=$(".task-list li");a.droppable({hoverClass:"active"}).on("droppable:drop",function(a,b){var c=$(a.target).closest("li");if(c.closest(".task-list.finished").size()>0)return!1;c.find(".gold-list").append("<dd></dd>");var d=c.find(".gold-list dd").last(),e=$(b.item),f=b.item.clone(),g=b.item.closest("li");setTimeout(function(){f.removeAttr("style data-draggable").appendTo(d),e.remove(),g.addClass("used")},10)})}function b(){!function(){var b=$(".gold-grid li").addClass("activate"),d=new Date,e=d.getHours(),f=d.getMinutes(),g=2*(e-7);f>30&&g++,b.not(".used").filter(function(){return $(this).index()<g}).addClass("expire").removeClass("activate"),b.filter(function(){return $(this).index()>g}).addClass("nonactivated").removeClass("activate");var h=b.filter(".activate").last().index();h!=c&&(c=h,a())}()}$(".gold-grid li").each(function(a){$(this).attr("data-index",+a)}),$(document).on("tap",".task-list li .checkbox",function(){var a=$(this),b=a.closest("li");a.toggleClass("checked");var c=a.closest(".task-list").is(".finished"),d=$(c?".task-list.unfinished":".task-list.finished");b.animate({opacity:.1},200,function(){b.appendTo(d).css("opacity","1")})});var c=-1;b(),setInterval(b,1e4)}();