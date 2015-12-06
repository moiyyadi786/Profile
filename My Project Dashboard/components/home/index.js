'use strict';

app.home = kendo.observable({
    onShow: function() {
    },
    afterShow: function() {
    app.dataSource.fetch(function(){
    var template = kendo.template("#var i=0; console.log(data.at(i));while(data.at(i)){#<div class='teamMate' data-id='#= data.at(i).id#'>\
                            <img src='#= data.at(i).img#' alt='#= data.at(i).name#' height='50px' width='40px'>\
                            <h2>#= data.at(i).name#</h2>\
                            <p>#= data.at(i).designation#</p>\
                        </div># i++;}#");
    var html = template({"data":app.dataSource});
    $("#user-list").html(html);
    $("#panelbar").kendoPanelBar({
        expandMode: "single"
    });
    $("#panelbar .teamMate").kendoTouch({
        tap: function (e) 
        { 
            var id = parseInt(e.touch.currentTarget.attributes["data-id"].value, 10);
			var template = kendo.template('<div class="about-view" data-bind="invisible:error">\
            <div class="icon-group">\
                <div class="app-details">\
					<img src="#= data.img#" alt="#= data.name#" height="70px" width="70px">\
                    <h2>#= data.name#</h2>\
                    <h4>#= data.designation#</h4>\
                </div>\
            </div>\
            <p>#= data.description#</p>\
            <div class="button-group button-group-vertical">\
                <a data-role="button" class="km-widget km-button"><img src="http://icons.iconarchive.com/icons/zerode/plump/48/Mail-icon.png"/>Contact #= data.firstName#</a>\
                <a data-role="button" class="km-widget km-button"><img src="https://cdn0.iconfinder.com/data/icons/yooicons_set01_socialbookmarks/512/social_facebook_box_blue.png"/>Join  #= data.firstName# on Facebook</a>\
                <a data-role="button" class="km-widget km-button"><img src="https://cdn1.iconfinder.com/data/icons/new_twitter_icon/491/bird_twitter_new_single.png"//>Follow  #= data.firstName# on Twitter</a>\
				<a href="\\#homeView" class="km-widget km-button">Back to List</a>\
                </div></div>');
      	var html = template({"data":app.dataSource.at(id)});
    	$("#aboutView").html(html);                       
        app.mobileApp.navigate("#aboutView");
        } 
      });
   });
   }
});
// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home