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

declare class HMSAnalyticsAPI {
    HAParamType: typeof HAParamType;
    HAEventType: typeof HAEventType;
    asyncExecute(action: string, param: any): Promise<any>;
    enableLog(): Promise<void>;
    enableLogWithLevel(logLevel: Level): Promise<void>;
    setUserId(userId: string): Promise<void>;
    setUserProfile(name: string, value: string): Promise<void>;
    setPushToken(token: string): Promise<any>;
    setMinActivitySessions(interval: number): Promise<void>;
    setSessionDuration(duration: number): Promise<void>;
    setCurrentActivity(activityName: string, screenClassOverride: string): Promise<void>;
    onEvent(key: HAEventType | string, value: HAParamType | Params): Promise<void>;
    clearCachedData(): Promise<void>;
    getAAID(): Promise<string>;
    getUserProfiles(predefined: boolean): Promise<Params | Profiles>;
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
declare type Level = "DEBUG" | "INFO" | "WARN" | "ERROR";
declare enum HAEventType {
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
declare enum HAParamType {
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
    PRODUCTLIST = "$ProductList"
}
declare const _default: HMSAnalyticsAPI;
export = _default;
