import { options as n } from '../../../preact-10';
var t,
	u,
	r,
	i = [],
	o = n.__r,
	f = n.diffed,
	c = n.__c,
	e = n.unmount;
function a(t) {
	n.__h && n.__h(u);
	var r = u.__H || (u.__H = { t: [], u: [] });
	return t >= r.t.length && r.t.push({}), r.t[t];
}
function v(n) {
	return m(x, n);
}
function m(n, r, i) {
	var o = a(t++);
	return (
		o.__c ||
			((o.__c = u),
			(o.i = [
				i ? i(r) : x(void 0, r),
				function(t) {
					var u = n(o.i[0], t);
					o.i[0] !== u && ((o.i[0] = u), o.__c.setState({}));
				}
			])),
		o.i
	);
}
function p(n, r) {
	var i = a(t++);
	q(i.o, r) && ((i.i = n), (i.o = r), u.__H.u.push(i));
}
function l(n, r) {
	var i = a(t++);
	q(i.o, r) && ((i.i = n), (i.o = r), u.__h.push(i));
}
function d(n) {
	return y(function() {
		return { current: n };
	}, []);
}
function s(n, t, u) {
	l(
		function() {
			'function' == typeof n ? n(t()) : n && (n.current = t());
		},
		null == u ? u : u.concat(n)
	);
}
function y(n, u) {
	var r = a(t++);
	return q(r.o, u) ? ((r.o = u), (r.v = n), (r.i = n())) : r.i;
}
function T(n, t) {
	return y(function() {
		return n;
	}, t);
}
function w(n) {
	var r = u.context[n.__c];
	if (!r) return n.__;
	var i = a(t++);
	return null == i.i && ((i.i = !0), r.sub(u)), r.props.value;
}
function A(t, u) {
	n.useDebugValue && n.useDebugValue(u ? u(t) : t);
}
function F() {
	i.some(function(n) {
		n.__P && (n.__H.u.forEach(_), n.__H.u.forEach(g), (n.__H.u = []));
	}),
		(i = []);
}
function _(n) {
	n.m && n.m();
}
function g(n) {
	var t = n.i();
	'function' == typeof t && (n.m = t);
}
function q(n, t) {
	return (
		!n ||
		t.some(function(t, u) {
			return t !== n[u];
		})
	);
}
function x(n, t) {
	return 'function' == typeof t ? t(n) : t;
}
(n.__r = function(n) {
	o && o(n),
		(t = 0),
		(u = n.__c).__H && (u.__H.u.forEach(_), u.__H.u.forEach(g), (u.__H.u = []));
}),
	(n.diffed = function(t) {
		f && f(t);
		var u = t.__c;
		if (u) {
			var o = u.__H;
			o &&
				o.u.length &&
				((1 !== i.push(u) && r === n.requestAnimationFrame) ||
					(
						(r = n.requestAnimationFrame) ||
						function(n) {
							var t,
								u = function() {
									clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
								},
								r = setTimeout(u, 100);
							'undefined' != typeof window && (t = requestAnimationFrame(u));
						}
					)(F));
		}
	}),
	(n.__c = function(n, t) {
		t.some(function(n) {
			n.__h.forEach(_),
				(n.__h = n.__h.filter(function(n) {
					return !n.i || g(n);
				}));
		}),
			c && c(n, t);
	}),
	(n.unmount = function(n) {
		e && e(n);
		var t = n.__c;
		if (t) {
			var u = t.__H;
			u &&
				u.t.forEach(function(n) {
					return n.m && n.m();
				});
		}
	});
export {
	v as useState,
	m as useReducer,
	p as useEffect,
	l as useLayoutEffect,
	d as useRef,
	s as useImperativeHandle,
	y as useMemo,
	T as useCallback,
	w as useContext,
	A as useDebugValue
};
//# sourceMappingURL=hooks.module.js.map
