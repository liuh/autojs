function Robot() {

    this.click = function (x, y) {
        return click(x, y);
    };
    this.clickCenter = function (widget) {
        if (!widget)
            return false;
        let rect = widget.bounds();
        return click(rect.centerX(), rect.centerY());
    };
    this.clickSelectorCenter = function (selector) {
        if (!selector)
            return false;
        let widget = selector.findOne(2000);
        return this.clickCenter(widget);
    };
    this.clickMulti = function (points, interval) {
        points.forEach(function (point) {
            this.click(point[0], point[1]);
            sleep(interval);
        }.bind(this));
    };

    this.clickMultiCenter = function (widgets) {
        if (!widgets || widgets.length == 0)
            return;

        var points = [];
        widgets.forEach(function(widget) {
            var rect = widget.bounds();
            points.push([rect.centerX(), rect.centerY()]);
        });
        this.clickMulti(points);
    };
    this.clickIdCenter = function (idStr) {
        if (!idStr)
            return false;
        return this.clickSelectorCenter(id(idStr));
    };
    this.clickTextCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(text(str));
    };
    this.clickRegTextCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(textMatches(str));
    };
    this.clickDescCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(desc(str));
    };
    this.clickRegDescCenter = function (str) {
        if (!str)
            return false;
        return this.clickSelectorCenter(descMatches(str));
    };

    this.clickClassCenter = function (classNameStr) {
        if (!className)
            return false;
        return this.clickSelectorCenter(className(classNameStr));
    };



    this.swipe = function (x1, y1, x2, y2, duration) {
        swipe(x1, y1, x2, y2, duration);
    };
    this.back = function () {
        Back();
    };
    this.shell = function (command) {
        shell(command, true);
    };
    this.launchActivity = function (packageName, activityName) {
        shell("am start -n " + packageName + "/" + activityName, true);
        waitForActivity(activityName);
    };
    this.kill = function (packageName) {
        shell("am force-stop " + packageName, true);
    };
    this.before = function (ignoreSleep) {
        let source = engines.myEngine().source.toString();
        source = source.replace("/storage/emulated/0/脚本/", "");
        toast("开始执行[" + source + "]...");
        
        const WIDTH = Math.min(device.width, device.height);
        const HEIGHT = Math.max(device.width, device.height);
        setScreenMetrics(WIDTH, HEIGHT);
        if (!ignoreSleep)
            sleep(random() * 10000); //随机睡眠[0-10]秒, 使签到\打卡时间不固定
    };
    this.after = function () {
        let source = engines.myEngine().source.toString();
        source = source.replace("/storage/emulated/0/脚本/", "");
        toast("结束执行[" + source + "]...");
        exit();
    };
}

module.exports = Robot;