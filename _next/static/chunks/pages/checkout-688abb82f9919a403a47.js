_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [48],
  {
    Ix5F: function (e, c, s) {
      "use strict";
      var t = s("nKUr"),
        a = (s("q1tI"), s("YFqc")),
        l = s.n(a);
      c.a = function (e) {
        var c = e.pageTitle,
          s = e.homePageUrl,
          a = e.homePageText,
          r = e.activePageText;
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
                        children: Object(t.jsx)(l.a, {
                          href: s,
                          children: Object(t.jsx)("a", { children: a }),
                        }),
                      }),
                      Object(t.jsx)("li", { className: "active", children: r }),
                    ],
                  }),
                  Object(t.jsx)("h2", { children: c }),
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
    QCli: function (e, c, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/checkout",
        function () {
          return s("fdRS");
        },
      ]);
    },
    YFqc: function (e, c, s) {
      e.exports = s("cTJO");
    },
    cTJO: function (e, c, s) {
      "use strict";
      var t = s("zoAU"),
        a = s("7KCV");
      (c.__esModule = !0), (c.default = void 0);
      var l = a(s("q1tI")),
        r = s("elyg"),
        n = s("nOHt"),
        i = s("vNVm"),
        o = {};
      function d(e, c, s, t) {
        if (e && (0, r.isLocalURL)(c)) {
          e.prefetch(c, s, t).catch(function (e) {
            0;
          });
          var a =
            t && "undefined" !== typeof t.locale ? t.locale : e && e.locale;
          o[c + "%" + s + (a ? "%" + a : "")] = !0;
        }
      }
      var j = function (e) {
        var c = !1 !== e.prefetch,
          s = (0, n.useRouter)(),
          a = (s && s.pathname) || "/",
          j = l.default.useMemo(
            function () {
              var c = (0, r.resolveHref)(a, e.href, !0),
                s = t(c, 2),
                l = s[0],
                n = s[1];
              return {
                href: l,
                as: e.as ? (0, r.resolveHref)(a, e.as) : n || l,
              };
            },
            [a, e.href, e.as]
          ),
          b = j.href,
          h = j.as,
          m = e.children,
          u = e.replace,
          x = e.shallow,
          p = e.scroll,
          O = e.locale;
        "string" === typeof m && (m = l.default.createElement("a", null, m));
        var f = l.Children.only(m),
          N = f && "object" === typeof f && f.ref,
          v = (0, i.useIntersection)({ rootMargin: "200px" }),
          g = t(v, 2),
          y = g[0],
          k = g[1],
          C = l.default.useCallback(
            function (e) {
              y(e),
                N &&
                  ("function" === typeof N
                    ? N(e)
                    : "object" === typeof N && (N.current = e));
            },
            [N, y]
          );
        (0, l.useEffect)(
          function () {
            var e = k && c && (0, r.isLocalURL)(b),
              t = "undefined" !== typeof O ? O : s && s.locale,
              a = o[b + "%" + h + (t ? "%" + t : "")];
            e && !a && d(s, b, h, { locale: t });
          },
          [h, b, k, O, c, s]
        );
        var w = {
          ref: C,
          onClick: function (e) {
            f.props &&
              "function" === typeof f.props.onClick &&
              f.props.onClick(e),
              e.defaultPrevented ||
                (function (e, c, s, t, a, l, n, i) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var c = e.currentTarget.target;
                      return (
                        (c && "_self" !== c) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, r.isLocalURL)(s))) &&
                    (e.preventDefault(),
                    null == n && (n = t.indexOf("#") < 0),
                    c[a ? "replace" : "push"](s, t, {
                      shallow: l,
                      locale: i,
                      scroll: n,
                    }).then(function (e) {
                      e && n && document.body.focus();
                    }));
                })(e, s, b, h, u, x, p, O);
          },
          onMouseEnter: function (e) {
            (0, r.isLocalURL)(b) &&
              (f.props &&
                "function" === typeof f.props.onMouseEnter &&
                f.props.onMouseEnter(e),
              d(s, b, h, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === f.type && !("href" in f.props))) {
          var E = "undefined" !== typeof O ? O : s && s.locale,
            P = (0, r.getDomainLocale)(
              h,
              E,
              s && s.locales,
              s && s.domainLocales
            );
          w.href =
            P ||
            (0, r.addBasePath)((0, r.addLocale)(h, E, s && s.defaultLocale));
        }
        return l.default.cloneElement(f, w);
      };
      c.default = j;
    },
    fdRS: function (e, c, s) {
      "use strict";
      s.r(c);
      var t = s("nKUr"),
        a = s("q1tI"),
        l = s.n(a),
        r = s("Ix5F"),
        n = s("YFqc"),
        i = s.n(n);
      c.default = function () {
        return Object(t.jsxs)(l.a.Fragment, {
          children: [
            Object(t.jsx)(r.a, {
              pageTitle: "Checkout",
              homePageUrl: "/",
              homePageText: "Home",
              activePageText: "Checkout",
            }),
            Object(t.jsx)("div", {
              className: "checkout-area ptb-100",
              children: Object(t.jsxs)("div", {
                className: "container",
                children: [
                  Object(t.jsxs)("div", {
                    className: "user-actions",
                    children: [
                      Object(t.jsx)("i", { className: "bx bx-log-in" }),
                      Object(t.jsxs)("span", {
                        children: [
                          "Returning customer? ",
                          Object(t.jsx)(i.a, {
                            href: "/profile-authentication",
                            children: Object(t.jsx)("a", {
                              children: "Click here to login",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(t.jsx)("form", {
                    children: Object(t.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(t.jsx)("div", {
                          className: "col-lg-6 col-md-12",
                          children: Object(t.jsxs)("div", {
                            className: "billing-details",
                            children: [
                              Object(t.jsx)("h3", {
                                className: "title",
                                children: "Billing Details",
                              }),
                              Object(t.jsxs)("div", {
                                className: "row",
                                children: [
                                  Object(t.jsx)("div", {
                                    className: "col-lg-12 col-md-12",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "Country ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("div", {
                                          className: "select-box",
                                          children: Object(t.jsxs)("select", {
                                            className: "form-control",
                                            children: [
                                              Object(t.jsx)("option", {
                                                children:
                                                  "United Arab Emirates",
                                              }),
                                              Object(t.jsx)("option", {
                                                children: "China",
                                              }),
                                              Object(t.jsx)("option", {
                                                children: "United Kingdom",
                                              }),
                                              Object(t.jsx)("option", {
                                                children: "Germany",
                                              }),
                                              Object(t.jsx)("option", {
                                                children: "France",
                                              }),
                                              Object(t.jsx)("option", {
                                                children: "Japan",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "First Name ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "Last Name ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-12 col-md-12",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsx)("label", {
                                          children: "Company Name",
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-12 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "Address ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-12 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "Town / City ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "State / County ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "Postcode / Zip ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "Email Address ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "email",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(t.jsxs)("label", {
                                          children: [
                                            "Phone ",
                                            Object(t.jsx)("span", {
                                              className: "required",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        Object(t.jsx)("input", {
                                          type: "text",
                                          className: "form-control",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-12 col-md-12",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-check",
                                      children: [
                                        Object(t.jsx)("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                          id: "create-an-account",
                                        }),
                                        Object(t.jsx)("label", {
                                          className: "form-check-label",
                                          htmlFor: "create-an-account",
                                          children: "Create an account?",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-12 col-md-12",
                                    children: Object(t.jsxs)("div", {
                                      className: "form-check",
                                      children: [
                                        Object(t.jsx)("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                          id: "ship-different-address",
                                        }),
                                        Object(t.jsx)("label", {
                                          className: "form-check-label",
                                          htmlFor: "ship-different-address",
                                          children:
                                            "Ship to a different address?",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(t.jsx)("div", {
                                    className: "col-lg-12 col-md-12",
                                    children: Object(t.jsx)("div", {
                                      className: "form-group",
                                      children: Object(t.jsx)("textarea", {
                                        name: "notes",
                                        id: "notes",
                                        cols: "30",
                                        rows: "5",
                                        placeholder: "Order Notes",
                                        className: "form-control",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(t.jsx)("div", {
                          className: "col-lg-6 col-md-12",
                          children: Object(t.jsxs)("div", {
                            className: "order-details",
                            children: [
                              Object(t.jsx)("h3", {
                                className: "title",
                                children: "Your Order",
                              }),
                              Object(t.jsx)("div", {
                                className: "order-table table-responsive",
                                children: Object(t.jsxs)("table", {
                                  className: "table table-bordered",
                                  children: [
                                    Object(t.jsx)("thead", {
                                      children: Object(t.jsxs)("tr", {
                                        children: [
                                          Object(t.jsx)("th", {
                                            scope: "col",
                                            children: "Product Name",
                                          }),
                                          Object(t.jsx)("th", {
                                            scope: "col",
                                            children: "Total",
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(t.jsxs)("tbody", {
                                      children: [
                                        Object(t.jsxs)("tr", {
                                          children: [
                                            Object(t.jsx)("td", {
                                              className: "product-name",
                                              children: Object(t.jsx)("a", {
                                                href: "#",
                                                children: "Note Book Mockup",
                                              }),
                                            }),
                                            Object(t.jsx)("td", {
                                              className: "product-total",
                                              children: Object(t.jsx)("span", {
                                                className: "subtotal-amount",
                                                children: "$250.00",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("tr", {
                                          children: [
                                            Object(t.jsx)("td", {
                                              className: "product-name",
                                              children: Object(t.jsx)("a", {
                                                href: "#",
                                                children:
                                                  "Motivational Book Cover",
                                              }),
                                            }),
                                            Object(t.jsx)("td", {
                                              className: "product-total",
                                              children: Object(t.jsx)("span", {
                                                className: "subtotal-amount",
                                                children: "$200.00",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("tr", {
                                          children: [
                                            Object(t.jsx)("td", {
                                              className: "product-name",
                                              children: Object(t.jsx)("a", {
                                                href: "#",
                                                children:
                                                  "Book Cover Softcover",
                                              }),
                                            }),
                                            Object(t.jsx)("td", {
                                              className: "product-total",
                                              children: Object(t.jsx)("span", {
                                                className: "subtotal-amount",
                                                children: "$200.00",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("tr", {
                                          children: [
                                            Object(t.jsx)("td", {
                                              className: "product-name",
                                              children: Object(t.jsx)("a", {
                                                href: "#",
                                                children:
                                                  "Stop and Take a Second",
                                              }),
                                            }),
                                            Object(t.jsx)("td", {
                                              className: "product-total",
                                              children: Object(t.jsx)("span", {
                                                className: "subtotal-amount",
                                                children: "$150.00",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("tr", {
                                          children: [
                                            Object(t.jsx)("td", {
                                              className: "order-subtotal",
                                              children: Object(t.jsx)("span", {
                                                children: "Cart Subtotal",
                                              }),
                                            }),
                                            Object(t.jsx)("td", {
                                              className: "order-subtotal-price",
                                              children: Object(t.jsx)("span", {
                                                className:
                                                  "order-subtotal-amount",
                                                children: "$1683.50",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("tr", {
                                          children: [
                                            Object(t.jsx)("td", {
                                              className: "order-shipping",
                                              children: Object(t.jsx)("span", {
                                                children: "Shipping",
                                              }),
                                            }),
                                            Object(t.jsx)("td", {
                                              className: "shipping-price",
                                              children: Object(t.jsx)("span", {
                                                children: "$30.00",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(t.jsxs)("tr", {
                                          children: [
                                            Object(t.jsx)("td", {
                                              className: "total-price",
                                              children: Object(t.jsx)("span", {
                                                children: "Order Total",
                                              }),
                                            }),
                                            Object(t.jsx)("td", {
                                              className: "product-subtotal",
                                              children: Object(t.jsx)("span", {
                                                className: "subtotal-amount",
                                                children: "$750.00",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(t.jsxs)("div", {
                                className: "payment-box",
                                children: [
                                  Object(t.jsxs)("div", {
                                    className: "payment-method",
                                    children: [
                                      Object(t.jsxs)("p", {
                                        children: [
                                          Object(t.jsx)("input", {
                                            type: "radio",
                                            id: "direct-bank-transfer",
                                            name: "radio-group",
                                            defaultChecked: !0,
                                          }),
                                          Object(t.jsx)("label", {
                                            htmlFor: "direct-bank-transfer",
                                            children: "Direct Bank Transfer",
                                          }),
                                          "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
                                        ],
                                      }),
                                      Object(t.jsxs)("p", {
                                        children: [
                                          Object(t.jsx)("input", {
                                            type: "radio",
                                            id: "paypal",
                                            name: "radio-group",
                                          }),
                                          Object(t.jsx)("label", {
                                            htmlFor: "paypal",
                                            children: "PayPal",
                                          }),
                                        ],
                                      }),
                                      Object(t.jsxs)("p", {
                                        children: [
                                          Object(t.jsx)("input", {
                                            type: "radio",
                                            id: "cash-on-delivery",
                                            name: "radio-group",
                                          }),
                                          Object(t.jsx)("label", {
                                            htmlFor: "cash-on-delivery",
                                            children: "Cash on Delivery",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(t.jsxs)("a", {
                                    href: "#",
                                    className: "default-btn",
                                    children: [
                                      Object(t.jsx)("i", {
                                        className: "flaticon-shopping-cart",
                                      }),
                                      " Place Order ",
                                      Object(t.jsx)("span", {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    vNVm: function (e, c, s) {
      "use strict";
      var t = s("zoAU"),
        a = s("AroE");
      (c.__esModule = !0),
        (c.useIntersection = function (e) {
          var c = e.rootMargin,
            s = e.disabled || !n,
            a = (0, l.useRef)(),
            o = (0, l.useState)(!1),
            d = t(o, 2),
            j = d[0],
            b = d[1],
            h = (0, l.useCallback)(
              function (e) {
                a.current && (a.current(), (a.current = void 0)),
                  s ||
                    j ||
                    (e &&
                      e.tagName &&
                      (a.current = (function (e, c, s) {
                        var t = (function (e) {
                            var c = e.rootMargin || "",
                              s = i.get(c);
                            if (s) return s;
                            var t = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var c = t.get(e.target),
                                    s =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  c && s && c(s);
                                });
                              }, e);
                            return (
                              i.set(
                                c,
                                (s = { id: c, observer: a, elements: t })
                              ),
                              s
                            );
                          })(s),
                          a = t.id,
                          l = t.observer,
                          r = t.elements;
                        return (
                          r.set(e, c),
                          l.observe(e),
                          function () {
                            r.delete(e),
                              l.unobserve(e),
                              0 === r.size && (l.disconnect(), i.delete(a));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && b(e);
                        },
                        { rootMargin: c }
                      )));
              },
              [s, c, j]
            );
          return (
            (0, l.useEffect)(
              function () {
                n ||
                  j ||
                  (0, r.default)(function () {
                    return b(!0);
                  });
              },
              [j]
            ),
            [h, j]
          );
        });
      var l = s("q1tI"),
        r = a(s("0G5g")),
        n = "undefined" !== typeof IntersectionObserver;
      var i = new Map();
    },
  },
  [["QCli", 1, 0, 2]],
]);
