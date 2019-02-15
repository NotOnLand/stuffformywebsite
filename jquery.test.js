! function(a) {
  a.fn.BloggerDynamicSlider = function(b) {
    var c = a.extend({
      blogURL: "",
      labelName: "",
      maxItem: 6,
      showPostTitle: !0,
      postTitleStyle: "default",
      imageWidth: 544,
      imageHeight: 280,
      animation: "fade",
      controlNav: !0,
      directionNav: !0,
      pauseOnHover: !1,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      animationLoop: !0
    }, b);
    return this.each(function() {
      var b = a(this),
        d = b.attr("id"),
        e = c.blogURL + "/feeds/posts/summary/" + (0 == c.labelName.length ? "" : "-/" + c.labelName.replace(/\,(\s+)?/g, "/")) + "?max-results=" + c.maxItem + "&orderby=published&alt=json-in-script";
      a.ajax({
        type: "GET",
        url: e,
        async: !1,
        contentType: "application/json",
        dataType: "jsonp",
        success: function(a) {
          var f, g, h, i, j, k, l, m, n, o, p, q, e = a.feed.entry || [];
          for (f = "", f += '<div class="flexslider loading" style="max-width:' + c.imageWidth + 'px">', f += '<ul class="slides">', g = 0; g < e.length; ++g) {
            for (i = e[g], j = i.title.$t, k = i.media$thumbnail ? i.media$thumbnail.url : "http://3.bp.blogspot.com/-sWtp_qRPNT8/UZYmQq5sAdI/AAAAAAAAEec/7YDbpK4Q6g8/s72-c/default+image.png", l = k.replace("s72-c", "w" + c.imageWidth + "-h" + c.imageHeight + "-c"), m = i.link || [], h = 0; h < m.length && "alternate" != m[h].rel; ++h);
            n = m[h].href, o = '<img src="' + l + '" width="' + c.imageWidth + '" height="' + c.imageHeight + '"/>', p = c.showPostTitle ? '<p class="flex-caption' + ("default" == c.postTitleStyle ? "" : " " + c.postTitleStyle) + '"><span>' + j + "</span></p>" : "", q = '<a href="' + n + '" target="_blank">' + o + p + "</a>", f += '<li data-thumb="' + l + '" ><div>' + q + '</div></li>'
          }
          f += "</ul></div>", f += '<style type="text/css">#' + d + " .flexslider.loading {min-height:" + c.imageHeight + "px !important;}</style>", b.append(f)
        },
        error: function(a, c, d) {
          b.append('<div class="error"><p>No Result! Or Error Loading Feed</p></div')
        },
        complete: function() {
          a("#" + d + " .flexslider").flexslider({
            animation: c.animation,
            controlNav: c.controlNav,
            directionNav: c.directionNav,
            pauseOnHover: c.pauseOnHover,
            slideshowSpeed: c.slideshowSpeed,
            animationSpeed: c.animationSpeed,
            animationLoop: c.animationLoop
          });
          var b = a("#" + d + " .flexslider ul.slides li a img"),
            e = 0;
          b.on("load", function() {
            if (e++, e == b.length - 1) {
              var c = a("#" + d + " .flexslider").data("flexslider");
              c.animating = !1, c.flexAnimate(0), a("#" + d + " .flexslider").removeClass("loading")
            }
          })
        }
      })
    })
  }
}(jQuery);
