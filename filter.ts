var a3 = {};
a3.aw7 = function(z, q) {
    function B(z, _) {
        if (z == null || !z.masterFXSwitch.v)
            return null;
        var P = z[_].v, Z;
        if (P.length != 0) {
            Z = P[0].v;
            if (!Z.enab.v)
                Z = null
        }
        return Z
    }
    var a = q.SoCo
      , p = q.GdFl
      , r = B(z, "solidFillMulti")
      , k = B(z, "gradientFillMulti");
    if (r == null && k == null)
        return [a, p];
    var s = a3.aiy;
    if (a && r && k == null) {
        var m = N.V(a);
        m.Clr.v = s(r.Clr.v, a.Clr.v, r);
        return [m, null]
    }
    if (p && r && k == null) {
        var u = N.V(p)
          , g = u.Grad.v.Clrs.v;
        for (var l = 0; l < g.length; l++) {
            var M = g[l].v.Clr;
            M.v = s(r.Clr.v, M.v, r)
        }
        return [null, u]
    }
    if (a && k) {
        var u = N.V(k)
          , g = u.Grad.v.Clrs.v;
        for (var l = 0; l < g.length; l++) {
            var M = g[l].v.Clr;
            M.v = s(M.v, a.Clr.v, k)
        }
        return [null, u]
    }
    return [r, k]
}
;
a3.c7 = {
    Wn: N.j(4),
    _Y: N.j(4),
    o: new c2(0,0,1,1)
};
a3.aiy = function(z, q, B) {
    var a = iw.PH(B.Md.v.BlnM)
      , p = B.Opct.v.val / 100
      , r = a3.c7;
    z = N.P0.dJ(z);
    q = N.P0.dJ(q);
    r.Wn[0] = z.o;
    r.Wn[1] = z.k;
    r.Wn[2] = z.X;
    r.Wn[3] = 255;
    r._Y[0] = q.o;
    r._Y[1] = q.k;
    r._Y[2] = q.X;
    r._Y[3] = 255;
    N.v.Oz(a, r.Wn, r.o, r._Y, r.o, r.o, p);
    return {
        classID: "RGBC",
        Rd: {
            t: "doub",
            v: r._Y[0]
        },
        Grn: {
            t: "doub",
            v: r._Y[1]
        },
        Bl: {
            t: "doub",
            v: r._Y[2]
        }
    }
}
;
a3.a9m = function(z, q, B) {
    var a = z;
    z = z.slice(0);
    var p = iw.dB[iw.Dx.indexOf(q.Md.v.BlnM)]
      , r = N.P0.dJ(q.Clr.v)
      , k = 4278190080 | Math.round(r.X) << 16 | Math.round(r.k) << 8 | Math.round(r.o)
      , s = N.j(B.C() * 4);
    N.mL(s, k);
    N.v.Oz(p, s, B, z, B, B, q.Opct.v.val / 100);
    for (var l = 0; l < z.length; l += 4)
        z[l + 3] = a[l + 3];
    return z
}
;
a3.UP = function(z, q) {
    var B = ["Sz", "blur", "Sftn", "Dstn"];
    for (var l = 0; l < fp.order.length; l++) {
        var a = fp.order[l]
          , p = z[fp.LG[l]].v;
        for (var r = 0; r < p.length; r++) {
            var k = p[r].v;
            for (var s = 0; s < B.length; s++) {
                var m = k[B[s]];
                if (m) {
                    var u = m.v.val
                      , g = u;
                    g = Math.max(u == 0 ? 0 : 1, g * q);
                    if (a == "ChFX")
                        g = Math.min(g, 250);
                    if (a == "ebbl") {
                        if (B[s] == "blur")
                            g = Math.min(g, 250);
                        if (B[s] == "Sftn")
                            g = Math.min(g, 16)
                    }
                    m.v.val = Math.round(g)
                }
            }
            if (a == "ebbl" || a == "patternFill" || a == "FrFX")
                if (k.Ptrn && k.Scl)
                    k.Scl.v.val = Math.max(1, Math.min(1e3, k.Scl.v.val * q))
        }
    }
}
;
a3.aJf = function(z, q, B) {
    var a = new c2(-.5,-.5,1,1);
    for (var l = 0; l < fp.order.length; l++) {
        var p = fp.order[l]
          , r = z[fp.LG[l]].v;
        for (var k = 0; k < r.length; k++) {
            var s = r[k].v, M;
            if (!s.enab.v)
                continue;
            var m = s.blur ? s.blur.v.val + 1 : 0
              , u = s.Ckmt ? s.Ckmt.v.val / 100 : 0
              , g = Math.round(m * u);
            if (p == "DrSh" || p == "IrSh" && B) {
                M = new c2(-.5,-.5,1,1);
                M.oL(m, m);
                a3.ik(M, s, q, 0)
            }
            if (p == "St3D") {
                M = new c2(-.5,-.5,1,1);
                a3.ik(M, s, q, Math.PI, "Angl")
            }
            if (p == "OrGl" || p == "IrGl" && B) {
                M = new c2(-.5,-.5,1,1);
                M.oL(m, m)
            }
            if (p == "FrFX") {
                var _ = a3.n$(s)
                  , P = _[1];
                if (B)
                    P = Math.max(_[0], P);
                M = new c2(-.5,-.5,1,1);
                M.oL(Math.ceil(P), Math.ceil(P))
            }
            if (p == "ebbl") {
                var m = s.blur.v.val
                  , Z = s.bvlS.v.BESl;
                if (Z == "Embs" || Z == "PlEb")
                    m /= 2;
                var j = ["OtrB", "InrB", "Embs", "PlEb", "strokeEmboss"]
                  , G = ["SfBL", "PrBL", "Slmt"]
                  , F = ["In", "Out"]
                  , i = s.bvlT.v.bvlT != "SfBL" ? m : m * .43
                  , n = Math.round(m);
                M = new c2(-n - 1,-n - 1,2 * n + 2,2 * n + 2)
            }
            if (B && p == "ChFX") {
                M = new c2(-.5,-.5,1,1);
                M.oL(m, m);
                var A = M.P();
                a3.ik(M, s, q, 0);
                a3.ik(A, s, q, Math.PI);
                M = M.Kg(A)
            }
            if (M)
                a = a.Kg(M)
        }
    }
    if (a.x != Math.ceil(a.x)) {
        a.x = Math.ceil(a.x);
        a.r -= 1
    }
    if (a.y != Math.ceil(a.y)) {
        a.y = Math.ceil(a.y);
        a.$ -= 1
    }
    a.r = Math.floor(a.r);
    a.$ = Math.floor(a.$);
    return a
}
;
a3.n$ = function(z) {
    var q, B, a = 0, p = 0;
    if (z.Sz) {
        q = z.Sz.v.val;
        B = fp.stroke.types.indexOf(z.Styl.v.FStl)
    } else {
        q = z.Wdth.v;
        B = ["Insd", "Cntr", "Otsd"].indexOf(z.Lctn.v.StrL)
    }
    if (B == 0)
        a = q;
    if (B == 1)
        a = p = q / 2;
    if (B == 2)
        p = q;
    return [a, p]
}
;
a3.awj = function(z, q) {
    if (hx.KV && z.Yx == null) {
        var B = z.jX
          , a = B instanceof Array;
        if (a) {
            z.Yx = [z.jX[0], new hx.Er(z.dK.r,z.dK.$,q)];
            z.Yx[1].set(z.jX[1]);
            delete z.jX
        } else {
            z.Yx = new hx.gM(z.dK.r,z.dK.$,q);
            z.Yx.set(z.jX);
            delete z.jX
        }
        if (z.Xt) {
            z.af = new hx.Er(z.dK.r,z.dK.$,q);
            z.af.set(z.Xt);
            delete z.Xt
        }
        if (z.u$) {
            z.yG = new hx.Er(z.dK.r,z.dK.$,q);
            z.yG.set(z.u$);
            delete z.u$
        }
    }
}
;
a3.arm = function(z) {
    if (z.Yx)
        z.Yx instanceof Array ? z.Yx[1].delete() : z.Yx.delete();
    if (z.af)
        z.af.delete();
    if (z.yG)
        z.yG.delete()
}
;
a3.arh = function(z) {
    if (z.all == null)
        return;
    for (var l = 0; l < z.all.length; l++) {
        a3.arm(z.all[l])
    }
}
;
a3.a6T = function(z) {
    var q = z.all;
    for (var l = 0; l < q.length; l++) {
        var B = q[l];
        if (B.jX instanceof Array) {
            var a = B.jX[1]
              , p = B.jX[0]
              , r = N.Q$(a)
              , k = N.j(B.dK.C() * 4, r);
            if (r == 8)
                new Uint32Array(k.buffer).fill(new Uint32Array(p.buffer)[0]);
            else
                for (var l = 0; l < k.length; l += 4) {
                    k[l] = p[0];
                    k[l + 1] = p[1];
                    k[l + 2] = p[2]
                }
            N.OE(a, k, 3);
            B.jX = k
        }
    }
}
;
a3.a49 = function(z, q, B, a, p, r) {
    var k = a3.zC(B, a, z, q, p, r)
      , s = p.depth;
    for (var l = 0; l < k.all.length; l++) {
        var m = k.all[l];
        if (m.jX instanceof Array)
            m.jX = [N.Pz(m.jX[0], s), N.Pz(m.jX[1], s)];
        else
            m.jX = N.Pz(m.jX, s);
        if (m.Xt)
            m.Xt = N.Pz(m.Xt, s);
        if (m.u$)
            m.u$ = N.Pz(m.u$, s);
        a3.awj(m, s)
    }
    return k
}
;
a3.a9p = function(z) {
    for (var l = 0; l < fp.order.length; l++) {
        var q = fp.order[l]
          , B = fp.LG[l]
          , a = z[B].v;
        for (var p = 0; p < a.length; p++) {
            var r = a[p].v;
            if (r.enab.v && ["patternFill", "GrFl", "SoFi"].indexOf(q) == -1)
                return !0
        }
    }
    return !1
}
;
a3.zC = function(z, q, B, a, p, r) {
    var k = N.Q$(B)
      , s = 16
      , m = 0
      , u = 0;
    B = N.Pz(B, s);
    if (r == null)
        r = a;
    for (var l = 0; l < fp.order.length; l++) {
        var g = fp.order[l]
          , M = fp.LG[l]
          , _ = z[M].v;
        for (var P = 0; P < _.length; P++) {
            var Z = _[P].v;
            if (g == "DrSh" && Z.enab.v && Z.Ckmt.v.val > 0 && Z.blur.v.val > 0)
                m = Math.max(m, Math.ceil(Z.Ckmt.v.val * Z.blur.v.val / 100));
            if (g == "OrGl" && Z.enab.v && Z.Ckmt.v.val > 0 && Z.blur.v.val > 0 && Z.GlwT.v.BETE == "SfBL")
                m = Math.max(m, Math.ceil(Z.Ckmt.v.val * Z.blur.v.val / 100));
            if (g == "OrGl" && Z.enab.v && Z.blur.v.val > 0 && Z.GlwT.v.BETE == "PrBL")
                m = Math.max(m, Z.blur.v.val);
            if (g == "FrFX" && Z.enab.v && Z.Sz.v.val > 0) {
                if (Z.Styl.v.FStl == "OutF")
                    m = Math.max(m, Z.Sz.v.val);
                if (Z.Styl.v.FStl == "CtrF")
                    m = Math.max(m, Math.ceil(Z.Sz.v.val / 2));
                u = Math.max(u, a3.n$(Z)[1])
            }
        }
    }
    var j = new a3.tK(B,a,m,a3.a9p(z))
      , G = -a.x
      , F = -a.y
      , i = {
        I: {},
        all: []
    };
    for (var n = 0; n < fp.order.length; n++) {
        var g = fp.order[n]
          , M = fp.LG[n];
        i.I[g] = [];
        for (var A = z[M].v.length - 1; A >= 0; A--) {
            var o = z[M].v[A].v, e;
            if (!o.enab.v)
                continue;
            var c = o.blur ? o.blur.v.val : 0
              , x = o.Ckmt ? o.Ckmt.v.val / 100 : 0
              , V = c * x;
            if (g == "St3D") {
                var K = Math.max(1e-4, 1 - o.Srnk.v.val / 100)
                  , d = 2
                  , jL = 0;
                function Q(E, g8, o) {
                    var eW = o.Angl.v.val;
                    eW *= Math.PI / 180;
                    var f = o.Dstn.v.val
                      , aQ = Math.cos(eW) * f
                      , fe = -Math.sin(eW) * f
                      , ie = K + g8 * (1 - K)
                      , je = new c1;
                    je.translate(-E.r / 2, -E.$ / 2);
                    je.scale(ie, ie);
                    je.translate(E.r / 2, E.$ / 2);
                    je.translate((1 - g8) * aQ, (1 - g8) * fe);
                    return je
                }
                var E = a.P()
                  , y = N.Pz(B, 8);
                E.x = E.y = 0;
                var U = Date.now()
                  , R = E.P();
                R.oL(d, d);
                var v = N.j(R.C(), 8);
                N.Mj(y, E, v, R);
                R.x = R.y = 0;
                N.w$.U2(v, R, 2);
                var b = N.hI(8)
                  , L = N.j(R.C() * 4, 8);
                L.fill(b);
                N.G9(v, L);
                var O = N.j(E.C(), 8)
                  , Y = E.r
                  , w = E.$
                  , D = R.r
                  , h = a3.auV(o, p)
                  , f = Math.cos(h[1])
                  , H = -Math.cos(h[0]) * f
                  , X = Math.sin(h[0]) * f;
                if (Math.abs(H) < .001 && Math.abs(X) < .001)
                    H = X = 0;
                for (var I = 0; I < w; I++)
                    for (var i_ = 0; i_ < Y; i_++) {
                        var l = (I + d) * D + i_ + d
                          , W = v[l + 1] - v[l - 1]
                          , $ = v[l + D] - v[l - D]
                          , J = W * W + $ * $;
                        if (J > 10) {
                            var bV = 1 / Math.sqrt(J);
                            O[I * Y + i_] = Math.max(0, Math.min(b, b * .5 + b * .5 * (H * bV * W + X * bV * $)))
                        }
                    }
                var bh = [y, E]
                  , j1 = Q(E, 0, o)
                  , ak = N.b.nj(E).L
                  , bB = ak.slice(0);
                N.b.M(ak, j1, bB);
                var eP = E.Kg(N.b.hX(bB))
                  , io = N.j(eP.C() * 4, 8);
                for (var l = 0; l < 8; l += 2) {
                    var W = ak[l] - bB[l]
                      , $ = ak[l + 1] - bB[l + 1];
                    jL = Math.max(jL, Math.sqrt(W * W + $ * $))
                }
                var d5 = Math.round(jL / 2)
                  , cr = N.P0.dJ(o.Clr.v);
                cr.o /= 255;
                cr.k /= 255;
                cr.X /= 255;
                var lk = o.Drkn.v.val / 100;
                for (var ad = 0; ad < d5; ad++) {
                    var g8 = ad / d5
                      , bk = 1 - lk + g8 * lk
                      , je = Q(E, g8, o)
                      , eM = E.P()
                      , kC = y;
                    if (K != 1) {
                        var e6 = S.Np.c2(bh, je);
                        eM = e6.S;
                        kC = e6.G
                    } else {
                        var l7 = je.ay(new fv(0,0));
                        eM.x += Math.round(l7.x);
                        eM.y += Math.round(l7.y)
                    }
                    var fw = N.j(eM.C() * 4, 8);
                    if (H != 0 || X != 0) {
                        var g_ = eM.r
                          , j8 = eM.$
                          , kx = cr.o
                          , kz = cr.k
                          , ki = cr.X
                          , ea = je.P();
                        ea._y();
                        var kM = ea.ay(new fv(.5,.5))
                          , kB = ea.ay(new fv(1.5,1.5))
                          , W = kB.x - kM.x
                          , $ = kB.y - kM.y;
                        for (var I = 0; I < j8; I++) {
                            for (var i_ = 0; i_ < g_; i_++) {
                                var l = I * g_ + i_
                                  , h4 = l * 4
                                  , k0 = Math.max(0, Math.min(Y - 1, ~~(.5 + W * i_)))
                                  , eS = Math.max(0, Math.min(w - 1, ~~(.5 + $ * I)))
                                  , k8 = O[eS * Y + k0]
                                  , l8 = -1 + 2 * k8 * (1 / b)
                                  , c_ = -l8
                                  , iR = 0;
                                if (l8 > 0) {
                                    c_ = 0;
                                    iR = l8
                                }
                                fw[h4] = b * (1 - c_) * (iR + (1 - iR) * kx) * bk;
                                fw[h4 + 1] = b * (1 - c_) * (iR + (1 - iR) * kz) * bk;
                                fw[h4 + 2] = b * (1 - c_) * (iR + (1 - iR) * ki) * bk
                            }
                        }
                    } else
                        a3._E(fw, o.Clr.v, bk);
                    N.OE(kC, fw, 3);
                    N.v.Oz("norm", fw, eM, io, eP, eM, 1)
                }
                e = {
                    jX: io,
                    dK: eP
                }
            } else if (g == "DrSh") {
                var bz = j.oa(V, c - V, !0)
                  , hU = bz.fF
                  , fi = bz.QB.P();
                a3.tv(hU, o, !1);
                if (o.Cntn && o.Cntn.v) {
                    var iZ = new c2;
                    a3.ik(iZ, o, p, 0);
                    var a4 = fi.P();
                    a4.offset(-iZ.x, -iZ.y);
                    a4 = a4.Kg(fi);
                    var dQ = N.j(a4.C(), s);
                    N.Mj(hU, fi, dQ, a4);
                    var aP = Math.sqrt(iZ.x * iZ.x + iZ.y * iZ.y)
                      , eA = hU.slice(0);
                    for (var l = 0; l < aP - 1; l++) {
                        var W = Math.round(-iZ.x * l / aP)
                          , $ = Math.round(-iZ.y * l / aP)
                          , gi = bz.QB.P();
                        gi.offset(W, $);
                        N.ae4(eA, gi, dQ, a4)
                    }
                    hU = dQ;
                    fi = a4
                }
                fi.offset(G, F);
                a3.ik(fi, o, p, 0);
                var io = N.j(4, s);
                a3._E(io, o.Clr.v);
                e = {
                    jX: [io, hU],
                    dK: fi,
                    ag_: o.layerConceals.v
                }
            } else if (g == "IrSh") {
                var bz = j.oa(V, c - V, !1);
                a3.ik(bz.QB, o, p, 0);
                var fi = j.S().P()
                  , hU = N.j(fi.C(), s);
                hU.fill(N.hI(s));
                N.Mj(bz.fF, bz.QB, hU, fi);
                a3.tv(hU, o, !0, !0);
                var io = N.j(4, s);
                a3._E(io, o.Clr.v);
                fi.offset(G, F);
                e = {
                    jX: [io, hU],
                    dK: fi
                }
            } else if (g == "GrFl") {
                var io = N.j(j.S().C() * 4, k);
                a3.Ck(o, io, j.S(), p, null, r);
                var fi = j.S().P();
                fi.offset(G, F);
                e = {
                    jX: io,
                    dK: fi
                }
            } else if (g == "SoFi") {
                var io = N.j(4, s);
                a3._E(io, o.Clr.v);
                var fX = N.j(j.fF().length, k);
                fX.fill(N.hI(k));
                var fi = j.S().P();
                fi.offset(G, F);
                e = {
                    jX: [io, fX],
                    dK: fi
                }
            } else if (g == "ebbl") {
                var iK = !1;
                if (iK)
                    console.log(o);
                var U = Date.now()
                  , ja = U
                  , fU = o.bvlS.v.BESl
                  , im = o.bvlT.v.bvlT;
                if (fU == "strokeEmboss") {
                    var bd = z.frameFXMulti.v;
                    if (bd.length == 0)
                        continue;
                    bd = bd[0].v;
                    if (!bd.enab.v)
                        continue;
                    var fV = bd.Styl.v.FStl;
                    if (fV == "OutF")
                        fU = "OtrB";
                    if (fV == "CtrF")
                        fU = "Embs";
                    if (fV == "InsF")
                        fU = "InrB"
                }
                var c = o.blur.v.val;
                if (c == 0)
                    c = .7;
                if (fU == "Embs" || fU == "PlEb")
                    c /= 2;
                var hA = ["OtrB", "InrB", "Embs", "PlEb", "strokeEmboss"]
                  , dW = ["SfBL", "PrBL", "Slmt"]
                  , jY = ["In", "Out"]
                  , b2 = im != "SfBL" ? c : c * .45
                  , gP = Math.round(c)
                  , gY = j.S().P()
                  , lf = gY.P();
                lf.oL(gP, gP);
                var Y = lf.r
                  , w = lf.$
                  , kd = Y * w
                  , kP = N.j(kd, s);
                N.Mj(j.fF(), gY, kP, lf);
                var g0 = N.style.wy(kP, Y, w);
                N._y(kP);
                var eE = N.style.wy(kP, Y, w);
                if (iK)
                    console.log("distTransform computed", Date.now() - U);
                U = Date.now();
                a3.a7J(b2, g0, eE);
                if (iK)
                    console.log("summing + cropping", Date.now() - U);
                U = Date.now();
                if (im == "SfBL") {
                    var jh = Math.pow(c * .21, 1.22);
                    if (!0)
                        jh = Math.max(jh, 2);
                    N.w$.U2(eE, lf, jh, 2)
                }
                if (iK)
                    console.log("blurring", Date.now() - U);
                U = Date.now();
                var kA = eE
                  , a5 = g0;
                a5.set(kA);
                if (o.useShape.v) {
                    var ju = Math.min(100, o.Inpr.v.val + 1) / 100;
                    if (fU != "OtrB" && fU != "InrB")
                        ju = 1;
                    var j7 = N.X8.DM(o.MpgS.v.Crv.v, 2e3)
                      , hO = Math.round(2e3 / ju);
                    j7 = N.X8.aqp(j7, hO, fU == "InrB");
                    var aw = .5 / b2;
                    for (var l = 0; l < kd; l++) {
                        var fD = kA[l]
                          , ej = .99999 * (fD + b2) * aw;
                        kA[l] = -b2 + 2 * b2 * j7[~~(ej * (hO - 1))]
                    }
                    if (iK)
                        console.log("applying shape", Date.now() - U);
                    U = Date.now()
                }
                if (o.useTexture.v) {
                    var fw = N.j(Y * w * 4);
                    a3.UN(o, fw, lf, p.add.Patt, q);
                    var b1 = N.j(Y * w);
                    N.ZW(fw, b1);
                    N.w$.JD(b1, lf, 1);
                    var cc = c * o.textureDepth.v.val * (1 / 100) * (1 / 255);
                    if (o.InvT.v)
                        cc = -cc;
                    for (var l = 0; l < kd; l++)
                        kA[l] += -cc * b1[l];
                    if (iK)
                        console.log("applying texture", Date.now() - U);
                    U = Date.now()
                }
                var ba = fU == "PlEb"
                  , hC = new Float32Array(kd)
                  , kn = hC;
                if (ba) {
                    kn = new Float32Array(kd)
                }
                var ew = a3.aoV(Y, w, o, p, kA, hC, kn, ba);
                if (iK)
                    console.log("raycasting", Date.now() - U);
                U = Date.now();
                if (o.Sftn.v.val != 0) {
                    N.w$.U2(hC, lf, o.Sftn.v.val * .43, 2);
                    if (ba)
                        N.w$.U2(kn, lf, o.Sftn.v.val * .43, 2)
                }
                if (iK)
                    console.log("softening", Date.now() - U);
                U = Date.now();
                var jD = N.j(Y * w, s)
                  , ht = N.j(Y * w, s)
                  , eY = jD
                  , kT = ht;
                if (ba) {
                    eY = N.j(Y * w, s);
                    kT = N.j(Y * w, s)
                }
                a3.a7u(o, Y, w, ew, b2, ba, a5, jD, ht, eY, kT, hC, kn);
                if (iK)
                    console.log("baking textures", Date.now() - U);
                U = Date.now();
                lf = j.S().P();
                lf.oL(gP, gP);
                lf.offset(G, F);
                e = {
                    at1: o.bvlS.v.BESl == "strokeEmboss"
                };
                var gL = iw.PH(o.hglM.v.BlnM)
                  , gF = o.hglO.v.val / 100
                  , i9 = iw.PH(o.sdwM.v.BlnM)
                  , di = o.sdwO.v.val / 100
                  , kG = N.j(4, s);
                a3._E(kG, o.hglC.v);
                var ez = N.j(4, s);
                a3._E(ez, o.sdwC.v);
                if (["InrB", "Embs", "PlEb"].indexOf(fU) != -1) {
                    e.SV = {
                        jX: [kG, jD],
                        dK: lf,
                        vW: gL,
                        Pv: gF
                    };
                    e.Eh = {
                        jX: [ez, ht],
                        dK: lf,
                        vW: i9,
                        Pv: di
                    }
                }
                if (["OtrB", "Embs", "PlEb"].indexOf(fU) != -1) {
                    e.U0 = {
                        jX: [kG, eY],
                        dK: lf,
                        vW: gL,
                        Pv: gF
                    };
                    e.fY = {
                        jX: [ez, kT],
                        dK: lf,
                        vW: i9,
                        Pv: di
                    }
                }
                if (iK)
                    console.log(Date.now() - ja)
            } else if (g == "patternFill") {
                var e7 = j.S()
                  , io = N.j(e7.C() * 4, k);
                a3.UN(o, io, e7, p.add.Patt, q);
                var fi = e7.P();
                fi.offset(G, F);
                e = {
                    jX: io,
                    dK: fi
                }
            } else if (g == "ChFX") {
                var U = Date.now()
                  , c = o.blur.v.val
                  , bw = j.S().P();
                bw.oL(c, c);
                var ap = N.j(bw.C(), s);
                N.Mj(j.fF(), j.S(), ap, bw);
                N.w$.U2(ap, bw, c * .43);
                a3.aGk(ap, o.MpgS.v.Crv.v);
                var kx = j.S()
                  , fy = bw.P()
                  , iF = bw.P();
                a3.ik(fy, o, p, 0);
                a3.ik(iF, o, p, Math.PI);
                var cr = N.j(kx.C(), s);
                N.Mj(ap, iF, cr, kx);
                var fG = kx.ti(fy)
                  , Y = fG.r;
                for (var I = 0; I < fG.$; I++) {
                    var kM = (I + fG.y - kx.y) * kx.r + fG.x - kx.x
                      , kB = (I + fG.y - fy.y) * fy.r + fG.x - fy.x;
                    for (var i_ = 0; i_ < Y; i_++)
                        cr[kM + i_] = Math.abs(cr[kM + i_] - ap[kB + i_])
                }
                if (o.Invr.v)
                    N._y(cr);
                var io = N.j(4, s);
                a3._E(io, o.Clr.v);
                var fi = j.S().P();
                fi.offset(G, F);
                e = {
                    jX: [io, cr],
                    dK: fi
                }
            } else if (g == "OrGl") {
                var bz, iC = a3.ab6(o), io = null;
                if (o.GlwT.v.BETE == "SfBL") {
                    bz = j.oa(V, c - V, !0);
                    a3.aaI(bz.fF, iC)
                } else
                    bz = j.a8J(c, x, !0, iC);
                var hU = bz.fF
                  , fi = bz.QB
                  , f$ = hU.slice(0);
                if (o.Grad == null) {
                    a3.tv(hU, o, !1);
                    var fw = N.j(4, s);
                    a3._E(fw, o.Clr.v);
                    io = [fw, hU]
                } else {
                    a3.zW(hU, o);
                    var g3 = {
                        gh: hU,
                        rl: N.hI(s),
                        yh: 0,
                        aB: fi
                    };
                    io = N.j(fi.C() * 4, s);
                    a3.Ck(o, io, fi, p, g3);
                    var eg = fi.r
                      , da = N.hI(s)
                      , hV = da * (32 / 255);
                    for (var l = 0; l < f$.length; l++) {
                        var iD = da
                          , e$ = f$[l];
                        if (e$ < da) {
                            var a9 = (e$ + f$[l - 1] + f$[l + 1] + f$[l - eg] + f$[l + eg]) * .2 - 1;
                            iD = Math.min(da, Math.round(Math.max(0, a9) * 8))
                        }
                        hU[l] = iD
                    }
                    a3.kO(hU, o, !1);
                    N.OE(hU, io, 3)
                }
                fi.offset(G, F);
                e = {
                    jX: io,
                    dK: fi
                }
            } else if (g == "IrGl") {
                var bz, iC = a3.ab6(o), io = null;
                if (o.GlwT.v.BETE == "SfBL") {
                    bz = j.oa(V, c - V, !1);
                    a3.aaI(bz.fF, iC)
                } else
                    bz = j.a8J(c, x, !1, iC);
                var hU = bz.fF
                  , fi = bz.QB;
                if (o.glwS.v.IGSr == "SrcC")
                    N._y(hU);
                if (o.Grad == null) {
                    a3.tv(hU, o, !0);
                    var fw = N.j(4, s);
                    a3._E(fw, o.Clr.v);
                    io = [fw, hU]
                } else {
                    a3.zW(hU, o);
                    var g3 = {
                        gh: hU,
                        rl: N.hI(s),
                        yh: 0,
                        aB: fi
                    };
                    io = N.j(fi.C() * 4, s);
                    a3.Ck(o, io, fi, p, g3);
                    hU.fill(N.hI(s));
                    a3.kO(hU, o, !1);
                    N.OE(hU, io, 3)
                }
                fi.offset(G, F);
                e = {
                    jX: io,
                    dK: fi
                }
            } else if (g == "FrFX") {
                var j3 = a3.n$(o)
                  , kr = j3[0]
                  , eV = j3[1]
                  , fi = j.S().P()
                  , gd = null
                  , cA = null
                  , io = null;
                fi.oL(Math.ceil(u), Math.ceil(u));
                if (eV > 0) {
                    var bz = j.oa(eV, 0, !0);
                    cA = bz.fF;
                    if (cA.length < fi.C()) {
                        cA = N.j(fi.C(), s);
                        N.Mj(bz.fF, bz.QB, cA, fi)
                    }
                }
                if (kr > 0) {
                    var bz = j.oa(kr, 0, !1);
                    gd = N.j(fi.C(), s);
                    gd.fill(N.hI(s));
                    N.Mj(bz.fF, bz.QB, gd, fi)
                }
                fi.offset(G, F);
                var ds = o.PntT.v.FrFl;
                if (ds == "SClr") {
                    var fw = N.j(4, k)
                      , ko = N.j(fi.C(), k);
                    a3._E(fw, o.Clr.v);
                    ko.fill(N.hI(k));
                    io = [fw, ko]
                } else {
                    io = N.j(fi.C() * 4, k);
                    if (ds == "GrFl")
                        a3.Ck(o, io, fi, p, j.aqM(kr, eV));
                    if (ds == "Ptrn")
                        a3.UN(o, io, fi, p.add.Patt, q)
                }
                var kR = o.overprint
                  , ck = kR ? kR.v : !1;
                if (ck) {
                    var fX = gd ? gd : cA;
                    if (gd && cA)
                        N.rd.ti(gd, cA, fX);
                    fX = N.Pz(fX, k);
                    if (io instanceof Array)
                        io[1].set(fX);
                    else
                        N.OE(fX, io, 3)
                }
                e = {
                    jX: io,
                    dK: fi,
                    u$: cA,
                    Xt: gd,
                    afr: ck
                }
            }
            i.I[g].push(e);
            if (g == "ebbl") {
                if (e.SV)
                    i.all.push(e.SV, e.Eh);
                if (e.U0)
                    i.all.push(e.U0, e.fY)
            } else {
                e.vW = iw.PH(o.Md.v.BlnM);
                e.Pv = o.Opct.v.val / 100,
                  i.all.push(e)
            }
        }
    }
    return i
}
;
a3.Ss = function(z) {
    var q = 1 / Math.sqrt(z.x * z.x + z.y * z.y + z.Ju * z.Ju);
    z.x *= q;
    z.y *= q;
    z.Ju *= q
}
;
a3.aGa = function(z, q) {
    return {
        x: z.y * q.Ju - z.Ju * q.y,
        y: z.Ju * q.x - z.x * q.Ju,
        Ju: z.x * q.y - z.y * q.x
    }
}
;
a3.avs = function(z, q) {
    return z.x * q.x + z.y * q.y + z.Ju * q.Ju
}
;
a3.a7J = function(z, q, B) {
    var a = q.length;
    for (var l = 0; l < a; l++) {
        var p = B[l] - q[l];
        B[l] = p
    }
    for (var l = 0; l < a; l++) {
        var p = B[l];
        if (p < -z)
            B[l] = -z;
        else if (p > z)
            B[l] = z
    }
}
;
a3.aoV = function(z, q, B, a, p, r, k, s) {
    var m = a3.auV(B, a)
      , u = m[0]
      , g = m[1]
      , M = Math.cos(u) * Math.cos(g)
      , _ = -Math.sin(u) * Math.cos(g)
      , P = Math.sin(g);
    r.fill(P);
    if (s)
        k.fill(P);
    var Z = (B.bvlT.v.bvlT == "SfBL" ? 1 : .5) * (B.bvlD.v.BESs == "In" ? 1 : -1) * B.srgR.v.val / 100
      , j = -.125 * Z;
    for (var G = 0; G < q; G++) {
        var F = G == 0 ? 0 : -z
          , i = G == q - 1 ? 0 : z
          , l = G * z;
        for (var n = 0; n < z; n++,
          l++) {
            var A = n == 0 ? l : l - 1
              , o = n == z - 1 ? l : l + 1
              , c = p[o] - p[A]
              , x = p[l + i] - p[l + F];
            if (c * c + x * x < .005)
                continue;
            var V = p[A + F]
              , e = p[o + F]
              , K = p[A + i]
              , Q = p[o + i]
              , E = j * (e + 2 * c + Q - V - K)
              , y = j * (K + 2 * x + Q - V - e)
              , U = 1 / Math.sqrt(E * E + y * y + 1);
            E *= U;
            y *= U;
            r[l] = Math.max(0, E * M + y * _ + U * P);
            if (s)
                k[l] = Math.max(0, -E * M - y * _ + U * P)
        }
    }
    return P
}
;
a3.a7u = function(z, q, B, a, p, r, k, s, m, u, g, M, _) {
    var P = 1 / a
      , Z = 1 / (1 - a)
      , j = 1 / p
      , G = N.Q$(s)
      , F = N.hI(G)
      , i = N.X8.DM(z.TrnS.v.Crv.v, 1024)
      , n = new Float32Array(2500);
    for (var l = 0; l < 2500; l++) {
        var A = Math.max(0, Math.min(1, (l - 500) * .001));
        n[l] = Math.pow(A, .2)
    }
    var o = new Float32Array(1024)
      , c = new Float32Array(1024);
    for (var l = 0; l < 1024; l++) {
        var x = i[l];
        o[l] = F * (1 - Math.min(1, x * P));
        c[l] = F * (1 - Math.min(1, (1 - x) * Z))
    }
    for (var V = 0; V < B; V++)
        for (var A = 0; A < q; A++) {
            var l = V * q + A
              , e = (k[l] + p * .993) * j
              , K = n[~~(500 + e * 1e3)]
              , Q = ~~(M[l] * 1023);
            m[l] = K * o[Q];
            s[l] = K * c[Q];
            if (r) {
                Q = ~~(_[l] * 1023);
                g[l] = K * o[Q];
                u[l] = K * c[Q]
            }
        }
}
;
a3.Ov = function(z) {
    var q = a3.A4()
      , B = z.sU
      , a = !1;
    for (var l = 0; l < 32; l += 8)
        if (B[l] + B[l + 1] + B[l + 4] + B[l + 5] != 0 || B[l + 2] + B[l + 3] + B[l + 6] + B[l + 7] != 1020)
            a = !0;
    if (a) {
        B = B.slice(0);
        for (var l = 0; l < 40; l += 4) {
            var p = B[l] / 255
              , r = B[l + 1] / 255
              , k = B[l + 2] / 255
              , s = B[l + 3] / 255;
            B[l] = p - .001;
            B[l + 1] = p == r ? 1e6 : 1 / (r - p);
            B[l + 2] = k == s ? -1e6 : 1 / (k - s);
            B[l + 3] = s + .001
        }
    }
    var m = z.add.iOpa != null ? z.add.iOpa / 255 : q.fill
      , u = z.add.vstk;
    if (u && !u.fillEnabled.v && (!u.strokeEnabled.v || u.strokeStyleLineWidth.v.val == 0))
        m = 0;
    return {
        fill: m,
        JG: a ? B : null,
        Vg: z.add.brst != null ? z.add.brst : q.Vg,
        aoU: z.add.knko != null ? z.add.knko : q.aoU,
        style: !1,
        Ox: !1
    }
}
;
a3.A4 = function() {
    return {
        fill: 1,
        JG: null,
        Vg: [1, 1, 1],
        aoU: 0,
        style: !1,
        Ox: !1
    }
}
;
a3.abD = function(z, q, B, a, p, r, k, s) {
    if (s == null)
        s = 1;
    if (k == null)
        k = new c1;
    var m = z.sy[1].r
      , u = z.sy[1].$
      , g = new c1
      , M = p < 2;
    if (M)
        g.translate(-m / 2, -u / 2);
    if (p == 0) {
        s *= Math.max(B / m, a / u)
    } else if (p == 1) {
        s *= Math.min(B / m, a / u)
    } else if (p == 2) {
        g.scale(1 / m, 1 / u);
        g.concat(k);
        g.scale(B, a)
    } else if (p == 3) {
        s = s
    }
    g.scale(s, s);
    if (M)
        g.translate(B / 2, a / 2);
    g.concat(r);
    q.Ptrn.v.Idnt.v = z.id;
    q.Scl.v.val = Math.round(100 * g.XV());
    q.Angl.v.val = Math.round(180 * Math.atan2(-g.X, g.u0) / Math.PI);
    q.Algn.v = !0;
    var _ = q.phase.v;
    _.Hrzn.v = Math.round(g.RG);
    _.Vrtc.v = Math.round(g.Gq)
}
;
a3.zV = function(z, q) {
    if (q == null)
        return null;
    var B = z.Idnt.v
      , a = z.Nm.v;
    for (var l = 0; l < q.length; l++)
        if (q[l].id == B)
            return q[l];
    for (var l = 0; l < q.length; l++)
        if (q[l].name == a)
            return q[l];
    return null
}
;
a3.aih = function(z, q, B) {
    var a = ["patternFillMulti", "ebblMulti", "frameFXMulti"];
    for (var l = 0; l < a.length; l++) {
        var p = z.v[a[l]].v;
        for (var r = 0; r < p.length; r++)
            if (p[r].v.Ptrn)
                q.vi(a3.zV(p[r].v.Ptrn.v, B))
    }
}
;
a3.aAU = function(z, q, B) {
    var a = ["patternFillMulti", "ebblMulti", "frameFXMulti"];
    for (var l = 0; l < a.length; l++) {
        var p = z.v[a[l]].v;
        for (var r = 0; r < p.length; r++)
            if (p[r].v.Ptrn) {
                var k = p[r].v.Ptrn.v
                  , s = a3.zV(k, B)
                  , m = a3.zV(k, q.add.Patt);
                if (s == null && m)
                    B.push(m)
            }
    }
}
;
a3.UN = function(z, q, B, a, p) {
    if (z.Ptrn == null)
        return;
    var r = a3.zV(z.Ptrn.v, a);
    if (r != null && !B.su()) {
        var k = r.sy
          , s = k[0]
          , m = k[1]
          , u = 0;
        N.r3(k);
        var g = (z.Scl ? z.Scl.v.val : 100) / 100;
        while ((g < .3 || g == .5) && k[u + 2]) {
            g *= m.r / k[u + 3].r;
            u += 2;
            s = k[u];
            m = k[u + 1]
        }
        var M = N.scale.UN(s, m.r, m.$)
          , _ = z.phase ? z.phase.v : {
            Hrzn: {
                v: 0
            },
            Vrtc: {
                v: 0
            }
        }
          , P = z.Angl ? z.Angl.v.val : 0
          , Z = -B.x + _.Hrzn.v - 1
          , j = -B.y + _.Vrtc.v - 1;
        if (z.Algn != null && !z.Algn.v) {} else if (p) {
            Z += p.x;
            j += p.y
        }
        if (q)
            N.scale.an3(M, q, B.r, B.$, g, g, Z + 1, j + 1, P * Math.PI / 180);
        else
            return [M, g, Z + 1, j + 1, P * Math.PI / 180]
    }
}
;
a3.Ck = function(z, q, B, a, p, r, k, s) {
    if (r == null)
        r = B;
    var m = z.Type ? z.Type.v.GrdT : "shapeburst"
      , u = z.Algn && z.Algn.v ? r : new c2(0,0,a.r,a.$)
      , g = z.Angl ? N.P0.arB(z, u) : [new fv(0,0), new fv(100,0)]
      , M = g[0].x
      , _ = g[0].y
      , P = g[1].x - M
      , Z = g[1].y - _
      , j = Math.sqrt(P * P + Z * Z);
    j = 1 / (2 * j * j);
    var G = [P * j, Z * j, -Z * j, P * j]
      , F = z.Rvrs ? z.Rvrs.v : !1
      , i = z.Dthr ? z.Dthr.v : !1
      , n = z.gradientsInterpolationMethod;
    if (n == null)
        n = z.gs99;
    var A = n ? n.v.gradientInterpolationMethodType : "Gcls";
    N.P0.GP(z.Grad.v, q, B, G, M, _, F, fp.P0.types.indexOf(m), k == null ? 0 : k, s == null ? 0 : s, p, i, A)
}
;
a3.aCN = function(z, q, B) {
    for (var l = 0; l < z.all.length; l++) {
        var a = z.all[l];
        a.vz = a.dK.P();
        a.vz.offset(q, B)
    }
}
;
a3.aap = function(z, q, B, a, p, r) {
    var k = hx.KV ? a3.adK : a3.aii;
    a3.aCN(q, B.x, B.y);
    var s = q.I.DrSh;
    for (var l = 0; l < s.length; l++)
        if (!s[l].ag_)
            k(s[l], a, p, r)
}
;
a3.aua = function(z, q, B, a, p, r, k, s, m, u, g, M) {
    var _ = hx.KV ? a3.adK : a3.aii, P = hx.KV ? hx.v.XG : N.v.$I, Z;
    Z = q.I.DrSh;
    for (var l = 0; l < Z.length; l++)
        if (Z[l].ag_)
            _(Z[l], a, p, r);
    Z = q.I.St3D;
    for (var l = 0; l < Z.length; l++)
        _(Z[l], a, p, r);
    Z = q.I.OrGl;
    for (var l = 0; l < Z.length; l++)
        _(Z[l], a, p, r);
    var j = "patternFill GrFl SoFi ChFX IrGl IrSh".split(" ");
    for (var G = 0; G < j.length; G++) {
        var Z = q.I[j[G]];
        for (var l = 0; l < Z.length; l++)
            _(Z[l], k, s, r)
    }
    var F = q.I.ebbl[0]
      , i = F != null && F.at1;
    Z = q.I.FrFX;
    for (var l = 0; l < Z.length; l++) {
        var n = Z[l];
        f3.$Z.Mj(m, u, g, M, r);
        _(n, g, M, r);
        if (i && l == Z.length - 1) {
            if (F.fY)
                _(F.fY, g, M, r);
            if (F.U0)
                _(F.U0, g, M, r);
            if (F.Eh)
                _(F.Eh, g, M, r);
            if (F.SV)
                _(F.SV, g, M, r)
        }
        if (n.afr) {
            if (n.Xt || n.af) {
                _(n, k, s, r)
            }
            if (n.u$ || n.yG) {
                _(n, a, p, r)
            }
        } else {
            if (n.Xt || n.af)
                P(g, M, k, s, hx.KV ? n.af : n.Xt, n.vz, 0, r, 1);
            if (n.u$ || n.yG)
                P(g, M, a, p, hx.KV ? n.yG : n.u$, n.vz, 0, r, 1)
        }
    }
    if (!i && F != null) {
        if (F.fY)
            _(F.fY, a, p, r);
        if (F.U0)
            _(F.U0, a, p, r);
        if (F.Eh)
            _(F.Eh, k, s, r);
        if (F.SV)
            _(F.SV, k, s, r)
    }
}
;
a3.aii = function(z, q, B, a) {
    var p = a3.A4();
    p.fill = z.Pv;
    p.style = !0;
    N.v.Oz(z.vW, z.jX, z.vz, q, B, a, 1, p)
}
;
a3.adK = function(z, q, B, a) {
    var p = a3.A4();
    p.fill = z.Pv;
    p.style = !0;
    hx.v.aC7(z.vW, z.Yx, z.vz, q, B, a, 1, p)
}
;
a3.ab6 = function(z) {
    var q = 1 - z.Inpr.v.val / 100;
    return 1 + Math.tan(q * (Math.PI / 2))
}
;
a3.aaI = function(z, q) {
    var B = N.hI(N.Q$(z));
    for (var l = 0; l < z.length; l++)
        z[l] = Math.min(B, z[l] * q)
}
;
a3.zW = function(z, q, B) {
    var a = q.blur.v.val
      , p = Math.round(a * (q.Ckmt.v.val / 100));
    if (a > p)
        a3.aGk(z, q.TrnS.v.Crv.v, B != !0)
}
;
a3.aGk = function(z, q, B) {
    if (q.length == 2) {
        function a(M) {
            return new fv(M.Hrzn.v,M.Vrtc.v)
        }
        var p = a(q[0].v)
          , r = a(q[1].v);
        if (p.x == 0 && p.y == 0 && r.x == 255 && r.y == 255)
            return
    }
    var k = 2048
      , s = N.Q$(z)
      , m = N.hI(s)
      , u = (k - 1) / m
      , g = N.X8.j0(q, k, B, s);
    for (var l = 0; l < z.length; l++)
        z[l] = g[~~(u * z[l])]
}
;
a3.kO = function(z, q, B) {
    var a = q.Nose.v.val / 100
      , p = z
      , r = N.Q$(z)
      , k = N.hI(r)
      , s = r == 32 ? k / 2 : k >>> 1
      , m = r == 32 ? 1 / 65535 : r == 16 ? 1 : 1 / 255;
    if (a > 0) {
        if (B)
            for (var l = 0; l < p.length; l++) {
                var u = p[l];
                if (u > 0)
                    p[l] = Math.max(0, Math.min(k, u + a * 2 * (m * a3.Il(l * 3) - s)))
            }
        else
            for (var l = 0; l < p.length; l++) {
                var u = p[l];
                if (u > 0)
                    p[l] = Math.max(0, Math.min(k, u + Math.min(u * 3, a * 2 * (m * a3.Il(l * 3) - s))))
            }
    }
}
;
a3.tv = function(z, q, B, a) {
    a3.zW(z, q, a);
    a3.kO(z, q, B)
}
;
a3.aar = function(z, q) {
    var B = q.ShdN.v.val / 100;
    if (B > 0)
        for (var l = 0; l < z.length; l++) {
            var a = z[l];
            a = Math.min(510 - (1 + B) * a3.Il(l), a);
            z[l] = a
        }
}
;
a3.Il = function(z) {
    z = z ^ 61 ^ z >> 16;
    z = z + (z << 3);
    z = z ^ z >> 4;
    z = z * 668265261;
    z = z ^ z >> 15;
    return z & 65535
}
;
a3.a1G = function(z, q, B) {
    var a = N.P0.dJ(z);
    if (B != null) {
        a.o = Math.round(a.o * B);
        a.k = Math.round(a.k * B);
        a.X = Math.round(a.X * B)
    }
    return q << 24 | a.X << 16 | a.k << 8 | a.o
}
;
a3._E = function(z, q, B) {
    var a = N.Q$(z);
    if (a == 8)
        new Uint32Array(z.buffer).fill(a3.a1G(q, 255, B));
    else {
        var p = N.P0.dJ(q)
          , r = (B == null ? 1 : B) / 255;
        N.Rv(z, p.o * r, p.k * r, p.X * r);
        N.Me(z, 1)
    }
}
;
a3.ik = function(z, q, B, a, p) {
    var r = q.uglg && q.uglg.v ? B.XB() : q[p ? p : "lagl"].v.val;
    r = r * Math.PI / 180 + a;
    var k = Math.cos(r) * q.Dstn.v.val
      , s = Math.sin(r) * q.Dstn.v.val;
    z.x -= Math.round(k);
    z.y += Math.round(s)
}
;
a3.auV = function(z, q) {
    var B = z.uglg && z.uglg.v ? q.XB() : z.lagl.v.val;
    B = B * (Math.PI / 180);
    var a = z.uglg && z.uglg.v ? q.O6() : z.Lald.v.val;
    a = a * (Math.PI / 180);
    return [B, a]
}
;
a3.aIK = function(z) {
    if (z == null || !z.masterFXSwitch.v)
        return null;
    var q = z.frameFXMulti.v
      , B = null;
    for (var l = 0; l < q.length; l++)
        if (q[l].v.enab.v)
            B = q[l].v;
    if (B == null)
        return null;
    var a = fp.uA.Xo();
    a3.aqE(B, a);
    return a
}
;
a3.aqE = function(z, q) {
    var B = fp.stroke._u.indexOf(z.PntT.v.FrFl)
      , a = [fp.un, fp.bR, fp.ap][B]
      , p = q.strokeStyleContent.v = {
        classID: fp.uA.qq[B]
    };
    for (var l = 0; l < a.length; l++)
        p[a[l]] = z[a[l]];
    q.strokeEnabled = z.enab;
    q.strokeStyleLineWidth = z.Sz;
    q.strokeStyleLineAlignment.v.strokeStyleLineAlignment = fp.uA.ze[fp.stroke.types.indexOf(z.Styl.v.FStl)];
    q.strokeStyleOpacity = z.Opct;
    q.strokeStyleBlendMode = z.Md;
    q.strokeStyleLineJoinType.v.strokeStyleLineJoinType = "strokeStyleRoundJoin"
}
;
a3.cy = function(z, q) {
    var B = [];
    for (var l = 0; l < z.length; l++)
        B.push({
            t: "UntF",
            v: {
                type: "#Nne",
                val: z[l] * q
            }
        });
    return B
}
;
a3.awk = function(z, q) {
    var B = z.dM / 255 * (z.add.iOpa ? z.add.iOpa / 255 : 1)
      , a = z.add.TySh
      , p = z.nq() || z.P8() && z.add.vmsk && z.add.vstk.fillEnabled.v && z.add.vstk.strokeEnabled.v;
    if (a) {
        var r = a.Kw.EngineDict.StyleRun.RunArray
          , k = r[0].StyleSheet.StyleSheetData
          , s = 0;
        if (k.FillFlag)
            s++;
        if (k.StrokeFlag)
            s++;
        if (k._FillBackgroundFlag)
            s++;
        if (s > 1)
            p = !0
    }
    return p && (q || B != 1 || z.bg != "pass" && z.bg != "norm")
}
;
a3.tK = function(z, q, B, a) {
    this._x = q.P();
    this.apv = q.P();
    this.apv.oL(B, B);
    if (a) {
        this._x.oL(1, 1);
        this.a6U = N.j(this._x.C(), N.Q$(z));
        N.Mj(z, q, this.a6U, this._x)
    } else
        this.a6U = z;
    this.YO = null;
    this.Co = null;
    this.lA = null
}
;
a3.tK.prototype.fF = function() {
    return this.a6U
}
;
a3.tK.prototype.S = function() {
    return this._x
}
;
a3.tK.prototype.dv = function() {
    return this.apv
}
;
a3.tK.prototype.rH = function() {
    if (this.YO)
        return this.YO;
    this.YO = this.fF().slice(0);
    N._y(this.YO);
    return this.YO
}
;
a3.tK.prototype.lg = function() {
    if (this.Co)
        return this.Co;
    this.Co = N.style.wy(this.rH(), this.S().r, this.S().$);
    return this.Co
}
;
a3.tK.prototype.Dr = function() {
    if (this.lA)
        return this.lA;
    var z = this.dv()
      , q = N.j(z.C(), N.Q$(this.fF()));
    N.Mj(this.fF(), this.S(), q, z);
    var B = Date.now();
    this.lA = N.style.wy(q, z.r, z.$);
    return this.lA
}
;
a3.tK.prototype.aqM = function(z, q) {
    var B = {
        rl: -q,
        yh: z,
        aB: null,
        gh: null
    };
    if (q == 0) {
        B.aB = this.S();
        B.gh = this.lg();
        return B
    }
    var a = this.Dr().slice(0)
      , p = this.dv();
    B.aB = p;
    B.gh = a;
    for (var l = 0; l < a.length; l++)
        a[l] = -a[l];
    if (z == 0)
        return B;
    var r = this.lg()
      , k = this.S();
    for (var s = 0; s < k.$; s++)
        for (var m = 0; m < k.r; m++) {
            var u = s * k.r + m
              , g = (s + k.y - p.y) * p.r + m + k.x - p.x;
            a[g] += r[u]
        }
    return B
}
;
a3.tK.prototype.oa = function(z, q, B) {
    var a = Math.ceil(z + q)
      , p = {
        QB: this.S().P(),
        fF: null
    };
    p.QB.oL(a, a);
    p.fF = N.j(p.QB.C(), N.Q$(this.fF()));
    if (z == 0 && q == 0)
        N.eG(B ? this.fF() : this.rH(), p.fF);
    else {
        var r = p.fF;
        N.Mj(this.fF(), this.S(), r, p.QB);
        if (!B)
            N._y(r);
        if (z != 0) {
            if (B)
                N.style.J0(r, p.QB, this.Dr(), this.dv(), z);
            else
                N.style.J0(r, p.QB, this.lg(), this.S(), z)
        }
        if (q != 0)
            N.w$.U2(r, p.QB, Math.max(1, q * .43))
    }
    return p
}
;
a3.tK.prototype.a8J = function(z, q, B, a) {
    var p = z * (q - .5)
      , r = 1 / z
      , k = {
        QB: this.S().P(),
        fF: null
    };
    if (B)
        k.QB.oL(z, z);
    var s = N.Q$(this.fF())
      , m = N.hI(s);
    k.fF = N.j(k.QB.C(), s);
    var u = B ? this.Dr() : this.lg()
      , g = B ? this.dv() : this.S()
      , M = k.QB
      , _ = M.ti(g)
      , P = _.r
      , Z = _.$
      , j = _.x - M.x
      , G = _.y - M.y
      , F = _.x - g.x
      , i = _.y - g.y
      , n = 1 - q * 2;
    for (var A = 0; A < Z; A++)
        for (var o = 0; o < P; o++) {
            var c = u[(A + i) * g.r + o + F]
              , x = c * r;
            k.fF[(A + G) * M.r + o + j] = m * Math.max(0, Math.min(1, a * (1 - (x + n) / (1 + n))))
        }
    return k
}
;
a3.a2X = function(z, q, B, a) {
    var p = z.Lefx
      , r = z.blendOptions;
    if (p) {
        var k = q.add.lmfx;
        if (B == null)
            B = k ? k.Scl.v.val : 100;
        q.add.lmfx = N.V(p.v);
        if (q.add.lmfx.Scl == null)
            q.add.lmfx.Scl = {
                t: "UntF",
                v: {
                    type: "#Prc",
                    val: 100
                }
            };
        a3.UP(q.add.lmfx, B / q.add.lmfx.Scl.v.val);
        if (k)
            q.add.lmfx.Scl.v.val = k.Scl.v.val;
        var s = p.v.gagl;
        if (s && a)
            a.i9(s.v.val)
    } else
        delete q.add.lmfx;
    if (r) {
        r = r.v;
        if (r.Md)
            q.bg = iw.PH(r.Md.v.BlnM);
        if (r.Opct)
            q.dM = Math.round(r.Opct.v.val * 255 / 100);
        if (r.fillOpacity)
            q.add.iOpa = Math.round(r.fillOpacity.v.val * 255 / 100);
        if (r.Blnd) {
            var m = [];
            for (var l = 0; l < 10; l++)
                m.push(0, 0, 255, 255);
            var u = r.Blnd.v
              , g = "SrcB Srcl SrcW Srcm DstB Dstl DstW Dstt".split(" ");
            for (var l = 0; l < u.length; l++) {
                var M = u[l].v
                  , _ = 8 * ["Gry", "Rd", "Grn", "Bl"].indexOf(M.Chnl.v[0].v.enum);
                for (var P = 0; P < 8; P++) {
                    m[_ + P] = M[g[P]].v
                }
            }
            q.sU = m
        }
    }
}
;
a3.aE2 = function(z) {
    var q = "SrcB Srcl SrcW Srcm DstB Dstl DstW Dstt".split(" ")
      , B = []
      , a = z.sU;
    for (var l = 0; l < 4; l++) {
        var p = l * 8;
        if (a[p] + a[p + 1] + a[p + 4] + a[p + 5] == 0 && a[p + 2] + a[p + 3] + a[p + 6] + a[p + 7] == 4 * 255)
            continue;
        var r = {
            t: "Objc",
            v: {
                classID: "Blnd",
                Chnl: {
                    t: "obj ",
                    v: [{
                        t: "Enmr",
                        v: {
                            classID: "Chnl",
                            typeID: "Chnl",
                            enum: ["Gry", "Rd", "Grn", "Bl"][l]
                        }
                    }]
                }
            }
        };
        B.push(r);
        for (var k = 0; k < 8; k++)
            r.v[q[k]] = {
                t: "long",
                v: a[l * 8 + k]
            }
    }
    var s = {
        classID: "blendOptions"
    };
    if (z.bg != "norm")
        s.Md = {
            t: "enum",
            v: {
                BlnM: iw.KI(z.bg)
            }
        };
    if (z.dM != 255)
        s.Opct = {
            t: "UntF",
            v: {
                type: "#Prc",
                val: Math.round(z.dM * 100 / 255)
            }
        };
    if (z.add.iOpa != null)
        s.fillOpacity = {
            t: "UntF",
            v: {
                type: "#Prc",
                val: Math.round(z.add.iOpa * 100 / 255)
            }
        };
    if (B.length != 0)
        s.Blnd = {
            t: "VlLs",
            v: B
        };
    var m = {
        MK: {
            classID: "null",
            Idnt: {
                t: "TEXT",
                v: kw.CR() + "-bd9f-11d5-b8ba-b73f8571793d"
            },
            Nm: {
                t: "TEXT",
                v: "Default/Custom Style"
            }
        },
        CL: {
            classID: "Styl",
            blendOptions: {
                t: "Objc",
                v: s
            }
        }
    }
      , u = z.add.lmfx;
    if (u)
        m.CL.Lefx = {
            t: "Objc",
            v: u
        };
    return m
}
;

