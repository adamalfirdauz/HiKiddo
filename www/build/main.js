webpackJsonp([8],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CariPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CariPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CariPage = (function () {
    function CariPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    CariPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    CariPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    CariPage.prototype.function = function (success) {
        console.log(success);
    };
    CariPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    CariPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    return CariPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], CariPage.prototype, "mapElement", void 0);
CariPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cari',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\cari\cari.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title><img class="title" src="../assets/Hikiddo.png"></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="SignIn()"> <ion-icon class="notif"></ion-icon>\n\n       <ion-badge color="danger" item-end>10</ion-badge>\n\n      </button>\n\n      <ion-navbar>\n\n      \n\n       </ion-navbar>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n \n\n<ion-content>\n\n  <div #map id="map"></div> \n\n\n\n  <button ion-button block class="tandain" (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\cari\cari.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], CariPage);

//# sourceMappingURL=cari.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AnakPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AnakPage = (function () {
    function AnakPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnakPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnakPage');
    };
    return AnakPage;
}());
AnakPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-anak',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\anak\anak.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title><img class="title" src="../assets/Hikiddo.png"></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="SignIn()"> <ion-icon class="notif"></ion-icon>\n\n       <ion-badge color="danger" item-end>10</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\anak\anak.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AnakPage);

//# sourceMappingURL=anak.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilPage = (function () {
    function ProfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    return ProfilPage;
}());
ProfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profil',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\profil\profil.html"*/'\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title><img class="title" src="../assets/Hikiddo.png"></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="SignIn()"> <ion-icon class="notif"></ion-icon>\n\n       <ion-badge color="danger" item-end>10</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n      <div id="profile-bg"></div>\n\n      <div id="content">\n\n        <div id="profile-info">\n\n          <img id="profile-image" src="assets/babyblue.png">\n\n        </div>\n\n   	</div>\n\n   	\n\n\n\n\n\n\n\n\n\n\n\n\n\n	<ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title text-center>\n\n      <ion-item>\n\n        <ion-label stacked>Nama Lengkap</ion-label>\n\n        <ion-input type="text" [(ngModel)]="nama" name="nama" value="{{nama}}"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Alamat</ion-label>\n\n        <ion-input type="text" [(ngModel)]="alamat" name="alamat" value="{{alamat}}"></ion-input>\n\n      </ion-item>\n\n\n\n  		<ion-item>\n\n		    <ion-label stacked>No. Hp</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="hp" name="hp" value="{{hp}}"></ion-input>\n\n  		</ion-item>\n\n\n\n  		<ion-item>\n\n		    <ion-label stacked>Email</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="hp" name="email" value="{{email}}"></ion-input>\n\n  		</ion-item>\n\n\n\n   		<ion-item>\n\n		    <ion-label stacked>Email</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="hp" name="email" value="{{email}}"></ion-input>\n\n  		</ion-item>\n\n\n\n   		<ion-item>\n\n		    <ion-label stacked>Kota/Kabupaten</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="hp" name="kota" value="{{kota}}"></ion-input>\n\n  		</ion-item>\n\n\n\n   		<ion-item>\n\n		    <ion-label stacked>Status Orang Tua</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="hp" name="status" value="{{status}}"></ion-input>\n\n  		</ion-item>\n\n      \n\n\n\n      </ion-card-title>\n\n\n\n    </ion-card-content>   \n\n  </ion-card>\n\n\n\n\n\n  <ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button type="submit" ion-button block (click)="edit()">Edit</button>\n\n    </ion-col>\n\n    <ion-col>\n\n     <button type="submit" ion-button block (click)="logout()">Logout</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\profil\profil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfilPage);

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BantuanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BantuanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BantuanPage = (function () {
    function BantuanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BantuanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BantuanPage');
    };
    return BantuanPage;
}());
BantuanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bantuan',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\bantuan\bantuan.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title><img class="title" src="../assets/Hikiddo.png"></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="SignIn()"> <ion-icon class="notif"></ion-icon>\n\n       <ion-badge color="danger" item-end>10</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="pinggir">\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <img src="assets/glassblue.png" class="kecilin" id="cari">\n\n    </ion-col>\n\n    <ion-col>\n\n       <p class="bantu">Fitur perncarian yang akan membantu anda mencari day care berdasarkan kata kunci yang anda masukan</p>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="pad2">\n\n  <ion-row>\n\n    <ion-col>\n\n      <img src="assets/babyblue.png" class="kecilin" id="bayi">\n\n    </ion-col>\n\n    <ion-col>\n\n     <p class="bantu">Fitur live report yang akan memberikan anda informasi mengenai kegiatan buah hati dengan tenang</p>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="pad1">\n\n  <ion-row>\n\n    <ion-col>\n\n      <img src="assets/userblue.png" class="kecilin" id="user">\n\n    </ion-col>\n\n    <ion-col>\n\n      <p class="bantu">Fitur profile berisikan informasi mengenai data diri anda</p>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n  <br>\n\n  <br>\n\n  <ion-grid class="pad">\n\n  <ion-row>\n\n    <ion-col>\n\n      <img src="assets/notifblue.png" class="kecilin" id="notif">\n\n    </ion-col>\n\n    <ion-col>\n\n      <p class="bantu">Fitur notifikasi akan memberitahu anda dengan cepat terkait pemberitahuan dari sistem</p>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\bantuan\bantuan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BantuanPage);

