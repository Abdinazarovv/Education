_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [47],
  {
    Ix5F: function (e, s, c) {
      "use strict";
      var t = c("nKUr"),
        a = (c("q1tI"), c("YFqc")),
        r = c.n(a);
      s.a = function (e) {
        var s = e.pageTitle,
          c = e.homePageUrl,
          a = e.homePageText,
          n = e.activePageText;
        return Object(t.jsxs)("div", {
          className: "page-title-area",
          children: [
            Object(t.jsx)("div", {
              className: "container",
              children: Object(t.jsxs)("div", {
                className: "page-title-content",
                children: [
                  Object(t.jsxs)("ul", {
                    children: [
                      Object(t.jsx)("li", {
                        children: Object(t.jsx)(r.a, {
                          href: c,
                          children: Object(t.jsx)("a", { children: a }),
                        }),
                      }),
                      Object(t.jsx)("li", { className: "active", children: n }),
                    ],
                  }),
                  Object(t.jsx)("h2", { children: s }),
                ],
              }),
            }),
            Object(t.jsx)("div", {
              className: "shape9",
              children: Object(t.jsx)("img", {
                src: "/images/shape8.svg",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    YFqc: function (e, s, c) {
      e.exports = c("cTJO");
    },
    cTJO: function (e, s, c) {
      "use strict";
      var t = c("zoAU"),
        a = c("7KCV");
      (s.__esModule = !0), (s.default = void 0);
      var r = a(c("q1tI")),
        n = c("elyg"),
        i = c("nOHt"),
        l = c("vNVm"),
        o = {};
      function j(e, s, c, t) {
        if (e && (0, n.isLocalURL)(s)) {
          e.prefetch(s, c, t).catch(function (e) {
            0;
          });
          var a =
            t && "undefined" !== typeof t.locale ? t.locale : e && e.locale;
          o[s + "%" + c + (a ? "%" + a : "")] = !0;
        }
      }
      var d = function (e) {
        var s = !1 !== e.prefetch,
          c = (0, i.useRouter)(),
          a = (c && c.pathname) || "/",
          d = r.default.useMemo(
            function () {
              var s = (0, n.resolveHref)(a, e.href, !0),
                c = t(s, 2),
                r = c[0],
                i = c[1];
              return {
                href: r,
                as: e.as ? (0, n.resolveHref)(a, e.as) : i || r,
              };
            },
            [a, e.href, e.as]
          ),
          b = d.href,
          m = d.as,
          u = e.children,
          h = e.replace,
          g = e.shallow,
          x = e.scroll,
          O = e.locale;
        "string" === typeof u && (u = r.default.createElement("a", null, u));
        var f = r.Children.only(u),
          p = f && "object" === typeof f && f.ref,
          v = (0, l.useIntersection)({ rootMargin: "200px" }),
          N = t(v, 2),
          w = N[0],
          y = N[1],
          E = r.default.useCallback(
            function (e) {
              w(e),
                p &&
                  ("function" === typeof p
                    ? p(e)
                    : "object" === typeof p && (p.current = e));
            },
            [p, w]
          );
        (0, r.useEffect)(
          function () {
            var e = y && s && (0, n.isLocalURL)(b),
              t = "undefined" !== typeof O ? O : c && c.locale,
              a = o[b + "%" + m + (t ? "%" + t : "")];
            e && !a && j(c, b, m, { locale: t });
          },
          [m, b, y, O, s, c]
        );
        var C = {
          ref: E,
          onClick: function (e) {
            f.props &&
              "function" === typeof f.props.onClick &&
              f.props.onClick(e),
              e.defaultPrevented ||
                (function (e, s, c, t, a, r, i, l) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var s = e.currentTarget.target;
                      return (
                        (s && "_self" !== s) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, n.isLocalURL)(c))) &&
                    (e.preventDefault(),
                    null == i && (i = t.indexOf("#") < 0),
                    s[a ? "replace" : "push"](c, t, {
                      shallow: r,
                      locale: l,
                      scroll: i,
                    }).then(function (e) {
                      e && i && document.body.focus();
                    }));
                })(e, c, b, m, h, g, x, O);
          },
          onMouseEnter: function (e) {
            (0, n.isLocalURL)(b) &&
              (f.props &&
                "function" === typeof f.props.onMouseEnter &&
                f.props.onMouseEnter(e),
              j(c, b, m, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === f.type && !("href" in f.props))) {
          var _ = "undefined" !== typeof O ? O : c && c.locale,
            T = (0, n.getDomainLocale)(
              m,
              _,
              c && c.locales,
              c && c.domainLocales
            );
          C.href =
            T ||
            (0, n.addBasePath)((0, n.addLocale)(m, _, c && c.defaultLocale));
        }
        return r.default.cloneElement(f, C);
      };
      s.default = d;
    },
    j49Z: function (e, s, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/categories",
        function () {
          return c("mAMT");
        },
      ]);
    },
    mAMT: function (e, s, c) {
      "use strict";
      c.r(s);
      var t = c("nKUr"),
        a = c("q1tI"),
        r = c.n(a),
        n = c("Ix5F"),
        i = c("YFqc"),
        l = c.n(i),
        o = c("ur7V");
      s.default = function () {
        return Object(t.jsxs)(r.a.Fragment, {
          children: [
            Object(t.jsx)(n.a, {
              pageTitle: "Categories",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Categories",
            }),
            Object(t.jsx)("div", {
              className: "categories-area ptb-100",
              children: Object(t.jsx)("div", {
                className: "container",
                children: Object(t.jsxs)("div", {
                  className: "row",
                  children: [
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie1.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", { children: "Development" }),
                              Object(t.jsx)("span", { children: "10 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie2.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", { children: "Business" }),
                              Object(t.jsx)("span", { children: "20 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie3.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", {
                                children: "IT & Software",
                              }),
                              Object(t.jsx)("span", { children: "15 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie4.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", { children: "Design" }),
                              Object(t.jsx)("span", { children: "11 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie5.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", { children: "Lifestyle" }),
                              Object(t.jsx)("span", { children: "10 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie6.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", { children: "Photo & Flim" }),
                              Object(t.jsx)("span", { children: "12 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie7.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", { children: "Animation" }),
                              Object(t.jsx)("span", { children: "05 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-3 col-sm-6 col-md-6",
                      children: Object(t.jsxs)("div", {
                        className: "single-categories-box",
                        children: [
                          Object(t.jsx)("img", {
                            src: "/images/categories/categorie8.jpg",
                            alt: "image",
                          }),
                          Object(t.jsxs)("div", {
                            className: "content",
                            children: [
                              Object(t.jsx)("h3", { children: "Writing" }),
                              Object(t.jsx)("span", { children: "20 Courses" }),
                            ],
                          }),
                          Object(t.jsx)(l.a, {
                            href: "/courses-1",
                            children: Object(t.jsx)("a", {
                              className: "link-btn",
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(t.jsx)("div", {
                      className: "col-lg-12 col-sm-12 col-md-12",
                      children: Object(t.jsxs)("div", {
                        className: "pagination-area text-center",
                        children: [
                          Object(t.jsx)("a", {
                            href: "#",
                            className: "prev page-numbers",
                            children: Object(t.jsx)("i", {
                              className: "bx bx-chevrons-left",
                            }),
                          }),
                          Object(t.jsx)("span", {
                            className: "page-numbers current",
                            "aria-current": "page",
                            children: "1",
                          }),
                          Object(t.jsx)("a", {
                            href: "#",
                            className: "page-numbers",
                            children: "2",
                          }),
                          Object(t.jsx)("a", {
                            href: "#",
                            className: "page-numbers",
                            children: "3",
                          }),
                          Object(t.jsx)("a", {
                            href: "#",
                            className: "page-numbers",
                            children: "4",
                          }),
                          Object(t.jsx)("a", {
                            href: "#",
                            className: "next page-numbers",
                            children: Object(t.jsx)("i", {
                              className: "bx bx-chevrons-right",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            Object(t.jsx)(o.a, {}),
          ],
        });
      };
    },
    ur7V: function (e, s, c) {
      "use strict";
      var t = c("nKUr");
      c("q1tI");
      s.a = function () {
        return Object(t.jsxs)("div", {
          className: "subscribe-area bg-f9f9f9 ptb-100",
          children: [
            Object(t.jsx)("div", {
              className: "container",
              children: Object(t.jsxs)("div", {
                className: "subscribe-content",
                children: [
                  Object(t.jsx)("span", {
                    className: "sub-title",
                    children: "Go At Your Own Pace",
                  }),
                  Object(t.jsx)("h2", {
                    children: "Subscribe To Our Newsletter",
                  }),
                  Object(t.jsx)("p", {
                    children:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  }),
                  Object(t.jsxs)("form", {
                    className: "newsletter-form",
                    children: [
                      Object(t.jsx)("input", {
                        type: "text",
                        className: "input-newsletter",
                        placeholder: "Enter your email address",
                        name: "EMAIL",
                        required: !0,
                      }),
                      Object(t.jsxs)("button", {
                        type: "submit",
                        className: "default-btn",
                        children: [
                          Object(t.jsx)("i", { className: "flaticon-user" }),
                          " Subscribe Now ",
                          Object(t.jsx)("span", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(t.jsx)("div", {
              className: "shape4",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(t.jsx)("img", {
                src: "/images/shape4.png",
                alt: "image",
              }),
            }),
            Object(t.jsx)("div", {
              className: "shape13",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(t.jsx)("img", {
                src: "/images/shape12.png",
                alt: "image",
              }),
            }),
            Object(t.jsx)("div", {
              className: "shape14",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(t.jsx)("img", {
                src: "/images/shape13.png",
                alt: "image",
              }),
            }),
            Object(t.jsx)("div", {
              className: "shape15",
              "data-speed": "0.06",
              "data-revert": "true",
              children: Object(t.jsx)("img", {
                src: "/images/shape14.png",
                alt: "image",
              }),
            }),
          ],
        });
      };
    },
    vNVm: function (e, s, c) {
      "use strict";
      var t = c("zoAU"),
        a = c("AroE");
      (s.__esModule = !0),
        (s.useIntersection = function (e) {
          var s = e.rootMargin,
            c = e.disabled || !i,
            a = (0, r.useRef)(),
            o = (0, r.useState)(!1),
            j = t(o, 2),
            d = j[0],
            b = j[1],
            m = (0, r.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  c ||
                    d ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, s, c) {
                        var t = (function (e) {
                            var s = e.rootMargin || "",
                              c = l.get(s);
                            if (c) return c;
                            var t = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var s = t.get(e.target),
                                    c =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  s && c && s(c);
                                });
                              }, e);
                            return (
                              l.set(
                                s,
                                (c = { id: s, observer: a, elements: t })
                              ),
                              c
                            );
                          })(c),
                          a = t.id,
                          r = t.observer,
                          n = t.elements;
                        return (
                          n.set(e, s),
                          r.observe(e),
                          function () {
                            n.delete(e),
                              r.unobserve(e),
                              0 === n.size && (r.disconnect(), l.delete(a));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && b(e);
                        },
                        { rootMargin: s }
                      )));
              },
              [c, s, d]
            );
          return (
            (0, r.useEffect)(
              function () {
                i ||
                  d ||
                  (0, n.default)(function () {
                    return b(!0);
                  });
              },
              [d]
            ),
            [m, d]
          );
        });
      var r = c("q1tI"),
        n = a(c("0G5g")),
        i = "undefined" !== typeof IntersectionObserver;
      var l = new Map();
    },
  },
  [["j49Z", 1, 0, 2]],
]);
