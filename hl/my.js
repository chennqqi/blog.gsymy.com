/*
 * 注意：本程序中的“随机”都是伪随机概念，以当前的天为种子。
 */
function random(dayseed, indexseed) {
	var n = dayseed % 11117;
	var r;
	for (var i = 0; i < 100 + indexseed; i++) {
		n = n * n + 11117;
		n = n % 11117;   // 11117 是个质数
	}
	return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
var weeks = ["日","一","二","三","四","五","六"];
var directions = ["北方","东北方","东方","东南方","南方","西南方","西方","西北方"];
var activities = [
	{name:"写单元测试", good:"写单元测试将减少出错",bad:""},
	{name:"洗澡", good:"你几天没洗澡了？",bad:"会把设计方面的灵感洗掉"},
	{name:"捡肥皂", good:"安全无事",bad:"你懂的"},
	{name:"约会/相亲", good:"很容易获得好感",bad:""},
	{name:"理发", good:"你几个月没理发了？",bad:""},
	{name:"抽烟", good:"抽烟有利于提神，增加思维敏捷",bad:"导致思路混乱，程序写不出"},
	{name:"锻炼一下身体", good:"有助于减肥",bad:"能量没消耗多少，吃得却更多"},
	{name:"代码重构", good:"代码质量得到提高",bad:"你很有可能会陷入泥潭"},
	{name:"使用%v1", good:"你看起来更有品位",bad:"别人会觉得你在装逼"},
	{name:"招人", good:"你遇到千里马的可能性大大增加",bad:"你只会招到混饭吃的外行"},
	{name:"申请加薪", good:"老板今天心情很好",bad:""},
	{name:"晚上加班", good:"晚上是程序员精神最好的时候",bad:"事倍功半"},
	{name:"在妹子面前吹牛", good:"改善你矮穷挫的形象",bad:"会被识破"},
	{name:"提交代码", good:"遇到冲突的几率是最低的",bad:"遇到代码冲突"},
	{name:"代码复审", good:"可以发现重要问题",bad:"什么问题都发现不了"},
	{name:"开会", good:"写代码之余放松一下打个盹，有益健康",bad:"你会被扣屎盆子背黑锅"},
	{name:"下班玩%v3", good:"你将有如神助",bad:"你会被虐的很惨"},
	{name:"修复BUG", good:"你今天对BUG的嗅觉大大提高",bad:"新产生的BUG将比修复的更多"},
	{name:"设计评审", good:"设计评审会议将变成头脑风暴",bad:"人人筋疲力尽，评审就这么过了"},
	{name:"需求变更", good:"",bad:"还让不让人活了？"},
	{name:"上微博", good:"今天发生的事不能错过",bad:"会被上司看到"},
	{name:"打球", good:"劳逸结合",bad:"小心受伤"},
	{name:"买彩票", good:"很有可能有不错的收获",bad:"把钱扔水里"},
	{name:"请假", good:"得到更好的休息",bad:""},
	{name:"请销售mm喝茶", good:"也许会有不错的收获",bad:"被当成色狼"},
	{name:"郊游", good:"放松心情，亲近大自然",bad:""},
	{name:"上班%v4", good:"还需要理由吗？",bad:"会被上司看到"}
];

var specials = [
	{date:20130219, type:'good', name:'恭喜姚远喜得贵子', description:''}
];

var tools = ["记事本写程序", "Windows8", "Linux", "MacOS", "QQ浏览器", "三星手机", "iphone"];

var food = ["麦当劳", "肯德基", "老盛昌", "盒饭", "四海游龙", "自己带的饭", "永和大王", "生煎锅贴", "批萨","甜点","肉包子","火锅",'蛋包饭',"牛排","鸡公煲","村夫烤鱼","麻辣烫","桂林米粉","鸿盛兴","咖喱饭"];

var drinks = ["水","红茶","绿茶","咖啡","奶茶","卡布基诺","牛奶","豆奶","果汁","果味汽水","可乐","运动饮料","酸奶","酒"];

var clothing_color = ["花色","红色", "橙色", "黄色", "绿色", "青色", "蓝色", "紫色", "黑色", "白色", "灰色", "褐色", "豹纹"];

var clothing = ["外套", "衬衫", "内衣", "T恤", "赤膊"];

var clothing2 = ["内裤", "裤子", "鞋子", "袜子", "帽子"];

var game = ["Dota","暗黑3","魔兽世界","CS","魔兽争霸","植物大战僵尸","愤怒的小鸟"];

var yang = ["放羊","玩游戏","看电影","看无聊网站","QQ和MM聊天","看猥琐图"];

var vehicle = ["坐出租车","骑自行车","开汽车","坐地铁","骑摩托车","开电瓶车","步行"];

var place = ["陆家嘴","公园","公司","购物","探亲","拜访好友","约会"];

var who = ["黄晶晶",
"史玉柱",
"古永锵",
"周　寰",
"李国庆",
"洪　波",
"侯小强",
"刘强东",
"李东生",
"王龙宇",
"姚劲波",
"叶　朋",
"方兴东",
"冯　军",
"唐　骏",
"林正刚",
"丁　珂",
"刘成敏",
"傅　盛",
"牟长青",
"何小鹏",
"卜广齐",
"李开复",
"马化腾",
"马　云",
"雷　军",
"程　浩",
"李兴平",
"王　微",
"丁　磊",
"张朝阳",
"蒋　磊",
"李　想",
"龚海燕",
"陈　年",
"陈　彤",
"陈格雷",
"范　敏",
"陈天桥",
"邢  明",
"朱威廉",
"求伯君",
"张树新",
"马化腾",
"周鸿祎",
"刘　爽",
"张宏江",
"王汉华",
"凌　洁",
"张力军",
"李　松",
"冯　鑫",
"王建岗",
"王秀娟",
"唐　彬",
"林　斌",
"刘成敏",
"王育林",
"龙　伟",
"吴少岩",
"张少锋",
"简　昉",
"李　敬",
"毛　伟",
"邵炜棣",
"田范江",
"张　远",
"王　淳",
"胡泽民",
"齐向东",
"董本洪",
"陈　罡",
"王利峰",
"余　晨",
"肖　峰",
"王鹏飞",
"庄辰超",
"朱　波",
"程　浩",
"陈世坤",
"李善友",
"黄晓丐",
"张　涛",
"李　想",
"李彦宏",
"王　汉",
"王小川",
"王晓辉",
"顾建兴",
"甄荣辉",
"王雷雷",
"郭　盛",
"李　斌",
"陈　升",
"陈一舟",
"崔广福",
"刘晓松",
"贾跃亭",
"郑锡贵",
"张　涛",
"朱　骏",
"赵丽颖",
"霍建华",
"angelababy",
"杨洋",
"陈学冬",
"鹿晗",
"唐嫣",
"孙海英",
"范冰冰",
"胡歌",
"郑爽",
"林心如",
"金星",
"李易峰",
"周杰伦",
"毕福剑",
"杨幂",
"李晨",
"吴亦凡",
"钟汉良",
"刘亦菲",
"黄子韬",
"胡冰卿",
"印小天",
"袁立",
"少女时代",
"周星驰",
"张泉灵",
"马可",
"权志龙",
"迪丽热巴",
"宋智孝",
"郭德纲",
"蒋欣",
"张翰",
"霍思燕",
"欧阳娜娜",
"柳岩",
"汪峰",
"苍井优",
"赵薇",
"古力娜扎",
"陈赫",
"刘诗诗",
"邓超",
"宋小宝",
"林青霞",
"林正英",
"刘洲成",
"金钟国",                                                                 
"余剑"];

var where = ["外滩","公司","会议室","厕所","夏威夷","珠穆朗玛峰","家里","麦当劳","沙滩"];

var dosth = ["跳肚皮舞","看美女","搓麻将","炸金花","玩DOTA","写代码","洗桑拿","听神曲忐忑","打实况足球","嗑瓜子","劫色","吹牛逼","看国足比赛"];

var star = ["蜘蛛侠","绿巨人","凤姐","喜羊羊","超人","芙蓉姐姐","肯德基老爷爷","老版","范冰冰","梅西"];

function getTodayString() {
	return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}

// 生成今日运势
function pickTodaysLuck() {
	var numGood = 2;
	var numBad = 2;
	var eventArr = pickRandom(numGood + numBad);
	
	var specialSize = pickSpecials();
	
	for (var i = 0; i < numGood; i++) {
		addToGood(eventArr[i]);
	}
	
	for (var i = 0; i < numBad; i++) {
		addToBad(eventArr[numGood + i]);
	}
}

// 添加预定义事件
function pickSpecials() {
	var specialSize = [0,0];
	
	for (var i = 0; i < specials.length; i++) {
		var special = specials[i];
		
		if (iday == special.date) {
			if (special.type == 'good') {
				specialSize[0]++;
				addToGood({name: "<font style='color:red'>"+special.name+"</font>", good: special.description});
			} else {
				specialSize[1]++;
				addToBad({name: special.name, bad: special.description});
			}
		}
	}
	
	return specialSize;
}

// 从 activities 中随机挑选 size 个
function pickRandom(size) {
	var result = [];
	
	for (var i = 0; i < activities.length; i++) {
		result.push(parse(activities[i]));
	}
	
	for (var j = 0; j < activities.length - size; j++) {
		var index = random(iday, j) % result.length;
		result.splice(index, 1);
	}
	
	return result;
}

// 解析占位符并替换成随机内容
function parse(event) {
	var result = {name: event.name, good: event.good, bad: event.bad};  // clone
	
	if (result.name.indexOf('%v1') != -1) {
		result.name = result.name.replace('%v1', tools[random(iday, 3) % tools.length]);
	}
	
	if (result.name.indexOf('%v2') != -1) {
		result.name = result.name.replace('%v2', food[random(iday, 5) % food.length]);
	}
	
	if (result.name.indexOf('%v3') != -1) {
		result.name = result.name.replace('%v3', game[random(iday, 7) % game.length]);
	}
	
	if (result.name.indexOf('%v4') != -1) {
		result.name = result.name.replace('%v4', yang[random(iday, 9) % yang.length]);
	}
	
	return result;
}

// 添加到“宜”
function addToGood(event) {
	$('.good .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
	$('.bad .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.bad + '</div></li>');
}

$(function(){
	$('.date').html(getTodayString());
	$('.direction_value').html(directions[random(iday, 2) % directions.length]);
	$('.drink_value').html(drinks[random(iday, 5) % drinks.length]);
	$('.eat_value').html(food[random(iday, 3) % food.length]);
	var clothing1 = clothing[random(iday, 11) % clothing.length];
	if(clothing1 != '赤膊')
		$('.clothingColor_value').html(clothing_color[random(iday, 13) % clothing_color.length]);
	$('.clothing_value').html(clothing1);
	$('.clothingColor_value2').html(clothing_color[random(iday, 17) % clothing_color.length]);
	$('.clothing_value2').html(clothing2[random(iday, 19) % clothing2.length]);
	$('.vehicle').html(vehicle[random(iday, 21) % vehicle.length]);
	$('.place').html(place[random(iday, 23) % place.length]);
	$('.event').html(who[random(iday, 25) % who.length] + "<font style='color:black'>和</font>" +star[random(iday, 26) % star.length] + "<font style='color:black'>在</font>" + where[random(iday, 31) % where.length] + dosth[random(iday, 33) % dosth.length]);
	var starHtml = "";
	for(var i = 0; i < 5; i++)
	{
		var _star = who[random(iday, i+32) % who.length];
		if(starHtml.indexOf(_star) == -1)
		{
			starHtml += "<span>"+_star+"<span> "
		}
	}
	$('.star').html(starHtml);
	pickTodaysLuck();
});