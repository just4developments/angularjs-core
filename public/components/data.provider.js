app
    .factory('Product', ['$http', '$rootScope', '$config', '$q', function ($http, $rootScope, $config, $q) {
        return {
            find: (categoryId, type, recordsPerPage) => {                
                return $http.get(`${$config.apiUrl}/product?categoryId=${categoryId||''}&type=${type}&recordsPerPage=${recordsPerPage||''}`);
            },
            delete: (id) => {
                return $http.delete(`${$config.apiUrl}/product/${id}`);
            },
            sell: (trans) => {
                return $http.post(`${$config.apiUrl}/product/sell`, trans);
            },
            update: (item) => {
                return $http.put(`${$config.apiUrl}/product/${item._id}`, item);
            }
        };
    }])
    .factory('Category', ['$http', '$rootScope', '$config', '$q', function ($http, $rootScope, $config, $q) {
        return {
            find: () => {
                return $http.get(`${$config.apiUrl}/category`);
            }
        };
    }]).factory('Transaction', ['$http', '$rootScope', '$config', '$q', function ($http, $rootScope, $config, $q) {
        return {
            find: (filter) => {
                return $http.get(`${$config.apiUrl}/transaction`, {params: filter});
            },
            update: (item) => {
                return $http.put(`${$config.apiUrl}/transaction/${item._id}`, item);
            },
            suggestBuyer: (name) => {
                return $http.get(`${$config.apiUrl}/transaction/buyer?name=${name}`);
            }
        };
    }]).factory('FacebookLoader', ['$window', function($window){
        return {
            load: (el) => {
                if($window.isFbLoaded) {
                    $window.FB.XFBML.parse(el);                    
                }  
            }
        }
    }]);

// app.utils = {
//     getDistance: (lon1, lat1, lon2, lat2) => {
//         // Used in new version
//         var R = 6371; // Radius of the earth in km
//         var toRad = function (vl) {
//             return vl * Math.PI / 180;
//         };
//         var dLat = toRad(lat2 - lat1); // Javascript functions in radians
//         var dLon = toRad(lon2 - lon1);
//         var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         var d = R * c; // Distance in km
//         return d;
//     }
// };

// app
//     .factory('$localStorage', ['$window', function ($window) {
//         return {
//             set: (key, item) => {
//                 $window.localStorage.setItem(key, JSON.stringify(item));
//             },
//             get: (key) => {
//                 var vl = $window.localStorage.getItem(key);
//                 if (vl === undefined) return vl;
//                 return JSON.parse(vl);
//             },
//             clear: () => {
//                 $window.localStorage.clear();
//             },
//             remove: (key) => {
//                 $window.localStorage.removeItem(key);
//             }
//         }
//     }])
//     .factory('Geolocation', ['$q', '$window', '$http', '$config', function ($q, $window, $http, $config) {
//         // Used in new version
//         var getPositionFromServer = (deferred, err) => {
//             $http.get(`${$config.apiUrl}/whatseat/location`).then(res => {
//                 deferred.resolve(res.data);
//             }, err => {
//                 deferred.reject(err);
//             });
//         };

//         function getCurrentPosition() {
//             var deferred = $q.defer();
//             try {
//                 if (!$window.navigator.geolocation) {
//                     throw ('Geolocation not supported.');
//                 } else {
//                     $window.navigator.geolocation.getCurrentPosition(
//                         function (position) {
//                             deferred.resolve({
//                                 lat: position.coords.latitude,
//                                 lng: position.coords.longitude
//                             });
//                         },
//                         function (err) {
//                             getPositionFromServer(deferred, err);
//                         });
//                 }
//             } catch (e) {
//                 getPositionFromServer(deferred, e);
//             }
//             return deferred.promise;
//         }
//         return {
//             getCurrentPosition: getCurrentPosition
//         };
//     }])