function f3() {
    this.depth = 0;
    this.index = -1;
    this.f = null;
    this.am_ = null;
    this.r5 = -1;
    this.children = null;
    this.parent = null;
    this.Pw = null
}
f3.prototype.aFi = function(z, q) {
    if (this.depth != 0)
        z.push(this.f.getName());
    if (this.children)
        for (var l = 0; l < this.children.length; l++)
            this.children[l].aFi(z, q);
    if (z.length > q.Z7.length)
        q.Z7 = z.slice(0);
    if (this.depth != 0)
        z.pop()
}
;
f3.prototype.ahR = function() {
    var z = 0;
    if (this.f.nq()) {
        for (var l = 0; l < this.children.length; l++)
            z += this.children[l].ahR()
    } else if (this.f.buffer)
        z += this.f.buffer.length;
    return z
}
;
f3.prototype.aS = function(z) {
    var q = this.Pw[z];
    return this.Pw[z]
}
;
f3.prototype.mg = function(z, q) {
    var B = this.f;
    if (!B.ib() || B.tM(2) || B.tM(31))
        return null;
    if (B.tH()) {
        var a = B.H3.S.co(z);
        if (!a && B.H3.color == 0)
            return
    }
    if (B.nq()) {
        for (var l = 0; l < this.children.length; l++) {
            var cX = this.children[l];
            cX.mg(z, q)
        }
    } else if (d_ == 1) {
        var p = B.$S();
        if (z.co(N.b.fK(p)) && q.indexOf(this.index) == -1)
            q.push(this.index)
    } else if (B.S.co(z))
        q.push(this.index)
}
;
f3.prototype.N8 = function(z, q) {
    var B = this.f;
    if (!B.ib() || B.tM(2) || B.tM(31))
        return null;
    if (B.tH()) {
        if (B.H3.S.rF(z)) {
            if (!N.N8(z, B.H3.G, B.H3.S))
                return null
        } else if (B.H3.color == 0)
            return null
    }
    if (B.nq()) {
        if (B.add.artb && !B.bN().rF(z))
            return null;
        for (var l = this.children.length - 1; l >= 0; l--) {
            var cX = this.children[l]
              , a = cX.N8(z, q);
            if (a && q == null)
                return a
        }
        return null
    } else if (d_ == 1) {
        if (B.add.vmsk) {
            var p = B.add.vstk
              , r = !p.fillEnabled.v && !B.p_
              , k = p.strokeStyleLineWidth.v.val * .5
              , s = N.z.N8(B.add.vmsk.u, z, r, k);
            return s.G_ == -1 ? null : this
        }
        var m = B.$S();
        if (ay.SY(m, z.x, z.y))
            return this
    } else if (B.add.TySh && B.S.rF(z) || N.acy(z, B.buffer, B.S)) {
        if (q == null)
            return this;
        else
            q.push(this.index)
    }
    return null
}
;
f3.prototype.a5q = function(z) {
    var q = this.f;
    if (!q.ib() || q.tM(2) || q.tM(31))
        return null;
    var B = q.add.vmsk;
    if (B && B.isEnabled) {
        var a = N.z.N8(B.u, z).G_;
        if (a != -1)
            return {
                aFX: this,
                aqy: a
            }
    }
    if (q.nq()) {
        if (q.add.artb && !q.bN().rF(z))
            return null;
        for (var l = this.children.length - 1; l >= 0; l--) {
            var cX = this.children[l]
              , p = cX.a5q(z);
            if (p)
                return p
        }
        return null
    }
    return null
}
;
f3.prototype.Oa = function(z, q) {
    z.push(this.index);
    if (this.f.nq()) {
        z.push(this.r5);
        if (q)
            if (this.f.sZ == 1 && this.f.Wp().WR == !1)
                return;
        for (var l = 0; l < this.children.length; l++)
            this.children[l].Oa(z)
    }
}
;
f3.ND = function() {
    var z = document.createElement("canvas");
    return z.getContext("2d")
}
;
f3.amc = function(z, q) {
    var B, a;
    if (z.r > z.$) {
        B = Math.floor(q);
        a = Math.floor(q * (z.$ / z.r))
    } else if (z.r == 0 && z.$ == 0) {
        B = a = q
    } else {
        B = Math.floor(q * (z.r / z.$));
        a = Math.floor(q)
    }
    return new fv(B,a)
}
;
f3.kg = 32;
f3.R1 = 1;
f3.rC = function(z) {
    if (z == 200)
        return "#cccccc";
    if (z == 300)
        return "#ffffff";
    if (z == 500)
        return "#666666";
    var q = "#0080ff #00ffff #4000ff #ff8000 #ffc000 #ffff00 #00dd00 #c000ff #ff4000 #ff0000 #0000ff #ff00ff #80ff00 #00ff80 #8000ff #ff0080".split(" ")
      , B = parseInt(q[z >>> 3].slice(1), 16)
      , a = 0
      , p = z & 7;
    for (var l = 0; l < 3; l++) {
        var r = B >>> l * 8 & 255;
        if (p < 4)
            r = Math.round((1 - (p - 0) / 8) * r + (p - 0) / 8 * 255);
        else
            r = Math.round((1 - (p - 3) / 6) * r + (p - 3) / 6 * 0);
        a |= r << l * 8
    }
    return "#" + a.toString(16).padStart(6, "0")
}
;
f3.prototype.$p = function(z, q, B) {
    var a = f3.R1
      , p = this.f;
    if (p.nq() && p.add.artb != null)
        q = p.bN();
    var r = a == 0 ? p.S : q;
    if (r.su() || p.add.TySh)
        r = q;
    var k = f3.kg * S.NU()
      , s = f3.amc(r, k)
      , m = s.x
      , u = s.y
      , g = f3.amc(q, k)
      , M = cS.get(p.add) != null;
    if (p.P8() && p.add.vmsk == null || p.add.TySh || M)
        m = u = Math.max(u, 16);
    else if (p.nq()) {
        m = u = Math.round(18 * S.NU())
    } else {
        m = Math.max(m, 6);
        u = Math.max(u, 6)
    }
    if (B && p.JZ == null) {
        p.JZ = f3.ND();
        if (d_ == 0) {
            p.ad_ = f3.ND();
            p.a9F = f3.ND();
            p.acP = f3.ND()
        }
    }
    var _ = p.P8() && p.add.vmsk;
    if (d_ == 2 && !p.nq() && p.JZ) {
        N.xx.Cz(p.JZ, m, u);
        p.JZ.fillStyle = f3.rC(p.J.dD);
        p.JZ.fillRect(0, 0, 300, 300)
    } else if (d_ == 1 && !p.nq()) {
        if (B)
            N.xx.afi(p.JZ, m, u, z, this)
    } else if (_) {
        if (B && p.add.vstk)
            N.xx.cd(p.JZ, m, u, r, p.buffer, p.S, !1, null, !p.add.vstk.fillEnabled.v && !p.add.vstk.strokeEnabled.v);
        if (B)
            N.xx.aqF(p.JZ, m, u)
    } else if (p.add.TySh) {
        if (B)
            N.xx.a6b(p.JZ, u, u, p.add.TySh)
    } else if (p.add.SoCo) {
        if (B)
            N.xx.akk(p.JZ, u, u, p.add.SoCo)
    } else if (p.add.GdFl) {
        if (B)
            N.xx.ahL(p.JZ, u, u, p.add.GdFl)
    } else if (p.add.PtFl) {
        if (B)
            N.xx.aBR(p.JZ, u, u, p.add.PtFl, z)
    } else if (M) {
        if (B)
            N.xx.ac9(p.JZ, u, u, p.add)
    } else if (p.add.SoLd) {
        if (B)
            N.xx.cd(p.JZ, m, u, r, p.buffer, p.S, !1);
        if (B)
            N.xx.aCS(p.JZ, m, u, p.add.SoLd)
    } else if (p.nq()) {} else {
        if (B) {
            if (p.bW())
                N.xx.cd(p.JZ, m, u, r, p.buffer, p.S, !1);
            else {
                N.xx.apu(p.JZ, u, u)
            }
        }
    }
    var P = p.Wp();
    if (B) {
        if (P)
            N.xx.Ni(p.ad_, g.x, g.y, q, P);
        if (p._X() && p.Fl(z) && p.Fl(z).H3) {
            var Z = p.Fl(z).H3;
            N.xx.Ni(p.acP, g.x, g.y, q, Z)
        }
        if (!_ && p.add.vmsk) {
            N.xx.Ni(p.a9F, g.x, g.y, q, p.add.vmsk.Wp(), !0)
        }
    }
    if (P || p.add.vmsk)
        u = Math.max(u, g.y);
    p.azC = Math.max(u, 16);
    if (B != !0 && p.nq() && (p.add.lsct == bD.jG || z.U.length < 4e3))
        for (var l = 0; l < this.children.length; l++)
            this.children[l].$p(z, q)
}
;
f3.prototype.aBK = function(z, q, B, a) {
    this.depth = B;
    var p = z[q];
    if (a == null)
        a = [];
    this.Pw = a;
    if (p.add.lsct == bD.Zl) {
        this.am_ = p;
        this.r5 = q - 1;
        this.children = [];
        var l = q + 1;
        while (!0) {
            var r = z[l];
            if (r == null)
                console.log(l, z.length);
            if (r.add.lsct == bD.jG || r.add.lsct == bD.zz) {
                if (p.add.lyid == r.add.lyid)
                    p.add.lyid += 16777215;
                this.f = r;
                this.index = l - 1;
                a[this.index] = this;
                a[q - 1] = this;
                break
            }
            var k = new f3;
            k.parent = this;
            l = k.aBK(z, l, B + 1, a);
            this.children.push(k)
        }
        return l + 1
    } else {
        this.f = p;
        this.index = q - 1;
        a[this.index] = this;
        return q + 1
    }
}
;
f3.prototype.v8 = function(z, q, B, a) {
    var p = this.aS(B)
      , r = z;
    while (p.parent != null) {
        r = p.f.aaT(r, q, a);
        p = p.parent
    }
    return r
}
;
f3.prototype.LP = function(z, q) {
    var B = this.f
      , a = new c2;
    if (!B.ib())
        return a;
    var p = B.Wp();
    if (B.nq())
        for (var l = 0; l < this.children.length; l++) {
            var r = this.children[l].LP(z, !0);
            a = a.Kg(r)
        }
    else if (cS.get(B.add) != null)
        a = B.tH() && B.H3.color == 0 ? B.H3.LP().P() : new c2(0,0,z.r,z.$);
    else if (B.P8() && B.add.vmsk && B.add.vmsk.isEnabled && B.add.vstk) {
        a = B.S.P()
    } else if (B.P8() && p && p.isEnabled && p.dJ() != 0)
        a = new c2(0,0,z.r,z.$);
    else {
        a = B.LP(z, !1, !0);
        if (B.add.vmsk)
            a = N.b.NW(a)
    }
    return q ? B.aaT(a, z) : a
}
;
f3.$Z = {
    delete: function(z) {
        if (z && z.r)
            z.delete()
    },
    j: function(z, q) {
        return hx.KV ? new hx.gM(z,q) : N.j(z * q * 4)
    },
    a9d: function(z, q, B) {
        var a = q.r
          , p = q.$;
        if (z == null || hx.KV && (z.r != a || z.$ != p || z.depth != B) || !hx.KV && (z.length != a * p * 4 || N.Q$(z) != B)) {
            f3.$Z.delete(z);
            return hx.KV ? new hx.gM(a,p,B) : N.j(a * p * 4, B)
        } else
            return z
    },
    Mj: function(z, q, B, a, p) {
        (hx.KV ? hx.b9 : N.ou)(z, q, B, a, p)
    },
    $I: function(z, q, B, a, p, r, k, s, l, m, u) {
        (hx.KV ? hx.v.XG : N.v.$I)(z, q, B, a, p, r, k, s, l, m, u)
    },
    ad$: function(z, q, B, a, p, r, k, s) {
        var m = B.P()
          , u = p.r
          , g = p.$
          , M = m.x
          , _ = m.y
          , P = m.x + m.r > u ? -1 : 0
          , Z = m.x < 0 ? 2 : 1
          , j = m.y + m.$ > g ? -1 : 0
          , G = m.y < 0 ? 2 : 1;
        for (var F = j; F < G; F++)
            for (var i = P; i < Z; i++) {
                m.x = M + i * u;
                m.y = _ + F * g;
                f3.$Z.Oz(z, q, m, a, p, r, k, s)
            }
    },
    Oz: function(z, q, B, a, p, r, k, s) {
        if (hx.KV)
            hx.v.aC7(z, q, B, a, p, r, k, s);
        else
            N.v.Oz(z, q, B, a, p, r, k, s)
    },
    Y8: function(z, q) {
        if (hx.KV) {
            hx.UD(z);
            hx.vq(q)
        } else
            N.mL(z, q)
    },
    NN: function(z) {
        if (hx.KV) {
            hx.UD(z);
            hx.NN()
        } else {
            var q = N.Q$(z)
              , B = q == 8 ? 255 : q == 16 ? 65535 : 1;
            if (q == 8)
                N.Me(z, 1);
            else
                for (var l = 0; l < z.length; l += 4)
                    z[l + 3] = B
        }
    },
    aAG: function(z, q, B, a, p) {
        if (hx.KV) {
            hx.v.XG(null, null, a, p, z, q, B, p, 1, !1)
        } else {
            if (B == 255)
                N.dS(z, q, a, p);
            else {
                var r = N.j(q.C(), N.Q$(z));
                N.Ey(a, p, r, q);
                N.e$(z, r);
                N.Me(a, 0);
                N.asa(r, q, a, p)
            }
        }
    },
    mq: function(z, q, B, a, p) {
        if (hx.KV)
            hx.v.XG(null, null, B, a, z, q, 0, p, 1, !1);
        else
            N.mq(z, q, B, a, p)
    }
};
f3.prototype.kE = function(z, q, B, a, p, r, k) {
    var s = typeof r == "number";
    if (!this.f.nq() && (s && this.index > r || !s && r.indexOf(this.index) == -1)) {
        return
    }
    var m = this.f
      , u = a3.Ov(m)
      , g = f3.$Z
      , M = z.depth;
    if (M == null)
        M = N.Q$(z);
    var _ = m.P8() ? m.Wp() : m.H3;
    if (!m.ib())
        return;
    if (m.tH() && _.S.su() && _.dJ() == 0) {
        return
    }
    if (m.add.vstk == null && this.LP(a, !1).su()) {
        return
    }
    if (m.P8() && m.S.su())
        return;
    var P = this.LP(a, !0).ti(B);
    if (!q.gj(B) && !B.co(P))
        return;
    if (m.nq() && m.add.artb) {
        var Z = m.bN();
        B = B.ti(Z)
    }
    var j = f3.a7f(m, p, u);
    if (!j) {
        this.aHR(z, q, B, a, p, r, k);
        return
    }
    var G = k.IN(P, M)
      , F = G[0]
      , i = G[1];
    g.Mj(z, q, F, i, B);
    this.aHR(F, i, B, a, p, r, k);
    g.$I(F, i, z, q, null, null, 0, B, m.dM / 255, m.bg == "diss", u.Vg);
    k.gl(F)
}
;
f3.a7f = function(z, q, B) {
    if (B.Vg[0] * B.Vg[1] * B.Vg[2] == 0)
        return !0;
    return z.dM != 255 && (q.length != 0 || z.nq() || z.VB())
}
;
f3.prototype.aHR = function(z, q, B, a, p, r, k) {
    var s = this.f
      , m = a3.Ov(s)
      , u = cS.get(s.add) != null
      , g = f3.$Z
      , M = z.depth
      , e = null
      , K = null;
    if (M == null)
        M = N.Q$(z);
    var _ = f3.a7f(s, p, m)
      , P = _ ? 1 : s.dM / 255
      , Z = s.P8() ? s.Wp() : s.H3
      , j = s.nq() && m.JG == null && (s.bg == "pass" || s.add.artb != null) && !(p.length > 0 || m.fill != 1 || s.VB())
      , G = !s.nq() && !u && !s.VB() && p.length == 0
      , F = u && !s.VB() && p.length == 0;
    if (j || G || F) {
        var i = z
          , n = q;
        if (s.tH()) {
            var A = k.IN(this.LP(a, !1), M);
            i = A[0];
            n = A[1];
            g.Mj(z, q, i, n)
        }
        if (j)
            this.kT(i, n, B, a, r, k);
        if (G)
            g.Oz(s.bg, s.a6_(a), s.S, i, n, B, P, m);
        if (F) {
            var o = s.tH() && Z.dJ() == 0 ? Z.LP().P() : n.P()
              , A = k.IN(o, M)
              , c = A[0]
              , x = A[1];
            this.aCo(i, n, c, x, s.add);
            m.Ox = !0;
            g.Oz(s.bg, c, x, i, n, B, P, m);
            k.gl(c)
        }
        if (s.tH()) {
            g.$I(i, n, z, q, s.aB3(), Z.LP(), Z.dJ(), B, 1, s.bg == "diss");
            k.gl(i)
        }
        s.fI.aaK();
        return
    }
    var V = s.nq() && s.bg == "pass" && (p.length > 0 || m.fill != 1 || s.VB())
      , o = s.S;
    if (s.nq()) {
        o = this.LP(a, !1);
        if (o.C() > B.C())
            o = o.ti(new c2(0,0,a.r,a.$));
        K = k.Bc(o, M);
        g.Y8(K, 0);
        this.kT(K, o, s.VB() ? o : o.ti(B), a, r, k)
    } else if (u) {
        o = s.tH() && Z.dJ() == 0 ? Z.LP().P() : q.P()
    } else {
        o = s.S;
        e = s.a6_(a)
    }
    var Q = k.Bc(o, M);
    if (s.nq()) {
        g.Mj(K, o, Q, o, s.VB() ? o : o.ti(B));
        if (!V)
            k.gl(K)
    } else if (u) {
        g.Y8(Q, 4294967295)
    } else {
        g.Mj(e, o, Q, o)
    }
    if (s.tH())
        g.aAG(s.aB3(), Z.LP(), Z.dJ(), Q, o);
    if (s.VB())
        if (s.fI.pz || s.fI.yS || s.fI.IE != hx.KV || s.fI.sh || s.nq()) {
            var E = s.add.vmsk
              , y = N.j(o.C(), M);
            if (a3.a9p(s.add.lmfx)) {
                if (hx.KV) {
                    if (!s.nq() && s.Wp() == null && s.S.gj(o) && E == null)
                        N.M4(s.buffer, y, 3);
                    else {
                        var U = N.j(o.C() * 4, M);
                        Q.get(U);
                        N.M4(U, y, 3)
                    }
                } else
                    N.M4(Q, y, 3)
            }
            if (s.fI.yS || s.fI.IE != hx.KV || !N.gj(y, s.fI.dZ)) {
                var R = null;
                if (s.P8() && E && E.isEnabled && E.Wp().color == 0)
                    R = E.Wp().S;
                a3.arh(s.fI.qJ);
                s.fI.qJ = a3.a49(y, o, s.add.lmfx, s.add.fxrp, a, R);
                s.fI.dZ = y;
                s.fI.a81 = o
            }
        }
    if (s.VB())
        a3.aap(s.add.lmfx, s.fI.qJ, o, z, q, B);
    var A = k.IN(o, M)
      , d = A[0]
      , v = A[1];
    if (s.nq()) {
        g.Y8(d, 0);
        if (s.bg == "pass")
            g.Mj(z, q, d, v);
        if (V) {
            g.mq(K, o, d, v, s.VB() ? o : o.ti(B));
            k.gl(K)
        }
        this.kT(d, v, B, a, r, k)
    } else if (u) {
        this.aCo(z, q, d, v, s.add)
    } else {
        g.Mj(e, o, d, v, B)
    }
    g.NN(d);
    for (var l = 0; l < p.length; l++)
        p[l].kE(d, v, B, a, [], r, k);
    var A = k.IN(o, M)
      , b = A[0]
      , L = A[1];
    g.Mj(z, q, b, L, B);
    if (u)
        m.Ox = !0;
    g.Oz(s.bg == "pass" ? "norm" : s.bg, d, v, b, L, B, 1, m);
    k.gl(d);
    if (s.VB()) {
        var Y = s.fI.qJ.I.FrFX
          , w = null
          , D = null
          , h = null
          , f = null
          , H = null;
        if (Y.length != 0) {
            w = Y[0];
            for (var l = 0; l < Y.length; l++)
                if (Y[l].vz.r > w.vz.r)
                    w = Y[l];
            var A = k.IN(w.vz, M);
            D = A[0];
            h = A[1];
            var A = k.IN(w.vz, M);
            f = A[0];
            H = A[1];
            g.Mj(z, q, D, h, B)
        }
        a3.aua(s.add.lmfx, s.fI.qJ, o, z, q, B, b, L, D, h, f, H);
        k.gl(D);
        k.gl(f)
    }
    g.$I(b, L, z, q, Q, o, 0, B, 1, s.bg == "diss");
    s.fI.aaK();
    k.gl(Q);
    k.gl(b)
}
;
f3.prototype.aCo = function(z, q, B, a, p) {
    var r = cS.get(p), k;
    if (r)
        k = cS.Yr(r, p[r]);
    var s = N.Q$(z)
      , m = f3.$Z;
    if (!(hx.KV && q.gj(a)))
        m.Mj(z, q, B, a);
    if (k) {
        if (hx.KV) {
            var u = a.P();
            u.x = u.y = 0;
            if (q.gj(a)) {
                hx.UD(B, u);
                cS.nS(k, z.GQ, u)
            } else {
                hx.UD(B, u);
                B.Ys(u);
                cS.nS(k, B.dn, u)
            }
        } else
            cS.UK(k, B, B, a)
    }
    return B
}
;
f3.prototype.kT = function(z, q, B, a, p, r) {
    var k = q.r
      , s = q.$
      , m = q.x
      , u = q.y
      , cX = B
      , g = cX.x
      , M = cX.y
      , _ = -1
      , P = -1
      , Z = 2
      , j = 2
      , F = !1;
    if (!a.IK) {
        _ = P = 0;
        Z = j = 1
    }
    var G = this.children;
    for (var l = 0; l < G.length; l++) {
        if (!G[l].f.YG)
            F = !0;
        if (!F)
            continue;
        var i = cS.get(G[l].f.add) != null
          , n = [];
        for (var A = l + 1; A < G.length; A++)
            if (G[A].f.YG)
                n.push(G[A]);
            else
                break;
        for (var o = P; o < j; o++)
            for (var c = _; c < Z; c++) {
                q.x = m + c * k;
                q.y = u + o * s;
                cX.x = g + c * k;
                cX.y = M + o * s;
                if ((c != 0 || o != 0) && i)
                    continue;
                G[l].kE(z, q, cX, a, n, p, r)
            }
        l += n.length
    }
    q.x = m;
    q.y = u;
    cX.x = g;
    cX.y = M
}
;

