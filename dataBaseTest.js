'use strict';
var AV = require('leancloud-storage');

exports.newRestaurant = function newRestaurant(restaurantData) {
    let name = restaurantData.name || '';
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
    id:'r1'
    name: '和平饭店',
};

newRestaurant(restaurantData).then(result => {
    console.log(result.id);
});
