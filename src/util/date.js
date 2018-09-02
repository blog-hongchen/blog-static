Date.prototype.format = function (pattern) {
	/*初始化返回值字符串*/
	var returnValue = pattern;
	/*正则式pattern类型对象定义*/
	var format = {
		"y+": this.getFullYear(),
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"H+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"S": this.getMilliseconds(),
		"h+": (this.getHours() % 12),
		"a": (this.getHours() / 12) <= 1 ? "AM" : "PM"
	};
	/*遍历正则式pattern类型对象构建returnValue对象*/
	for (var key in format) {
		var regExp = new RegExp("(" + key + ")");
		if (regExp.test(returnValue)) {
			var zero = "";
			for (var i = 0; i < RegExp.$1.length; i++) {
				zero += "0";
			}
			var replacement = RegExp.$1.length == 1 ? format[key] : (zero + format[key]).substring((("" + format[key]).length));
			returnValue = returnValue.replace(RegExp.$1, replacement);
		}
	}
	return returnValue;
};

Date.prototype.formatYearDateTime = function (timestamp) {
	var date = typeof timestamp == "number" ? new Date(parseInt(timestamp)) : new Date(timestamp);
	var y = date.getFullYear(),
		m = date.getMonth() + 1,
		d = date.getDate(),
		h = date.getHours(),
		mm = date.getMinutes(),
		ss = date.getSeconds();
	if (m < 10) m = '0' + m;
	if (d < 10) d = '0' + d;
	if (h < 10) h = '0' + h;
	if (mm < 10) mm = '0' + mm;
	if (ss < 10) ss = '0' + ss;
	return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ":" + ss;
};
Date.prototype.formatYearMonth = function (timestamp) {
	var date = new Date(parseInt(timestamp));
	var y = date.getFullYear(),
		m = date.getMonth() + 1,
		d = date.getDate(),
		h = date.getHours(),
		mm = date.getMinutes(),
		ss = date.getSeconds();
	if (m < 10) m = '0' + m;
	if (d < 10) d = '0' + d;
	if (h < 10) h = '0' + h;
	if (mm < 10) mm = '0' + mm;
	if (ss < 10) ss = '0' + ss;
	return y + '-' + m;
}