N.Pz = function (z, q, B) {
    var a = N.Q$(z)
        , p = z.length;
    if (a == q)
        return z;
    if (B == null)
        B = N.j(p, q);
    if (q == 8) {
        if (a == 16)
            for (var l = 0; l < p; l++)
                B[l] = z[l] >>> 8;
        if (a == 32)
            for (var l = 0; l < p; l++)
                B[l] = Math.min(255, ~~(.5 + 255 * z[l]))
    } else if (q == 16) {
        if (a == 8)
            for (var l = 0; l < p; l++)
                B[l] = z[l] << 8 | z[l];
        if (a == 32)
            for (var l = 0; l < p; l++)
                B[l] = Math.min(65535, 65535 * z[l])
    } else if (q == 32) {
        if (a == 8)
            for (var l = 0; l < p; l++)
                B[l] = z[l] * (1 / 255);
        if (a == 16)
            for (var l = 0; l < p; l++)
                B[l] = z[l] * (1 / 65535)
    }
    return B
}
N.Q$ = function (z) {
    if (z instanceof hx.gM)
        return z.depth;
    return z instanceof Float32Array ? 32 : z instanceof Uint16Array ? 16 : 8
}

N.j = function (z, q) {
    if (q == null)
        q = 8;
    var B = q == 8 ? Uint8Array : q == 16 ? Uint16Array : Float32Array;
    if (q == 8)
        z = N.ahn(z);
    if (q == 16)
        z += z & 1;
    try {
        var a = new B(z)
    } catch (dj) {
        alert("Not enough RAM! (need " + Math.round(z / (1 << 20)) + " MB)", 7e3);
        throw "low_ram"
    }
    return a
}
N.hI = function (z) {
    return z == 8 ? 255 : z == 16 ? 65535 : 1
}
N.Mj = function (z, q, B, a, p) {
    var r = q.ti(a);
    if (p)
        r = r.ti(p);
    var k = Math.max(0, r.x - q.x)
        , s = Math.max(0, r.x - a.x)
        , m = Math.max(0, r.y - q.y)
        , u = Math.max(0, r.y - a.y)
        , g = r.r
        , M = r.$
        , _ = N.Q$(z)
        , P = N.Q$(B);
    if (_ != P)
        throw "e";
    var Z = _ >>> 3
        , j = new Uint8Array(B.buffer);
    for (var l = 0; l < M; l++) {
        var G = (m + l) * q.r + k
            , F = (u + l) * a.r + s;
        j.set(new Uint8Array(z.buffer, G * Z, g * Z), F * Z)
    }
}
N.style.wy = function (z, q, B) {
    z = N.Pz(z, 8);
    var a = q * B
        , p = new ArrayBuffer((a + q * 4) * 4)
        , r = new Float32Array(p, 0, a)
        , k = new Uint16Array(p, 0, a << 1)
        , s = new Int32Array(p, a * 4, q)
        , m = new Int32Array(p, (a + q) * 4, q)
        , u = new Int32Array(p, (a + q * 2) * 4, q)
        , g = new Int32Array(p, (a + q * 3) * 4, q)
        , M = 1 / 255;
    for (let l = 0; l < q; ++l) {
        let _ = -B - q
            , P = 0
            , Z = l
            , j = 0;
        for (; j < B; ++j,
            Z += q) {
            if (z[Z] > 128)
                _ = j,
                    P = z[Z];
            k[Z << 1] = j - _;
            k[(Z << 1) + 1] = P
        }
        _ = k[Z += Z - q - q],
            P = k[Z + 1];
        for (; j > 1; --j) {
            if (k[Z -= q + q] > _)
                k[Z] = ++_,
                    k[Z + 1] = P;
            else
                _ = k[Z],
                    P = k[Z + 1]
        }
    }
    for (let G = 0; G < a; G += q) {
        var F = G + q
            , i = k[G << 1] * k[G << 1]
            , n = 0;
        let A = s[0] = G
            , o = m[0] = G
            , c = i
            , x = c;
        for (let Z = G + 1; Z < F; ++Z) {
            var V = k[Z << 1] * k[Z << 1];
            while (n && x > (o - Z) * (o - Z) + V) {
                o = m[--n],
                    A = s[n],
                    c = k[A << 1] * k[A << 1],
                    x = (o - A) * (o - A) + c
            }
            if (n || x <= (o - Z) * (o - Z) + V) {
                var e = Z - A
                    , K = G + Math.floor((e * (Z + A - G - G) + V - c) / (e << 1)) + 1;
                if (K < F) {
                    o = m[++n] = K,
                        A = s[n] = Z,
                        c = V,
                        x = (o - A) * (o - A) + c
                }
            } else
                o = G,
                    A = s[0] = Z,
                    c = V,
                    x = (o - A) * (o - A) + c
        }
        for (let l = 0; l < n; ++l) {
            var Q = s[l] << 1;
            u[l] = k[Q] * k[Q];
            g[l] = k[Q + 1]
        }
        let E = .5 - k[(s[n] << 1) + 1] * M;
        for (let Z = F - 1; Z >= G; --Z) {
            r[Z] = Math.max(0, Math.sqrt((Z - A) * (Z - A) + c) + E);
            if (n && Z == o) {
                o = m[--n],
                    A = s[n],
                    c = u[n],
                    E = .5 - g[n] * M
            }
        }
    }
    return r
}

