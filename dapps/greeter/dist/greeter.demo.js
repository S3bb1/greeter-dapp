(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('dapp-browser'), require('angular-libs'), require('angular-core')) :
	typeof define === 'function' && define.amd ? define(['exports', 'dapp-browser', 'angular-libs', 'angular-core'], factory) :
	(factory((global.greeter = global.greeter || {}, global.greeter.demo = {}),global.dappBrowser,global.angularLibs,global.angularCore));
}(this, (function (exports,dappBrowser,angularLibs,angularCore) { 'use strict';

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**************************************************************************************************/
var RootComponent = /** @class */ (function (_super) {
    __extends(RootComponent, _super);
    function RootComponent(_DomSanitizer, bcc, core, descriptionService, mailboxService, ref, routingService) {
        var _this = _super.call(this, ref) || this;
        _this._DomSanitizer = _DomSanitizer;
        _this.bcc = bcc;
        _this.core = core;
        _this.descriptionService = descriptionService;
        _this.mailboxService = mailboxService;
        _this.ref = ref;
        _this.routingService = routingService;
        return _this;
    }
    /**
     * Initialize the component and wait for evan.network processes to be finished.
     *
     * @return     {Promise<void>}  resolved when done
     */
    RootComponent.prototype._ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // initialize DBCP and blockchain-core and provide the default password dialog to unlock current
                    // users wallet
                    return [4 /*yield*/, this.bcc.initialize(function (accountId) { return _this.bcc.globalPasswordDialog(accountId); })];
                    case 1:
                        // initialize DBCP and blockchain-core and provide the default password dialog to unlock current
                        // users wallet
                        _a.sent();
                        // Watch for route changes to update the current router-refs
                        this.watchRouteChange = this.routingService.subscribeRouteChange(function () { return _this.ref.detectChanges(); });
                        // tell the dapp-browser to hide the initial loading screen
                        this.core.finishDAppLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remove route watchers
     *
     * @return     {Promise<void>}  resolved when done
     */
    RootComponent.prototype._ngOnDestroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.watchRouteChange();
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    RootComponent = __decorate([
        angularLibs.Component({
            selector: 'greeterdemo-root',
            template: "<!-- Copyright (c) 2018-present evan GmbH. Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. --> <evan-loading *ngIf=\"loading\" delayLoading=\"500\"></evan-loading> <dapp-wrapper *ngIf=\"!loading\" #dappWrapper> <div evan-content [@routerTransition]=\"o?.activatedRouteData?.state\"> <router-outlet #o=\"outlet\"></router-outlet> </div> </dapp-wrapper> ",
            animations: [
                angularCore.createOpacityTransition(),
                angularCore.createRouterTransition([
                // insert router transitions here
                ])
            ]
        })
        /**
         * Root component for handle routing and navigation.
         *
         * @class      RootComponent (name)
         */
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof angularLibs.DomSanitizer !== "undefined" && angularLibs.DomSanitizer) === "function" && _a || Object, typeof (_b = typeof angularCore.EvanBCCService !== "undefined" && angularCore.EvanBCCService) === "function" && _b || Object, typeof (_c = typeof angularCore.EvanCoreService !== "undefined" && angularCore.EvanCoreService) === "function" && _c || Object, typeof (_d = typeof angularCore.EvanDescriptionService !== "undefined" && angularCore.EvanDescriptionService) === "function" && _d || Object, typeof (_e = typeof angularCore.EvanMailboxService !== "undefined" && angularCore.EvanMailboxService) === "function" && _e || Object, typeof (_f = typeof angularLibs.ChangeDetectorRef !== "undefined" && angularLibs.ChangeDetectorRef) === "function" && _f || Object, typeof (_g = typeof angularCore.EvanRoutingService !== "undefined" && angularCore.EvanRoutingService) === "function" && _g || Object])
    ], RootComponent);
    return RootComponent;
}(angularCore.AsyncComponent));

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**************************************************************************************************/
/**
 * Utility service for the whole greeterdemo DApp
 */
