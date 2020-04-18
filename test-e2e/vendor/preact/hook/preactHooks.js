!(function (n, t) {
	"object" == typeof exports && "undefined" != typeof module
		? t(exports, require("preact"))
		: "function" == typeof define && define.amd
		? define(["exports", "preact"], t)
		: t((n.preactHooks = {}), n.preact);
})(this, function (n, t) {
	var u,
		i,
		r,
		o = 0,
		f = [],
		e = t.options.__r,
		c = t.options.diffed,
		a = t.options.__c,
		v = t.options.unmount;
	function p(n, u) {
		t.options.__h && t.options.__h(i, n, o || u), (o = 0);
		var r = i.__H || (i.__H = { __: [], __h: [] });
		return n >= r.__.length && r.__.push({}), r.__[n];
	}
	function d(n) {
		return (o = 1), y(q, n);
	}
	function y(n, t, r) {
		var o = p(u++, 2);
		return (
			o.__c ||
				((o.__c = i),
				(o.__ = [
					r ? r(t) : q(void 0, t),
					function (t) {
						var u = n(o.__[0], t);
						o.__[0] !== u && ((o.__[0] = u), o.__c.setState({}));
					},
				])),
			o.__
		);
	}
	function s(n, r) {
		var o = p(u++, 4);
		!t.options.__s && T(o.__H, r) && ((o.__ = n), (o.__H = r), i.__h.push(o));
	}
	function l(n, t) {
		var i = p(u++, 7);
		return T(i.__H, t) ? ((i.__H = t), (i.__h = n), (i.__ = n())) : i.__;
	}
	function m() {
		f.some(function (n) {
			if (n.__P)
				try {
					n.__H.__h.forEach(h), n.__H.__h.forEach(x), (n.__H.__h = []);
				} catch (u) {
					return (n.__H.__h = []), t.options.__e(u, n.__v), !0;
				}
		}),
			(f = []);
	}
	function h(n) {
		n.t && n.t();
	}
	function x(n) {
		var t = n.__();
		"function" == typeof t && (n.t = t);
	}
	function T(n, t) {
		return (
			!n ||
			t.some(function (t, u) {
				return t !== n[u];
			})
		);
	}
	function q(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	(t.options.__r = function (n) {
		e && e(n),
			(u = 0),
			(i = n.__c).__H &&
				(i.__H.__h.forEach(h), i.__H.__h.forEach(x), (i.__H.__h = []));
	}),
		(t.options.diffed = function (n) {
			c && c(n);
			var u = n.__c;
			if (u) {
				var i = u.__H;
				i &&
					i.__h.length &&
					((1 !== f.push(u) && r === t.options.requestAnimationFrame) ||
						(
							(r = t.options.requestAnimationFrame) ||
							function (n) {
								var t,
									u = function () {
										clearTimeout(i), cancelAnimationFrame(t), setTimeout(n);
									},
									i = setTimeout(u, 100);
								"undefined" != typeof window && (t = requestAnimationFrame(u));
							}
						)(m));
			}
		}),
		(t.options.__c = function (n, u) {
			u.some(function (n) {
				try {
					n.__h.forEach(h),
						(n.__h = n.__h.filter(function (n) {
							return !n.__ || x(n);
						}));
				} catch (i) {
					u.some(function (n) {
						n.__h && (n.__h = []);
					}),
						(u = []),
						t.options.__e(i, n.__v);
				}
			}),
				a && a(n, u);
		}),
		(t.options.unmount = function (n) {
			v && v(n);
			var u = n.__c;
			if (u) {
				var i = u.__H;
				if (i)
					try {
						i.__.forEach(function (n) {
							return n.t && n.t();
						});
					} catch (n) {
						t.options.__e(n, u.__v);
					}
			}
		}),
		(n.useState = d),
		(n.useReducer = y),
		(n.useEffect = function (n, r) {
			var o = p(u++, 3);
			!t.options.__s &&
				T(o.__H, r) &&
				((o.__ = n), (o.__H = r), i.__H.__h.push(o));
		}),
		(n.useLayoutEffect = s),
		(n.useRef = function (n) {
			return (
				(o = 5),
				l(function () {
					return { current: n };
				}, [])
			);
		}),
		(n.useImperativeHandle = function (n, t, u) {
			(o = 6),
				s(
					function () {
						"function" == typeof n ? n(t()) : n && (n.current = t());
					},
					null == u ? u : u.concat(n),
				);
		}),
		(n.useMemo = l),
		(n.useCallback = function (n, t) {
			return (
				(o = 8),
				l(function () {
					return n;
				}, t)
			);
		}),
		(n.useContext = function (n) {
			var t = i.context[n.__c],
				r = p(u++, 9);
			return (
				(r.__c = n),
				t ? (null == r.__ && ((r.__ = !0), t.sub(i)), t.props.value) : n.__
			);
		}),
		(n.useDebugValue = function (n, u) {
			t.options.useDebugValue && t.options.useDebugValue(u ? u(n) : n);
		}),
		(n.useErrorBoundary = function (n) {
			var t = p(u++, 10),
				r = d();
			return (
				(t.__ = n),
				i.componentDidCatch ||
					(i.componentDidCatch = function (n) {
						t.__ && t.__(n), r[1](n);
					}),
				[
					r[0],
					function () {
						r[1](void 0);
					},
				]
			);
		});
});
//# sourceMappingURL=hooks.umd.js.map
