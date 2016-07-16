__plugin__ = {
    meta:{
        "name":"Pluginmenu",
        "short":"plugin_menu",
        "version":"1.0",
        "author":"Byron Lewis Kellett",
        "year":"2016"
    },
	go:function() {},
	refresh:function() {
		x = ""
		CMS.activePlugins.forEach(function (plugin) { x += "<button onclick='CMS.plugins[\"" + plugin + "\"].go()'>" + plugin + "</button>"; });
		$(".pluginmenu").html(x + "<button onclick='CMS.plugins.plugin_menu.refresh()'>REFRESH</button>");
	},
    init:function() {
		x = "";
		$(".pluginmenu").html("");
		CMS.activePlugins.forEach(function (plugin) { x += "<button onclick='CMS.plugins[\"" + plugin + "\"].go()'>" + plugin + "</button>"; });
        $("body").append("<div class='pluginmenu'><h1>Plugin Menu</h1>" + x + "<button onclick='CMS.plugins.plugin_menu.refresh()'>REFRESH</button></div>");
    }
};