// .factory('User', ['$http', '$localStorage', '$q', '$config', '$rootScope', function ($http, $localStorage, $q, $config, $rootScope) {
//     return {
//         uploadUrl: `${$config.apiUrl}/whatseat/account/upload`,
//         login: (user, fcDone, fcError) => {
//             if (user.social === undefined) {
//                 $http.post(`${$config.apiUrl}/whatseat/login`, user, {
//                     headers: {
//                         app: $config.appID
//                     }
//                 }).then(res => {
//                     var user = res.data;
//                     user.provider = 'app';
//                     user.access_token = res.headers('access_token');
//                     $localStorage.set('me', user);
//                     $rootScope.user = user;
//                     $http.defaults.headers.common["access_token"] = user.access_token;
//                     fcDone();
//                 }, fcError);
//             } else if (user.social === 0) {
//                 // login facebook
//                 let avatar = `http://graph.facebook.com/${user.fbid}/picture`;
//                 $http.post(`${$config.apiUrl}/whatseat/login`, user, {
//                     headers: {
//                         app: $config.appID
//                     }
//                 }).then(res => {
//                     var user = res.data;
//                     user.infor.avatar = avatar;
//                     user.provider = 'facebook';
//                     user.access_token = res.headers('access_token');
//                     $localStorage.set('me', user);
//                     $rootScope.user = user;
//                     $http.defaults.headers.common["access_token"] = user.access_token;
//                     fcDone();
//                 }, fcError);
//             } else if (user.social === 2) {
//                 // login google
//                 let avatar = `http://graph.facebook.com/${user.uid}/picture?type=square`;
//                 $http.post(`${$config.apiUrl}/whatseat/login`, user, {
//                     headers: {
//                         app: $config.appID
//                     }
//                 }).then(res => {
//                     var user = res.data;
//                     user.infor.avatar = avatar;
//                     user.provider = 'google';
//                     user.access_token = res.headers('access_token');
//                     $localStorage.set('me', user);
//                     $rootScope.user = user;
//                     $http.defaults.headers.common["access_token"] = user.access_token;
//                     fcDone();
//                 }, fcError);
//             } else {
//                 fcError('login error');
//             }
//         },
//         logout: (isRemoveAll, fcDone) => {
//             // if(!isRemoveAll) socialLoginService.logout(fcDone);
//             $localStorage.remove('me');
//             // delete $http.defaults.headers.common["access_token"];
//             fcDone();
//         },
//         changePassword: (pass) => {
//             return $http.put(`${$config.apiUrl}/whatseat/changePassword`, pass);
//         },
//         update: (user) => {
//             return $http.put(`${$config.apiUrl}/whatseat/me`, user);
//         },
//         create: (user) => {
//             user.device = {
//                 "model": "Web",
//                 "platform": "Desktop",
//                 "build_code": "",
//                 "build_number": "",
//                 "brand": "",
//                 "device_id": ""
//             };
//             return $http.post(`${$config.apiUrl}/whatseat/signup`, user, {
//                 headers: {
//                     app: $config.appID
//                 }
//             });
//         },
//         me: () => {
//             return $rootScope.user;
//         }
//     };
// }])

// .factory('Cuisine', ['$http', '$rootScope', '$config', '$q', function ($http, $rootScope, $config, $q) {

//     return {
//         findById: (id) => {
//             var cuisine = null;
//             $rootScope.cuisines.forEach(item => {
//                 if (item.id == id)
//                     cuisine = item;
//             });
//             return cuisine;
//         },
//         search: (name) => {
//             var deferred = $q.defer();
//             var rs = [];
//             name = name.toLowerCase();
//             for (var item of $rootScope.cuisines) {
//                 if (item.name.toLowerCase().indexOf(name) != -1 || item.des.toLowerCase().indexOf(name) != -1)
//                     rs.push(item);
//             }
//             setTimeout(() => {
//                 deferred.resolve({
//                     data: rs
//                 });
//             }, 500);
//             return deferred.promise;
//         },
//         find: () => {
//             // Used in new version
//             return $http.get(`${$config.apiUrl}/whatseat/cuisine`);
//         },
//         load: () => {
//             $http.get(`${$config.apiUrl}/whatseat/cuisine`).then((res) => {
//                 $rootScope.cuisines = res.data;
//             });
//         }
//     };
// }])

// .factory('Order', ['$http', '$localStorage', '$q', '$config', function ($http, $localStorage, $q, $config) {

