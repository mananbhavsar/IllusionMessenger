#!/usr/bin/env node

// this file lives at hooks/after_prepare/010_resource_files.js

//just replace your Project name with Eiosys 
var filestocopy = [
    {
        "resources/android/icon/drawable-hdpi-icon.png":
            "platforms/android/res/mipmap-hdpi/icon.png"
    },
    {
        "resources/android/icon/drawable-ldpi-icon.png":
            "platforms/android/res/mipmap-ldpi/icon.png"
    },
    {
        "resources/android/icon/drawable-mdpi-icon.png":
            "platforms/android/res/mipmap-mdpi/icon.png"
    },
    {
        "resources/android/icon/drawable-xhdpi-icon.png":
            "platforms/android/res/mipmap-xhdpi/icon.png"
    },
    {
        "resources/android/icon/drawable-xxhdpi-icon.png":
            "platforms/android/res/mipmap-xxhdpi/icon.png"
    },
    {
        "resources/android/icon/drawable-xxxhdpi-icon.png":
            "platforms/android/res/mipmap-xxxhdpi/icon.png"
    }, {
        "resources/android/splash/drawable-land-hdpi-screen.png":
            "platforms/android/res/drawable-land-hdpi/screen.png"
    }, {
        "resources/android/splash/drawable-land-ldpi-screen.png":
            "platforms/android/res/drawable-land-ldpi/screen.png"
    }, {
        "resources/android/splash/drawable-land-mdpi-screen.png":
            "platforms/android/res/drawable-land-mdpi/screen.png"
    }, {
        "resources/android/splash/drawable-land-xhdpi-screen.png":
            "platforms/android/res/drawable-land-xhdpi/screen.png"
    }, {
        "resources/android/splash/drawable-land-xxhdpi-screen.png":
            "platforms/android/res/drawable-land-xxhdpi/screen.png"
    }, {
        "resources/android/splash/drawable-land-xxxhdpi-screen.png":
            "platforms/android/res/drawable-land-xxxhdpi/screen.png"
    }, {//ios
        "resources/ios/icon/icon-40.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-20@2x.png"
    }, {
        "resources/ios/icon/icon-60.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-20@3x.png"
    }, {
        "resources/ios/icon/icon-40.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-40.png"
    }, {
        "resources/ios/icon/icon-40@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-40@2x.png"
    }, {
        "resources/ios/icon/icon-50.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-50.png"
    }, {
        "resources/ios/icon/icon-50@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-50@2x.png"
    }, {
        "resources/ios/icon/icon-60@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-60@2x.png"
    }, {
        "resources/ios/icon/icon-60@3x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-60@3x.png"
    }, {
        "resources/ios/icon/icon-72.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-72.png"
    }, {
        "resources/ios/icon/icon-72@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-72@2x.png"
    }, {
        "resources/ios/icon/icon-76.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-76.png"
    }, {
        "resources/ios/icon/icon-76@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-76@2x.png"
    }, {
        "resources/ios/icon/icon-83.5@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-83.5@2x.png"
    }, {
        "resources/ios/icon/icon-1024.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-1024.png"
    }, {//
        "resources/ios/icon/icon-small.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-small.png"
    }, {
        "resources/ios/icon/icon-small@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-small@2x.png"
    }, {
        "resources/ios/icon/icon-small@3x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon-small@3x.png"
    }, {
        "resources/ios/icon/icon.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon.png"
    }, {
        "resources/ios/icon/icon@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/icon@2x.png"
    }, {
        "resources/ios/icon/icon.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/AppIcon29x29@2x.png"
    }, {
        "resources/ios/icon/icon-small@3x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/AppIcon29x29@3x.png"
    }, {
        "resources/ios/icon/icon-40@2x.png":
            "platforms/ios/Eiosys/Images.xcassets/AppIcon.appiconset/AppIcon40x40@2x.png"
    }, {
        "resources/ios/splash/Default-568h@2x~iphone.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-568h@2x~iphone.png"
    }, {
        "resources/ios/splash/Default-667h.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-667h.png"
    }, {
        "resources/ios/splash/Default-736h.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-736h.png"
    }, {
        "resources/ios/splash/Default-Landscape-736h.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-Landscape-736h.png"
    }, {
        "resources/ios/splash/Default-Landscape@2x~ipad.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-Landscape@2x~ipad.png"
    }, {
        "resources/ios/splash/Default-Landscape~ipad.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-Landscape~ipad.png"
    }, {
        "resources/ios/splash/Default-Portrait@2x~ipad.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-Portrait@2x~ipad.png"
    }, {
        "resources/ios/splash/Default-Portrait~ipad.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default-Portrait~ipad.png"
    }, {
        "resources/ios/splash/Default@2x~iphone.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default@2x~iphone.png"
    }, {
        "resources/ios/splash/Default~iphone.png":
            "platforms/ios/Eiosys/Images.xcassets/LaunchImage.launchimage/Default~iphone.png"
    }, {
        "resources/ios/splash/Default@2x~universal~anyany":
            "platforms/ios/Eiosys/Images.xcassets/LaunchStoryboard.imageset/Default@2x~universal~anyany.png"
    }];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function (obj) {
    Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(
                fs.createWriteStream(destfile));
        }
    });
});