N.P0 = function () {
    function z(A, o) {
        var c = ~~(.499 + A * o);
        return c < 0 ? 0 : (c > o ? o : c) << 2
    }
    function q(A, o, c, x, V, e, K, Q) {
        var E = c[0]
            , y = c[1]
            , U = c[2]
            , R = c[3]
            , d = x.r
            , v = x.$
            , b = new Uint32Array(1)
            , L = new Uint8Array(b.buffer)
            , O = Math.round(Math.random() * x.C() * 100);
        for (var Y = 0, l = 0; Y < v; Y++) {
            for (var w = 0; w < d; w++,
                l++) {
                var D = w + V
                    , h = Y + e
                    , f = E * D + y * h
                    , H = U * D + R * h
                    , X = 0;
                if (Q == 0)
                    X = f + .5;
                else if (Q == 1)
                    X = 2 * Math.sqrt(f * f + H * H);
                else if (Q == 2)
                    X = (Math.PI + Math.atan2(-H, -f)) / (2 * Math.PI);
                else if (Q == 3)
                    X = Math.abs(f * 2);
                else if (Q == 4)
                    X = 2 * (Math.abs(f) + Math.abs(H));
                var I = z(X, K)
                    , i_ = w * 4;
                b[0] = N.v.HS(l + O);
                for (var W = 0; W < 4; W++) {
                    var $ = o[I + W] * 255
                        , J = Math.floor($);
                    if (L[W] < ($ - J) * 255)
                        J++;
                    A[(l << 2) + W] = J
                }
            }
        }
    }
    function B(A, l, o, c, x) {
        var V = l << 2;
        A[V] = o[c] * x;
        A[V + 1] = o[c + 1] * x;
        A[V + 2] = o[c + 2] * x;
        A[V + 3] = o[c + 3] * x
    }
    var a = [function (A, o, c, x, V, e, K, Q) {
        var E = c[0]
            , y = c[1]
            , U = c[2]
            , R = c[3]
            , d = x.r
            , v = x.$;
        for (var b = 0, l = 0; b < v; b++)
            for (var L = 0; L < d; L++,
                l++) {
                var O = L + V
                    , Y = b + e
                    , w = E * O + y * Y
                    , D = U * O + R * Y
                    , h = w + .5;
                B(A, l, o, z(h, K), Q)
            }
    }
        , function (A, o, c, x, V, e, K, Q) {
            var E = c[0]
                , y = c[1]
                , U = c[2]
                , R = c[3]
                , d = x.r
                , v = x.$;
            for (var b = 0, l = 0; b < v; b++)
                for (var L = 0; L < d; L++,
                    l++) {
                    var O = L + V
                        , Y = b + e
                        , w = E * O + y * Y
                        , D = U * O + R * Y
                        , h = 2 * Math.sqrt(w * w + D * D);
                    B(A, l, o, z(h, K), Q)
                }
        }
        , function (A, o, c, x, V, e, K, Q) {
            var E = c[0]
                , y = c[1]
                , U = c[2]
                , R = c[3]
                , d = x.r
                , v = x.$;
            for (var b = 0, l = 0; b < v; b++)
                for (var L = 0; L < d; L++,
                    l++) {
                    var O = L + V
                        , Y = b + e
                        , w = E * O + y * Y
                        , D = U * O + R * Y
                        , h = (Math.PI + Math.atan2(-D, -w)) / (2 * Math.PI);
                    B(A, l, o, z(h, K), Q)
                }
        }
        , function (A, o, c, x, V, e, K, Q) {
            var E = c[0]
                , y = c[1]
                , U = c[2]
                , R = c[3]
                , d = x.r
                , v = x.$;
            for (var b = 0, l = 0; b < v; b++)
                for (var L = 0; L < d; L++,
                    l++) {
                    var O = L + V
                        , Y = b + e
                        , w = E * O + y * Y
                        , D = U * O + R * Y
                        , h = Math.abs(w * 2);
                    B(A, l, o, z(h, K), Q)
                }
        }
        , function (A, o, c, x, V, e, K, Q) {
            var E = c[0]
                , y = c[1]
                , U = c[2]
                , R = c[3]
                , d = x.r
                , v = x.$;
            for (var b = 0, l = 0; b < v; b++)
                for (var L = 0; L < d; L++,
                    l++) {
                    var O = L + V
                        , Y = b + e
                        , w = E * O + y * Y
                        , D = U * O + R * Y
                        , h = 2 * (Math.abs(w) + Math.abs(D));
                    B(A, l, o, z(h, K), Q)
                }
        }
    ];
    function p(A, o, c, x, V, e, K, Q, E, y, U, R, d) {
        var v = 1023
            , b = s(A, v + 1, K, E, y, d)
            , L = N.Q$(o)
            , O = N.hI(L);
        if (L == 8 && R && A.Clrs) {
            q(o, b, x, c, c.x - V, c.y - e, v, Q)
        } else if (Q < 5) {
            a[Q](o, b, x, c, c.x - V, c.y - e, v, O)
        } else {
            var Y = N.Pz(b, L)
                , w = c.r
                , D = c.$
                , h = U.yh
                , f = U.rl
                , H = h - f
                , X = 1 / H
                , I = U.aB.r - c.r >> 1
                , i_ = U.aB.$ - c.$ >> 1
                , W = U.aB.r;
            for (var $ = 0, l = 0; $ < D; $++)
                for (var J = 0; J < w; J++,
                    l += 4) {
                    var bV = ($ + i_) * W + J + I
                        , bh = (U.gh[bV] - f) * X
                        , j1 = Math.max(0, Math.min(v, Math.round(bh * v))) << 2;
                    o[l] = Y[j1];
                    o[l + 1] = Y[j1 + 1];
                    o[l + 2] = Y[j1 + 2];
                    o[l + 3] = Y[j1 + 3]
                }
        }
    }
    function r(A, o, c) {
        var x = [A.Clrs.v, A.Trns.v]
            , V = [[], []]
            , e = 255;
        for (var K = 0; K < 2; K++)
            for (var l = 0; l < x[K].length; l++) {
                var Q, E = x[K][l].v;
                if (K == 0) {
                    var y = E.Type.v.Clry;
                    if (y == "FrgC")
                        Q = {
                            o: o >> 16 & 255,
                            k: o >> 8 & 255,
                            X: o & 255
                        };
                    else if (y == "BckC")
                        Q = {
                            o: c >> 16 & 255,
                            k: c >> 8 & 255,
                            X: c & 255
                        };
                    else
                        Q = k(E.Clr.v)
                } else {
                    Q = E.Opct.v.val * (255 / 100);
                    if (Q < e)
                        e = Q
                }
                V[K].push([Q, E.Lctn.v / 4096, E.Mdpn.v / 100])
            }
        V.push(e > 254);
        return V
    }
    function k(A) {
        var o, c = A.classID;
        if (c == "RGBC") {
            if (A.Rd)
                o = {
                    o: A.Rd.v,
                    k: A.Grn.v,
                    X: A.Bl.v
                };
            else
                o = {
                    o: A.redFloat.v * 255,
                    k: A.greenFloat.v * 255,
                    X: A.blueFloat.v * 255
                };
            o.o = Math.max(o.o, 0);
            o.k = Math.max(o.k, 0);
            o.X = Math.max(o.X, 0)
        } else if (c == "HSBC") {
            o = N.AG(A.H.v.val / 360, A.Strt.v / 100, A.Brgh.v / 100);
            o.o *= 255;
            o.k *= 255;
            o.X *= 255
        } else if (c == "CMYC") {
            var x = A.Cyn.v
                , V = A.Mgnt.v
                , e = A.Ylw.v
                , K = A.Blck.v
                , Q = [x / 100, V / 100, e / 100, K / 100]
                , E = N.l9(Q);
            o = {
                o: E[0] * 255,
                k: E[1] * 255,
                X: E[2] * 255
            }
        } else if (c == "Grsc")
            o = {
                o: 255 - A.Gry.v,
                k: 255 - A.Gry.v,
                X: 255 - A.Gry.v
            };
        else if (c == "LbCl") {
            o = N.Bi(A.Lmnc.v, A.A.v, A.B.v)
        } else if (c == "BkCl")
            o = {
                o: 0,
                k: 0,
                X: 0
            };
        else
            console.log(A);
        if (isNaN(o.o))
            o.o = o.k = o.X = 0;
        return o
    }
    function s(A, o, c, x, V, e) {
        if (e == null)
            e = "Gcls";
        var K;
        if (A.Clrs) {
            K = r(A, x, V);
            for (var l = 0; l < K[0].length; l++) {
                var Q = K[0][l][0];
                if (e == "Lnr") {
                    Q.o = 255 * N.ao(Q.o / 255);
                    Q.k = 255 * N.ao(Q.k / 255);
                    Q.X = 255 * N.ao(Q.X / 255)
                }
                if (e == "Perc" || e == "Smoo") {
                    var E = N.Mw(Q.o, Q.k, Q.X);
                    Q.o = E.Rq * 2.55;
                    Q.k = 127.5 + E.u0;
                    Q.X = 127.5 + E.X
                }
            }
        }
        var y = A.Clrs ? g(A, K, o, c) : m(A, o, c);
        if (A.Clrs && e != "Gcls") {
            var U = 1 / 255
                , R = K[0]
                , d = K[1];
            for (var l = 0; l < y.length; l += 4) {
                if (e == "Lnr") {
                    y[l] = N.cl(y[l]);
                    y[l + 1] = N.cl(y[l + 1]);
                    y[l + 2] = N.cl(y[l + 2])
                }
                if (e == "Perc" || e == "Smoo") {
                    var v = y[l] * 100
                        , b = (y[l + 1] - .5) * 255
                        , L = (y[l + 2] - .5) * 255
                        , O = N.Bi(v, b, L);
                    y[l] = O.o * U;
                    y[l + 1] = O.k * U;
                    y[l + 2] = O.X * U
                }
                if (e == "stripes") {
                    var Y = 0;
                    while (Y < R.length - 1 && R[Y + 1][1] * o < l >>> 2)
                        Y++;
                    var O = R[Y][0];
                    y[l] = O.o * U;
                    y[l + 1] = O.k * U;
                    y[l + 2] = O.X * U;
                    Y = 0;
                    while (Y < d.length - 1 && d[Y + 1][1] * o < l >>> 2)
                        Y++;
                    y[l + 3] = d[Y][0] * U
                }
            }
        }
        return y
    }
    function m(A, o, c) {
        var x = new Uint32Array(o)
            , V = new Uint8Array(x.buffer);
        x.fill(4278190080);
        var e = []
            , K = []
            , Q = A.RndS.v
            , E = A.Smth.v / 4096;
        for (var l = 0; l < 4; l++) {
            e[l] = ~~(A.Mnm.v[l].v * 255 / 100);
            K[l] = ~~(A.Mxm.v[l].v * 255 / 100)
        }
        var y = N.j(o * 4)
            , U = N.j(o);
        for (var R = 0; R < 3; R++) {
            N.O.alx(null, o, 1, y, [1 + Math.round(E * E * E * 60), 22, Q * (2 + R)]);
            N.M4(y, U, 0);
            N.OE(U, V, R);
            var d = e[R]
                , v = K[R];
            for (var l = 0; l < o; l++)
                V[4 * l + R] = Math.max(d, Math.min(v, V[4 * l + R]))
        }
        if (c)
            for (var l = 0; l < o / 2; l++) {
                var b = x[l];
                x[l] = x[o - 1 - l];
                x[o - 1 - l] = b
            }
        return N.Pz(V, 32)
    }
    function u(A) {
        return {
            classID: "RGBC",
            Rd: {
                t: "doub",
                v: A.o
            },
            Grn: {
                t: "doub",
                v: A.k
            },
            Bl: {
                t: "doub",
                v: A.X
            }
        }
    }
    function g(A, o, c, x) {
        var V = new Float32Array(c * 4)
            , e = 1 / (c - 0);
        for (var l = 0; l < c; l++) {
            var K = l * 4
                , Q = M(A, o, (x ? c - 1 - l : l) * e);
            V[K] = Q[0];
            V[K + 1] = Q[1];
            V[K + 2] = Q[2];
            V[K + 3] = Q[3]
        }
        return V
    }
    function M(A, o, c) {
        var x = A.Intr.v * (1 / 4096)
            , V = o[0]
            , e = o[1]
            , K = V.length - 1
            , Q = e.length - 1
            , l = -1
            , E = 0
            , y = 0
            , U = 0
            , R = 0;
        if (o[2])
            E = 255;
        else {
            while (l < Q && e[l + 1][1] <= c)
                l++;
            if (l == -1) {
                E = e[0][0]
            } else if (l == Q) {
                E = e[l][0]
            } else {
                var d = P(e, l, c, x);
                E = d * e[l][0] + (1 - d) * e[l + 1][0]
            }
        }
        l = -1;
        while (l < K && V[l + 1][1] <= c)
            l++;
        if (l == -1) {
            var v = V[0][0];
            y = v.o;
            U = v.k;
            R = v.X
        } else if (l == K) {
            var v = V[l][0];
            y = v.o;
            U = v.k;
            R = v.X
        } else {
            var b = V[l][0]
                , L = V[l + 1][0]
                , O = P(V, l, c, x);
            y = Math.min(255, O * b.o + (1 - O) * L.o);
            U = Math.min(255, O * b.k + (1 - O) * L.k);
            R = Math.min(255, O * b.X + (1 - O) * L.X)
        }
        return [y * (1 / 255), U * (1 / 255), R * (1 / 255), E * (1 / 255)]
    }
    function _(A, o, c) {
        var x = M(A, o, c)
            , V = ~~(.5 + x[0] * 255)
            , e = ~~(.5 + x[1] * 255)
            , K = ~~(.5 + x[2] * 255)
            , Q = ~~(.5 + x[3] * 255);
        return Q << 24 | K << 16 | e << 8 | V
    }
    function P(A, l, o, c) {
        if (A.length == 2)
            c *= .5;
        var x = A[l][1], V = A[l + 1][1], e = x + A[l + 1][2] * (V - x), K;
        if (o < e)
            K = .5 * (o - x) / (e - x);
        else
            K = .5 + .5 * (o - e) / (V - e);
        K = .5 + .5 * (c * Math.cos(Math.PI * K) + (1 - c) * (1 - 2 * K));
        return K
    }
    function Z(A, o, c) {
        var x = .5 * c.$
            , V = x * (A / o)
            , e = Math.sqrt(x * x + V * V)
            , K = .5 * c.r
            , Q = K * (o / A)
            , E = Math.sqrt(K * K + Q * Q);
        return Math.min(e, E)
    }
    function j(A, o) {
        var c = Math.PI * A.Angl.v.val / 180
            , x = A.Scl.v.val / 100
            , V = A.Ofst.v
            , e = V.Hrzn.v.val / 100
            , K = V.Vrtc.v.val / 100
            , Q = Math.cos(c)
            , E = -Math.sin(c)
            , y = Z(Q, E, o)
            , U = y * x
            , R = o.x + o.r / 2 + e * o.r
            , d = o.y + o.$ / 2 + K * o.$;
        return [new fv(R, d), new fv(R + Q * U, d + E * U)]
    }
    function G(A, o, c, x) {
        var V = o.x - A.x
            , e = -(o.y - A.y)
            , K = Math.sqrt(V * V + e * e)
            , Q = Math.atan2(e, V)
            , E = Math.cos(Q)
            , y = -Math.sin(Q)
            , U = Z(E, y, c)
            , R = K / U
            , d = (A.x - c.x - c.r / 2) / c.r
            , v = (A.y - c.y - c.$ / 2) / c.$;
        x.Angl.v.val = 180 * Q / Math.PI;
        x.Scl.v.val = R * 100;
        var b = x.Ofst.v;
        b.Hrzn.v.val = d * 100;
        b.Vrtc.v.val = v * 100
    }
    function F(A, o) {
        for (var l = 0; l < A.length; l++) {
            var c = A[l]
                , x = Math.round(c[0] * 4096)
                , V = c[1]
                , e = c[2]
                , K = A[Math.max(0, l - 1)][3];
            if (e == null)
                e = 1;
            if (K == null)
                K = .5;
            var Q = u({
                o: V[0] * 255,
                k: V[1] * 255,
                X: V[2] * 255
            });
            o.Clrs.v[l] = {
                t: "Objc",
                v: {
                    classID: "Clrt",
                    Lctn: {
                        t: "long",
                        v: x
                    },
                    Mdpn: {
                        t: "long",
                        v: Math.round(K * 100)
                    },
                    Clr: {
                        t: "Objc",
                        v: Q
                    },
                    Type: {
                        t: "enum",
                        v: {
                            Clry: "UsrS"
                        }
                    }
                }
            };
            o.Trns.v[l] = {
                t: "Objc",
                v: {
                    classID: "TrnS",
                    Lctn: {
                        t: "long",
                        v: x
                    },
                    Mdpn: {
                        t: "long",
                        v: Math.round(K * 100)
                    },
                    Opct: {
                        t: "UntF",
                        v: {
                            type: "#Prc",
                            val: Math.round(e * 100)
                        }
                    }
                }
            }
        }
    }
    function i(A, o, c) {
        if (o) {
            A = N.V(A);
            for (var l = 0; l < 2; l++) {
                var x = A[l == 0 ? "Clrs" : "Trns"].v;
                for (var V = 0; V < x.length; V++)
                    x[V].v.Lctn.v = 4096 - x[V].v.Lctn.v;
                x.reverse()
            }
        }
        var e = []
            , K = 1 / 255
            , Q = A.Clrs.v
            , E = A.Trns.v
            , x = Q;
        if (d_ == 0 || Q.length != E.length) {
            if (d_ != 0)
                console.log("strange gradient");
            if (c != !0)
                x = Q.concat(E);
            var y = r(A, 0, 0);
            for (var l = 0; l < x.length; l++) {
                var U = x[l].v
                    , R = U.Lctn.v / 4096
                    , d = M(A, y, R);
                e.push([R, [d[0], d[1], d[2]], d[3], U.Mdpn.v / 100])
            }
            e.sort(function (b, L) {
                return b[0] - L[0]
            });
            for (var l = 1; l < e.length; l++)
                if (e[l][0] - e[l - 1][0] < .001) {
                    e.splice(l, 1);
                    l--
                }
        } else {
            for (var l = 0; l < x.length; l++) {
                var U = Q[l].v
                    , v = U.Clr.v
                    , R = U.Lctn.v / 4096;
                e.push([R, [v.Rd.v * K, v.Grn.v * K, v.Bl.v * K], E[l].v.Opct.v.val / 100, Q[Math.min(l + 1, Q.length - 1)].v.Mdpn.v / 100])
            }
        }
        return e
    }
    function n(A, o) {
        function c(A, K) {
            A.addColorStop(K[0], CSS.aqG(K[1], K[2]))
        }
        function x(K, Q, E, y) {
            var U = Math.log(.5) / Math.log(y)
                , R = Math.log(.5) / Math.log(1 - y)
                , d = y > .5 ? Math.pow(E, U) : 1 - Math.pow(1 - E, R)
                , v = 1 - d
                , b = K[0]
                , L = K[1]
                , O = Q[1]
                , Y = [b + (Q[0] - b) * E, [L[0] * v + O[0] * d, L[1] * v + O[1] * d, L[2] * v + O[2] * d], K[2] * v + Q[2] * d];
            return Y
        }
        c(A, o[0]);
        for (var l = 1; l < o.length; l++) {
            var V = o[l - 1][3];
            if (V != .5)
                for (var e = 1; e < 20; e++)
                    c(A, x(o[l - 1], o[l], e / 20, V));
            c(A, o[l])
        }
    }
    return {
        GP: p,
        XQ: u,
        dJ: k,
        amT: s,
        MR: G,
        arB: j,
        L8: n,
        dU: F,
        aq$: i,
        awU: r,
        qR: _
    }
}();
N.Rv = function (z, q, B, a) {
    var p = N.Q$(z)
        , r = N.hI(p)
        , k = z.length
        , s = Math.round(q * r)
        , m = Math.round(B * r)
        , u = Math.round(a * r);
    if (p == 8)
        for (var l = 0; l < k; l += 4) {
            z[l] = s;
            z[l + 1] = m;
            z[l + 2] = u
        }
    if (p == 16)
        for (var l = 0; l < k; l += 4) {
            z[l] = s;
            z[l + 1] = m;
            z[l + 2] = u
        }
    if (p == 32)
        for (var l = 0; l < k; l += 4) {
            z[l] = q * r;
            z[l + 1] = B * r;
            z[l + 2] = a * r
        }
}
N.Me = function (z, q) {
    var B = N.Q$(z)
        , a = N.hI(B)
        , p = z.length
        , r = Math.round(q * a);
    if (B == 8)
        for (var l = 0; l < p; l += 4) {
            z[l + 3] = r
        }
    if (B == 16)
        for (var l = 0; l < p; l += 4) {
            z[l + 3] = r
        }
    if (B == 32)
        for (var l = 0; l < p; l += 4) {
            z[l + 3] = q * a
        }
}
N.eG = function (z, q) {
    var B = Math.min(z.buffer.byteLength, q.buffer.byteLength)
        , a = B >>> 2
        , p = new Uint32Array(z.buffer, 0, a)
        , r = new Uint32Array(q.buffer, 0, a);
    r.set(p)
}
N.scale = {};
N.scale.rK = document.createElement("canvas");
N.scale.AE = N.scale.rK.getContext("2d");
N.scale.UN = function (z, q, B) {
    var a = N.scale.rK
        , p = N.scale.AE;
    a.width = q;
    a.height = B;
    var r = new ImageData(new Uint8ClampedArray(z.buffer), q, B);
    p.putImageData(r, 0, 0);
    return p.createPattern(p.canvas, "repeat")
}
    ;
