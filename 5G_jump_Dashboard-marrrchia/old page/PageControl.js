//
const Dashboard = document.getElementById("Dashboard");
const NFs = document.getElementById("NFs");
const User = document.getElementById("User");
const Help = document.getElementById("Help");
const Message = document.getElementById("Message");
const Settings = document.getElementById("Settings");
const SignOut = document.getElementById("SignOut");

const toggle_page = document.getElementById("toggle");
const UserPictureDiv = document.getElementById("UserPictureDiv");
const Title_title = document.getElementById("Title-title");

const CardUser = document.getElementById("Users");
const CardIoT = document.getElementById("IoT");
const CardStations = document.getElementById("Stations");
const CardErrors = document.getElementById("Errors");

//
const MainPage = document.getElementById("MainPage");
const NetworkFunctionsPage = document.getElementById("NetworkFunctionsPage");
const UserPage = document.getElementById("UserPage");
const HelpPage = document.getElementById("HelpPage");
const MessagePage = document.getElementById("MessagePage");
const SettingPage = document.getElementById("SettingPage");

const UsersDetails = document.getElementById("UsersDetails");
const IoTDetails = document.getElementById("IoTDetails");
const StationsDetails = document.getElementById("StationsDetails");
const ErrorsDetails = document.getElementById("ErrorsDetails");

const NFlist = document.getElementById("NFlist");
const Login = document.getElementById("Login");
const toggle_close = document.getElementById("topbar");

//NetworkFunctionsPage Control
const CoreStatus = document.getElementById("5GCStatus");
const CoreSwitch = document.getElementById("CoreSwitch");
const NFcontainer= document.getElementById("NFcontainer");



// Pre-load
MainPageInitialPage();
DashboardInitialPage();
var count = 1;
//#region PagesControl
Dashboard.addEventListener("click", function (e) {
    MainPage.style = "display: block";
    NetworkFunctionsPage.style = "display: none";
    UserPage.style = "display: none";
    HelpPage.style = "display: none";
    MessagePage.style = "display: none";
    SettingPage.style = "display: none";
    NFlist.style = "display: none";
    count = 1;
});

NFs.addEventListener("click", function (e) {
    MainPage.style = "display: none";
    NetworkFunctionsPage.style = "display: block";
    UserPage.style = "display: none";
    HelpPage.style = "display: none";
    MessagePage.style = "display: none";
    SettingPage.style = "display: none";
    if (count % 2 == 1) {
        NFlist.style = "opacity: 1; transition: 0.3s 0.3s;";
        count++;
    } else {
        NFlist.style = "opacity: 0;";
        NFlist.style = "display: none";
        count++;
    }
});

function CloseNFlist() {
    user.classList.remove("active");
    NFlist.style = "display: none";
}
toggle_close.onclick = function () {
    CloseNFlist();
    count = 1;
};


User.addEventListener("click", function (e) {
    MainPage.style = "display: none";
    NetworkFunctionsPage.style = "display: none";
    UserPage.style = "display: block";
    HelpPage.style = "display: none";
    MessagePage.style = "display: none";
    SettingPage.style = "display: none";
    NFlist.style = "display: none";
    count = 1;
});

Help.addEventListener("click", function (e) {
    MainPage.style = "display: none";
    NetworkFunctionsPage.style = "display: none";
    UserPage.style = "display: none";
    HelpPage.style = "display: block";
    MessagePage.style = "display: none";
    SettingPage.style = "display: none";
    NFlist.style = "display: none";
    count = 1;
});

Message.addEventListener("click", function (e) {
    MainPage.style = "display: none";
    NetworkFunctionsPage.style = "display: none";
    UserPage.style = "display: none";
    HelpPage.style = "display: none";
    MessagePage.style = "display: block";
    SettingPage.style = "display: none";
    NFlist.style = "display: none";
    count = 1;
});

Settings.addEventListener("click", function (e) {
    MainPage.style = "display: none";
    NetworkFunctionsPage.style = "display: none";
    UserPage.style = "display: none";
    HelpPage.style = "display: none";
    MessagePage.style = "display: none";
    SettingPage.style = "display: block";
    NFlist.style = "display: none";
    count = 1;
});

// SignOut.addEventListener("click", function (e) {
//     MainPage.style = "display: none";
//     NetworkFunctionsPage.style = "display: none";
//     UserPage.style = "display: none";
//     HelpPage.style = "display: none";
//     MessagePage.style = "display: none";
//     SettingPage.style = "display: none";
//     NFlist.style = "display: none";
//     count = 1;
// });

//#endregion PagesControl

//#region PhotoControl
var CountForToggle = 0;

toggle_page.addEventListener("click", function (e) {
    if (CountForToggle % 2 == 1) {
        UserPictureDiv.style = "opacity: 1; transition: 0.2s";
        // Title_title.style = "opacity: 1; transition: 0.2s";
        CountForToggle++;
    } else {
        UserPictureDiv.style = "opacity: 0; transition: 0.2s";
        // Title_title.style = "opacity: 0 ; transition: 0.2s";
        CountForToggle++;
    }
});
//#endregion PhotoControl

//#region CardsControl
CardUser.addEventListener("click", function (e) {
    UsersDetails.style = "display: block";
    IoTDetails.style = "display: none";
    StationsDetails.style = "display: none";
    ErrorsDetails.style = "display: none";
});

CardIoT.addEventListener("click", function (e) {
    UsersDetails.style = "display: none";
    IoTDetails.style = "display: block";
    StationsDetails.style = "display: none";
    ErrorsDetails.style = "display: none";
});

CardStations.addEventListener("click", function (e) {
    UsersDetails.style = "display: none";
    IoTDetails.style = "display: none";
    StationsDetails.style = "display: block";
    ErrorsDetails.style = "display: none";
});

CardErrors.addEventListener("click", function (e) {
    UsersDetails.style = "display: none";
    IoTDetails.style = "display: none";
    StationsDetails.style = "display: none";
    ErrorsDetails.style = "display: block";
});
//#endregion CardsControl
function MainPageInitialPage() {
    MainPage.style = "display: block";
    NetworkFunctionsPage.style = "display: none";
    UserPage.style = "display: none";
    HelpPage.style = "display: none";
    MessagePage.style = "display: none";
    SettingPage.style = "display: none";
    NFlist.style = "display: none";
    CoreStatus.style = "display: none";
}

function DashboardInitialPage() {
    UsersDetails.style = "display: block";
    IoTDetails.style = "display: none";
    StationsDetails.style = "display: none";
    ErrorsDetails.style = "display: none";
}

SignOut.addEventListener("click", function (e) {
    Login.style = "display: block";
});

Login.addEventListener("click", function (e) {
    Login.style = "display: none";
});

//#region NetworkFunctionsPage
var CoreSwitchCount = 1;
CoreSwitch.addEventListener("click", function (e) {
    CoreSwitchCount++;
    setTimeout(function(){
        if (CoreSwitchCount % 2 == 1){
            NFcontainer.style = "display: block";
            CoreStatus.style = "display: none";
        }
        else{
            NFcontainer.style = "display: none";
            CoreStatus.style = "display: block";
        }
    },500)

    
});



//#endregion NetworkFunctionsPage
