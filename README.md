
# CORDOVA PLUGIN HMS ANALYTICS

  

1. Contents

2. Introduction

3. Installation Guide

4. Cordova SDK API Method Definition

5. Configure Description

6. Licensing and Terms

  

## 1. Contents

The Cordova SDK code encapsulates the Huawei analytics client interface. It provides many APIs for your reference or use.

  

The Cordova SDK code package is described as follows:

  

**src/android**: core layer, bridging AnalyticsSDK bottom-layer code;

  

**www/HMSAnalytics.js**: external interface definition layer, which is used to define interface classes or reference files.

  
  

## 2. Installation Guide

## Cordova


1. Download the Cordova Analytics SDK Plugin.

2.  Add Platform To Project.

    ***`cordova platform add android`***

3. You can either install the plugin thorough npm or by downloading from downloads page, [Cordova Analytics Plugin](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Library/cordova-sdk-download-0000001050134773). <br>

    a. Run the following command in the root directory of your Cordova project to install it through npm. <br>
        ***`cordova plugin add @hms-core/cordova-plugin-hms-analytics`*** <br>
    b. Run the following command in the root directory of your Cordova project to install it manually after downloading the plugin.<br>
        ***`cordova plugin add <CORDOVA_ANALYTICS_PLUGIN_PATH>`***

4. Check whether the Cordova Analytics SDK is successfully added to Plugin folder in the root directory of the Cordova project.

5. Add agconnect-services.json and jks file to root directory. 

6. Add build.json file to your project's root.

7. Import required package and add following code to onCreate function in MainActivity.java inside platforms\android\app\src\main\java .


8. Then run the Cordova app and check whether the automatically collected event can be properly reported in the **Real-time analysis** menu on the **Advanced analysis** page in HUAWEI Developer.
        
    ***`cordova run android`***

## Ionic

1. Download the Cordova Analytics Plugin through npm or by downloading from downloads page, [Cordova Analytics Plugin](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Library/cordova-sdk-download-0000001050134773). 

   a. Run the following command in the root directory of your Cordova project to install it through npm. <br>

    ***`npm install @hms-core/cordova-plugin-hms-analytics`*** <br>

   b. Run the following command in the root directory of your Cordova project to install it manually after downloading the plugin.

    ***`npm install <CORDOVA_ANALYTICS_PLUGIN_PATH>`***
2. Check whether the Cordova Analytics SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project. <br>

    ***`npm install @ionic-native/core --save`***

