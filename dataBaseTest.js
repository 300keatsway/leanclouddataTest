'use strict';
// var AV = require('leancloud-storage');
var express = require('express');
var AV = require('leanengine');

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

function querySeats(restaurant) {
  console.log('query funciton called');
    if (typeof restaurant == 'string') {
        restaurant = AV.Object.createWithoutData('Restaurant', restaurant);
    } else if (typeof restaurant != 'AV.Object') {
        throw new Error('仅支持传入 string 和 AV.Object');
    }
    let query = new AV.Query('Seat');
    query.equalTo('under',restaurant);
    return query.find();
}

// 调用代码如下:
let restaurantData1 = {
    id:'r1',
    name: '和平饭店'
};

let restaurantData2 = {
    id:'r2',
    name: '北京饭店'
};

let restaurantData3 = {
    id:'r3',
    name: '希尔顿大酒店'
};

newRestaurant(restaurantData1).then(result => {
//     console.log('test');
    console.log(result.name)
    console.log(result.id);
});

newRestaurant(restaurantData2).then(result => {
//     console.log('test');
    console.log(result.name)
    console.log(result.id);
});

newRestaurant(restaurantData3).then(result => {
//     console.log('test');
    console.log(result.name)
    console.log(result.id);
  querySeats(result.id).then(resfind => {
    // result 为和平饭店里面的座位
    console.log('queryexample');
    console.log(resfind);
});
});







// let restaurant = '5994668fa22b9d00572762cf';
// querySeats(restaurant).then(result => {
//     // result 为和平饭店里面的座位
//     console.log('queryexample');
//     console.log(result);
// });
// exports.newRestaurant = 
