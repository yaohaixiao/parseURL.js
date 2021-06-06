;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.parseURL = factory();
  }
}(this, function() {
"use strict";

/**
 * 分析 url 地址，将解析的结果作为对象返回，返回属性有：
 * 1. href - 完整 URL 地址
 * 2. protocol - 协议
 * 3. username - 用户名
 * 4. password - 密码
 * 5. host - 域名地址
 * 6. hostname - 域名名称
 * 7. port - 端口号
 * 8. path - 路径
 * 9. pathname - 路径名
 * 10. search - 查询参数
 * 11. hash - 哈希值
 * 12. origin
 * ====================================================
 * @param {String} url - URL地址
 * @param {String} [base] - 基准 URL 地址
 * @returns {Object}
 */
var parseURL = function parseURL() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
  var base = arguments.length > 1 ? arguments[1] : undefined;

  var getURLSearchParams = function getURLSearchParams(url) {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
      return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
    }, {});
  };

  var parseURLWithRegExp = function parseURLWithRegExp(url) {
    var pattern = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\\?([^#]*))?(#(.*))?/,
        matches = url.match(pattern),
        hostname = matches[6],
        port = matches[8] || '',
        pathname = matches[11] || '/',
        search = matches[10] || '',
        searchParams = function () {
      var params = getURLSearchParams(url);
      return {
        get: function get(name) {
          return params[name] || '';
        }
      };
    }();

    return {
      href: url,
      origin: (matches[1] ? matches[1] + '//' : '') + hostname,
      protocol: matches[2] || '',
      username: matches[4] || '',
      password: matches[5] || '',
      hostname: hostname,
      port: port,
      host: hostname + port,
      pathname: pathname,
      search: search,
      path: pathname + search,
      hash: matches[13] || '',
      searchParams: searchParams
    };
  };

  var parseURLWithURLConstructor = function parseURLWithURLConstructor(url) {
    var results = new URL(url);
    var protocol = results.protocol.replace(':', '');
    return {
      href: url,
      origin: results.origin,
      protocol: protocol,
      username: results.username,
      password: results.password,
      hostname: results.hostname,
      port: results.port,
      host: results.host,
      pathname: results.pathname,
      search: results.search,
      path: results.pathname + results.search,
      hash: results.hash,
      searchParams: results.searchParams
    };
  }; // url 是为度路径时，忽略 base


  if (/^(([^:/?#]+):)/.test(url)) {
    base = '';
  } // 设置了基准 URL


  if (base) {
    // 移除 base 最后的斜杠 ‘/’
    if (/[/]$/.test(base)) {
      base = base.replace(/[/]$/, '');
    } // 确保 url 开始有斜杠


    if (!/^[/]/.test(url)) {
      url = '/' + url;
    } // 保证 URL 地址拼接后是一个正确的格式


    url = base + url;
  }

  if (window.ActiveXObject) {
    return parseURLWithRegExp(url);
  } else {
    return parseURLWithURLConstructor(url);
  }
};
return parseURL;
}));
