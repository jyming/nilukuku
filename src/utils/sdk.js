!(function (w) {
	var n = navigator.userAgent,
		version = "";
	if (n.indexOf("Android") > -1) {
		version = "Android";
	} else if (n.indexOf("iPhone") > -1) {
		version = "iPhone";
	}

	var workData = function (info) {
		if (typeof info == "string") {
			info = JSON.parse(info);
		}
		return info;
	};

	function Labor() {
		this.send = function (type, refInfo) {
			if (version == "iPhone") {
				try {
					w.webkit.messageHandlers.sendContent.postMessage(type);
				} catch (e) {
					if (refInfo) {
						refInfo({
							error: "no data"
						});
					} else {
						console.log(e);
					}
				}
			} else if (version == "Android") {
				try {
					w.AndroidWebView.showInfoFromJs(type);
				} catch (e) {
					if (refInfo) {
						refInfo({
							error: "no data"
						});
					} else {
						console.log(e);
					}
				}
			} else {
				if (refInfo) {
					refInfo({
						error: "no data"
					});
				}
			}
		};
	}
	// 获取用户信息
	Labor.prototype.getUserInfo = function (fn) {
		w.refInfo = function (data) {
			fn(workData(data));
		};
		this.send("userInfo", w.refInfo);
	};
	// 获取活动serialNum
	Labor.prototype.getCurrentActivityNo = function (fn) {
		w.$serialNum = function (data) {
			fn(workData(data));
		};
		this.send("serialNum", w.$serialNum);
	};
	// 获取活动code
	Labor.prototype.getActivityCode = function (fn) {
		w.$activityCode = function (data) {
			fn(workData(data));
		};
		this.send("activityCode", w.$activityCode);
	};
	//   获取openId
	Labor.prototype.getOpenId = function (clientId, fn) {
		w.refInfo = function (data) {
			fn(workData(data));
		};
		this.send("code," + clientId, w.refInfo);
	};
	//   获取积分
	Labor.prototype.getScore = function (fn) {
		w.$score = function (data) {
			fn(workData(data));
		};
		this.send("score", w.$score);
	};
	//   获取会员状态
	Labor.prototype.getLaborStatus = function (fn) {
		w.$laborStatus = function (data) {
			fn(workData(data));
		};
		this.send("laborStatus", w.$laborStatus);
	};
	// 打开登录页
	Labor.prototype.openLogin = function () {
		this.send("login");
	};
	// 关闭当前页面
	Labor.prototype.closeWin = function () {
		this.send("finish");
	};
	// 获取设备信息
	Labor.prototype.getLocation = function (fn) {
		w.$location = function (data) {
			fn(workData(data));
		};
		this.send("location", w.$location);
	};
	// 打开微信小程序
	Labor.prototype.openWxapp = function (wxId, path) {
		path = path ? "," + path : "";
		this.send("openWxapp," + wxId + path);
	};
	// 打开地图
	Labor.prototype.openMap = function (params, fn) {
		if (!params) {
			console.error("params不能为空");
			return;
		}
		w.$cmap = function (data) {
			fn(workData(data));
		};
		this.send("openMap-" + JSON.stringify(params), w.$cmap);
	};
	// 拨打电话
	Labor.prototype.callPhone = function (tel) {
		if (!tel) {
			console.error("手机号不能为空");
			return;
		}
		this.send("callPhone," + tel);
	};
	// 隐藏标题
	Labor.prototype.hideBar = function () {
		this.send("hideBar");
	};
	// 获取区县编码
	Labor.prototype.getDistrictCode = function (fn) {
		w.$districtCode = function (data) {
			fn(workData(data));
		};
		this.send("districtCode", w.$districtCode);
	};
	// 打开视频播放器（仅安卓）
	Labor.prototype.videoPlay = function (url) {
		this.send("videoPlay," + url);
	};
	w.labor = new Labor();
})(window);