const APIURL = "http://192.168.190.102:8080/api";
const WEBSOCKETURL = "ws://192.168.190.102:8080/websocket/commodity/";


// 检测网络
function checkNet() {
	if (plus.networkinfo.getCurrentType() == 0 || plus.networkinfo.getCurrentType() == 1) {
		plus.nativeUI.alert("为了应用功能正常使用，请检查手机网络状态是否正常", function(){}, "信息框", "确定");
		return false;
	}
	return true;
}

/*
 * 点击跳转页面
 */
function goWhere(id) {
	if(plus.webview.getWebviewById(id)) {
		plus.webview.getWebviewById(id).show("pop-in", null);
	} else {
		var _openw = plus.webview.create(id, id, {
			scrollIndicator: 'none',
			scalable: false,
			popGesture: 'close'
		});
		_openw.show("pop-in", null);
	}
}

// 返回页面
function goback() {
	plus.webview.currentWebview().close("slide-out-left", null);
}

/**
 * 秒数转化为时分秒
 * @param {Object} timeStamp
 */
function timeStampAssembleHMS(timeStamp) {
	var hour = Math.floor(timeStamp/(60*60));
	var min = Math.floor((timeStamp%(60*60))/60);
	var second = timeStamp - hour*60*60 - min*60;
	hour = hour == 0 ? "" : hour + "小时";
	min = min == 0 ? "" : min + "分钟";
	second = second == 0 ? "" : second + "秒";
	return hour + min + second;
}