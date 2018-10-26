! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ShareThisViaTwitter = e.ShareThisViaTwitter || {})
}(this, function(e) {
    "use strict";
    function t(e, t, n) {
        var r = this.getText(e),
            o = this.getShareUrl(r, n);
        return '<a href="' + o + '" target="_blank" rel="noopener nofollow noreferrer"><i class="dii-twitter" /></a>'
    }
    function n(e) {
        var t = e.trim();
        return t.length > i - 2 && (t = t.slice(0, i - 3).trim() + "…"), "“" + t + "”"
    }
    function r(e, t) {
        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(e) + "&url=" + encodeURIComponent(t)
    }
    function o(e, t) {
        e.preventDefault();
        var n = t.ownerDocument.defaultView.open(t.firstChild.href, "share_via_twitter", "height=440,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,width=640");
        n.opener = null
    }
    var i = 120,
        a = "twitter";
    e.render = t, e.getText = n, e.getShareUrl = r, e.action = o, e.name = a, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
