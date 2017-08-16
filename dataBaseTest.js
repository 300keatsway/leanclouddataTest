'use strict';
var AV = require('leancloud-storage');
var express = require('express');
// var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'kJLGvMFcKmmsa9aiBmEqI55L-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'p7BjeYxDb883SnPgc1EwRKNI',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'dgdqRT8XxAJireTsayhAcz1N'
});

var app = express();
app.use(AV.express());
app.listen(process.env.LEANCLOUD_APP_PORT);

function newRestaurant(restaurantData) {
    let name = restaurantData.name || '';
    console.log('new Resest function called');
    console.log(restaurantData);
    if (name == '') {
        throw new Error('餐厅必须得有个名字吧，😜');
    }
    let id = restaurantData.id || '';
    let restaurant = new AV.Object('Restaurant');
    restaurant.set('name', name);
    restaurant.set('id', id);
    return restaurant.save();
}

// 调用代码如下:
let restaurantData = {
    'id':'r1',
    'name': '和平饭店'
};



newRestaurant(restaurantData).then(result => {
    console.log('test');
    console.log(result.id);
});


// exports.newRestaurant = 
