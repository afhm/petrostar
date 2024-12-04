/*
 * Pannellum - An HTML5 based Panorama Viewer
 * Copyright (c) 2011-2019 Matthew Petroff
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
window.libpannellum = function (E, g, p) {
    function Ba(K) {
        function ja(a, e) { return 1 == a.level && 1 != e.level ? -1 : 1 == e.level && 1 != a.level ? 1 : e.timestamp - a.timestamp } function Q(a, e) { return a.level != e.level ? a.level - e.level : a.diff - e.diff } function ka(a, e, c, g, l, h) { this.vertices = a; this.side = e; this.level = c; this.x = g; this.y = l; this.path = h.replace("%s", e).replace("%l", c).replace("%x", g).replace("%y", l) } function Ja(a, e, g, p, l) {
            var h; var d = e.vertices; h = la(a, d.slice(0, 3)); var u = la(a, d.slice(3, 6)), x = la(a, d.slice(6, 9)), d = la(a, d.slice(9,
                12)), t = h[0] + u[0] + x[0] + d[0]; -4 == t || 4 == t ? h = !1 : (t = h[1] + u[1] + x[1] + d[1], h = -4 == t || 4 == t ? !1 : 4 != h[2] + u[2] + x[2] + d[2]); if (h) {
                    h = e.vertices; u = h[0] + h[3] + h[6] + h[9]; x = h[1] + h[4] + h[7] + h[10]; d = h[2] + h[5] + h[8] + h[11]; t = Math.sqrt(u * u + x * x + d * d); d = Math.asin(d / t); u = Math.atan2(x, u) - p; u += u > Math.PI ? -2 * Math.PI : u < -Math.PI ? 2 * Math.PI : 0; u = Math.abs(u); e.diff = Math.acos(Math.sin(g) * Math.sin(d) + Math.cos(g) * Math.cos(d) * Math.cos(u)); u = !1; for (x = 0; x < c.nodeCache.length; x++)if (c.nodeCache[x].path == e.path) {
                        u = !0; c.nodeCache[x].timestamp = c.nodeCacheTimestamp++;
                        c.nodeCache[x].diff = e.diff; c.currentNodes.push(c.nodeCache[x]); break
                    } u || (e.timestamp = c.nodeCacheTimestamp++, c.currentNodes.push(e), c.nodeCache.push(e)); if (e.level < c.level) {
                        var d = m.cubeResolution * Math.pow(2, e.level - m.maxLevel), u = Math.ceil(d * m.invTileResolution) - 1, x = d % m.tileResolution * 2, k = 2 * d % m.tileResolution; 0 === k && (k = m.tileResolution); 0 === x && (x = 2 * m.tileResolution); t = 0.5; if (e.x == u || e.y == u) t = 1 - m.tileResolution / (m.tileResolution + k); var y = 1 - t, d = [], s = t, z = t, D = t, I = y, A = y, B = y; if (k < m.tileResolution) if (e.x ==
                            u && e.y != u) { if (A = z = 0.5, "d" == e.side || "u" == e.side) B = D = 0.5 } else e.x != u && e.y == u && (I = s = 0.5, "l" == e.side || "r" == e.side) && (B = D = 0.5); x <= m.tileResolution && (e.x == u && (s = 0, I = 1, "l" == e.side || "r" == e.side) && (D = 0, B = 1), e.y == u && (z = 0, A = 1, "d" == e.side || "u" == e.side) && (D = 0, B = 1)); k = [h[0], h[1], h[2], h[0] * s + h[3] * I, h[1] * t + h[4] * y, h[2] * D + h[5] * B, h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B, h[0] * t + h[9] * y, h[1] * z + h[10] * A, h[2] * D + h[11] * B]; k = new ka(k, e.side, e.level + 1, 2 * e.x, 2 * e.y, m.fullpath); d.push(k); e.x == u && x <= m.tileResolution || (k = [h[0] * s +
                                h[3] * I, h[1] * t + h[4] * y, h[2] * D + h[5] * B, h[3], h[4], h[5], h[3] * t + h[6] * y, h[4] * z + h[7] * A, h[5] * D + h[8] * B, h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B], k = new ka(k, e.side, e.level + 1, 2 * e.x + 1, 2 * e.y, m.fullpath), d.push(k)); e.x == u && x <= m.tileResolution || e.y == u && x <= m.tileResolution || (k = [h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B, h[3] * t + h[6] * y, h[4] * z + h[7] * A, h[5] * D + h[8] * B, h[6], h[7], h[8], h[9] * s + h[6] * I, h[10] * t + h[7] * y, h[11] * D + h[8] * B], k = new ka(k, e.side, e.level + 1, 2 * e.x + 1, 2 * e.y + 1, m.fullpath), d.push(k)); e.y == u && x <= m.tileResolution ||
                                    (k = [h[0] * t + h[9] * y, h[1] * z + h[10] * A, h[2] * D + h[11] * B, h[0] * s + h[6] * I, h[1] * z + h[7] * A, h[2] * D + h[8] * B, h[9] * s + h[6] * I, h[10] * t + h[7] * y, h[11] * D + h[8] * B, h[9], h[10], h[11]], k = new ka(k, e.side, e.level + 1, 2 * e.x, 2 * e.y + 1, m.fullpath), d.push(k)); for (e = 0; e < d.length; e++)Ja(a, d[e], g, p, l)
                    }
                }
        } function ta() { return [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1] } function ua(a, e, c) {
            var g = Math.sin(e); e = Math.cos(e);
            if ("x" == c) return [a[0], e * a[1] + g * a[2], e * a[2] - g * a[1], a[3], e * a[4] + g * a[5], e * a[5] - g * a[4], a[6], e * a[7] + g * a[8], e * a[8] - g * a[7]]; if ("y" == c) return [e * a[0] - g * a[2], a[1], e * a[2] + g * a[0], e * a[3] - g * a[5], a[4], e * a[5] + g * a[3], e * a[6] - g * a[8], a[7], e * a[8] + g * a[6]]; if ("z" == c) return [e * a[0] + g * a[1], e * a[1] - g * a[0], a[2], e * a[3] + g * a[4], e * a[4] - g * a[3], a[5], e * a[6] + g * a[7], e * a[7] - g * a[6], a[8]]
        } function ma(a) { return [a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]] } function Ka(a) {
            La(a, a.path + "." + m.extension,
                function (e, c) { a.texture = e; a.textureLoaded = c ? 2 : 1 }, va.crossOrigin)
        } function la(a, e) { var c = [a[0] * e[0] + a[1] * e[1] + a[2] * e[2], a[4] * e[0] + a[5] * e[1] + a[6] * e[2], a[11] + a[8] * e[0] + a[9] * e[1] + a[10] * e[2], 1 / (a[12] * e[0] + a[13] * e[1] + a[14] * e[2])], g = c[0] * c[3], l = c[1] * c[3], c = c[2] * c[3], h = [0, 0, 0]; -1 > g && (h[0] = -1); 1 < g && (h[0] = 1); -1 > l && (h[1] = -1); 1 < l && (h[1] = 1); if (-1 > c || 1 < c) h[2] = 1; return h } function Ea() { console.log("Reducing canvas size due to error 1286!"); A.width = Math.round(A.width / 2); A.height = Math.round(A.height / 2) } var A = g.createElement("canvas");
        A.style.width = A.style.height = "100%"; K.appendChild(A); var c, a, U, V, $, R, wa, ga, m, z, F, ca, Fa, Y, na, va; this.init = function (L, e, Ca, H, l, h, d, u) {
            function x(a) { if (E) { var e = a * a * 4, h = new Uint8ClampedArray(e), c = u.backgroundColor ? u.backgroundColor : [0, 0, 0]; c[0] *= 255; c[1] *= 255; c[2] *= 255; for (var b = 0; b < e; b++)h[b++] = c[0], h[b++] = c[1], h[b++] = c[2]; a = new ImageData(h, a, a); for (t = 0; 6 > t; t++)0 == m[t].width && (m[t] = a) } } e === p && (e = "equirectangular"); if ("equirectangular" != e && "cubemap" != e && "multires" != e) throw console.log("Error: invalid image type specified!"),
                { type: "config error" }; z = e; m = L; F = Ca; va = u || {}; if (c) { U && (a.detachShader(c, U), a.deleteShader(U)); V && (a.detachShader(c, V), a.deleteShader(V)); a.bindBuffer(a.ARRAY_BUFFER, null); a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null); c.texture && a.deleteTexture(c.texture); if (c.nodeCache) for (L = 0; L < c.nodeCache.length; L++)a.deleteTexture(c.nodeCache[L].texture); a.deleteProgram(c); c = p } ga = p; var t, E = !1, y; if ("cubemap" == z) for (t = 0; 6 > t; t++)0 < m[t].width ? (y === p && (y = m[t].width), y != m[t].width && console.log("Cube faces have inconsistent widths: " +
                    y + " vs. " + m[t].width)) : E = !0; "cubemap" == z && 0 !== (y & y - 1) && (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/) || navigator.userAgent.match(/Trident.*rv[ :]*11\./)) || (a || (a = A.getContext("experimental-webgl", { alpha: !1, depth: !1 })), a && 1286 == a.getError() && Ea()); if (!a && ("multires" == z && m.hasOwnProperty("fallbackPath") || "cubemap" == z) && ("WebkitAppearance" in
                        g.documentElement.style || navigator.userAgent.match(/Trident.*rv[ :]*11\./) || -1 !== navigator.appVersion.indexOf("MSIE 10"))) {
                            R && K.removeChild(R); R = g.createElement("div"); R.className = "pnlm-world"; H = m.basePath ? m.basePath + m.fallbackPath : m.fallbackPath; var Q = "frblud".split(""), S = 0; l = function () {
                                var a = g.createElement("canvas"); a.className = "pnlm-face pnlm-" + Q[this.side] + "face"; R.appendChild(a); var e = a.getContext("2d"); a.style.width = this.width + 4 + "px"; a.style.height = this.height + 4 + "px"; a.width = this.width + 4; a.height =
                                    this.height + 4; e.drawImage(this, 2, 2); var h = e.getImageData(0, 0, a.width, a.height), c = h.data, b, d; for (b = 2; b < a.width - 2; b++)for (d = 0; 4 > d; d++)c[4 * (b + a.width) + d] = c[4 * (b + 2 * a.width) + d], c[4 * (b + a.width * (a.height - 2)) + d] = c[4 * (b + a.width * (a.height - 3)) + d]; for (b = 2; b < a.height - 2; b++)for (d = 0; 4 > d; d++)c[4 * (b * a.width + 1) + d] = c[4 * (b * a.width + 2) + d], c[4 * ((b + 1) * a.width - 2) + d] = c[4 * ((b + 1) * a.width - 3) + d]; for (d = 0; 4 > d; d++)c[4 * (a.width + 1) + d] = c[4 * (2 * a.width + 2) + d], c[4 * (2 * a.width - 2) + d] = c[4 * (3 * a.width - 3) + d], c[4 * (a.width * (a.height - 2) + 1) + d] = c[4 *
                                        (a.width * (a.height - 3) + 2) + d], c[4 * (a.width * (a.height - 1) - 2) + d] = c[4 * (a.width * (a.height - 2) - 3) + d]; for (b = 1; b < a.width - 1; b++)for (d = 0; 4 > d; d++)c[4 * b + d] = c[4 * (b + a.width) + d], c[4 * (b + a.width * (a.height - 1)) + d] = c[4 * (b + a.width * (a.height - 2)) + d]; for (b = 1; b < a.height - 1; b++)for (d = 0; 4 > d; d++)c[b * a.width * 4 + d] = c[4 * (b * a.width + 1) + d], c[4 * ((b + 1) * a.width - 1) + d] = c[4 * ((b + 1) * a.width - 2) + d]; for (d = 0; 4 > d; d++)c[d] = c[4 * (a.width + 1) + d], c[4 * (a.width - 1) + d] = c[4 * (2 * a.width - 2) + d], c[a.width * (a.height - 1) * 4 + d] = c[4 * (a.width * (a.height - 2) + 1) + d], c[4 * (a.width *
                                            a.height - 1) + d] = c[4 * (a.width * (a.height - 1) - 2) + d]; e.putImageData(h, 0, 0); D.call(this)
                            }; var D = function () { 0 < this.width ? ($ === p && ($ = this.width), $ != this.width && console.log("Fallback faces have inconsistent widths: " + $ + " vs. " + this.width)) : E = !0; S++; 6 == S && ($ = this.width, K.appendChild(R), d()) }, E = !1; for (t = 0; 6 > t; t++)h = new Image, h.crossOrigin = va.crossOrigin ? va.crossOrigin : "anonymous", h.side = t, h.onload = l, h.onerror = D, h.src = "multires" == z ? H.replace("%s", Q[t]) + "." + m.extension : m[t].src; x($)
            } else {
                if (!a) throw console.log("Error: no WebGL support detected!"),
                    { type: "no webgl" }; "cubemap" == z && x(y); m.fullpath = m.basePath ? m.basePath + m.path : m.path; m.invTileResolution = 1 / m.tileResolution; L = ta(); wa = []; for (t = 0; 6 > t; t++)wa[t] = L.slice(12 * t, 12 * t + 12), L = ta(); L = 0; if ("equirectangular" == z) { if (L = a.getParameter(a.MAX_TEXTURE_SIZE), Math.max(m.width / 2, m.height) > L) throw console.log("Error: The image is too big; it's " + m.width + "px wide, but this device's maximum supported size is " + 2 * L + "px."), { type: "webgl size error", width: m.width, maxWidth: 2 * L }; } else if ("cubemap" == z && y > a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)) throw console.log("Error: The image is too big; it's " +
                        y + "px wide, but this device's maximum supported size is " + L + "px."), { type: "webgl size error", width: y, maxWidth: L }; u === p || u.horizonPitch === p && u.horizonRoll === p || (ga = [u.horizonPitch == p ? 0 : u.horizonPitch, u.horizonRoll == p ? 0 : u.horizonRoll]); y = a.TEXTURE_2D; a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight); a.getShaderPrecisionFormat && (e = a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)) && 1 > e.precision && (oa = oa.replace("highp", "mediump")); U = a.createShader(a.VERTEX_SHADER); e = s; "multires" == z &&
                            (e = k); a.shaderSource(U, e); a.compileShader(U); V = a.createShader(a.FRAGMENT_SHADER); e = pa; "cubemap" == z ? (y = a.TEXTURE_CUBE_MAP, e = qa) : "multires" == z && (e = bb); a.shaderSource(V, e); a.compileShader(V); c = a.createProgram(); a.attachShader(c, U); a.attachShader(c, V); a.linkProgram(c); a.getShaderParameter(U, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(U)); a.getShaderParameter(V, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(V)); a.getProgramParameter(c, a.LINK_STATUS) || console.log(a.getProgramInfoLog(c)); a.useProgram(c);
                c.drawInProgress = !1; e = u.backgroundColor ? u.backgroundColor : [0, 0, 0]; a.clearColor(e[0], e[1], e[2], 1); a.clear(a.COLOR_BUFFER_BIT); c.texCoordLocation = a.getAttribLocation(c, "a_texCoord"); a.enableVertexAttribArray(c.texCoordLocation); "multires" != z ? (ca || (ca = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, ca), a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]), a.STATIC_DRAW), a.vertexAttribPointer(c.texCoordLocation, 2, a.FLOAT, !1, 0, 0), c.aspectRatio = a.getUniformLocation(c, "u_aspectRatio"),
                    a.uniform1f(c.aspectRatio, a.drawingBufferWidth / a.drawingBufferHeight), c.psi = a.getUniformLocation(c, "u_psi"), c.theta = a.getUniformLocation(c, "u_theta"), c.f = a.getUniformLocation(c, "u_f"), c.h = a.getUniformLocation(c, "u_h"), c.v = a.getUniformLocation(c, "u_v"), c.vo = a.getUniformLocation(c, "u_vo"), c.rot = a.getUniformLocation(c, "u_rot"), a.uniform1f(c.h, H / (2 * Math.PI)), a.uniform1f(c.v, l / Math.PI), a.uniform1f(c.vo, h / Math.PI * 2), "equirectangular" == z && (c.backgroundColor = a.getUniformLocation(c, "u_backgroundColor"), a.uniform4fv(c.backgroundColor,
                        e.concat([1]))), c.texture = a.createTexture(), a.bindTexture(y, c.texture), "cubemap" == z ? (a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[1]), a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[3]), a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[4]), a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[5]), a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[0]), a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                            0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m[2])) : m.width <= L ? (a.uniform1i(a.getUniformLocation(c, "u_splitImage"), 0), a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m)) : (a.uniform1i(a.getUniformLocation(c, "u_splitImage"), 1), H = g.createElement("canvas"), H.width = m.width / 2, H.height = m.height, H = H.getContext("2d"), H.drawImage(m, 0, 0), l = H.getImageData(0, 0, m.width / 2, m.height), a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, l), c.texture2 = a.createTexture(), a.activeTexture(a.TEXTURE1), a.bindTexture(y, c.texture2), a.uniform1i(a.getUniformLocation(c,
                                "u_image1"), 1), H.drawImage(m, -m.width / 2, 0), l = H.getImageData(0, 0, m.width / 2, m.height), a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, l), a.texParameteri(y, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(y, a.TEXTURE_MAG_FILTER, a.LINEAR), a.activeTexture(a.TEXTURE0)), a.texParameteri(y, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(y, a.TEXTURE_MIN_FILTER,
                                    a.LINEAR), a.texParameteri(y, a.TEXTURE_MAG_FILTER, a.LINEAR)) : (c.vertPosLocation = a.getAttribLocation(c, "a_vertCoord"), a.enableVertexAttribArray(c.vertPosLocation), Fa || (Fa = a.createBuffer()), Y || (Y = a.createBuffer()), na || (na = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, Y), a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, na), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), a.STATIC_DRAW), c.perspUniform = a.getUniformLocation(c,
                                        "u_perspMatrix"), c.cubeUniform = a.getUniformLocation(c, "u_cubeMatrix"), c.level = -1, c.currentNodes = [], c.nodeCache = [], c.nodeCacheTimestamp = 0); H = a.getError(); if (0 !== H) throw console.log("Error: Something went wrong with WebGL!", H), { type: "webgl error" }; d()
            }
        }; this.destroy = function () { K !== p && (A !== p && K.contains(A) && K.removeChild(A), R !== p && K.contains(R) && K.removeChild(R)); if (a) { var c = a.getExtension("WEBGL_lose_context"); c && c.loseContext() } }; this.resize = function () {
            var g = E.devicePixelRatio || 1; A.width = A.clientWidth *
                g; A.height = A.clientHeight * g; a && (1286 == a.getError() && Ea(), a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight), "multires" != z && a.uniform1f(c.aspectRatio, A.clientWidth / A.clientHeight))
        }; this.resize(); this.setPose = function (a, c) { ga = [a, c] }; this.render = function (g, e, k, s) {
            var l, h = 0; s === p && (s = {}); s.roll && (h = s.roll); if (ga !== p) {
                l = ga[0]; var d = ga[1], u = g, x = e, t = Math.cos(d) * Math.sin(g) * Math.sin(l) + Math.cos(g) * (Math.cos(l) * Math.cos(e) + Math.sin(d) * Math.sin(l) * Math.sin(e)), E = -Math.sin(g) * Math.sin(d) + Math.cos(g) *
                    Math.cos(d) * Math.sin(e); g = Math.cos(d) * Math.cos(l) * Math.sin(g) + Math.cos(g) * (-Math.cos(e) * Math.sin(l) + Math.cos(l) * Math.sin(d) * Math.sin(e)); g = Math.asin(Math.max(Math.min(g, 1), -1)); e = Math.atan2(E, t); l = [Math.cos(u) * (Math.sin(d) * Math.sin(l) * Math.cos(x) - Math.cos(l) * Math.sin(x)), Math.cos(u) * Math.cos(d) * Math.cos(x), Math.cos(u) * (Math.cos(l) * Math.sin(d) * Math.cos(x) + Math.sin(x) * Math.sin(l))]; d = [-Math.cos(g) * Math.sin(e), Math.cos(g) * Math.cos(e)]; d = Math.acos(Math.max(Math.min((l[0] * d[0] + l[1] * d[1]) / (Math.sqrt(l[0] *
                        l[0] + l[1] * l[1] + l[2] * l[2]) * Math.sqrt(d[0] * d[0] + d[1] * d[1])), 1), -1)); 0 > l[2] && (d = 2 * Math.PI - d); h += d
            } if (a || "multires" != z && "cubemap" != z) {
                if ("multires" != z) k = 2 * Math.atan(Math.tan(0.5 * k) / (a.drawingBufferWidth / a.drawingBufferHeight)), k = 1 / Math.tan(0.5 * k), a.uniform1f(c.psi, e), a.uniform1f(c.theta, g), a.uniform1f(c.rot, h), a.uniform1f(c.f, k), !0 === F && "equirectangular" == z && (a.bindTexture(a.TEXTURE_2D, c.texture), a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m)), a.drawArrays(a.TRIANGLES, 0, 6); else {
                    l = a.drawingBufferWidth /
                    a.drawingBufferHeight; d = 2 * Math.atan(Math.tan(k / 2) * a.drawingBufferHeight / a.drawingBufferWidth); d = 1 / Math.tan(d / 2); l = [d / l, 0, 0, 0, 0, d, 0, 0, 0, 0, 100.1 / -99.9, 20 / -99.9, 0, 0, -1, 0]; for (d = 1; d < m.maxLevel && a.drawingBufferWidth > m.tileResolution * Math.pow(2, d - 1) * Math.tan(k / 2) * 0.707;)d++; c.level = d; d = [1, 0, 0, 0, 1, 0, 0, 0, 1]; d = ua(d, -h, "z"); d = ua(d, -g, "x"); d = ua(d, e, "y"); d = [d[0], d[1], d[2], 0, d[3], d[4], d[5], 0, d[6], d[7], d[8], 0, 0, 0, 0, 1]; a.uniformMatrix4fv(c.perspUniform, !1, new Float32Array(ma(l))); a.uniformMatrix4fv(c.cubeUniform,
                        !1, new Float32Array(ma(d))); h = [l[0] * d[0], l[0] * d[1], l[0] * d[2], 0, l[5] * d[4], l[5] * d[5], l[5] * d[6], 0, l[10] * d[8], l[10] * d[9], l[10] * d[10], l[11], -d[8], -d[9], -d[10], 0]; c.nodeCache.sort(ja); if (200 < c.nodeCache.length && c.nodeCache.length > c.currentNodes.length + 50) for (l = c.nodeCache.splice(200, c.nodeCache.length - 200), d = 0; d < l.length; d++)a.deleteTexture(l[d].texture); c.currentNodes = []; d = "fbudlr".split(""); for (l = 0; 6 > l; l++)u = new ka(wa[l], d[l], 1, 0, 0, m.fullpath), Ja(h, u, g, e, k); c.currentNodes.sort(Q); for (g = S.length - 1; 0 <=
                            g; g--)-1 === c.currentNodes.indexOf(S[g].node) && (S[g].node.textureLoad = !1, S.splice(g, 1)); if (0 === S.length) for (g = 0; g < c.currentNodes.length; g++)if (e = c.currentNodes[g], !e.texture && !e.textureLoad) { e.textureLoad = !0; setTimeout(Ka, 0, e); break } if (!c.drawInProgress) {
                                c.drawInProgress = !0; a.clear(a.COLOR_BUFFER_BIT); for (g = 0; g < c.currentNodes.length; g++)1 < c.currentNodes[g].textureLoaded && (a.bindBuffer(a.ARRAY_BUFFER, Fa), a.bufferData(a.ARRAY_BUFFER, new Float32Array(c.currentNodes[g].vertices), a.STATIC_DRAW), a.vertexAttribPointer(c.vertPosLocation,
                                    3, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, Y), a.vertexAttribPointer(c.texCoordLocation, 2, a.FLOAT, !1, 0, 0), a.bindTexture(a.TEXTURE_2D, c.currentNodes[g].texture), a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0)); c.drawInProgress = !1
                            }
                } if (s.returnImage !== p) return A.toDataURL("image/png")
            } else for (l = $ / 2, s = {
                f: "translate3d(-" + (l + 2) + "px, -" + (l + 2) + "px, -" + l + "px)", b: "translate3d(" + (l + 2) + "px, -" + (l + 2) + "px, " + l + "px) rotateX(180deg) rotateZ(180deg)", u: "translate3d(-" + (l + 2) + "px, -" + l + "px, " + (l + 2) + "px) rotateX(270deg)",
                d: "translate3d(-" + (l + 2) + "px, " + l + "px, -" + (l + 2) + "px) rotateX(90deg)", l: "translate3d(-" + l + "px, -" + (l + 2) + "px, " + (l + 2) + "px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)", r: "translate3d(" + l + "px, -" + (l + 2) + "px, -" + (l + 2) + "px) rotateY(270deg)"
            }, k = 1 / Math.tan(k / 2), k = k * A.clientWidth / 2 + "px", e = "perspective(" + k + ") translateZ(" + k + ") rotateX(" + g + "rad) rotateY(" + e + "rad) ", k = Object.keys(s), g = 0; 6 > g; g++)if (h = R.querySelector(".pnlm-" + k[g] + "face")) h.style.webkitTransform = e + s[k[g]], h.style.transform = e + s[k[g]]
        }; this.isLoading =
            function () { if (a && "multires" == z) for (var g = 0; g < c.currentNodes.length; g++)if (!c.currentNodes[g].textureLoaded) return !0; return !1 }; this.getCanvas = function () { return A }; var S = [], La = function () {
                function c() {
                    var d = this; this.texture = this.callback = null; this.image = new Image; this.image.crossOrigin = l ? l : "anonymous"; var e = function () {
                        if (0 < d.image.width && 0 < d.image.height) {
                            var c = d.image; a.bindTexture(a.TEXTURE_2D, d.texture); a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, c); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER,
                                a.LINEAR); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE); a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE); a.bindTexture(a.TEXTURE_2D, null); d.callback(d.texture, !0)
                        } else d.callback(d.texture, !1); S.length ? (c = S.shift(), d.loadTexture(c.src, c.texture, c.callback)) : k[g++] = d
                    }; this.image.addEventListener("load", e); this.image.addEventListener("error", e)
                } function e(a, c, e, g) {
                    this.node = a; this.src = c; this.texture = e; this.callback =
                        g
                } var g = 4, k = {}, l; c.prototype.loadTexture = function (a, c, e) { this.texture = c; this.callback = e; this.image.src = a }; for (var h = 0; h < g; h++)k[h] = new c; return function (c, h, m, p) { l = p; p = a.createTexture(); g ? k[--g].loadTexture(h, p, m) : S.push(new e(c, h, p, m)); return p }
            }()
    } var s = "attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}", k = "attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}",
        oa = "precision highp float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nuniform bool u_splitImage;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);",
        qa = oa + "float cosphi = cos(phi);\ngl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));\n}", pa = oa + "lambda = mod(lambda + PI, PI * 2.0) - PI;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = u_backgroundColor;\nelse {\nif(u_splitImage) {\nif(coord.x < 0.0)\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / u_h, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\nelse\ngl_FragColor = texture2D(u_image1, vec2((coord.x + u_h) / u_h - 1.0, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n} else {\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}\n}\n}",
        bb = "varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}"; return { renderer: function (g, k, p, s) { return new Ba(g, k, p, s) } }
}(window, document);

window.pannellum = (function (window, document, undefined) {

    'use strict';

    /**
     * Creates a new panorama viewer.
     * @constructor
     * @param {HTMLElement|string} container - The container (div) element for the
     *      viewer, or its ID.
     * @param {Object} initialConfig - Inital configuration for viewer.
     */
    function Viewer(container, initialConfig) {

        var _this = this;

        // Declare variables
        var config,
            renderer,
            preview,
            isUserInteracting = false,
            latestInteraction = Date.now(),
            onPointerDownPointerX = 0,
            onPointerDownPointerY = 0,
            onPointerDownPointerDist = -1,
            onPointerDownYaw = 0,
            onPointerDownPitch = 0,
            keysDown = new Array(10),
            fullscreenActive = false,
            loaded,
            error = false,
            isTimedOut = false,
            listenersAdded = false,
            panoImage,
            prevTime,
            speed = { 'yaw': 0, 'pitch': 0, 'hfov': 0 },
            animating = false,
            orientation = false,
            orientationYawOffset = 0,
            autoRotateStart,
            autoRotateSpeed = 0,
            origHfov,
            origPitch,
            animatedMove = {},
            externalEventListeners = {},
            specifiedPhotoSphereExcludes = [],
            update = false, // Should we update when still to render dynamic content
            eps = 1e-6,
            hotspotsCreated = false,
            destroyed = false;

        var defaultConfig = {
            hfov: 100,
            minHfov: 50,
            multiResMinHfov: false,
            maxHfov: 120,
            pitch: 0,
            minPitch: undefined,
            maxPitch: undefined,
            yaw: 0,
            minYaw: -180,
            maxYaw: 180,
            roll: 0,
            haov: 360,
            vaov: 180,
            vOffset: 0,
            autoRotate: false,
            autoRotateInactivityDelay: -1,
            autoRotateStopDelay: undefined,
            type: 'equirectangular',
            northOffset: 0,
            showFullscreenCtrl: true,
            dynamic: false,
            dynamicUpdate: false,
            doubleClickZoom: true,
            keyboardZoom: true,
            mouseZoom: true,
            showZoomCtrl: true,
            autoLoad: false,
            showControls: true,
            orientationOnByDefault: false,
            hotSpotDebug: false,
            backgroundColor: [0, 0, 0],
            avoidShowingBackground: false,
            animationTimingFunction: timingFunction,
            draggable: true,
            disableKeyboardCtrl: false,
            crossOrigin: 'anonymous',
            touchPanSpeedCoeffFactor: 1,
            capturedKeyNumbers: [16, 17, 27, 37, 38, 39, 40, 61, 65, 68, 83, 87, 107, 109, 173, 187, 189],
            friction: 0.15
        };

        // Translatable / configurable strings
        // Some strings contain '%s', which is a placeholder for inserted values
        // When setting strings in external configuration, `\n` should be used instead of `<br>` to insert line breaks
        defaultConfig.strings = {
            // Labels
            loadButtonLabel: 'Click to<br>Load<br>Panorama',
            loadingLabel: 'Loading...',
            bylineLabel: ' %s',    // One substitution: author

            // Errors
            noPanoramaError: 'No panorama image was specified.',
            fileAccessError: 'The file %s could not be accessed.',  // One substitution: file URL
            malformedURLError: 'There is something wrong with the panorama URL.',
            iOS8WebGLError: "Due to iOS 8's broken WebGL implementation, only " +
                "progressive encoded JPEGs work for your device (this " +
                "panorama uses standard encoding).",
            genericWebGLError: 'Your browser does not have the necessary WebGL support to display this panorama.',
            textureSizeError: 'This panorama is too big for your device! It\'s ' +
                '%spx wide, but your device only supports images up to ' +
                '%spx wide. Try another device.' +
                ' (If you\'re the author, try scaling down the image.)',    // Two substitutions: image width, max image width
            unknownError: 'Unknown error. Check developer console.',
        };

        // Initialize container
        container = typeof container === 'string' ? document.getElementById(container) : container;
        container.classList.add('pnlm-container');
        container.tabIndex = 0;

        // Create container for ui
        var uiContainer = document.createElement('div');
        uiContainer.className = 'pnlm-ui';
        container.appendChild(uiContainer);

        // Create container for renderer
        var renderContainer = document.createElement('div');
        renderContainer.className = 'pnlm-render-container';
        container.appendChild(renderContainer);
        var dragFix = document.createElement('div');
        dragFix.className = 'pnlm-dragfix';
        uiContainer.appendChild(dragFix);

        // Display about information on right click off
        //         var aboutMsg = document.createElement('span');
        //         aboutMsg.className = 'pnlm-about-msg';
        //==wpvr custom rextheme link==//
        //         aboutMsg.innerHTML = '<a href="https://rextheme.com/docs/wpvr-360-panorama-and-virtual-tour-creator-for-wordpress/" target="_blank">Rextheme</a>';
        //==wpvr custom rextheme link end==//
        //         uiContainer.appendChild(aboutMsg);
        //         dragFix.addEventListener('contextmenu', aboutMessage);

        // Create info display
        var infoDisplay = {};

        // Hot spot debug indicator
        var hotSpotDebugIndicator = document.createElement('div');
        hotSpotDebugIndicator.className = 'pnlm-sprite pnlm-hot-spot-debug-indicator';
        uiContainer.appendChild(hotSpotDebugIndicator);

        // Panorama info
        infoDisplay.container = document.createElement('div');
        infoDisplay.container.className = 'pnlm-panorama-info';
        infoDisplay.title = document.createElement('div');
        infoDisplay.title.className = 'pnlm-title-box';
        infoDisplay.container.appendChild(infoDisplay.title);
        infoDisplay.author = document.createElement('div');
        infoDisplay.author.className = 'pnlm-author-box';
        infoDisplay.container.appendChild(infoDisplay.author);
        uiContainer.appendChild(infoDisplay.container);

        // Load box
        infoDisplay.load = {};
        infoDisplay.load.box = document.createElement('div');
        infoDisplay.load.box.className = 'pnlm-load-box';
        infoDisplay.load.boxp = document.createElement('p');
        infoDisplay.load.box.appendChild(infoDisplay.load.boxp);
        infoDisplay.load.lbox = document.createElement('div');
        infoDisplay.load.lbox.className = 'pnlm-lbox';
        infoDisplay.load.lbox.innerHTML = '<div class="pnlm-loading"></div>';
        infoDisplay.load.box.appendChild(infoDisplay.load.lbox);
        infoDisplay.load.lbar = document.createElement('div');
        infoDisplay.load.lbar.className = 'pnlm-lbar';
        infoDisplay.load.lbarFill = document.createElement('div');
        infoDisplay.load.lbarFill.className = 'pnlm-lbar-fill';
        infoDisplay.load.lbar.appendChild(infoDisplay.load.lbarFill);
        infoDisplay.load.box.appendChild(infoDisplay.load.lbar);
        infoDisplay.load.msg = document.createElement('p');
        infoDisplay.load.msg.className = 'pnlm-lmsg';
        infoDisplay.load.box.appendChild(infoDisplay.load.msg);
        uiContainer.appendChild(infoDisplay.load.box);

        // Error message
        infoDisplay.errorMsg = document.createElement('div');
        infoDisplay.errorMsg.className = 'pnlm-error-msg pnlm-info-box';
        uiContainer.appendChild(infoDisplay.errorMsg);

        // Create controls
        var controls = {};
        controls.container = document.createElement('div');
        controls.container.className = 'pnlm-controls-container';
        uiContainer.appendChild(controls.container);

        // Load button
        controls.load = document.createElement('div');
        controls.load.className = 'pnlm-load-button';
        controls.load.addEventListener('click', function () {
            processOptions();
            load();
        });
        uiContainer.appendChild(controls.load);

        // Zoom controls
        controls.zoom = document.createElement('div');
        controls.zoom.className = 'pnlm-zoom-controls pnlm-controls';
        controls.zoomIn = document.createElement('div');
        controls.zoomIn.className = 'pnlm-zoom-in pnlm-sprite pnlm-control';
        controls.zoomIn.addEventListener('click', zoomIn);
        controls.zoom.appendChild(controls.zoomIn);
        controls.zoomOut = document.createElement('div');
        controls.zoomOut.className = 'pnlm-zoom-out pnlm-sprite pnlm-control';
        controls.zoomOut.addEventListener('click', zoomOut);
        controls.zoom.appendChild(controls.zoomOut);
        controls.container.appendChild(controls.zoom);

        // Fullscreen toggle
        controls.fullscreen = document.createElement('div');
        controls.fullscreen.addEventListener('click', toggleFullscreen);
        controls.fullscreen.className = 'pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control';
        if (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled)
            controls.container.appendChild(controls.fullscreen);

        // Device orientation toggle
        controls.orientation = document.createElement('div');
        controls.orientation.addEventListener('click', function (e) {
            if (orientation)
                stopOrientation();
            else
                startOrientation();
        });
        controls.orientation.addEventListener('mousedown', function (e) { e.stopPropagation(); });
        controls.orientation.addEventListener('touchstart', function (e) { e.stopPropagation(); });
        controls.orientation.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
        controls.orientation.className = 'pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control';
        var orientationSupport = false;
        if (window.DeviceOrientationEvent && location.protocol == 'https:' &&
            navigator.userAgent.toLowerCase().indexOf('mobi') >= 0) {
            // This user agent check is here because there's no way to check if a
            // device has an inertia measurement unit. We used to be able to check if a
            // DeviceOrientationEvent had non-null values, but with iOS 13 requiring a
            // permission prompt to access such events, this is no longer possible.
            controls.container.appendChild(controls.orientation);
            orientationSupport = true;
        }

        // Compass
        var compass = document.createElement('div');
        compass.className = 'pnlm-compass pnlm-controls pnlm-control';
        uiContainer.appendChild(compass);

        // Load and process configuration
        if (initialConfig.firstScene) {
            // Activate first scene if specified in URL
            mergeConfig(initialConfig.firstScene);
        } else if (initialConfig.default && initialConfig.default.firstScene) {
            // Activate first scene if specified in file
            mergeConfig(initialConfig.default.firstScene);
        } else {
            mergeConfig(null);
        }
        processOptions(true);

        /**
         * Initializes viewer.
         * @private
         */
        function init() {
            // Display an error for IE 9 as it doesn't work but also doesn't otherwise
            // show an error (older versions don't work at all)
            // Based on: http://stackoverflow.com/a/10965203
            var div = document.createElement("div");
            div.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->";
            if (div.getElementsByTagName("i").length == 1) {
                anError();
                return;
            }

            origHfov = config.hfov;
            origPitch = config.pitch;

            var i, p;

            if (config.type == 'cubemap') {
                panoImage = [];
                for (i = 0; i < 6; i++) {
                    panoImage.push(new Image());
                    panoImage[i].crossOrigin = config.crossOrigin;
                }
                infoDisplay.load.lbox.style.display = 'block';
                infoDisplay.load.lbar.style.display = 'none';
            } else if (config.type == 'multires') {
                var c = JSON.parse(JSON.stringify(config.multiRes));    // Deep copy
                // Avoid "undefined" in path, check (optional) multiRes.basePath, too
                // Use only multiRes.basePath if it's an absolute URL
                if (config.basePath && config.multiRes.basePath &&
                    !(/^(?:[a-z]+:)?\/\//i.test(config.multiRes.basePath))) {
                    c.basePath = config.basePath + config.multiRes.basePath;
                } else if (config.multiRes.basePath) {
                    c.basePath = config.multiRes.basePath;
                } else if (config.basePath) {
                    c.basePath = config.basePath;
                }
                panoImage = c;
            } else {
                if (config.dynamic === true) {
                    panoImage = config.panorama;
                } else {
                    if (config.panorama === undefined) {
                        anError(config.strings.noPanoramaError);
                        return;
                    }
                    panoImage = new Image();
                }
            }

            // Configure image loading
            if (config.type == 'cubemap') {
                // Quick loading counter for synchronous loading
                var itemsToLoad = 6;

                var onLoad = function () {
                    itemsToLoad--;
                    if (itemsToLoad === 0) {
                        onImageLoad();
                    }
                };

                var onError = function (e) {
                    var a = document.createElement('a');
                    a.href = e.target.src;
                    a.textContent = a.href;
                    anError(config.strings.fileAccessError.replace('%s', a.outerHTML));
                };

                for (i = 0; i < panoImage.length; i++) {
                    p = config.cubeMap[i];
                    if (p == "null") { // support partial cubemap image with explicitly empty faces
                        console.log('Will use background instead of missing cubemap face ' + i);
                        onLoad();
                    } else {
                        if (config.basePath && !absoluteURL(p)) {
                            p = config.basePath + p;
                        }
                        panoImage[i].onload = onLoad;
                        panoImage[i].onerror = onError;
                        panoImage[i].src = sanitizeURL(p);
                    }
                }
            } else if (config.type == 'multires') {
                onImageLoad();
            } else {
                p = '';
                if (config.basePath) {
                    p = config.basePath;
                }

                if (config.dynamic !== true) {
                    // Still image
                    p = absoluteURL(config.panorama) ? config.panorama : p + config.panorama;

                    panoImage.onload = function () {
                        window.URL.revokeObjectURL(this.src);  // Clean up
                        onImageLoad();
                    };

                    var xhr = new XMLHttpRequest();
                    xhr.onloadend = function () {
                        if (xhr.status != 200) {
                            // Display error if image can't be loaded
                            var a = document.createElement('a');
                            a.href = p;
                            a.textContent = a.href;
                            anError(config.strings.fileAccessError.replace('%s', a.outerHTML));
                        }
                        var img = this.response;
                        parseGPanoXMP(img, p);
                        infoDisplay.load.msg.innerHTML = '';
                    };
                    xhr.onprogress = function (e) {
                        if (e.lengthComputable) {
                            // Display progress
                            var percent = e.loaded / e.total * 100;
                            infoDisplay.load.lbarFill.style.width = percent + '%';
                            var unit, numerator, denominator;
                            if (e.total > 1e6) {
                                unit = 'MB';
                                numerator = (e.loaded / 1e6).toFixed(2);
                                denominator = (e.total / 1e6).toFixed(2);
                            } else if (e.total > 1e3) {
                                unit = 'kB';
                                numerator = (e.loaded / 1e3).toFixed(1);
                                denominator = (e.total / 1e3).toFixed(1);
                            } else {
                                unit = 'B';
                                numerator = e.loaded;
                                denominator = e.total;
                            }
                            infoDisplay.load.msg.innerHTML = numerator + ' / ' + denominator + ' ' + unit;
                        } else {
                            // Display loading spinner
                            infoDisplay.load.lbox.style.display = 'block';
                            infoDisplay.load.lbar.style.display = 'none';
                        }
                    };
                    try {
                        xhr.open('GET', p, true);
                    } catch (e) {
                        // Malformed URL
                        anError(config.strings.malformedURLError);
                    }
                    xhr.responseType = 'blob';
                    xhr.setRequestHeader('Accept', 'image/*,*/*;q=0.9');
                    xhr.withCredentials = config.crossOrigin === 'use-credentials';
                    xhr.send();
                }
            }

            if (config.draggable)
                uiContainer.classList.add('pnlm-grab');
            uiContainer.classList.remove('pnlm-grabbing');

            // Properly handle switching to dynamic scenes
            update = config.dynamicUpdate === true;
            if (config.dynamic && update) {
                panoImage = config.panorama;
                onImageLoad();
            }
        }

        /**
         * Test if URL is absolute or relative.
         * @private
         * @param {string} url - URL to test
         * @returns {boolean} True if absolute, else false
         */
        function absoluteURL(url) {
            // From http://stackoverflow.com/a/19709846
            return new RegExp('^(?:[a-z]+:)?//', 'i').test(url) || url[0] == '/' || url.slice(0, 5) == 'blob:';
        }

        /**
         * Create renderer and initialize event listeners once image is loaded.
         * @private
         */
        function onImageLoad() {
            if (!renderer)
                renderer = new libpannellum.renderer(renderContainer);

            // Only add event listeners once
            if (!listenersAdded) {
                listenersAdded = true;
                dragFix.addEventListener('mousedown', onDocumentMouseDown, false);
                document.addEventListener('mousemove', onDocumentMouseMove, false);
                document.addEventListener('compasschange', onDocumentCompassChange, false);
                document.addEventListener('mouseup', onDocumentMouseUp, false);
                if (config.mouseZoom) {
                    uiContainer.addEventListener('mousewheel', onDocumentMouseWheel, false);
                    uiContainer.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
                }
                if (config.doubleClickZoom) {
                    dragFix.addEventListener('dblclick', onDocumentDoubleClick, false);
                }
                container.addEventListener('mozfullscreenchange', onFullScreenChange, false);
                container.addEventListener('webkitfullscreenchange', onFullScreenChange, false);
                container.addEventListener('msfullscreenchange', onFullScreenChange, false);
                container.addEventListener('fullscreenchange', onFullScreenChange, false);
                window.addEventListener('resize', onDocumentResize, false);
                window.addEventListener('orientationchange', onDocumentResize, false);
                if (!config.disableKeyboardCtrl) {
                    container.addEventListener('keydown', onDocumentKeyPress, false);
                    container.addEventListener('keyup', onDocumentKeyUp, false);
                    container.addEventListener('blur', clearKeys, false);
                }
                document.addEventListener('mouseleave', onDocumentMouseUp, false);
                if (document.documentElement.style.pointerAction === '' &&
                    document.documentElement.style.touchAction === '') {
                    dragFix.addEventListener('pointerdown', onDocumentPointerDown, false);
                    dragFix.addEventListener('pointermove', onDocumentPointerMove, false);
                    dragFix.addEventListener('pointerup', onDocumentPointerUp, false);
                    dragFix.addEventListener('pointerleave', onDocumentPointerUp, false);
                } else {
                    dragFix.addEventListener('touchstart', onDocumentTouchStart, false);
                    dragFix.addEventListener('touchmove', onDocumentTouchMove, false);
                    dragFix.addEventListener('touchend', onDocumentTouchEnd, false);
                }

                // Deal with MS pointer events
                if (window.navigator.pointerEnabled)
                    container.style.touchAction = 'none';
            }

            renderInit();
            setHfov(config.hfov); // possibly adapt hfov after configuration and canvas is complete; prevents empty space on top or bottom by zomming out too much
            setTimeout(function () { isTimedOut = true; }, 500);
        }

        /**
         * Parses Google Photo Sphere XMP Metadata.
         * https://developers.google.com/photo-sphere/metadata/
         * @private
         * @param {Image} image - Image to read XMP metadata from.
         */
        function parseGPanoXMP(image, url) {
            var reader = new FileReader();
            reader.addEventListener('loadend', function () {
                var img = reader.result;

                // This awful browser specific test exists because iOS 8 does not work
                // with non-progressive encoded JPEGs.
                if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)) {
                    var flagIndex = img.indexOf('\xff\xc2');
                    if (flagIndex < 0 || flagIndex > 65536)
                        anError(config.strings.iOS8WebGLError);
                }

                var start = img.indexOf('<x:xmpmeta');
                if (start > -1 && config.ignoreGPanoXMP !== true) {
                    var xmpData = img.substring(start, img.indexOf('</x:xmpmeta>') + 12);

                    // Extract the requested tag from the XMP data
                    var getTag = function (tag) {
                        var result;
                        if (xmpData.indexOf(tag + '="') >= 0) {
                            result = xmpData.substring(xmpData.indexOf(tag + '="') + tag.length + 2);
                            result = result.substring(0, result.indexOf('"'));
                        } else if (xmpData.indexOf(tag + '>') >= 0) {
                            result = xmpData.substring(xmpData.indexOf(tag + '>') + tag.length + 1);
                            result = result.substring(0, result.indexOf('<'));
                        }
                        if (result !== undefined) {
                            return Number(result);
                        }
                        return null;
                    };

                    // Relevant XMP data
                    var xmp = {
                        fullWidth: getTag('GPano:FullPanoWidthPixels'),
                        croppedWidth: getTag('GPano:CroppedAreaImageWidthPixels'),
                        fullHeight: getTag('GPano:FullPanoHeightPixels'),
                        croppedHeight: getTag('GPano:CroppedAreaImageHeightPixels'),
                        topPixels: getTag('GPano:CroppedAreaTopPixels'),
                        heading: getTag('GPano:PoseHeadingDegrees'),
                        horizonPitch: getTag('GPano:PosePitchDegrees'),
                        horizonRoll: getTag('GPano:PoseRollDegrees')
                    };

                    if (xmp.fullWidth !== null && xmp.croppedWidth !== null &&
                        xmp.fullHeight !== null && xmp.croppedHeight !== null &&
                        xmp.topPixels !== null) {

                        // Set up viewer using GPano XMP data
                        if (specifiedPhotoSphereExcludes.indexOf('haov') < 0)
                            config.haov = xmp.croppedWidth / xmp.fullWidth * 360;
                        if (specifiedPhotoSphereExcludes.indexOf('vaov') < 0)
                            config.vaov = xmp.croppedHeight / xmp.fullHeight * 180;
                        if (specifiedPhotoSphereExcludes.indexOf('vOffset') < 0)
                            config.vOffset = ((xmp.topPixels + xmp.croppedHeight / 2) / xmp.fullHeight - 0.5) * -180;
                        if (xmp.heading !== null && specifiedPhotoSphereExcludes.indexOf('northOffset') < 0) {
                            // TODO: make sure this works correctly for partial panoramas
                            config.northOffset = xmp.heading;
                            if (config.compass !== false) {
                                config.compass = true;
                            }
                        }
                        if (xmp.horizonPitch !== null && xmp.horizonRoll !== null) {
                            if (specifiedPhotoSphereExcludes.indexOf('horizonPitch') < 0)
                                config.horizonPitch = xmp.horizonPitch;
                            if (specifiedPhotoSphereExcludes.indexOf('horizonRoll') < 0)
                                config.horizonRoll = xmp.horizonRoll;
                        }

                        // TODO: add support for initial view settings
                    }
                }

                // Load panorama
                panoImage.src = window.URL.createObjectURL(image);
                panoImage.onerror = function () {
                    // If the image fails to load, we check the Content Security Policy
                    // headers and see if they block loading images as blobs. If they
                    // do, we load the image directly from the URL. While this should
                    // allow the image to load, it does prevent parsing of XMP data.
                    function getCspHeaders() {
                        if (!window.fetch)
                            return null;
                        return window.fetch(document.location.href)
                            .then(function (resp) {
                                return resp.headers.get('Content-Security-Policy');
                            });
                    }
                    getCspHeaders().then(function (cspHeaders) {
                        if (cspHeaders) {
                            var invalidImgSource = cspHeaders.split(";").find(function (p) {
                                var matchstring = p.match(/img-src(.*)/);
                                if (matchstring) {
                                    return !matchstring[1].includes("blob");
                                }
                            });
                            if (invalidImgSource) {
                                console.log('CSP blocks blobs; reverting to URL.');
                                panoImage.crossOrigin = config.crossOrigin;
                                panoImage.src = url;
                            }
                        }
                    });
                }
            });
            if (reader.readAsBinaryString !== undefined)
                reader.readAsBinaryString(image);
            else
                reader.readAsText(image);
        }

        /**
         * Displays an error message.
         * @private
         * @param {string} errorMsg - Error message to display. If not specified, a
         *      generic WebGL error is displayed.
         */
        function anError(errorMsg) {
            if (errorMsg === undefined)
                errorMsg = config.strings.genericWebGLError;
            infoDisplay.errorMsg.innerHTML = '<p>' + errorMsg + '</p>';
            controls.load.style.display = 'none';
            infoDisplay.load.box.style.display = 'none';
            infoDisplay.errorMsg.style.display = 'table';
            error = true;
            loaded = undefined;
            renderContainer.style.display = 'none';
            fireEvent('error', errorMsg);
        }

        /**
         * Hides error message display.
         * @private
         */
        function clearError() {
            if (error) {
                infoDisplay.load.box.style.display = 'none';
                infoDisplay.errorMsg.style.display = 'none';
                error = false;
                renderContainer.style.display = 'block';
                fireEvent('errorcleared');
            }
        }

        /**
         * Displays about message.
         * @private
         * @param {MouseEvent} event - Right click location
         */
        function aboutMessage(event) {
            var pos = mousePosition(event);
            aboutMsg.style.left = pos.x + 'px';
            aboutMsg.style.top = pos.y + 'px';
            clearTimeout(aboutMessage.t1);
            clearTimeout(aboutMessage.t2);
            aboutMsg.style.display = 'block';
            aboutMsg.style.opacity = 1;
            aboutMessage.t1 = setTimeout(function () { aboutMsg.style.opacity = 0; }, 2000);
            aboutMessage.t2 = setTimeout(function () { aboutMsg.style.display = 'none'; }, 2500);
            event.preventDefault();
        }

        /**
         * Calculate mouse position relative to top left of viewer container.
         * @private
         * @param {MouseEvent} event - Mouse event to use in calculation
         * @returns {Object} Calculated X and Y coordinates
         */
        function mousePosition(event) {
            var bounds = container.getBoundingClientRect();
            var pos = {};
            // pageX / pageY needed for iOS
            pos.x = (event.clientX || event.pageX) - bounds.left;
            pos.y = (event.clientY || event.pageY) - bounds.top;
            return pos;
        }

        /**
         * Event handler for mouse clicks. Initializes panning. Prints center and click
         * location coordinates when hot spot debugging is enabled.
         * @private
         * @param {MouseEvent} event - Document mouse down event.
         */
        function onDocumentMouseDown(event) {
            // Override default action
            event.preventDefault();
            // But not all of it
            container.focus();

            // Only do something if the panorama is loaded
            if (!loaded || !config.draggable) {
                return;
            }

            // Calculate mouse position relative to top left of viewer container
            var pos = mousePosition(event);

            // Log pitch / yaw of mouse click when debugging / placing hot spots
            if (config.hotSpotDebug) {
                var coords = mouseEventToCoords(event);
                console.log('Pitch: ' + coords[0] + ', Yaw: ' + coords[1] + ', Center Pitch: ' +
                    config.pitch + ', Center Yaw: ' + config.yaw + ', HFOV: ' + config.hfov);
            }

            // Turn off auto-rotation if enabled
            stopAnimation();

            stopOrientation();
            config.roll = 0;

            speed.hfov = 0;

            isUserInteracting = true;
            latestInteraction = Date.now();

            onPointerDownPointerX = pos.x;
            onPointerDownPointerY = pos.y;

            onPointerDownYaw = config.yaw;
            onPointerDownPitch = config.pitch;

            uiContainer.classList.add('pnlm-grabbing');
            uiContainer.classList.remove('pnlm-grab');

            fireEvent('mousedown', event);
            animateInit();
        }

        /**
         * Event handler for double clicks. Zooms in at clicked location
         * @private
         * @param {MouseEvent} event - Document mouse down event.
         */
        function onDocumentDoubleClick(event) {
            if (config.minHfov === config.hfov) {
                _this.setHfov(origHfov, 1000);
            } else {
                var coords = mouseEventToCoords(event);
                _this.lookAt(coords[0], coords[1], config.minHfov, 1000);
            }
        }

        /**
         * Calculate panorama pitch and yaw from location of mouse event.
         * @private
         * @param {MouseEvent} event - Document mouse down event.
         * @returns {number[]} [pitch, yaw]
         */
        function mouseEventToCoords(event) {
            var pos = mousePosition(event);
            var canvas = renderer.getCanvas();
            var canvasWidth = canvas.clientWidth,
                canvasHeight = canvas.clientHeight;
            var x = pos.x / canvasWidth * 2 - 1;
            var y = (1 - pos.y / canvasHeight * 2) * canvasHeight / canvasWidth;
            var focal = 1 / Math.tan(config.hfov * Math.PI / 360);
            var s = Math.sin(config.pitch * Math.PI / 180);
            var c = Math.cos(config.pitch * Math.PI / 180);
            var a = focal * c - y * s;
            var root = Math.sqrt(x * x + a * a);
            var pitch = Math.atan((y * c + focal * s) / root) * 180 / Math.PI;
            var yaw = Math.atan2(x / root, a / root) * 180 / Math.PI + config.yaw;
            if (yaw < -180)
                yaw += 360;
            if (yaw > 180)
                yaw -= 360;
            return [pitch, yaw];
        }

        function onDocumentCompassChange(event) {

        }

        /**
         * Event handler for mouse moves. Pans center of view.
         * @private
         * @param {MouseEvent} event - Document mouse move event.
         */
        function onDocumentMouseMove(event) {
            if (isUserInteracting && loaded) {
                latestInteraction = Date.now();
                var canvas = renderer.getCanvas();
                var canvasWidth = canvas.clientWidth,
                    canvasHeight = canvas.clientHeight;
                var pos = mousePosition(event);
                //TODO: This still isn't quite right
                var yaw = ((Math.atan(onPointerDownPointerX / canvasWidth * 2 - 1) - Math.atan(pos.x / canvasWidth * 2 - 1)) * 180 / Math.PI * config.hfov / 90) + onPointerDownYaw;
                speed.yaw = (yaw - config.yaw) % 360 * 0.2;
                config.yaw = yaw;

                var vfov = 2 * Math.atan(Math.tan(config.hfov / 360 * Math.PI) * canvasHeight / canvasWidth) * 180 / Math.PI;

                var pitch = ((Math.atan(pos.y / canvasHeight * 2 - 1) - Math.atan(onPointerDownPointerY / canvasHeight * 2 - 1)) * 180 / Math.PI * vfov / 90) + onPointerDownPitch;
                speed.pitch = (pitch - config.pitch) * 0.2;
                config.pitch = pitch;

                var mirrorData = {
                    pitch: pitch,
                    yaw: yaw
                }
                fireEvent('mousemove', mirrorData);

            }
        }

        /**
         * Event handler for mouse up events. Stops panning.
         * @private
         */
        function onDocumentMouseUp(event) {
            if (!isUserInteracting) {
                return;
            }
            isUserInteracting = false;
            if (Date.now() - latestInteraction > 15) {
                // Prevents jump when user rapidly moves mouse, stops, and then
                // releases the mouse button
                speed.pitch = speed.yaw = 0;
            }
            uiContainer.classList.add('pnlm-grab');
            uiContainer.classList.remove('pnlm-grabbing');
            latestInteraction = Date.now();

            fireEvent('mouseup', event);
        }

        /**
         * Event handler for touches. Initializes panning if one touch or zooming if
         * two touches.
         * @private
         * @param {TouchEvent} event - Document touch start event.
         */
        function onDocumentTouchStart(event) {
            // Only do something if the panorama is loaded
            if (!loaded || !config.draggable) {
                return;
            }

            // Turn off auto-rotation if enabled
            stopAnimation();

            stopOrientation();
            config.roll = 0;

            speed.hfov = 0;

            // Calculate touch position relative to top left of viewer container
            var pos0 = mousePosition(event.targetTouches[0]);

            onPointerDownPointerX = pos0.x;
            onPointerDownPointerY = pos0.y;

            if (event.targetTouches.length == 2) {
                // Down pointer is the center of the two fingers
                var pos1 = mousePosition(event.targetTouches[1]);
                onPointerDownPointerX += (pos1.x - pos0.x) * 0.5;
                onPointerDownPointerY += (pos1.y - pos0.y) * 0.5;
                onPointerDownPointerDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) +
                    (pos0.y - pos1.y) * (pos0.y - pos1.y));
            }
            isUserInteracting = true;
            latestInteraction = Date.now();

            onPointerDownYaw = config.yaw;
            onPointerDownPitch = config.pitch;

            fireEvent('touchstart', event);
            animateInit();
        }

        /**
         * Event handler for touch movements. Pans center of view if one touch or
         * adjusts zoom if two touches.
         * @private
         * @param {TouchEvent} event - Document touch move event.
         */
        function onDocumentTouchMove(event) {
            if (!config.draggable) {
                return;
            }

            // Override default action
            event.preventDefault();
            if (loaded) {
                latestInteraction = Date.now();
            }
            if (isUserInteracting && loaded) {
                var pos0 = mousePosition(event.targetTouches[0]);
                var clientX = pos0.x;
                var clientY = pos0.y;

                if (event.targetTouches.length == 2 && onPointerDownPointerDist != -1) {
                    var pos1 = mousePosition(event.targetTouches[1]);
                    clientX += (pos1.x - pos0.x) * 0.5;
                    clientY += (pos1.y - pos0.y) * 0.5;
                    var clientDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) +
                        (pos0.y - pos1.y) * (pos0.y - pos1.y));
                    setHfov(config.hfov + (onPointerDownPointerDist - clientDist) * 0.1);
                    onPointerDownPointerDist = clientDist;
                }

                // The smaller the config.hfov value (the more zoomed-in the user is), the faster
                // yaw/pitch are perceived to change on one-finger touchmove (panning) events and vice versa.
                // To improve usability at both small and large zoom levels (config.hfov values)
                // we introduce a dynamic pan speed coefficient.
                //
                // Currently this seems to *roughly* keep initial drag/pan start position close to
                // the user's finger while panning regardless of zoom level / config.hfov value.
                var touchmovePanSpeedCoeff = (config.hfov / 360) * config.touchPanSpeedCoeffFactor;

                var yaw = (onPointerDownPointerX - clientX) * touchmovePanSpeedCoeff + onPointerDownYaw;
                speed.yaw = (yaw - config.yaw) % 360 * 0.2;
                config.yaw = yaw;

                var pitch = (clientY - onPointerDownPointerY) * touchmovePanSpeedCoeff + onPointerDownPitch;
                speed.pitch = (pitch - config.pitch) * 0.2;
                config.pitch = pitch;
                var mirrorData = {
                    pitch: pitch,
                    yaw: yaw
                }
                fireEvent('touchmove', mirrorData);
            }
        }

        /**
         * Event handler for end of touches. Stops panning and/or zooming.
         * @private
         */
        function onDocumentTouchEnd() {
            isUserInteracting = false;
            if (Date.now() - latestInteraction > 150) {
                speed.pitch = speed.yaw = 0;
            }
            onPointerDownPointerDist = -1;
            latestInteraction = Date.now();

            fireEvent('touchend', event);
        }

        var pointerIDs = [],
            pointerCoordinates = [];
        /**
         * Event handler for touch starts in IE / Edge.
         * @private
         * @param {PointerEvent} event - Document pointer down event.
         */
        function onDocumentPointerDown(event) {
            if (event.pointerType == 'touch') {
                // Only do something if the panorama is loaded
                if (!loaded || !config.draggable)
                    return;
                pointerIDs.push(event.pointerId);
                pointerCoordinates.push({ clientX: event.clientX, clientY: event.clientY });
                event.targetTouches = pointerCoordinates;
                onDocumentTouchStart(event);
                event.preventDefault();
            }
        }

        /**
         * Event handler for touch moves in IE / Edge.
         * @private
         * @param {PointerEvent} event - Document pointer move event.
         */
        function onDocumentPointerMove(event) {
            if (event.pointerType == 'touch') {
                if (!config.draggable)
                    return;
                for (var i = 0; i < pointerIDs.length; i++) {
                    if (event.pointerId == pointerIDs[i]) {
                        pointerCoordinates[i].clientX = event.clientX;
                        pointerCoordinates[i].clientY = event.clientY;
                        event.targetTouches = pointerCoordinates;
                        onDocumentTouchMove(event);
                        event.preventDefault();
                        return;
                    }
                }
            }
        }

        /**
         * Event handler for touch ends in IE / Edge.
         * @private
         * @param {PointerEvent} event - Document pointer up event.
         */
        function onDocumentPointerUp(event) {
            if (event.pointerType == 'touch') {
                var defined = false;
                for (var i = 0; i < pointerIDs.length; i++) {
                    if (event.pointerId == pointerIDs[i])
                        pointerIDs[i] = undefined;
                    if (pointerIDs[i])
                        defined = true;
                }
                if (!defined) {
                    pointerIDs = [];
                    pointerCoordinates = [];
                    onDocumentTouchEnd();
                }
                event.preventDefault();
            }
        }

        /**
         * Event handler for mouse wheel. Changes zoom.
         * @private
         * @param {WheelEvent} event - Document mouse wheel event.
         */
        function onDocumentMouseWheel(event) {
            // Only do something if the panorama is loaded and mouse wheel zoom is enabled
            if (!loaded || (config.mouseZoom == 'fullscreenonly' && !fullscreenActive)) {
                return;
            }

            event.preventDefault();

            // Turn off auto-rotation if enabled
            stopAnimation();
            latestInteraction = Date.now();

            if (event.wheelDeltaY) {
                // WebKit
                setHfov(config.hfov - event.wheelDeltaY * 0.05);
                speed.hfov = event.wheelDelta < 0 ? 1 : -1;
            } else if (event.wheelDelta) {
                // Opera / Explorer 9
                setHfov(config.hfov - event.wheelDelta * 0.05);
                speed.hfov = event.wheelDelta < 0 ? 1 : -1;
            } else if (event.detail) {
                // Firefox
                setHfov(config.hfov + event.detail * 1.5);
                speed.hfov = event.detail > 0 ? 1 : -1;
            }
            animateInit();
        }

        /**
         * Event handler for key presses. Updates list of currently pressed keys.
         * @private
         * @param {KeyboardEvent} event - Document key press event.
         */
        function onDocumentKeyPress(event) {
            // Turn off auto-rotation if enabled
            stopAnimation();
            latestInteraction = Date.now();

            stopOrientation();
            config.roll = 0;

            // Record key pressed
            var keynumber = event.which || event.keycode;

            // Override default action for keys that are used
            if (config.capturedKeyNumbers.indexOf(keynumber) < 0)
                return;
            event.preventDefault();

            // If escape key is pressed
            if (keynumber == 27) {
                // If in fullscreen mode
                if (fullscreenActive) {
                    toggleFullscreen();
                }
            } else {
                // Change key
                changeKey(keynumber, true);
            }
        }

        /**
         * Clears list of currently pressed keys.
         * @private
         */
        function clearKeys() {
            for (var i = 0; i < 10; i++) {
                keysDown[i] = false;
            }
        }

        /**
         * Event handler for key releases. Updates list of currently pressed keys.
         * @private
         * @param {KeyboardEvent} event - Document key up event.
         */
        function onDocumentKeyUp(event) {
            // Record key pressed
            var keynumber = event.which || event.keycode;

            // Override default action for keys that are used
            if (config.capturedKeyNumbers.indexOf(keynumber) < 0)
                return;
            event.preventDefault();

            // Change key
            changeKey(keynumber, false);
        }

        /**
         * Updates list of currently pressed keys.
         * @private
         * @param {number} keynumber - Key number.
         * @param {boolean} value - Whether or not key is pressed.
         */
        function changeKey(keynumber, value) {
            var keyChanged = false;
            switch (keynumber) {
                // If minus key is released
                case 109: case 189: case 17: case 173:
                    if (keysDown[0] != value) { keyChanged = true; }
                    keysDown[0] = value; break;

                // If plus key is released
                case 107: case 187: case 16: case 61:
                    if (keysDown[1] != value) { keyChanged = true; }
                    keysDown[1] = value; break;

                // If up arrow is released
                case 38:
                    if (keysDown[2] != value) { keyChanged = true; }
                    keysDown[2] = value; break;

                // If "w" is released
                case 87:
                    if (keysDown[6] != value) { keyChanged = true; }
                    keysDown[6] = value; break;

                // If down arrow is released
                case 40:
                    if (keysDown[3] != value) { keyChanged = true; }
                    keysDown[3] = value; break;

                // If "s" is released
                case 83:
                    if (keysDown[7] != value) { keyChanged = true; }
                    keysDown[7] = value; break;

                // If left arrow is released
                case 37:
                    if (keysDown[4] != value) { keyChanged = true; }
                    keysDown[4] = value; break;

                // If "a" is released
                case 65:
                    if (keysDown[8] != value) { keyChanged = true; }
                    keysDown[8] = value; break;

                // If right arrow is released
                case 39:
                    if (keysDown[5] != value) { keyChanged = true; }
                    keysDown[5] = value; break;

                // If "d" is released
                case 68:
                    if (keysDown[9] != value) { keyChanged = true; }
                    keysDown[9] = value;
            }

            if (keyChanged && value) {
                if (typeof performance !== 'undefined' && performance.now()) {
                    prevTime = performance.now();
                } else {
                    prevTime = Date.now();
                }
                animateInit();
            }
        }

        /**
         * Pans and/or zooms panorama based on currently pressed keys. Also handles
         * panorama "inertia" and auto rotation.
         * @private
         */
        function keyRepeat() {
            // Only do something if the panorama is loaded
            if (!loaded) {
                return;
            }

            var isKeyDown = false;

            var prevPitch = config.pitch;
            var prevYaw = config.yaw;
            var prevZoom = config.hfov;

            var newTime;
            if (typeof performance !== 'undefined' && performance.now()) {
                newTime = performance.now();
            } else {
                newTime = Date.now();
            }
            if (prevTime === undefined) {
                prevTime = newTime;
            }
            var diff = (newTime - prevTime) * config.hfov / 1700;
            diff = Math.min(diff, 1.0);

            // If minus key is down
            if (keysDown[0] && config.keyboardZoom === true) {
                setHfov(config.hfov + (speed.hfov * 0.8 + 0.5) * diff);
                isKeyDown = true;
            }

            // If plus key is down
            if (keysDown[1] && config.keyboardZoom === true) {
                setHfov(config.hfov + (speed.hfov * 0.8 - 0.2) * diff);
                isKeyDown = true;
            }

            // If up arrow or "w" is down
            if (keysDown[2] || keysDown[6]) {
                // Pan up
                config.pitch += (speed.pitch * 0.8 + 0.2) * diff;
                isKeyDown = true;
            }

            // If down arrow or "s" is down
            if (keysDown[3] || keysDown[7]) {
                // Pan down
                config.pitch += (speed.pitch * 0.8 - 0.2) * diff;
                isKeyDown = true;
            }

            // If left arrow or "a" is down
            if (keysDown[4] || keysDown[8]) {
                // Pan left
                config.yaw += (speed.yaw * 0.8 - 0.2) * diff;
                isKeyDown = true;
            }

            // If right arrow or "d" is down
            if (keysDown[5] || keysDown[9]) {
                // Pan right
                config.yaw += (speed.yaw * 0.8 + 0.2) * diff;
                isKeyDown = true;
            }

            if (isKeyDown)
                latestInteraction = Date.now();

            // If auto-rotate
            if (config.autoRotate) {
                // Pan
                if (newTime - prevTime > 0.001) {
                    var timeDiff = (newTime - prevTime) / 1000;
                    var yawDiff = (speed.yaw / timeDiff * diff - config.autoRotate * 0.2) * timeDiff;
                    yawDiff = (-config.autoRotate > 0 ? 1 : -1) * Math.min(Math.abs(config.autoRotate * timeDiff), Math.abs(yawDiff));
                    config.yaw += yawDiff;
                }

                // Deal with stopping auto rotation after a set delay
                if (config.autoRotateStopDelay) {
                    config.autoRotateStopDelay -= newTime - prevTime;
                    if (config.autoRotateStopDelay <= 0) {
                        config.autoRotateStopDelay = false;
                        autoRotateSpeed = config.autoRotate;
                        config.autoRotate = 0;
                    }
                }
            }

            // Animated moves
            if (animatedMove.pitch) {
                animateMove('pitch');
                prevPitch = config.pitch;
            }
            if (animatedMove.yaw) {
                animateMove('yaw');
                prevYaw = config.yaw;
            }
            if (animatedMove.hfov) {
                animateMove('hfov');
                prevZoom = config.hfov;
            }

            // "Inertia"
            if (diff > 0 && !config.autoRotate) {
                // "Friction"
                var slowDownFactor = 1 - config.friction;

                // Yaw
                if (!keysDown[4] && !keysDown[5] && !keysDown[8] && !keysDown[9] && !animatedMove.yaw) {
                    config.yaw += speed.yaw * diff * slowDownFactor;
                }
                // Pitch
                if (!keysDown[2] && !keysDown[3] && !keysDown[6] && !keysDown[7] && !animatedMove.pitch) {
                    config.pitch += speed.pitch * diff * slowDownFactor;
                }
                // Zoom
                if (!keysDown[0] && !keysDown[1] && !animatedMove.hfov) {
                    setHfov(config.hfov + speed.hfov * diff * slowDownFactor);
                }
            }

            prevTime = newTime;
            if (diff > 0) {
                speed.yaw = speed.yaw * 0.8 + (config.yaw - prevYaw) / diff * 0.2;
                speed.pitch = speed.pitch * 0.8 + (config.pitch - prevPitch) / diff * 0.2;
                speed.hfov = speed.hfov * 0.8 + (config.hfov - prevZoom) / diff * 0.2;

                // Limit speed
                var maxSpeed = config.autoRotate ? Math.abs(config.autoRotate) : 5;
                speed.yaw = Math.min(maxSpeed, Math.max(speed.yaw, -maxSpeed));
                speed.pitch = Math.min(maxSpeed, Math.max(speed.pitch, -maxSpeed));
                speed.hfov = Math.min(maxSpeed, Math.max(speed.hfov, -maxSpeed));
            }

            // Stop movement if opposite controls are pressed
            if (keysDown[0] && keysDown[1]) {
                speed.hfov = 0;
            }
            if ((keysDown[2] || keysDown[6]) && (keysDown[3] || keysDown[7])) {
                speed.pitch = 0;
            }
            if ((keysDown[4] || keysDown[8]) && (keysDown[5] || keysDown[9])) {
                speed.yaw = 0;
            }
        }

        /**
         * Animates moves.
         * @param {string} axis - Axis to animate
         * @private
         */
        function animateMove(axis) {
            var t = animatedMove[axis];
            var normTime = Math.min(1, Math.max((Date.now() - t.startTime) / 1000 / (t.duration / 1000), 0));
            var result = t.startPosition + config.animationTimingFunction(normTime) * (t.endPosition - t.startPosition);
            if ((t.endPosition > t.startPosition && result >= t.endPosition) ||
                (t.endPosition < t.startPosition && result <= t.endPosition) ||
                t.endPosition === t.startPosition) {
                result = t.endPosition;
                speed[axis] = 0;
                delete animatedMove[axis];
            }
            config[axis] = result;
        }

        /**
         * @param {number} t - Normalized time in animation
         * @return {number} Position in animation
         * @private
         */
        function timingFunction(t) {
            // easeInOutQuad from https://gist.github.com/gre/1650294
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        /**
         * Event handler for document resizes. Updates viewer size and rerenders view.
         * @private
         */
        function onDocumentResize() {
            // Resize panorama renderer (moved to onFullScreenChange)
            //renderer.resize();
            //animateInit();

            // Kludge to deal with WebKit regression: https://bugs.webkit.org/show_bug.cgi?id=93525
            onFullScreenChange('resize');
        }

        /**
         * Initializes animation.
         * @private
         */
        function animateInit() {
            if (animating) {
                return;
            }
            animating = true;
            animate();
        }

        /**
         * Animates view, using requestAnimationFrame to trigger rendering.
         * @private
         */
        function animate() {
            if (destroyed) {
                return;
            }

            render();
            if (autoRotateStart)
                clearTimeout(autoRotateStart);
            if (isUserInteracting || orientation === true) {
                requestAnimationFrame(animate);
            } else if (keysDown[0] || keysDown[1] || keysDown[2] || keysDown[3] ||
                keysDown[4] || keysDown[5] || keysDown[6] || keysDown[7] ||
                keysDown[8] || keysDown[9] || config.autoRotate ||
                animatedMove.pitch || animatedMove.yaw || animatedMove.hfov ||
                Math.abs(speed.yaw) > 0.01 || Math.abs(speed.pitch) > 0.01 ||
                Math.abs(speed.hfov) > 0.01) {

                keyRepeat();
                if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed &&
                    Date.now() - latestInteraction > config.autoRotateInactivityDelay &&
                    !config.autoRotate) {
                    config.autoRotate = autoRotateSpeed;
                    _this.lookAt(origPitch, undefined, origHfov, 3000);
                }
                requestAnimationFrame(animate);
            } else if (renderer && (renderer.isLoading() || (config.dynamic === true && update))) {
                requestAnimationFrame(animate);
            } else {
                fireEvent('animatefinished', { pitch: _this.getPitch(), yaw: _this.getYaw(), hfov: _this.getHfov() });
                animating = false;
                prevTime = undefined;
                var autoRotateStartTime = config.autoRotateInactivityDelay -
                    (Date.now() - latestInteraction);
                if (autoRotateStartTime > 0) {
                    autoRotateStart = setTimeout(function () {
                        config.autoRotate = autoRotateSpeed;
                        _this.lookAt(origPitch, undefined, origHfov, 3000);
                        animateInit();
                    }, autoRotateStartTime);
                } else if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed) {
                    config.autoRotate = autoRotateSpeed;
                    _this.lookAt(origPitch, undefined, origHfov, 3000);
                    animateInit();
                }
            }
        }

        /**
         * Renders panorama view.
         * @private
         */
        function render() {
            var tmpyaw;

            if (loaded) {
                var canvas = renderer.getCanvas();

                if (config.autoRotate !== false) {
                    // When auto-rotating this check needs to happen first (see issue #764)
                    if (config.yaw > 360) {
                        config.yaw -= 360;
                    } else if (config.yaw < -360) {
                        config.yaw += 360;
                    }
                }

                // Keep a tmp value of yaw for autoRotate comparison later
                tmpyaw = config.yaw;

                // Optionally avoid showing background (empty space) on left or right by adapting min/max yaw
                var hoffcut = 0,
                    voffcut = 0;
                if (config.avoidShowingBackground) {
                    var hfov2 = config.hfov / 2,
                        vfov2 = Math.atan2(Math.tan(hfov2 / 180 * Math.PI), (canvas.width / canvas.height)) * 180 / Math.PI,
                        transposed = config.vaov > config.haov;
                    if (transposed) {
                        voffcut = vfov2 * (1 - Math.min(Math.cos((config.pitch - hfov2) / 180 * Math.PI),
                            Math.cos((config.pitch + hfov2) / 180 * Math.PI)));
                    } else {
                        hoffcut = hfov2 * (1 - Math.min(Math.cos((config.pitch - vfov2) / 180 * Math.PI),
                            Math.cos((config.pitch + vfov2) / 180 * Math.PI)));
                    }
                }

                // Ensure the yaw is within min and max allowed
                var yawRange = config.maxYaw - config.minYaw,
                    minYaw = -180,
                    maxYaw = 180;
                if (yawRange < 360) {
                    minYaw = config.minYaw + config.hfov / 2 + hoffcut;
                    maxYaw = config.maxYaw - config.hfov / 2 - hoffcut;
                    if (yawRange < config.hfov) {
                        // Lock yaw to average of min and max yaw when both can be seen at once
                        minYaw = maxYaw = (minYaw + maxYaw) / 2;
                    }
                    config.yaw = Math.max(minYaw, Math.min(maxYaw, config.yaw));
                }

                if (!(config.autoRotate !== false)) {
                    // When not auto-rotating, this check needs to happen after the
                    // previous check (see issue #698)
                    if (config.yaw > 360) {
                        config.yaw -= 360;
                    } else if (config.yaw < -360) {
                        config.yaw += 360;
                    }
                }

                // Check if we autoRotate in a limited by min and max yaw
                // If so reverse direction
                if (config.autoRotate !== false && tmpyaw != config.yaw &&
                    prevTime !== undefined) { // this condition prevents changing the direction initially
                    config.autoRotate *= -1;
                }

                // Ensure the calculated pitch is within min and max allowed
                var vfov = 2 * Math.atan(Math.tan(config.hfov / 180 * Math.PI * 0.5) /
                    (canvas.width / canvas.height)) / Math.PI * 180;
                var minPitch = config.minPitch + vfov / 2,
                    maxPitch = config.maxPitch - vfov / 2;
                var pitchRange = config.maxPitch - config.minPitch;
                if (pitchRange < vfov) {
                    // Lock pitch to average of min and max pitch when both can be seen at once
                    minPitch = maxPitch = (minPitch + maxPitch) / 2;
                }
                if (isNaN(minPitch))
                    minPitch = -90;
                if (isNaN(maxPitch))
                    maxPitch = 90;
                config.pitch = Math.max(minPitch, Math.min(maxPitch, config.pitch));

                renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, { roll: config.roll * Math.PI / 180 });

                renderHotSpots();

                // Update compass
                //compass data fired by sakib
                // const node = document.getElementsByClassName('add-pulse')[0];
                // if(node) {
                //     node.style.transform = 'rotate(' + (-config.yaw - config.northOffset) + 'deg)';
                // }
                if (config.compass) {
                    compass.style.transform = 'rotate(' + (-config.yaw - config.northOffset) + 'deg)';
                    compass.style.webkitTransform = 'rotate(' + (-config.yaw - config.northOffset) + 'deg)';
                }
            }
        }

        /**
         * Creates a new quaternion.
         * @private
         * @constructor
         * @param {Number} w - W value
         * @param {Number} x - X value
         * @param {Number} y - Y value
         * @param {Number} z - Z value
         */
        function Quaternion(w, x, y, z) {
            this.w = w;
            this.x = x;
            this.y = y;
            this.z = z;
        }

        /**
         * Multiplies quaternions.
         * @private
         * @param {Quaternion} q - Quaternion to multiply
         * @returns {Quaternion} Result of multiplication
         */
        Quaternion.prototype.multiply = function (q) {
            return new Quaternion(this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z,
                this.x * q.w + this.w * q.x + this.y * q.z - this.z * q.y,
                this.y * q.w + this.w * q.y + this.z * q.x - this.x * q.z,
                this.z * q.w + this.w * q.z + this.x * q.y - this.y * q.x);
        };

        /**
         * Converts quaternion to Euler angles.
         * @private
         * @returns {Number[]} [phi angle, theta angle, psi angle]
         */
        Quaternion.prototype.toEulerAngles = function () {
            var phi = Math.atan2(2 * (this.w * this.x + this.y * this.z),
                1 - 2 * (this.x * this.x + this.y * this.y)),
                theta = Math.asin(2 * (this.w * this.y - this.z * this.x)),
                psi = Math.atan2(2 * (this.w * this.z + this.x * this.y),
                    1 - 2 * (this.y * this.y + this.z * this.z));
            return [phi, theta, psi];
        };

        /**
         * Converts device orientation API Tait-Bryan angles to a quaternion.
         * @private
         * @param {Number} alpha - Alpha angle (in degrees)
         * @param {Number} beta - Beta angle (in degrees)
         * @param {Number} gamma - Gamma angle (in degrees)
         * @returns {Quaternion} Orientation quaternion
         */
        function taitBryanToQuaternion(alpha, beta, gamma) {
            var r = [beta ? beta * Math.PI / 180 / 2 : 0,
            gamma ? gamma * Math.PI / 180 / 2 : 0,
            alpha ? alpha * Math.PI / 180 / 2 : 0];
            var c = [Math.cos(r[0]), Math.cos(r[1]), Math.cos(r[2])],
                s = [Math.sin(r[0]), Math.sin(r[1]), Math.sin(r[2])];

            return new Quaternion(c[0] * c[1] * c[2] - s[0] * s[1] * s[2],
                s[0] * c[1] * c[2] - c[0] * s[1] * s[2],
                c[0] * s[1] * c[2] + s[0] * c[1] * s[2],
                c[0] * c[1] * s[2] + s[0] * s[1] * c[2]);
        }

        /**
         * Computes current device orientation quaternion from device orientation API
         * Tait-Bryan angles.
         * @private
         * @param {Number} alpha - Alpha angle (in degrees)
         * @param {Number} beta - Beta angle (in degrees)
         * @param {Number} gamma - Gamma angle (in degrees)
         * @returns {Quaternion} Orientation quaternion
         */
        function computeQuaternion(alpha, beta, gamma) {
            // Convert Tait-Bryan angles to quaternion
            var quaternion = taitBryanToQuaternion(alpha, beta, gamma);
            // Apply world transform
            quaternion = quaternion.multiply(new Quaternion(Math.sqrt(0.5), -Math.sqrt(0.5), 0, 0));
            // Apply screen transform
            var angle = window.orientation ? -window.orientation * Math.PI / 180 / 2 : 0;
            return quaternion.multiply(new Quaternion(Math.cos(angle), 0, -Math.sin(angle), 0));
        }

        /**
         * Event handler for device orientation API. Controls pointing.
         * @private
         * @param {DeviceOrientationEvent} event - Device orientation event.
         */
        function orientationListener(e) {
            var q = computeQuaternion(e.alpha, e.beta, e.gamma).toEulerAngles();
            if (typeof (orientation) == 'number' && orientation < 10) {
                // This kludge is necessary because iOS sometimes provides a few stale
                // device orientation events when the listener is removed and then
                // readded. Thus, we skip the first 10 events to prevent this from
                // causing problems.
                orientation += 1;
            } else if (orientation === 10) {
                // Record starting yaw to prevent jumping
                orientationYawOffset = q[2] / Math.PI * 180 + config.yaw;
                orientation = true;
                requestAnimationFrame(animate);
            } else {
                config.pitch = q[0] / Math.PI * 180;
                config.roll = -q[1] / Math.PI * 180;
                config.yaw = -q[2] / Math.PI * 180 + orientationYawOffset;
            }
        }

        /**
         * Initializes renderer.
         * @private
         */
        function renderInit() {
            try {
                var params = {};
                if (config.horizonPitch !== undefined)
                    params.horizonPitch = config.horizonPitch * Math.PI / 180;
                if (config.horizonRoll !== undefined)
                    params.horizonRoll = config.horizonRoll * Math.PI / 180;
                if (config.backgroundColor !== undefined)
                    params.backgroundColor = config.backgroundColor;
                renderer.init(panoImage, config.type, config.dynamic, config.haov * Math.PI / 180, config.vaov * Math.PI / 180, config.vOffset * Math.PI / 180, renderInitCallback, params);
                if (config.dynamic !== true) {
                    // Allow image to be garbage collected
                    panoImage = undefined;
                }
            } catch (event) {
                // Panorama not loaded

                // Display error if there is a bad texture
                if (event.type == 'webgl error' || event.type == 'no webgl') {
                    anError();
                } else if (event.type == 'webgl size error') {
                    anError(config.strings.textureSizeError.replace('%s', event.width).replace('%s', event.maxWidth));
                } else {
                    anError(config.strings.unknownError);
                    throw event;
                }
            }
        }

        /**
         * Triggered when render initialization finishes. Handles fading between
         * scenes as well as showing the compass and hotspots and hiding the loading
         * display.
         * @private
         */
        function renderInitCallback() {
            // Fade if specified
            if (config.sceneFadeDuration && renderer.fadeImg !== undefined) {
                renderer.fadeImg.style.opacity = 0;
                // Remove image
                var fadeImg = renderer.fadeImg;
                delete renderer.fadeImg;
                setTimeout(function () {
                    renderContainer.removeChild(fadeImg);
                    fireEvent('scenechangefadedone');
                }, config.sceneFadeDuration);
            }

            // Show compass if applicable
            if (config.compass) {
                compass.style.display = 'inline';
            } else {
                compass.style.display = 'none';
            }

            // Show hotspots
            createHotSpots();

            // Hide loading display
            infoDisplay.load.box.style.display = 'none';
            if (preview !== undefined) {
                renderContainer.removeChild(preview);
                preview = undefined;
            }
            loaded = true;

            animateInit();

            fireEvent('load');
        }

        /**
         * Creates hot spot element for the current scene.
         * @private
         * @param {Object} hs - The configuration for the hotspot
         */
        function createHotSpot(hs) {
            // Make sure hot spot pitch and yaw are numbers
            hs.pitch = Number(hs.pitch) || 0;
            hs.yaw = Number(hs.yaw) || 0;

            var div = document.createElement('div');
            div.className = 'pnlm-hotspot-base';
            if (hs.cssClass)
                div.className += ' ' + hs.cssClass;
            else
                div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);

            //Sakib - customized hotspot dom for vr mode
            var title = document.createElement('span');
            title.className = 'vr-mode-title';
            if (hs.sceneId)
                title.innerHTML = escapeHTML(hs.sceneId);
            //Sakib - customized hotspot dom for vr mode end

            var span = document.createElement('span');
            if (hs.text)
                span.innerHTML = escapeHTML(hs.text);

            var a;
            if (hs.video) {
                var video = document.createElement('video'),
                    vidp = hs.video;
                if (config.basePath && !absoluteURL(vidp))
                    vidp = config.basePath + vidp;
                video.src = sanitizeURL(vidp);
                video.controls = true;
                video.style.width = hs.width + 'px';
                renderContainer.appendChild(div);
                span.appendChild(video);
            } else if (hs.image) {
                var imgp = hs.image;
                if (config.basePath && !absoluteURL(imgp))
                    imgp = config.basePath + imgp;
                a = document.createElement('a');
                a.href = sanitizeURL(hs.URL ? hs.URL : imgp, true);
                a.target = '_blank';
                span.appendChild(a);
                var image = document.createElement('img');
                image.src = sanitizeURL(imgp);
                image.style.width = hs.width + 'px';
                image.style.paddingTop = '5px';
                renderContainer.appendChild(div);
                a.appendChild(image);
                span.style.maxWidth = 'initial';
            } else if (hs.URL) {
                a = document.createElement('a');
                a.href = sanitizeURL(hs.URL, true);
                if (hs.attributes) {
                    for (var key in hs.attributes) {
                        a.setAttribute(key, hs.attributes[key]);
                    }
                } else {
                    //wpvr edit by sakib for in tab url open// -- handling from here
                    if (hs.wpvr_url_open == 'on') {
                        a.target = '_self';
                    }
                    else {
                        a.target = '_blank';
                    }
                }
                renderContainer.appendChild(a);
                div.className += ' pnlm-pointer';
                span.className += ' pnlm-pointer';
                a.appendChild(div);
            } else {
                if (hs.sceneId) {
                    div.onclick = div.ontouchend = function () {
                        if (!div.clicked) {
                            div.clicked = true;
                            loadScene(hs.sceneId, hs.targetPitch, hs.targetYaw, hs.targetHfov);
                        }
                        return false;
                    };
                    div.className += ' pnlm-pointer';
                    span.className += ' pnlm-pointer';
                }

                if (hs.sceneId)
                    div.appendChild(title);

                renderContainer.appendChild(div);
            }

            if (hs.createTooltipFunc) {
                hs.createTooltipFunc(div, hs.createTooltipArgs);
            } else if (hs.text || hs.video || hs.image) {
                div.classList.add('pnlm-tooltip');
                div.appendChild(span);
                span.style.width = span.scrollWidth - 20 + 'px';
                span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
                span.style.marginTop = -span.scrollHeight - 12 + 'px';
            }
            if (hs.clickHandlerFunc) {
                div.addEventListener('click', function (e) {
                    hs.clickHandlerFunc(e, hs.clickHandlerArgs);
                }, 'false');
                div.className += ' pnlm-pointer';
                span.className += ' pnlm-pointer';
            }
            hs.div = div;
        }

        /**
         * Creates hot spot elements for the current scene.
         * @private
         */
        function createHotSpots() {
            if (hotspotsCreated) return;

            if (!config.hotSpots) {
                config.hotSpots = [];
            } else {
                // Sort by pitch so tooltip is never obscured by another hot spot
                config.hotSpots = config.hotSpots.sort(function (a, b) {
                    return a.pitch < b.pitch;
                });
                config.hotSpots.forEach(createHotSpot);
            }
            hotspotsCreated = true;
            renderHotSpots();
        }

        /**
         * Destroys currently created hot spot elements.
         * @private
         */
        function destroyHotSpots() {
            var hs = config.hotSpots;
            hotspotsCreated = false;
            delete config.hotSpots;
            if (hs) {
                for (var i = 0; i < hs.length; i++) {
                    var current = hs[i].div;
                    if (current) {
                        while (current.parentNode && current.parentNode != renderContainer) {
                            current = current.parentNode;
                        }
                        renderContainer.removeChild(current);
                    }
                    delete hs[i].div;
                }
            }
        }

        /**
         * Renders hot spot, updating its position and visibility.
         * @private
         */
        function renderHotSpot(hs) {
            var hsPitchSin = Math.sin(hs.pitch * Math.PI / 180),
                hsPitchCos = Math.cos(hs.pitch * Math.PI / 180),
                configPitchSin = Math.sin(config.pitch * Math.PI / 180),
                configPitchCos = Math.cos(config.pitch * Math.PI / 180),
                yawCos = Math.cos((-hs.yaw + config.yaw) * Math.PI / 180);
            var z = hsPitchSin * configPitchSin + hsPitchCos * yawCos * configPitchCos;
            if ((hs.yaw <= 90 && hs.yaw > -90 && z <= 0) ||
                ((hs.yaw > 90 || hs.yaw <= -90) && z <= 0)) {
                hs.div.style.visibility = 'hidden';
            } else {
                var yawSin = Math.sin((-hs.yaw + config.yaw) * Math.PI / 180),
                    hfovTan = Math.tan(config.hfov * Math.PI / 360);
                hs.div.style.visibility = 'visible';
                // Subpixel rendering doesn't work in Firefox
                // https://bugzilla.mozilla.org/show_bug.cgi?id=739176
                var canvas = renderer.getCanvas(),
                    canvasWidth = canvas.clientWidth,
                    canvasHeight = canvas.clientHeight;
                var coord = [-canvasWidth / hfovTan * yawSin * hsPitchCos / z / 2,
                -canvasWidth / hfovTan * (hsPitchSin * configPitchCos -
                    hsPitchCos * yawCos * configPitchSin) / z / 2];
                // Apply roll
                var rollSin = Math.sin(config.roll * Math.PI / 180),
                    rollCos = Math.cos(config.roll * Math.PI / 180);
                coord = [coord[0] * rollCos - coord[1] * rollSin,
                coord[0] * rollSin + coord[1] * rollCos];
                // Apply transform
                coord[0] += (canvasWidth - hs.div.offsetWidth) / 2;
                coord[1] += (canvasHeight - hs.div.offsetHeight) / 2;
                var transform = 'translate(' + coord[0] + 'px, ' + coord[1] +
                    'px) translateZ(9999px) rotate(' + config.roll + 'deg)';
                if (hs.scale) {
                    transform += ' scale(' + (origHfov / config.hfov) / z + ')';
                }
                hs.div.style.webkitTransform = transform;
                hs.div.style.MozTransform = transform;
                hs.div.style.transform = transform;
            }
        }

        /**
         * Renders hot spots, updating their positions and visibility.
         * @private
         */
        function renderHotSpots() {
            config.hotSpots.forEach(renderHotSpot);
        }

        /**
         * Merges a scene configuration into the current configuration.
         * @private
         * @param {string} sceneId - Identifier of scene configuration to merge in.
         */
        function mergeConfig(sceneId) {
            config = {};
            var k, s;
            var photoSphereExcludes = ['haov', 'vaov', 'vOffset', 'northOffset', 'horizonPitch', 'horizonRoll'];
            specifiedPhotoSphereExcludes = [];

            // Merge default config
            for (k in defaultConfig) {
                if (defaultConfig.hasOwnProperty(k)) {
                    config[k] = defaultConfig[k];
                }
            }

            // Merge default scene config
            for (k in initialConfig.default) {
                if (initialConfig.default.hasOwnProperty(k)) {
                    if (k == 'strings') {
                        for (s in initialConfig.default.strings) {
                            if (initialConfig.default.strings.hasOwnProperty(s)) {
                                config.strings[s] = escapeHTML(initialConfig.default.strings[s]);
                            }
                        }
                    } else {
                        config[k] = initialConfig.default[k];
                        if (photoSphereExcludes.indexOf(k) >= 0) {
                            specifiedPhotoSphereExcludes.push(k);
                        }
                    }
                }
            }

            // Merge current scene config
            if ((sceneId !== null) && (sceneId !== '') && (initialConfig.scenes) && (initialConfig.scenes[sceneId])) {
                var scene = initialConfig.scenes[sceneId];
                for (k in scene) {
                    if (scene.hasOwnProperty(k)) {
                        if (k == 'strings') {
                            for (s in scene.strings) {
                                if (scene.strings.hasOwnProperty(s)) {
                                    config.strings[s] = escapeHTML(scene.strings[s]);
                                }
                            }
                        } else {
                            config[k] = scene[k];
                            if (photoSphereExcludes.indexOf(k) >= 0) {
                                specifiedPhotoSphereExcludes.push(k);
                            }
                        }
                    }
                }
                config.scene = sceneId;
            }

            // Merge initial config
            for (k in initialConfig) {
                if (initialConfig.hasOwnProperty(k)) {
                    if (k == 'strings') {
                        for (s in initialConfig.strings) {
                            if (initialConfig.strings.hasOwnProperty(s)) {
                                config.strings[s] = escapeHTML(initialConfig.strings[s]);
                            }
                        }
                    } else {
                        config[k] = initialConfig[k];
                        if (photoSphereExcludes.indexOf(k) >= 0) {
                            specifiedPhotoSphereExcludes.push(k);
                        }
                    }
                }
            }
        }

        /**
         * Processes configuration options.
         * @param {boolean} [isPreview] - Whether or not the preview is being displayed
         * @private
         */
        function processOptions(isPreview) {
            isPreview = isPreview ? isPreview : false;

            // Process preview first so it always loads before the browser hits its
            // maximum number of connections to a server as can happen with cubic
            // panoramas
            if (isPreview && 'preview' in config) {
                var p = config.preview;
                if (config.basePath && !absoluteURL(p))
                    p = config.basePath + p;
                preview = document.createElement('div');
                preview.className = 'pnlm-preview-img';
                preview.style.backgroundImage = "url('" + sanitizeURLForCss(p) + "')";
                renderContainer.appendChild(preview);
            }

            // Handle different preview values
            var title = config.title,
                author = config.author;
            if (isPreview) {
                if ('previewTitle' in config)
                    config.title = config.previewTitle;
                if ('previewAuthor' in config)
                    config.author = config.previewAuthor;
            }

            // Reset title / author display
            if (!config.hasOwnProperty('title'))
                infoDisplay.title.innerHTML = '';
            if (!config.hasOwnProperty('author'))
                infoDisplay.author.innerHTML = '';
            if (!config.hasOwnProperty('title') && !config.hasOwnProperty('author'))
                infoDisplay.container.style.display = 'none';

            // Fill in load button label and loading box text
            controls.load.innerHTML = '<p>' + config.strings.loadButtonLabel + '</p>';
            infoDisplay.load.boxp.innerHTML = config.strings.loadingLabel;

            // Process other options
            for (var key in config) {
                if (config.hasOwnProperty(key)) {
                    switch (key) {
                        case 'title':
                            infoDisplay.title.innerHTML = escapeHTML(config[key]);
                            infoDisplay.container.style.display = 'inline';
                            break;

                        case 'author':
                            var authorText = escapeHTML(config[key]);
                            if (config.authorURL) {
                                var authorLink = document.createElement('a');
                                authorLink.href = sanitizeURL(config['authorURL'], true);
                                authorLink.target = '_blank';
                                authorLink.innerHTML = escapeHTML(config[key]);
                                authorText = authorLink.outerHTML;
                            }
                            infoDisplay.author.innerHTML = config.strings.bylineLabel.replace('%s', authorText);
                            infoDisplay.container.style.display = 'inline';
                            break;

                        case 'fallback':
                            var link = document.createElement('a');
                            link.href = sanitizeURL(config[key], true);
                            link.target = '_blank';
                            link.textContent = 'Click here to view this panorama in an alternative viewer.';
                            var message = document.createElement('p');
                            message.textContent = 'Your browser does not support WebGL.';
                            message.appendChild(document.createElement('br'));
                            message.appendChild(link);
                            infoDisplay.errorMsg.innerHTML = ''; // Removes all children nodes
                            infoDisplay.errorMsg.appendChild(message);
                            break;

                        case 'hfov':
                            setHfov(Number(config[key]));
                            break;

                        case 'autoLoad':
                            if (config[key] === true && renderer === undefined) {
                                // Show loading box
                                infoDisplay.load.box.style.display = 'inline';
                                // Hide load button
                                controls.load.style.display = 'none';
                                // Initialize
                                init();
                            }
                            break;

                        case 'showZoomCtrl':
                            if (config[key] && config.showControls != false) {
                                // Show zoom controls
                                controls.zoom.style.display = 'block';
                            } else {
                                // Hide zoom controls
                                controls.zoom.style.display = 'none';
                            }
                            break;

                        case 'showFullscreenCtrl':
                            if (config[key] && config.showControls != false && ('fullscreen' in document || 'mozFullScreen' in document ||
                                'webkitIsFullScreen' in document || 'msFullscreenElement' in document)) {

                                // Show fullscreen control
                                controls.fullscreen.style.display = 'block';
                            } else {
                                // Hide fullscreen control
                                controls.fullscreen.style.display = 'none';
                            }
                            break;

                        case 'hotSpotDebug':
                            if (config[key])
                                hotSpotDebugIndicator.style.display = 'block';
                            else
                                hotSpotDebugIndicator.style.display = 'none';
                            break;

                        case 'showControls':
                            if (!config[key]) {
                                controls.orientation.style.display = 'none';
                                controls.zoom.style.display = 'none';
                                controls.fullscreen.style.display = 'none';
                            }
                            break;

                        case 'orientationOnByDefault':
                            if (config[key])
                                startOrientation();
                            break;
                    }
                }
            }

            if (isPreview) {
                // Restore original values if changed for preview
                if (title)
                    config.title = title;
                else
                    delete config.title;
                if (author)
                    config.author = author;
                else
                    delete config.author;
            }
        }

        /**
         * Toggles fullscreen mode.
         * @private
         */
        function toggleFullscreen() {
            if (loaded && !error) {
                if (!fullscreenActive) {
                    try {
                        if (container.requestFullscreen) {
                            container.requestFullscreen();
                        } else if (container.mozRequestFullScreen) {
                            container.mozRequestFullScreen();
                        } else if (container.msRequestFullscreen) {
                            container.msRequestFullscreen();
                        } else {
                            container.webkitRequestFullScreen();
                        }
                    } catch (event) {
                        // Fullscreen doesn't work
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            }
        }

        /**
         * Event handler for fullscreen changes.
         * @private
         */
        function onFullScreenChange(resize) {
            if (document.fullscreenElement || document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement) {
                controls.fullscreen.classList.add('pnlm-fullscreen-toggle-button-active');
                fullscreenActive = true;
            } else {
                controls.fullscreen.classList.remove('pnlm-fullscreen-toggle-button-active');
                fullscreenActive = false;
            }
            if (resize !== 'resize')
                fireEvent('fullscreenchange', fullscreenActive);
            // Resize renderer (deal with browser quirks and fixes #155)
            renderer.resize();
            setHfov(config.hfov);
            animateInit();
        }

        /**
         * Increases panorama zoom. For use with zoom button.
         * @private
         */
        function zoomIn() {
            if (loaded) {
                setHfov(config.hfov - 5);
                animateInit();
            }
        }

        /**
         * Decreases panorama zoom. For use with zoom button.
         * @private
         */
        function zoomOut() {
            if (loaded) {
                setHfov(config.hfov + 5);
                animateInit();
            }
        }

        /**
         * Clamps horzontal field of view to viewer's limits.
         * @private
         * @param {number} hfov - Input horizontal field of view (in degrees)
         * @return {number} - Clamped horizontal field of view (in degrees)
         */
        function constrainHfov(hfov) {
            // Keep field of view within bounds
            var minHfov = config.minHfov;
            if (config.type == 'multires' && renderer && !config.multiResMinHfov) {
                minHfov = Math.min(minHfov, renderer.getCanvas().width / (config.multiRes.cubeResolution / 90 * 0.9));
            }
            if (minHfov > config.maxHfov) {
                // Don't change view if bounds don't make sense
                console.log('HFOV bounds do not make sense (minHfov > maxHfov).');
                return config.hfov;
            }
            var newHfov = config.hfov;
            if (hfov < minHfov) {
                newHfov = minHfov;
            } else if (hfov > config.maxHfov) {
                newHfov = config.maxHfov;
            } else {
                newHfov = hfov;
            }
            // Optionally avoid showing background (empty space) on top or bottom by adapting newHfov
            if (config.avoidShowingBackground && renderer) {
                var canvas = renderer.getCanvas();
                newHfov = Math.min(newHfov,
                    Math.atan(Math.tan((config.maxPitch - config.minPitch) / 360 * Math.PI) /
                        canvas.height * canvas.width) * 360 / Math.PI);
            }
            return newHfov;
        }

        /**
         * Sets viewer's horizontal field of view.
         * @private
         * @param {number} hfov - Desired horizontal field of view in degrees.
         */
        function setHfov(hfov) {
            config.hfov = constrainHfov(hfov);
            fireEvent('zoomchange', config.hfov);
        }

        /**
         * Stops auto rotation and animated moves.
         * @private
         */
        function stopAnimation() {
            animatedMove = {};
            autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
            config.autoRotate = false;
        }

        /**
         * Loads panorama.
         * @private
         */
        function load() {
            // Since WebGL error handling is very general, first we clear any error box
            // since it is a new scene and the error from previous maybe because of lacking
            // memory etc and not because of a lack of WebGL support etc
            clearError();
            loaded = false;

            controls.load.style.display = 'none';
            infoDisplay.load.box.style.display = 'inline';
            init();
        }

        /**
         * Loads scene.
         * @private
         * @param {string} sceneId - Identifier of scene configuration to merge in.
         * @param {number} targetPitch - Pitch viewer should be centered on once scene loads.
         * @param {number} targetYaw - Yaw viewer should be centered on once scene loads.
         * @param {number} targetHfov - HFOV viewer should use once scene loads.
         * @param {boolean} [fadeDone] - If `true`, fade setup is skipped.
         */
        function loadScene(sceneId, targetPitch, targetYaw, targetHfov, fadeDone) {
            if (!loaded)
                fadeDone = true;    // Don't try to fade when there isn't a scene loaded
            loaded = false;
            animatedMove = {};

            // Set up fade if specified
            var fadeImg, workingPitch, workingYaw, workingHfov;
            if (config.sceneFadeDuration && !fadeDone) {
                var data = renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, { returnImage: true });
                if (data !== undefined) {
                    fadeImg = new Image();
                    fadeImg.className = 'pnlm-fade-img';
                    fadeImg.style.transition = 'opacity ' + (config.sceneFadeDuration / 1000) + 's';
                    fadeImg.style.width = '100%';
                    fadeImg.style.height = '100%';
                    fadeImg.onload = function () {
                        loadScene(sceneId, targetPitch, targetYaw, targetHfov, true);
                    };
                    fadeImg.src = data;
                    renderContainer.appendChild(fadeImg);
                    renderer.fadeImg = fadeImg;
                    return;
                }
            }

            // Set new pointing
            if (targetPitch === 'same') {
                workingPitch = config.pitch;
            } else {
                workingPitch = targetPitch;
            }
            if (targetYaw === 'same') {
                workingYaw = config.yaw;
            } else if (targetYaw === 'sameAzimuth') {
                workingYaw = config.yaw + (config.northOffset || 0) - (initialConfig.scenes[sceneId].northOffset || 0);
            } else {
                workingYaw = targetYaw;
            }
            if (targetHfov === 'same') {
                workingHfov = config.hfov;
            } else {
                workingHfov = targetHfov;
            }

            // Destroy hot spots from previous scene
            destroyHotSpots();

            // Create the new config for the scene
            mergeConfig(sceneId);

            // Stop motion
            speed.yaw = speed.pitch = speed.hfov = 0;

            // Reload scene
            processOptions();
            if (workingPitch !== undefined) {
                config.pitch = workingPitch;
            }
            if (workingYaw !== undefined) {
                config.yaw = workingYaw;
            }
            if (workingHfov !== undefined) {
                config.hfov = workingHfov;
            }
            fireEvent('scenechange', sceneId);
            load();
        }

        /**
         * Stop using device orientation.
         * @private
         */
        function stopOrientation() {
            window.removeEventListener('deviceorientation', orientationListener);
            controls.orientation.classList.remove('pnlm-orientation-button-active');
            orientation = false;
        }

        /**
         * Start using device orientation.
         * @private
         */
        function startOrientation() {
            if (!orientationSupport)
                return;
            if (typeof DeviceMotionEvent !== 'undefined' &&
                typeof DeviceMotionEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission().then(function (response) {
                    if (response == 'granted') {
                        orientation = 1;
                        window.addEventListener('deviceorientation', orientationListener);
                        controls.orientation.classList.add('pnlm-orientation-button-active');
                    }
                });
            } else {
                orientation = 1;
                window.addEventListener('deviceorientation', orientationListener);
                controls.orientation.classList.add('pnlm-orientation-button-active');
            }
        }

        /**
         * Escapes HTML string (to mitigate possible DOM XSS attacks).
         * @private
         * @param {string} s - String to escape
         * @returns {string} Escaped string
         */
        function escapeHTML(s) {
            if (!initialConfig.escapeHTML)
                return String(s).split('\n').join('<br>');
            return String(s).split(/&/g).join('&amp;')
                .split('"').join('&quot;')
                .split("'").join('&#39;')
                .split('<').join('&lt;')
                .split('>').join('&gt;')
                .split('/').join('&#x2f;')
                .split('\n').join('<br>');  // Allow line breaks
        }

        /**
         * Removes possibility of XSS attacks with URLs.
         * The URL cannot be of protocol 'javascript'.
         * @private
         * @param {string} url - URL to sanitize
         * @param {boolean} href - True if URL is for link (blocks data URIs)
         * @returns {string} Sanitized URL
         */
        function sanitizeURL(url, href) {
            try {
                var decoded_url = decodeURIComponent(unescape(url)).replace(/[^\w:]/g, '').toLowerCase();
            } catch (e) {
                return 'about:blank';
            }
            if (decoded_url.indexOf('javascript:') === 0 ||
                decoded_url.indexOf('vbscript:') === 0) {
                console.log('Script URL removed.');
                return 'about:blank';
            }
            if (href && decoded_url.indexOf('data:') === 0) {
                console.log('Data URI removed from link.');
                return 'about:blank';
            }
            return url;
        }

        /**
         * Unescapes HTML entities.
         * Copied from Marked.js 0.7.0.
         * @private
         * @param {string} url - URL to sanitize
         * @param {boolean} href - True if URL is for link (blocks data URIs)
         * @returns {string} Sanitized URL
         */
        function unescape(html) {
            // Explicitly match decimal, hex, and named HTML entities
            return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
                n = n.toLowerCase();
                if (n === 'colon') return ':';
                if (n.charAt(0) === '#') {
                    return n.charAt(1) === 'x'
                        ? String.fromCharCode(parseInt(n.substring(2), 16))
                        : String.fromCharCode(+n.substring(1));
                }
                return '';
            });
        }

        /**
         * Removes possibility of XSS atacks with URLs for CSS.
         * The URL will be sanitized with `sanitizeURL()` and single quotes
         * and double quotes escaped.
         * @private
         * @param {string} url - URL to sanitize
         * @returns {string} Sanitized URL
         */
        function sanitizeURLForCss(url) {
            return sanitizeURL(url)
                .replace(/"/g, '%22')
                .replace(/'/g, '%27');
        }

        /**
         * Checks whether or not a panorama is loaded.
         * @memberof Viewer
         * @instance
         * @returns {boolean} `true` if a panorama is loaded, else `false`
         */
        this.isLoaded = function () {
            return Boolean(loaded);
        };

        /**
         * Returns the pitch of the center of the view.
         * @memberof Viewer
         * @instance
         * @returns {number} Pitch in degrees
         */
        this.getPitch = function () {
            return config.pitch;
        };

        /**
         * Sets the pitch of the center of the view.
         * @memberof Viewer
         * @instance
         * @param {number} pitch - Pitch in degrees
         * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
         * @param {function} [callback] - Function to call when animation finishes
         * @param {object} [callbackArgs] - Arguments to pass to callback function
         * @returns {Viewer} `this`
         */
        this.setPitch = function (pitch, animated, callback, callbackArgs) {
            latestInteraction = Date.now();
            if (Math.abs(pitch - config.pitch) <= eps) {
                if (typeof callback == 'function')
                    callback(callbackArgs);
                return this;
            }
            animated = animated == undefined ? 1000 : Number(animated);
            if (animated) {
                animatedMove.pitch = {
                    'startTime': Date.now(),
                    'startPosition': config.pitch,
                    'endPosition': pitch,
                    'duration': animated
                };
                if (typeof callback == 'function')
                    setTimeout(function () { callback(callbackArgs); }, animated);
            } else {
                config.pitch = pitch;
            }
            animateInit();
            return this;
        };

        /**
         * Returns the minimum and maximum allowed pitches (in degrees).
         * @memberof Viewer
         * @instance
         * @returns {number[]} [minimum pitch, maximum pitch]
         */
        this.getPitchBounds = function () {
            return [config.minPitch, config.maxPitch];
        };

        /**
         * Set the minimum and maximum allowed pitches (in degrees).
         * @memberof Viewer
         * @instance
         * @param {number[]} bounds - [minimum pitch, maximum pitch]
         * @returns {Viewer} `this`
         */
        this.setPitchBounds = function (bounds) {
            config.minPitch = Math.max(-90, Math.min(bounds[0], 90));
            config.maxPitch = Math.max(-90, Math.min(bounds[1], 90));
            return this;
        };

        /**
         * Returns the yaw of the center of the view.
         * @memberof Viewer
         * @instance
         * @returns {number} Yaw in degrees
         */
        this.getYaw = function () {
            return (config.yaw + 540) % 360 - 180;
        };

        /**
         * Sets the yaw of the center of the view.
         * @memberof Viewer
         * @instance
         * @param {number} yaw - Yaw in degrees [-180, 180]
         * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
         * @param {function} [callback] - Function to call when animation finishes
         * @param {object} [callbackArgs] - Arguments to pass to callback function
         * @returns {Viewer} `this`
         */
        this.setYaw = function (yaw, animated, callback, callbackArgs) {
            latestInteraction = Date.now();
            if (Math.abs(yaw - config.yaw) <= eps) {
                if (typeof callback == 'function')
                    callback(callbackArgs);
                return this;
            }
            animated = animated == undefined ? 1000 : Number(animated);
            yaw = ((yaw + 180) % 360) - 180; // Keep in bounds
            if (animated) {
                // Animate in shortest direction
                if (config.yaw - yaw > 180)
                    yaw += 360;
                else if (yaw - config.yaw > 180)
                    yaw -= 360;

                animatedMove.yaw = {
                    'startTime': Date.now(),
                    'startPosition': config.yaw,
                    'endPosition': yaw,
                    'duration': animated
                };
                if (typeof callback == 'function')
                    setTimeout(function () { callback(callbackArgs); }, animated);
            } else {
                config.yaw = yaw;
            }
            animateInit();
            return this;
        };

        /**
         * Returns the minimum and maximum allowed pitches (in degrees).
         * @memberof Viewer
         * @instance
         * @returns {number[]} [yaw pitch, maximum yaw]
         */
        this.getYawBounds = function () {
            return [config.minYaw, config.maxYaw];
        };

        /**
         * Set the minimum and maximum allowed yaws (in degrees [-360, 360]).
         * @memberof Viewer
         * @instance
         * @param {number[]} bounds - [minimum yaw, maximum yaw]
         * @returns {Viewer} `this`
         */
        this.setYawBounds = function (bounds) {
            config.minYaw = Math.max(-360, Math.min(bounds[0], 360));
            config.maxYaw = Math.max(-360, Math.min(bounds[1], 360));
            return this;
        };

        /**
         * Returns the horizontal field of view.
         * @memberof Viewer
         * @instance
         * @returns {number} Horizontal field of view in degrees
         */
        this.getHfov = function () {
            return config.hfov;
        };

        /**
         * Sets the horizontal field of view.
         * @memberof Viewer
         * @instance
         * @param {number} hfov - Horizontal field of view in degrees
         * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
         * @param {function} [callback] - Function to call when animation finishes
         * @param {object} [callbackArgs] - Arguments to pass to callback function
         * @returns {Viewer} `this`
         */
        this.setHfov = function (hfov, animated, callback, callbackArgs) {
            latestInteraction = Date.now();
            if (Math.abs(hfov - config.hfov) <= eps) {
                if (typeof callback == 'function')
                    callback(callbackArgs);
                return this;
            }
            animated = animated == undefined ? 1000 : Number(animated);
            if (animated) {
                animatedMove.hfov = {
                    'startTime': Date.now(),
                    'startPosition': config.hfov,
                    'endPosition': constrainHfov(hfov),
                    'duration': animated
                };
                if (typeof callback == 'function')
                    setTimeout(function () { callback(callbackArgs); }, animated);
            } else {
                setHfov(hfov);
            }
            animateInit();
            return this;
        };

        /**
         * Returns the minimum and maximum allowed horizontal fields of view
         * (in degrees).
         * @memberof Viewer
         * @instance
         * @returns {number[]} [minimum hfov, maximum hfov]
         */
        this.getHfovBounds = function () {
            return [config.minHfov, config.maxHfov];
        };

        /**
         * Set the minimum and maximum allowed horizontal fields of view (in degrees).
         * @memberof Viewer
         * @instance
         * @param {number[]} bounds - [minimum hfov, maximum hfov]
         * @returns {Viewer} `this`
         */
        this.setHfovBounds = function (bounds) {
            config.minHfov = Math.max(0, bounds[0]);
            config.maxHfov = Math.max(0, bounds[1]);
            return this;
        };

        /**
         * Set a new view. Any parameters not specified remain the same.
         * @memberof Viewer
         * @instance
         * @param {number} [pitch] - Target pitch
         * @param {number} [yaw] - Target yaw
         * @param {number} [hfov] - Target hfov
         * @param {boolean|number} [animated=1000] - Animation duration in milliseconds or false for no animation
         * @param {function} [callback] - Function to call when animation finishes
         * @param {object} [callbackArgs] - Arguments to pass to callback function
         * @returns {Viewer} `this`
         */
        this.lookAt = function (pitch, yaw, hfov, animated, callback, callbackArgs) {
            animated = animated == undefined ? 1000 : Number(animated);
            if (pitch !== undefined && Math.abs(pitch - config.pitch) > eps) {
                this.setPitch(pitch, animated, callback, callbackArgs);
                callback = undefined;
            }
            if (yaw !== undefined && Math.abs(yaw - config.yaw) > eps) {
                this.setYaw(yaw, animated, callback, callbackArgs);
                callback = undefined;
            }
            if (hfov !== undefined && Math.abs(hfov - config.hfov) > eps) {
                this.setHfov(hfov, animated, callback, callbackArgs);
                callback = undefined;
            }
            if (typeof callback == 'function')
                callback(callbackArgs);
            return this;
        };

        /**
         * Returns the panorama's north offset.
         * @memberof Viewer
         * @instance
         * @returns {number} North offset in degrees
         */
        this.getNorthOffset = function () {
            return config.northOffset;
        };

        /**
         * Sets the panorama's north offset.
         * @memberof Viewer
         * @instance
         * @param {number} heading - North offset in degrees
         * @returns {Viewer} `this`
         */
        this.setNorthOffset = function (heading) {
            config.northOffset = Math.min(360, Math.max(0, heading));
            animateInit();
            return this;
        };

        /**
         * Returns the panorama's horizon roll.
         * @memberof Viewer
         * @instance
         * @returns {number} Horizon roll in degrees
         */
        this.getHorizonRoll = function () {
            return config.horizonRoll;
        };

        /**
         * Sets the panorama's horizon roll.
         * @memberof Viewer
         * @instance
         * @param {number} roll - Horizon roll in degrees [-90, 90]
         * @returns {Viewer} `this`
         */
        this.setHorizonRoll = function (roll) {
            config.horizonRoll = Math.min(90, Math.max(-90, roll));
            renderer.setPose(config.horizonPitch * Math.PI / 180, config.horizonRoll * Math.PI / 180);
            animateInit();
            return this;
        };

        /**
         * Returns the panorama's horizon pitch.
         * @memberof Viewer
         * @instance
         * @returns {number} Horizon pitch in degrees
         */
        this.getHorizonPitch = function () {
            return config.horizonPitch;
        };

        /**
         * Sets the panorama's horizon pitch.
         * @memberof Viewer
         * @instance
         * @param {number} pitch - Horizon pitch in degrees [-90, 90]
         * @returns {Viewer} `this`
         */
        this.setHorizonPitch = function (pitch) {
            config.horizonPitch = Math.min(90, Math.max(-90, pitch));
            renderer.setPose(config.horizonPitch * Math.PI / 180, config.horizonRoll * Math.PI / 180);
            animateInit();
            return this;
        };

        /**
         * Start auto rotation.
         *
         * Before starting rotation, the viewer is panned to `pitch`.
         * @memberof Viewer
         * @instance
         * @param {number} [speed] - Auto rotation speed / direction. If not specified, previous value is used.
         * @param {number} [pitch] - The pitch to rotate at. If not specified, inital pitch is used.
         * @returns {Viewer} `this`
         */
        this.startAutoRotate = function (speed, pitch) {
            speed = speed || autoRotateSpeed || 1;
            pitch = pitch === undefined ? origPitch : pitch;
            config.autoRotate = speed;
            _this.lookAt(pitch, undefined, origHfov, 3000);
            animateInit();
            return this;
        };

        /**
         * Stop auto rotation.
         * @memberof Viewer
         * @instance
         * @returns {Viewer} `this`
         */
        this.stopAutoRotate = function () {
            autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
            config.autoRotate = false;
            config.autoRotateInactivityDelay = -1;
            return this;
        };

        /**
         * Stops all movement.
         * @memberof Viewer
         * @instance
         */
        this.stopMovement = function () {
            stopAnimation();
            speed = { 'yaw': 0, 'pitch': 0, 'hfov': 0 };
        };

        /**
         * Returns the panorama renderer.
         * @memberof Viewer
         * @instance
         * @returns {Renderer}
         */
        this.getRenderer = function () {
            return renderer;
        };

        /**
         * Sets update flag for dynamic content.
         * @memberof Viewer
         * @instance
         * @param {boolean} bool - Whether or not viewer should update even when still
         * @returns {Viewer} `this`
         */
        this.setUpdate = function (bool) {
            update = bool === true;
            if (renderer === undefined)
                onImageLoad();
            else
                animateInit();
            return this;
        };

        /**
         * Calculate panorama pitch and yaw from location of mouse event.
         * @memberof Viewer
         * @instance
         * @param {MouseEvent} event - Document mouse down event.
         * @returns {number[]} [pitch, yaw]
         */
        this.mouseEventToCoords = function (event) {
            return mouseEventToCoords(event);
        };

        /**
         * Change scene being viewed.
         * @memberof Viewer
         * @instance
         * @param {string} sceneId - Identifier of scene to switch to.
         * @param {number} [pitch] - Pitch to use with new scene
         * @param {number} [yaw] - Yaw to use with new scene
         * @param {number} [hfov] - HFOV to use with new scene
         * @returns {Viewer} `this`
         */
        this.loadScene = function (sceneId, pitch, yaw, hfov) {
            if (loaded !== false)
                loadScene(sceneId, pitch, yaw, hfov);
            return this;
        };

        /**
         * Get ID of current scene.
         * @memberof Viewer
         * @instance
         * @returns {string} ID of current scene
         */
        this.getScene = function () {
            return config.scene;
        };

        /**
         * Add a new scene.
         * @memberof Viewer
         * @instance
         * @param {string} sceneId - The ID of the new scene
         * @param {string} config - The configuration of the new scene
         * @returns {Viewer} `this`
         */
        this.addScene = function (sceneId, config) {
            initialConfig.scenes[sceneId] = config;
            return this;
        };

        /**
         * Remove a scene.
         * @memberof Viewer
         * @instance
         * @param {string} sceneId - The ID of the scene
         * @returns {boolean} False if the scene is the current scene or if the scene doesn't exists, else true
         */
        this.removeScene = function (sceneId) {
            if (config.scene === sceneId || !initialConfig.scenes.hasOwnProperty(sceneId))
                return false;
            delete initialConfig.scenes[sceneId];
            return true;
        };

        /**
         * Toggle fullscreen.
         * @memberof Viewer
         * @instance
         * @returns {Viewer} `this`
         */
        this.toggleFullscreen = function () {
            toggleFullscreen();
            return this;
        };

        /**
         * Get configuration of current scene.
         * @memberof Viewer
         * @instance
         * @returns {Object} Configuration of current scene
         */
        this.getConfig = function () {
            return config;
        };

        /**
         * Get viewer's container element.
         * @memberof Viewer
         * @instance
         * @returns {HTMLElement} Container `div` element
         */
        this.getContainer = function () {
            return container;
        };

        /**
         * Add a new hot spot.
         * @memberof Viewer
         * @instance
         * @param {Object} hs - The configuration for the hot spot
         * @param {string} [sceneId] - Adds hot spot to specified scene if provided, else to current scene
         * @returns {Viewer} `this`
         * @throws Throws an error if the scene ID is provided but invalid
         */
        this.addHotSpot = function (hs, sceneId) {
            if (sceneId === undefined && config.scene === undefined) {
                // Not a tour
                config.hotSpots.push(hs);
            } else {
                // Tour
                var id = sceneId !== undefined ? sceneId : config.scene;
                if (initialConfig.scenes.hasOwnProperty(id)) {
                    if (!initialConfig.scenes[id].hasOwnProperty('hotSpots')) {
                        initialConfig.scenes[id].hotSpots = []; // Create hot spots array if needed
                        if (id == config.scene)
                            config.hotSpots = initialConfig.scenes[id].hotSpots;    // Link to current config
                    }
                    initialConfig.scenes[id].hotSpots.push(hs); // Add hot spot to config
                } else {
                    throw 'Invalid scene ID!';
                }
            }
            if (sceneId === undefined || config.scene == sceneId) {
                // Add to current scene
                createHotSpot(hs);
                if (loaded)
                    renderHotSpot(hs);
            }
            return this;
        };

        /**
         * Remove a hot spot.
         * @memberof Viewer
         * @instance
         * @param {string} hotSpotId - The ID of the hot spot
         * @param {string} [sceneId] - Removes hot spot from specified scene if provided, else from current scene
         * @returns {boolean} True if deletion is successful, else false
         */
        this.removeHotSpot = function (hotSpotId, sceneId) {
            if (sceneId === undefined || config.scene == sceneId) {
                if (!config.hotSpots)
                    return false;
                for (var i = 0; i < config.hotSpots.length; i++) {
                    if (config.hotSpots[i].hasOwnProperty('id') &&
                        config.hotSpots[i].id === hotSpotId) {
                        // Delete hot spot DOM elements
                        var current = config.hotSpots[i].div;
                        while (current.parentNode != renderContainer)
                            current = current.parentNode;
                        renderContainer.removeChild(current);
                        delete config.hotSpots[i].div;
                        // Remove hot spot from configuration
                        config.hotSpots.splice(i, 1);
                        return true;
                    }
                }
            } else {
                if (initialConfig.scenes.hasOwnProperty(sceneId)) {
                    if (!initialConfig.scenes[sceneId].hasOwnProperty('hotSpots'))
                        return false;
                    for (var j = 0; j < initialConfig.scenes[sceneId].hotSpots.length; j++) {
                        if (initialConfig.scenes[sceneId].hotSpots[j].hasOwnProperty('id') &&
                            initialConfig.scenes[sceneId].hotSpots[j].id === hotSpotId) {
                            // Remove hot spot from configuration
                            initialConfig.scenes[sceneId].hotSpots.splice(j, 1);
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            }
        };

        /**
         * This method should be called if the viewer's container is resized.
         * @memberof Viewer
         * @instance
         */
        this.resize = function () {
            if (renderer)
                onDocumentResize();
        };

        /**
         * Check if a panorama is loaded.
         * @memberof Viewer
         * @instance
         * @returns {boolean} True if a panorama is loaded, else false
         */
        this.isLoaded = function () {
            return loaded;
        };

        /**
         * Check if device orientation control is supported.
         * @memberof Viewer
         * @instance
         * @returns {boolean} True if supported, else false
         */
        this.isOrientationSupported = function () {
            return orientationSupport || false;
        };

        /**
         * Stop using device orientation.
         * @memberof Viewer
         * @instance
         */
        this.stopOrientation = function () {
            stopOrientation();
        };

        /**
         * Start using device orientation (does nothing if not supported).
         * @memberof Viewer
         * @instance
         */
        this.startOrientation = function () {
            if (orientationSupport)
                startOrientation();
        };

        /**
         * Check if device orientation control is currently activated.
         * @memberof Viewer
         * @instance
         * @returns {boolean} True if active, else false
         */
        this.isOrientationActive = function () {
            return Boolean(orientation);
        };

        /**
         * Subscribe listener to specified event.
         * @memberof Viewer
         * @instance
         * @param {string} type - Type of event to subscribe to.
         * @param {Function} listener - Listener function to subscribe to event.
         * @returns {Viewer} `this`
         */
        this.on = function (type, listener) {
            externalEventListeners[type] = externalEventListeners[type] || [];
            externalEventListeners[type].push(listener);
            return this;
        };

        /**
         * Remove an event listener (or listeners).
         * @memberof Viewer
         * @param {string} [type] - Type of event to remove listeners from. If not specified, all listeners are removed.
         * @param {Function} [listener] - Listener function to remove. If not specified, all listeners of specified type are removed.
         * @returns {Viewer} `this`
         */
        this.off = function (type, listener) {
            if (!type) {
                // Remove all listeners if type isn't specified
                externalEventListeners = {};
                return this;
            }
            if (listener) {
                var i = externalEventListeners[type].indexOf(listener);
                if (i >= 0) {
                    // Remove listener if found
                    externalEventListeners[type].splice(i, 1);
                }
                if (externalEventListeners[type].length == 0) {
                    // Remove category if empty
                    delete externalEventListeners[type];
                }
            } else {
                // Remove category of listeners if listener isn't specified
                delete externalEventListeners[type];
            }
            return this;
        };

        /**
         * Fire listeners attached to specified event.
         * @private
         * @param {string} [type] - Type of event to fire listeners for.
         */
        function fireEvent(type) {
            if (type in externalEventListeners) {
                // Reverse iteration is useful, if event listener is removed inside its definition
                for (var i = externalEventListeners[type].length; i > 0; i--) {
                    externalEventListeners[type][externalEventListeners[type].length - i].apply(null, [].slice.call(arguments, 1));
                }
            }
        }

        /**
         * Destructor.
         * @instance
         * @memberof Viewer
         */
        this.destroy = function () {
            destroyed = true;
            clearTimeout(autoRotateStart);

            if (renderer)
                renderer.destroy();
            if (listenersAdded) {
                document.removeEventListener('mousemove', onDocumentMouseMove, false);
                document.removeEventListener('compasschange', onDocumentCompassChange, false);
                document.removeEventListener('mouseup', onDocumentMouseUp, false);
                container.removeEventListener('mozfullscreenchange', onFullScreenChange, false);
                container.removeEventListener('webkitfullscreenchange', onFullScreenChange, false);
                container.removeEventListener('msfullscreenchange', onFullScreenChange, false);
                container.removeEventListener('fullscreenchange', onFullScreenChange, false);
                window.removeEventListener('resize', onDocumentResize, false);
                window.removeEventListener('orientationchange', onDocumentResize, false);
                container.removeEventListener('keydown', onDocumentKeyPress, false);
                container.removeEventListener('keyup', onDocumentKeyUp, false);
                container.removeEventListener('blur', clearKeys, false);
                document.removeEventListener('mouseleave', onDocumentMouseUp, false);
            }
            container.innerHTML = '';
            container.classList.remove('pnlm-container');
        };

    }

    return {
        viewer: function (container, config) {
            return new Viewer(container, config);
        }
    };

})(window, document);