N.scale.an3 = function (z, q, B, a, p, r, k, s, m) {
    var u = N.scale.aG6(z, B, a, p, r, k, s, m);
    if (q) {
        q.set(N.Pz(u, N.Q$(q)))
    }
    return new Uint8Array(u.buffer)
}
    ;
N.scale.aG6 = function (z, q, B, a, p, r, k, s) {
    var m = N.oJ(q, B);
    m.save();
    m.beginPath();
    m.rect(0, 0, q, B);
    m.translate(r, k);
    m.scale(a, p);
    if (s != null)
        m.rotate(-s);
    m.fillStyle = z;
    m.fill();
    m.restore();
    return new Uint8Array(m.getImageData(0, 0, q, B).data.buffer)
}
    ;
N.scale.M = function (z, q, B, a, p) {
    var r = N.Q$(z)
        , k = B.X == 0 && B.gT == 0
        , s = p.r
        , m = p.$
        , u = N.b.nj(q, B).L
        , g = N.b.hX(u, k).ti(p)
        , M = g.x
        , _ = g.y
        , P = M + g.r
        , Z = _ + g.$
        , j = ~~q.x
        , G = ~~q.y
        , F = ~~q.r
        , i = ~~q.$;
    if (B.u0 * (P - 1 + .5) + B.RG - j > F)
        P--;
    if (k && r == 8)
        for (var n = _; n < Z; n++) {
            var A = B.Tx * (n + .5) + B.Gq - G
                , o = ~~A * F;
            for (var c = M; c < P; c++) {
                var x = B.u0 * (c + .5) + B.RG - j
                    , l = o + ~~x;
                a[n * s + c] = z[l]
            }
        }
    else if (k)
        for (var n = _; n < Z; n++) {
            var A = B.Tx * (n + .5) + B.Gq - G
                , o = ~~A * F;
            for (var c = M; c < P; c++) {
                var x = B.u0 * (c + .5) + B.RG - j
                    , l = o + ~~x;
                if (r == 8)
                    a[n * s + c] = z[l];
                else if (r == 16)
                    a[n * s + c] = z[l] >>> 8;
                else
                    a[n * s + c] = z[l] * 255
            }
        }
    else
        for (var n = _; n < Z; n++)
            for (var c = M; c < P; c++) {
                var V = c + .5
                    , e = n + .5
                    , x = B.u0 * V + B.gT * e + B.RG - j
                    , A = B.X * V + B.Tx * e + B.Gq - G;
                if (0 <= x && 0 <= A && x < F && A < i) {
                    var l = ~~A * F + ~~x;
                    if (r == 8)
                        a[n * s + c] = z[l];
                    else if (r == 16)
                        a[n * s + c] = z[l] >>> 8;
                    else
                        a[n * s + c] = z[l] * 255
                }
            }
}
    ;
