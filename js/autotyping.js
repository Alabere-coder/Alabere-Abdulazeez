const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["I am ALABERE", "web developer", "", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});




var AutoTyping = (function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
        (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (r.r(n),
                    Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                    2 & t && "string" != typeof e)
            )
                for (var i in e)
                    r.d(
                        n,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 0))
    );
})([
    function (e, t, r) {
        "use strict";
        r.r(t);
        t.default = class {
            constructor(
                e,
                t,
                {
                    typeSpeed: r = 150,
                    deleteSpeed: n = 150,
                    waitBeforeDelete: i = 1e3,
                    waitBetweenWords: o = 1e3,
                    writeWhole: l = !1,
                } = {}
            ) {
                (this.selector = e),
                    (this.text = t),
                    (this.typeSpeed = r),
                    (this.deleteSpeed = n),
                    (this.waitBeforeDelete = i),
                    (this.waitBetweenWords = o),
                    (this.writeWhole = l),
                    (this.el = document.querySelector(e));
            }
            async start() {
                this.el;
                for (let e = 0; e < this.text.length; e++) {
                    const t = this.text[e];
                    let r = t.split("");
                    this.writeWhole && (r = [t]),
                        await this.writeText(r),
                        e == this.text.length - 1 && (e = -1);
                }
            }
            writeText(e) {
                let t = this;
                return new Promise((r) => {
                    const n = this.el;
                    let i = !1,
                        o = setInterval(() => {
                            let l = e.shift();
                            i && ((i = !1), (l = " " + l)),
                                (i = " " == l),
                                (n.innerText += l),
                                0 == e.length &&
                                (clearInterval(o),
                                    setTimeout(() => {
                                        let e = setInterval(() => {
                                            const i = n.innerText;
                                            t.writeWhole
                                                ? (n.innerText = "")
                                                : (n.innerText = i.substr(0, i.length - 1)),
                                                0 == n.innerText.length &&
                                                (clearInterval(e),
                                                    setTimeout(() => r(), this.waitBetweenWords));
                                        }, this.deleteSpeed);
                                    }, this.waitBeforeDelete));
                        }, this.typeSpeed);
                });
            }
        };
    },
]).default;


const exampleText = ['Front-End', 'web', 'Developer'];
const exampleTyping = new AutoTyping('#text', exampleText, {
    typeSpeed: 100,
    deleteSpeed: 100,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
});
exampleTyping.start()