_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [63],
  {
    Ix5F: function (e, t, n) {
      "use strict";
      var o = n("nKUr"),
        r = (n("q1tI"), n("YFqc")),
        c = n.n(r);
      t.a = function (e) {
        var t = e.pageTitle,
          n = e.homePageUrl,
          r = e.homePageText,
          a = e.activePageText;
        return Object(o.jsxs)("div", {
          className: "page-title-area",
          children: [
            Object(o.jsx)("div", {
              className: "container",
              children: Object(o.jsxs)("div", {
                className: "page-title-content",
                children: [
                  Object(o.jsxs)("ul", {
                    children: [
                      Object(o.jsx)("li", {
                        children: Object(o.jsx)(c.a, {
                          href: n,
                          children: Object(o.jsx)("a", { children: r }),
                        }),
                      }),
                      Object(o.jsx)("li", { className: "active", children: a }),
                    ],
                  }),
                  Object(o.jsx)("h2", { children: t }),
                ],
              }),
            }),
            Object(o.jsx)("div", {
              className: "shape9",
              children: Object(o.jsx)("img", {
                src: "/images/shape8.svg",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    YFqc: function (e, t, n) {
      e.exports = n("cTJO");
    },
    cTJO: function (e, t, n) {
      "use strict";
      var o = n("zoAU"),
        r = n("7KCV");
      (t.__esModule = !0), (t.default = void 0);
      var c = r(n("q1tI")),
        a = n("elyg"),
        i = n("nOHt"),
        s = n("vNVm"),
        l = {};
      function d(e, t, n, o) {
        if (e && (0, a.isLocalURL)(t)) {
          e.prefetch(t, n, o).catch(function (e) {
            0;
          });
          var r =
            o && "undefined" !== typeof o.locale ? o.locale : e && e.locale;
          l[t + "%" + n + (r ? "%" + r : "")] = !0;
        }
      }
      var u = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, i.useRouter)(),
          r = (n && n.pathname) || "/",
          u = c.default.useMemo(
            function () {
              var t = (0, a.resolveHref)(r, e.href, !0),
                n = o(t, 2),
                c = n[0],
                i = n[1];
              return {
                href: c,
                as: e.as ? (0, a.resolveHref)(r, e.as) : i || c,
              };
            },
            [r, e.href, e.as]
          ),
          h = u.href,
          f = u.as,
          b = e.children,
          j = e.replace,
          p = e.shallow,
          m = e.scroll,
          x = e.locale;
        "string" === typeof b && (b = c.default.createElement("a", null, b));
        var O = c.Children.only(b),
          g = O && "object" === typeof O && O.ref,
          v = (0, s.useIntersection)({ rootMargin: "200px" }),
          y = o(v, 2),
          E = y[0],
          w = y[1],
          I = c.default.useCallback(
            function (e) {
              E(e),
                g &&
                  ("function" === typeof g
                    ? g(e)
                    : "object" === typeof g && (g.current = e));
            },
            [g, E]
          );
        (0, c.useEffect)(
          function () {
            var e = w && t && (0, a.isLocalURL)(h),
              o = "undefined" !== typeof x ? x : n && n.locale,
              r = l[h + "%" + f + (o ? "%" + o : "")];
            e && !r && d(n, h, f, { locale: o });
          },
          [f, h, w, x, t, n]
        );
        var A = {
          ref: I,
          onClick: function (e) {
            O.props &&
              "function" === typeof O.props.onClick &&
              O.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, o, r, c, i, s) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, a.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == i && (i = o.indexOf("#") < 0),
                    t[r ? "replace" : "push"](n, o, {
                      shallow: c,
                      locale: s,
                      scroll: i,
                    }).then(function (e) {
                      e && i && document.body.focus();
                    }));
                })(e, n, h, f, j, p, m, x);
          },
          onMouseEnter: function (e) {
            (0, a.isLocalURL)(h) &&
              (O.props &&
                "function" === typeof O.props.onMouseEnter &&
                O.props.onMouseEnter(e),
              d(n, h, f, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === O.type && !("href" in O.props))) {
          var C = "undefined" !== typeof x ? x : n && n.locale,
            N = (0, a.getDomainLocale)(
              f,
              C,
              n && n.locales,
              n && n.domainLocales
            );
          A.href =
            N ||
            (0, a.addBasePath)((0, a.addLocale)(f, C, n && n.defaultLocale));
        }
        return c.default.cloneElement(O, A);
      };
      t.default = u;
    },
    csvi: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("nKUr"),
        r = n("q1tI"),
        c = n.n(r),
        a = n("Ix5F");
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function l(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function f(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && j(e, t);
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function j(e, t) {
        return (j =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              c = Object.keys(e);
            for (o = 0; o < c.length; o++)
              (n = c[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (o = 0; o < c.length; o++)
            (n = c[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? m(e)
          : t;
      }
      function O(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = b(e);
          if (t) {
            var r = b(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return x(this, n);
        };
      }
      function g(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return v(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return v(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var y = function e(t) {
          var n = this,
            o = t.expanded,
            r = void 0 === o ? [] : o,
            c = t.allowMultipleExpanded,
            a = void 0 !== c && c,
            s = t.allowZeroExpanded,
            l = void 0 !== s && s;
          i(this, e),
            d(this, "expanded", void 0),
            d(this, "allowMultipleExpanded", void 0),
            d(this, "allowZeroExpanded", void 0),
            d(this, "toggleExpanded", function (e) {
              return n.isItemDisabled(e)
                ? n
                : n.isItemExpanded(e)
                ? n.augment({
                    expanded: n.expanded.filter(function (t) {
                      return t !== e;
                    }),
                  })
                : n.augment({
                    expanded: n.allowMultipleExpanded
                      ? [].concat(g(n.expanded), [e])
                      : [e],
                  });
            }),
            d(this, "isItemDisabled", function (e) {
              var t = n.isItemExpanded(e),
                o = 1 === n.expanded.length;
              return Boolean(t && !n.allowZeroExpanded && o);
            }),
            d(this, "isItemExpanded", function (e) {
              return -1 !== n.expanded.indexOf(e);
            }),
            d(this, "getPanelAttributes", function (e, t) {
              var o = null !== t && void 0 !== t ? t : n.isItemExpanded(e);
              return {
                role: n.allowMultipleExpanded ? void 0 : "region",
                "aria-hidden": n.allowMultipleExpanded ? !o : void 0,
                "aria-labelledby": n.getButtonId(e),
                id: n.getPanelId(e),
                hidden: !o || void 0,
              };
            }),
            d(this, "getHeadingAttributes", function () {
              return { role: "heading" };
            }),
            d(this, "getButtonAttributes", function (e, t) {
              var o = null !== t && void 0 !== t ? t : n.isItemExpanded(e),
                r = n.isItemDisabled(e);
              return {
                id: n.getButtonId(e),
                "aria-disabled": r,
                "aria-expanded": o,
                "aria-controls": n.getPanelId(e),
                role: "button",
                tabIndex: 0,
              };
            }),
            d(this, "getPanelId", function (e) {
              return "accordion__panel-".concat(e);
            }),
            d(this, "getButtonId", function (e) {
              return "accordion__heading-".concat(e);
            }),
            d(this, "augment", function (t) {
              return new e(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? h(Object(n), !0).forEach(function (t) {
                          d(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : h(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })(
                  {
                    expanded: n.expanded,
                    allowMultipleExpanded: n.allowMultipleExpanded,
                    allowZeroExpanded: n.allowZeroExpanded,
                  },
                  t
                )
              );
            }),
            (this.expanded = r),
            (this.allowMultipleExpanded = a),
            (this.allowZeroExpanded = l);
        },
        E = Object(r.createContext)(null),
        w = (function (e) {
          f(n, e);
          var t = O(n);
          function n() {
            var e;
            i(this, n);
            for (var o = arguments.length, r = new Array(o), c = 0; c < o; c++)
              r[c] = arguments[c];
            return (
              d(
                m((e = t.call.apply(t, [this].concat(r)))),
                "state",
                new y({
                  expanded: e.props.preExpanded,
                  allowMultipleExpanded: e.props.allowMultipleExpanded,
                  allowZeroExpanded: e.props.allowZeroExpanded,
                })
              ),
              d(m(e), "toggleExpanded", function (t) {
                e.setState(
                  function (e) {
                    return e.toggleExpanded(t);
                  },
                  function () {
                    e.props.onChange && e.props.onChange(e.state.expanded);
                  }
                );
              }),
              d(m(e), "isItemDisabled", function (t) {
                return e.state.isItemDisabled(t);
              }),
              d(m(e), "isItemExpanded", function (t) {
                return e.state.isItemExpanded(t);
              }),
              d(m(e), "getPanelAttributes", function (t, n) {
                return e.state.getPanelAttributes(t, n);
              }),
              d(m(e), "getHeadingAttributes", function () {
                return e.state.getHeadingAttributes();
              }),
              d(m(e), "getButtonAttributes", function (t, n) {
                return e.state.getButtonAttributes(t, n);
              }),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.allowZeroExpanded,
                    n = e.allowMultipleExpanded;
                  return Object(r.createElement)(
                    E.Provider,
                    {
                      value: {
                        allowMultipleExpanded: n,
                        allowZeroExpanded: t,
                        toggleExpanded: this.toggleExpanded,
                        isItemDisabled: this.isItemDisabled,
                        isItemExpanded: this.isItemExpanded,
                        getPanelAttributes: this.getPanelAttributes,
                        getHeadingAttributes: this.getHeadingAttributes,
                        getButtonAttributes: this.getButtonAttributes,
                      },
                    },
                    this.props.children || null
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent);
      d(w, "defaultProps", {
        allowMultipleExpanded: !1,
        allowZeroExpanded: !1,
      });
      var I,
        A = (function (e) {
          f(n, e);
          var t = O(n);
          function n() {
            var e;
            i(this, n);
            for (var o = arguments.length, r = new Array(o), c = 0; c < o; c++)
              r[c] = arguments[c];
            return (
              d(
                m((e = t.call.apply(t, [this].concat(r)))),
                "renderChildren",
                function (t) {
                  return t ? e.props.children(t) : null;
                }
              ),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.createElement)(
                    E.Consumer,
                    null,
                    this.renderChildren
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent),
        C = function (e) {
          var t = e.className,
            n = void 0 === t ? "accordion" : t,
            o = e.allowMultipleExpanded,
            c = e.allowZeroExpanded,
            a = e.onChange,
            i = e.preExpanded,
            s = p(e, [
              "className",
              "allowMultipleExpanded",
              "allowZeroExpanded",
              "onChange",
              "preExpanded",
            ]);
          return Object(r.createElement)(
            w,
            {
              preExpanded: i,
              allowMultipleExpanded: o,
              allowZeroExpanded: c,
              onChange: a,
            },
            Object(r.createElement)(
              "div",
              u({ "data-accordion-component": "Accordion", className: n }, s)
            )
          );
        };
      !(function (e) {
        (e.Accordion = "Accordion"),
          (e.AccordionItem = "AccordionItem"),
          (e.AccordionItemButton = "AccordionItemButton"),
          (e.AccordionItemHeading = "AccordionItemHeading"),
          (e.AccordionItemPanel = "AccordionItemPanel");
      })(I || (I = {}));
      var N = I,
        P = 0;
      function T() {
        var e = P;
        return (P += 1), "raa-".concat(e);
      }
      var U = /[\u0009\u000a\u000c\u000d\u0020]/g;
      function _(e) {
        return (
          ("" !== e && !U.test(e)) ||
          (console.error(
            'uuid must be a valid HTML5 id but was given "'.concat(
              e,
              '", ASCII whitespaces are forbidden'
            )
          ),
          !1)
        );
      }
      var M = Object(r.createContext)(null),
        D = (function (e) {
          f(n, e);
          var t = O(n);
          function n() {
            var e;
            i(this, n);
            for (var o = arguments.length, c = new Array(o), a = 0; a < o; a++)
              c[a] = arguments[a];
            return (
              d(
                m((e = t.call.apply(t, [this].concat(c)))),
                "toggleExpanded",
                function () {
                  e.props.accordionContext.toggleExpanded(e.props.uuid);
                }
              ),
              d(m(e), "renderChildren", function (t) {
                var n = e.props,
                  o = n.uuid,
                  c = n.dangerouslySetExpanded,
                  a = null !== c && void 0 !== c ? c : t.isItemExpanded(o),
                  i = t.isItemDisabled(o),
                  s = t.getPanelAttributes(o, c),
                  l = t.getHeadingAttributes(o),
                  d = t.getButtonAttributes(o, c);
                return Object(r.createElement)(
                  M.Provider,
                  {
                    value: {
                      uuid: o,
                      expanded: a,
                      disabled: i,
                      toggleExpanded: e.toggleExpanded,
                      panelAttributes: s,
                      headingAttributes: l,
                      buttonAttributes: d,
                    },
                  },
                  e.props.children
                );
              }),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.createElement)(A, null, this.renderChildren);
                },
              },
            ]),
            n
          );
        })(r.Component),
        H = function (e) {
          return Object(r.createElement)(A, null, function (t) {
            return Object(r.createElement)(
              D,
              u({}, e, { accordionContext: t })
            );
          });
        },
        Y = (function (e) {
          f(n, e);
          var t = O(n);
          function n() {
            var e;
            i(this, n);
            for (var o = arguments.length, r = new Array(o), c = 0; c < o; c++)
              r[c] = arguments[c];
            return (
              d(
                m((e = t.call.apply(t, [this].concat(r)))),
                "renderChildren",
                function (t) {
                  return t ? e.props.children(t) : null;
                }
              ),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  return Object(r.createElement)(
                    M.Consumer,
                    null,
                    this.renderChildren
                  );
                },
              },
            ]),
            n
          );
        })(r.PureComponent),
        S = (function (e) {
          f(n, e);
          var t = O(n);
          function n() {
            var e;
            i(this, n);
            for (var o = arguments.length, c = new Array(o), a = 0; a < o; a++)
              c[a] = arguments[a];
            return (
              d(
                m((e = t.call.apply(t, [this].concat(c)))),
                "instanceUuid",
                T()
              ),
              d(m(e), "renderChildren", function (t) {
                var n = e.props,
                  o = (n.uuid, n.className),
                  c = n.activeClassName,
                  a =
                    (n.dangerouslySetExpanded,
                    p(n, [
                      "uuid",
                      "className",
                      "activeClassName",
                      "dangerouslySetExpanded",
                    ])),
                  i = t.expanded && c ? c : o;
                return Object(r.createElement)(
                  "div",
                  u(
                    {
                      "data-accordion-component": "AccordionItem",
                      className: i,
                    },
                    a
                  )
                );
              }),
              e
            );
          }
          return (
            l(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.uuid,
                    n = void 0 === t ? this.instanceUuid : t,
                    o = e.dangerouslySetExpanded,
                    c = p(e, ["uuid", "dangerouslySetExpanded"]);
                  return (
                    _(n),
                    c.id && _(c.id),
                    Object(r.createElement)(
                      H,
                      { uuid: n, dangerouslySetExpanded: o },
                      Object(r.createElement)(Y, null, this.renderChildren)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      function k(e) {
        return (
          e &&
          (e.matches('[data-accordion-component="Accordion"]')
            ? e
            : k(e.parentElement))
        );
      }
      function q(e) {
        var t = k(e);
        return (
          t &&
          Array.from(
            t.querySelectorAll(
              '[data-accordion-component="AccordionItemButton"]'
            )
          )
        );
      }
      d(S, "defaultProps", { className: "accordion__item" }),
        d(S, "displayName", N.AccordionItem);
      var L = "40",
        Z = "35",
        B = "13",
        R = "36",
        K = "37",
        V = "39",
        F = "32",
        G = "38",
        W = function (e) {
          var t = e.toggleExpanded,
            n = e.className,
            o = void 0 === n ? "accordion__button" : n,
            c = p(e, ["toggleExpanded", "className"]);
          return (
            c.id && _(c.id),
            Object(r.createElement)(
              "div",
              u({ className: o }, c, {
                role: "button",
                tabIndex: 0,
                onClick: t,
                onKeyDown: function (e) {
                  var n = e.which.toString();
                  if (
                    ((n !== B && n !== F) || (e.preventDefault(), t()),
                    e.target instanceof HTMLElement)
                  )
                    switch (n) {
                      case R:
                        e.preventDefault(),
                          (function (e) {
                            var t = (q(e) || [])[0];
                            t && t.focus();
                          })(e.target);
                        break;
                      case Z:
                        e.preventDefault(),
                          (function (e) {
                            var t = q(e) || [],
                              n = t[t.length - 1];
                            n && n.focus();
                          })(e.target);
                        break;
                      case K:
                      case G:
                        e.preventDefault(),
                          (function (e) {
                            var t = q(e) || [],
                              n = t.indexOf(e);
                            if (-1 !== n) {
                              var o = t[n - 1];
                              o && o.focus();
                            }
                          })(e.target);
                        break;
                      case V:
                      case L:
                        e.preventDefault(),
                          (function (e) {
                            var t = q(e) || [],
                              n = t.indexOf(e);
                            if (-1 !== n) {
                              var o = t[n + 1];
                              o && o.focus();
                            }
                          })(e.target);
                    }
                },
                "data-accordion-component": "AccordionItemButton",
              })
            )
          );
        },
        J = function (e) {
          return Object(r.createElement)(Y, null, function (t) {
            var n = t.toggleExpanded,
              o = t.buttonAttributes;
            return Object(r.createElement)(W, u({ toggleExpanded: n }, e, o));
          });
        },
        z = (function (e) {
          f(n, e);
          var t = O(n);
          function n() {
            var e;
            i(this, n);
            for (var o = arguments.length, r = new Array(o), c = 0; c < o; c++)
              r[c] = arguments[c];
            return (
              d(m((e = t.call.apply(t, [this].concat(r)))), "ref", void 0),
              d(m(e), "setRef", function (t) {
                e.ref = t;
              }),
              e
            );
          }
          return (
            l(
              n,
              [
                {
                  key: "componentDidUpdate",
                  value: function () {
                    n.VALIDATE(this.ref);
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    n.VALIDATE(this.ref);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(r.createElement)(
                      "div",
                      u(
                        { "data-accordion-component": "AccordionItemHeading" },
                        this.props,
                        { ref: this.setRef }
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: "VALIDATE",
                  value: function (e) {
                    if (void 0 === e) throw new Error("ref is undefined");
                    if (
                      1 !== e.childElementCount ||
                      !e.firstElementChild ||
                      "AccordionItemButton" !==
                        e.firstElementChild.getAttribute(
                          "data-accordion-component"
                        )
                    )
                      throw new Error(
                        "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n"
                      );
                  },
                },
              ]
            ),
            n
          );
        })(r.PureComponent);
      d(z, "defaultProps", {
        className: "accordion__heading",
        "aria-level": 3,
      });
      var Q = function (e) {
        return Object(r.createElement)(Y, null, function (t) {
          var n = t.headingAttributes;
          return e.id && _(e.id), Object(r.createElement)(z, u({}, e, n));
        });
      };
      Q.displayName = N.AccordionItemHeading;
      var X = function (e) {
          var t = e.className,
            n = void 0 === t ? "accordion__panel" : t,
            o = e.id,
            c = p(e, ["className", "id"]),
            a = function (e) {
              var t = e.panelAttributes;
              return (
                o && _(o),
                Object(r.createElement)(
                  "div",
                  u(
                    {
                      "data-accordion-component": "AccordionItemPanel",
                      className: n,
                    },
                    c,
                    t
                  )
                )
              );
            };
          return Object(r.createElement)(Y, null, a);
        },
        $ = n("GTV5"),
        ee = n("ur7V");
      Object($.e)();
      t.default = function () {
        return Object(o.jsxs)(c.a.Fragment, {
          children: [
            Object(o.jsx)(a.a, {
              pageTitle: "Frequently Asked Questions",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "FAQ's",
            }),
            Object(o.jsx)("div", {
              className: "faq-area ptb-100",
              children: Object(o.jsx)("div", {
                className: "container",
                children: Object(o.jsx)("div", {
                  className: "tab faq-accordion-tab",
                  children: Object(o.jsxs)($.d, {
                    children: [
                      Object(o.jsxs)($.b, {
                        children: [
                          Object(o.jsxs)($.a, {
                            children: [
                              Object(o.jsx)("i", { className: "bx bx-flag" }),
                              " ",
                              Object(o.jsx)("span", {
                                children: "Getting Started",
                              }),
                            ],
                          }),
                          Object(o.jsxs)($.a, {
                            children: [
                              Object(o.jsx)("i", {
                                className: "bx bxs-badge-dollar",
                              }),
                              " ",
                              Object(o.jsx)("span", {
                                children: "Pricing & Planes",
                              }),
                            ],
                          }),
                          Object(o.jsxs)($.a, {
                            children: [
                              Object(o.jsx)("i", {
                                className: "bx bx-shopping-bag",
                              }),
                              " ",
                              Object(o.jsx)("span", {
                                children: "Sales Question",
                              }),
                            ],
                          }),
                          Object(o.jsxs)($.a, {
                            children: [
                              Object(o.jsx)("i", {
                                className: "bx bx-book-open",
                              }),
                              " ",
                              Object(o.jsx)("span", {
                                children: "Usage Guides",
                              }),
                            ],
                          }),
                          Object(o.jsxs)($.a, {
                            children: [
                              Object(o.jsx)("i", {
                                className: "bx bx-info-circle",
                              }),
                              " ",
                              Object(o.jsx)("span", {
                                children: "General Guide",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(o.jsx)($.c, {
                        children: Object(o.jsx)("div", {
                          className: "faq-accordion",
                          children: Object(o.jsxs)(C, {
                            allowZeroExpanded: !0,
                            preExpanded: ["a"],
                            children: [
                              Object(o.jsxs)(S, {
                                uuid: "a",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How can I contact a school directly?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "b",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Where should I study abroad?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "c",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a study abroad program on eDemy.com?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "d",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a school where I want to study?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "e",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Am I eligible for admission?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(o.jsx)($.c, {
                        children: Object(o.jsx)("div", {
                          className: "faq-accordion",
                          children: Object(o.jsxs)(C, {
                            allowZeroExpanded: !0,
                            preExpanded: ["a"],
                            children: [
                              Object(o.jsxs)(S, {
                                uuid: "a",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Where should I study abroad?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "b",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How can I contact a school directly?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "c",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a study abroad program on eDemy.com?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "d",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a school where I want to study?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "e",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Am I eligible for admission?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(o.jsx)($.c, {
                        children: Object(o.jsx)("div", {
                          className: "faq-accordion",
                          children: Object(o.jsxs)(C, {
                            allowZeroExpanded: !0,
                            preExpanded: ["a"],
                            children: [
                              Object(o.jsxs)(S, {
                                uuid: "a",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a study abroad program on eDemy.com?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "b",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How can I contact a school directly?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "c",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Where should I study abroad?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "d",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a school where I want to study?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "e",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Am I eligible for admission?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(o.jsx)($.c, {
                        children: Object(o.jsx)("div", {
                          className: "faq-accordion",
                          children: Object(o.jsxs)(C, {
                            allowZeroExpanded: !0,
                            preExpanded: ["a"],
                            children: [
                              Object(o.jsxs)(S, {
                                uuid: "a",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Am I eligible for admission?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "b",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How can I contact a school directly?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "c",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Where should I study abroad?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "d",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a study abroad program on eDemy.com?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "e",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a school where I want to study?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(o.jsx)($.c, {
                        children: Object(o.jsx)("div", {
                          className: "faq-accordion",
                          children: Object(o.jsxs)(C, {
                            allowZeroExpanded: !0,
                            preExpanded: ["a"],
                            children: [
                              Object(o.jsxs)(S, {
                                uuid: "a",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How can I contact a school directly?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "b",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Where should I study abroad?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "c",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a study abroad program on eDemy.com?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "d",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children:
                                        "How do I find a school where I want to study?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(o.jsxs)(S, {
                                uuid: "e",
                                children: [
                                  Object(o.jsx)(Q, {
                                    children: Object(o.jsx)(J, {
                                      children: "Am I eligible for admission?",
                                    }),
                                  }),
                                  Object(o.jsx)(X, {
                                    children: Object(o.jsxs)("p", {
                                      children: [
                                        "You can contact a school by filling out a ",
                                        Object(o.jsx)("a", {
                                          href: "contact.html",
                                          children: "\u201cContact Us\u201d",
                                        }),
                                        " form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
            Object(o.jsx)(ee.a, {}),
          ],
        });
      };
    },
    "l//U": function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faq",
        function () {
          return n("csvi");
        },
      ]);
    },
    ur7V: function (e, t, n) {
      "use strict";
      var o = n("nKUr");
      n("q1tI");
      t.a = function () {
        return Object(o.jsxs)("div", {
          className: "subscribe-area bg-f9f9f9 ptb-100",
          children: [
            Object(o.jsx)("div", {
              className: "container",
              children: Object(o.jsxs)("div", {
                className: "subscribe-content",
                children: [
                  Object(o.jsx)("span", {
                    className: "sub-title",
                    children: "Go At Your Own Pace",
                  }),
                  Object(o.jsx)("h2", {
                    children: "Subscribe To Our Newsletter",
                  }),
                  Object(o.jsx)("p", {
                    children:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  }),
                  Object(o.jsxs)("form", {
                    className: "newsletter-form",
                    children: [
                      Object(o.jsx)("input", {
                        type: "text",
                        className: "input-newsletter",
                        placeholder: "Enter your email address",
                        name: "EMAIL",
                        required: !0,
                      }),
                      Object(o.jsxs)("button", {
                        type: "submit",
                        className: "default-btn",
                        children: [
                          Object(o.jsx)("i", { className: "flaticon-user" }),
                          " Subscribe Now ",
                          Object(o.jsx)("span", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(o.jsx)("div", {
              className: "shape4",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(o.jsx)("img", {
                src: "/images/shape4.png",
                alt: "image",
              }),
            }),
            Object(o.jsx)("div", {
              className: "shape13",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(o.jsx)("img", {
                src: "/images/shape12.png",
                alt: "image",
              }),
            }),
            Object(o.jsx)("div", {
              className: "shape14",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(o.jsx)("img", {
                src: "/images/shape13.png",
                alt: "image",
              }),
            }),
            Object(o.jsx)("div", {
              className: "shape15",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(o.jsx)("img", {
                src: "/images/shape14.png",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    vNVm: function (e, t, n) {
      "use strict";
      var o = n("zoAU"),
        r = n("AroE");
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !i,
            r = (0, c.useRef)(),
            l = (0, c.useState)(!1),
            d = o(l, 2),
            u = d[0],
            h = d[1],
            f = (0, c.useCallback)(
              function (e) {
                r.current && (r.current(), (r.current = void 0)),
                  n ||
                    u ||
                    (e &&
                      e.tagName &&
                      (r.current = (function (e, t, n) {
                        var o = (function (e) {
                            var t = e.rootMargin || "",
                              n = s.get(t);
                            if (n) return n;
                            var o = new Map(),
                              r = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = o.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              s.set(
                                t,
                                (n = { id: t, observer: r, elements: o })
                              ),
                              n
                            );
                          })(n),
                          r = o.id,
                          c = o.observer,
                          a = o.elements;
                        return (
                          a.set(e, t),
                          c.observe(e),
                          function () {
                            a.delete(e),
                              c.unobserve(e),
                              0 === a.size && (c.disconnect(), s.delete(r));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && h(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [n, t, u]
            );
          return (
            (0, c.useEffect)(
              function () {
                i ||
                  u ||
                  (0, a.default)(function () {
                    return h(!0);
                  });
              },
              [u]
            ),
            [f, u]
          );
        });
      var c = n("q1tI"),
        a = r(n("0G5g")),
        i = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
  },
  [["l//U", 1, 0, 2, 10]],
]);