N.scale.yL = function (z, q, B, a, p, r) {
    function k(O) {
        return 255 * O
    }
    var s = N.Q$(z)
        , m = new Uint32Array(z.buffer)
        , u = new Uint32Array(a.buffer)
        , g = p.r
        , M = p.$
        , _ = N.b.nj(q, B).L
        , P = r ? p : N.b.hX(_).ti(p)
        , Z = P.x
        , j = P.y
        , G = Z + P.r
        , F = j + P.$
        , i = ~~q.x
        , n = ~~q.y
        , A = ~~q.r
        , o = ~~q.$;
    B = B.P();
    B.translate(-i, -n);
    var c = B.ay(new fv(1, 0)).o_(B.ay(new fv(0, 0)))
        , x = c.x
        , V = c.y;
    for (var e = j; e < F; e++) {
        var K = B.ay(new fv(Z + .5, e + .5))
            , Q = K.x
            , E = K.y
            , y = (e - p.y) * g + Z - p.x;
        for (var U = Z; U < G; U++) {
            if (r) {
                Q = ((A << 10) + Q) % A;
                E = ((o << 10) + E) % o
            }
            if (0 <= Q && 0 <= E && Q < A && E < o) {
                if (s == 8)
                    u[y] = m[~~E * A + ~~Q];
                else {
                    var R = (~~E * A + ~~Q) * 4, d, v, b, L;
                    if (s == 16) {
                        d = z[R] >>> 8;
                        v = z[R + 1] >>> 8;
                        b = z[R + 2] >>> 8;
                        L = z[R + 3] >>> 8
                    } else {
                        d = k(z[R]);
                        v = k(z[R + 1]);
                        b = k(z[R + 2]);
                        L = k(z[R + 3])
                    }
                    u[y] = L << 24 | b << 16 | v << 8 | d
                }
            }
            Q += x;
            E += V;
            y++
        }
    }
}
    ;
N.scale.H2 = function (z, q, B, a, p, r, k) {
    if (k < 1)
        N.scale.aBi(z, q, B, a, p, r, Math.round(1 / k));
    else
        N.scale.alT(z, q, B, a, p, r, k)
}
    ;
N.scale.Lm = function (z, q, B, a, p, r, k, s) {
    if (s)
        s = s.ti(new c2(0, 0, q, B));
    z = new Uint32Array(z.buffer);
    a = new Uint32Array(a.buffer);
    if (k < 1)
        N.scale.aeL(z, q, B, a, p, r, Math.round(1 / k), s);
    else
        N.scale.ael(z, q, B, a, p, r, k)
}
    ;
N.scale.alT = function (z, q, B, a, p, r, k) {
    for (var s = 0; s < B; s++)
        for (var m = 0; m < q; m++) {
            var u = z[s * q + m]
                , g = Math.min(k, p - m * k)
                , M = Math.min(k, r - s * k);
            for (var l = 0; l < M; l++)
                for (var _ = 0; _ < g; _++)
                    a[(k * s + l) * p + k * m + _] = u
        }
}
    ;
N.scale.aBi = function (z, q, B, a, p, r, k) {
    for (var s = 0; s < r; s++)
        for (var m = 0; m < p; m++) {
            var u = 0
                , g = Math.min(k, q - m * k)
                , M = Math.min(k, B - s * k);
            for (var l = 0; l < M; l++)
                for (var _ = 0; _ < g; _++)
                    u += z[(k * s + l) * q + (k * m + _)];
            a[s * p + m] = Math.round(u / (g * M))
        }
}
    ;
N.scale.ael = function (z, q, B, a, p, r, k) {
    for (var s = 0; s < B; s++)
        for (var m = 0; m < q; m++) {
            var u = z[s * q + m]
                , g = Math.min(k, p - m * k)
                , M = Math.min(k, r - s * k);
            for (var l = 0; l < M; l++)
                for (var _ = 0; _ < g; _++)
                    a[(k * s + l) * p + k * m + _] = u
        }
}
    ;
N.scale.aJL = function (z, q, B) {
    return (z >>> B & 255) + (q >>> B & 255) >>> 1
}
    ;
N.scale.zG = function (z, q) {
    var B = N.scale.aJL;
    return B(z, q, 24) << 24 | B(z, q, 16) << 16 | B(z, q, 8) << 8 | B(z, q, 0)
}
    ;
N.scale.apn = function (z, q, B, a, p, r) {
    var k = N.Q$(z);
    if (k == 8) {
        var s = new Uint32Array(z.buffer)
            , m = new Uint32Array(a.buffer);
        for (var u = 0; u < B; u++) {
            for (var g = 0; g < q; g++) {
                var M = u * q + g
                    , _ = s[M]
                    , P = _
                    , Z = _
                    , j = _;
                if (g < q - 1)
                    P = N.scale.zG(_, s[M + 1]);
                if (u < B - 1)
                    Z = N.scale.zG(_, s[M + q]);
                if (g < q - 1 && u < B - 1)
                    j = N.scale.zG(_, s[M + q + 1]);
                var G = (u * p + g) * 2;
                m[G] = _;
                m[G + 1] = P;
                m[G + p] = Z;
                m[G + p + 1] = j
            }
        }
        if ((p & 1) == 1)
            for (var u = 0; u < r; u++)
                m[u * p + p - 1] = m[u * p + p - 2];
        var F = p * (r - 1);
        if ((r & 1) == 1)
            for (var g = 0; g < p; g++)
                m[F + g] = m[F - p + g]
    } else {
        var i = N.scale.ajH
            , n = N.scale.amm;
        for (var u = 0; u < B; u++) {
            for (var g = 0; g < q; g++) {
                var M = u * q + g
                    , G = (u * p + g) * 2;
                i(z, M, a, G);
                if (g < q - 1)
                    n(z, M, M + 1, a, G + 1);
                else
                    i(z, M, a, G + 1);
                if (u < B - 1)
                    n(z, M, M + q, a, G + p);
                else
                    i(z, M, a, G + p);
                if (g < q - 1 && u < B - 1)
                    n(z, M, M + q + 1, a, G + p + 1);
                else
                    i(z, M, a, G + p + 1)
            }
        }
        if ((p & 1) == 1)
            for (var u = 0; u < r; u++)
                i(a, u * p + p - 2, a, u * p + p - 1);
        var F = p * (r - 1);
        if ((r & 1) == 1)
            for (var g = 0; g < p; g++)
                i(a, F - p + g, a, F + g)
    }
}
    ;
N.scale.ajH = function (z, q, B, a) {
    var p = q << 2
        , r = a << 2;
    B[r] = z[p];
    B[r + 1] = z[p + 1];
    B[r + 2] = z[p + 2];
    B[r + 3] = z[p + 3]
}
    ;
N.scale.amm = function (z, q, B, a, p) {
    var r = q << 2
        , k = B << 2
        , s = p << 2;
    a[s] = (z[r] + z[k]) * .5;
    a[s + 1] = (z[r + 1] + z[k + 1]) * .5;
    a[s + 2] = (z[r + 2] + z[k + 2]) * .5;
    a[s + 3] = (z[r + 3] + z[k + 3]) * .5
}
    ;
N.scale.aeL = function (z, q, B, a, p, r, k, s) {
    var m = 0
        , u = p
        , g = 0
        , M = r;
    if (s) {
        m = Math.floor(s.x / k);
        u = Math.ceil((s.x + s.r) / k);
        g = Math.floor(s.y / k);
        M = Math.ceil((s.y + s.$) / k)
    }
    for (var _ = g; _ < M; _++)
        for (var P = m; P < u; P++) {
            var Z = 0
                , j = 0
                , G = 0
                , F = 0
                , i = Math.min(k, q - P * k)
                , n = Math.min(k, B - _ * k);
            for (var l = 0; l < n; l++)
                for (var A = 0; A < i; A++) {
                    var o = z[(k * _ + l) * q + k * P + A]
                        , c = o >>> 24;
                    Z += c;
                    j += c * (o >>> 16 & 255);
                    G += c * (o >>> 8 & 255);
                    F += c * (o & 255)
                }
            if (Z != 0) {
                var x = 1 / Z;
                a[_ * p + P] = Z / (i * n) << 24 | j * x << 16 | G * x << 8 | F * x
            } else
                a[_ * p + P] = 0
        }
}
    ;
N.style = {};
N.style.stroke = function (z, q, B, a) {
    var p = B.r
        , r = B.$
        , k = N.style.wy(z, p, r);
    N.style.J0(q, B, k, B, a)
}
    ;
N.style.J0 = function (z, q, B, a, p) {
    var r = N.hI(N.Q$(z))
        , k = q.ti(a)
        , s = k.r
        , m = k.$;
    p += .5;
    var u = k.x - q.x
        , g = k.y - q.y
        , M = q.r
        , _ = k.x - a.x
        , P = k.y - a.y
        , Z = a.r;
    for (var j = 0; j < m; j++) {
        var G = (j + P) * Z + _
            , F = (j + g) * M + u;
        for (var i = 0; i < s; i++) {
            var n = Math.max(0, Math.min(1, p - B[G + i]));
            z[F + i] = r == 1 ? n : Math.round(n * r)
        }
    }
}
    ;
N.style.aDz = function (z, q, B, a) {
    for (var p = 0; p < B; p++)
        for (var r = 0; r < q; r++) {
            var k = p * q + r
                , s = 0
                , m = 0
                , u = z[k];
            if (r == 0 || p == 0) {
                s = z[k + 1] - u;
                m = z[k + q] - u
            } else if (r == B - 1 || p == q - 1) {
                s = u - z[k - 1];
                m = u - z[k - q]
            } else {
                s = z[k + 1] - z[k - 1];
                m = z[k + q] - z[k - q]
            }
            if (s != 0 || m != 0) {
                var g = 1 / Math.sqrt(s * s + m * m);
                s *= g;
                m *= g
            }
            a[k + k] = s;
            a[k + k + 1] = m
        }
}
    ;
N.style.wy = function (z, q, B) {
    z = N.Pz(z, 8);
    var a = q * B
        , p = new ArrayBuffer((a + q * 4) * 4)
        , r = new Float32Array(p, 0, a)
        , k = new Uint16Array(p, 0, a << 1)
        , s = new Int32Array(p, a * 4, q)
        , m = new Int32Array(p, (a + q) * 4, q)
        , u = new Int32Array(p, (a + q * 2) * 4, q)
        , g = new Int32Array(p, (a + q * 3) * 4, q)
        , M = 1 / 255;
    for (let l = 0; l < q; ++l) {
        let _ = -B - q
            , P = 0
            , Z = l
            , j = 0;
        for (; j < B; ++j,
            Z += q) {
            if (z[Z] > 128)
                _ = j,
                    P = z[Z];
            k[Z << 1] = j - _;
            k[(Z << 1) + 1] = P
        }
        _ = k[Z += Z - q - q],
            P = k[Z + 1];
        for (; j > 1; --j) {
            if (k[Z -= q + q] > _)
                k[Z] = ++_,
                    k[Z + 1] = P;
            else
                _ = k[Z],
                    P = k[Z + 1]
        }
    }
    for (let G = 0; G < a; G += q) {
        var F = G + q
            , i = k[G << 1] * k[G << 1]
            , n = 0;
        let A = s[0] = G
            , o = m[0] = G
            , c = i
            , x = c;
        for (let Z = G + 1; Z < F; ++Z) {
            var V = k[Z << 1] * k[Z << 1];
            while (n && x > (o - Z) * (o - Z) + V) {
                o = m[--n],
                    A = s[n],
                    c = k[A << 1] * k[A << 1],
                    x = (o - A) * (o - A) + c
            }
            if (n || x <= (o - Z) * (o - Z) + V) {
                var e = Z - A
                    , K = G + Math.floor((e * (Z + A - G - G) + V - c) / (e << 1)) + 1;
                if (K < F) {
                    o = m[++n] = K,
                        A = s[n] = Z,
                        c = V,
                        x = (o - A) * (o - A) + c
                }
            } else
                o = G,
                    A = s[0] = Z,
                    c = V,
                    x = (o - A) * (o - A) + c
        }
        for (let l = 0; l < n; ++l) {
            var Q = s[l] << 1;
            u[l] = k[Q] * k[Q];
            g[l] = k[Q + 1]
        }
        let E = .5 - k[(s[n] << 1) + 1] * M;
        for (let Z = F - 1; Z >= G; --Z) {
            r[Z] = Math.max(0, Math.sqrt((Z - A) * (Z - A) + c) + E);
            if (n && Z == o) {
                o = m[--n],
                    A = s[n],
                    c = u[n],
                    E = .5 - g[n] * M
            }
        }
    }
    return r
}
    ;
N.style.a1t = function (z, q, B) {
    var a = new Float64Array(q * B)
        , p = 0
        , r = q * B;
    for (var l = 0; l < r; l++)
        p |= z[l];
    if (p == 0) {
        a.fill(1e9);
        return
    }
    var k = N.style.Ls(z, q, B);
    for (var s = 0; s < B; s++)
        for (var m = 0; m < q; m++) {
            var l = s * q + m
                , u = k[l * 2]
                , g = k[l * 2 + 1];
            if (u == 0 && g == 0) {
                a[l] = 0;
                continue
            }
            var M = Math.sqrt(u * u + g * g)
                , _ = z[(s + g) * q + m + u] * (1 / 255);
            a[l] = M + .5 - _
        }
    return a
}
    ;
N.style.agQ = function (z, q, B) {
    return (.5 - B) * z
}
    ;
N.style.Ls = function (z, q, B, a) {
    var p = new Int16Array(q * B * 2);
    N.style.aKI(z, p, q, B, 128);
    return p
}
    ;
N.style.aKI = function (z, q, B, a, p) {
    var r = new Int32Array(B * a);
    N.style.ahl(z, r, B, a, p);
    N.style.ask(r, q, B, a)
}
    ;
N.style.ahl = function (z, q, B, a, p) {
    var r = new Int32Array(a);
    for (var k = 0; k < B; k++) {
        var s = B + a;
        for (var m = a - 1; m >= 0; m--) {
            if (z[m * B + k] > p)
                s = 0;
            else
                s++;
            r[m] = s
        }
        s = B + a;
        for (var m = 0; m < a; m++) {
            if (z[m * B + k] > p)
                s = 0;
            else
                s++;
            q[m * B + k] = s < r[m] ? -s : r[m]
        }
    }
}
    ;
N.style.ask = function (z, q, B, a) {
    var p = (B + a) * (B + a)
        , r = new Float64Array(B)
        , k = new Uint16Array(B);
    for (var s = 0; s < a; s++) {
        var m = s * B
            , u = 0;
        k[0] = 0;
        r[0] = -p;
        r[1] = +p;
        for (var g = 1; g < B; g++) {
            var M = z[g + m] * z[g + m] + g * g
                , _ = (M - (z[k[u] + m] * z[k[u] + m] + k[u] * k[u])) / (2 * g - 2 * k[u]);
            while (_ <= r[u]) {
                u--;
                _ = (M - (z[k[u] + m] * z[k[u] + m] + k[u] * k[u])) / (2 * g - 2 * k[u])
            }
            u++;
            k[u] = g;
            r[u] = _;
            r[u + 1] = p
        }
        u = 0;
        for (var g = 0; g < B; g++) {
            while (r[u + 1] < g)
                u++;
            var P = k[u] - g
                , Z = z[k[u] + m]
                , l = s * B + g << 1;
            q[l] = P;
            q[l + 1] = Z
        }
    }
}
    ;
N.gj = function (z, q) {
    var B = z.buffer.byteLength
        , a = q.buffer.byteLength
        , p = new Uint32Array(z.buffer, 0, B >> 2)
        , r = new Uint32Array(q.buffer, 0, a >> 2);
    if (B != a)
        return !1;
    var k = p.length;
    for (var l = 0; l < k; l++)
        if (r[l] != p[l])
            return !1;
    return !0
}
N.M4 = function (z, q, B) {
    var a = Math.min(z.length / 4, q.length)
        , p = N.Q$(z);
    if (p != N.Q$(q))
        throw "e";
    if (p == 8) {
        for (var l = 0; l < a; l++) {
            q[l] = z[(l << 2) + B]
        }
    } else
        for (var l = 0; l < a; l++) {
            q[l] = z[(l << 2) + B]
        }
}
N.rd = {};
N.rd.LH = function (z, q, B) {
    var a, p;
    if (B == 0) {
        a = z.S.P();
        p = N.rd.aju
    }
    if (B == 1) {
        a = z.S.Kg(q.S);
        p = N.rd.Kg
    }
    if (B == 2) {
        a = q.S.P();
        p = N.rd.anH
    }
    if (B == 3) {
        a = z.S.ti(q.S);
        p = N.rd.ti
    }
    if (B == 4) {
        a = z.S.Kg(q.S);
        p = N.rd.af8
    }
    if (a.su())
        return null;
    var r = N.Q$(z.G)
        , k = N.j(a.C(), r);
    N.Mj(q.G, q.S, k, a);
    var s = N.j(a.C(), r);
    N.Mj(z.G, z.S, s, a);
    p(s, k, k);
    var m = N.Hc(k, a);
    if (m.su())
        return null;
    if (!m.gj(a)) {
        var u = N.j(m.C(), r);
        N.Mj(k, a, u, m);
        k = u;
        a = m
    }
    return {
        G: k,
        S: a
    }
}
    ;
N.rd.aju = function (z, q, B) {
    for (var l = 0; l < z.length; l++)
        B[l] = z[l]
}
    ;
N.rd.Kg = function (z, q, B) {
    var a = N.hI(N.Q$(z));
    for (var l = 0; l < z.length; l++)
        B[l] = Math.min(z[l] + q[l], a)
}
    ;
N.rd.anH = function (z, q, B) {
    for (var l = 0; l < z.length; l++)
        B[l] = Math.max(q[l] - z[l], 0)
}
    ;
N.rd.ti = function (z, q, B) {
    var a = N.hI(N.Q$(z))
        , p = 1 / a;
    for (var l = 0; l < z.length; l++)
        B[l] = z[l] * q[l] * p
}
    ;
N.rd.af8 = function (z, q, B) {
    var a = N.hI(N.Q$(z))
        , p = 1 / a;
    for (var l = 0; l < z.length; l++)
        B[l] = Math.min(z[l] + q[l], a) - z[l] * q[l] * p
}
    ;
iw.PH = function (z) {
    if (z == "passThrough")
        return "pass";
    return iw.dB[iw.Dx.indexOf(z)]
}
hx.gM = function (z, q, B, a) {
    if (B == null)
        B = 8;
    if (a == null)
        a = !1;
    hx.BP++;
    hx.HC += z * q * 4;
    if (hx.nR)
        console.log("GL.Channels instances: " + hx.BP + ", memory: " + hx.HC);
    var p = hx.AE;
    if (B == 16) {
        p.getExtension("EXT_texture_norm16")
    }
    if (B == 32) {
        p.getExtension("EXT_color_buffer_float");
        if (p.getExtension("OES_texture_float_linear") == null)
            a = !1
    }
    this.a7V = a;
    this.r = z;
    this.$ = q;
    this.depth = B;
    this.Gh = B == 8 ? p.RGBA : B == 16 ? 32859 : B == 32 ? p.RGBA32F : p.RGBA16F;
    this.QA = B == 8 ? p.RGBA : B == 16 ? p.RGBA : p.RGBA;
    this.cG = B == 8 ? p.UNSIGNED_BYTE : B == 16 ? p.UNSIGNED_SHORT : p.FLOAT;
    this.GQ = p.createTexture();
    this.dn = null;
    this.gR(this.GQ, z, q)
}
hx.Er = function (z, q, B) {
    hx.BP++;
    hx.HC += z * q;
    if (hx.nR)
        console.log("GL.Channels instances: " + hx.BP + ", memory: " + hx.HC);
    var a = hx.AE;
    this.r = z;
    this.$ = q;
    if (B == null)
        B = 8;
    if (B == 16) {
        a.getExtension("EXT_texture_norm16")
    }
    this.depth = B;
    this.Gh = B == 8 ? a.R8 : B == 16 ? 33322 : a.R32F;
    this.QA = B == 8 ? a.RED : B == 16 ? a.RED : a.RED;
    this.cG = B == 8 ? a.UNSIGNED_BYTE : B == 16 ? a.UNSIGNED_SHORT : a.FLOAT;
    this.GQ = a.createTexture();
    this.dn = null;
    this.gR(this.GQ, z, q)
}
fp.order = "ebbl FrFX IrSh IrGl ChFX SoFi GrFl patternFill OrGl DrSh St3D".split(" ");
fp.LG = "ebblMulti frameFXMulti innerShadowMulti IrGlMulti ChFXMulti solidFillMulti gradientFillMulti patternFillMulti OrGlMulti dropShadowMulti St3DMulti".split(" ");
fp.stroke = {
    types: ["InsF", "CtrF", "OutF"],
    names: [[19, 5, 2], [19, 5, 1], [19, 5, 0]],
    _u: ["SClr", "GrFl", "Ptrn"],
    ajq: [[13, 0], [12, 37], [12, 62]]
};
function c2(z, q, B, a) {
    if (!z)
        z = 0;
    if (!q)
        q = 0;
    if (!B)
        B = 0;
    if (!a)
        a = 0;
    this.x = z;
    this.y = q;
    this.r = B;
    this.$ = a
}
c2.prototype.C = function () {
    return this.r * this.$
}
    ;
