! function(e, o) {
    "object" == typeof exports && "undefined" != typeof module ? o(exports) : "function" == typeof define && define.amd ? define(["exports"], o) : o(e.ShareThisViaFacebook = e.ShareThisViaFacebook || {})
}(this, function(e) {
    "use strict";
    function o(e, o, n) {
        var r = this.getShareUrl(e, n);
        return '<a class="nav-link" href="' + r + '" target="_blank" rel="noopener nofollow noreferrer"><i class="dii-facebook" /></a>'
    }
    function n(e, o) {
        return "https://www.facebook.com/sharer/sharer.php?quote=" + encodeURIComponent(e) + "&u=" + encodeURIComponent(o)
    }
    function r(e, o) {
        e.preventDefault();
        var n = o.ownerDocument.defaultView.open(o.firstChild.href, "share_via_facebook", "height=440,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,width=640");
        n.opener = null
    }
    var t = "facebook";
    e.render = o, e.getShareUrl = n, e.action = r, e.name = t, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
