export.run = function(inDat, callback){
	console.log();
	var list = {
		{date:"1102", name:"aa", money:"100"},
		{date:"1103", name:"bb", money:"1000"}
	};
	
	callback({
		errCode:0,
		message:"ok",
		value:{list:list}
	});
}