c2.prototype.P = function () {
    return new c2(this.x, this.y, this.r, this.$)
}
    ;
c2.prototype.contains = function (z, q) {
    return z >= this.x && z <= this.x + this.r && (q >= this.y && q <= this.y + this.$)
}
    ;
c2.prototype.rF = function (z) {
    return this.contains(z.x, z.y)
}
    ;
c2.prototype.eo = function (z) {
    return this.x <= z.x && this.y <= z.y && z.x + z.r <= this.x + this.r && z.y + z.$ <= this.y + this.$
}
    ;
c2.prototype.hk = function (z) {
    this.x = z.x;
    this.y = z.y;
    this.r = z.r;
    this.$ = z.$
}
    ;
c2.prototype.gj = function (z) {
    return this.x == z.x && this.y == z.y && this.r == z.r && this.$ == z.$
}
    ;
c2.prototype.oL = function (z, q) {
    this.x -= z;
    this.y -= q;
    this.r += 2 * z;
    this.$ += 2 * q
}
    ;
c2.prototype.ap1 = function (z) {
    this.oL(z.x, z.y)
}
    ;
c2.prototype.ti = function (z) {
    var q = Math.max(this.x, z.x)
        , B = Math.max(this.y, z.y)
        , a = Math.min(this.x + this.r, z.x + z.r)
        , p = Math.min(this.y + this.$, z.y + z.$);
    if (a < q || p < B)
        return new c2;
    else
        return new c2(q, B, a - q, p - B)
}
    ;
c2.prototype.co = function (z) {
    if (z.y + z.$ < this.y || z.x > this.x + this.r || z.y > this.y + this.$ || z.x + z.r < this.x)
        return !1;
    return !0
}
    ;
c2.prototype.su = function () {
    return this.r <= 0 || this.$ <= 0
}
    ;
c2.prototype.offset = function (z, q) {
    this.x += z;
    this.y += q
}
    ;
c2.prototype.akq = function (z) {
    this.offset(z.x, z.y)
}
    ;
c2.prototype.al6 = function () {
    this.x = this.y = this.r = this.$ = 0
}
    ;
c2.prototype.j9 = function (z, q, B, a) {
    this.x = z;
    this.y = q;
    this.r = B;
    this.$ = a
}
    ;
c2.prototype.Kg = function (z) {
    if (this.su())
        return z.P();
    if (z.su())
        return this.P();
    var q = this.P();
    q.aCO(z);
    return q
}
    ;
c2.CG = new Float32Array(2);
c2.prototype.aCO = function (z) {
    if (z.su())
        return;
    if (this.su()) {
        this.hk(z);
        return
    }
    this.aIS(z.x, z.y);
    this.aIS(z.x + z.r, z.y + z.$)
}
    ;
c2.prototype.aIS = function (z, q) {
    var B = Math.min(this.x, z)
        , a = Math.min(this.y, q);
    this.r = Math.max(this.x + this.r, z) - B;
    this.$ = Math.max(this.y + this.$, q) - a;
    this.x = B;
    this.y = a
}
    ;
c2.prototype.ay6 = function (z, q) {
    this.x = z;
    this.y = q;
    this.r = this.$ = 0
}
    ;
function fv(z, q) {
    if (!z)
        z = 0;
    if (!q)
        q = 0;
    this.x = z;
    this.y = q
}
fv.prototype.add = function (z) {
    return new fv(this.x + z.x, this.y + z.y)
}
    ;
fv.prototype.P = function () {
    return new fv(this.x, this.y)
}
    ;
fv.prototype.hk = function (z) {
    this.x = z.x;
    this.y = z.y
}
    ;
fv.prototype.gj = function (z) {
    return this.x == z.x && this.y == z.y
}
    ;
fv.prototype.normalize = function (z) {
    var q = Math.sqrt(this.x * this.x + this.y * this.y);
    this.x *= z / q;
    this.y *= z / q
}
    ;
fv.prototype.offset = function (z, q) {
    this.x += z;
    this.y += q
}
    ;
fv.prototype.j9 = function (z, q) {
    this.x = z;
    this.y = q
}
    ;
fv.prototype.o_ = function (z) {
    return new fv(this.x - z.x, this.y - z.y)
}
    ;
fv.uw = function (z, q) {
    return fv.aye(z.x - q.x, z.y - q.y)
}
    ;
fv.awt = function (z, q, B) {
    return new fv(z.x + B * (q.x - z.x), z.y + B * (q.y - z.y))
}
    ;
fv.a0L = function (z, q) {
    return new fv(z * Math.cos(q), z * Math.sin(q))
}
    ;
fv.aye = function (z, q) {
    return Math.sqrt(z * z + q * q)
}
    ;
fv.zf = {};
fv.wW = {};
fv.zf.create = function () {
    var z = new Float32Array(4);
    return z
}
    ;
fv.wW.create = function (z) {
    var q = new Float32Array(16);
    q[0] = q[5] = q[10] = q[15] = 1;
    if (z)
        fv.wW.set(z, q);
    return q
}
    ;
fv.zf.add = function (z, q, B) {
    B[0] = z[0] + q[0];
    B[1] = z[1] + q[1];
    B[2] = z[2] + q[2];
    B[3] = z[3] + q[3]
}
    ;
fv.zf.set = function (z, q) {
    q[0] = z[0];
    q[1] = z[1];
    q[2] = z[2];
    q[3] = z[3]
}
    ;
fv.wW.set = function (z, q) {
    q[0] = z[0];
    q[1] = z[1];
    q[2] = z[2];
    q[3] = z[3];
    q[4] = z[4];
    q[5] = z[5];
    q[6] = z[6];
    q[7] = z[7];
    q[8] = z[8];
    q[9] = z[9];
    q[10] = z[10];
    q[11] = z[11];
    q[12] = z[12];
    q[13] = z[13];
    q[14] = z[14];
    q[15] = z[15]
}
    ;
fv.wW.multiply = function (z, q, B) {
    var a = z[0]
        , p = z[1]
        , r = z[2]
        , k = z[3]
        , s = z[4]
        , m = z[5]
        , u = z[6]
        , g = z[7]
        , M = z[8]
        , _ = z[9]
        , P = z[10]
        , Z = z[11]
        , j = z[12]
        , G = z[13]
        , F = z[14]
        , i = z[15]
        , n = q[0]
        , A = q[1]
        , o = q[2]
        , c = q[3];
    B[0] = n * a + A * s + o * M + c * j;
    B[1] = n * p + A * m + o * _ + c * G;
    B[2] = n * r + A * u + o * P + c * F;
    B[3] = n * k + A * g + o * Z + c * i;
    n = q[4];
    A = q[5];
    o = q[6];
    c = q[7];
    B[4] = n * a + A * s + o * M + c * j;
    B[5] = n * p + A * m + o * _ + c * G;
    B[6] = n * r + A * u + o * P + c * F;
    B[7] = n * k + A * g + o * Z + c * i;
    n = q[8];
    A = q[9];
    o = q[10];
    c = q[11];
    B[8] = n * a + A * s + o * M + c * j;
    B[9] = n * p + A * m + o * _ + c * G;
    B[10] = n * r + A * u + o * P + c * F;
    B[11] = n * k + A * g + o * Z + c * i;
    n = q[12];
    A = q[13];
    o = q[14];
    c = q[15];
    B[12] = n * a + A * s + o * M + c * j;
    B[13] = n * p + A * m + o * _ + c * G;
    B[14] = n * r + A * u + o * P + c * F;
    B[15] = n * k + A * g + o * Z + c * i;
    return B
}
    ;
fv.wW.inverse = function (z, q) {
    var B = z[0]
        , a = z[1]
        , p = z[2]
        , r = z[3]
        , k = z[4]
        , s = z[5]
        , m = z[6]
        , u = z[7]
        , g = z[8]
        , M = z[9]
        , _ = z[10]
        , P = z[11]
        , Z = z[12]
        , j = z[13]
        , G = z[14]
        , F = z[15]
        , i = B * s - a * k
        , n = B * m - p * k
        , A = B * u - r * k
        , o = a * m - p * s
        , c = a * u - r * s
        , x = p * u - r * m
        , V = g * j - M * Z
        , e = g * G - _ * Z
        , K = g * F - P * Z
        , Q = M * G - _ * j
        , E = M * F - P * j
        , y = _ * F - P * G
        , U = i * y - n * E + A * Q + o * K - c * e + x * V;
    if (!U) {
        return null
    }
    U = 1 / U;
    q[0] = (s * y - m * E + u * Q) * U;
    q[1] = (p * E - a * y - r * Q) * U;
    q[2] = (j * x - G * c + F * o) * U;
    q[3] = (_ * c - M * x - P * o) * U;
    q[4] = (m * K - k * y - u * e) * U;
    q[5] = (B * y - p * K + r * e) * U;
    q[6] = (G * A - Z * x - F * n) * U;
    q[7] = (g * x - _ * A + P * n) * U;
    q[8] = (k * E - s * K + u * V) * U;
    q[9] = (a * K - B * E - r * V) * U;
    q[10] = (Z * c - j * A + F * i) * U;
    q[11] = (M * A - g * c - P * i) * U;
    q[12] = (s * e - k * Q - m * V) * U;
    q[13] = (B * Q - a * e + p * V) * U;
    q[14] = (j * n - Z * o - G * i) * U;
    q[15] = (g * o - M * n + _ * i) * U;
    return q
}
    ;
fv.wW.ahJ = function (z, q, B) {
    var a = q[0]
        , p = q[1];
    B[0] = a * z[0] + p * z[4] + z[12];
    B[1] = a * z[1] + p * z[5] + z[13]
}
    ;
fv.wW.acq = function (z, q, B) {
    var a = q[0]
        , p = q[1]
        , r = q[2]
        , k = q[3];
    B[0] = z[0] * a + z[4] * p + z[8] * r + z[12] * k;
    B[1] = z[1] * a + z[5] * p + z[9] * r + z[13] * k;
    B[2] = z[2] * a + z[6] * p + z[10] * r + z[14] * k;
    B[3] = z[3] * a + z[7] * p + z[11] * r + z[15] * k
}
    ;
var cS = {};
cS.names = {
    brit: [4, 0],
    levl: [4, 1],
    curv: [4, 2],
    expA: [4, 3],
    vibA: [4, 4],
    hue2: [4, 5],
    blnc: [4, 6],
    blwh: [4, 7],
    phfl: [4, 8],
    mixr: [4, 9],
    clrL: [4, 10],
    nvrt: [4, 11],
    post: [4, 12],
    thrs: [4, 13],
    grdm: [4, 14],
    selc: [4, 15],
    rplc: [4, 17]
};
cS.a52 = ["expA", "clrL", "selc"];
cS.Xx = [[13, 1, 1], [13, 1, 3], [13, 1, 4], [13, 1, 11], [13, 1, 5], [13, 1, 12]];
cS.aj3 = [[13, 1, 11], [13, 1, 12], [13, 1, 3], [13, 1, 10]];
cS.d6 = [[13, 1, 1], [13, 1, 4], [13, 1, 5]];
cS.f$ = {
    BrgC: "brit",
    Lvls: "levl",
    Crvs: "curv",
    Exps: "expA",
    vibrance: "vibA",
    HStr: "hue2",
    ClrB: "blnc",
    BanW: "blwh",
    photoFilter: "phfl",
    Invr: "nvrt",
    Pstr: "post",
    Thrs: "thrs",
    GrMp: "grdm",
    SlcC: "selc",
    ChnM: "mixr",
    colorLookup: "clrL",
    rplc: "rplc"
};
cS.oM = function () {
    var z = N.V(cS.f$);
    delete z.GrMp;
    z.GdMp = "grdm";
    return z
}();
cS.m3 = {
    brit: "brightnessEvent",
    levl: "levels",
    curv: "curves",
    expA: "exposure",
    vibA: "vibrance",
    hue2: "hueSaturation",
    blnc: "colorBalance",
    blwh: "blackAndWhite",
    phfl: "photoFilter",
    mixr: "channelMixer",
    clrL: "colorLookup",
    nvrt: "invert",
    post: "posterization",
    thrs: "thresholdClassEvent",
    grdm: "gradientMapEvent",
    selc: "selectiveColor",
    rplc: "replaceColor"
};
cS.keys = {
    levl: [dj.f6, dj.Rq],
    curv: [dj.f6, dj.DY],
    hue2: [dj.f6, dj.$Z],
    nvrt: [dj.f6, dj.Ej],
    blnc: [dj.f6, dj.e_]
};
cS.Y1 = function (z) {
    var q = le.Xo("mixr");
    q.Mnch = {
        t: "bool",
        v: z.Oj
    };
    function B(a, l) {
        var p = {
            classID: "ChMx"
        }
            , r = {
                Rd: 0,
                Grn: 1,
                Bl: 2,
                Cnst: 4
            };
        for (var k in r)
            p[k] = {
                t: "UntF",
                v: {
                    type: "#Prc",
                    val: a[l + r[k]]
                }
            };
        return {
            t: "Objc",
            v: p
        }
    }
    if (z.Oj)
        q.Gry = B(z.K, 0);
    else {
        q.Rd = B(z.K, 0);
        q.Grn = B(z.K, 5);
        q.Bl = B(z.K, 10)
    }
    return q
}
    ;
