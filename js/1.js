define("p/index/index", ["base", "io", "event", "node", "dom", "util", "event-custom", "json", "anim", "ua"], function(e, t, n) {
	var a = e("base"),
		o = e("io"),
		r = e("event"),
		s = e("node"),
		l = e("dom"),
		c = e("util"),
		u = e("event-custom"),
		d = e("json"),
		f = e("anim"),
		p = e("ua");
	return function(e) {
		function t(i) {
			if(n[i]) return n[i].exports;
			var a = n[i] = {
				exports: {},
				id: i,
				loaded: !1
			};
			return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.p = "/build/", t(0)
	}([function(e, t, n) {
		n(26);
		var i = n(27),
			a = n(12),
			o = n(37),
			r = n(39),
			s = {
				init: function l() {
					new o, new i, new a, new r
				}
			};
		s.init(), e.exports = s
	}, , , function(e, t) {
		var n = location.href.indexOf("test") != -1 || "127.0.0.1" == location.hostname ? "test" : "cn",
			i = {
				env: n,
				host: "//api-gw.damai." + n + "/"
			};
		e.exports = i
	}, function(e, t) {
		e.exports = a
	}, function(e, t) {
		e.exports = o
	}, , function(e, t) {
		e.exports = r
	}, function(e, t) {
		e.exports = s
	}, function(e, t) {
		e.exports = l
	}, function(e, t) {
		e.exports = c
	}, function(e, t, n) {
		function a() {
			var e = this;
			e.loginkey = "", e.getPointOptions = function(e) {
				var t = {};
				if(!e.getAttribute("data-spm")) return t;
				var n = window.g_SPM && window.g_SPM.getParam(e) || {},
					i = e.getAttribute("data-alg") || "",
					a = e.getAttribute("data-href") || "";
				if(n && n.d) {
					var o = "",
						r = n.d.replace(/^i/, ""),
						s = encodeURIComponent(n.a + "." + n.b + "." + n.c + "." + r);
					t = {
						params: {
							spm: s
						},
						buryPoint: {
							pageUrl: a,
							"spm-url": s,
							alg: i,
							source: ""
						}
					}
				}
				return t
			}, e.getUA = function() {
				var e = {},
					t = navigator.userAgent.toLowerCase(),
					n;
				return(n = t.match(/edge\/([\d.]+)/)) ? e.edge = n[1] : (n = t.match(/rv:([\d.]+)\) like gecko/)) ? e.ie = n[1] : (n = t.match(/msie ([\d.]+)/)) ? e.ie = n[1] : (n = t.match(/firefox\/([\d.]+)/)) ? e.firefox = n[1] : (n = t.match(/chrome\/([\d.]+)/)) ? e.chrome = n[1] : (n = t.match(/opera.([\d.]+)/)) ? e.opera = n[1] : (n = t.match(/version\/([\d.]+).*safari/)) && (e.safari = n[1]), e
			}, e.getSpmStr = function(t) {
				var n = e.getPointOptions(t);
				return n && n.params && n.params.spm ? "&spm=" + n.params.spm : ""
			}, e.sendPoints = function(t, n) {
				var i = "&spm=" + e.getSpmStr(n);
				window.goldlog && window.goldlog.record("/damai_pc.default.click", "CLK", "locaid=" + t + i, "POST")
			}, e.sendGoldLog = function(t) {
				var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
					i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/damai_pc.default.click",
					a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "CLK",
					o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "GET";
				if(!window.goldlog) return !1;
				var r = e.getPointOptions(t);
				if(!r.params) return console.log("\u7f3a\u5c11D\u70b9\u53c2\u6570"), !1;
				var s = "";
				for(var l in n) s += s ? "&" + l + "=" + n[l] : l + "=" + n[l];
				var c = "spm=" + r.params.spm + ";" + s;
				window.goldlog.record(i, a, c, o)
			}, e.changeURLPar = function(e, t, n) {
				var a = "";
				if(e = e || location.href, e.indexOf("?") == -1) return e + "?" + t + "=" + n;
				a = e.substr(e.indexOf("?") + 1);
				var o = "",
					r = "",
					s, l = "0";
				if(a.indexOf("&") != -1) {
					s = a.split("&");
					for(i in s) s[i].split("=")[0] == t ? (r = n, l = "1") : r = s[i].split("=")[1], o = o + s[i].split("=")[0] + "=" + r + "&";
					o = o.substr(0, o.length - 1), "0" == l && o == a && (o = o + "&" + t + "=" + n)
				} else a.indexOf("=") != -1 ? (s = a.split("="), s[0] == t ? (r = n, l = "1") : r = s[1], o = s[0] + "=" + r, "0" == l && o == a && (o = o + "&" + t + "=" + n)) : o = t + "=" + n;
				return e.substr(0, e.indexOf("?")) + "?" + o
			}, e.getCookie = function(e) {
				var t = void 0,
					n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
				return(t = document.cookie.match(n)) ? t[2] : null
			}, e.delCookie = function(e) {
				var t = new Date;
				t.setTime(t.getTime() - 864e5);
				var n = "/",
					i = "damai." + r;
				document.cookie = e + "=;domain=" + i + ";path=/;expires=" + t.toGMTString(), document.cookie = e + "=;path=/;expires=" + t.toGMTString()
			}, e.setCookie = function(t, n, i) {
				e.delCookie(t), i = i || 2592e6;
				var a = new Date;
				a.setTime(a.getTime() + i), document.cookie = t + "=" + escape(n) + ";domain=damai." + r + ";expires=" + a.toGMTString() + ";path=/"
			}, e.getUrlParam = function(e, t) {
				t = t || location.search;
				var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
					i = t.substr(1).match(n);
				return null != i ? i[2] : ""
			}, e.checkLogin = function() {
				var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href,
					n = e.getCookie("damai.cn_user_new");
				return e.loginkey = e.getCookie("loginkey"), !n || !e.loginkey
			}, e.login = function() {
				var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
				return window.location.href = "//passport.damai." + r + "/login?ru=" + encodeURIComponent(e), !1
			}
		}
		var o = n(3),
			r = o.env,
			s = new a;
		e.exports = s
	}, function(e, t, n) {
		function i() {
			var e = [];
			b.jsonp(d + "navigation.html", {}, function(t) {
				t && t.data && t.data.length && (t.data.forEach(function(t, n) {
					e.push('<a href="' + t.schema + '" class="type-recommend" data-spm="dother' + n + '">' + t.title + "</a>")
				}), g(".recommend-header").append(e.join("")))
			})
		}

		function a(e) {
			location.hostname === "www.damai." + f && (e.find(".location-header").show(), b.jsonp(d + "cityList.html", {}, function(t) {
				if(!t || !t.hotCities || !t.allCities) return void console.log("\u83b7\u53d6\u57ce\u5e02\u5217\u8868\u5f02\u5e38");
				o(e, t.hotCities, ".hot-city .list-other"), o(e, t.allCities, ".other-city .list-other")
			}), e.find(".city-location").html(w), e.find(".now-city .name-city").html(w), e.delegate("click", ".name-city", function(e) {
				var t = g(e.target).html();
				t && (h("destCity", t), u.sendPoints("dselectcity&clicktitle=" + t, e.target), location.reload())
			}))
		}

		function o(e, t, n) {
			for(var i = "", a = 0, o = t.length; a < o; a++) {
				var r = t[a];
				i += "<span  class='name-city' data-spm='dselectcity&clicktitle=" + r + "'>" + r + "</span>"
			}
			e.find(n).html(i)
		}

		function r(e) {
			if(y && x) {
				var t = e.find(".user-header");
				e.find(".out-login").addClass("show"), e.find(".out-login").on("click", function() {
					for(var e = 0; e < m.length; e++) u.delCookie(m[e]);
					location.href = "//ipassport.damai." + f + "/logout.htm?site=18&toURL=" + encodeURIComponent(location.href) + u.getSpmStr(this)
				}), b.jsonp(d + "user.html", {
					loginkey: y
				}, function(t) {
					if(t && t.userNick) {
						var n = t;
						n.userImg = n.userImg || "https://img.alicdn.com/tfs/TB1SF.EBTtYBeNjy1XdXXXXyVXa-150-150.png", n.userImg = n.userImg.replace(/(http:|https:)/, ""), e.find(".i-user").attr("src", n.userImg + "?r=" + Math.random()), e.find(".J_userinfo_img").attr("href", e.find(".J_userinfo_name").attr("href")), e.find(".login-user").removeClass("show");
						var i = e.find(".name-user").html(n.userNick).addClass("show")
					}
				})
			}
		}

		function s(e) {
			var t = e.find(".input-search"),
				n = e.find(".list-search"),
				i = e.find(".btn-search"),
				a = null,
				o = 1,
				r = e.find(".search-header"),
				s = u.getUrlParam("keyword");
			s && t.val(decodeURIComponent(s)), i.on("click", function() {
				var e = u.getSpmStr(this);
				window.location.href = "//search.damai.cn/search.html?keyword=" + encodeURIComponent(t.val()) + e
			}), t.on("keyup", function(e) {
				var t = this,
					i = t.value;
				a && clearTimeout(a), a = setTimeout(function() {
					if(13 === e.keyCode) {
						var a = u.getSpmStr(t);
						return void(window.location.href = "//search.damai.cn/search.html?keyword=" + encodeURIComponent(i) + a)
					}
					if(!i) return n.html(""), void n.removeClass("search-border");
					r.addClass("on"), b.jsonp(d + "suggest.html", {
						keyword: i,
						destCity: w
					}, function(e) {
						var t = e,
							i = "";
						if(t && t.length) {
							for(var a = 0, o = t.length; a < o; a++) {
								var r = t[a];
								i += '<a href="//piao.damai.' + f + "/" + r.id + '.html" class="li-search" data-spm="ditem_' + a + '" target="_blank">\n\t\t\t\t\t\t\t\t<span class="title-search">' + r.name + '</span>\n\t\t\t\t\t\t\t\t<span class="city-search">' + r.cityName + "</span>\n\t\t\t\t\t\t\t</a>"
							}
							n.html(i), n.addClass("search-border")
						}
					})
				}, 100)
			})
		}

		function l(e) {
			e.on("mouseover", function() {
				e.addClass("on")
			}), e.on("mouseout", function() {
				e.removeClass("on")
			})
		}
		var c = n(3),
			u = n(11),
			d = c.host,
			f = c.env,
			p = u.getCookie,
			h = u.setCookie,
			m = "damai.cn_user,damai.cn_user_new,h5token,loginkey,user_id,damai_cn_user,damai.cn_email,damai.cn_nickName,x_hm_tuid,_tb_token_".split(","),
			v = n(4),
			g = n(8),
			b = n(5),
			w = u.getCookie("destCity");
		w = w ? unescape(w) : "\u5168\u56fd";
		var y = p("loginkey"),
			x = p("damai.cn_nickName");
		x = x ? unescape(x) : "";
		var _ = n(13),
			S = v.extend({
				initializer: function T() {
					var e = new _,
						t = g(".dm-header-wrap");
					a(t), r(t), s(t), i(t), l(t.find(".download-header")), l(t.find(".location-header")), g("body").on("click", function() {
						t.find(".search-header").removeClass("on")
					}), l(t.find(".user-header")), t.find(".span-user").on("click", function() {
						var e = this,
							t = u.getSpmStr(e);
						location.href = "//passport.damai." + f + "/login?ru=" + encodeURIComponent(location.href) + t
					});
					for(var n = g(".type-recommend"), o = 0, c = n.length; o < c; o++) {
						var d = g(n[o]);
						d.attr("href").indexOf(location.host) >= 0 ? d.addClass("select") : d.removeClass("select")
					}
				}
			}, {
				ATTRS: {}
			});
		e.exports = S
	}, function(e, t, n) {
		var i = n(3),
			a = i.env;
		n(14);
		var o = n(8),
			r = n(10),
			s = n(15),
			l = n(5),
			c = n(4),
			u = c.extend({
				initializer: function d() {
					var e = this;
					e.initScroll(), e.bindEvent(), e.getToken()
				},
				initScroll: function f() {
					var e = this,
						t = o(s());
					o("body").append(t);
					var n = t.one(".J_GoTop"),
						i = t.all(".item")[1];
					e.st = function() {
						o(window).scrollTop() <= 122 ? (n.hide(), o(i).css({
							"border-bottom-width": "0px"
						})) : "none" === n.css("display") && (n.show(), o(i).css({
							"border-bottom-width": "1px"
						}))
					}, e.st();
					var a = r.throttle(e.st, 40);
					o(window).on("scroll", a)
				},
				goTopAmi: function p() {
					var e = this;
					cancelAnimationFrame(e.timer), e.timer = requestAnimationFrame(function t() {
						var n = document.body.scrollTop || document.documentElement.scrollTop;
						n > 0 ? (document.body.scrollTop = document.documentElement.scrollTop = n - 150, e.timer = requestAnimationFrame(t)) : (cancelAnimationFrame(e.timer), e.st())
					})
				},
				bindEvent: function h() {
					var e = this;
					o("body").delegate("click", ".alime", function(t) {
						t.preventDefault(), e.showAlime()
					}, this), o(".J_GoTop").on("click", function() {
						e.goTopAmi()
					})
				},
				getToken: function m(e) {
					var t = this,
						n = "//online.damai.cn/alime/getDialogToken?from=damai_pc&jsonCallback=jsonCallback";
					window.jsonCallback = function(e) {
						e && e.token && (t.token = e.token)
					}, new l({
						type: "get",
						url: "//online.damai.cn/alime/getDialogToken?from=damai_pc&jsonCallback=jsonCallback",
						jsonpCallback: "jsonCallback",
						dataType: "jsonp"
					})
				},
				showAlime: function v() {
					var e = this,
						t = document.location.host;
					if("www.damai.cn" === t || "www.damai.test" === t) e.token ? e.openDialog() : window.open("//passport.damai.cn/login?ru=" + document.location.href);
					else {
						var n = "header_service";
						window.open("https://online.damai.cn/alime/toalime?from=damai_itemdetail&page=header_service")
					}
				},
				openDialog: function g() {
					var e = this;
					e.alicareDialog ? e.alicareDialog.ui.emit("openDialog") : e.initAlime(function() {
						e.alicareDialog.ui.emit("openDialog")
					})
				},
				initAlime: function b(e) {
					var t = this;
					window.alicareDialogAsyncInit = function(n) {
						t.alicareDialog = new n({
							from: "damai_pc",
							accessToken: t.token
						}), t.alicareDialog.onRendered(function(t) {
							e && e()
						})
					};
					var n = document.createElement("script");
					n.src = "//g.alicdn.com/crm/alicare-dialog/0.0.4/include.js", document.getElementsByTagName("body")[0].appendChild(n)
				}
			}, {
				ATTRS: {}
			});
		e.exports = u
	}, function(e, t) {}, function(e, t, n) {
		var i = n(16);
		e.exports = function() {
			var e = function n(e) {
				var t, n, i, a, o, r, s, l, c, u, d, f = this,
					p = f.root,
					h = f.buffer,
					m = f.scope,
					v = f.runtime,
					g = f.name,
					b = f.pos,
					w = m.data,
					y = m.affix,
					x = p.nativeCommands,
					_ = p.utils,
					S = _.callFn,
					T = _.callDataFn,
					k = _.callCommand,
					C = x.range,
					A = x["void"],
					I = x.foreach,
					N = x.forin,
					z = x.each,
					E = x["with"],
					L = x["if"],
					P = x.set,
					D = x.include,
					R = x.parse,
					O = x.extend,
					j = x.block,
					H = x.macro,
					X = x["debugger"];
				return h.data += '<div class="sidebar" data-spm="slidelayer">\n    <div class="item">\n        <a class="alime" href="//online.damai.cn/alime/index?from=damai_pc_item&v=3" target="_blank" data-spm="dcustomerservice">\n            <div class="icon service"></div>\n            <p>\u5728\u7ebf\u5ba2\u670d</p>\n        </a>\n    </div>\n    <div class="item">\n        <a href="javascript:void(0)" target="_blank">\n            <div class="icon damai"></div>\n            <p>APP\u4e0b\u8f7d</p>\n            <div class="qrcode">\n                <img src="//img.alicdn.com/tfs/TB1r0uFxHSYBuNjSspiXXXNzpXa-280-280.png" width="72" height="72" />\n            </div>\n        </a>\n    </div>\n    <div class="item J_GoTop" >\n        <div class="icon gotop"></div>\n        <p>\u56de\u5230\u9876\u90e8</p>\n    </div>\n</div>', h
			};
			if(this.root instanceof i) return e.apply(this, arguments);
			var t = new i(e);
			return t.render.apply(t, arguments)
		}
	}, function(e, t, n) {
		function i(e, t, n, i, a, o, r, s) {
			this.name = e, this.originalName = o || e, this.runtime = t, this.root = n, this.pos = {
				line: 1
			}, this.scope = i, this.buffer = a, this.fn = r, this.parent = s
		}

		function a(e, t, n) {
			var i = n[0],
				a = e && e[i] || t && t[i] || v[i];
			if(1 === n.length) return a;
			if(a)
				for(var o = n.length, r = 1; r < o; r++)
					if(!(a = a[n[r]])) return !1;
			return a
		}

		function o(e, t) {
			var n = e.split("/"),
				i = t.split("/");
			n.pop();
			for(var a = 0, o = i.length; a < o; a++) {
				var r = i[a];
				"." === r || (".." === r ? n.pop() : n.push(r))
			}
			return n.join("/")
		}

		function r(e, t, n, i, o, r) {
			var s, l, c;
			if(r || (c = a(e.runtime.commands, e.root.config.commands, o)), c) return c.call(e, t, n, i);
			if(c !== !1) {
				var u = o.slice(0, -1);
				if(null == (s = t.resolve(u, r))) return i.error("Execute function `" + o.join(".") + "` Error: " + u.join(".") + " is undefined or null"), i;
				if(l = s[o[o.length - 1]]) try {
					return l.apply(s, n.params || [])
				} catch(d) {
					return i.error("Execute function `" + o.join(".") + "` Error: " + d.message), i
				}
			}
			return i.error("Command Not Found: " + o.join(".")), i
		}

		function s(e, t) {
			var n = this;
			n.fn = e, n.config = h.merge(s.globalConfig, t), this.subNameResolveCache = {}
		}

		function l(e, t, n) {
			if("." !== t.charAt(0)) return t;
			var i = n + "_ks_" + t,
				a = e.subNameResolveCache,
				r = a[i];
			return r ? r : t = a[i] = o(n, t)
		}

		function c(e, t, n, i, a, o) {
			var r = l(e, o, a.name),
				s = i.insert(),
				c = s.next;
			return d(e, r, a.runtime, t, s, o, n, i.tpl), c
		}

		function u(e, t, n, a, o) {
			var r = n.insert(),
				s = r.next,
				l = new i(o.TPL_NAME, a.runtime, e, t, r, undefined, o, n.tpl);
			return r.tpl = l, f(l), s
		}

		function d(e, t, n, a, o, r, s, l) {
			var c = new i(t, n, e, a, o, r, undefined, l);
			o.tpl = c, e.config.loader.load(c, function(e, t) {
				"function" == typeof t ? (c.fn = t, f(c)) : e ? o.error(e) : (t = t || "", s ? o.writeEscaped(t) : o.data += t, o.end())
			})
		}

		function f(e) {
			var t = e.fn();
			if(t) {
				var n = e.runtime,
					i = n.extendTpl,
					a;
				if(i && !(a = i.params[0])) return t.error("extend command required a non-empty parameter");
				var o = n.extendTplFn,
					r = n.extendTplBuffer;
				return o ? (n.extendTpl = null, n.extendTplBuffer = null, n.extendTplFn = null, u(e.root, e.scope, r, e, o).end()) : a && (n.extendTpl = null, n.extendTplBuffer = null, c(e.root, e.scope, 0, r, e, a).end()), t.end()
			}
		}

		function p(e, t, n) {
			var i = t.params;
			if(!i[0]) return n.error("include command required a non-empty parameter");
			var a = e,
				o = i[1],
				r = t.hash;
			return r && (o = o ? h.mix({}, o) : {}, h.mix(o, r)), o && (a = new g(o, undefined, e)), a
		}
		var h = n(17),
			m = n(18),
			v = {},
			g = n(19),
			b = n(20),
			w = {
				callFn: r,
				callDataFn: function y(e, t) {
					for(var n = t[0], i = n, a = 1; a < t.length; a++) {
						var o = t[a];
						if(!i || null == i[o]) return "";
						n = i, i = i[o]
					}
					return i.apply(n, e || [])
				},
				callCommand: function x(e, t, n, i, a) {
					return r(e, t, n, i, a)
				}
			};
		h.mix(s, {
			config: function _(e, t) {
				var n = this.globalConfig = this.globalConfig || {};
				if(!arguments.length) return n;
				t !== undefined ? n[e] = t : h.mix(n, e)
			},
			nativeCommands: m,
			utils: w,
			util: h,
			addCommand: function S(e, t) {
				v[e] = t
			},
			removeCommand: function T(e) {
				delete v[e]
			}
		}), s.prototype = {
			constructor: s,
			Scope: g,
			nativeCommands: m,
			utils: w,
			removeCommand: function k(e) {
				var t = this.config;
				t.commands && delete t.commands[e]
			},
			addCommand: function C(e, t) {
				var n = this.config;
				n.commands = n.commands || {}, n.commands[e] = t
			},
			include: function A(e, t, n, i) {
				return c(this, p(e, t, n), t.escape, n, i, t.params[0])
			},
			includeModule: function I(e, t, n, i) {
				return u(this, p(e, t, n), n, i, t.params[0])
			},
			render: function N(e, t, n) {
				var a = "",
					o = this,
					r = o.fn,
					l = o.config;
				"function" == typeof t && (n = t, t = null), t = t || {}, n = n || function(e, t) {
					if(e) throw e instanceof Error || (e = new Error(e)), e;
					a = t
				};
				var c = o.config.name;
				!c && r && r.TPL_NAME && (c = r.TPL_NAME);
				var u;
				u = e instanceof g ? e : new g(e);
				var d = new s.LinkedBuffer(n, l).head,
					p = new i(c, {
						commands: t.commands
					}, o, u, d, c, r);
				return d.tpl = p, r ? (f(p), a) : (l.loader.load(p, function(e, t) {
					t ? (p.fn = o.fn = t, f(p)) : e && d.error(e)
				}), a)
			}
		}, s.Scope = g, s.LinkedBuffer = b, e.exports = s
	}, function(e, t) {
		(function(t) {
			function n() {
				var e = "";
				for(var t in i) e += t + "|";
				return e = e.slice(0, -1), o = new RegExp(e, "g")
			}
			var i = {
					"&": "&amp;",
					">": "&gt;",
					"<": "&lt;",
					"`": "&#x60;",
					"/": "&#x2F;",
					'"': "&quot;",
					"'": "&#x27;"
				},
				a = /[&<>"'`]/,
				o = n(),
				r = /\\?\{([^{}]+)\}/g,
				s = void 0 !== t ? t : window,
				l, c = Object.prototype.toString;
			e.exports = l = {
				isArray: Array.isArray || function(e) {
					return "[object Array]" === c.call(e)
				},
				keys: Object.keys || function(e) {
					var t = [],
						n;
					for(n in e) e.hasOwnProperty(n) && t.push(n);
					return t
				},
				each: function u(e, t, n) {
					if(e) {
						var i, a, o, r = 0,
							s = e && e.length,
							c = s === undefined || "[object Function]" === Object.prototype.toString.call(e);
						if(n = n || null, c)
							for(o = l.keys(e); r < o.length && (i = o[r], t.call(n, e[i], i, e) !== !1); r++);
						else
							for(a = e[0]; r < s && t.call(n, a, r, e) !== !1; a = e[++r]);
					}
					return e
				},
				mix: function d(e, t) {
					if(t)
						for(var n in t) e[n] = t[n];
					return e
				},
				globalEval: function f(e) {
					s.execScript ? s.execScript(e) : function(e) {
						s.eval.call(s, e)
					}(e)
				},
				substitute: function p(e, t, n) {
					return "string" == typeof e && t ? e.replace(n || /\\?\{([^{}]+)\}/g, function(e, n) {
						return "\\" === e.charAt(0) ? e.slice(1) : t[n] === undefined ? "" : t[n]
					}) : e
				},
				escapeHtml: function h(e) {
					return e = "" + e, a.test(e) ? (e + "").replace(o, function(e) {
						return i[e]
					}) : e
				},
				merge: function m() {
					for(var e = 0, t = arguments.length, n = {}; e < t; e++) {
						var i = arguments[e];
						i && l.mix(n, i)
					}
					return n
				}
			}
		}).call(t, function() {
			return this
		}())
	}, function(e, t, n) {
		var i = n(19),
			a = n(17),
			o = {
				range: function r(e, t) {
					var n = t.params,
						i = n[0],
						a = n[1],
						o = n[2];
					o ? (i > a && o > 0 || i < a && o < 0) && (o = -o) : o = i > a ? -1 : 1;
					for(var r = [], s = i; i < a ? s < a : s > a; s += o) r.push(s);
					return r
				},
				"void": function s() {
					return undefined
				},
				foreach: function l(e, t, n) {
					var a = t.params,
						o = a[0],
						r = a[2] || "xindex",
						s = a[1],
						l, c, u, d;
					if(o)
						for(l = o.length, d = 0; d < l; d++) c = new i(o[d], {
							xcount: l,
							xindex: d
						}, e), u = c.affix, "xindex" !== r && (u[r] = d, u.xindex = undefined), s && (u[s] = o[d]), n = t.fn(c, n);
					return n
				},
				forin: function c(e, t, n) {
					var a = t.params,
						o = a[0],
						r = a[2] || "xindex",
						s = a[1],
						l, c, u;
					if(o)
						for(u in o) l = new i(o[u], {
							xindex: u
						}, e), c = l.affix, "xindex" !== r && (c[r] = u, c.xindex = undefined), s && (c[s] = o[u]), n = t.fn(l, n);
					return n
				},
				each: function u(e, t, n) {
					var i = t.params,
						r = i[0];
					return r ? a.isArray(r) ? o.foreach(e, t, n) : o.forin(e, t, n) : n
				},
				"with": function d(e, t, n) {
					var a = t.params,
						o = a[0];
					if(o) {
						var r = new i(o, undefined, e);
						n = t.fn(r, n)
					}
					return n
				},
				"if": function f(e, t, n) {
					if(t.params[0]) {
						var i = t.fn;
						i && (n = i(e, n))
					} else {
						var a = !1,
							o = t.elseIfs,
							r = t.inverse;
						if(o)
							for(var s = 0, l = o.length; s < l; s++) {
								var c = o[s];
								if(a = c.test(e)) {
									n = c.fn(e, n);
									break
								}
							}!a && r && (n = r(e, n))
					}
					return n
				},
				set: function p(e, t, n) {
					for(var i = t.hash, a = i.length, o = 0; o < a; o++) {
						var r = i[o],
							s = r.key,
							l = r.depth,
							c = r.value;
						if(1 === s.length) {
							for(var u = e.root; l && u !== e;) e = e.parent, --l;
							e.set(s[0], c)
						} else {
							var d = e.resolve(s.slice(0, -1), l);
							d && (d[s[s.length - 1]] = c)
						}
					}
					return n
				},
				include: 1,
				parse: 1,
				extend: 1,
				block: function h(e, t, n) {
					var i = this,
						a = i.runtime,
						o = t.params,
						r = o[0],
						s;
					2 === o.length && (s = o[0], r = o[1]);
					var l = a.blocks = a.blocks || {},
						c = l[r],
						u, d = {
							fn: t.fn,
							type: s
						};
					if(c) {
						if(c.type)
							if("append" === c.type) d.next = c, l[r] = d;
							else if("prepend" === c.type) {
							var f;
							for(u = c; u && "prepend" === u.type;) f = u, u = u.next;
							d.next = u, f.next = d
						}
					} else l[r] = d;
					if(!a.extendTpl)
						for(u = l[r]; u;) u.fn && (n = u.fn.call(i, e, n)), u = u.next;
					return n
				},
				macro: function m(e, t, n) {
					var a = t.hash,
						o = t.params,
						r = o[0],
						s = o.slice(1),
						l = this,
						c = l.runtime,
						u = c.macros = c.macros || {},
						m = u[r];
					if(t.fn) u[r] = {
						paramNames: s,
						hash: a,
						fn: t.fn
					};
					else if(m) {
						var d = m.hash || {},
							f;
						if(f = m.paramNames)
							for(var p = 0, h = f.length; p < h; p++) {
								var v = f[p];
								d[v] = s[p]
							}
						if(a)
							for(var g in a) d[g] = a[g];
						var b = new i(d);
						b.root = e.root, n = m.fn.call(l, b, n)
					} else {
						var w = "can not find macro: " + r;
						n.error(w)
					}
					return n
				}
			};
		o["debugger"] = function() {
			a.globalEval("debugger")
		}, e.exports = o
	}, function(e, t) {
		function n(e, t, n) {
			e !== undefined ? this.data = e : this.data = {}, n ? (this.parent = n, this.root = n.root) : (this.parent = undefined, this.root = this), this.affix = t || {}, this.ready = !1
		}
		n.prototype = {
			isScope: 1,
			constructor: n,
			setParent: function i(e) {
				this.parent = e, this.root = e.root
			},
			set: function a(e, t) {
				this.affix[e] = t
			},
			setData: function o(e) {
				this.data = e
			},
			getData: function r() {
				return this.data
			},
			mix: function s(e) {
				var t = this.affix;
				for(var n in e) t[n] = e[n]
			},
			get: function l(e) {
				var t = this.data,
					n, i = this.affix;
				return null != t && (n = t[e]), n !== undefined ? n : i[e]
			},
			resolveInternalOuter: function c(e) {
				var t = e[0],
					n, i = this,
					a = i;
				if("this" === t) n = i.data;
				else if("root" === t) a = a.root, n = a.data;
				else {
					if(!t) return [a.data];
					do {
						n = a.get(t)
					} while (n === undefined && (a = a.parent))
				}
				return [undefined, n]
			},
			resolveInternal: function u(e) {
				var t = this.resolveInternalOuter(e);
				if(1 === t.length) return t[0];
				var n, i = e.length,
					a = t[1];
				if(a === undefined) return undefined;
				for(n = 1; n < i; n++) {
					if(null == a) return a;
					a = a[e[n]]
				}
				return a
			},
			resolveLooseInternal: function d(e) {
				var t = this.resolveInternalOuter(e);
				if(1 === t.length) return t[0];
				var n, i = e.length,
					a = t[1];
				for(n = 1; null != a && n < i; n++) a = a[e[n]];
				return a
			},
			resolveUp: function f(e) {
				return this.parent && this.parent.resolveInternal(e)
			},
			resolveLooseUp: function p(e) {
				return this.parent && this.parent.resolveLooseInternal(e)
			},
			resolveOuter: function h(e, t) {
				var n = this,
					i = n,
					a;
				if(!t && 1 === e.length) {
					if((a = n.get(e[0])) !== undefined) return [a];
					t = 1
				}
				if(t)
					for(; i && t--;) i = i.parent;
				return i ? [undefined, i] : [undefined]
			},
			resolveLoose: function m(e, t) {
				var n = this.resolveOuter(e, t);
				return 1 === n.length ? n[0] : n[1].resolveLooseInternal(e)
			},
			resolve: function v(e, t) {
				var n = this.resolveOuter(e, t);
				return 1 === n.length ? n[0] : n[1].resolveInternal(e)
			}
		}, e.exports = n
	}, function(e, t, n) {
		function i(e, t, n) {
			this.list = e, this.init(), this.next = t, this.ready = !1, this.tpl = n
		}

		function a(e, t) {
			var n = this;
			n.config = t, n.head = new i(n, undefined), n.callback = e, this.init()
		}
		var o = n(17);
		i.prototype = {
			constructor: i,
			isBuffer: 1,
			init: function r() {
				this.data = ""
			},
			append: function s(e) {
				return this.data += e, this
			},
			write: function l(e) {
				if(null != e) {
					if(e.isBuffer) return e;
					this.data += e
				}
				return this
			},
			writeEscaped: function c(e) {
				if(null != e) {
					if(e.isBuffer) return e;
					this.data += o.escapeHtml(e)
				}
				return this
			},
			insert: function u() {
				var e = this,
					t = e.list,
					n = e.tpl,
					a = new i(t, e.next, n),
					o = new i(t, a, n);
				return e.next = o, e.ready = !0, o
			},
			async: function d(e) {
				var t = this.insert(),
					n = t.next;
				return e(t), n
			},
			error: function f(e) {
				var t = this.list.callback;
				if(t) {
					var n = this.tpl;
					if(n) {
						e instanceof Error || (e = new Error(e));
						var i = n.name,
							a = n.pos.line,
							o = "XTemplate error in file: " + i + " at line " + a + ": ";
						e.stack = o + e.stack, e.message = o + e.message, e.xtpl = {
							pos: {
								line: a
							},
							name: i
						}
					}
					this.list.callback = null, t(e, undefined)
				}
			},
			end: function p() {
				var e = this;
				return e.list.callback && (e.ready = !0, e.list.flush()), e
			}
		}, a.prototype = {
			constructor: a,
			init: function h() {
				this.data = ""
			},
			append: function m(e) {
				this.data += e
			},
			end: function v() {
				this.callback(null, this.data), this.callback = null
			},
			flush: function g() {
				for(var e = this, t = e.head; t;) {
					if(!t.ready) return void(e.head = t);
					this.data += t.data, t = t.next
				}
				e.end()
			}
		}, a.Buffer = i, e.exports = a
	}, , , , , , function(e, t) {}, function(e, t, n) {
		n(28);
		var i = n(8),
			a = n(29),
			o = n(4),
			r = o.extend({
				initializer: function s() {
					if(i("#slides").length && i(".tab-pannel").length) {
						var e = new a("slides", {
							eventype: "click",
							effect: "fade",
							autoSlide: !0,
							timeout: 2e3,
							speed: 500,
							hoverStop: !0,
							navClass: "nav",
							triggerSelector: ".dot",
							selectedClass: "current"
						});
						i("#J_pre").on("click", function(t) {
							t.halt(), e.previous(), e.autoSlide && e.stoped === !1 && e.stop().play()
						}), i("#J_next").on("click", function(t) {
							t.halt(), e.next(), e.autoSlide && e.stoped === !1 && e.stop().play()
						})
					}
				}
			}, {
				ATTRS: {}
			});
		e.exports = r
	}, function(e, t) {}, function(e, t, n) {
		var i = n(30);
		e.exports = i
	}, function(e, t, n) {
		function i(e) {
			var t = new RegExp(/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/gi),
				n = s.one("head")[0],
				i, o, r, l, c, u, d = /\ssrc=(['"])(.*?)\1/i,
				f = /\scharset=(['"])(.*?)\1/i;
			for(t.lastIndex = 0; i = t.exec(e);) o = i[1], r = !!o && o.match(/\ssrc=(['"])(.*?)\1/i), r && r[2] ? (c = document.createElement("script"), c.src = r[2], (l = o.match(/\scharset=(['"])(.*?)\1/i)) && l[2] && (c.charset = l[2]), c.async = !0, n.appendChild(c)) : (u = i[2]) && u.length > 0 && a(u)
		}

		function a(e) {
			if(e && /\S/.test(e)) {
				var t = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0],
					n = document.createElement("script");
				n.text = e, t.insertBefore(n, t.firstChild), setTimeout(function() {
					t.removeChild(n)
				}, 1)
			}
		}

		function o() {
			if(!(this instanceof o)) throw new Error('please use "new Slide()"');
			this.init.apply(this, arguments)
		}
		var r = n(31),
			s = n(8),
			l = s.all,
			c = n(32);
		n(33);
		var u = n(34),
			d = n(10);
		n(35);
		var f = n(36);
		d.mix(d, f), o.plug = function() {}, d.augment(o, r.Target, {
			init: function p(e, t) {
				var n = this;
				if(d.isObject(e)) n.con = e;
				else if(/^#/i.test(e)) n.con = s.one(e);
				else if(s.one("#" + e)) n.con = s.one("#" + e);
				else {
					if(!s.one(e)) throw new Error("Slide Container Hooker not found");
					n.con = s.one(e)
				}
				if(n.buildParam(t), n.buildHTML(), n.bindEvent(), n.fire("ready", {
						index: 0,
						navnode: n.tabs.item(0),
						pannelnode: n.pannels.item(0)
					}), n.reverse) {
					var i;
					i = n.previous, n.previous = n.next, n.next = i
				}
				if(n.carousel)
					for(var a = 0; a < n.colspan; a++) n.fix_for_transition_when_carousel(2 * a);
				return n.fixSlideSize(), n.layerSlide && n.initLayer(), n.stoped = null, n.renderPannelTextarea(n.currentTab), this
			},
			setWrapperSize: function h(e) {
				var t = this;
				return d.isUndefined(e) && (e = 0), t.pannels = t.con.all("." + t.contentClass + " ." + t.pannelClass), t.length = t.pannels.length, {
					none: function n() {},
					vSlide: function i() {
						var n = t.animcon.get("region");
						t.animwrap.setStyles({
							height: (t.length + e) * n.height / t.colspan + "px"
						})
					},
					hSlide: function a() {
						var n = t.animcon.get("region");
						t.animwrap.setStyles({
							width: (t.length + e) * n.width / t.colspan + "px"
						})
					},
					fade: function o() {}
				}[t.effect](), d.isUndefined(e) || t.relocateCurrentTab(), this
			},
			add: function m(e, t) {
				var n = this;
				return(d.isUndefined(t) || t > n.length) && (t = n.length), d.isString(e) && (e = e.one(e)), n.transitions && e.css({
					visibility: "hidden"
				}), t == n.length ? (setTimeout(function() {
					n.setWrapperSize(1)
				}, 0), e.insertAfter(n.pannels[t - 1])) : e.insertBefore(n.pannels[t]), n.setWrapperSize(), n.fixSlideSize(n.currentTab), n.transitions && e.css({
					visibility: ""
				}), n.transitions, this
			},
			remove: function v(e) {
				var t = this;
				if(1 !== t.length) return e <= t.currentTab && (t.currentTab--, t.length--), t.transitions && t.con.css({
					display: "none"
				}), s.one(t.pannels[e]).remove(), t.setWrapperSize(), t.transitions && t.con.css({
					display: "block"
				}), t.fixSlideSize(t.currentTab), this
			},
			removeLast: function g() {
				var e = this;
				return e.remove(e.length - 1), e
			},
			renderLazyData: function b(e) {
				if(e.setStyle("display", "none"), "1" != e.attr("lazy-data")) {
					e.attr("lazy-data", "1"), d.isUndefined(n);
					var t = e.get("innerHTML").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"),
						n = s.create("<div>" + t + "</div>");
					s.one(n).insertBefore(e), i(t)
				}
			},
			renderPannelTextarea: function w(e) {
				var t = this;
				if(t.pannels.item(e))
					for(var n = function a(e) {
							var n = t.pannels.item(e).all(".data-lazyload");
							n && n.each(function(e) {
								t.renderLazyData(l(e))
							})
						}, i = 0; i < t.colspan; i++) n(e + i)
			},
			buildWrap: function y() {
				var e = this;
				return e.animwrap = s.create('<div style="position:absolute;"></div>'), e.animcon.children().appendTo(e.animwrap), e.animcon.empty().appendChild(e.animwrap), e.pannels = e.con.all("." + e.contentClass + " ." + e.pannelClass), e
			},
			doEffectInit: function x() {
				var e = this;
				return {
					none: function t() {
						e.pannels = e.con.all("." + e.contentClass + " ." + e.pannelClass), e.pannels.setStyles({
							display: "none"
						}), e.pannels.item(e.defaultTab).setStyles({
							display: "block"
						})
					},
					vSlide: function n() {
						e.buildWrap();
						var t = e.animcon.get("region");
						e.pannels.setStyles({
							"float": "none",
							overflow: "hidden"
						}), e.animwrap.setStyles({
							height: e.length * t.height / e.colspan + "px",
							overflow: "hidden",
							top: -1 * e.defaultTab * t.height + "px"
						})
					},
					hSlide: function i() {
						e.buildWrap();
						var t = e.animcon.get("region");
						e.pannels.setStyles({
							"float": "left",
							overflow: "hidden"
						}), e.transitions ? e.animwrap.setStyles({
							overflow: "hidden",
							width: e.length * t.width / e.colspan + "px",
							"-webkit-transition-duration": "0s",
							"-webkit-transform": "translate3d(" + -1 * e.defaultTab * t.width + "px,0,0)"
						}) : e.animwrap.setStyles({
							width: e.length * t.width / e.colspan + "px",
							overflow: "hidden",
							left: -1 * e.defaultTab * t.width + "px"
						})
					},
					fade: function a() {
						e.pannels = e.con.all("." + e.contentClass + " ." + e.pannelClass), e.pannels.setStyles({
							position: "absolute",
							zIndex: 0
						}), e.pannels.each(function(t, n) {
							t = l(t), n == e.defaultTab ? t.setStyles({
								opacity: 1,
								display: "block"
							}) : t.setStyles({
								opacity: 0,
								display: "none"
							})
						})
					}
				}[e.effect](), this
			},
			buildHTML: function _() {
				var e = this,
					t = e.con;
				e.tabs = t.all("." + e.navClass + " " + e.triggerSelector);
				var n = t.all("." + e.contentClass + " ." + e.pannelClass);
				if(e.length = n.size(), t.one("." + e.navClass) || s('<ul class="' + e.navClass + '" style="display:none"></ul>').appendTo(e.con), 0 === e.tabs.size()) {
					for(var i = t.all("." + e.navClass), a = "", o = 0; o < e.length; o++) {
						var r = "";
						0 === o && (r = e.selectedClass), a += '<li class="' + r + '"><a href="javascript:void(0);">' + (o + 1) + "</a></li>"
					}
					i.set("innerHTML", a)
				}
				return e.tabs = t.all("." + e.navClass + " " + e.triggerSelector), e.animcon = t.one("." + e.contentClass), e.animwrap = null, e.doEffectInit(), e.carousel ? (e.fixSlideSize(e.currentTab - e.colspan), e.highlightNav(e.currentTab - e.colspan)) : (e.fixSlideSize(e.currentTab), e.highlightNav(e.getWrappedIndex(e.currentTab))), e.autoSlide === !0 && (e.invisibleStop && e.isSlideVisible() || !e.invisibleStop) && e.play(), this
			},
			getCurrentPannel: function S() {
				var e = this;
				return s.one(e.pannels[e.currentTab])
			},
			renderWidth: function T() {
				var e = this,
					t = e.animcon.get("region").width;
				return "hSlide" == e.effect && (t /= e.colspan), e.pannels.setStyles({
					width: t + "px"
				}), this
			},
			renderHeight: function k() {
				var e = this,
					t = e.animcon.get("region").height;
				return "vSlide" == e.effect && (t /= e.colspan), e.pannels.setStyles({
					height: t + "px"
				}), this
			},
			relocateCurrentTab: function C(e) {
				var t = this;
				if(d.isUndefined(e) && (e = t.currentTab), "hSlide" == t.effect) return t.transitions ? t.animwrap.setStyles({
					"-webkit-transition-duration": "0s",
					"-webkit-transform": "translate3d(" + -1 * e * t.animcon.get("region").width / t.colspan + "px,0,0)",
					"-webkit-backface-visibility": "hidden"
				}) : t.animwrap.setStyles({
					left: -1 * e * t.animcon.get("region").width / t.colspan
				}), t.currentTab = e, this
			},
			fixSlideSize: function A(e) {
				var t = this;
				return t.adaptive_fixed_width && t.renderWidth(), t.adaptive_fixed_height && t.renderHeight(), t.adaptive_fixed_size && t.renderHeight().renderWidth(), t.resetSlideSize(e), this
			},
			removeHeightTimmer: function I() {
				var e = this;
				d.isNull(e.heightTimmer) || (clearInterval(e.heightTimmer), e.heightTimmer = null)
			},
			addHeightTimmer: function N() {
				var e = this;
				d.isNull(e.heightTimmer) || (clearInterval(e.heightTimmer), e.heightTimmer = null);
				var t = function n() {
					"hSlide" == e.effect && e.animcon.setStyles({
						height: e.pannels.item(e.currentTab).get("region").height + "px"
					})
				};
				e.heightTimmer = setInterval(t, 100), t()
			},
			resetSlideSize: function z(e) {
				var t = this,
					n, i;
				if(void 0 !== e && null !== e || (e = t.currentTab), "hSlide" == t.effect || "vSlide" == t.effect) return "hSlide" == t.effect && (n = t.adaptive_width ? t.adaptive_width() : t.animcon.get("region").width, i = t.pannels.item(e).get("region").height, t.animwrap.setStyles({
					width: t.pannels.size() * n + "px"
				}), n /= t.colspan, t.pannels.setStyles({
					width: n + "px",
					display: "block"
				}), t.animcon.setStyles({
					width: n * t.colspan + "px",
					overflow: "hidden"
				}), t.animWrapperAutoHeightSetting && t.animcon.setStyles({
					height: i + "px"
				})), "vSlide" == t.effect && (n = t.pannels.item(e).get("region").width, i = t.adaptive_height ? t.adaptive_height() : t.animcon.get("region").height, t.animwrap.setStyles({
					height: t.pannels.size() * i + "px"
				}), i /= t.colspan, t.pannels.setStyles({
					height: i * t.colspan + "px",
					display: "block"
				}), t.animcon.setStyles({
					height: i * t.colspan + "px",
					overflow: "hidden"
				}), t.animWrapperAutoHeightSetting && t.animcon.setStyles({
					width: n + "px"
				})), this
			},
			getWrappedIndex: function E(e) {
				var t = this,
					n = 0;
				return n = t.carousel ? e < t.colspan ? t.length - 3 * t.colspan + e : e >= t.length - t.colspan ? e - (t.length - t.colspan) : e - t.colspan : e
			},
			getMousePosition: function L() {
				var e = this,
					t = function n(t) {
						e._t_mouseX = t.clientX, e._t_mouseY = t.clientY
					};
				s.one(document).on("mousemove", t), setTimeout(function() {
					s.one(window).detach("mouseover", t)
				}, e.triggerDelay)
			},
			massTrigger: function P(e, t) {
				var n = this;
				if(!d.inArray(n.eventType, ["mouseover", "mouseenter"])) return void e(s.one(t));
				n.getMousePosition(), d.isUndefined(n._fired) || d.isNull(n._fired) ? n._fired = setTimeout(function() {
					n.inRegion([n._t_mouseX + s.one(window).scrollLeft(), n._t_mouseY + s.one(window).scrollTop()], s.one(t)) && e(s.one(t)), n._fired = null
				}, n.triggerDelay) : (clearTimeout(n._fired), n._fired = setTimeout(function() {
					n.inRegion([n._t_mouseX + s.one(window).scrollLeft(), n._t_mouseY + s.one(window).scrollTop()], s.one(t)) && e(s.one(t)), n._fired = null
				}, n.triggerDelay))
			},
			getMaxAnimDelay: function D(e) {
				var t = this,
					n = 0;
				if(t.sublayers) return d.each(t.sublayers[e], function(e) {
					e.durationout + e.delayout > n && (n = e.durationout + e.delayout)
				}), n
			},
			inRegion: function R(e, t) {
				var n = t.offset(),
					i = {
						width: t.width(),
						height: t.height()
					};
				return e[0] >= n.left && e[0] <= n.left + i.width && e[1] >= n.top && e[1] <= n.top + i.height
			},
			bindEvent: function O() {
				var e = this;
				if(d.inArray(e.eventType, ["click", "mouseover", "mouseenter"]) && e.con._delegate(e.eventType, function(t) {
						t.preventDefault(), e.massTrigger(function(t) {
							var n = Number(e.tabs.indexOf(t));
							e.carousel && (n = (n + 1) % e.length), e.go(n), e.autoSlide && e.stoped === !1 && e.stop().play()
						}, t.currentTarget)
					}, "." + e.navClass + " " + e.triggerSelector), e.hoverStop && (e.con._delegate("mouseover", function() {
						if(e.isMouseover = !0, e.autoSlide) {
							var t = e.stoped;
							e.stop(), e.stoped = t
						}
					}, "." + e.contentClass + " ." + e.pannelClass), e.con._delegate("mouseout", function() {
						e.isMouseover = !1, e.autoSlide && !!e.stoped == !1 && e.play()
					}, "." + e.contentClass + " ." + e.pannelClass)),
					s.one(window).on("resize", function() {
						e.fixSlideSize(e.currentTab), e.relocateCurrentTab()
					}), e.on("beforeSwitch", function() {
						return "function" == typeof e.before_switch ? (e._executeSwitch = e.before_switch(), e._executeSwitch) : "boolean" == typeof e.before_switch ? (e._executeSwitch = e.before_switch, e.before_switch) : (e._executeSwitch = !0, !0)
					}), !e.touchmove) return this;
				if(e.con._delegate("touchstart", function(t) {
						e.stop(), e.touching = !0, e.is_last() && e.carousel && e.fix_next_carousel(), e.is_first() && e.carousel && e.fix_pre_carousel(), e.startX = t.changedTouches[0].clientX, e.startY = t.changedTouches[0].clientY, e.animwrap.setStyles({
							"-webkit-transition-duration": "0s"
						}), e.startT = Number(new Date)
					}, "." + e.contentClass), e.con._delegate("touchend", function(t) {
						e.touching = !1;
						var n = t.changedTouches[0].clientX,
							i = Number(e.animcon.get("region").width);
						e.deltaX = Math.abs(n - e.startX);
						var a = Math.abs(n) < Math.abs(e.startX),
							o = !a,
							r = !e.carousel && (e.is_last() && a || e.is_first() && o),
							s = function c() {
								e.animwrap.setStyles({
									"-webkit-transition-duration": Number(e.speed) / 2 + "s",
									"-webkit-transform": "translate3d(" + -1 * e.currentTab * e.animcon.get("region").width / e.colspan + "px,0,0)"
								})
							},
							l = function u() {
								var t = e.animcon.get("region").width / e.colspan,
									n = parseInt((e.deltaX - t / 2) / t, 10);
								a ? (n >= 1 && e.length > 2 && (e.currentTab += n + 1, e.currentTab >= e.length - e.colspan && (e.currentTab = e.length - e.colspan - 1)), e.next()) : (n >= 1 && e.length > 2 && (e.currentTab += -1 * n - 1, e.currentTab <= 0 && (e.currentTab = 1)), e.previous())
							};
						if(e.touchmove && e.deltaX < 30) return void s();
						!r && (e.touchmove && e.deltaX > i / 3 || !e.touchmove && e.carousel || !e.carousel && e.touchmove && "hSlide" == e.effect || !e.touchmove && !e.carousel || Number(new Date) - e.startT < 550) ? l() : s(), e.autoSlide && e.stoped === !1 && e.play()
					}, "." + e.contentClass), e.touchmove && (e.con._delegate("touchmove", function(t) {
						if(!(t.touches.length > 1)) {
							e.deltaX = t.touches[0].clientX - e.startX;
							var n = e.is_last() && e.deltaX < 0 || e.is_first() && e.deltaX > 0;
							if(!e.carousel && "hSlide" == e.effect && n && (e.deltaX = e.deltaX / 3), e.isScrolling = Math.abs(e.deltaX) < Math.abs(t.touches[0].clientY - e.startY), !e.isScrolling) {
								t.preventDefault(), e.stop();
								var i = Number(e.animcon.get("region").width / e.colspan),
									a = e.deltaX - e.currentTab * i;
								e.animwrap.setStyles({
									"-webkit-transition-duration": "0s",
									"-webkit-transform": "translate3d(" + a + "px,0,0)"
								})
							}
						}
					}, "." + e.contentClass), e.animwrap && e.animwrap.on("webkitTransitionEnd", function() {})), e.invisibleStop) {
					var t = d.getHiddenProp();
					if(t) {
						var n = t.replace(/[H|h]idden/, "") + "visibilitychange",
							i;
						s.one(document).on(n, function() {
							d.isHidden() ? e.timer ? (i = !0, e.stop()) : i = !1 : e.isSlideVisible() && i && e.play()
						})
					}
					s.one(window).on("scroll resize", function() {
						e.isSlideVisible() ? e.timer || e.hoverStop && (!e.hoverStop || e.isMouseover) || e.play() : e.timer && e.stop()
					})
				}
				return this
			},
			isSlideVisible: function j() {
				var e = this,
					t = e.animcon.offset().left,
					n = e.animcon.offset().top,
					i = e.animcon.width(),
					a = e.animcon.height(),
					o = s.one(window).scrollTop(),
					r = s.one(window).scrollLeft();
				return !(o > n + a || o + s.one(window).height() < n || r > t + i || r + s.one(window).width() < t)
			},
			initLayer: function H() {
				var e = this;
				if(!("ontouchstart" in document.documentElement || u.ie > 0 && u.ie < 9)) {
					var t = ["durationin", "easingin", "durationout", "easingout", "delayin", "delayout", "slideindirection", "slideoutdirection", "offsetin", "offsetout", "alpha", "easeInStrong", "easeOutStrong", "easeBothStrong", "easeNone", "easeIn", "easeOut", "easeBoth", "elasticIn", "elasticOut", "elasticBoth", "backIn", "backOut", "backBoth", "bounceIn", "bounceOut", "bounceBoth", "left", "top", "right", "bottom"],
						n = {
							durationin: 1e3,
							easingin: "easeIn",
							durationout: 1e3,
							easingout: "easeOut",
							delayin: 300,
							delayout: 300,
							slideindirection: "right",
							slideoutdirection: "left",
							alpha: !0,
							offsetin: 50,
							offsetout: 50
						},
						i = function a(e) {
							function i(e, t) {
								var n = r[t];
								a[t] = n === undefined || null === n ? e : n
							}
							var a = this,
								o = e.attr("rel").replace(/"'/gi, "").replace(new RegExp("(" + t.join("|") + ")", "ig"), '"$1"'),
								r = c.parse("{" + o + "}");
							d.each(n, i), this.el = e, this.left = Number(e.css("left").replace("px", "")), this.top = Number(e.css("top").replace("px", "")), this.animIn = function() {
								var e = this,
									t = e.offsetin,
									n = e.slideindirection;
								({
									left: function i() {
										e.el.css({
											left: e.left - t
										})
									},
									top: function a() {
										e.el.css({
											top: e.top - t
										})
									},
									right: function o() {
										e.el.css({
											left: e.left + t
										})
									},
									bottom: function r() {
										e.el.css({
											top: e.top + t
										})
									}
								})[n](), setTimeout(function() {
									var t = {
											left: {
												left: e.left
											},
											top: {
												top: e.top
											},
											bottom: {
												top: e.top
											},
											right: {
												left: e.left
											}
										},
										i = {};
									d.mix(i, t[n]), e.alpha && d.mix(i, {
										opacity: 1
									}), s.one(e.el).animate(i, e.durationout / 1e3, e.easingin, function() {})
								}, e.delayin), e.alpha && e.el.css({
									opacity: 0
								})
							}, this.animOut = function() {
								var e = this,
									t = e.offsetout,
									n = e.slideoutdirection;
								({
									left: function i() {
										e.el.css({
											left: e.left
										})
									},
									top: function a() {
										e.el.css({
											top: e.top
										})
									},
									right: function o() {
										e.el.css({
											left: e.left
										})
									},
									bottom: function r() {
										e.el.css({
											top: e.top
										})
									}
								})[n](), setTimeout(function() {
									var i = {
											left: {
												left: e.left + t
											},
											top: {
												top: e.top + t
											},
											bottom: {
												top: e.top - t
											},
											right: {
												left: e.left - t
											}
										},
										a = {};
									d.mix(a, i[n]), e.alpha && d.mix(a, {
										opacity: 0
									}), s.one(e.el).animate(a, e.durationout / 1e3, e.easingout, function() {})
								}, e.delayout), e.alpha && e.el.css({
									opacity: 1
								})
							}
						};
					e.sublayers = [], e.pannels.each(function(t, n) {
						if(t = l(t), "vSlide" != e.effect && "hSlide" != e.effect || t.css({
								position: "relative"
							}), 0 === t.all('[alt="sublayer"]').length) return void(e.sublayers[n] = []);
						e.sublayers[n] === undefined && (e.sublayers[n] = []), t.all('[alt="sublayer"]').each(function(t) {
							t = l(t), e.sublayers[n].push(new i(t))
						})
					}), e.on("beforeSwitch", function(t) {
						if(t.index === e.currentTab) return !1;
						e.subLayerRunin(t.index)
					}), e.on("beforeTailSwitch", function(t) {
						return e.subLayerRunout(t.index), e.getMaxAnimDelay(t.index)
					})
				}
			},
			subLayerRunin: function X(e) {
				var t = this,
					n = t.sublayers[e];
				d.each(n, function(e) {
					e.animIn()
				})
			},
			subLayerRunout: function B(e) {
				var t = this,
					n = t.sublayers[e];
				d.each(n, function(e) {
					e.animOut()
				})
			},
			buildParam: function F(e) {
				function t(t, i) {
					var a = e[i];
					n[i] = a === undefined || null === a ? t : a
				}
				var n = this;
				return e !== undefined && null !== e || (e = {}), d.each({
					autoSlide: !1,
					speed: 300,
					timeout: 3e3,
					effect: "none",
					eventType: "click",
					easing: "easeBoth",
					hoverStop: !0,
					invisibleStop: !1,
					selectedClass: "selected",
					conClass: "t-slide",
					navClass: "tab-nav",
					triggerSelector: "li",
					contentClass: "tab-content",
					pannelClass: "tab-pannel",
					before_switch: !0,
					carousel: !1,
					reverse: !1,
					touchmove: !0,
					adaptive_fixed_width: !1,
					adaptive_fixed_height: !1,
					adaptive_fixed_size: !1,
					adaptive_width: !1,
					adaptive_height: !1,
					defaultTab: 0,
					layerSlide: !1,
					layerClass: "tab-animlayer",
					colspan: 1,
					animWrapperAutoHeightSetting: !0,
					webkitOptimize: !0,
					triggerDelay: 300,
					autoActived: !0
				}, t), d.mix(n, {
					tabs: [],
					animcon: null,
					pannels: [],
					timmer: null,
					touching: !1
				}), n.speed = n.speed / 1e3, 0 !== n.defaultTab && (n.defaultTab = Number(n.defaultTab) - 1), n.carousel && (n.defaultTab = 0, n.defaultTab = n.colspan + n.defaultTab, n.effect = "hSlide"), n.currentTab = n.defaultTab, n.transitions = "webkitTransition" in document.body.style && n.webkitOptimize, n
			},
			fix_for_transition_when_carousel: function M(e) {
				var t = this;
				void 0 === e && (e = 0);
				var n = t.con;
				if(t.animcon = t.con.one("." + t.contentClass), t.animwrap = t.animcon.one("div"), t.pannels = n.all("." + t.contentClass + " ." + t.pannelClass), "hSlide" == t.effect) {
					var i = Number(t.animcon.get("region").width / t.colspan);
					t.animwrap.setStyle("width", t.pannels.size() * i + 2 * i);
					var a = t.pannels.item(e).getDOMNode().cloneNode(!0),
						o = t.pannels.item(t.pannels.size() - 1 - e).getDOMNode().cloneNode(!0);
					if(t.animwrap.append(a), t.animwrap.prepend(o), 0 === t.defaultTab) var r = -1 * i * (e / 2 + 1 + t.defaultTab - 1);
					else var r = -1 * i * (e / 2 + 1);
					t.transitions ? t.animwrap.setStyles({
						"-webkit-transition-duration": "0s",
						"-webkit-transform": "translate3d(" + r + "px,0,0)",
						"-webkit-backface-visibility": "hidden",
						left: "0"
					}) : t.animwrap.setStyle("left", r)
				}
				return t.pannels = n.all("." + t.contentClass + " ." + t.pannelClass), t.length = t.pannels.size(), this
			},
			isAming: function U() {
				return !1
			},
			previous: function W(e) {
				var t = this,
					n = t.currentTab + t.length - 1 - (t.colspan - 1);
				return n >= t.length - t.colspan + 1 && (n %= t.length - t.colspan + 1), t.carousel && t.is_first() ? (t.fix_pre_carousel(), t.previous.call(t), this) : (t.go(n, e), this)
			},
			is_last: function Y() {
				var e = this;
				return e.currentTab == e.length - (e.colspan - 1) - 1
			},
			is_first: function q() {
				return 0 === this.currentTab
			},
			next: function J(e) {
				var t = this,
					n = t.currentTab + 1;
				return n >= t.length - t.colspan + 1 && (n %= t.length - t.colspan + 1), t.carousel && t.is_last() ? (t.fix_next_carousel(), t.next.call(t), this) : (t.go(n, e), this)
			},
			fix_next_carousel: function G() {
				var e = this;
				e.currentTab = e.colspan;
				var t = e.con;
				"none" != e.effect && (e.pannels = t.all("." + e.contentClass + " ." + e.pannelClass));
				var n = "-" + Number(e.animcon.get("region").width).toString() + "px";
				"hSlide" == e.effect ? e.transitions ? e.animwrap.setStyles({
					"-webkit-transition-duration": "0s",
					"-webkit-transform": "translate3d(" + n + ",0,0)"
				}) : e.animwrap.setStyle("left", n) : e.effect
			},
			fix_pre_carousel: function V() {
				var e = this;
				e.currentTab = e.length - 1 - 2 * e.colspan + 1;
				var t = e.con;
				"none" != e.effect && (e.pannels = t.all("." + e.contentClass + " ." + e.pannelClass));
				var n = "-" + (Number(e.animcon.get("region").width / e.colspan) * e.currentTab).toString() + "px";
				"hSlide" == e.effect ? e.transitions ? e.animwrap.setStyles({
					"-webkit-transition-duration": "0s",
					"-webkit-transform": "translate3d(" + n + ",0,0)"
				}) : e.animwrap.setStyle("left", n) : e.effect
			},
			highlightNav: function K(e) {
				var t = this;
				return t.carousel && t.colspan > 1 ? this : (t.tabs.item(e) && (t.tabs.removeClass(t.selectedClass), t.tabs.item(e).addClass(t.selectedClass)), this)
			},
			hightlightNav: function $() {
				var e = this;
				return e.highlightNav.apply(e, arguments), this
			},
			unhighlightNav: function Q(e) {
				var t = this;
				return t.carousel && t.colspan > 1 ? this : (t.tabs.item(e) && t.tabs.removeClass(t.selectedClass), this)
			},
			unhighlightNavAll: function Z() {
				var e = this;
				return e.tabs.removeClass(e.selectedClass), this
			},
			switch_to: function ee(e, t) {
				var n = this;
				if(t === !1) var i = !1;
				else var i = !0;
				var a = function u() {
						d.isFunction(t) && t.call(n, n), n.fire("afterSwitch", {
							index: n.currentTab,
							navnode: n.tabs.item(n.getWrappedIndex(n.currentTab)),
							pannelnode: n.pannels.item(n.currentTab)
						})
					},
					o = n.fire("beforeTailSwitch", {
						index: n.currentTab,
						navnode: n.tabs.item(n.getWrappedIndex(n.currentTab)),
						pannelnode: n.pannels.item(n.currentTab)
					});
				if(n.fixSlideSize(e), n.autoSlide && n.stoped === !1 && n.stop().play(), e >= n.length && (e %= n.length), e == n.currentTab) return this;
				if(n.anim) try {
					n.anim.stop(), n.anim = null
				} catch(c) {}
				var r = {
						none: function f(e) {
							n.pannels.setStyles({
								display: "none"
							}), n.pannels.item(e).setStyles({
								display: "block"
							}), a()
						},
						vSlide: function p(e) {
							n.transitions ? i ? (n.anim = s.one(n.animwrap).css({
								"-webkit-transition-duration": n.speed + "s",
								"-webkit-transition-timing-function": n.easing,
								"-webkit-transform": "translate3d(0," + -1 * e * n.animcon.get("region").height / n.colspan + "px,0)",
								"-webkit-backface-visibility": "hidden",
								opacity: 1
							}), setTimeout(function() {
								a()
							}, 1e3 * n.speed)) : a() : i ? n.anim = s.one(n.animwrap).animate({
								top: -1 * e * n.animcon.get("region").height / n.colspan
							}, n.speed, n.easing, function() {
								a()
							}) : (n.animwrap.css({
								top: -1 * e * n.animcon.get("region").height / n.colspan
							}), a())
						},
						hSlide: function h(e) {
							n.transitions ? i ? (n.anim = s.one(n.animwrap).css({
								"-webkit-transition-duration": n.speed + "s",
								"-webkit-transition-timing-function": n.easing,
								"-webkit-transform": "translate3d(" + -1 * e * n.animcon.get("region").width / n.colspan + "px,0,0)",
								"-webkit-backface-visibility": "hidden",
								opacity: 1
							}), setTimeout(function() {
								a()
							}, 1e3 * n.speed)) : a() : i ? n.anim = s.one(n.animwrap).animate({
								left: -1 * e * n.animcon.get("region").width / n.colspan
							}, n.speed, n.easing, function() {
								a()
							}) : (n.animwrap.css({
								left: -1 * e * n.animcon.get("region").width / n.colspan
							}), a())
						},
						fade: function m(e) {
							var t = n.currentTab;
							n.pannels.item(e).setStyle({
								display: "block"
							}), n.pannels.item(e).setStyle("opacity", 0), n.pannels.item(t).setStyle("zIndex", 1), n.pannels.item(e).setStyle("zIndex", 2), n.anim = s.one(n.pannels.item(e)).animate({
								opacity: 1
							}, n.speed, n.easing, function() {
								n.pannels.item(t).setStyle("zIndex", 0), n.pannels.item(e).setStyle("zIndex", 1), n.pannels.item(t).setStyle("opacity", 0), n.pannels.item(t).setStyles({
									display: "none"
								}), a(), n.fire("afterSwitch", {
									index: e,
									navnode: n.tabs.item(n.getWrappedIndex(e)),
									pannelnode: n.pannels.item(e)
								})
							})
						}
					},
					l = function v() {
						n.fire("beforeSwitch", {
							index: e,
							navnode: n.tabs.item(e),
							pannelnode: n.pannels.item(e)
						})._executeSwitch !== !1 && (e + n.colspan > n.pannels.size() && (e = n.pannels.size() - n.colspan), r[n.effect](e), n.currentTab = e, n.highlightNav(n.getWrappedIndex(e)), n.fire("switch", {
							index: e,
							navnode: n.tabs.item(n.getWrappedIndex(e)),
							pannelnode: n.pannels.item(e)
						}), n.renderPannelTextarea(e))
					};
				d.isNumber(o) ? setTimeout(function() {
					l()
				}, o) : l()
			},
			go: function te(e, t) {
				return this.switch_to(e, t), this
			},
			play: function ne() {
				var e = this;
				return null !== e.timer && clearTimeout(e.timer), e.timer = setTimeout(function() {
					e.next().play()
				}, Number(e.timeout)), e.stoped = !1, this
			},
			stop: function ie() {
				var e = this;
				return clearTimeout(e.timer), e.timer = null, e.stoped = !0, this
			}
		}), e.exports = o
	}, function(e, t) {
		e.exports = u
	}, function(e, t) {
		e.exports = d
	}, function(e, t) {
		e.exports = f
	}, function(e, t) {
		e.exports = p
	}, function(e, t, n) {
		var i = n(8);
		n(7);
		var a = n(10),
			o = i;
		a.augment(o, {
			_delegate: function r() {
				var e = this;
				return a.isFunction(arguments[1]) ? e.delegate(arguments[0], arguments[2], arguments[1]) : e.delegate.apply(e, arguments), e
			},
			indexOf: function s(e) {
				var t = this;
				if(a.isUndefined(e)) return null;
				e[0] && (e = e[0]);
				var n = 0;
				return t.each(function(t, a) {
					t = i.all(t), t[0] === e && (n = a)
				}), n
			},
			size: function l() {
				return this.length
			},
			set: function c(e, t) {
				return "innerHTML" === e ? this.html(t) : this.attr(e, t), this
			},
			get: function u(e) {
				var t = this,
					n = {
						innerHTML: function i() {
							return t.html()
						},
						region: function a() {
							return {
								height: t.height(),
								width: t.width()
							}
						}
					};
				if(e in n) return n[e]()
			},
			appendChild: function d() {
				return this.append.apply(this, arguments), this
			},
			setStyle: function f() {
				return this.css.apply(this, arguments), this
			},
			setStyles: function p() {
				return this.css.apply(this, arguments), this
			},
			cloneNode: function h() {
				return this.clone.apply(this, arguments)
			}
		}), i.create = function(e) {
			return i(e)
		}
	}, function(e, t, n) {
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			a = n(8),
			o = n(32);
		n(7), n(10), e.exports = {
			setHash: function r(e, t) {
				var n, a;
				"object" == (void 0 === e ? "undefined" : i(e)) ? (n = window.location.href, t = e) : n = e, n.indexOf("#") < 0 && (n += "#");
				var o = this.getHash(n);
				for(a in t) o[a] = t[a];
				n = n.split("#")[0] + "#";
				for(a in o) n += a + "=" + o[a] + "&";
				return n = n.substr(0, n.length - 1)
			},
			getHash: function s(e) {
				var t = e || window.location.href;
				if(t.indexOf("#") < 0) return {};
				var n = t.split("#")[1];
				return "" === n ? {} : ("&" == n[n.length - 1] && (n = n.substr(0, n.length - 1)), n = n.replace(/"/gi, "'"), n = n.replace(/=/gi, '":"'), n = n.replace(/&/gi, '","'), n += '"', n = '{"' + n + "}", o.parse(n))
			},
			_globalEval: function l(e) {
				if(e && /\S/.test(e)) {
					var t = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0],
						n = document.createElement("script");
					n.text = e, t.insertBefore(n, t.firstChild), setTimeout(function() {
						t.removeChild(n)
					}, 1)
				}
			},
			execScript: function c(e) {
				var t = this,
					n = new RegExp(/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/gi),
					i = a.one("head")[0],
					o, r, s, l, c, u, d = /\ssrc=(['"])(.*?)\1/i,
					f = /\scharset=(['"])(.*?)\1/i;
				for(n.lastIndex = 0; o = n.exec(e);) r = o[1], s = !!r && r.match(/\ssrc=(['"])(.*?)\1/i), s && s[2] ? (c = document.createElement("script"), c.src = s[2], (l = r.match(/\scharset=(['"])(.*?)\1/i)) && l[2] && (c.charset = l[2]), c.async = !0, i.appendChild(c)) : (u = o[2]) && u.length > 0 && t._globalEval(u)
			},
			isDaily: function u() {
				return !!/daily\.taobao\.net/.test(window.location.hostname)
			},
			getHiddenProp: function d() {
				if("hidden" in document) return "hidden";
				for(var e = ["webkit", "moz", "ms", "o"], t = 0; t < e.length; t++)
					if(e[t] + "Hidden" in document) return e[t] + "Hidden";
				return null
			},
			isHidden: function f() {
				var e = this.getHiddenProp();
				return !!e && document[e]
			}
		}
	}, function(e, t, n) {
		var i = n(8),
			a = n(5),
			o = n(4),
			r = n(38),
			s = n(3),
			l = n(11),
			c = .3,
			u = o.extend({
				initializer: function d() {
					this.initAd()
				},
				initAd: function f() {
					this.getAd(function(e) {
						var t = i(r(e[0]));
						i("body").prepend(t), t.slideDown(.3), t.find(".close").on("click", function(e) {
							t.slideUp(.3), l.sendPoints("dclose", e.target)
						})
					})
				},
				getAd: function p(e) {
					a.jsonp(s.host + "advert.html", {
						type: 1
					}, function(t) {
						t && t.data && t.data.length && e && e(t.data)
					})
				}
			}, {
				ATTRS: {}
			});
		e.exports = u
	}, function(e, t, n) {
		var i = n(16);
		e.exports = function() {
			var e = function n(e) {
				var t, n, i, a, o, r, s, l, c, u, d, f = this,
					p = f.root,
					h = f.buffer,
					m = f.scope,
					v = f.runtime,
					g = f.name,
					b = f.pos,
					w = m.data,
					y = m.affix,
					x = p.nativeCommands,
					_ = p.utils,
					S = _.callFn,
					T = _.callDataFn,
					k = _.callCommand,
					C = x.range,
					A = x["void"],
					I = x.foreach,
					N = x.forin,
					z = x.each,
					E = x["with"],
					L = x["if"],
					P = x.set,
					D = x.include,
					R = x.parse,
					O = x.extend,
					j = x.block,
					H = x.macro,
					X = x["debugger"];
				h.data += '<div class="adverse" data-spm="ad" style="background-color: ';
				var B = (t = y.bgColor) !== e ? t : (t = w.bgColor) !== e ? t : m.resolveLooseUp(["bgColor"]);
				h = h.writeEscaped(B), h.data += '">\n    <div class="close"></div>\n    <a href="', b.line = 3;
				var F = (t = y.schema) !== e ? t : (t = w.schema) !== e ? t : m.resolveLooseUp(["schema"]);
				h = h.writeEscaped(F), h.data += '" target="_blank" data-spm="dadvertise">\n        <img src="', b.line = 4;
				var M = (t = y.pic) !== e ? t : (t = w.pic) !== e ? t : m.resolveLooseUp(["pic"]);
				return h = h.writeEscaped(M), h.data += '" />\n    </a>\n</div>\n', h
			};
			if(this.root instanceof i) return e.apply(this, arguments);
			var t = new i(e);
			return t.render.apply(t, arguments)
		}
	}, function(e, t, n) {
		function i(e) {
			x.jsonp(h, {
				cat: e.id,
				destCity: T
			}, function(t) {
				t && t.data && t.data.length && a(e, t.data)
			})
		}

		function a(e, t) {
			if(t && !(t.length < 6)) {
				var n = "\n\t\t\t" + r(e) + '\n\t\t\t<div class="box">\n\t\t\t\t' + o(t, e.name) + "\n\t\t\t</div>",
					i = S.find(".dm-content-" + e.id);
				i.append(n), i.show(), k++, k === C ? (clearTimeout(I), new _({
					container: S[0],
					diff: 100
				})) : (clearTimeout(I), I = setTimeout(function() {
					new _({
						container: S[0],
						diff: 100
					})
				}, 500))
			}
		}

		function o(e, t) {
			for(var n = "", i = "", a = "", o = 0, r = e.length; o < r && o < 7; o++) {
				var s = e[o],
					c = s.formattedPriceStr.split("-");
				if(s.formattedPriceStr && "\u4ef7\u683c\u5f85\u5b9a" !== s.formattedPriceStr) {
					var u = c.length ? c[0] : s.formattedPriceStr;
					s.formattedPriceStr = "\xa5" + u + "<span>\u8d77</span>"
				}
				o ? a += d(s, o, t) : i += l(s, o, t)
			}
			return n = i + '\n\t\t\t<div class="box-right">\n\t\t\t\t' + a + "\n\t\t\t</div>"
		}

		function r(e) {
			var t = "ctl";
			"\u513f\u7ae5\u4eb2\u5b50" == e.name && (t = "tn");
			var n = "//search.damai." + m + "/search.htm?" + t + "=" + encodeURIComponent(e.name) + "&order=1";
			"" != T && "\u5168\u56fd" != T && (n += "&cty=" + encodeURIComponent(T));
			var i = e.link || n;
			return '<div class="head">\n\t\t\t\t<span class="head-title">' + e.name + '</span>\n\t\t\t\t<a href="' + i + '" target="_blank" data-spm="dviewall">\n\t\t\t\t\t<span class="head-more">\u67e5\u770b\u5168\u90e8</span>\n\t\t\t\t</a>\n\t\t\t</div>'
		}

		function s(e, t) {
			return e.toString().length >= 12 ? "//detail.damai." + m + "/item.htm?id=" + e + "&clicktitle=" + t : "//piao.damai." + m + "/" + e + ".html?clicktitle=" + t
		}

		function l(e, t, n) {
			return '<a href="' + s(e.id, n) + '" class="box-left" target="_blank" data-spm="ditem_' + t + '">\n\t\t\t\t<img class="box-left__bg" data-ks-lazyload="' + e.verticalPic + '" src="' + A + '" />\n\t\t\t\t<div class="box-left__info">\n\t\t\t\t\t<div class="title">' + e.name + ' </div>\n\t\t\t\t\t<div class="details">' + e.formattedPriceStr + "</div>\n\t\t\t\t</div>\n\t\t\t</a>"
		}

		function c(e, t) {
			if(e.replace(/[\u4e00-\u9fa5]/g, "**").length <= t) return e;
			for(var n = 0, i = "", a = 0; a < e.length && !((n += /[\u4e00-\u9fa5]/.test(e[a]) ? 2 : 1) > t); a++) i += e[a];
			return i + " ..."
		}

		function u(e) {
			var t = e;
			return(v.ie || v.firefox || v.edge) && (t = c(e, 32)), t
		}

		function d(e, t, n) {
			var i = "";
			e.venueName = e.venueName || "\u573a\u9986\u5f85\u5b9a", e.showTime = e.showTime || "\u65f6\u95f4\u5f85\u5b9a", i = e.cityName && e.venueName ? e.cityName + " | " + e.venueName : e.cityName || e.venueName;
			var a = u(e.name);
			return '<a href="' + s(e.id, n) + '" class="box-right__item" data-spm="ditem_' + t + '" target="_blank">\n\t\t\t\t<div class="itemimg">\n\t\t\t\t\t<img data-ks-lazyload="' + e.verticalPic + '" src="' + A + '" />\n\t\t\t\t</div>\n\t\t\t\t<div class="iteminfo">\n\t\t\t\t\t<div class="title" title="' + e.name + '">' + a + '</div>\n\t\t\t\t\t<div class="venue">' + i + '</div>\n\t\t\t\t\t<div class="showtime">' + e.showTime + '</div>\n\t\t\t\t\t<div class="price">' + e.formattedPriceStr + "</div>\n\t\t\t\t</div>\n\t\t\t</a>"
		}
		var f = n(3),
			p = n(11),
			h = f.host + "/search.html",
			m = f.env,
			v = p.getUA(),
			g = n(4),
			b = n(8),
			w = n(10),
			y = n(32),
			x = n(5),
			_ = n(40),
			S = b(".dm-content-wrap"),
			T = p.getCookie("destCity");
		T = T ? unescape(T) : "\u5168\u56fd";
		var k = 0,
			C = 0,
			A = "//img.alicdn.com/tfs/TB1RXJhA7yWBuNjy0FpXXassXXa-540-720.png",
			I = void 0,
			N = g.extend({
				initializer: function z() {
					var e = S.find(".J-data-dm-content").html();
					if(e = w.trim(e)) {
						e = y.parse(e), C = e.length;
						for(var t = 0; t < C; t++) i(e[t])
					}
				}
			}, {
				ATTRS: {}
			});
		e.exports = N
	}, function(e, t, n) {
		function i(e) {
			var t = !!~e.indexOf(".alicdn.com"),
				n = e.indexOf(".jpg") || e.indexOf(".png");
			return t && n && (e += "_.webp"), e
		}

		function a(e) {
			var t, n, i = [],
				a;
			return function(o, r) {
				return 0 === r || r || (r = 1), 1 & r && !n && (n = !0, e(function(e) {
					for(t = e; a = i.shift();) try {
						a && a.apply(null, [t])
					} catch(n) {
						setTimeout(function() {
							throw n
						}, 0)
					}
				})), t ? (o && o.apply(null, [t]), t) : (2 & r || o && i.push(o), t)
			}
		}

		function o(e, t, n) {
			function i() {
				a && (a.cancel(), a = 0), o = p.now(), e.apply(n || this, arguments), r = p.now()
			}
			var a, o = 0,
				r = 0,
				t = t || 150;
			return p.mix(function() {
				!o || r >= o && p.now() - r > t || r < o && p.now() - o > 8 * t ? i() : (a && a.cancel(), a = p.later(i, t, 0, null, arguments))
			}, {
				stop: function s() {
					a && (a.cancel(), a = 0)
				}
			})
		}

		function r(e, t, n) {
			e.style.display = S, e.className = "";
			var i = h.create("<div>");
			e.parentNode.insertBefore(i, e);
			var a = e.value;
			if(p.isFunction(n)) {
				var o = n({
					type: "textarea",
					elem: e,
					value: a
				});
				o && (a = o)
			}
			return h.html(i, a, t), i
		}

		function s(e) {
			return e._ks_lazy_width ? e._ks_lazy_width : (e._ks_lazy_width = h.outerWidth(e), e._ks_lazy_width)
		}

		function l(e) {
			return e._ks_lazy_height ? e._ks_lazy_height : (e._ks_lazy_height = h.outerHeight(e), e._ks_lazy_height)
		}

		function c(e, t, n) {
			if(!e.offsetWidth) return !1;
			var i = h.offset(e),
				a = !0,
				o, r = i.left,
				c = i.top,
				u = {
					left: r,
					top: c,
					right: r + s(e),
					bottom: c + l(e)
				};
			return o = d(t, u), o && n && (a = d(n, u)), a && o
		}

		function u(e, t) {
			var n = this;
			if(!(n instanceof u)) return new u(e, t);
			var i = e;
			p.isPlainObject(i) || (i = t || {}, e && (i.container = e)), u.superclass.constructor.call(n, i), n._callbacks = {}, n._containerIsNotDocument = 9 != n.get("container").nodeType, p.isArray(i.container) && (n._backCompact = 1), n._initLoadEvent(), i.container && n.addElements(i.container), n._loadFn(), p.ready(function() {
				n._loadFn()
			}), n.resume()
		}

		function d(e, t) {
			var n = {};
			return n.top = Math.max(e.top, t.top), n.bottom = Math.min(e.bottom, t.bottom), n.left = Math.max(e.left, t.left), n.right = Math.min(e.right, t.right), n.bottom >= n.top && n.right >= n.left
		}

		function f(e, t, n, i) {
			"img-src" === t && (t = "img"), p.isArray(e) || (e = [h.get(e)]);
			var a = new u(b, {});
			a.set("imgFlag", n || w + x), a.set("areaFlag", n || y + x), a.set("onStart", i), a.set("force", !0), a.addElements(e, t)
		}
		var p = KISSY,
			h = n(9),
			m = n(7),
			v = n(4),
			g = p.Env.host,
			b = g.document,
			w = "data-ks-lazyload",
			y = "ks-datalazyload",
			x = "-custom",
			_ = "default",
			S = "none",
			T = "scroll",
			k = "touchmove",
			C = "resize",
			A = 100,
			I = 0,
			N = function z(e, t, a, o, r) {
				t = t || w;
				var s = e.getAttribute(t),
					l = {
						type: "img",
						elem: e,
						src: s
					},
					c = !p.isFunction(a) || a(l) !== !1,
					u = n(41);
				if(c && l.src) {
					var d = function f(n) {
						e.src != n && (e.src = n), e.removeAttribute(t)
					};
					p.isFunction(o) ? u.isSupport(function(e) {
						d(e ? o(l.src) : l.src)
					}) : r ? u.isSupport(function(e) {
						d(e ? i(l.src) : l.src)
					}) : d(l.src)
				}
			};
		u.ATTRS = {
			diff: {
				value: "default"
			},
			placeholder: {
				value: "//g.alicdn.com/s.gif"
			},
			execScript: {
				value: !0
			},
			container: {
				setter: function E(e) {
					return e = e || b, p.isWindow(e) ? e = e.document : (e = h.get(e), "body" == h.nodeName(e) && (e = e.ownerDocument)), e
				},
				valueFn: function L() {
					return b
				}
			},
			autoDestroy: {
				value: !0
			},
			onStart: {
				value: null
			}
		}, p.extend(u, v, {
			_initLoadEvent: function P() {
				var e = this,
					t = e.get("autoDestroy");
				e.imgHandle = function() {
					N(this, e.get("imgFlag"), e.get("onStart"), e.get("webpReplacer"), e.get("webp"))
				}, e.textareaHandle = function() {
					e.addElements(r(this, e.get("execScript"), e.get("onStart")))
				}, e._loadFn = o(function() {
					t && 0 == e._counter && p.isEmptyObject(e._callbacks) && e.destroy(), e._loadItems()
				}, 100, e)
			},
			refresh: function D() {
				this._loadFn()
			},
			_loadItems: function R() {
				var e = this,
					t = e.get("container");
				e._containerIsNotDocument && !t.offsetWidth || (e._windowRegion = e._getBoundingRect(), !e._backCompact && e._containerIsNotDocument && (e._containerRegion = e._getBoundingRect(e.get("container"))), p.each(e._callbacks, function(t, n) {
					t && e._loadItem(n, t)
				}))
			},
			_loadItem: function O(e, t) {
				var n = this,
					t = t || n._callbacks[e];
				if(!t) return !0;
				var i = t.el,
					a = !1,
					o = t.fn;
				if(n.get("force") || c(i, n._windowRegion, n._containerRegion)) try {
					a = o.call(i)
				} catch(r) {
					setTimeout(function() {
						throw r
					}, 0)
				}
				return a !== !1 && delete n._callbacks[e], a
			},
			addCallback: function j(e, t) {
				e = h.get(e);
				var n = this,
					i = n._callbacks,
					a = {
						el: e || document,
						fn: t || p.noop
					},
					o = ++I;
				i[o] = a, n._windowRegion ? n._loadItem(o, a) : n.refresh()
			},
			removeCallback: function H(e, t) {
				e = h.get(e);
				var n = this._callbacks;
				p.each(n, function(i, a) {
					i.el == e && (t ? i.fn == t : 1) && delete n[a]
				})
			},
			getElements: function X() {
				var e = this,
					t = [],
					n = [],
					i = e._callbacks;
				return p.each(i, function(i) {
					i.fn == e.imgHandle && t.push(i.el), i.fn == e.textareaHandle && n.push(i.el)
				}), {
					images: this._images,
					textareas: this._textareas
				}
			},
			addElements: function B(e, t) {
				"string" == typeof e ? e = h.query(e) : p.isArray(e) || (e = [e]);
				var n = this;
				n._counter = n._counter || 0, p.each(e, function(e) {
					t && "img" !== t || p.each(p.filter([e].concat(h.query("img", e)), function(e) {
						return e.getAttribute && e.getAttribute(n.get("imgFlag") || w)
					}, n), function(e) {
						n.onPlaceHolder = n.onPlaceHolder || a(function(e) {
							var t = new Image,
								i = n.get("placeholder");
							t.src = i, t.onload = t.onerror = function() {
								e(i)
							}
						}), e.offsetWidth ? n.addCallback(e, n.imgHandle) : (n._counter++, e.onload = function() {
							n._counter--, n.addCallback(e, n.imgHandle)
						}, e.src || n.onPlaceHolder(function(t) {
							e.src || (e.src = t)
						}))
					}), t && "textarea" !== t || p.each(h.query("textarea." + (n.get("areaFlag") || y), e), function(e) {
						n.addCallback(e, n.textareaHandle)
					})
				})
			},
			removeElements: function F(e) {
				"string" == typeof e ? e = h.query(e) : p.isArray(e) || (e = [e]);
				var t = this,
					n = t._callbacks;
				p.each(n, function(t, i) {
					p.inArray(t.el, e) && delete n[i]
				})
			},
			_getBoundingRect: function M(e) {
				var t, n, i, a;
				if(e !== undefined) {
					t = h.outerHeight(e), n = h.outerWidth(e);
					var o = h.offset(e);
					i = o.left, a = o.top
				} else t = h.viewportHeight(), n = h.viewportWidth(), i = h.scrollLeft(), a = h.scrollTop();
				var r = this.get("diff"),
					s = "default" === r ? n : r,
					l = 0,
					c = s,
					u = "default" === r ? t : r,
					d = 0,
					f = u,
					m = i + n,
					v = a + t;
				return p.isObject(r) && (l = r.left || 0, c = r.right || 0, d = r.top || 0, f = r.bottom || 0), i -= l, m += c, a -= d, v += f, {
					left: i,
					top: a,
					right: m,
					bottom: v
				}
			},
			pause: function U() {
				var e = this,
					t = e._loadFn;
				if(!e._destroyed && (m.remove(g, "scroll", t), m.remove(g, "touchmove", t), m.remove(g, "resize", t), t.stop(), e._containerIsNotDocument)) {
					var n = e.get("container");
					m.remove(n, "scroll", t), m.remove(n, "touchmove", t)
				}
			},
			resume: function W() {
				var e = this,
					t = e._loadFn;
				if(!e._destroyed && (m.on(g, "scroll", t), m.on(g, "touchmove", t), m.on(g, "resize", t), e._containerIsNotDocument)) {
					var n = e.get("container");
					m.on(n, "scroll", t), m.on(n, "touchmove", t)
				}
			},
			destroy: function Y() {
				var e = this;
				e.pause(), e._callbacks = {}, e.fire("destroy"), e._destroyed = 1
			}
		}), u.loadCustomLazyData = f, p.DataLazyload = u, e.exports = u
	}, function(e, t) {
		function n(e) {
			var t;
			try {
				t = window.localStorage && window.localStorage.getItem("webpsupport")
			} catch(n) {}
			if(null !== t) return void e("true" === t);
			i(function(t) {
				try {
					window.localStorage.setItem("webpsupport", t)
				} catch(n) {}
				e(t)
			})
		}

		function i(e) {
			var t = new Image,
				n;
			t.onload = t.onerror = function() {
				n || (n = !0, e(2 === t.width && 2 === t.height))
			}, setTimeout(function() {
				n || (n = !0, e(!1))
			}, 16), t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
		}

		function a() {
			var e = window;
			if("object" === ("undefined" == typeof localStorage ? "undefined" : o(localStorage))) {
				var t = "test",
					n = window.sessionStorage;
				try {
					return n.setItem("test", "1"), n.removeItem("test"), e.__isLocalStorageNameSupported__ = 1, !0
				} catch(i) {
					return e.__isLocalStorageNameSupported__ = -1, !1
				}
			}
		}
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			r = window.WebP = {};
		r.isSupport = function(e) {
			var t = window;
			if(e)
				if(!t.__isLocalStorageNameSupported__ && a(), t.__isLocalStorageNameSupported__ === -1) e(!1);
				else if(1 === t.__isLocalStorageNameSupported__) {
				if(r._isSupport === undefined) return void n(function(t) {
					r._isSupport = t, e(t)
				});
				e(r._isSupport)
			} else e(!1)
		}, e.exports = r
	}])
}), KISSY.use("p/index/index");