var greeterdemoService = /** @class */ (function () {
    /**
     * Create a singleton service instance.
     */
    function greeterdemoService(bcc, core, descriptionService, singleton) {
        this.bcc = bcc;
        this.core = core;
        this.descriptionService = descriptionService;
        this.singleton = singleton;
        return singleton.create(greeterdemoService_1, this, function () {
        });
    }
    greeterdemoService_1 = greeterdemoService;
    /**
     * Test function to check if service is working.
     */
    greeterdemoService.prototype.testFunction = function () {
        console.log('Service is working :)');
    };
    var greeterdemoService_1, _a, _b, _c, _d;
    greeterdemoService = greeterdemoService_1 = __decorate$1([
        angularLibs.Injectable(),
        __metadata$1("design:paramtypes", [typeof (_a = typeof angularCore.EvanBCCService !== "undefined" && angularCore.EvanBCCService) === "function" && _a || Object, typeof (_b = typeof angularCore.EvanCoreService !== "undefined" && angularCore.EvanCoreService) === "function" && _b || Object, typeof (_c = typeof angularCore.EvanDescriptionService !== "undefined" && angularCore.EvanDescriptionService) === "function" && _c || Object, typeof (_d = typeof angularCore.SingletonService !== "undefined" && angularCore.SingletonService) === "function" && _d || Object])
    ], greeterdemoService);
    return greeterdemoService;
}());

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**************************************************************************************************/
var SampleComponent = /** @class */ (function (_super) {
    __extends$1(SampleComponent, _super);
    function SampleComponent(alertService, bcc, core, qrCodeService, queueService, ref, routingService, greeterdemoServiceInstance) {
        var _this = _super.call(this, ref) || this;
        _this.alertService = alertService;
        _this.bcc = bcc;
        _this.core = core;
        _this.qrCodeService = qrCodeService;
        _this.queueService = queueService;
        _this.ref = ref;
        _this.routingService = routingService;
        _this.greeterdemoServiceInstance = greeterdemoServiceInstance;
        return _this;
    }
    /**
     * Test if service and dispatcher are working.
     */
    SampleComponent.prototype._ngOnInit = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, greeter, _b;
            var _this = this;
            return __generator$1(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.dispatcherIsFinished = false;
                        this.greeterdemoServiceInstance.testFunction();
                        // test dispatcher functionallity
                        this.queueId = new angularCore.QueueId("greeter.demo." + dappBrowser.getDomainName(), 'greeterdemoDispatcher', 'greeterdemo');
                        // wait for dispatcher to be finished
                        _a = this;
                        return [4 /*yield*/, this.queueService.onQueueFinish(this.queueId, function (reload) { return __awaiter$1(_this, void 0, void 0, function () {
                                return __generator$1(this, function (_a) {
                                    // if the function was called by finishing the queue, everything is fine.
                                    if (reload) {
                                        console.log('Dispatcher is working');
                                        // sample UI data update
                                        this.dispatcherIsFinished = true;
                                        this.ref.detectChanges();
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        // wait for dispatcher to be finished
                        _a.queueWatcher = _c.sent();
                        // submit new data to the queue
                        this.queueService.addQueueData(this.queueId, {
                            param1: 'param1',
                            param2: 'param2',
                        });
                        // start the queue
                        this.queueService.startSyncAll();
                        this.bcc.contractLoader.contracts['Greeter'] = {
                            'interface': '[{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
                        };
                        greeter = this.bcc.contractLoader.loadContract('Greeter', '0x7c527f7acffb3dd60e445a9f2f0007f33cd9b762');
                        _b = this;
                        return [4 /*yield*/, this.bcc.executor.executeContractCall(greeter, // web3.js contract instance
                            'greet' // function name
                            )];
                    case 2:
                        _b.greetingMessage = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clear the queue watcher
     *
     * @return     {<type>}  { description_of_the_return_value }
     */
    SampleComponent.prototype._ngOnDestroy = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                this.queueWatcher();
                return [2 /*return*/];
            });
        });
    };
    var _a, _b, _c, _d, _e, _f, _g;
    SampleComponent = __decorate$2([
        angularLibs.Component({
            selector: 'greeterdemo-sample',
            template: "<!-- Copyright (c) 2018-present evan GmbH. Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. --> <dapp-wrapper> <div class=\"evan-content\" evan-content> <h3 class=\"content-header m-b-0 m-t-0\"> {{ 'greeter.demo' | translate }} </h3> <p ion-text class=\"m-b-0 m-t-0\"> {{ '_greeter.demo.description' | translate }} </p> <p margin-top>Your DApp is working: {{ 'greeter.demo' | translate }}</p> <p>Greeting: {{ greetingMessage }}</p> <p>Dispatcher is finished: {{ dispatcherIsFinished }}</p> </div> </dapp-wrapper>",
            animations: []
        })
        /**
         * Sample component to display a simple text.
         */
        ,
        __metadata$2("design:paramtypes", [typeof (_a = typeof angularCore.EvanAlertService !== "undefined" && angularCore.EvanAlertService) === "function" && _a || Object, typeof (_b = typeof angularCore.EvanBCCService !== "undefined" && angularCore.EvanBCCService) === "function" && _b || Object, typeof (_c = typeof angularCore.EvanCoreService !== "undefined" && angularCore.EvanCoreService) === "function" && _c || Object, typeof (_d = typeof angularCore.EvanQrCodeService !== "undefined" && angularCore.EvanQrCodeService) === "function" && _d || Object, typeof (_e = typeof angularCore.EvanQueue !== "undefined" && angularCore.EvanQueue) === "function" && _e || Object, typeof (_f = typeof angularLibs.ChangeDetectorRef !== "undefined" && angularLibs.ChangeDetectorRef) === "function" && _f || Object, typeof (_g = typeof angularCore.EvanRoutingService !== "undefined" && angularCore.EvanRoutingService) === "function" && _g || Object, greeterdemoService])
    ], SampleComponent);
    return SampleComponent;
}(angularCore.AsyncComponent));

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var en = {
    "sample": "greeter.demo",
    "_greeter.demo": {
        "description": "greeter demo",
        "dispatcher": {
            "title": "greeter.demo Dispatcher",
            "description": "Handles data saving for the greeter.demo DApp.",
        }
    }
};

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var de = {
    "sample": "greeter.demo",
    "_greeter.demo": {
        "description": "greeter demo",
        "dispatcher": {
            "title": "greeter.demo Dispatcher",
            "description": "Führt die Datenspeicherung für die greeter.demo DApp durch."
        }
    }
};

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var translations = {
    en: en, de: de
};
var Translations = /** @class */ (function () {
    function Translations(translate) {
        translate.setTranslation('en', en);
        translate.setTranslation('de', de);
    }
    var _a;
    Translations = __decorate$3([
        angularLibs.Injectable(),
        __metadata$3("design:paramtypes", [typeof (_a = typeof angularCore.EvanTranslationService !== "undefined" && angularCore.EvanTranslationService) === "function" && _a || Object])
    ], Translations);
    return Translations;
}());

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
/**************************************************************************************************/
var greeterdemoDispatcher = new angularCore.QueueDispatcher([
    new angularCore.QueueSequence('_greeterdemo.dispatcher.title', '_greeterdemo.dispatcher.description', function (service, queueEntry) { return __awaiter$2(_this, void 0, void 0, function () {
        var _i, _a, entry;
        return __generator$2(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('Dispatcher is starting with the following service:');
                    console.dir(greeterdemoService);
                    _i = 0, _a = queueEntry.data;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    entry = _a[_i];
                    console.log("Processing data entry: " + queueEntry.data.indexOf(entry));
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                case 2:
                    _b.sent();
                    console.dir(entry);
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('Dispatcher has finished his work.');
                    return [2 /*return*/];
            }
        });
    }); })
], translations, 'greeterdemoService');

/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$3 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// import components
// import services and dispatchers
/**************************************************************************************************/
function getRoutes() {
    return angularCore.buildModuleRoutes("greeter.demo." + dappBrowser.getDomainName(), RootComponent, [
        {
            path: '',
            component: SampleComponent,
            data: {
                state: 'sample',
                navigateBack: true
            }
        },
        {
            path: '**',
            component: angularCore.DAppLoaderComponent,
            data: {
                state: 'unkown',
                navigateBack: true
            }
        }
    ]);
}
/**
 * Returns the module configuration for the normal or dispatcher module.
 * In case of the dispatcher module, Router configurations and BrowserModule imports are excluded
 * to load the module during runtime by the dispatcher service.
 *
 * @param isDispatcher  boolean value if the config is used for the dispatcher module
 */
function getConfig(isDispatcher) {
    var config = {
        imports: [
            angularLibs.CommonModule,
            angularCore.AngularCore,
        ],
        providers: [
            Translations,
            greeterdemoService,
        ],
    };
    if (!isDispatcher) {
        config.imports.unshift(angularLibs.BrowserAnimationsModule);
        config.imports.unshift(angularLibs.RouterModule.forRoot(getRoutes(), { enableTracing: false, }));
        config.imports.push(angularLibs.IonicModule.forRoot(angularCore.BootstrapComponent, {
            mode: 'md'
        }));
        config.bootstrap = [
            angularLibs.IonicApp
        ];
        config.declarations = [
            angularCore.BootstrapComponent,
            RootComponent,
            SampleComponent,
        ];
    }
    return config;
}
var DispatcherModule = /** @class */ (function () {
    function DispatcherModule() {
    }
    DispatcherModule = __decorate$4([
        angularLibs.NgModule(getConfig(true)),
        __metadata$4("design:paramtypes", [])
    ], DispatcherModule);
    return DispatcherModule;
}());
var greeterdemoModule = /** @class */ (function () {
    function greeterdemoModule(translations$$1) {
        this.translations = translations$$1;
    }
    greeterdemoModule = __decorate$4([
        angularLibs.NgModule(getConfig(false)),
        __metadata$4("design:paramtypes", [Translations])
    ], greeterdemoModule);
    return greeterdemoModule;
}());
function startDApp(container, dbcpName) {
    return __awaiter$3(this, void 0, void 0, function () {
        var ionicAppEl;
        return __generator$3(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ionicAppEl = angularCore.createIonicAppElement(container, dbcpName);
                    return [4 /*yield*/, angularCore.startAngularApplication(greeterdemoModule, getRoutes())];
                case 1:
                    _a.sent();
                    container.appendChild(ionicAppEl);
                    return [2 /*return*/];
            }
        });
    });
}

exports.greeterdemoService = greeterdemoService;
exports.greeterdemoDispatcher = greeterdemoDispatcher;
exports.DispatcherModule = DispatcherModule;
exports.startDApp = startDApp;

Object.defineProperty(exports, '__esModule', { value: true });

})));