//     return {
//         getMyOrders: () => {
//             return $http.get(`${$config.apiUrl}/whatseat/my-orders`, {
//                 headers: {
//                     app: $config.appID
//                 }
//             });
//         },
//         getOrder: (id) => {
//             return $http.get(`${$config.apiUrl}/whatseat/orders/${id}`);
//         },
//         preOrder: (orders) => {
//             return $http.post(`${$config.apiUrl}/whatseat/orders/preOrder`, orders);
//         },
//         postOrder: (order) => {
//             return $http.post(`${$config.apiUrl}/whatseat/orders`, order);
//         }
//     };
// }])

// .factory('Review', ['$http', '$localStorage', '$q', '$config', 'User', function ($http, $localStorage, $q, $config, User) {
//         return {
//             getReview: (itemid) => {
//                 return $http.get(`${$config.apiUrl}/whatseat/review?accountid=${User.me().id}&itemid=${itemid}`);
//             },
//             addReview: (item) => {
//                 return $http.post(`${$config.apiUrl}/whatseat/review`, item);
//             },
//             updateReview: (item) => {
//                 return $http.put(`${$config.apiUrl}/whatseat/review/${item.id}`, item);
//             }
//         };
//     }])
//     .factory('State', ['$http', '$localStorage', '$q', '$config', 'User', 'Review', function ($http, $localStorage, $q, $config, User, Review) {
//         return {
//             get: () => {
//                 // Used in new version
//                 return $http.get(`${$config.apiUrl}/whatseat/state`);
//             }
//         };
//     }])
//     .factory('Place', ['$http', '$localStorage', '$q', '$config', 'User', 'Review', function ($http, $localStorage, $q, $config, User, Review) {
//         return {
//             uploadUrl: `${$config.apiUrl}/whatseat/place/upload`,
//             maxUpload: 12, // max uploading file    
//             getNearest: (location) => {
//                 // Used in new version
//                 return $http.get(`${$config.apiUrl}/whatseat/place-nearest?location=${location.lat},${location.lng}&start=0&rows=50`).then((res) => {
//                     for (var i in res.data) {
//                         if (location)
//                             res.data[i].distance = app.utils.getDistance(location.lng, location.lat, res.data[i].location.lng, res.data[i].location.lat).toFixed(2);
//                         else
//                             res.data[i].distance = 'N/A';
//                     }
//                     return res;
//                 });
//             },
//             search: (obj, currentLocation) => {
//                 // Used in new version
//                 var filter = [];
//                 if (obj.name) filter.push(`name=${obj.name}`);
//                 if (obj.address) filter.push(`address=${obj.address}`);
//                 if (obj.state) filter.push(`state=${obj.state}`);
//                 if (obj.cuisine) filter.push(`cuisine=${obj.cuisine}`);
//                 return $http.get(`${$config.apiUrl}/whatseat/place?start=0&rows=50&sort=location${(filter.length > 0 ? '&' : '') + filter.join('&')}`).then((res) => {
//                     for (var i in res.data) {
//                         if (currentLocation) {
//                             res.data[i].distance = {
//                                 value: app.utils.getDistance(currentLocation.lng, currentLocation.lat, res.data[i].location.lng, res.data[i].location.lat).toFixed(2),
//                                 unit: 'km'
//                             };
//                             if (res.data[i].distance.value < 1) {
//                                 res.data[i].distance.value *= 1000;
//                                 res.data[i].distance.unit = 'm';
//                             }
//                         } else {
//                             res.data[i].distance = 'N/A';
//                         }
//                     }
//                     return res;
//                 });
//             },
//             get: (id, cuisine, location, distance, sort) => {
//                 if (!id) {
//                     if (typeof cuisine == 'undefined' || null == cuisine)
//                         cuisine = '';
//                     if (typeof location == 'undefined' || null == location)
//                         location = {
//                             lat: '',
//                             lng: ''
//                         };
//                     if (typeof distance == 'undefined' || null == distance)
//                         distance = '';
//                     if (typeof sort == 'undefined' || null == sort)
//                         sort = '';
//                     return $http.get(`${$config.apiUrl}/whatseat/place?cuisine=${cuisine}&d=${distance}&location=${location.lat},${location.lng}&start=0&rows=50&sort=${sort}`).then((res) => {
//                         if (location.lat === '') {
//                             location = $localStorage.get("geolocation");
//                         }
//                         for (var i in res.data) {
//                             if (location)
//                                 res.data[i].distance = res.data[i].location ? app.utils.getDistance(location.lng, location.lat, res.data[i].location.lng, res.data[i].location.lat).toFixed(2) : 'N/A';
//                             else
//                                 res.data[i].distance = 'N/A';
//                         }
//                         return res;
//                     });
//                 }
//                 return $http.get(`${$config.apiUrl}/whatseat/place/${id}`).then(res => {
//                     if (!res.data)
//                         return res;
//                     if (location) {
//                         res.data.distance = res.data.location ? app.utils.getDistance(location.lng, location.lat, res.data.location.lng, res.data.location.lat).toFixed(2) : 'N/A';
//                     } else if ($localStorage.get("geolocation")) {
//                         location = $localStorage.get("geolocation");
//                         res.data.distance = res.data.location ? app.utils.getDistance(location.lng, location.lat, res.data.location.lng, res.data.location.lat).toFixed(2) : 'N/A';
//                     } else {
//                         res.data.distance = 'N/A';
//                     }
//                     return res;
//                 });
//             },
//             update: (place) => {
//                 return $http.put(`${$config.apiUrl}/whatseat/place`, place);
//             },
//             add: (place) => {
//                 return $http.post(`${$config.apiUrl}/whatseat/place`, place);
//             },
//             addFav: (placeid) => {
//                 return $http.post(`${$config.apiUrl}/whatseat/favorite`, {
//                     "itemid": placeid,
//                     "type": 0
//                 });
//             },
//             getFav: (id) => {
//                 if (!id) return $http.get(`${$config.apiUrl}/whatseat/favorite?type=0`);
//                 return $http.get(`${$config.apiUrl}/whatseat/favorite/${id}`);
//             },
//             removeFav: (id) => {
//                 return $http.delete(`${$config.apiUrl}/whatseat/favorite/${id}`);
//             }
//         };
//     }])