//# sourceMappingURL=bantuan.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cari_cari__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anak_anak__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_profil__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bantuan_bantuan__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__cari_cari__["a" /* CariPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__anak_anak__["a" /* AnakPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__profil_profil__["a" /* ProfilPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__bantuan_bantuan__["a" /* BantuanPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="cari"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="anak"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="profil"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="bantuan"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, loadingCtrl, alertCtrl, formBuilder, authProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.registerForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z, ]*')])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            level: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
        }
        else {
            this.authProvider.registerUser(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.level)
                .then(function () {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        title: '',
                        subTitle: 'Silahkan untuk menkonfirmasi Email Anda terlebih dahulu.',
                        buttons: ['Tutup']
                    });
                    alert.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var errorMessage = error.message;
                    var alert = _this.alertCtrl.create({
                        message: errorMessage,
                        buttons: [{ text: "Ok", role: 'cancel' }]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    RegisterPage.prototype.SignIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\register\register.html"*/'<ion-content padding class="top">\n\n  <img src="assets/logokiddo.png" class="center">\n\n  <form [formGroup]="registerForm" (submit)="registerUser()" novalidate>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Nama Lengkap</ion-label>\n\n      <ion-input formControlName="name" type="text" value="" ></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!registerForm.controls.name.valid  && registerForm.controls.name.dirty">\n\n      <p>Please enter a valid name.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Alamat Email</ion-label>\n\n      <ion-input formControlName="email" type="text" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!registerForm.controls.email.valid  && registerForm.controls.email.dirty">\n\n      <p>Please enter a valid email.</p>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input formControlName="password" type="password" value="" ></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message"*ngIf="!registerForm.controls.password.valid  && registerForm.controls.password.dirty">\n\n      <p>Your password needs more than 6 characters.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Daftar sebagai</ion-label>\n\n      <ion-select formControlName="level" >\n\n        <ion-option value="wali" >Orang Tua / Wali</ion-option>\n\n        <ion-option value="mitra" >Mitra</ion-option> \n\n      </ion-select>\n\n    </ion-item>\n\n     <ion-item class="error-message" *ngIf="!registerForm.controls.level.valid  && registerForm.controls.level.dirty">\n\n      <p>Please fill the option.</p>\n\n    </ion-item>\n\n  </ion-list>\n\n   <div padding>\n\n    <button block ion-button type="submit">\n\n      Daftar\n\n    </button>\n\n    <p>Sudah punya akun? \n\n      <a (click)="SignIn()" href="#">\n\n        <b>Masuk</b>\n\n      </a>.\n\n    </p>\n\n  </div>\n\n\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anak/anak.module": [
		407,
		7
	],
	"../pages/bantuan/bantuan.module": [
		409,
		6
	],
	"../pages/cari/cari.module": [
		406,
		5
	],
	"../pages/edituser/edituser.module": [
		413,
		4
	],
	"../pages/login/login.module": [
		412,
		3
	],
	"../pages/profil/profil.module": [
		408,
		2
	],
	"../pages/register/register.module": [
		411,
		1
	],
	"../pages/tabs/tabs.module": [
		410,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EdituserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EdituserPage = (function () {
    function EdituserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EdituserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EdituserPage');
    };
    return EdituserPage;
}());
EdituserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edituser',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\edituser\edituser.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title><img class="title" src="../assets/Hikiddo.png"></ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="SignIn()"> <ion-icon class="notif"></ion-icon>\n\n       <ion-badge color="danger" item-end>10</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <div id="profile-bg"></div>\n\n      <div id="content">\n\n        <div id="profile-info">\n\n          <img id="profile-image" src="assets/babyblue.png">\n\n        </div>\n\n   	</div>\n\n   	\n\n   	<button class="button1" text-center ion-button (click)="gantiFoto()"> Ubah Foto Profil </button>\n\n\n\n\n\n\n\n\n\n\n\n	<ion-card>\n\n    <ion-card-content>\n\n      <ion-card-title text-center>\n\n      <ion-item>\n\n        <ion-label stacked>Nama Lengkap</ion-label>\n\n        <ion-input type="text" [(ngModel)]="nama" name="nama" value="{{nama}}"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Alamat</ion-label>\n\n        <ion-input type="text" [(ngModel)]="alamat" name="alamat" value="{{alamat}}"></ion-input>\n\n      </ion-item>\n\n\n\n  		<ion-item>\n\n		    <ion-label stacked>No. Hp</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="hp" name="hp" value="{{hp}}"></ion-input>\n\n  		</ion-item>\n\n\n\n  		<ion-item>\n\n		    <ion-label stacked>Email</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="email" name="email" value="{{email}}"></ion-input>\n\n  		</ion-item>\n\n\n\n\n\n   		<ion-item>\n\n		    <ion-label stacked>Kota/Kabupaten</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="kota" name="kota" value="{{kota}}"></ion-input>\n\n  		</ion-item>\n\n\n\n   		<ion-item>\n\n		    <ion-label stacked>Status Orang Tua</ion-label>\n\n		    <ion-input type="text" [(ngModel)]="status" name="status" value="{{status}}"></ion-input>\n\n  		</ion-item>\n\n      \n\n\n\n      </ion-card-title>\n\n\n\n    </ion-card-content>   \n\n  </ion-card>\n\n\n\n\n\n  <ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button type="submit" ion-button block (click)="update()">Update</button>\n\n    </ion-col>\n\n    <ion-col>\n\n     <button type="submit" ion-button block (click)="logout()">Logout</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\edituser\edituser.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EdituserPage);

//# sourceMappingURL=edituser.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(295);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cari_cari__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_anak_anak__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profil_profil__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bantuan_bantuan__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edituser_edituser__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseAuth = {
    apiKey: "AIzaSyABvafG0BMGmcYL6dK3X61aCu6dGTt_HDQ",
    authDomain: "hikiddo-76f27.firebaseapp.com",
    databaseURL: "https://hikiddo-76f27.firebaseio.com",
    projectId: "hikiddo-76f27",
    storageBucket: "",
    messagingSenderId: "990152773375"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edituser_edituser__["a" /* EdituserPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_cari_cari__["a" /* CariPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_anak_anak__["a" /* AnakPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profil_profil__["a" /* ProfilPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_bantuan_bantuan__["a" /* BantuanPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cari/cari.module#CariPageModule', name: 'CariPage', segment: 'cari', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/anak/anak.module#AnakPageModule', name: 'AnakPage', segment: 'anak', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bantuan/bantuan.module#BantuanPageModule', name: 'BantuanPage', segment: 'bantuan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edituser/edituser.module#EdituserPageModule', name: 'EdituserPage', segment: 'edituser', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edituser_edituser__["a" /* EdituserPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_cari_cari__["a" /* CariPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_anak_anak__["a" /* AnakPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profil_profil__["a" /* ProfilPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_bantuan_bantuan__["a" /* BantuanPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = (function () {
    function AuthProvider(afAuth, afDatabase) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
    }
    /**
     * loginUser takes in an email and password and signs the user into the application.
     */
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    /**
     * signupUser takes in an email and password and does 3 things:
     * 1. It creates the new user.
     * 2. It signs the user into the application.
     * 3. It creates a database node for the user to store the userProfile, which starts with just
     *    the email address.
     */
    AuthProvider.prototype.registerUser = function (name, email, password, level) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (user) {
            _this.afDatabase.object('/user/' + user.uid).set({
                name: name,
                email: email,
                password: password,
                level: level
            });
        });
    };
    /**
     * resetPassword takes the email address as a string and sends the email with the reset password
     * link.
     */
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    /**
     * logoutUser doesn't take any parameters, it looks into the authentication object and signs out
     * the currently logged in user.
     */
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(fire, database, navCtrl, navParams, loadCtrl) {
        this.fire = fire;
        this.database = database;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.splash = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.SignIn = function () {
        var _this = this;
        //var user = this.fire.auth.currentUser;
        this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(function (user) {
            _this.database.object('/user/' + user.uid).subscribe(function (data) {
                console.log(data);
                if (data.level == "wali")
                    //this.loading.dismiss().then( () => {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                else
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
            });
        });
    };
    LoginPage.prototype.SignUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('email'),
    __metadata("design:type", Object)
], LoginPage.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "password", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\login\login.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="assets/logokiddo.png">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div>\n\n\n\n\n\n<ion-content padding>\n\n<div class="top">\n\n  <img src="assets/logokiddo.png" class="center">\n\n  \n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" #email></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" #password></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n \n\n  <div padding>\n\n    <button block ion-button (click)="SignIn()">Login</button>\n\n    <p class="lupa"> Lupa password? Klik <a href="#">disini</a></p>\n\n  </div>\n\n</div>\n\n<div class="bottom">\n\n  <div padding>\n\n    <p class="belom">Belum punya akun?</p>\n\n    <button ion-button outline class="daftar" (click)="SignUp()">Daftar</button>\n\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Firgiawan\ionic\HiKiddo\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map