4. Copy the "ionic/dist/hms-analytics" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [appId]`*** 
    
    > ***NOTE*** <br>
    > where appName is the name of your app, and appId is package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Make sure your project has a build.gradle file with a maven repository address and Analytics service dependencies.

8. Add the plug-in configuration to the build.gradle file in the app directory.

9. Import required package and add following code to onCreate function in MainActivity.java inside platforms\android\app\src\main\java.

10. Add agconnect-services.json and jks file to the app directory in your Android project.

11. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

12. Then run the Ionic app and check whether the automatically collected event can be properly reported in the **Real-time analysis** menu on the **Huawei Analytics** in HUAWEI Developer.
        
    ***`ionic capacitor run android`***


## 3. Cordova SDK API Method And Constant Definition

  
  

|Methods |Definition |
|-------------------------------|-----------------------------|
`enableLog` |This API is called to enable the HUAWEI Analytics Kit log function. |
`enableLogWithLevel` |This API is called to enable debug logs and set the minimum log level (minimum level of log records that will be printed). |
`setUserId` |This API is called to set user IDs. |
`setUserProfile` |This API is called to set user attributes. |
`setPushToken` |This API is called to set the push token, which can be obtained from HUAWEI Push Kit. |
`setMinActivitySessions` |This API is called to set the minimum interval between two sessions. |
`setSessionDuration` |This API is called to set the session timeout interval. |
`setCurrentActivity` |This API is called to set the current screen name, which is used to identify the currently displayed screen. |
`onEvent` |This API is called to delete all collected data cached locally, including cached data that failed to be sent. |
`clearCachedData` |This API is called to delete all collected data cached locally, including cached data that failed to be sent. |
`getAAID` |This API is called to obtain the app instance ID from AppGalleryConnect. |
`getUserProfiles` |This API is called to obtain user attributes in the A/B test. |

  
  
  

## Public Functions

  

### enableLog

  

Enables the console log function of the SDK. The default level is DEBUG.

  

| Return | Definition |
|-------------------------------|-----------------------------|
|Promise<> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

  

### enableLogWithLevel

  

Enables the console log function of the SDK. The log level is passed.

  

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|logLevel| Level |Log level. The value can be ***DEBUG***, ***INFO***, ***WARN*** or ***ERROR***. The value is case insensitive.|

| Return | Definition |
|----------------|---------------|
|Promise<>| If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

  
  

### setUserId

This API is called to set user IDs.

  

When the API is called, a new session is generated if the old value of userId is not empty and is different from the new value.If you do not want to use userId to identify a user (for example, when a user signs out), you must set userId to null.

  

id: ID of a user. Huawei Analytics uses this ID to associate user data.The use of userId must comply with related privacy regulations. You need to declare the use of such information in the privacy statement of your app.

  
  

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|userId| String|Indicates the user ID.This parameter cannot be empty and its value can contain a maximum of 256 characters.|
  

| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### setUserProfile

This API is called to set user attributes.The values of user attributes remain unchanged throughout the app lifecycle and during each session.A maximum of 25 user attributes are supported. If the name of an attribute set later is the same as that of an existing attribute, the value of the existing attribute is updated.

  
  
| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|key| String |Indicates the ID of a user attribute.The value cannot be empty and can contain a maximum of 256 characters, including digits, letters, and underscores (_). It cannot start with a digit or underscore.|
|value|String |Indicates the attribute value,which is a non-empty string containing up to 256 characters.|

| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|


### setPushToken

This API is called to set the push token. After obtaining a push token through HUAWEI Push Kit, use this method to save the push token so that you can use the audience defined by HUAWEI Analytics to create HCM notification tasks.

  
  

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|token| String |Push token, which is a non-empty string containing up to 256 characters.|


| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|
  

### setMinActivitySessions

This API is called to set the minimum interval for starting a new session. A new session is generated when an app is switched back to the foreground after it runs in the background for the specified minimum interval. The default value is 30 seconds.

  
  

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|interval| Number |Indicates the minimum interval between two sessions.|

| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|
  

### setSessionDuration

This API is called to set the session timeout interval. A new session is generated when an app keeps running in the foreground but the interval between two adjacent events exceeds the specified timeout interval. The default value is 30 minutes.

  

| Parameters |Type | Definition |
|----------------|---------------|---------|
|duration| Number |Indicates the session timeout interval.|


| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|
  

### setCurrentActivity

This API is called to set the current screen name, which is used to identify the currently displayed screen.

  

| Parameters |Type | Definition |
|----------------|---------------|---------|
|activityName| String |Indicates the name of the current activity screen, which is mandatory.This parameter cannot be empty and its value can contain a maximum of 256 characters.|
|screenClassOverride| String |Indicates the screen class name, which is optional. If this parameter is set to null or left empty, the class name of the current activity is used.The value can contain a maximum of 256 characters.|

| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|
  

### onEvent

This API is called to record events.


| Parameters |Type | Definition |
|----------------|---------------|---------|
|key| Promise\<HAEventType \| String> |Indicates the ID of a customized event.The value cannot be empty and can contain a maximum of 256 characters, including digits, letters, and underscores (_). It cannot start with a digit or underscore. The value of this parameter cannot be an ID of an automatically collected event.
|value| Promise\<HAParamType \| Params>|Indicates the information carried by the event.The number of built-in key-value pairs in the object cannot exceed 2048 and the size cannot exceed 200 KB. The key value in the object cannot contain spaces or invisible characters.|

| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### clearCachedData

This API is called to delete all collected data cached locally, including cached data that failed to be sent.

| Return | Definition |
|----------------|---------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|


### getAAID

This API is called to obtain the app instance ID from AppGallery Connect.

| Return | Definition |
|----------------|---------------|
|Promise\<String>|Obtains the app instance ID from AppGallery Connect.|


### getUserProfiles

This API is called to obtain predefined and custom user attributes in the A/B test.

  

| Parameters |Type | Definition |
|----------------|---------------|---------|
|predefined| boolean |Indicates whether to obtain predefined user attributes.***True:*** obtains predefined user attributes ***False:*** obtains developer-defined user attributes|

| Return | Definition |
|----------------|---------------|
| Promise\<Params \| Profiles >| Predefined or custom user attributes. |

## Data Types

### Level
| Field Name |Type | Definition |
|----------------|---------------|---------|
|values |String | The value can be DEBUG, INFO, WARN, or ERROR.|

### Params

| Field Name |Type | Definition |
|----------------|---------------|---------|
|key|String|Predefined user attribute key.|
|value|String| Predefined user attribute value.|

### Profiles
| Field Name |Type | Definition |
|----------------|---------------|---------|
|_sys_language|String|System language.|
|_app_ver|String|Application version.|
|_model|String|Model.|
|_os_ver|String|Operating system version.|
|_manufacturer|String|Manufacturer.|


## Constants

| Name | Definition |
|-------------------------------|-----------------------------|
|HMSAnalytics.HAParamType| provides the IDs of all predefined parameters, including the ID constants of predefined parameters and user attributes.|
|HMSAnalytics.HAEventType | provides the ID constants of all predefined events.|

### HAEventType

| Constant Fields |Type | Value |
|----------------|---------------|---------|
|CREATEPAYMENTINFO|String|Event reported when a user has added payment information but has not initiated payment during checkout. It can be used with STARTCHECKOUT and COMPLETEPURCHASE to construct funnel analysis for the checkout process.|
|ADDPRODUCT2CART|String| Event reported when a user adds a product to the shopping cart. It can be used with VIEWPRODUCT and STARTCHECKOUT to construct funnel analysis for product purchase. It can also be used to analyze products that users are interested in, helping you promote the products to the users.|
|ADDPRODUCT2WISHLIST|String| Event reported when a user adds a product to favorites. It can be used to analyze products that users are interested in, helping you promote the products to the users.|
|STARTAPP| String |Event reported when a user launches the app.|
|STARTCHECKOUT|String|Event reported when a user clicks the checkout button after placing an order. It can be used with VIEWPRODUCT and COMPLETEPURCHASE to construct funnel analysis for the e-commerce purchase conversion rate.|
|VIEWCAMPAIGN|String|Event reported when a user view details of a marketing campaign. It can be used to analyze the conversion rate of a marketing campaign.|
|VIEWCHECKOUTSTEP|String|Event reported when a user views steps of the settlement process.|
|WINVIRTUALCOIN|String|Event reported when a user obtains virtual currency. It can be used to analyze the difficulty for users to obtain virtual currency, which helps you optimize the product design.|
|COMPLETEPURCHASE|String|This event is reported after a user purchases a product. It can be used to analyze the products or contents that users are more interested in, which helps you optimize the operations policy.|
|OBTAINLEADS|String|Event reported when a user joins in a group, for example, joining in a group chart in a social app. It can be used to evaluate the attractiveness of your product's social features to users.|
|COMPLETELEVEL|String|Event reported when a user completes a game level in a game app. It can be used with STARTLEVEL to analyze whether the game level design is proper and make targeted optimization policies.|
|STARTLEVEL|String|Event reported when a user starts a game level in a game app. It can be used together with COMPLETELEVEL to analyze whether the game level design is proper and make targeted optimization policies.|
|UPGRADELEVEL|String|Event reported when a user levels up in a game app. It can be used to analyze whether your product's user level design is optimal and make targeted optimization policies.|
|SIGNIN|String|Event reported when a user signs in to an app requiring sign-in. It can be used to analyze users' sign-in habits and make targeted operations policies.|
|SIGNOUT|String|Event reported when a user signs out.|
|SUBMITSCORE|String|Event reported when a user submits the score in a game or education app. It can be used to analyze the difficulty of product content and make targeted optimization policies.|
|CREATEORDER|String|Event reported when a user creates an order.|
|REFUNDORDER|String|Event reported when the refund is successful for a user. It can be used to analyze loss caused by the refund and make targeted optimization policies.|
|DELPRODUCTFROMCART|String|Event reported when a user removes a product from the shopping cart. It can be used for targeted marketing to the user.|
|SEARCH|String|Event reported when a user searches for content in an app. It can be used with events such as VIEWSEARCHRESULT and VIEWPRODUCT to analyze the accuracy of search results.|
|VIEWCONTENT| String| Event reported when a user touches a content, for example, touching a product in the product list in an e-commerce app to view the product details. It can be used to analyze the products that users are interested in.|
|UPDATECHECKOUTOPTION|String|Event reported when a user sets some checkout options during checkout. It can be used to analyze checkout preferences of users.|
|SHARECONTENT|String|Event reported when a user shares a product or content through a social channel. It can be used to analyze users' loyalty to the product.|
|REGISTERACCOUNT|String|Event reported when a user registers an account. It can be used to analyze the user sources and optimize operations policies.|
|CONSUMEVIRTUALCOIN|String|Event reported when a user consumes virtual currency. It can be used to analyze the products that users are interested in.|
|STARTTUTORIAL|String|Event reported when a user starts to use the tutorial. It can be used with COMPLETETUTORIAL to evaluate the tutorial quality and formulate targeted optimization policies.|
|COMPLETETUTORIAL|String|Event reported when a user completes the tutorial. It can be used with STARTTUTORIAL to evaluate the tutorial quality and formulate targeted optimization policies.|
|OBTAINACHIEVEMENT|String|Event reported when a user unlocks an achievement. It can be used to analyze whether the achievement level design is optimal and make targeted optimization policies.|
|VIEWPRODUCT|String|Event reported when a user browses a product. It can be used to analyze the products that users are interested in, or used with other events for funnel analysis.|
|VIEWPRODUCTLIST|String|Event reported when a user browses a list of products, for example, browsing the list of products by category. It can be used to analyze the types of contents that users are more interested in.|
|VIEWSEARCHRESULT|String|Event reported when a user views the search results. It can be used with VIEWPRODUCT and SEARCH to measure the accuracy of the search algorithm.|

### HAParamType

| Constant Fields |Type | Value |
|----------------|---------------|---------|
|STORENAME|String|Indicates the store or organization where a transaction occurred.|
|BRAND|String|Indicates the item brand.|
|CATEGORY|String|Indicates the item category.|
|PRODUCTID|String|Indicates the item ID.|
|PRODUCTNAME|String|Indicates the item name.|
|PRODUCTFEATURE|String|Indicates the item variant.|
|PRICE|String|Indicates the purchase price.|
|QUANTITY|String|Indicates the purchase quantity.|
|REVENUE|String|Indicates the context-specific value that is automatically accumulated for each event type.|
|CURRNAME|String|Indicates the currency type of the revenue, which is used together with $Revenue.|
|PLACEID|String|Indicates the item's location ID.|
|DESTINATION|String|Indicates the flight or travel destination.|
|ENDDATE|String|Indicates the project end date, checkout date, or lease end date.|
|BOOKINGDAYS|String|Indicates the number of days that a user can stay in the case of hotel reservation.|
|PASSENGERSNUMBER|String|Indicates the number of customers in the case of hotel reservation.|
|BOOKINGROOMS|String|Indicates the number of rooms reserved by a user in the case of hotel reservation.|
|ORIGINATINGPLACE|String|Indicates the departure location.|
|BEGINDATE|String|Indicates the departure date, hotel check-in date, or lease start date.|
|TRANSACTIONID|String|Indicates the e-commerce transaction ID.|
|CLASS|String|Indicates the level of a room reserved by a user in the case of hotel reservation.|
|CLICKID|String|Indicates the ID generated by the ad network and used to record ad clicks.|
|PROMOTIONNAME|String|Indicates the name of a marketing activity.|
|CONTENT|String|Indicates the content of a marketing activity.|
|EXTENDPARAM|String|Indicates a customized parameter.|
|MATERIALNAME|String|Indicates the name of the creative material used in a marketing activity.|
|MATERIALSLOT|String|Indicates the location where the creative material is displayed.|
|MEDIUM|String|Indicates the media where the campaign occurred, for example, CPC and email.|
|SOURCE|String|Indicates the source of a marketing activity provider, for example, Huawei PPS.|
|KEYWORDS|String|Indicates the search string or keyword.|
|OPTION|String|Indicates the checkout option entered by a user in the current settlement step.|
|STEP|String|Indicates the step where a user is currently in during the settlement process.|
|VIRTUALCURRNAME|String|Indicates the virtual currency type.|
|VOUCHER|String|Indicates the coupons used by a user in this transaction.|
|PLACE|String|Indicates the item’s location ID.|
|SHIPPING|String|Indicates the transportation fee generated in this transaction.|
|TAXFEE|String|Indicates the tax entailed in this transaction.|
|USERGROUPID|String|Indicates the ID of a group that a user joins.|
|LEVELNAME|String|Indicates the name of a game level.|
|RESULT|String|Indicates the operation result.|
|ROLENAME|String|Indicates the role of a user.|
|LEVELID|String|Indicates the name of a game level.|
|CHANNEL|String|Indicates the channel through which a user signs in.|
|SCORE|String|Indicates the score in a game.|
|SEARCHKEYWORDS|String|Indicates the search string or keyword.|
|CONTENTTYPE|String|Indicates the content type selected by a user.|
|ACHIEVEMENTID|String|Indicates the achievement ID.|
|FLIGHTNO|String|Indicates the flight number generated by the transaction system.|
|POSITIONID|String|Indicates the index of an item in the list.|
|PRODUCTLIST|String|Indicates the item list displayed to a user.|


## 4. Configure Description

No

  
  

## 5. Licensing and Terms

Apache 2.0 license.