import { registerRoute as workbox_routing_registerRoute } from "/Users/shabbir/JS/tf-jsx/edemy-resources/edemy-react/for-live-demo/edemy/node_modules/workbox-routing/registerRoute.mjs";
import { NetworkOnly as workbox_strategies_NetworkOnly } from "/Users/shabbir/JS/tf-jsx/edemy-resources/edemy-react/for-live-demo/edemy/node_modules/workbox-strategies/NetworkOnly.mjs";
import { skipWaiting as workbox_core_skipWaiting } from "/Users/shabbir/JS/tf-jsx/edemy-resources/edemy-react/for-live-demo/edemy/node_modules/workbox-core/skipWaiting.mjs";
import { clientsClaim as workbox_core_clientsClaim } from "/Users/shabbir/JS/tf-jsx/edemy-resources/edemy-react/for-live-demo/edemy/node_modules/workbox-core/clientsClaim.mjs";
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts();

workbox_core_skipWaiting();

workbox_core_clientsClaim();

workbox_routing_registerRoute(
  /.*/i,
  new workbox_strategies_NetworkOnly({ cacheName: "dev", plugins: [] }),
  "GET"
);
