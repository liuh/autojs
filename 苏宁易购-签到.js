auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);


robot.kill("com.suning.mobile.ebuy");
sleep(2000);
robot.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 438302433402132323023294E64756E647B3C61657E6368664C6167637D303873303430303030303B336F6D607F6E656E647D336F6D6E23757E696E676E2D6F62696C656E256265797F236F6D6E23757E696E676E2D6F62696C656E257367767E25796E2755626659656771436479667964797B335E2261636B67627F657E646D38647470737523314522364522364679607E23757E696E676E236F6D6522364D652236447F694E6465687E28647D6B396E237F657273656D303B335E216469446D38647470737523314522364522364679607E23757E696E676E236F6D6522364D652236447F694E6465687E28647D6B335E277562667965677F537F657273656D3525453522413529353525473521443522414D2525493521463529363525493521413522453D2B356E64602165747F6A637D25254835283245283645254535214545283135254635293835293335254835224435214445254735214445224545254535283835224030206020602");
waitForActivity("com.suning.mobile.ucwv.ui.WebViewActivity");
sleep(6000);
robot.click(914, 348); //进入签到页
sleep(5000);
if (text("连续参与才能继续膨胀哦~").exists()) {
    robot.click(540, 1281); //关闭弹窗: 我知道了
    sleep(1000);
}
if (textStartsWith("恭喜你！").exists()) { // 恭喜你！连续膨胀了7天
    robot.click(555, 1255); //关闭弹窗: 收下啦
    sleep(1000);
}

let signStrs = ["签到奖励", "云钻", "签到集up", "疯抢48小时"];
signStrs.forEach(function (str) {
    if (text(str).exists()) {
        robot.clickTextCenter(str);
        sleep(3000);
    }
});

robot.kill("com.suning.mobile.ebuy");
robot.after();