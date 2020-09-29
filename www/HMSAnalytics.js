/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

"use strict";
const cordova_1 = require("cordova");
class HMSAnalyticsAPI {
    constructor() {
        this.HAParamType = HAParamType;
        this.HAEventType = HAEventType;
    }
    asyncExecute(action, param) {
        return new Promise((resolve, reject) => {
            cordova_1.exec(resolve, reject, 'cordova-plugin-hms-analytics', action, (param === undefined || param === null) ? [{}] : [param]);
        });
    }
    enableLog() {
        return this.asyncExecute('ACTION_ENABLE_LOG', {});
    }
    enableLogWithLevel(logLevel) {
        if (!(logLevel === 'DEBUG' || logLevel === 'INFO' || logLevel === 'WARN' || logLevel === 'ERROR')) {
            throw 'Invalid argument. Possible logLevels : DEBUG, INFO, WARN, ERROR';
        }
        return this.asyncExecute('ACTION_ENABLE_LOG_WITH_LEVEL', { logLevel });
    }
    setUserId(userId) {
        return this.asyncExecute('ACTION_SET_USER_ID', { userId });
    }
    setUserProfile(name, value) {
        return this.asyncExecute('ACTION_SET_USER_PROFILE', { key: name, value: value });
    }
    setPushToken(token) {
        return this.asyncExecute('ACTION_SET_PUSH_TOKEN', { token });
    }
    setMinActivitySessions(interval) {
        return this.asyncExecute('ACTION_SET_MIN_ACTIVITY_SESSIONS', { interval });
    }
    setSessionDuration(duration) {
        return this.asyncExecute('ACTION_SET_SESSION_DURATION', { duration });
    }
    setCurrentActivity(activityName, screenClassOverride) {
        return this.asyncExecute('ACTION_SET_CURRENT_ACTIVITY', { activityName, screenClassOverride });
    }
    onEvent(key, value) {
        return this.asyncExecute('ACTION_SEND_EVENT', { key, value });
    }
    clearCachedData() {
        return this.asyncExecute('ACTION_CLEAR_CACHED_DATA', {});
    }
    getAAID() {
        return this.asyncExecute('ACTION_GET_AAID', {});
    }
    getUserProfiles(predefined) {
        return this.asyncExecute('ACTION_GET_USER_PROFILES', { predefined });
    }
}
var HAEventType;
(function(HAEventType) {
    HAEventType["CREATEPAYMENTINFO"] = "$CreatePaymentInfo";
    HAEventType["ADDPRODUCT2CART"] = "$AddProduct2Cart";
    HAEventType["ADDPRODUCT2WISHLIST"] = "$AddProduct2WishList";
    HAEventType["STARTAPP"] = "$StartApp";
    HAEventType["STARTCHECKOUT"] = "$StartCheckout";
    HAEventType["VIEWCAMPAIGN"] = "$ViewCampaign";
    HAEventType["VIEWCHECKOUTSTEP"] = "$ViewCheckoutStep";
    HAEventType["WINVIRTUALCOIN"] = "$WinVirtualCoin";
    HAEventType["COMPLETEPURCHASE"] = "$CompletePurchase";
    HAEventType["OBTAINLEADS"] = "$ObtainLeads";
    HAEventType["JOINUSERGROUP"] = "$JoinUserGroup";
    HAEventType["COMPLETELEVEL"] = "$CompleteLevel";
    HAEventType["STARTLEVEL"] = "$StartLevel";
    HAEventType["UPGRADELEVEL"] = "$UpgradeLevel";
    HAEventType["SIGNIN"] = "$SignIn";
    HAEventType["SUBMITSCORE"] = "$SubmitScore";
    HAEventType["CREATEORDER"] = "$CreateOrder";
    HAEventType["REFUNDORDER"] = "$RefundOrder";
    HAEventType["DELPRODUCTFROMCART"] = "$DelProductFromCart";
    HAEventType["SEARCH"] = "$Search";
    HAEventType["VIEWCONTENT"] = "$ViewContent";
    HAEventType["UPDATECHECKOUTOPTION"] = "$UpdateCheckoutOption";
    HAEventType["SHARECONTENT"] = "$ShareContent";
    HAEventType["REGISTERACCOUNT"] = "$RegisterAccount";
    HAEventType["CONSUMEVIRTUALCOIN"] = "$ConsumeVirtualCoin";
    HAEventType["STARTTUTORIAL"] = "$StartTutorial";
    HAEventType["COMPLETETUTORIAL"] = "$CompleteTutorial";
    HAEventType["OBTAINACHIEVEMENT"] = "$ObtainAchievement";
    HAEventType["VIEWPRODUCT"] = "$ViewProduct";
    HAEventType["VIEWPRODUCTLIST"] = "$ViewProductList";
    HAEventType["VIEWSEARCHRESULT"] = "$ViewSearchResult";
})(HAEventType || (HAEventType = {}));
var HAParamType;
(function(HAParamType) {
    HAParamType["STORENAME"] = "$StoreName";
    HAParamType["BRAND"] = "$Brand";
    HAParamType["CATEGORY"] = "$Category";
    HAParamType["PRODUCTID"] = "$ProductId";
    HAParamType["PRODUCTNAME"] = "$ProductName";
    HAParamType["PRODUCTFEATURE"] = "$ProductFeature";
    HAParamType["PRICE"] = "$Price";
    HAParamType["QUANTITY"] = "$Quantity";
    HAParamType["REVENUE"] = "$Revenue";
    HAParamType["CURRNAME"] = "$CurrName";
    HAParamType["PLACEID"] = "$PlaceId";
    HAParamType["DESTINATION"] = "$Destination";
    HAParamType["ENDDATE"] = "$EndDate";
    HAParamType["BOOKINGDAYS"] = "$BookingDays";
    HAParamType["PASSENGERSNUMBER"] = "$PassengersNumber";
    HAParamType["BOOKINGROOMS"] = "$BookingRooms";
    HAParamType["ORIGINATINGPLACE"] = "$OriginatingPlace";
    HAParamType["BEGINDATE"] = "$BeginDate";
    HAParamType["TRANSACTIONID"] = "$TransactionId";
    HAParamType["CLASS"] = "$Class";
    HAParamType["CLICKID"] = "$ClickId";
    HAParamType["PROMOTIONNAME"] = "$PromotionName";
    HAParamType["CONTENT"] = "$Content";
    HAParamType["EXTENDPARAM"] = "$ExtendParam";
    HAParamType["MATERIALNAME"] = "$MaterialName";
    HAParamType["MATERIALSLOT"] = "$MaterialSlot";
    HAParamType["MEDIUM"] = "$Medium";
    HAParamType["SOURCE"] = "$Source";
    HAParamType["KEYWORDS"] = "$Keywords";
    HAParamType["OPTION"] = "$Option";
    HAParamType["STEP"] = "$Step";
    HAParamType["VIRTUALCURRNAME"] = "$VirtualCurrName";
    HAParamType["VOUCHER"] = "$Voucher";
    HAParamType["PLACE"] = "$Place";
    HAParamType["SHIPPING"] = "$Shipping";
    HAParamType["TAXFEE"] = "$TaxFee";
    HAParamType["USERGROUPID"] = "$UserGroupId";
    HAParamType["LEVELNAME"] = "$LevelName";
    HAParamType["RESULT"] = "$Result";
    HAParamType["ROLENAME"] = "$RoleName";
    HAParamType["LEVELID"] = "$LevelId";
    HAParamType["CHANNEL"] = "$Channel";
    HAParamType["SCORE"] = "$Score";
    HAParamType["SEARCHKEYWORDS"] = "$SearchKeywords";
    HAParamType["CONTENTTYPE"] = "$ContentType";
    HAParamType["ACHIEVEMENTID"] = "$AchievementId";
    HAParamType["FLIGHTNO"] = "$FlightNo";
    HAParamType["POSITIONID"] = "$PositionId";
    HAParamType["PRODUCTLIST"] = "$ProductList";
})(HAParamType || (HAParamType = {}));
module.exports = new HMSAnalyticsAPI();
//# sourceMappingURL=HMSAnalytics.js.map