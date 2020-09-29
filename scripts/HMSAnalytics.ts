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

import { exec } from 'cordova';

class HMSAnalyticsAPI {
    HAParamType = HAParamType;
    HAEventType = HAEventType;

    asyncExecute(action: string, param: any): Promise<any> {
        return new Promise((resolve, reject) => {
            exec(resolve, reject, 'cordova-plugin-hms-analytics', action, (param === undefined || param === null) ? [{}] : [param]);
        });
    }

    enableLog(): Promise<void> {
        return this.asyncExecute('ACTION_ENABLE_LOG', {});
    }

    enableLogWithLevel(logLevel: Level): Promise<void> {
        if (!(logLevel === 'DEBUG' || logLevel === 'INFO' || logLevel === 'WARN' || logLevel === 'ERROR')) {
            throw 'Invalid argument. Possible logLevels : DEBUG, INFO, WARN, ERROR';
        }

        return this.asyncExecute('ACTION_ENABLE_LOG_WITH_LEVEL', { logLevel });
    }

    setUserId(userId: string): Promise<void> {
        return this.asyncExecute('ACTION_SET_USER_ID', { userId });
    }


    setUserProfile(name: string, value: string): Promise<void> {
        return this.asyncExecute('ACTION_SET_USER_PROFILE', { key: name, value: value });
    }

    setPushToken(token: string): Promise<any> {
        return this.asyncExecute('ACTION_SET_PUSH_TOKEN', { token });
    }

    setMinActivitySessions(interval: number): Promise<void> {
        return this.asyncExecute('ACTION_SET_MIN_ACTIVITY_SESSIONS', { interval });
    }

    setSessionDuration(duration: number): Promise<void> {
        return this.asyncExecute('ACTION_SET_SESSION_DURATION', { duration });
    }

    setCurrentActivity(activityName: string, screenClassOverride: string): Promise<void> {
        return this.asyncExecute('ACTION_SET_CURRENT_ACTIVITY', { activityName, screenClassOverride });
    }

    onEvent(key: HAEventType | string, value: HAParamType | Params): Promise<void> {
        return this.asyncExecute('ACTION_SEND_EVENT', { key, value });
    }

    clearCachedData(): Promise<void> {
        return this.asyncExecute('ACTION_CLEAR_CACHED_DATA', {});
    }

    getAAID(): Promise<string> {
        return this.asyncExecute('ACTION_GET_AAID', {});
    }

    getUserProfiles(predefined: boolean): Promise<Params | Profiles> {
        return this.asyncExecute('ACTION_GET_USER_PROFILES', { predefined });
    }
}

interface Profiles {
    "_sys_language": string;
    "_app_ver": string;
    "_model": string;
    "_os_ver": string;
    "_manufacturer": string;
}

interface Params {
    [key: string]: string;
}

type Level = "DEBUG" | "INFO" | "WARN" | "ERROR";

enum HAEventType {
    CREATEPAYMENTINFO = "$CreatePaymentInfo",
    ADDPRODUCT2CART = "$AddProduct2Cart",
    ADDPRODUCT2WISHLIST = "$AddProduct2WishList",
    STARTAPP = "$StartApp",
    STARTCHECKOUT = "$StartCheckout",
    VIEWCAMPAIGN = "$ViewCampaign",
    VIEWCHECKOUTSTEP = "$ViewCheckoutStep",
    WINVIRTUALCOIN = "$WinVirtualCoin",
    COMPLETEPURCHASE = "$CompletePurchase",
    OBTAINLEADS = "$ObtainLeads",
    JOINUSERGROUP = "$JoinUserGroup",
    COMPLETELEVEL = "$CompleteLevel",
    STARTLEVEL = "$StartLevel",
    UPGRADELEVEL = "$UpgradeLevel",
    SIGNIN = "$SignIn",
    SUBMITSCORE = "$SubmitScore",
    CREATEORDER = "$CreateOrder",
    REFUNDORDER = "$RefundOrder",
    DELPRODUCTFROMCART = "$DelProductFromCart",
    SEARCH = "$Search",
    VIEWCONTENT = "$ViewContent",
    UPDATECHECKOUTOPTION = "$UpdateCheckoutOption",
    SHARECONTENT = "$ShareContent",
    REGISTERACCOUNT = "$RegisterAccount",
    CONSUMEVIRTUALCOIN = "$ConsumeVirtualCoin",
    STARTTUTORIAL = "$StartTutorial",
    COMPLETETUTORIAL = "$CompleteTutorial",
    OBTAINACHIEVEMENT = "$ObtainAchievement",
    VIEWPRODUCT = "$ViewProduct",
    VIEWPRODUCTLIST = "$ViewProductList",
    VIEWSEARCHRESULT = "$ViewSearchResult"
}

enum HAParamType {
    STORENAME = "$StoreName",
    BRAND = "$Brand",
    CATEGORY = "$Category",
    PRODUCTID = "$ProductId",
    PRODUCTNAME = "$ProductName",
    PRODUCTFEATURE = "$ProductFeature",
    PRICE = "$Price",
    QUANTITY = "$Quantity",
    REVENUE = "$Revenue",
    CURRNAME = "$CurrName",
    PLACEID = "$PlaceId",
    DESTINATION = "$Destination",
    ENDDATE = "$EndDate",
    BOOKINGDAYS = "$BookingDays",
    PASSENGERSNUMBER = "$PassengersNumber",
    BOOKINGROOMS = "$BookingRooms",
    ORIGINATINGPLACE = "$OriginatingPlace",
    BEGINDATE = "$BeginDate",
    TRANSACTIONID = "$TransactionId",
    CLASS = "$Class",
    CLICKID = "$ClickId",
    PROMOTIONNAME = "$PromotionName",
    CONTENT = "$Content",
    EXTENDPARAM = "$ExtendParam",
    MATERIALNAME = "$MaterialName",
    MATERIALSLOT = "$MaterialSlot",
    MEDIUM = "$Medium",
    SOURCE = "$Source",
    KEYWORDS = "$Keywords",
    OPTION = "$Option",
    STEP = "$Step",
    VIRTUALCURRNAME = "$VirtualCurrName",
    VOUCHER = "$Voucher",
    PLACE = "$Place",
    SHIPPING = "$Shipping",
    TAXFEE = "$TaxFee",
    USERGROUPID = "$UserGroupId",
    LEVELNAME = "$LevelName",
    RESULT = "$Result",
    ROLENAME = "$RoleName",
    LEVELID = "$LevelId",
    CHANNEL = "$Channel",
    SCORE = "$Score",
    SEARCHKEYWORDS = "$SearchKeywords",
    CONTENTTYPE = "$ContentType",
    ACHIEVEMENTID = "$AchievementId",
    FLIGHTNO = "$FlightNo",
    POSITIONID = "$PositionId",
    PRODUCTLIST = "$ProductList",
}

export = new HMSAnalyticsAPI();