// .factory('Category', ['$http', '$localStorage', '$q', '$config', 'User', function ($http, $localStorage, $q, $config, User) {
//     return {
//         uploadUrl: `${$config.apiUrl}/whatseat/category/upload`,
//         gets: (placeid) => {
//             return $http.get(`${$config.apiUrl}/whatseat/category?placeid=${placeid}`);
//         },
//         add: (category) => {
//             return $http.post(`${$config.apiUrl}/whatseat/category`, category);
//         },
//         remove: (id) => {
//             return $http.delete(`${$config.apiUrl}/whatseat/category/${id}`);
//         }
//     };
// }])

// .factory('Meal', ['$http', '$localStorage', '$q', '$config', 'User', function ($http, $localStorage, $q, $config, User) {
//         return {
//             uploadUrl: `${$config.apiUrl}/whatseat/meal/upload`,
//             getMealByCategory: (categoryId) => {
//                 return $http.get(`${$config.apiUrl}/whatseat/meal?categoryid=${categoryId}`);
//             },
//             getSpecialItems: (placeid) => {
//                 return $http.get(`${$config.apiUrl}/whatseat/meal?placeid=${placeid}&special=1`);
//             },
//             addMeal: (meal) => {
//                 return $http.post(`${$config.apiUrl}/whatseat/meal`, meal);
//             },
//             get: (id) => {
//                 return $http.get(`${$config.apiUrl}/whatseat/meal/${id}`);
//             },
//             gets: (start) => {
//                 if (typeof (start) == 'undefined' || start == null)
//                     start = 0;
//                 return $http.get(`${$config.apiUrl}/whatseat/meal?start=${start}&rows=5`);
//             },
//             search: (name) => {
//                 return $http.get(`${$config.apiUrl}/whatseat/meal?name=${name}`);
//             },
//             addFav: (mealid) => {
//                 return $http.post(`${$config.apiUrl}/whatseat/favorite`, {
//                     "itemid": mealid,
//                     "type": 1
//                 });
//             },
//             getFav: (id) => {
//                 if (!id) return $http.get(`${$config.apiUrl}/whatseat/favorite?type=1`);
//                 return $http.get(`${$config.apiUrl}/whatseat/favorite/${id}`);
//             },
//             removeFav: (id) => {
//                 return $http.delete(`${$config.apiUrl}/whatseat/favorite/${id}`);
//             }
//         };
//     }])
//     // Build classes handle api at here

// ;