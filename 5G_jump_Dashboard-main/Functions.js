let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let NetworkFunctions = document.querySelector(".NFs");
let NFList = document.querySelector(".NFlist");
let user = document.querySelector(".user");
let main = document.querySelector(".main");
let topbar = document.querySelector(".topbar");
const nflist = document.getElementById("NFlist");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    topbar.classList.toggle("active");
};

NetworkFunctions.onclick = function () {
    // NFList.classList.toggle("active");
    user.classList.toggle("active");
};

// add hovered class inselected list item
let list = document.querySelectorAll(".navigation li");
// let navlist = document.querySelectorAll(".NFlist li");
function activelink() {
    list.forEach((item) => item.classList.remove("hovered"));
    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activelink));
function closeNFlist() {
    user.classList.remove("active");
    NFlist.style = "display: none";
}
list[0].onclick = function () {
    closeNFlist();
};
list[2].onclick = function () {
    closeNFlist();
};
list[3].onclick = function () {
    closeNFlist();
};
list[4].onclick = function () {
    closeNFlist();
};
list[5].onclick = function () {
    closeNFlist();
};
list[6].onclick = function () {
    closeNFlist();
};
