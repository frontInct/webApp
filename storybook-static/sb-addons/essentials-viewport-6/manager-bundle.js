try {
  ;(() => {
    var me = Object.create
    var J = Object.defineProperty
    var he = Object.getOwnPropertyDescriptor
    var fe = Object.getOwnPropertyNames
    var ge = Object.getPrototypeOf,
      be = Object.prototype.hasOwnProperty
    var x = (e =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, { get: (t, l) => (typeof require < 'u' ? require : t)[l] })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments)
      throw Error('Dynamic require of "' + e + '" is not supported')
    })
    var U = (e, t) => () => (e && (t = e((e = 0))), t)
    var we = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports)
    var ye = (e, t, l, c) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of fe(t))
          !be.call(e, a) &&
            a !== l &&
            J(e, a, { get: () => t[a], enumerable: !(c = he(t, a)) || c.enumerable })
      return e
    }
    var Se = (e, t, l) => (
      (l = e != null ? me(ge(e)) : {}),
      ye(t || !e || !e.__esModule ? J(l, 'default', { value: e, enumerable: !0 }) : l, e)
    )
    var f = U(() => {})
    var g = U(() => {})
    var b = U(() => {})
    var se = we((ae, Z) => {
      f()
      g()
      b()
      ;(function (e) {
        if (typeof ae == 'object' && typeof Z < 'u') Z.exports = e()
        else if (typeof define == 'function' && define.amd) define([], e)
        else {
          var t
          typeof window < 'u' || typeof window < 'u'
            ? (t = window)
            : typeof self < 'u'
              ? (t = self)
              : (t = this),
            (t.memoizerific = e())
        }
      })(function () {
        var e, t, l
        return (function c(a, w, d) {
          function o(n, I) {
            if (!w[n]) {
              if (!a[n]) {
                var r = typeof x == 'function' && x
                if (!I && r) return r(n, !0)
                if (i) return i(n, !0)
                var u = new Error("Cannot find module '" + n + "'")
                throw ((u.code = 'MODULE_NOT_FOUND'), u)
              }
              var p = (w[n] = { exports: {} })
              a[n][0].call(
                p.exports,
                function (h) {
                  var y = a[n][1][h]
                  return o(y || h)
                },
                p,
                p.exports,
                c,
                a,
                w,
                d
              )
            }
            return w[n].exports
          }
          for (var i = typeof x == 'function' && x, m = 0; m < d.length; m++) o(d[m])
          return o
        })(
          {
            1: [
              function (c, a, w) {
                a.exports = function (d) {
                  if (typeof Map != 'function' || d) {
                    var o = c('./similar')
                    return new o()
                  } else return new Map()
                }
              },
              { './similar': 2 },
            ],
            2: [
              function (c, a, w) {
                function d() {
                  return (this.list = []), (this.lastItem = void 0), (this.size = 0), this
                }
                ;(d.prototype.get = function (o) {
                  var i
                  if (this.lastItem && this.isEqual(this.lastItem.key, o)) return this.lastItem.val
                  if (((i = this.indexOf(o)), i >= 0))
                    return (this.lastItem = this.list[i]), this.list[i].val
                }),
                  (d.prototype.set = function (o, i) {
                    var m
                    return this.lastItem && this.isEqual(this.lastItem.key, o)
                      ? ((this.lastItem.val = i), this)
                      : ((m = this.indexOf(o)),
                        m >= 0
                          ? ((this.lastItem = this.list[m]), (this.list[m].val = i), this)
                          : ((this.lastItem = { key: o, val: i }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this))
                  }),
                  (d.prototype.delete = function (o) {
                    var i
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, o) &&
                        (this.lastItem = void 0),
                      (i = this.indexOf(o)),
                      i >= 0)
                    )
                      return this.size--, this.list.splice(i, 1)[0]
                  }),
                  (d.prototype.has = function (o) {
                    var i
                    return this.lastItem && this.isEqual(this.lastItem.key, o)
                      ? !0
                      : ((i = this.indexOf(o)), i >= 0 ? ((this.lastItem = this.list[i]), !0) : !1)
                  }),
                  (d.prototype.forEach = function (o, i) {
                    var m
                    for (m = 0; m < this.size; m++)
                      o.call(i || this, this.list[m].val, this.list[m].key, this)
                  }),
                  (d.prototype.indexOf = function (o) {
                    var i
                    for (i = 0; i < this.size; i++) if (this.isEqual(this.list[i].key, o)) return i
                    return -1
                  }),
                  (d.prototype.isEqual = function (o, i) {
                    return o === i || (o !== o && i !== i)
                  }),
                  (a.exports = d)
              },
              {},
            ],
            3: [
              function (c, a, w) {
                var d = c('map-or-similar')
                a.exports = function (n) {
                  var I = new d(!1),
                    r = []
                  return function (u) {
                    var p = function () {
                      var h = I,
                        y,
                        E,
                        S = arguments.length - 1,
                        D = Array(S + 1),
                        T = !0,
                        _
                      if ((p.numArgs || p.numArgs === 0) && p.numArgs !== S + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments'
                        )
                      for (_ = 0; _ < S; _++) {
                        if (((D[_] = { cacheItem: h, arg: arguments[_] }), h.has(arguments[_]))) {
                          h = h.get(arguments[_])
                          continue
                        }
                        ;(T = !1), (y = new d(!1)), h.set(arguments[_], y), (h = y)
                      }
                      return (
                        T && (h.has(arguments[S]) ? (E = h.get(arguments[S])) : (T = !1)),
                        T || ((E = u.apply(null, arguments)), h.set(arguments[S], E)),
                        n > 0 &&
                          ((D[S] = { cacheItem: h, arg: arguments[S] }),
                          T ? o(r, D) : r.push(D),
                          r.length > n && i(r.shift())),
                        (p.wasMemoized = T),
                        (p.numArgs = S + 1),
                        E
                      )
                    }
                    return (p.limit = n), (p.wasMemoized = !1), (p.cache = I), (p.lru = r), p
                  }
                }
                function o(n, I) {
                  var r = n.length,
                    u = I.length,
                    p,
                    h,
                    y
                  for (h = 0; h < r; h++) {
                    for (p = !0, y = 0; y < u; y++)
                      if (!m(n[h][y].arg, I[y].arg)) {
                        p = !1
                        break
                      }
                    if (p) break
                  }
                  n.push(n.splice(h, 1)[0])
                }
                function i(n) {
                  var I = n.length,
                    r = n[I - 1],
                    u,
                    p
                  for (
                    r.cacheItem.delete(r.arg), p = I - 2;
                    p >= 0 && ((r = n[p]), (u = r.cacheItem.get(r.arg)), !u || !u.size);
                    p--
                  )
                    r.cacheItem.delete(r.arg)
                }
                function m(n, I) {
                  return n === I || (n !== n && I !== I)
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3]
        )(3)
      })
    })
    f()
    g()
    b()
    f()
    g()
    b()
    f()
    g()
    b()
    f()
    g()
    b()
    var s = __REACT__,
      {
        Children: $e,
        Component: Je,
        Fragment: M,
        Profiler: Qe,
        PureComponent: Xe,
        StrictMode: et,
        Suspense: tt,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ot,
        cloneElement: nt,
        createContext: rt,
        createElement: N,
        createFactory: it,
        createRef: lt,
        forwardRef: at,
        isValidElement: st,
        lazy: ct,
        memo: Q,
        startTransition: ut,
        unstable_act: pt,
        useCallback: X,
        useContext: dt,
        useDebugValue: It,
        useDeferredValue: mt,
        useEffect: O,
        useId: ht,
        useImperativeHandle: ft,
        useInsertionEffect: gt,
        useLayoutEffect: bt,
        useMemo: wt,
        useReducer: yt,
        useRef: ee,
        useState: z,
        useSyncExternalStore: St,
        useTransition: vt,
        version: _t,
      } = __REACT__
    f()
    g()
    b()
    var Et = __STORYBOOK_API__,
      {
        ActiveTabs: Tt,
        Consumer: Rt,
        ManagerContext: xt,
        Provider: Ot,
        RequestResponseError: Lt,
        addons: H,
        combineParameters: Bt,
        controlOrMetaKey: Pt,
        controlOrMetaSymbol: Dt,
        eventMatchesShortcut: Mt,
        eventToShortcut: Vt,
        experimental_MockUniversalStore: Ut,
        experimental_UniversalStore: Nt,
        experimental_requestResponse: zt,
        experimental_useUniversalStore: Ht,
        isMacLike: Gt,
        isShortcutTaken: Ft,
        keyToSymbol: qt,
        merge: Wt,
        mockChannel: Yt,
        optionOrAltSymbol: jt,
        shortcutMatchesShortcut: Kt,
        shortcutToHumanString: Zt,
        types: te,
        useAddonState: $t,
        useArgTypes: Jt,
        useArgs: Qt,
        useChannel: Xt,
        useGlobalTypes: eo,
        useGlobals: G,
        useParameter: F,
        useSharedState: to,
        useStoryPrepared: oo,
        useStorybookApi: oe,
        useStorybookState: no,
      } = __STORYBOOK_API__
    f()
    g()
    b()
    var so = __STORYBOOK_COMPONENTS__,
      {
        A: co,
        ActionBar: uo,
        AddonPanel: po,
        Badge: Io,
        Bar: mo,
        Blockquote: ho,
        Button: fo,
        ClipboardCode: go,
        Code: bo,
        DL: wo,
        Div: yo,
        DocumentWrapper: So,
        EmptyTabContent: vo,
        ErrorFormatter: _o,
        FlexBar: Co,
        Form: ko,
        H1: Ao,
        H2: Eo,
        H3: To,
        H4: Ro,
        H5: xo,
        H6: Oo,
        HR: Lo,
        IconButton: L,
        IconButtonSkeleton: Bo,
        Icons: Po,
        Img: Do,
        LI: Mo,
        Link: Vo,
        ListItem: Uo,
        Loader: No,
        Modal: zo,
        OL: Ho,
        P: Go,
        Placeholder: Fo,
        Pre: qo,
        ProgressSpinner: Wo,
        ResetWrapper: Yo,
        ScrollArea: jo,
        Separator: Ko,
        Spaced: Zo,
        Span: $o,
        StorybookIcon: Jo,
        StorybookLogo: Qo,
        Symbols: Xo,
        SyntaxHighlighter: en,
        TT: tn,
        TabBar: on,
        TabButton: nn,
        TabWrapper: rn,
        Table: ln,
        Tabs: an,
        TabsState: sn,
        TooltipLinkList: q,
        TooltipMessage: cn,
        TooltipNote: un,
        UL: pn,
        WithTooltip: W,
        WithTooltipPure: dn,
        Zoom: In,
        codeCommon: mn,
        components: hn,
        createCopyToClipboardFunction: fn,
        getStoryHref: gn,
        icons: bn,
        interleaveSeparators: wn,
        nameSpaceClassNames: yn,
        resetComponents: Sn,
        withReset: vn,
      } = __STORYBOOK_COMPONENTS__
    f()
    g()
    b()
    var En = __STORYBOOK_THEMING__,
      {
        CacheProvider: Tn,
        ClassNames: Rn,
        Global: Y,
        ThemeProvider: xn,
        background: On,
        color: Ln,
        convert: Bn,
        create: Pn,
        createCache: Dn,
        createGlobal: Mn,
        createReset: Vn,
        css: Un,
        darken: Nn,
        ensure: zn,
        ignoreSsrWarning: Hn,
        isPropValid: Gn,
        jsx: Fn,
        keyframes: qn,
        lighten: Wn,
        styled: v,
        themes: Yn,
        typography: jn,
        useTheme: Kn,
        withTheme: Zn,
      } = __STORYBOOK_THEMING__
    f()
    g()
    b()
    var er = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: tr,
        AccessibilityIcon: or,
        AccessibilityIgnoredIcon: nr,
        AddIcon: rr,
        AdminIcon: ir,
        AlertAltIcon: lr,
        AlertIcon: ar,
        AlignLeftIcon: sr,
        AlignRightIcon: cr,
        AppleIcon: ur,
        ArrowBottomLeftIcon: pr,
        ArrowBottomRightIcon: dr,
        ArrowDownIcon: Ir,
        ArrowLeftIcon: mr,
        ArrowRightIcon: hr,
        ArrowSolidDownIcon: fr,
        ArrowSolidLeftIcon: gr,
        ArrowSolidRightIcon: br,
        ArrowSolidUpIcon: wr,
        ArrowTopLeftIcon: yr,
        ArrowTopRightIcon: Sr,
        ArrowUpIcon: vr,
        AzureDevOpsIcon: _r,
        BackIcon: Cr,
        BasketIcon: kr,
        BatchAcceptIcon: Ar,
        BatchDenyIcon: Er,
        BeakerIcon: Tr,
        BellIcon: Rr,
        BitbucketIcon: xr,
        BoldIcon: Or,
        BookIcon: Lr,
        BookmarkHollowIcon: Br,
        BookmarkIcon: Pr,
        BottomBarIcon: Dr,
        BottomBarToggleIcon: Mr,
        BoxIcon: Vr,
        BranchIcon: Ur,
        BrowserIcon: ne,
        ButtonIcon: Nr,
        CPUIcon: zr,
        CalendarIcon: Hr,
        CameraIcon: Gr,
        CameraStabilizeIcon: Fr,
        CategoryIcon: qr,
        CertificateIcon: Wr,
        ChangedIcon: Yr,
        ChatIcon: jr,
        CheckIcon: Kr,
        ChevronDownIcon: Zr,
        ChevronLeftIcon: $r,
        ChevronRightIcon: Jr,
        ChevronSmallDownIcon: Qr,
        ChevronSmallLeftIcon: Xr,
        ChevronSmallRightIcon: ei,
        ChevronSmallUpIcon: ti,
        ChevronUpIcon: oi,
        ChromaticIcon: ni,
        ChromeIcon: ri,
        CircleHollowIcon: ii,
        CircleIcon: li,
        ClearIcon: ai,
        CloseAltIcon: si,
        CloseIcon: ci,
        CloudHollowIcon: ui,
        CloudIcon: pi,
        CogIcon: di,
        CollapseIcon: Ii,
        CommandIcon: mi,
        CommentAddIcon: hi,
        CommentIcon: fi,
        CommentsIcon: gi,
        CommitIcon: bi,
        CompassIcon: wi,
        ComponentDrivenIcon: yi,
        ComponentIcon: Si,
        ContrastIcon: vi,
        ContrastIgnoredIcon: _i,
        ControlsIcon: Ci,
        CopyIcon: ki,
        CreditIcon: Ai,
        CrossIcon: Ei,
        DashboardIcon: Ti,
        DatabaseIcon: Ri,
        DeleteIcon: xi,
        DiamondIcon: Oi,
        DirectionIcon: Li,
        DiscordIcon: Bi,
        DocChartIcon: Pi,
        DocListIcon: Di,
        DocumentIcon: Mi,
        DownloadIcon: Vi,
        DragIcon: Ui,
        EditIcon: Ni,
        EllipsisIcon: zi,
        EmailIcon: Hi,
        ExpandAltIcon: Gi,
        ExpandIcon: Fi,
        EyeCloseIcon: qi,
        EyeIcon: Wi,
        FaceHappyIcon: Yi,
        FaceNeutralIcon: ji,
        FaceSadIcon: Ki,
        FacebookIcon: Zi,
        FailedIcon: $i,
        FastForwardIcon: Ji,
        FigmaIcon: Qi,
        FilterIcon: Xi,
        FlagIcon: el,
        FolderIcon: tl,
        FormIcon: ol,
        GDriveIcon: nl,
        GithubIcon: rl,
        GitlabIcon: il,
        GlobeIcon: ll,
        GoogleIcon: al,
        GraphBarIcon: sl,
        GraphLineIcon: cl,
        GraphqlIcon: ul,
        GridAltIcon: pl,
        GridIcon: dl,
        GrowIcon: j,
        HeartHollowIcon: Il,
        HeartIcon: ml,
        HomeIcon: hl,
        HourglassIcon: fl,
        InfoIcon: gl,
        ItalicIcon: bl,
        JumpToIcon: wl,
        KeyIcon: yl,
        LightningIcon: Sl,
        LightningOffIcon: vl,
        LinkBrokenIcon: _l,
        LinkIcon: Cl,
        LinkedinIcon: kl,
        LinuxIcon: Al,
        ListOrderedIcon: El,
        ListUnorderedIcon: Tl,
        LocationIcon: Rl,
        LockIcon: xl,
        MarkdownIcon: Ol,
        MarkupIcon: Ll,
        MediumIcon: Bl,
        MemoryIcon: Pl,
        MenuIcon: Dl,
        MergeIcon: Ml,
        MirrorIcon: Vl,
        MobileIcon: re,
        MoonIcon: Ul,
        NutIcon: Nl,
        OutboxIcon: zl,
        OutlineIcon: Hl,
        PaintBrushIcon: Gl,
        PaperClipIcon: Fl,
        ParagraphIcon: ql,
        PassedIcon: Wl,
        PhoneIcon: Yl,
        PhotoDragIcon: jl,
        PhotoIcon: Kl,
        PhotoStabilizeIcon: Zl,
        PinAltIcon: $l,
        PinIcon: Jl,
        PlayAllHollowIcon: Ql,
        PlayBackIcon: Xl,
        PlayHollowIcon: ea,
        PlayIcon: ta,
        PlayNextIcon: oa,
        PlusIcon: na,
        PointerDefaultIcon: ra,
        PointerHandIcon: ia,
        PowerIcon: la,
        PrintIcon: aa,
        ProceedIcon: sa,
        ProfileIcon: ca,
        PullRequestIcon: ua,
        QuestionIcon: pa,
        RSSIcon: da,
        RedirectIcon: Ia,
        ReduxIcon: ma,
        RefreshIcon: ie,
        ReplyIcon: ha,
        RepoIcon: fa,
        RequestChangeIcon: ga,
        RewindIcon: ba,
        RulerIcon: wa,
        SaveIcon: ya,
        SearchIcon: Sa,
        ShareAltIcon: va,
        ShareIcon: _a,
        ShieldIcon: Ca,
        SideBySideIcon: ka,
        SidebarAltIcon: Aa,
        SidebarAltToggleIcon: Ea,
        SidebarIcon: Ta,
        SidebarToggleIcon: Ra,
        SpeakerIcon: xa,
        StackedIcon: Oa,
        StarHollowIcon: La,
        StarIcon: Ba,
        StatusFailIcon: Pa,
        StatusIcon: Da,
        StatusPassIcon: Ma,
        StatusWarnIcon: Va,
        StickerIcon: Ua,
        StopAltHollowIcon: Na,
        StopAltIcon: za,
        StopIcon: Ha,
        StorybookIcon: Ga,
        StructureIcon: Fa,
        SubtractIcon: qa,
        SunIcon: Wa,
        SupportIcon: Ya,
        SweepIcon: ja,
        SwitchAltIcon: Ka,
        SyncIcon: Za,
        TabletIcon: le,
        ThumbsUpIcon: $a,
        TimeIcon: Ja,
        TimerIcon: Qa,
        TransferIcon: K,
        TrashIcon: Xa,
        TwitterIcon: es,
        TypeIcon: ts,
        UbuntuIcon: os,
        UndoIcon: ns,
        UnfoldIcon: rs,
        UnlockIcon: is,
        UnpinIcon: ls,
        UploadIcon: as,
        UserAddIcon: ss,
        UserAltIcon: cs,
        UserIcon: us,
        UsersIcon: ps,
        VSCodeIcon: ds,
        VerifiedIcon: Is,
        VideoIcon: ms,
        WandIcon: hs,
        WatchIcon: fs,
        WindowsIcon: gs,
        WrenchIcon: bs,
        XIcon: ws,
        YoutubeIcon: ys,
        ZoomIcon: Ss,
        ZoomOutIcon: vs,
        ZoomResetIcon: _s,
        iconList: Cs,
      } = __STORYBOOK_ICONS__
    var $ = Se(se()),
      B = 'storybook/viewport',
      R = 'viewport',
      pe = {
        mobile1: {
          name: 'Small mobile',
          styles: { height: '568px', width: '320px' },
          type: 'mobile',
        },
        mobile2: {
          name: 'Large mobile',
          styles: { height: '896px', width: '414px' },
          type: 'mobile',
        },
        tablet: { name: 'Tablet', styles: { height: '1112px', width: '834px' }, type: 'tablet' },
      },
      P = { name: 'Reset viewport', styles: { height: '100%', width: '100%' }, type: 'desktop' },
      _e = { [R]: { value: void 0, isRotated: !1 } },
      Ce = { viewport: 'reset', viewportRotated: !1 },
      ke = globalThis.FEATURES?.viewportStoryGlobals ? _e : Ce,
      de = (e, t) => e.indexOf(t),
      Ae = (e, t) => {
        let l = de(e, t)
        return l === e.length - 1 ? e[0] : e[l + 1]
      },
      Ee = (e, t) => {
        let l = de(e, t)
        return l < 1 ? e[e.length - 1] : e[l - 1]
      },
      Ie = async (e, t, l, c) => {
        await e.setAddonShortcut(B, {
          label: 'Previous viewport',
          defaultShortcut: ['alt', 'shift', 'V'],
          actionName: 'previous',
          action: () => {
            l({ viewport: Ee(c, t) })
          },
        }),
          await e.setAddonShortcut(B, {
            label: 'Next viewport',
            defaultShortcut: ['alt', 'V'],
            actionName: 'next',
            action: () => {
              l({ viewport: Ae(c, t) })
            },
          }),
          await e.setAddonShortcut(B, {
            label: 'Reset viewport',
            defaultShortcut: ['alt', 'control', 'V'],
            actionName: 'reset',
            action: () => {
              l(ke)
            },
          })
      },
      Te = v.div({ display: 'inline-flex', alignItems: 'center' }),
      ce = v.div(({ theme: e }) => ({
        display: 'inline-block',
        textDecoration: 'none',
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '1',
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
      })),
      Re = v(L)(() => ({ display: 'inline-flex', alignItems: 'center' })),
      xe = v.div(({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, marginLeft: 10 })),
      Oe = {
        desktop: s.createElement(ne, null),
        mobile: s.createElement(re, null),
        tablet: s.createElement(le, null),
        other: s.createElement(M, null),
      },
      Le = ({ api: e }) => {
        let t = F(R),
          [l, c, a] = G(),
          [w, d] = z(!1),
          { options: o = pe, disable: i } = t || {},
          m = l?.[R] || {},
          n = m.value,
          I = m.isRotated,
          r = o[n] || P,
          u = w || r !== P,
          p = R in a,
          h = Object.keys(o).length
        if (
          (O(() => {
            Ie(e, n, c, Object.keys(o))
          }, [o, n, c, e]),
          r.styles === null || !o || h < 1)
        )
          return null
        if (typeof r.styles == 'function')
          return (
            console.warn(
              'Addon Viewport no longer supports dynamic styles using a function, use css calc() instead'
            ),
            null
          )
        let y = I ? r.styles.height : r.styles.width,
          E = I ? r.styles.width : r.styles.height
        return i
          ? null
          : s.createElement(Be, {
              item: r,
              updateGlobals: c,
              viewportMap: o,
              viewportName: n,
              isRotated: I,
              setIsTooltipVisible: d,
              isLocked: p,
              isActive: u,
              width: y,
              height: E,
            })
      },
      Be = s.memo(function (e) {
        let {
            item: t,
            viewportMap: l,
            viewportName: c,
            isRotated: a,
            updateGlobals: w,
            setIsTooltipVisible: d,
            isLocked: o,
            isActive: i,
            width: m,
            height: n,
          } = e,
          I = X(r => w({ [R]: r }), [w])
        return s.createElement(
          M,
          null,
          s.createElement(
            W,
            {
              placement: 'bottom',
              tooltip: ({ onHide: r }) =>
                s.createElement(q, {
                  links: [
                    ...(length > 0 && t !== P
                      ? [
                          {
                            id: 'reset',
                            title: 'Reset viewport',
                            icon: s.createElement(ie, null),
                            onClick: () => {
                              I({ value: void 0, isRotated: !1 }), r()
                            },
                          },
                        ]
                      : []),
                    ...Object.entries(l).map(([u, p]) => ({
                      id: u,
                      title: p.name,
                      icon: Oe[p.type],
                      active: u === c,
                      onClick: () => {
                        I({ value: u, isRotated: !1 }), r()
                      },
                    })),
                  ].flat(),
                }),
              closeOnOutsideClick: !0,
              onVisibleChange: d,
            },
            s.createElement(
              Re,
              {
                disabled: o,
                key: 'viewport',
                title: 'Change the size of the preview',
                active: i,
                onDoubleClick: () => {
                  I({ value: void 0, isRotated: !1 })
                },
              },
              s.createElement(j, null),
              t !== P ? s.createElement(xe, null, t.name, ' ', a ? '(L)' : '(P)') : null
            )
          ),
          s.createElement(Y, {
            styles: { 'iframe[data-is-storybook="true"]': { width: m, height: n } },
          }),
          t !== P
            ? s.createElement(
                Te,
                null,
                s.createElement(ce, { title: 'Viewport width' }, m.replace('px', '')),
                o
                  ? '/'
                  : s.createElement(
                      L,
                      {
                        key: 'viewport-rotate',
                        title: 'Rotate viewport',
                        onClick: () => {
                          I({ value: c, isRotated: !a })
                        },
                      },
                      s.createElement(K, null)
                    ),
                s.createElement(ce, { title: 'Viewport height' }, n.replace('px', ''))
              )
            : null
        )
      }),
      Pe = (0, $.default)(50)(e => [
        ...De,
        ...Object.entries(e).map(([t, { name: l, ...c }]) => ({ ...c, id: t, title: l })),
      ]),
      V = { id: 'reset', title: 'Reset viewport', styles: null, type: 'other' },
      De = [V],
      Me = (0, $.default)(50)((e, t, l, c) =>
        e
          .filter(a => a.id !== V.id || t.id !== a.id)
          .map(a => ({
            ...a,
            onClick: () => {
              l({ viewport: a.id }), c()
            },
          }))
      ),
      Ve = ({ width: e, height: t, ...l }) => ({ ...l, height: e, width: t }),
      Ue = v.div({ display: 'inline-flex', alignItems: 'center' }),
      ue = v.div(({ theme: e }) => ({
        display: 'inline-block',
        textDecoration: 'none',
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '1',
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
      })),
      Ne = v(L)(() => ({ display: 'inline-flex', alignItems: 'center' })),
      ze = v.div(({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, marginLeft: 10 })),
      He = (e, t, l) => {
        if (t === null) return
        let c = typeof t == 'function' ? t(e) : t
        return l ? Ve(c) : c
      },
      Ge = Q(function () {
        let [e, t] = G(),
          { viewports: l = pe, defaultOrientation: c, defaultViewport: a, disable: w } = F(R, {}),
          d = Pe(l),
          o = oe(),
          [i, m] = z(!1)
        a &&
          !d.find(u => u.id === a) &&
          console.warn(
            `Cannot find "defaultViewport" of "${a}" in addon-viewport configs, please check the "viewports" setting in the configuration.`
          ),
          O(() => {
            Ie(o, e, t, Object.keys(l))
          }, [l, e, e.viewport, t, o]),
          O(() => {
            let u = c === 'landscape'
            ;((a && e.viewport !== a) || (c && e.viewportRotated !== u)) &&
              t({ viewport: a, viewportRotated: u })
          }, [c, a, t])
        let n =
            d.find(u => u.id === e.viewport) ||
            d.find(u => u.id === a) ||
            d.find(u => u.default) ||
            V,
          I = ee(),
          r = He(I.current, n.styles, e.viewportRotated)
        return (
          O(() => {
            I.current = r
          }, [n]),
          w || Object.entries(l).length === 0
            ? null
            : s.createElement(
                M,
                null,
                s.createElement(
                  W,
                  {
                    placement: 'top',
                    tooltip: ({ onHide: u }) => s.createElement(q, { links: Me(d, n, t, u) }),
                    closeOnOutsideClick: !0,
                    onVisibleChange: m,
                  },
                  s.createElement(
                    Ne,
                    {
                      key: 'viewport',
                      title: 'Change the size of the preview',
                      active: i || !!r,
                      onDoubleClick: () => {
                        t({ viewport: V.id })
                      },
                    },
                    s.createElement(j, null),
                    r
                      ? s.createElement(
                          ze,
                          null,
                          e.viewportRotated ? `${n.title} (L)` : `${n.title} (P)`
                        )
                      : null
                  )
                ),
                r
                  ? s.createElement(
                      Ue,
                      null,
                      s.createElement(Y, {
                        styles: {
                          'iframe[data-is-storybook="true"]': {
                            ...(r || { width: '100%', height: '100%' }),
                          },
                        },
                      }),
                      s.createElement(ue, { title: 'Viewport width' }, r.width.replace('px', '')),
                      s.createElement(
                        L,
                        {
                          key: 'viewport-rotate',
                          title: 'Rotate viewport',
                          onClick: () => {
                            t({ viewportRotated: !e.viewportRotated })
                          },
                        },
                        s.createElement(K, null)
                      ),
                      s.createElement(ue, { title: 'Viewport height' }, r.height.replace('px', ''))
                    )
                  : null
              )
        )
      })
    H.register(B, e => {
      H.add(B, {
        title: 'viewport / media-queries',
        type: te.TOOL,
        match: ({ viewMode: t, tabId: l }) => t === 'story' && !l,
        render: () => (FEATURES?.viewportStoryGlobals ? N(Le, { api: e }) : N(Ge, null)),
      })
    })
  })()
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
