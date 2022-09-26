(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8, 27],
  {
    "60Bi": function (e, o, t) {
      "use strict";
      Object.defineProperty(o, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, o) {
            for (var t = 0; t < o.length; t++) {
              var n = o[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (o, t, n) {
            return t && e(o.prototype, t), n && e(o, n), o;
          };
        })(),
        l = i(t("q1tI")),
        a = i(t("Si88"));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var r = (function (e) {
        function o(e) {
          !(function (e, o) {
            if (!(e instanceof o))
              throw new TypeError("Cannot call a class as a function");
          })(this, o);
          var t = (function (e, o) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !o || ("object" !== typeof o && "function" !== typeof o)
              ? e
              : o;
          })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e));
          return (
            (t.state = { isOpen: !1 }),
            (t.closeModal = t.closeModal.bind(t)),
            (t.updateFocus = t.updateFocus.bind(t)),
            t
          );
        }
        return (
          (function (e, o) {
            if ("function" !== typeof o && null !== o)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof o
              );
            (e.prototype = Object.create(o && o.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              o &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, o)
                  : (e.__proto__ = o));
          })(o, e),
          n(
            o,
            [
              {
                key: "openModal",
                value: function () {
                  this.setState({ isOpen: !0 });
                },
              },
              {
                key: "closeModal",
                value: function () {
                  this.setState({ isOpen: !1 }),
                    "function" === typeof this.props.onClose &&
                      this.props.onClose();
                },
              },
              {
                key: "keydownHandler",
                value: function (e) {
                  27 === e.keyCode && this.closeModal();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener(
                    "keydown",
                    this.keydownHandler.bind(this)
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "keydown",
                    this.keydownHandler.bind(this)
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.state.isOpen && this.modal && this.modal.focus();
                },
              },
              {
                key: "updateFocus",
                value: function (e) {
                  9 === e.keyCode &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    this.modal === document.activeElement
                      ? this.modalbtn.focus()
                      : this.modal.focus());
                },
              },
              {
                key: "getQueryString",
                value: function (e) {
                  var o = "";
                  for (var t in e)
                    e.hasOwnProperty(t) &&
                      null !== e[t] &&
                      (o += t + "=" + e[t] + "&");
                  return o.substr(0, o.length - 1);
                },
              },
              {
                key: "getYoutubeUrl",
                value: function (e, o) {
                  return (
                    "//www.youtube.com/embed/" +
                    o +
                    "?" +
                    this.getQueryString(e)
                  );
                },
              },
              {
                key: "getVimeoUrl",
                value: function (e, o) {
                  return (
                    "//player.vimeo.com/video/" +
                    o +
                    "?" +
                    this.getQueryString(e)
                  );
                },
              },
              {
                key: "getYoukuUrl",
                value: function (e, o) {
                  return (
                    "//player.youku.com/embed/" +
                    o +
                    "?" +
                    this.getQueryString(e)
                  );
                },
              },
              {
                key: "getVideoUrl",
                value: function (e, o) {
                  return "youtube" === e.channel
                    ? this.getYoutubeUrl(e.youtube, o)
                    : "vimeo" === e.channel
                    ? this.getVimeoUrl(e.vimeo, o)
                    : "youku" === e.channel
                    ? this.getYoukuUrl(e.youku, o)
                    : "custom" === e.channel
                    ? e.url
                    : void 0;
                },
              },
              {
                key: "getPadding",
                value: function (e) {
                  var o = e.split(":"),
                    t = Number(o[0]);
                  return (100 * Number(o[1])) / t + "%";
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    o = { paddingBottom: this.getPadding(this.props.ratio) };
                  return l.default.createElement(
                    a.default,
                    {
                      classNames: this.props.classNames.modalVideoEffect,
                      timeout: this.props.animationSpeed,
                    },
                    function () {
                      return e.state.isOpen
                        ? l.default.createElement(
                            "div",
                            {
                              className: e.props.classNames.modalVideo,
                              tabIndex: "-1",
                              role: "dialog",
                              "aria-label": e.props.aria.openMessage,
                              onClick: e.closeModal,
                              ref: function (o) {
                                e.modal = o;
                              },
                              onKeyDown: e.updateFocus,
                            },
                            l.default.createElement(
                              "div",
                              { className: e.props.classNames.modalVideoBody },
                              l.default.createElement(
                                "div",
                                {
                                  className: e.props.classNames.modalVideoInner,
                                },
                                l.default.createElement(
                                  "div",
                                  {
                                    className:
                                      e.props.classNames.modalVideoIframeWrap,
                                    style: o,
                                  },
                                  l.default.createElement("button", {
                                    className:
                                      e.props.classNames.modalVideoCloseBtn,
                                    "aria-label":
                                      e.props.aria.dismissBtnMessage,
                                    ref: function (o) {
                                      e.modalbtn = o;
                                    },
                                    onKeyDown: e.updateFocus,
                                  }),
                                  e.props.children ||
                                    l.default.createElement("iframe", {
                                      width: "460",
                                      height: "230",
                                      src: e.getVideoUrl(
                                        e.props,
                                        e.props.videoId
                                      ),
                                      frameBorder: "0",
                                      allow:
                                        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                      allowFullScreen: e.props.allowFullScreen,
                                      tabIndex: "-1",
                                    })
                                )
                              )
                            )
                          )
                        : null;
                    }
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e) {
                  return { isOpen: e.isOpen };
                },
              },
            ]
          ),
          o
        );
      })(l.default.Component);
      (o.default = r),
        (r.defaultProps = {
          channel: "youtube",
          isOpen: !1,
          youtube: {
            autoplay: 1,
            cc_load_policy: 1,
            color: null,
            controls: 1,
            disablekb: 0,
            enablejsapi: 0,
            end: null,
            fs: 1,
            h1: null,
            iv_load_policy: 1,
            list: null,
            listType: null,
            loop: 0,
            modestbranding: null,
            origin: null,
            playlist: null,
            playsinline: null,
            rel: 0,
            showinfo: 1,
            start: 0,
            wmode: "transparent",
            theme: "dark",
            mute: 0,
          },
          ratio: "16:9",
          vimeo: {
            api: !1,
            autopause: !0,
            autoplay: !0,
            byline: !0,
            callback: null,
            color: null,
            height: null,
            loop: !1,
            maxheight: null,
            maxwidth: null,
            player_id: null,
            portrait: !0,
            title: !0,
            width: null,
            xhtml: !1,
          },
          youku: { autoplay: 1, show_related: 0 },
          allowFullScreen: !0,
          animationSpeed: 300,
          classNames: {
            modalVideoEffect: "modal-video-effect",
            modalVideo: "modal-video",
            modalVideoClose: "modal-video-close",
            modalVideoBody: "modal-video-body",
            modalVideoInner: "modal-video-inner",
            modalVideoIframeWrap: "modal-video-movie-wrap",
            modalVideoCloseBtn: "modal-video-close-btn",
          },
          aria: {
            openMessage: "You just openned the modal video",
            dismissBtnMessage: "Close the modal by clicking here",
          },
        });
    },
  },
]);