cS.fk = function (z) {
    function q(a, p, l) {
        var r = {
            Rd: 0,
            Grn: 1,
            Bl: 2,
            Cnst: 4
        };
        for (var k in r)
            if (a[k])
                p[l + r[k]] = a[k].v.val
    }
    var B = {
        Oj: !1,
        K: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    if (z.Mnch && z.Mnch.v)
        B.Oj = !0;
    if (B.Oj)
        q(z.Gry.v, B.K, 0);
    else {
        q(z.Rd.v, B.K, 0);
        q(z.Grn.v, B.K, 5);
        q(z.Bl.v, B.K, 10)
    }
    return B
}
    ;
cS.get = function (z) {
    for (var q in cS.names)
        if (z[q] != null)
            return q;
    return null
}
    ;
cS.Yr = function (z, q) {
    var B = cS.Si, a;
    if (z == "brit") {
        var p = q.Brgh ? q.Brgh.v : 0
            , r = q.Cntr ? q.Cntr.v : 0
            , k = q.useLegacy ? q.useLegacy.v : !1;
        if (k) {
            var s = p / 255
                , m = 1 + r / 100;
            if (m > 1)
                m = 1 + Math.tan(Math.PI / 2 * r / 101);
            var u = (1 - m) / 2
                , g = N.AU._1(s, s, s)
                , M = [m, 0, 0, u, 0, m, 0, u, 0, 0, m, u, 0, 0, 0, 1]
                , _ = N.AU.multiply(M, g)
                , P = {
                    o: new Float32Array(256),
                    k: new Float32Array(256),
                    X: new Float32Array(256)
                };
            for (var l = 0; l < 256; l++)
                P.o[l] = l / 255;
            N.AU.od(P, P, _);
            a = {
                I: B.mr,
                kN: P.o,
                gQ: P.o,
                vW: P.o,
                i_: !1,
                vP: !1
            }
        } else {
            var Z = 1024
                , j = -30 + 60 * (r + 100) / 200
                , G = [];
            for (var l = 0; l < 4; l++)
                G.push(N.X8.gE(l / 3 * 255, l / 3 * 255, !0));
            G[1].v.Hrzn.v = 64;
            G[1].v.Vrtc.v = 64 - j;
            G[2].v.Hrzn.v = 128 + 64;
            G[2].v.Vrtc.v = 128 + 64 + j;
            G.sort(function (eY, kT) {
                return eY.v.Hrzn.v - kT.v.Hrzn.v
            });
            var F = N.X8.DM(G, Z);
            function i(eY, Z) {
                var G = []
                    , cX = 3;
                for (var l = 0; l < cX + 1; l++)
                    G.push(N.X8.gE(l / cX * 255, l / cX * 255, !0));
                G[1].v.Hrzn.v = 130 - eY * 26;
                G[1].v.Vrtc.v = 130 + eY * 51;
                G[2].v.Hrzn.v = 233 - eY * 48;
                G[2].v.Vrtc.v = 233 + eY * 10;
                return N.X8.DM(G, Z)
            }
            var n = i(Math.abs(p) / 100, Z);
            if (p < 0) {
                var A = []
                    , o = 1 / Z;
                for (var l = 0; l < Z; l++) {
                    var c = l * o
                        , x = l;
                    while (n[x] > c && x > 1)
                        x--;
                    A[l] = x * o
                }
                n = A
            }
            var V = new Float32Array(Z);
            for (var l = 0; l < Z; l++) {
                var e = Math.round((Z - 1) * n[l]);
                V[l] = F[e]
            }
            a = {
                I: B.mr,
                kN: V,
                gQ: V,
                vW: V,
                i_: !1,
                vP: !1
            }
        }
    }
    if (z == "levl") {
        var K = [], Q, E, g, y, U, R, d = 256;
        for (var l = 0; l < 4; l++)
            K.push(aS.o8(q, l));
        var v = d - 1;
        Q = -K[0][0] / 255;
        E = 1 / (K[0][1] / 255 - K[0][0] / 255);
        g = N.AU.multiply(N.AU.gv(E, E, E), N.AU._1(Q, Q, Q));
        y = N.AU.gv(1 / (K[1][1] / 255 - K[1][0] / 255), 1 / (K[2][1] / 255 - K[2][0] / 255), 1 / (K[3][1] / 255 - K[3][0] / 255));
        U = N.AU._1(-K[1][0] / 255, -K[2][0] / 255, -K[3][0] / 255);
        R = N.AU.multiply(y, U);
        var V = {
            o: new Float32Array(d),
            k: new Float32Array(d),
            X: new Float32Array(d)
        };
        for (var l = 0; l < d; l++)
            V.o[l] = V.k[l] = V.X[l] = l / v;
        var b = 1 / (K[0][4] / 100)
            , L = 1 / (K[1][4] / 100)
            , O = 1 / (K[2][4] / 100)
            , Y = 1 / (K[3][4] / 100);
        N.AU.od(V, V, R);
        for (var l = 0; l < d; l++) {
            V.o[l] = Math.max(0, Math.min(1, Math.pow(V.o[l], L)));
            V.k[l] = Math.max(0, Math.min(1, Math.pow(V.k[l], O)));
            V.X[l] = Math.max(0, Math.min(1, Math.pow(V.X[l], Y)))
        }
        N.AU.od(V, V, g);
        for (var l = 0; l < d; l++) {
            V.o[l] = Math.max(0, Math.min(1, Math.pow(V.o[l], b)));
            V.k[l] = Math.max(0, Math.min(1, Math.pow(V.k[l], b)));
            V.X[l] = Math.max(0, Math.min(1, Math.pow(V.X[l], b)))
        }
        Q = K[0][2] / 255;
        E = K[0][3] / 255 - K[0][2] / 255;
        g = N.AU.multiply(N.AU._1(Q, Q, Q), N.AU.gv(E, E, E));
        y = N.AU.gv(K[1][3] / 255 - K[1][2] / 255, K[2][3] / 255 - K[2][2] / 255, K[3][3] / 255 - K[3][2] / 255);
        U = N.AU._1(K[1][2] / 255, K[2][2] / 255, K[3][2] / 255);
        R = N.AU.multiply(U, y);
        N.AU.od(V, V, N.AU.multiply(g, R));
        a = {
            I: B.mr,
            kN: V.o,
            gQ: V.k,
            vW: V.X,
            i_: !1,
            vP: !1
        }
    }
    if (z == "curv") {
        var w = cU.o8(q, 0).length == 256 ? 1 : 0
            , D = [];
        if (w == 0) {
            var h = N.X8.DM(cU.o8(q, 0), 256);
            for (var l = 1; l < 4; l++) {
                var f = N.X8.DM(cU.o8(q, l), 256);
                D.push(N.X8.aij(f, h))
            }
        } else {
            var H = [];
            for (var l = 0; l < 4; l++) {
                var X = new Float32Array(256);
                H.push(X);
                var I = cU.o8(q, l);
                for (var x = 0; x < 256; x++)
                    X[x] = I[x] / 255
            }
            for (var l = 1; l < 4; l++)
                D.push(N.X8.aij(H[l], H[0]))
        }
        a = {
            I: B.mr,
            kN: D[0],
            gQ: D[1],
            vW: D[2],
            i_: !1,
            vP: !1
        }
    }
    if (z == "expA") {
        var i_ = q.Exps
            , W = q.Ofst
            , $ = q.gammaCorrection
            , J = i_ ? i_.v : 0
            , bV = W ? W.v : 0
            , bh = $ ? $.v : 1
            , V = new Float32Array(256);
        for (var l = 0; l < 256; l++) {
            var q = l / 255
                , j1 = Math.pow(Math.abs(bV), 1 / (Math.PI / 2));
            if (bV > 0) {
                q = Math.max(bV / Math.E, q);
                q = q * Math.exp(bV / 1.75 + J / Math.PI);
                q = (1 - j1) * q + j1 * 1
            } else {
                q = q * Math.exp(-bV * 1.75 + J / Math.PI);
                q = q + -j1 * 1.14
            }
            q = Math.pow(q, 1 / bh);
            V[l] = Math.max(0, Math.min(1, q))
        }
        a = {
            I: B.mr,
            kN: V,
            gQ: V,
            vW: V,
            i_: !1,
            vP: !1
        }
    }
    if (z == "vibA") {
        var ak = (q.vibrance ? q.vibrance.v : 0) / 100
            , bB = (q.Strt ? q.Strt.v : 0) / 100
            , j1 = 1 + ak * (ak > 0 ? .25 : .5)
            , eP = .8 + .2 / j1;
        a = {
            I: B._H,
            Ui: [ak, bB, eP, j1]
        }
    }
    if (z == "hue2") {
        var io = []
            , jL = []
            , d5 = []
            , cr = q.Clrz ? q.Clrz.v : !1
            , d = 256
            , v = d - 1;
        for (var l = 0; l < d; l++) {
            io[l] = l / v;
            jL[l] = 0;
            d5[l] = 0
        }
        var lk = aV.o8(q, 0)
            , ad = cS.Zw(lk[1] / 100);
        if (cr) {
            var g8 = lk[0] / 360;
            for (var l = 0; l < d; l++) {
                io[l] = g8;
                jL[l] = ad
            }
        } else {
            for (var l = 0; l < d; l++) {
                var bk = io[l]
                    , je = jL[l];
                io[l] += lk[0] / 360;
                for (var x = 0; x < 6; x++) {
                    var eM = aV.o8(q, x + 1)
                        , kC = eM.jW
                        , e6 = eM.Fx
                        , j1 = 0;
                    for (var l7 = 1; l7 < 4; l7++)
                        if (e6[l7] < e6[0])
                            e6[l7] += 360;
                    var fw = e6[0]
                        , g_ = e6[1]
                        , j8 = e6[2]
                        , kx = e6[3]
                        , kz = bk * 360;
                    if (kz < e6[0])
                        kz += 360;
                    var ki = (kz - fw) / (g_ - fw)
                        , ea = (kz - j8) / (kx - j8);
                    if (ki < 0)
                        j1 = 0;
                    else if (ki < 1)
                        j1 = ki;
                    else if (ea < 0)
                        j1 = 1;
                    else if (ea < 1)
                        j1 = 1 - ea;
                    else
                        j1 = 0;
                    var m = cS.Zw(kC[1] / 100);
                    io[l] += j1 * kC[0] / 360;
                    jL[l] += j1 * m;
                    d5[l] += j1 * kC[2] / 100
                }
            }
            for (var l = 0; l < d; l++) {
                jL[l] = (1 + jL[l]) * (1 + ad) - 1;
                d5[l] = Math.max(-1, Math.min(1, d5[l]))
            }
        }
        var V = N.j(d * 4 * 1, 32);
        for (var l = 0; l < d; l++) {
            V[4 * l] = io[l];
            V[4 * l + 1] = cS.a1w(jL[l]);
            V[4 * l + 2] = d5[l]
        }
        var kM = lk[2] / 100
            , kB = kM < 0 ? -kM : kM
            , h4 = kM < 0 ? 0 : 1;
        a = {
            I: B.nQ,
            map: V,
            aqP: kB * h4,
            Ry: 1 - kB,
            azL: lk[2] / 100,
            aHw: cr ? 1 : 0
        }
    }
    if (z == "nvrt") {
        var V = new Float32Array(256);
        for (var l = 0; l < 256; l++)
            V[l] = 1 - l / 255;
        a = {
            I: B.mr,
            kN: V,
            gQ: V,
            vW: V,
            i_: !1,
            vP: !1
        }
    }
    if (z == "post") {
        var k0 = q.Lvls.v
            , V = new Float32Array(256)
            , j1 = k0 / 255.001
            , eS = 1 / (k0 - 1);
        for (var l = 0; l < 256; l++)
            V[l] = Math.floor(l * j1) * eS;
        a = {
            I: B.mr,
            kN: V,
            gQ: V,
            vW: V,
            i_: !1,
            vP: !1
        }
    }
    if (z == "grdm") {
        var k8 = q.Grad.v
            , l8 = q.Rvrs
            , c_ = q.gs99
            , Z = 1024
            , iR = N.P0.amT(k8, Z, l8 ? l8.v : !1, 0, 0, c_ ? c_.v.gradientInterpolationMethodType : "Gcls")
            , bz = new Float32Array(Z)
            , fi = new Float32Array(Z)
            , iZ = new Float32Array(Z);
        N.M4(iR, bz, 0);
        N.M4(iR, fi, 1);
        N.M4(iR, iZ, 2);
        a = {
            I: B.mr,
            kN: bz,
            gQ: fi,
            vW: iZ,
            i_: !0,
            vP: !1
        }
    }
    if (z == "selc") {
        var a4 = new Float32Array(9 * 3 * 2)
            , dQ = q.AO
            , aP = q.Mthd ? q.Mthd.v.CrcM == "Absl" : !1;
        for (var x = 0; x < 9; x++) {
            var eA = x * 6
                , gi = ig.o8(q, x)
                , fX = gi[0] / 100
                , iK = gi[1] / 100
                , fU = gi[2] / 100
                , im = gi[3] / 100;
            if (aP) {
                a4[eA] = a4[eA + 1] = a4[eA + 2] = 1;
                a4[eA + 3] = fX * (1 + im) + im;
                a4[eA + 4] = iK * (1 + im) + im;
                a4[eA + 5] = fU * (1 + im) + im
            } else {
                a4[eA + 0] = (1 + fX) * (1 + im);
                a4[eA + 1] = (1 + iK) * (1 + im);
                a4[eA + 2] = (1 + fU) * (1 + im)
            }
        }
        a = {
            I: B.$u,
            apP: a4
        }
    }
    if (z == "blwh") {
        var bd = "Rd Yllw Grn Cyn Bl Mgnt".split(" ")
            , a = []
            , gY = 0
            , lf = 0;
        for (var l = 0; l < 6; l++)
            a.push(q[bd[l]] ? q[bd[l]].v : 50);
        a.push(q.useTint.v, q.tintColor.v);
        var fV = [];
        for (var l = 0; l < 6; l++)
            fV.push((a[l] - 50) / 50);
        var dW = N.P0.dJ(a[7]);
        dW.o /= 255;
        dW.k /= 255;
        dW.X /= 255;
        var jY = N.IV(dW.o, dW.k, dW.X)
            , b2 = N.uz(N.O$(jY.nr, 1, .5))
            , gP = jY.Ty * jY.Z7;
        if (b2 == .5)
            gY = lf = .5;
        else {
            gY = gP * (.5 - b2) / (.5 / b2 - 1);
            lf = 1 - gP * (.5 - b2) - 1 / (2 * (1 - b2));
            lf /= 1 - 1 / (2 * (1 - b2))
        }
        a = {
            I: B.xo,
            auq: fV,
            SA: a[6] ? 1 : 0,
            anG: jY.nr,
            uz: b2,
            auY: gP,
            jq: gY,
            ap8: lf
        }
    }
    if (z == "blnc") {
        var K = []
            , kd = ["ShdL", "MdtL", "HghL"];
        for (var l = 0; l < 3; l++) {
            if (q[kd[l]] == null) {
                K[l] = [0, 0, 0];
                continue
            }
            var k0 = q[kd[l]].v
                , kP = k0[0].v / 100
                , g0 = k0[1].v / 100
                , eE = k0[2].v / 100
                , jh = q.PrsL == null || q.PrsL.v ? (Math.min(kP, g0, eE) + Math.max(kP, g0, eE)) / 2 : 0;
            K[l] = [kP - jh, g0 - jh, eE - jh]
        }
        var D = [new Float32Array(256), new Float32Array(256), new Float32Array(256)];
        for (var x = 0; x < 3; x++)
            for (var l = 0; l < 256; l++) {
                var c = l * (1 / 255)
                    , kA = 0
                    , j = 0
                    , a5 = 0;
                j = K[2][x];
                a5 = Math.abs(j);
                if (j < 0)
                    kA = Math.pow(c, Math.SQRT2);
                else
                    kA = 1.63 * (Math.pow(c + .04, .5) - .2);
                c = a5 * kA + (1 - a5) * c;
                j = K[1][x];
                a5 = Math.abs(j);
                if (j < 0)
                    kA = Math.pow(c, 2);
                else
                    kA = Math.min(2.35 * (Math.pow(c + .09, .5) - .3), Math.pow(c, 1 / 2));
                c = a5 * kA + (1 - a5) * c;
                j = K[0][x];
                a5 = Math.abs(j);
                if (j < 0)
                    kA = c < .4 ? 0 : Math.pow((c - .4) / .6, Math.SQRT2);
                else
                    kA = Math.pow(c, Math.SQRT2 / 2);
                c = a5 * kA + (1 - a5) * c;
                c = Math.max(0, Math.min(1, c));
                D[x][l] = c
            }
        a = {
            I: B.mr,
            kN: D[0],
            gQ: D[1],
            vW: D[2],
            i_: !1,
            vP: !1
        }
    }
    if (z == "phfl") {
        var ju = N.P0.dJ(q.Clr.v)
            , j7 = [ju.o / 255, ju.k / 255, ju.X / 255]
            , hO = q.Dnst.v / 100
            , D = [new Float32Array(256), new Float32Array(256), new Float32Array(256)];
        for (var x = 0; x < 3; x++)
            for (var l = 0; l < 256; l++) {
                var c = l * (1 / 255)
                    , aw = c * j7[x];
                aw = Math.max(0, Math.min(1, aw));
                c = hO * aw + (1 - hO) * c;
                D[x][l] = c
            }
        a = {
            I: B.mr,
            kN: D[0],
            gQ: D[1],
            vW: D[2],
            i_: !1,
            vP: q.PrsL.v
        }
    }
    if (z == "thrs") {
        var V = new Float32Array(256);
        for (var l = q.Lvl.v; l < 256; l++)
            V[l] = 1;
        a = {
            I: B.mr,
            kN: V,
            gQ: V,
            vW: V,
            i_: !0,
            vP: !1
        }
    }
    if (z == "mixr") {
        var fD = cS.fk(q)
            , _ = [];
        for (var l = 0; l < fD.K.length; l++)
            if (l % 5 != 3)
                _.push(fD.K[l] / 100);
        if (fD.Oj) {
            for (var ej = 1; ej < 3; ej++)
                for (var c = 0; c < 4; c++)
                    _[ej * 4 + c] = _[c]
        }
        a = {
            I: B.yJ,
            xy: _
        }
    }
    if (z == "rplc") {
        var b1 = q.Mnm.v
            , cc = q.Mxm.v;
        a = {
            I: B.IF,
            uD: [b1.Lmnc.v, b1.A.v, b1.B.v],
            Za: [cc.Lmnc.v, cc.A.v, cc.B.v],
            shift: [q.H.v / 360, q.Strt.v / 100, q.Lght.v / 100],
            FF: q.Fzns.v / 150
        }
    }
    if (z == "clrL" && q.profile) {
        var ba = new Uint8Array(q.profile.v)
            , hC = ICC.R(ba.buffer)
            , kn = []
            , ew = 17
            , kn = ICC.U.sampleLUT(hC, ew);
        a = {
            I: B.gp,
            SZ: ICC.U.lutToRGBA32(kn, ew),
            aFu: kn,
            Dc: ew
        }
    }
    var m = q ? q.showClipping : null;
    if (m) {
        var jD = [a.kN, a.gQ, a.vW]
            , ht = m.v == 1 ? 1 / 255 : 253 / 255;
        for (var X = 0; X < 3; X++)
            for (var l = 0; l < jD[X].length; l++)
                jD[X][l] = jD[X][l] < ht ? 0 : 1
    }
    return a
}
    ;
cS.YK = function (z, q) {
    var B = -1;
    if (z != "levl" || q == null)
        B = -1;
    else if (q.Auto)
        B = 0;
    else if (q.AuCo)
        B = 1;
    else if (q.autoBlackWhite)
        B = 2;
    return B
}
    ;
cS.Si = {
    mr: 0,
    nQ: 1,
    _H: 2,
    $u: 3,
    xo: 4,
    yJ: 5,
    IF: 6,
    gp: 7
};
cS.Zw = function (z) {
    if (z < 0)
        return z;
    return Math.pow(Math.tan(Math.PI / 2 * z), 1.3)
}
    ;
cS.a1w = function (z) {
    if (z < 0)
        return z;
    z = Math.pow(z, 1 / 1.3);
    return Math.atan2(z, 1) / (Math.PI / 2)
}
    ;
cS.UK = function (z, q, B, a) {
    var p = cS.Si
        , r = Date.now();
    if (hx.KV && a.C() > 300 * 300 && z.I != p.mr && z.I != p.gp) {
        a = a.P();
        a.x = a.y = 0;
        var k = hx.kQ(0, a.r, a.$, N.Q$(q));
        k.set(q);
        hx.UD(k, a);
        k.Ys(a);
        cS.nS(z, k.dn, a);
        k.get(B);
        return
    }
    var s = q.length
        , m = N.Q$(q)
        , u = m == 8 ? 255 : m == 16 ? 65535 : 1
        , g = 1 / u;
    for (var l = 0; l < s; l += 4)
        B[l + 3] = q[l + 3];
    if (z.I == p.gp) {
        var M = z.aFu
            , _ = z.Dc;
        ICC.U.applyLUT(M, _, q, B);
        var s = q.length
    }
    if (z.I == p.yJ)
        N.AU.adt(q, B, z.xy);
    if (z.I == p.xo) {
        var P = z.auY
            , Z = z.uz
            , j = z.jq
            , G = z.ap8
            , s = q.length;
        for (var l = 0; l < s; l += 4) {
            var a = q[l] * g
                , F = q[l + 1] * g
                , i = q[l + 2] * g
                , n = N._l(a, F, i)
                , A = 0;
            for (var o = 0; o < 6; o++)
                A += Math.min(1, 1.7 * (1 - n.Ix)) * n.Ty * z.auq[o] * cS.aK3(n.nr, o * (1 / 6));
            var c = Math.max(0, Math.min(1, n.Ix * (1 + A)));
            if (z.SA == 1) {
                var x = 0;
                if (c < j)
                    x = c * (.5 / Z);
                else if (c < G)
                    x = c + P * (.5 - Z);
                else
                    x = 1 - (1 - c) * .5 / (1 - Z);
                n.nr = z.anG;
                n.Ty = Math.min(1, P + 3 * P * Math.abs(c - .5 * (j + G)));
                n.Ix = x
            } else {
                n.nr = 0;
                n.Ty = 0;
                n.Ix = c
            }
            var V = N.O$(n.nr, n.Ty, n.Ix);
            B[l] = V.o * u;
            B[l + 1] = V.k * u;
            B[l + 2] = V.X * u
        }
    }
    if (z.I == p.$u) {
        var e = z.apP
            , s = q.length
            , K = 1 / 255;
        for (var l = 0; l < s; l += 4) {
            var a = q[l] * K
                , F = q[l + 1] * K
                , i = q[l + 2] * K
                , n = N._l(a, F, i)
                , Q = Math.max(a, Math.max(F, i))
                , E = Math.min(a, Math.min(F, i))
                , y = 1 - a
                , U = 1 - F
                , R = 1 - i
                , d = 0
                , v = 0
                , b = 0;
            for (var o = 0; o < 9; o++) {
                var L = o * 6
                    , D = 0;
                if (e[L] == 1 && e[L + 1] == 1 && e[L + 2] == 1 && e[L + 3] == 0 && e[L + 4] == 0 && e[L + 5] == 0)
                    continue;
                var O = y * e[L] + e[L + 3]
                    , Y = U * e[L + 1] + e[L + 4]
                    , w = R * e[L + 2] + e[L + 5];
                if (o < 6)
                    D = cS.aK3(n.nr, o * (1 / 6)) * n.Ty * 2 * Math.min(n.Ix, 1 - n.Ix);
                else if (o == 6)
                    D = Math.max(0, E - .5) * 2;
                else if (o == 7)
                    D = 1 - (Math.abs(Q - .5) + Math.abs(E - .5));
                else
                    D = Math.max(0, .5 - Q) * 2;
                d += (Math.max(0, Math.min(1, O)) - y) * D;
                v += (Math.max(0, Math.min(1, Y)) - U) * D;
                b += (Math.max(0, Math.min(1, w)) - R) * D
            }
            y = Math.max(0, Math.min(1, y + d));
            U = Math.max(0, Math.min(1, U + v));
            R = Math.max(0, Math.min(1, R + b));
            a = 1 - y;
            F = 1 - U;
            i = 1 - R;
            B[l] = Math.round(a * 255);
            B[l + 1] = Math.round(F * 255);
            B[l + 2] = Math.round(i * 255)
        }
    }
    if (z.I == p.mr) {
        N.avW(q, B, z.kN, z.gQ, z.vW, z.i_, z.vP)
    }
    if (z.I == p.nQ) {
        if (cS.a8N == null) {
            cS.a8N = new Float64Array(1024);
            for (var l = 0; l < 1024; l++)
                cS.a8N[l] = cS.Zw(-1 + 2 * l / 1023)
        }
        var h = cS.a8N
            , f = (z.map.length >>> 2) - 1
            , H = z.map;
        for (var l = 0; l < s; l += 4) {
            var a = q[l] * g
                , F = q[l + 1] * g
                , i = q[l + 2] * g
                , X = Math.min(a, F, i)
                , I = Math.max(a, F, i)
                , i_ = (N._l(a, F, i).nr + 5e-4) * f
                , W = 0
                , $ = 0
                , J = i_ - Math.floor(i_)
                , bV = Math.floor(i_) * 4
                , bh = Math.min(f * 4, bV + 4)
                , j1 = (1 - J) * H[bV] + J * H[bh + 0]
                , ak = (1 - J) * H[bV + 1] + J * H[bh + 1]
                , bB = (1 - J) * H[bV + 2] + J * H[bh + 2]
                , A = -bB
                , eP = X;
            if (0 < bB) {
                A = bB;
                eP = I
            }
            var io = z.aqP + z.Ry * A * eP
                , jL = z.Ry * (1 - A);
            a = io + jL * a;
            F = io + jL * F;
            i = io + jL * i;
            I = Math.max(a, F, i);
            X = Math.min(a, F, i);
            $ = (I + X) * .5;
            if (I != X) {
                var d5 = I - X;
                W = $ > .5 ? d5 / (2 - (I + X)) : d5 / (I + X)
            }
            var cr = ak;
            if (z.aHw == 0) {
                ak = h[Math.floor((1 + ak) * 511.5)];
                cr = Math.min(W * (1 + ak), 1)
            }
            var V = N.O$(j1, cr, $);
            a = V.o;
            F = V.k;
            i = V.X;
            B[l] = a * u;
            B[l + 1] = F * u;
            B[l + 2] = i * u
        }
    }
    if (z.I == p.IF) {
        N.eG(q, B);
        var lk = new Uint32Array(q.buffer)
            , ad = new Uint32Array(B.buffer)
            , s = lk.length
            , g8 = z.FF
            , bk = 1 / g8
            , je = {
                Rq: z.uD[0],
                u0: z.uD[1],
                X: z.uD[2]
            }
            , eM = {
                Rq: z.Za[0],
                u0: z.Za[1],
                X: z.Za[2]
            };
        for (var l = 0; l < s; l++) {
            var kC = lk[l]
                , e6 = kC & 255
                , l7 = kC >>> 8 & 255
                , fw = kC >>> 16 & 255
                , a = e6 * (1 / 255)
                , F = l7 * (1 / 255)
                , i = fw * (1 / 255)
                , g_ = kC >>> 24
                , j8 = N.Mw(e6, l7, fw)
                , kx = N.abf(j8, je, eM, g8, bk);
            if (kx == 0)
                continue;
            var n = N._l(a, F, i)
                , j1 = 2 + n.nr + z.shift[0];
            n.nr = j1 - ~~j1;
            n.Ty = Math.max(0, Math.min(1, n.Ty + z.shift[1]));
            n.Ix = Math.max(0, Math.min(1, n.Ix + z.shift[2]));
            var V = N.O$(n.nr, n.Ty, n.Ix);
            a = (1 - kx) * a + kx * V.o;
            F = (1 - kx) * F + kx * V.k;
            i = (1 - kx) * i + kx * V.X;
            ad[l] = g_ << 24 | i * 255 << 16 | F * 255 << 8 | a * 255
        }
    }
    if (z.I == p._H) {
        var kz = z.Ui[0]
            , ki = z.Ui[1]
            , ea = z.Ui[2]
            , A = z.Ui[3]
            , kM = N.AU.Jv([.299, .587, .114, -.147, -.289, .436, .615, -.515, -.1])
            , kB = N.AU._y(kM)
            , h4 = 2.4;
        function _(c_) {
            return Math.max(0, Math.min(1, c_))
        }
        function k0(c_) {
            return Math.pow(c_, h4)
        }
        function eS(c_) {
            return Math.pow(c_, 1 / h4)
        }
        function k8(a, F, i, c_) {
            a = k0(a);
            F = k0(F);
            i = k0(i);
            var iR = N.AU.az(kM, [a, F, i, 1]);
            iR[0] *= ea;
            iR[1] *= A;
            iR[2] *= A;
            var V = N.AU.az(kB, iR);
            V[0] = eS(_(V[0]));
            V[1] = eS(_(V[1]));
            V[2] = eS(_(V[2]));
            return V
        }
        for (var l = 0; l < s; l += 4) {
            var a = q[l] * g
                , F = q[l + 1] * g
                , i = q[l + 2] * g
                , V = k8(a, F, i, kz);
            a = V[0];
            F = V[1];
            i = V[2];
            var l8 = N._l(a, F, i);
            l8.Ty = Math.max(0, Math.min(1, l8.Ty * (1 + ki)));
            V = N.O$(l8.nr, l8.Ty, l8.Ix);
            a = V.o;
            F = V.k;
            i = V.X;
            B[l] = a * u;
            B[l + 1] = F * u;
            B[l + 2] = i * u
        }
    }
}
    ;
cS.nS = function (z, q, B) {
    hx.GN.nS(z, q)
}
    ;
cS.aK3 = function (z, q) {
    var B = N.zm(q, z) * 6;
    return Math.max(0, Math.min(1, B < 0 ? 1 + B : 1 - B))
}
    ;
