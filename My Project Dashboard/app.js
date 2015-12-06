'use strict';

(function() {
    var app = {
        data: {}
    };
    //var template = kendo.template($("#template").html()); //create template
    app.dataSource = new kendo.data.DataSource({
      data: [
        { 
         id: 0, 
         name: "Somesh Mukhejee",
         firstName: "Somesh",
         designation: "Project Manager",
         img: "http://photos4.meetupstatic.com/photos/member/a/c/9/6/member_102344182.jpeg", 
         description: "Somesh is Project Manager in IEEE with expertise in executing web and mobile development" 
        },
        { 
         id: 1,
         name: "Sampath Heragu",
         firstName: "Sampath",
         designation: "Project Manager",
         img: "https://lh3.googleusercontent.com/-JLmjJ5h-rBo/AAAAAAAAAAI/AAAAAAAAAFw/D4t6-uHPIhE/s120-c/photo.jpg", 
         description: "Sampath is Senior Project Manager in IEEE and is Scrum Master of many development projects" 
        },
        { 
         id: 2,
         name: "Indu Porwal",
         firstName: "Indu",
         designation: "Senior Developer",
         img: "https://pbs.twimg.com/profile_images/1525290059/Rani__Indu_-_SSO__501957291.JPG", 
         description: "Indu is Senior Web Developer working primarily on Java/J2EE" 
        },
        { 
         id: 3,
         name: "Akash Palewar",
         firstName: "Akash",
         designation: "Senior Developer",
         img: "https://lh3.googleusercontent.com/-jto5voDIeuE/UvZ0bU0-GlI/AAAAAAAAB4Y/pMjbAwbO3Jo/w820-h818-no/photo%25286%2529.JPG", 
         description: "Akash is Senior Web Developer working primarily on Java/J2EE" 
        },
      ]
    });
    var bootstrap = function() {
        $(function() {
            app.mobileApp = new kendo.mobile.Application(document.body, {
                skin: 'flat',
                initial: 'components/home/view.html'
            });
        });
    };

    if (window.cordova) {
        document.addEventListener('deviceready', function() {
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide();
            }

            var element = document.getElementById('appDrawer');
            if (typeof(element) != 'undefined' && element !== null) {
                if (window.navigator.msPointerEnabled) {
                    $('#navigation-container').on('MSPointerDown', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                } else {
                    $('#navigation-container').on('touchstart', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                }
            }

            bootstrap();
        }, false);
    } else {
        bootstrap();
    }

    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $('#navigation-container li a.active').removeClass('active');
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };
}());

// START_CUSTOM_CODE_kendoUiMobileApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_kendoUiMobileApp