// Sitemapper creates sitemaps based on local A tags on a page.

__plugin__ = {
    meta:{
        "name":"Sitemapper for CMX",
        "short":"sitemapper",
        "version":"1.0",
        "author":"Byron Lewis Kellett",
        "year":"2016"
    },
	pages:[
        {"title":"Sitemapper","contentData":"Hello! This is a test!<button onclick='CMS.plugins.sitemapper.btn()'>Go!</button><div><code class='sitemapper-xml'></code></div>"}
    ],	xml:"",
     go:function(freq, priority) {
		CMS.renderPage("Sitemapper")
    },
	btn:function() {
        var pages = []
        // Sitemapper function
		CMS.pages.forEach(function (post) {
            pages.push("http://" + x + "/#!pages/" + post.id)
        });
        xmx = '<?xml version="1.0" ?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        pages.forEach(function (page) {
            xmx += "<url><loc>" + page + "</loc><lastmod>" + Date() + "</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>"
        });
       xmx += "</urlset>";
	$(".sitemapper-xml").text(xmx);
		
    }
};
