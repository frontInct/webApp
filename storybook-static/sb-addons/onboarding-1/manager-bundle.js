try {
  ;(() => {
    var so = Object.defineProperty
    var ce = (e, t) => () => (e && (t = e((e = 0))), t)
    var lo = (e, t) => {
      for (var n in t) so(e, n, { get: t[n], enumerable: !0 })
    }
    var X = ce(() => {})
    var Q = ce(() => {})
    var Z = ce(() => {})
    var y,
      Ns,
      Le,
      ks,
      Ls,
      Ms,
      Ds,
      rn,
      js,
      Fs,
      Bs,
      q,
      Ws,
      Us,
      on,
      an,
      sn,
      Hs,
      zs,
      Gs,
      Je,
      Ys,
      qs,
      $s,
      ae,
      Vs,
      Ks,
      Js,
      Xs,
      Qs,
      Zs,
      At,
      ue,
      el,
      tl,
      nl,
      ht = ce(() => {
        X()
        Q()
        Z()
        ;(y = __REACT__),
          ({
            Children: Ns,
            Component: Le,
            Fragment: ks,
            Profiler: Ls,
            PureComponent: Ms,
            StrictMode: Ds,
            Suspense: rn,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: js,
            cloneElement: Fs,
            createContext: Bs,
            createElement: q,
            createFactory: Ws,
            createRef: Us,
            forwardRef: on,
            isValidElement: an,
            lazy: sn,
            memo: Hs,
            startTransition: zs,
            unstable_act: Gs,
            useCallback: Je,
            useContext: Ys,
            useDebugValue: qs,
            useDeferredValue: $s,
            useEffect: ae,
            useId: Vs,
            useImperativeHandle: Ks,
            useInsertionEffect: Js,
            useLayoutEffect: Xs,
            useMemo: Qs,
            useReducer: Zs,
            useRef: At,
            useState: ue,
            useSyncExternalStore: el,
            useTransition: tl,
            version: nl,
          } = __REACT__)
      })
    var Me,
      al,
      mt,
      sl,
      ll,
      cl,
      ul,
      pl,
      dl,
      ln,
      fl,
      cn,
      hl,
      yt = ce(() => {
        X()
        Q()
        Z()
        ;(Me = __REACT_DOM__),
          ({
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: al,
            createPortal: mt,
            createRoot: sl,
            findDOMNode: ll,
            flushSync: cl,
            hydrate: ul,
            hydrateRoot: pl,
            render: dl,
            unmountComponentAtNode: ln,
            unstable_batchedUpdates: fl,
            unstable_renderSubtreeIntoContainer: cn,
            version: hl,
          } = __REACT_DOM__)
      })
    var bl,
      vl,
      El,
      Sl,
      Ol,
      wl,
      Tl,
      Il,
      Rl,
      Cl,
      _l,
      Pl,
      xl,
      Al,
      Nl,
      kl,
      Ll,
      Ml,
      Dl,
      jl,
      Fl,
      Bl,
      Wl,
      Ul,
      Hl,
      zl,
      un,
      Gl,
      Yl,
      ql,
      $l,
      Vl,
      Kl,
      Jl,
      Xl,
      Ql,
      Zl,
      ec,
      tc,
      nc,
      rc,
      oc,
      ic,
      ac,
      sc,
      lc,
      cc,
      uc,
      pn,
      pc,
      dc,
      fc,
      hc,
      mc,
      yc,
      gc,
      bc,
      vc,
      Ec,
      Sc,
      Oc,
      wc,
      Tc,
      dn = ce(() => {
        X()
        Q()
        Z()
        ;(bl = __STORYBOOK_CORE_EVENTS__),
          ({
            ARGTYPES_INFO_REQUEST: vl,
            ARGTYPES_INFO_RESPONSE: El,
            CHANNEL_CREATED: Sl,
            CHANNEL_WS_DISCONNECT: Ol,
            CONFIG_ERROR: wl,
            CREATE_NEW_STORYFILE_REQUEST: Tl,
            CREATE_NEW_STORYFILE_RESPONSE: Il,
            CURRENT_STORY_WAS_SET: Rl,
            DOCS_PREPARED: Cl,
            DOCS_RENDERED: _l,
            FILE_COMPONENT_SEARCH_REQUEST: Pl,
            FILE_COMPONENT_SEARCH_RESPONSE: xl,
            FORCE_REMOUNT: Al,
            FORCE_RE_RENDER: Nl,
            GLOBALS_UPDATED: kl,
            NAVIGATE_URL: Ll,
            PLAY_FUNCTION_THREW_EXCEPTION: Ml,
            PRELOAD_ENTRIES: Dl,
            PREVIEW_BUILDER_PROGRESS: jl,
            PREVIEW_KEYDOWN: Fl,
            REGISTER_SUBSCRIPTION: Bl,
            REQUEST_WHATS_NEW_DATA: Wl,
            RESET_STORY_ARGS: Ul,
            RESULT_WHATS_NEW_DATA: Hl,
            SAVE_STORY_REQUEST: zl,
            SAVE_STORY_RESPONSE: un,
            SELECT_STORY: Gl,
            SET_CONFIG: Yl,
            SET_CURRENT_STORY: ql,
            SET_FILTER: $l,
            SET_GLOBALS: Vl,
            SET_INDEX: Kl,
            SET_STORIES: Jl,
            SET_WHATS_NEW_CACHE: Xl,
            SHARED_STATE_CHANGED: Ql,
            SHARED_STATE_SET: Zl,
            STORIES_COLLAPSE_ALL: ec,
            STORIES_EXPAND_ALL: tc,
            STORY_ARGS_UPDATED: nc,
            STORY_CHANGED: rc,
            STORY_ERRORED: oc,
            STORY_FINISHED: ic,
            STORY_INDEX_INVALIDATED: ac,
            STORY_MISSING: sc,
            STORY_PREPARED: lc,
            STORY_RENDERED: cc,
            STORY_RENDER_PHASE_CHANGED: uc,
            STORY_SPECIFIED: pn,
            STORY_THREW_EXCEPTION: pc,
            STORY_UNCHANGED: dc,
            TELEMETRY_ERROR: fc,
            TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: hc,
            TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: mc,
            TESTING_MODULE_CRASH_REPORT: yc,
            TESTING_MODULE_PROGRESS_REPORT: gc,
            TESTING_MODULE_RUN_ALL_REQUEST: bc,
            TESTING_MODULE_RUN_REQUEST: vc,
            TOGGLE_WHATS_NEW_NOTIFICATIONS: Ec,
            UNHANDLED_ERRORS_WHILE_PLAYING: Sc,
            UPDATE_GLOBALS: Oc,
            UPDATE_QUERY_PARAMS: wc,
            UPDATE_STORY_ARGS: Tc,
          } = __STORYBOOK_CORE_EVENTS__)
      })
    var Nt = ce(() => {
      X()
      Q()
      Z()
      dn()
    })
    var vu,
      Eu,
      Su,
      Ou,
      wu,
      Tu,
      Iu,
      Ru,
      Cu,
      _u,
      Pu,
      xu,
      Au,
      Nu,
      ku,
      Lu,
      Mu,
      Du,
      ju,
      Fu,
      Bu,
      Wu,
      Uu,
      Hu,
      hn,
      zu,
      Gu,
      Yu,
      qu,
      $u,
      Vu,
      Ku,
      Ju,
      Xu,
      Qu,
      Zu,
      ep,
      tp,
      np,
      rp,
      op,
      ip,
      ap,
      sp,
      lp,
      cp,
      mn,
      up,
      pp,
      dp,
      fp,
      hp,
      mp,
      yp,
      gp,
      bp,
      vp,
      Ep,
      Sp,
      Op,
      wp,
      Tp,
      Ip,
      Rp,
      Cp,
      _p,
      Pp,
      xp,
      Ap,
      Np,
      yn = ce(() => {
        X()
        Q()
        Z()
        ;(vu = __STORYBOOK_COMPONENTS__),
          ({
            A: Eu,
            ActionBar: Su,
            AddonPanel: Ou,
            Badge: wu,
            Bar: Tu,
            Blockquote: Iu,
            Button: Ru,
            ClipboardCode: Cu,
            Code: _u,
            DL: Pu,
            Div: xu,
            DocumentWrapper: Au,
            EmptyTabContent: Nu,
            ErrorFormatter: ku,
            FlexBar: Lu,
            Form: Mu,
            H1: Du,
            H2: ju,
            H3: Fu,
            H4: Bu,
            H5: Wu,
            H6: Uu,
            HR: Hu,
            IconButton: hn,
            IconButtonSkeleton: zu,
            Icons: Gu,
            Img: Yu,
            LI: qu,
            Link: $u,
            ListItem: Vu,
            Loader: Ku,
            Modal: Ju,
            OL: Xu,
            P: Qu,
            Placeholder: Zu,
            Pre: ep,
            ProgressSpinner: tp,
            ResetWrapper: np,
            ScrollArea: rp,
            Separator: op,
            Spaced: ip,
            Span: ap,
            StorybookIcon: sp,
            StorybookLogo: lp,
            Symbols: cp,
            SyntaxHighlighter: mn,
            TT: up,
            TabBar: pp,
            TabButton: dp,
            TabWrapper: fp,
            Table: hp,
            Tabs: mp,
            TabsState: yp,
            TooltipLinkList: gp,
            TooltipMessage: bp,
            TooltipNote: vp,
            UL: Ep,
            WithTooltip: Sp,
            WithTooltipPure: Op,
            Zoom: wp,
            codeCommon: Tp,
            components: Ip,
            createCopyToClipboardFunction: Rp,
            getStoryHref: Cp,
            icons: _p,
            interleaveSeparators: Pp,
            nameSpaceClassNames: xp,
            resetComponents: Ap,
            withReset: Np,
          } = __STORYBOOK_COMPONENTS__)
      })
    var jp,
      Fp,
      Bp,
      Wp,
      kt,
      Up,
      gt,
      Lt,
      Hp,
      zp,
      Gp,
      Yp,
      qp,
      $p,
      Vp,
      Kp,
      Jp,
      Xp,
      Xe,
      Qp,
      ee,
      gn,
      Zp,
      bn,
      ed,
      vn = ce(() => {
        X()
        Q()
        Z()
        ;(jp = __STORYBOOK_THEMING__),
          ({
            CacheProvider: Fp,
            ClassNames: Bp,
            Global: Wp,
            ThemeProvider: kt,
            background: Up,
            color: gt,
            convert: Lt,
            create: Hp,
            createCache: zp,
            createGlobal: Gp,
            createReset: Yp,
            css: qp,
            darken: $p,
            ensure: Vp,
            ignoreSsrWarning: Kp,
            isPropValid: Jp,
            jsx: Xp,
            keyframes: Xe,
            lighten: Qp,
            styled: ee,
            themes: gn,
            typography: Zp,
            useTheme: bn,
            withTheme: ed,
          } = __STORYBOOK_THEMING__)
      })
    var id,
      ad,
      sd,
      ld,
      cd,
      ud,
      pd,
      dd,
      fd,
      hd,
      md,
      yd,
      gd,
      bd,
      vd,
      En,
      Ed,
      Sd,
      Od,
      wd,
      Td,
      Id,
      Rd,
      Cd,
      _d,
      Pd,
      xd,
      Ad,
      Nd,
      kd,
      Ld,
      Md,
      Dd,
      jd,
      Fd,
      Bd,
      Wd,
      Ud,
      Hd,
      zd,
      Gd,
      Yd,
      qd,
      $d,
      Vd,
      Kd,
      Jd,
      Xd,
      Qd,
      Zd,
      ef,
      tf,
      nf,
      rf,
      of,
      af,
      sf,
      lf,
      cf,
      uf,
      pf,
      df,
      ff,
      Sn,
      hf,
      mf,
      yf,
      gf,
      bf,
      vf,
      Ef,
      Sf,
      Of,
      wf,
      Tf,
      If,
      Rf,
      Cf,
      _f,
      Pf,
      xf,
      Af,
      Nf,
      kf,
      Lf,
      Mf,
      Df,
      jf,
      Ff,
      Bf,
      Wf,
      Uf,
      Hf,
      zf,
      Gf,
      Yf,
      qf,
      $f,
      Vf,
      Kf,
      Jf,
      Xf,
      Qf,
      Zf,
      eh,
      th,
      nh,
      rh,
      oh,
      ih,
      ah,
      sh,
      lh,
      ch,
      uh,
      ph,
      dh,
      fh,
      hh,
      mh,
      yh,
      gh,
      bh,
      vh,
      Eh,
      Sh,
      Oh,
      wh,
      Th,
      Ih,
      Rh,
      Ch,
      _h,
      Ph,
      xh,
      Ah,
      Nh,
      kh,
      Lh,
      Mh,
      Dh,
      jh,
      Fh,
      Bh,
      Wh,
      Uh,
      Hh,
      zh,
      Gh,
      Yh,
      qh,
      $h,
      Vh,
      Kh,
      Jh,
      Xh,
      Qh,
      Zh,
      em,
      tm,
      nm,
      rm,
      om,
      im,
      am,
      sm,
      lm,
      cm,
      um,
      pm,
      dm,
      fm,
      hm,
      mm,
      ym,
      gm,
      bm,
      vm,
      Em,
      Sm,
      Om,
      wm,
      Tm,
      Im,
      Rm,
      Cm,
      _m,
      Pm,
      xm,
      Am,
      Nm,
      km,
      Lm,
      Mm,
      Dm,
      jm,
      Fm,
      Bm,
      Wm,
      Um,
      Hm,
      zm,
      Gm,
      Ym,
      qm,
      $m,
      Vm,
      Km,
      Jm,
      Xm,
      Qm,
      Zm,
      ey,
      ty,
      ny,
      ry,
      oy,
      iy,
      ay,
      sy,
      ly,
      cy,
      uy,
      py,
      dy,
      fy,
      hy,
      my,
      yy,
      gy,
      by,
      vy,
      Ey,
      Sy,
      Oy,
      wy,
      Ty,
      Iy,
      Ry,
      Cy,
      _y,
      Py,
      xy,
      Ay,
      Ny,
      ky,
      Ly,
      On = ce(() => {
        X()
        Q()
        Z()
        ;(id = __STORYBOOK_ICONS__),
          ({
            AccessibilityAltIcon: ad,
            AccessibilityIcon: sd,
            AccessibilityIgnoredIcon: ld,
            AddIcon: cd,
            AdminIcon: ud,
            AlertAltIcon: pd,
            AlertIcon: dd,
            AlignLeftIcon: fd,
            AlignRightIcon: hd,
            AppleIcon: md,
            ArrowBottomLeftIcon: yd,
            ArrowBottomRightIcon: gd,
            ArrowDownIcon: bd,
            ArrowLeftIcon: vd,
            ArrowRightIcon: En,
            ArrowSolidDownIcon: Ed,
            ArrowSolidLeftIcon: Sd,
            ArrowSolidRightIcon: Od,
            ArrowSolidUpIcon: wd,
            ArrowTopLeftIcon: Td,
            ArrowTopRightIcon: Id,
            ArrowUpIcon: Rd,
            AzureDevOpsIcon: Cd,
            BackIcon: _d,
            BasketIcon: Pd,
            BatchAcceptIcon: xd,
            BatchDenyIcon: Ad,
            BeakerIcon: Nd,
            BellIcon: kd,
            BitbucketIcon: Ld,
            BoldIcon: Md,
            BookIcon: Dd,
            BookmarkHollowIcon: jd,
            BookmarkIcon: Fd,
            BottomBarIcon: Bd,
            BottomBarToggleIcon: Wd,
            BoxIcon: Ud,
            BranchIcon: Hd,
            BrowserIcon: zd,
            ButtonIcon: Gd,
            CPUIcon: Yd,
            CalendarIcon: qd,
            CameraIcon: $d,
            CameraStabilizeIcon: Vd,
            CategoryIcon: Kd,
            CertificateIcon: Jd,
            ChangedIcon: Xd,
            ChatIcon: Qd,
            CheckIcon: Zd,
            ChevronDownIcon: ef,
            ChevronLeftIcon: tf,
            ChevronRightIcon: nf,
            ChevronSmallDownIcon: rf,
            ChevronSmallLeftIcon: of,
            ChevronSmallRightIcon: af,
            ChevronSmallUpIcon: sf,
            ChevronUpIcon: lf,
            ChromaticIcon: cf,
            ChromeIcon: uf,
            CircleHollowIcon: pf,
            CircleIcon: df,
            ClearIcon: ff,
            CloseAltIcon: Sn,
            CloseIcon: hf,
            CloudHollowIcon: mf,
            CloudIcon: yf,
            CogIcon: gf,
            CollapseIcon: bf,
            CommandIcon: vf,
            CommentAddIcon: Ef,
            CommentIcon: Sf,
            CommentsIcon: Of,
            CommitIcon: wf,
            CompassIcon: Tf,
            ComponentDrivenIcon: If,
            ComponentIcon: Rf,
            ContrastIcon: Cf,
            ContrastIgnoredIcon: _f,
            ControlsIcon: Pf,
            CopyIcon: xf,
            CreditIcon: Af,
            CrossIcon: Nf,
            DashboardIcon: kf,
            DatabaseIcon: Lf,
            DeleteIcon: Mf,
            DiamondIcon: Df,
            DirectionIcon: jf,
            DiscordIcon: Ff,
            DocChartIcon: Bf,
            DocListIcon: Wf,
            DocumentIcon: Uf,
            DownloadIcon: Hf,
            DragIcon: zf,
            EditIcon: Gf,
            EllipsisIcon: Yf,
            EmailIcon: qf,
            ExpandAltIcon: $f,
            ExpandIcon: Vf,
            EyeCloseIcon: Kf,
            EyeIcon: Jf,
            FaceHappyIcon: Xf,
            FaceNeutralIcon: Qf,
            FaceSadIcon: Zf,
            FacebookIcon: eh,
            FailedIcon: th,
            FastForwardIcon: nh,
            FigmaIcon: rh,
            FilterIcon: oh,
            FlagIcon: ih,
            FolderIcon: ah,
            FormIcon: sh,
            GDriveIcon: lh,
            GithubIcon: ch,
            GitlabIcon: uh,
            GlobeIcon: ph,
            GoogleIcon: dh,
            GraphBarIcon: fh,
            GraphLineIcon: hh,
            GraphqlIcon: mh,
            GridAltIcon: yh,
            GridIcon: gh,
            GrowIcon: bh,
            HeartHollowIcon: vh,
            HeartIcon: Eh,
            HomeIcon: Sh,
            HourglassIcon: Oh,
            InfoIcon: wh,
            ItalicIcon: Th,
            JumpToIcon: Ih,
            KeyIcon: Rh,
            LightningIcon: Ch,
            LightningOffIcon: _h,
            LinkBrokenIcon: Ph,
            LinkIcon: xh,
            LinkedinIcon: Ah,
            LinuxIcon: Nh,
            ListOrderedIcon: kh,
            ListUnorderedIcon: Lh,
            LocationIcon: Mh,
            LockIcon: Dh,
            MarkdownIcon: jh,
            MarkupIcon: Fh,
            MediumIcon: Bh,
            MemoryIcon: Wh,
            MenuIcon: Uh,
            MergeIcon: Hh,
            MirrorIcon: zh,
            MobileIcon: Gh,
            MoonIcon: Yh,
            NutIcon: qh,
            OutboxIcon: $h,
            OutlineIcon: Vh,
            PaintBrushIcon: Kh,
            PaperClipIcon: Jh,
            ParagraphIcon: Xh,
            PassedIcon: Qh,
            PhoneIcon: Zh,
            PhotoDragIcon: em,
            PhotoIcon: tm,
            PhotoStabilizeIcon: nm,
            PinAltIcon: rm,
            PinIcon: om,
            PlayAllHollowIcon: im,
            PlayBackIcon: am,
            PlayHollowIcon: sm,
            PlayIcon: lm,
            PlayNextIcon: cm,
            PlusIcon: um,
            PointerDefaultIcon: pm,
            PointerHandIcon: dm,
            PowerIcon: fm,
            PrintIcon: hm,
            ProceedIcon: mm,
            ProfileIcon: ym,
            PullRequestIcon: gm,
            QuestionIcon: bm,
            RSSIcon: vm,
            RedirectIcon: Em,
            ReduxIcon: Sm,
            RefreshIcon: Om,
            ReplyIcon: wm,
            RepoIcon: Tm,
            RequestChangeIcon: Im,
            RewindIcon: Rm,
            RulerIcon: Cm,
            SaveIcon: _m,
            SearchIcon: Pm,
            ShareAltIcon: xm,
            ShareIcon: Am,
            ShieldIcon: Nm,
            SideBySideIcon: km,
            SidebarAltIcon: Lm,
            SidebarAltToggleIcon: Mm,
            SidebarIcon: Dm,
            SidebarToggleIcon: jm,
            SpeakerIcon: Fm,
            StackedIcon: Bm,
            StarHollowIcon: Wm,
            StarIcon: Um,
            StatusFailIcon: Hm,
            StatusIcon: zm,
            StatusPassIcon: Gm,
            StatusWarnIcon: Ym,
            StickerIcon: qm,
            StopAltHollowIcon: $m,
            StopAltIcon: Vm,
            StopIcon: Km,
            StorybookIcon: Jm,
            StructureIcon: Xm,
            SubtractIcon: Qm,
            SunIcon: Zm,
            SupportIcon: ey,
            SweepIcon: ty,
            SwitchAltIcon: ny,
            SyncIcon: ry,
            TabletIcon: oy,
            ThumbsUpIcon: iy,
            TimeIcon: ay,
            TimerIcon: sy,
            TransferIcon: ly,
            TrashIcon: cy,
            TwitterIcon: uy,
            TypeIcon: py,
            UbuntuIcon: dy,
            UndoIcon: fy,
            UnfoldIcon: hy,
            UnlockIcon: my,
            UnpinIcon: yy,
            UploadIcon: gy,
            UserAddIcon: by,
            UserAltIcon: vy,
            UserIcon: Ey,
            UsersIcon: Sy,
            VSCodeIcon: Oy,
            VerifiedIcon: wy,
            VideoIcon: Ty,
            WandIcon: Iy,
            WatchIcon: Ry,
            WindowsIcon: Cy,
            WrenchIcon: _y,
            XIcon: Py,
            YoutubeIcon: xy,
            ZoomIcon: Ay,
            ZoomOutIcon: Ny,
            ZoomResetIcon: ky,
            iconList: Ly,
          } = __STORYBOOK_ICONS__)
      })
    var io = {}
    lo(io, { default: () => ws })
    function Co(e, t = {}) {
      let {
        colors: n = Tn,
        duration: r = In,
        force: o = Rn,
        particleCount: i = Cn,
        particleShape: a = _n,
        particleSize: s = Pn,
        particleClass: c = xn,
        destroyAfterDone: l = An,
        stageHeight: p = Nn,
        stageWidth: u = kn,
      } = t
      ;(function (m) {
        if (document.querySelector('style[data-neoconfetti]')) return
        let g = Mt('style')
        ;(g.dataset.neoconfetti = ''), (g.textContent = m), Dt(document.head, g)
      })(Io),
        e.classList.add(Ro),
        e.style.setProperty('--sh', p + 'px')
      let d = [],
        f = [],
        h = () => rt(be() * (No - 1)),
        b = (m, g) => a !== 'rectangles' && (m === 'circles' || ko(g))
      function N(m, g) {
        let O = h(),
          B = b(a, O),
          _ = (te, Ne) => m.style.setProperty(te, Ne + '')
        _('--xlp', jt(bt(jn(g, 90) - 180), 0, 180, -u / 2, u / 2) + 'px'),
          _('--dc', r - rt(1e3 * be()) + 'ms')
        let V = be() < Po ? We(be() * xo, 2) : 0
        _('--x1', V),
          _('--x2', -1 * V),
          _('--x3', V),
          _('--x4', We(bt(jt(bt(jn(g, 90) - 180), 0, 180, -1, 1)), 4)),
          _('--y1', We(be() * Mn, 4)),
          _('--y2', We(be() * o * (Or() ? 1 : -1), 4)),
          _('--y3', Mn),
          _('--y4', We(Ao(jt(bt(g - 180), 0, 180, o, -o), 0), 4)),
          _('--w', (B ? s : rt(4 * be()) + s / 2) + 'px'),
          _('--h', (B ? s : rt(2 * be()) + s) + 'px')
        let H = O.toString(2).padStart(3, '0').split('')
        _('--hr', H.map(te => +te / 2 + '').join(' ')),
          _('--r', H.join(' ')),
          _('--rd', We(be() * (_o - Ln) + Ln) + 'ms'),
          _('--br', B ? '50%' : 0)
      }
      let v
      function T() {
        ;(e.innerHTML = ''),
          clearTimeout(v),
          (d = Dn(i, n)),
          (f = (function (m, g = [], O) {
            let B = []
            for (let { color: _ } of g) {
              let V = Mt('div')
              ;(V.className = `${wn} ${O}`), V.style.setProperty('--bgc', _)
              let H = Mt('div')
              Dt(V, H), Dt(m, V), B.push(V)
            }
            return B
          })(e, d, c))
        for (let [m, g] of Fn(f)) N(g, d[+m].degree)
        v = setTimeout(() => {
          l && (e.innerHTML = '')
        }, r)
      }
      return (
        T(),
        {
          update(m) {
            let g = m.particleCount ?? Cn,
              O = m.particleShape ?? _n,
              B = m.particleSize ?? Pn,
              _ = m.particleClass ?? xn,
              V = m.colors ?? Tn,
              H = m.stageHeight ?? Nn,
              te = m.duration ?? In,
              Ne = m.force ?? Rn,
              Ve = m.stageWidth ?? kn,
              ke = m.destroyAfterDone ?? An
            d = Dn(g, V)
            let Be = !1
            if (g === i) {
              f = Array.from(e.querySelectorAll(`.${wn}`))
              for (let [Ke, { color: Te }] of Fn(d)) {
                let Ie = f[+Ke]
                JSON.stringify(n) !== JSON.stringify(V) && Ie.style.setProperty('--bgc', Te),
                  O !== a && Ie.style.setProperty('--br', b(O, h()) ? '50%' : '0'),
                  _ !== c && (c && Ie.classList.remove(c), _ && Ie.classList.add(_))
              }
            } else Be = !0
            l && !ke && clearTimeout(v),
              e.style.setProperty('--sh', H + 'px'),
              (r = te),
              (n = V),
              (o = Ne),
              (i = g),
              (a = O),
              (s = B),
              (c = _),
              (l = ke),
              (p = H),
              (u = Ve),
              Be && T()
          },
          destroy() {
            ;(e.innerHTML = ''), clearTimeout(v)
          },
        }
      )
    }
    function Lo({ class: e, ...t }) {
      let n = At(null),
        r = At()
      return (
        ae(() => {
          if (typeof window < 'u' && n.current) {
            if (r.current) return r.current.update(t), r.current.destroy
            r.current = Co(n.current, t)
          }
        }, [t]),
        q('div', { ref: n, className: e })
      )
    }
    function Bn({ targetSelector: e, pulsating: t = !1 }) {
      return (
        ae(() => {
          let n = document.querySelector(e)
          if (n)
            if (t) {
              ;(n.style.animation = 'pulsate 3s infinite'),
                (n.style.transformOrigin = 'center'),
                (n.style.animationTimingFunction = 'ease-in-out')
              let r = `
        @keyframes pulsate {
          0% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `,
                o = document.createElement('style')
              ;(o.id = 'sb-onboarding-pulsating-effect'),
                (o.innerHTML = r),
                document.head.appendChild(o)
            } else n.style.boxShadow = 'rgba(2,156,253,1) 0 0 2px 1px'
          return () => {
            let r = document.querySelector('#sb-onboarding-pulsating-effect')
            r && r.remove(), n && ((n.style.animation = ''), (n.style.boxShadow = ''))
          }
        }, [e, t]),
        null
      )
    }
    function wr(e) {
      return t => typeof t === e
    }
    function Wo(e, t) {
      let { length: n } = e
      if (n !== t.length) return !1
      for (let r = n; r-- !== 0; ) if (!oe(e[r], t[r])) return !1
      return !0
    }
    function Uo(e, t) {
      if (e.byteLength !== t.byteLength) return !1
      let n = new DataView(e.buffer),
        r = new DataView(t.buffer),
        o = e.byteLength
      for (; o--; ) if (n.getUint8(o) !== r.getUint8(o)) return !1
      return !0
    }
    function Ho(e, t) {
      if (e.size !== t.size) return !1
      for (let n of e.entries()) if (!t.has(n[0])) return !1
      for (let n of e.entries()) if (!oe(n[1], t.get(n[0]))) return !1
      return !0
    }
    function zo(e, t) {
      if (e.size !== t.size) return !1
      for (let n of e.entries()) if (!t.has(n[0])) return !1
      return !0
    }
    function oe(e, t) {
      if (e === t) return !0
      if (e && Hn(e) && t && Hn(t)) {
        if (e.constructor !== t.constructor) return !1
        if (Array.isArray(e) && Array.isArray(t)) return Wo(e, t)
        if (e instanceof Map && t instanceof Map) return Ho(e, t)
        if (e instanceof Set && t instanceof Set) return zo(e, t)
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Uo(e, t)
        if (Un(e) && Un(t)) return e.source === t.source && e.flags === t.flags
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf()
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString()
        let n = Object.keys(e),
          r = Object.keys(t)
        if (n.length !== r.length) return !1
        for (let o = n.length; o-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1
        for (let o = n.length; o-- !== 0; ) {
          let i = n[o]
          if (!(i === '_owner' && e.$$typeof) && !oe(e[i], t[i])) return !1
        }
        return !0
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t
    }
    function Rt(e) {
      let t = Object.prototype.toString.call(e).slice(8, -1)
      if (/HTML\w+Element/.test(t)) return 'HTMLElement'
      if (qo(t)) return t
    }
    function de(e) {
      return t => Rt(t) === e
    }
    function qo(e) {
      return Go.includes(e)
    }
    function Ye(e) {
      return t => typeof t === e
    }
    function $o(e) {
      return Yo.includes(e)
    }
    function I(e) {
      if (e === null) return 'null'
      switch (typeof e) {
        case 'bigint':
          return 'bigint'
        case 'boolean':
          return 'boolean'
        case 'number':
          return 'number'
        case 'string':
          return 'string'
        case 'symbol':
          return 'symbol'
        case 'undefined':
          return 'undefined'
      }
      return I.array(e) ? 'Array' : I.plainFunction(e) ? 'Function' : Rt(e) || 'Object'
    }
    function Ko(...e) {
      return e.every(t => C.string(t) || C.array(t) || C.plainObject(t))
    }
    function Jo(e, t, n) {
      return Tr(e, t)
        ? [e, t].every(C.array)
          ? !e.some($n(n)) && t.some($n(n))
          : [e, t].every(C.plainObject)
            ? !Object.entries(e).some(qn(n)) && Object.entries(t).some(qn(n))
            : t === n
        : !1
    }
    function zn(e, t, n) {
      let { actual: r, key: o, previous: i, type: a } = n,
        s = Ee(e, o),
        c = Ee(t, o),
        l = [s, c].every(C.number) && (a === 'increased' ? s < c : s > c)
      return C.undefined(r) || (l = l && c === r), C.undefined(i) || (l = l && s === i), l
    }
    function Gn(e, t, n) {
      let { key: r, type: o, value: i } = n,
        a = Ee(e, r),
        s = Ee(t, r),
        c = o === 'added' ? a : s,
        l = o === 'added' ? s : a
      if (!C.nullOrUndefined(i)) {
        if (C.defined(c)) {
          if (C.array(c) || C.plainObject(c)) return Jo(c, l, i)
        } else return oe(l, i)
        return !1
      }
      return [a, s].every(C.array)
        ? !l.every(Vt(c))
        : [a, s].every(C.plainObject)
          ? Xo(Object.keys(c), Object.keys(l))
          : ![a, s].every(p => C.primitive(p) && C.defined(p)) &&
            (o === 'added' ? !C.defined(a) && C.defined(s) : C.defined(a) && !C.defined(s))
    }
    function Yn(e, t, { key: n } = {}) {
      let r = Ee(e, n),
        o = Ee(t, n)
      if (!Tr(r, o)) throw new TypeError('Inputs have different types')
      if (!Ko(r, o)) throw new TypeError("Inputs don't have length")
      return [r, o].every(C.plainObject) && ((r = Object.keys(r)), (o = Object.keys(o))), [r, o]
    }
    function qn(e) {
      return ([t, n]) =>
        C.array(e)
          ? oe(e, n) || e.some(r => oe(r, n) || (C.array(n) && Vt(n)(r)))
          : C.plainObject(e) && e[t]
            ? !!e[t] && oe(e[t], n)
            : oe(e, n)
    }
    function Xo(e, t) {
      return t.some(n => !e.includes(n))
    }
    function $n(e) {
      return t => (C.array(e) ? e.some(n => oe(n, t) || (C.array(t) && Vt(t)(n))) : oe(e, t))
    }
    function Qe(e, t) {
      return C.array(e) ? e.some(n => oe(n, t)) : oe(e, t)
    }
    function Vt(e) {
      return t => e.some(n => oe(n, t))
    }
    function Tr(...e) {
      return e.every(C.array) || e.every(C.number) || e.every(C.plainObject) || e.every(C.string)
    }
    function Ee(e, t) {
      return C.plainObject(e) || C.array(e)
        ? C.string(t)
          ? t.split('.').reduce((n, r) => n && n[r], e)
          : C.number(t)
            ? e[t]
            : e
        : e
    }
    function Ot(e, t) {
      if ([e, t].some(C.nullOrUndefined)) throw new Error('Missing required parameters')
      if (![e, t].every(n => C.plainObject(n) || C.array(n)))
        throw new Error('Expected plain objects or array')
      return {
        added: (n, r) => {
          try {
            return Gn(e, t, { key: n, type: 'added', value: r })
          } catch {
            return !1
          }
        },
        changed: (n, r, o) => {
          try {
            let i = Ee(e, n),
              a = Ee(t, n),
              s = C.defined(r),
              c = C.defined(o)
            if (s || c) {
              let l = c ? Qe(o, i) : !Qe(r, i),
                p = Qe(r, a)
              return l && p
            }
            return [i, a].every(C.array) || [i, a].every(C.plainObject) ? !oe(i, a) : i !== a
          } catch {
            return !1
          }
        },
        changedFrom: (n, r, o) => {
          if (!C.defined(n)) return !1
          try {
            let i = Ee(e, n),
              a = Ee(t, n),
              s = C.defined(o)
            return Qe(r, i) && (s ? Qe(o, a) : !s)
          } catch {
            return !1
          }
        },
        decreased: (n, r, o) => {
          if (!C.defined(n)) return !1
          try {
            return zn(e, t, { key: n, actual: r, previous: o, type: 'decreased' })
          } catch {
            return !1
          }
        },
        emptied: n => {
          try {
            let [r, o] = Yn(e, t, { key: n })
            return !!r.length && !o.length
          } catch {
            return !1
          }
        },
        filled: n => {
          try {
            let [r, o] = Yn(e, t, { key: n })
            return !r.length && !!o.length
          } catch {
            return !1
          }
        },
        increased: (n, r, o) => {
          if (!C.defined(n)) return !1
          try {
            return zn(e, t, { key: n, actual: r, previous: o, type: 'increased' })
          } catch {
            return !1
          }
        },
        removed: (n, r) => {
          try {
            return Gn(e, t, { key: n, type: 'removed', value: r })
          } catch {
            return !1
          }
        },
      }
    }
    function ei(e) {
      var t = !1
      return function () {
        t ||
          ((t = !0),
          window.Promise.resolve().then(function () {
            ;(t = !1), e()
          }))
      }
    }
    function ti(e) {
      var t = !1
      return function () {
        t ||
          ((t = !0),
          setTimeout(function () {
            ;(t = !1), e()
          }, Zo))
      }
    }
    function Rr(e) {
      var t = {}
      return e && t.toString.call(e) === '[object Function]'
    }
    function Fe(e, t) {
      if (e.nodeType !== 1) return []
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null)
      return t ? r[t] : r
    }
    function Kt(e) {
      return e.nodeName === 'HTML' ? e : e.parentNode || e.host
    }
    function at(e) {
      if (!e) return document.body
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body
        case '#document':
          return e.body
      }
      var t = Fe(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY
      return /(auto|scroll|overlay)/.test(n + o + r) ? e : at(Kt(e))
    }
    function Cr(e) {
      return e && e.referenceNode ? e.referenceNode : e
    }
    function qe(e) {
      return e === 11 ? Vn : e === 10 ? Kn : Vn || Kn
    }
    function He(e) {
      if (!e) return document.documentElement
      for (
        var t = qe(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;

      )
        n = (e = e.nextElementSibling).offsetParent
      var r = n && n.nodeName
      return !r || r === 'BODY' || r === 'HTML'
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 && Fe(n, 'position') === 'static'
          ? He(n)
          : n
    }
    function oi(e) {
      var t = e.nodeName
      return t === 'BODY' ? !1 : t === 'HTML' || He(e.firstElementChild) === e
    }
    function Ut(e) {
      return e.parentNode !== null ? Ut(e.parentNode) : e
    }
    function wt(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        o = n ? t : e,
        i = document.createRange()
      i.setStart(r, 0), i.setEnd(o, 0)
      var a = i.commonAncestorContainer
      if ((e !== a && t !== a) || r.contains(o)) return oi(a) ? a : He(a)
      var s = Ut(e)
      return s.host ? wt(s.host, t) : wt(e, Ut(t).host)
    }
    function ze(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'top',
        n = t === 'top' ? 'scrollTop' : 'scrollLeft',
        r = e.nodeName
      if (r === 'BODY' || r === 'HTML') {
        var o = e.ownerDocument.documentElement,
          i = e.ownerDocument.scrollingElement || o
        return i[n]
      }
      return e[n]
    }
    function ii(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = ze(t, 'top'),
        o = ze(t, 'left'),
        i = n ? -1 : 1
      return (e.top += r * i), (e.bottom += r * i), (e.left += o * i), (e.right += o * i), e
    }
    function Jn(e, t) {
      var n = t === 'x' ? 'Left' : 'Top',
        r = n === 'Left' ? 'Right' : 'Bottom'
      return parseFloat(e['border' + n + 'Width']) + parseFloat(e['border' + r + 'Width'])
    }
    function Xn(e, t, n, r) {
      return Math.max(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        qe(10)
          ? parseInt(n['offset' + e]) +
              parseInt(r['margin' + (e === 'Height' ? 'Top' : 'Left')]) +
              parseInt(r['margin' + (e === 'Height' ? 'Bottom' : 'Right')])
          : 0
      )
    }
    function _r(e) {
      var t = e.body,
        n = e.documentElement,
        r = qe(10) && getComputedStyle(n)
      return { height: Xn('Height', t, n, r), width: Xn('Width', t, n, r) }
    }
    function xe(e) {
      return se({}, e, { right: e.left + e.width, bottom: e.top + e.height })
    }
    function Ht(e) {
      var t = {}
      try {
        if (qe(10)) {
          t = e.getBoundingClientRect()
          var n = ze(e, 'top'),
            r = ze(e, 'left')
          ;(t.top += n), (t.left += r), (t.bottom += n), (t.right += r)
        } else t = e.getBoundingClientRect()
      } catch {}
      var o = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        i = e.nodeName === 'HTML' ? _r(e.ownerDocument) : {},
        a = i.width || e.clientWidth || o.width,
        s = i.height || e.clientHeight || o.height,
        c = e.offsetWidth - a,
        l = e.offsetHeight - s
      if (c || l) {
        var p = Fe(e)
        ;(c -= Jn(p, 'x')), (l -= Jn(p, 'y')), (o.width -= c), (o.height -= l)
      }
      return xe(o)
    }
    function Jt(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = qe(10),
        o = t.nodeName === 'HTML',
        i = Ht(e),
        a = Ht(t),
        s = at(e),
        c = Fe(t),
        l = parseFloat(c.borderTopWidth),
        p = parseFloat(c.borderLeftWidth)
      n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)))
      var u = xe({
        top: i.top - a.top - l,
        left: i.left - a.left - p,
        width: i.width,
        height: i.height,
      })
      if (((u.marginTop = 0), (u.marginLeft = 0), !r && o)) {
        var d = parseFloat(c.marginTop),
          f = parseFloat(c.marginLeft)
        ;(u.top -= l - d),
          (u.bottom -= l - d),
          (u.left -= p - f),
          (u.right -= p - f),
          (u.marginTop = d),
          (u.marginLeft = f)
      }
      return (r && !n ? t.contains(s) : t === s && s.nodeName !== 'BODY') && (u = ii(u, t)), u
    }
    function li(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Jt(e, n),
        o = Math.max(n.clientWidth, window.innerWidth || 0),
        i = Math.max(n.clientHeight, window.innerHeight || 0),
        a = t ? 0 : ze(n),
        s = t ? 0 : ze(n, 'left'),
        c = { top: a - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: o, height: i }
      return xe(c)
    }
    function Pr(e) {
      var t = e.nodeName
      if (t === 'BODY' || t === 'HTML') return !1
      if (Fe(e, 'position') === 'fixed') return !0
      var n = Kt(e)
      return n ? Pr(n) : !1
    }
    function xr(e) {
      if (!e || !e.parentElement || qe()) return document.documentElement
      for (var t = e.parentElement; t && Fe(t, 'transform') === 'none'; ) t = t.parentElement
      return t || document.documentElement
    }
    function Xt(e, t, n, r) {
      var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        i = { top: 0, left: 0 },
        a = o ? xr(e) : wt(e, Cr(t))
      if (r === 'viewport') i = li(a, o)
      else {
        var s = void 0
        r === 'scrollParent'
          ? ((s = at(Kt(t))), s.nodeName === 'BODY' && (s = e.ownerDocument.documentElement))
          : r === 'window'
            ? (s = e.ownerDocument.documentElement)
            : (s = r)
        var c = Jt(s, a, o)
        if (s.nodeName === 'HTML' && !Pr(a)) {
          var l = _r(e.ownerDocument),
            p = l.height,
            u = l.width
          ;(i.top += c.top - c.marginTop),
            (i.bottom = p + c.top),
            (i.left += c.left - c.marginLeft),
            (i.right = u + c.left)
        } else i = c
      }
      n = n || 0
      var d = typeof n == 'number'
      return (
        (i.left += d ? n : n.left || 0),
        (i.top += d ? n : n.top || 0),
        (i.right -= d ? n : n.right || 0),
        (i.bottom -= d ? n : n.bottom || 0),
        i
      )
    }
    function ci(e) {
      var t = e.width,
        n = e.height
      return t * n
    }
    function Ar(e, t, n, r, o) {
      var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0
      if (e.indexOf('auto') === -1) return e
      var a = Xt(n, r, i, o),
        s = {
          top: { width: a.width, height: t.top - a.top },
          right: { width: a.right - t.right, height: a.height },
          bottom: { width: a.width, height: a.bottom - t.bottom },
          left: { width: t.left - a.left, height: a.height },
        },
        c = Object.keys(s)
          .map(function (d) {
            return se({ key: d }, s[d], { area: ci(s[d]) })
          })
          .sort(function (d, f) {
            return f.area - d.area
          }),
        l = c.filter(function (d) {
          var f = d.width,
            h = d.height
          return f >= n.clientWidth && h >= n.clientHeight
        }),
        p = l.length > 0 ? l[0].key : c[0].key,
        u = e.split('-')[1]
      return p + (u ? '-' + u : '')
    }
    function Nr(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        o = r ? xr(t) : wt(t, Cr(n))
      return Jt(n, o, r)
    }
    function kr(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        i = { width: e.offsetWidth + o, height: e.offsetHeight + r }
      return i
    }
    function Tt(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
      return e.replace(/left|right|bottom|top/g, function (n) {
        return t[n]
      })
    }
    function Lr(e, t, n) {
      n = n.split('-')[0]
      var r = kr(e),
        o = { width: r.width, height: r.height },
        i = ['right', 'left'].indexOf(n) !== -1,
        a = i ? 'top' : 'left',
        s = i ? 'left' : 'top',
        c = i ? 'height' : 'width',
        l = i ? 'width' : 'height'
      return (
        (o[a] = t[a] + t[c] / 2 - r[c] / 2), n === s ? (o[s] = t[s] - r[l]) : (o[s] = t[Tt(s)]), o
      )
    }
    function st(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function ui(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (o) {
          return o[t] === n
        })
      var r = st(e, function (o) {
        return o[t] === n
      })
      return e.indexOf(r)
    }
    function Mr(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, ui(e, 'name', n))
      return (
        r.forEach(function (o) {
          o.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!')
          var i = o.function || o.fn
          o.enabled &&
            Rr(i) &&
            ((t.offsets.popper = xe(t.offsets.popper)),
            (t.offsets.reference = xe(t.offsets.reference)),
            (t = i(t, o)))
        }),
        t
      )
    }
    function pi() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        }
        ;(e.offsets.reference = Nr(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (e.placement = Ar(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = Lr(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
          (e = Mr(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e))
      }
    }
    function Dr(e, t) {
      return e.some(function (n) {
        var r = n.name,
          o = n.enabled
        return o && r === t
      })
    }
    function Qt(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0;
        r < t.length;
        r++
      ) {
        var o = t[r],
          i = o ? '' + o + n : e
        if (typeof document.body.style[i] < 'u') return i
      }
      return null
    }
    function di() {
      return (
        (this.state.isDestroyed = !0),
        Dr(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style.left = ''),
          (this.popper.style.right = ''),
          (this.popper.style.bottom = ''),
          (this.popper.style.willChange = ''),
          (this.popper.style[Qt('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      )
    }
    function jr(e) {
      var t = e.ownerDocument
      return t ? t.defaultView : window
    }
    function Fr(e, t, n, r) {
      var o = e.nodeName === 'BODY',
        i = o ? e.ownerDocument.defaultView : e
      i.addEventListener(t, n, { passive: !0 }), o || Fr(at(i.parentNode), t, n, r), r.push(i)
    }
    function fi(e, t, n, r) {
      ;(n.updateBound = r), jr(e).addEventListener('resize', n.updateBound, { passive: !0 })
      var o = at(e)
      return (
        Fr(o, 'scroll', n.updateBound, n.scrollParents),
        (n.scrollElement = o),
        (n.eventsEnabled = !0),
        n
      )
    }
    function hi() {
      this.state.eventsEnabled ||
        (this.state = fi(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function mi(e, t) {
      return (
        jr(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function (n) {
          n.removeEventListener('scroll', t.updateBound)
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      )
    }
    function yi() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate), (this.state = mi(this.reference, this.state)))
    }
    function Zt(e) {
      return e !== '' && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function zt(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = ''
        ;['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !== -1 &&
          Zt(t[n]) &&
          (r = 'px'),
          (e.style[n] = t[n] + r)
      })
    }
    function gi(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n]
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
      })
    }
    function bi(e) {
      return (
        zt(e.instance.popper, e.styles),
        gi(e.instance.popper, e.attributes),
        e.arrowElement && Object.keys(e.arrowStyles).length && zt(e.arrowElement, e.arrowStyles),
        e
      )
    }
    function vi(e, t, n, r, o) {
      var i = Nr(o, t, e, n.positionFixed),
        a = Ar(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding)
      return (
        t.setAttribute('x-placement', a),
        zt(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
        n
      )
    }
    function Ei(e, t) {
      var n = e.offsets,
        r = n.popper,
        o = n.reference,
        i = Math.round,
        a = Math.floor,
        s = function (N) {
          return N
        },
        c = i(o.width),
        l = i(r.width),
        p = ['left', 'right'].indexOf(e.placement) !== -1,
        u = e.placement.indexOf('-') !== -1,
        d = c % 2 === l % 2,
        f = c % 2 === 1 && l % 2 === 1,
        h = t ? (p || u || d ? i : a) : s,
        b = t ? i : s
      return {
        left: h(f && !u && t ? r.left - 1 : r.left),
        top: b(r.top),
        bottom: b(r.bottom),
        right: h(r.right),
      }
    }
    function Oi(e, t) {
      var n = t.x,
        r = t.y,
        o = e.offsets.popper,
        i = st(e.instance.modifiers, function (m) {
          return m.name === 'applyStyle'
        }).gpuAcceleration
      i !== void 0 &&
        console.warn(
          'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
        )
      var a = i !== void 0 ? i : t.gpuAcceleration,
        s = He(e.instance.popper),
        c = Ht(s),
        l = { position: o.position },
        p = Ei(e, window.devicePixelRatio < 2 || !Si),
        u = n === 'bottom' ? 'top' : 'bottom',
        d = r === 'right' ? 'left' : 'right',
        f = Qt('transform'),
        h = void 0,
        b = void 0
      if (
        (u === 'bottom'
          ? s.nodeName === 'HTML'
            ? (b = -s.clientHeight + p.bottom)
            : (b = -c.height + p.bottom)
          : (b = p.top),
        d === 'right'
          ? s.nodeName === 'HTML'
            ? (h = -s.clientWidth + p.right)
            : (h = -c.width + p.right)
          : (h = p.left),
        a && f)
      )
        (l[f] = 'translate3d(' + h + 'px, ' + b + 'px, 0)'),
          (l[u] = 0),
          (l[d] = 0),
          (l.willChange = 'transform')
      else {
        var N = u === 'bottom' ? -1 : 1,
          v = d === 'right' ? -1 : 1
        ;(l[u] = b * N), (l[d] = h * v), (l.willChange = u + ', ' + d)
      }
      var T = { 'x-placement': e.placement }
      return (
        (e.attributes = se({}, T, e.attributes)),
        (e.styles = se({}, l, e.styles)),
        (e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles)),
        e
      )
    }
    function Br(e, t, n) {
      var r = st(e, function (s) {
          var c = s.name
          return c === t
        }),
        o =
          !!r &&
          e.some(function (s) {
            return s.name === n && s.enabled && s.order < r.order
          })
      if (!o) {
        var i = '`' + t + '`',
          a = '`' + n + '`'
        console.warn(
          a +
            ' modifier is required by ' +
            i +
            ' modifier in order to work, be sure to include it before ' +
            i +
            '!'
        )
      }
      return o
    }
    function wi(e, t) {
      var n
      if (!Br(e.instance.modifiers, 'arrow', 'keepTogether')) return e
      var r = t.element
      if (typeof r == 'string') {
        if (((r = e.instance.popper.querySelector(r)), !r)) return e
      } else if (!e.instance.popper.contains(r))
        return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e
      var o = e.placement.split('-')[0],
        i = e.offsets,
        a = i.popper,
        s = i.reference,
        c = ['left', 'right'].indexOf(o) !== -1,
        l = c ? 'height' : 'width',
        p = c ? 'Top' : 'Left',
        u = p.toLowerCase(),
        d = c ? 'left' : 'top',
        f = c ? 'bottom' : 'right',
        h = kr(r)[l]
      s[f] - h < a[u] && (e.offsets.popper[u] -= a[u] - (s[f] - h)),
        s[u] + h > a[f] && (e.offsets.popper[u] += s[u] + h - a[f]),
        (e.offsets.popper = xe(e.offsets.popper))
      var b = s[u] + s[l] / 2 - h / 2,
        N = Fe(e.instance.popper),
        v = parseFloat(N['margin' + p]),
        T = parseFloat(N['border' + p + 'Width']),
        m = b - e.offsets.popper[u] - v - T
      return (
        (m = Math.max(Math.min(a[l] - h, m), 0)),
        (e.arrowElement = r),
        (e.offsets.arrow = ((n = {}), Ge(n, u, Math.round(m)), Ge(n, d, ''), n)),
        e
      )
    }
    function Ti(e) {
      return e === 'end' ? 'start' : e === 'start' ? 'end' : e
    }
    function Qn(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = Ft.indexOf(e),
        r = Ft.slice(n + 1).concat(Ft.slice(0, n))
      return t ? r.reverse() : r
    }
    function Ii(e, t) {
      if (Dr(e.instance.modifiers, 'inner') || (e.flipped && e.placement === e.originalPlacement))
        return e
      var n = Xt(
          e.instance.popper,
          e.instance.reference,
          t.padding,
          t.boundariesElement,
          e.positionFixed
        ),
        r = e.placement.split('-')[0],
        o = Tt(r),
        i = e.placement.split('-')[1] || '',
        a = []
      switch (t.behavior) {
        case Bt.FLIP:
          a = [r, o]
          break
        case Bt.CLOCKWISE:
          a = Qn(r)
          break
        case Bt.COUNTERCLOCKWISE:
          a = Qn(r, !0)
          break
        default:
          a = t.behavior
      }
      return (
        a.forEach(function (s, c) {
          if (r !== s || a.length === c + 1) return e
          ;(r = e.placement.split('-')[0]), (o = Tt(r))
          var l = e.offsets.popper,
            p = e.offsets.reference,
            u = Math.floor,
            d =
              (r === 'left' && u(l.right) > u(p.left)) ||
              (r === 'right' && u(l.left) < u(p.right)) ||
              (r === 'top' && u(l.bottom) > u(p.top)) ||
              (r === 'bottom' && u(l.top) < u(p.bottom)),
            f = u(l.left) < u(n.left),
            h = u(l.right) > u(n.right),
            b = u(l.top) < u(n.top),
            N = u(l.bottom) > u(n.bottom),
            v =
              (r === 'left' && f) ||
              (r === 'right' && h) ||
              (r === 'top' && b) ||
              (r === 'bottom' && N),
            T = ['top', 'bottom'].indexOf(r) !== -1,
            m =
              !!t.flipVariations &&
              ((T && i === 'start' && f) ||
                (T && i === 'end' && h) ||
                (!T && i === 'start' && b) ||
                (!T && i === 'end' && N)),
            g =
              !!t.flipVariationsByContent &&
              ((T && i === 'start' && h) ||
                (T && i === 'end' && f) ||
                (!T && i === 'start' && N) ||
                (!T && i === 'end' && b)),
            O = m || g
          ;(d || v || O) &&
            ((e.flipped = !0),
            (d || v) && (r = a[c + 1]),
            O && (i = Ti(i)),
            (e.placement = r + (i ? '-' + i : '')),
            (e.offsets.popper = se(
              {},
              e.offsets.popper,
              Lr(e.instance.popper, e.offsets.reference, e.placement)
            )),
            (e = Mr(e.instance.modifiers, e, 'flip')))
        }),
        e
      )
    }
    function Ri(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        o = e.placement.split('-')[0],
        i = Math.floor,
        a = ['top', 'bottom'].indexOf(o) !== -1,
        s = a ? 'right' : 'bottom',
        c = a ? 'left' : 'top',
        l = a ? 'width' : 'height'
      return (
        n[s] < i(r[c]) && (e.offsets.popper[c] = i(r[c]) - n[l]),
        n[c] > i(r[s]) && (e.offsets.popper[c] = i(r[s])),
        e
      )
    }
    function Ci(e, t, n, r) {
      var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        i = +o[1],
        a = o[2]
      if (!i) return e
      if (a.indexOf('%') === 0) {
        var s = void 0
        switch (a) {
          case '%p':
            s = n
            break
          case '%':
          case '%r':
          default:
            s = r
        }
        var c = xe(s)
        return (c[t] / 100) * i
      } else if (a === 'vh' || a === 'vw') {
        var l = void 0
        return (
          a === 'vh'
            ? (l = Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
            : (l = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
          (l / 100) * i
        )
      } else return i
    }
    function _i(e, t, n, r) {
      var o = [0, 0],
        i = ['right', 'left'].indexOf(r) !== -1,
        a = e.split(/(\+|\-)/).map(function (p) {
          return p.trim()
        }),
        s = a.indexOf(
          st(a, function (p) {
            return p.search(/,|\s/) !== -1
          })
        )
      a[s] &&
        a[s].indexOf(',') === -1 &&
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.')
      var c = /\s*,\s*|\s+/,
        l =
          s !== -1
            ? [a.slice(0, s).concat([a[s].split(c)[0]]), [a[s].split(c)[1]].concat(a.slice(s + 1))]
            : [a]
      return (
        (l = l.map(function (p, u) {
          var d = (u === 1 ? !i : i) ? 'height' : 'width',
            f = !1
          return p
            .reduce(function (h, b) {
              return h[h.length - 1] === '' && ['+', '-'].indexOf(b) !== -1
                ? ((h[h.length - 1] = b), (f = !0), h)
                : f
                  ? ((h[h.length - 1] += b), (f = !1), h)
                  : h.concat(b)
            }, [])
            .map(function (h) {
              return Ci(h, d, t, n)
            })
        })),
        l.forEach(function (p, u) {
          p.forEach(function (d, f) {
            Zt(d) && (o[u] += d * (p[f - 1] === '-' ? -1 : 1))
          })
        }),
        o
      )
    }
    function Pi(e, t) {
      var n = t.offset,
        r = e.placement,
        o = e.offsets,
        i = o.popper,
        a = o.reference,
        s = r.split('-')[0],
        c = void 0
      return (
        Zt(+n) ? (c = [+n, 0]) : (c = _i(n, i, a, s)),
        s === 'left'
          ? ((i.top += c[0]), (i.left -= c[1]))
          : s === 'right'
            ? ((i.top += c[0]), (i.left += c[1]))
            : s === 'top'
              ? ((i.left += c[0]), (i.top -= c[1]))
              : s === 'bottom' && ((i.left += c[0]), (i.top += c[1])),
        (e.popper = i),
        e
      )
    }
    function xi(e, t) {
      var n = t.boundariesElement || He(e.instance.popper)
      e.instance.reference === n && (n = He(n))
      var r = Qt('transform'),
        o = e.instance.popper.style,
        i = o.top,
        a = o.left,
        s = o[r]
      ;(o.top = ''), (o.left = ''), (o[r] = '')
      var c = Xt(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed)
      ;(o.top = i), (o.left = a), (o[r] = s), (t.boundaries = c)
      var l = t.priority,
        p = e.offsets.popper,
        u = {
          primary: function (d) {
            var f = p[d]
            return p[d] < c[d] && !t.escapeWithReference && (f = Math.max(p[d], c[d])), Ge({}, d, f)
          },
          secondary: function (d) {
            var f = d === 'right' ? 'left' : 'top',
              h = p[f]
            return (
              p[d] > c[d] &&
                !t.escapeWithReference &&
                (h = Math.min(p[f], c[d] - (d === 'right' ? p.width : p.height))),
              Ge({}, f, h)
            )
          },
        }
      return (
        l.forEach(function (d) {
          var f = ['left', 'top'].indexOf(d) !== -1 ? 'primary' : 'secondary'
          p = se({}, p, u[f](d))
        }),
        (e.offsets.popper = p),
        e
      )
    }
    function Ai(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = t.split('-')[1]
      if (r) {
        var o = e.offsets,
          i = o.reference,
          a = o.popper,
          s = ['bottom', 'top'].indexOf(n) !== -1,
          c = s ? 'left' : 'top',
          l = s ? 'width' : 'height',
          p = { start: Ge({}, c, i[c]), end: Ge({}, c, i[c] + i[l] - a[l]) }
        e.offsets.popper = se({}, a, p[r])
      }
      return e
    }
    function Ni(e) {
      if (!Br(e.instance.modifiers, 'hide', 'preventOverflow')) return e
      var t = e.offsets.reference,
        n = st(e.instance.modifiers, function (r) {
          return r.name === 'preventOverflow'
        }).boundaries
      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
        if (e.hide === !0) return e
        ;(e.hide = !0), (e.attributes['x-out-of-boundaries'] = '')
      } else {
        if (e.hide === !1) return e
        ;(e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1)
      }
      return e
    }
    function ki(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = e.offsets,
        o = r.popper,
        i = r.reference,
        a = ['left', 'right'].indexOf(n) !== -1,
        s = ['top', 'left'].indexOf(n) === -1
      return (
        (o[a ? 'left' : 'top'] = i[n] - (s ? o[a ? 'width' : 'height'] : 0)),
        (e.placement = Tt(t)),
        (e.offsets.popper = xe(o)),
        e
      )
    }
    function _t(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1)
      if (/HTML\w+Element/.test(t)) return 'HTMLElement'
      if (Bi(t)) return t
    }
    function fe(e) {
      return function (t) {
        return _t(t) === e
      }
    }
    function Bi(e) {
      return ji.includes(e)
    }
    function $e(e) {
      return function (t) {
        return typeof t === e
      }
    }
    function Wi(e) {
      return Fi.includes(e)
    }
    function R(e) {
      if (e === null) return 'null'
      switch (typeof e) {
        case 'bigint':
          return 'bigint'
        case 'boolean':
          return 'boolean'
        case 'number':
          return 'number'
        case 'string':
          return 'string'
        case 'symbol':
          return 'symbol'
        case 'undefined':
          return 'undefined'
      }
      if (R.array(e)) return 'Array'
      if (R.plainFunction(e)) return 'Function'
      var t = _t(e)
      return t || 'Object'
    }
    function Ur(e) {
      return function (t) {
        return typeof t === e
      }
    }
    function Gi(e, t) {
      var n = e.length
      if (n !== t.length) return !1
      for (var r = n; r-- !== 0; ) if (!ie(e[r], t[r])) return !1
      return !0
    }
    function Yi(e, t) {
      if (e.byteLength !== t.byteLength) return !1
      for (var n = new DataView(e.buffer), r = new DataView(t.buffer), o = e.byteLength; o--; )
        if (n.getUint8(o) !== r.getUint8(o)) return !1
      return !0
    }
    function qi(e, t) {
      var n, r, o, i
      if (e.size !== t.size) return !1
      try {
        for (var a = Yt(e.entries()), s = a.next(); !s.done; s = a.next()) {
          var c = s.value
          if (!t.has(c[0])) return !1
        }
      } catch (u) {
        n = { error: u }
      } finally {
        try {
          s && !s.done && (r = a.return) && r.call(a)
        } finally {
          if (n) throw n.error
        }
      }
      try {
        for (var l = Yt(e.entries()), p = l.next(); !p.done; p = l.next()) {
          var c = p.value
          if (!ie(c[1], t.get(c[0]))) return !1
        }
      } catch (u) {
        o = { error: u }
      } finally {
        try {
          p && !p.done && (i = l.return) && i.call(l)
        } finally {
          if (o) throw o.error
        }
      }
      return !0
    }
    function $i(e, t) {
      var n, r
      if (e.size !== t.size) return !1
      try {
        for (var o = Yt(e.entries()), i = o.next(); !i.done; i = o.next()) {
          var a = i.value
          if (!t.has(a[0])) return !1
        }
      } catch (s) {
        n = { error: s }
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o)
        } finally {
          if (n) throw n.error
        }
      }
      return !0
    }
    function ie(e, t) {
      if (e === t) return !0
      if (e && tr(e) && t && tr(t)) {
        if (e.constructor !== t.constructor) return !1
        if (Array.isArray(e) && Array.isArray(t)) return Gi(e, t)
        if (e instanceof Map && t instanceof Map) return qi(e, t)
        if (e instanceof Set && t instanceof Set) return $i(e, t)
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Yi(e, t)
        if (er(e) && er(t)) return e.source === t.source && e.flags === t.flags
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf()
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString()
        var n = Object.keys(e),
          r = Object.keys(t)
        if (n.length !== r.length) return !1
        for (var o = n.length; o-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1
        for (var o = n.length; o-- !== 0; ) {
          var i = n[o]
          if (!(i === '_owner' && e.$$typeof) && !ie(e[i], t[i])) return !1
        }
        return !0
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t
    }
    function Vi() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return e.every(function (n) {
        return A.string(n) || A.array(n) || A.plainObject(n)
      })
    }
    function Ki(e, t, n) {
      return Hr(e, t)
        ? [e, t].every(A.array)
          ? !e.some(ar(n)) && t.some(ar(n))
          : [e, t].every(A.plainObject)
            ? !Object.entries(e).some(ir(n)) && Object.entries(t).some(ir(n))
            : t === n
        : !1
    }
    function nr(e, t, n) {
      var r = n.actual,
        o = n.key,
        i = n.previous,
        a = n.type,
        s = Se(e, o),
        c = Se(t, o),
        l = [s, c].every(A.number) && (a === 'increased' ? s < c : s > c)
      return A.undefined(r) || (l = l && c === r), A.undefined(i) || (l = l && s === i), l
    }
    function rr(e, t, n) {
      var r = n.key,
        o = n.type,
        i = n.value,
        a = Se(e, r),
        s = Se(t, r),
        c = o === 'added' ? a : s,
        l = o === 'added' ? s : a
      if (!A.nullOrUndefined(i)) {
        if (A.defined(c)) {
          if (A.array(c) || A.plainObject(c)) return Ki(c, l, i)
        } else return ie(l, i)
        return !1
      }
      return [a, s].every(A.array)
        ? !l.every(en(c))
        : [a, s].every(A.plainObject)
          ? Ji(Object.keys(c), Object.keys(l))
          : ![a, s].every(function (p) {
              return A.primitive(p) && A.defined(p)
            }) && (o === 'added' ? !A.defined(a) && A.defined(s) : A.defined(a) && !A.defined(s))
    }
    function or(e, t, n) {
      var r = n === void 0 ? {} : n,
        o = r.key,
        i = Se(e, o),
        a = Se(t, o)
      if (!Hr(i, a)) throw new TypeError('Inputs have different types')
      if (!Vi(i, a)) throw new TypeError("Inputs don't have length")
      return [i, a].every(A.plainObject) && ((i = Object.keys(i)), (a = Object.keys(a))), [i, a]
    }
    function ir(e) {
      return function (t) {
        var n = t[0],
          r = t[1]
        return A.array(e)
          ? ie(e, r) ||
              e.some(function (o) {
                return ie(o, r) || (A.array(r) && en(r)(o))
              })
          : A.plainObject(e) && e[n]
            ? !!e[n] && ie(e[n], r)
            : ie(e, r)
      }
    }
    function Ji(e, t) {
      return t.some(function (n) {
        return !e.includes(n)
      })
    }
    function ar(e) {
      return function (t) {
        return A.array(e)
          ? e.some(function (n) {
              return ie(n, t) || (A.array(t) && en(t)(n))
            })
          : ie(e, t)
      }
    }
    function Ze(e, t) {
      return A.array(e)
        ? e.some(function (n) {
            return ie(n, t)
          })
        : ie(e, t)
    }
    function en(e) {
      return function (t) {
        return e.some(function (n) {
          return ie(n, t)
        })
      }
    }
    function Hr() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return e.every(A.array) || e.every(A.number) || e.every(A.plainObject) || e.every(A.string)
    }
    function Se(e, t) {
      if (A.plainObject(e) || A.array(e)) {
        if (A.string(t)) {
          var n = t.split('.')
          return n.reduce(function (r, o) {
            return r && r[o]
          }, e)
        }
        return A.number(t) ? e[t] : e
      }
      return e
    }
    function Xi(e, t) {
      if ([e, t].some(A.nullOrUndefined)) throw new Error('Missing required parameters')
      if (
        ![e, t].every(function (u) {
          return A.plainObject(u) || A.array(u)
        })
      )
        throw new Error('Expected plain objects or array')
      var n = function (u, d) {
          try {
            return rr(e, t, { key: u, type: 'added', value: d })
          } catch {
            return !1
          }
        },
        r = function (u, d, f) {
          try {
            var h = Se(e, u),
              b = Se(t, u),
              N = A.defined(d),
              v = A.defined(f)
            if (N || v) {
              var T = v ? Ze(f, h) : !Ze(d, h),
                m = Ze(d, b)
              return T && m
            }
            return [h, b].every(A.array) || [h, b].every(A.plainObject) ? !ie(h, b) : h !== b
          } catch {
            return !1
          }
        },
        o = function (u, d, f) {
          if (!A.defined(u)) return !1
          try {
            var h = Se(e, u),
              b = Se(t, u),
              N = A.defined(f)
            return Ze(d, h) && (N ? Ze(f, b) : !N)
          } catch {
            return !1
          }
        },
        i = function (u, d) {
          return A.defined(u)
            ? (console.warn('`changedTo` is deprecated! Replace it with `change`'), r(u, d))
            : !1
        },
        a = function (u, d, f) {
          if (!A.defined(u)) return !1
          try {
            return nr(e, t, { key: u, actual: d, previous: f, type: 'decreased' })
          } catch {
            return !1
          }
        },
        s = function (u) {
          try {
            var d = or(e, t, { key: u }),
              f = d[0],
              h = d[1]
            return !!f.length && !h.length
          } catch {
            return !1
          }
        },
        c = function (u) {
          try {
            var d = or(e, t, { key: u }),
              f = d[0],
              h = d[1]
            return !f.length && !!h.length
          } catch {
            return !1
          }
        },
        l = function (u, d, f) {
          if (!A.defined(u)) return !1
          try {
            return nr(e, t, { key: u, actual: d, previous: f, type: 'increased' })
          } catch {
            return !1
          }
        },
        p = function (u, d) {
          try {
            return rr(e, t, { key: u, type: 'removed', value: d })
          } catch {
            return !1
          }
        }
      return {
        added: n,
        changed: r,
        changedFrom: o,
        changedTo: i,
        decreased: a,
        emptied: s,
        filled: c,
        increased: l,
        removed: p,
      }
    }
    function sr(e, t) {
      var n = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e)
        t &&
          (r = r.filter(function (o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
    }
    function J(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {}
        t % 2
          ? sr(Object(n), !0).forEach(function (r) {
              re(e, r, n[r])
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : sr(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
              })
      }
      return e
    }
    function lt(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function lr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, Gr(r.key), r)
      }
    }
    function ct(e, t, n) {
      return (
        t && lr(e.prototype, t),
        n && lr(e, n),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
      )
    }
    function re(e, t, n) {
      return (
        (t = Gr(t)),
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      )
    }
    function ut(e, t) {
      if (typeof t != 'function' && t !== null)
        throw new TypeError('Super expression must either be null or a function')
      ;(e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && qt(e, t)
    }
    function It(e) {
      return (
        (It = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            }),
        It(e)
      )
    }
    function qt(e, t) {
      return (
        (qt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n
            }),
        qt(e, t)
      )
    }
    function Qi() {
      if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1
      if (typeof Proxy == 'function') return !0
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
      } catch {
        return !1
      }
    }
    function Zi(e, t) {
      if (e == null) return {}
      var n = {},
        r = Object.keys(e),
        o,
        i
      for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
      return n
    }
    function zr(e, t) {
      if (e == null) return {}
      var n = Zi(e, t),
        r,
        o
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e)
        for (o = 0; o < i.length; o++)
          (r = i[o]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r])
      }
      return n
    }
    function we(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    function ea(e, t) {
      if (t && (typeof t == 'object' || typeof t == 'function')) return t
      if (t !== void 0)
        throw new TypeError('Derived constructors may only return object or undefined')
      return we(e)
    }
    function pt(e) {
      var t = Qi()
      return function () {
        var n = It(e),
          r
        if (t) {
          var o = It(this).constructor
          r = Reflect.construct(n, arguments, o)
        } else r = n.apply(this, arguments)
        return ea(this, r)
      }
    }
    function ta(e, t) {
      if (typeof e != 'object' || e === null) return e
      var n = e[Symbol.toPrimitive]
      if (n !== void 0) {
        var r = n.call(e, t || 'default')
        if (typeof r != 'object') return r
        throw new TypeError('@@toPrimitive must return a primitive value.')
      }
      return (t === 'string' ? String : Number)(e)
    }
    function Gr(e) {
      var t = ta(e, 'string')
      return typeof t == 'symbol' ? t : String(t)
    }
    function ia(e, t, n, r) {
      return typeof e == 'boolean' ? e : typeof e == 'function' ? e(t, n, r) : e ? !!e : !1
    }
    function aa(e, t) {
      return Object.hasOwnProperty.call(e, t)
    }
    function sa(e, t, n, r) {
      return r
        ? new Error(r)
        : new Error(
            'Required '.concat(e[t], ' `').concat(t, '` was not specified in `').concat(n, '`.')
          )
    }
    function la(e, t) {
      if (typeof e != 'function') throw new TypeError(ra)
      if (t && typeof t != 'string') throw new TypeError(oa)
    }
    function cr(e, t, n) {
      return (
        la(e, n),
        function (r, o, i) {
          for (var a = arguments.length, s = new Array(a > 3 ? a - 3 : 0), c = 3; c < a; c++)
            s[c - 3] = arguments[c]
          return ia(t, r, o, i)
            ? aa(r, o)
              ? e.apply(void 0, [r, o, i].concat(s))
              : sa(r, o, i, n)
            : e.apply(void 0, [r, o, i].concat(s))
        }
      )
    }
    function ve() {
      return !!(typeof window < 'u' && window.document && window.document.createElement)
    }
    function Wt() {
      return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent)
    }
    function St(e) {
      var t = e.title,
        n = e.data,
        r = e.warn,
        o = r === void 0 ? !1 : r,
        i = e.debug,
        a = i === void 0 ? !1 : i,
        s = o ? console.warn || console.error : console.log
      a &&
        t &&
        n &&
        (console.groupCollapsed(
          '%creact-floater: '.concat(t),
          'color: #9b00ff; font-weight: bold; font-size: 12px;'
        ),
        Array.isArray(n)
          ? n.forEach(function (c) {
              A.plainObject(c) && c.key ? s.apply(console, [c.key, c.value]) : s.apply(console, [c])
            })
          : s.apply(console, [n]),
        console.groupEnd())
    }
    function ca(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
      e.addEventListener(t, n, r)
    }
    function ua(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
      e.removeEventListener(t, n, r)
    }
    function pa(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        o
      ;(o = function (i) {
        n(i), ua(e, t, o)
      }),
        ca(e, t, o, r)
    }
    function ur() {}
    function $r(e) {
      var t = e.handleClick,
        n = e.styles,
        r = n.color,
        o = n.height,
        i = n.width,
        a = zr(n, da)
      return y.createElement(
        'button',
        { 'aria-label': 'close', onClick: t, style: a, type: 'button' },
        y.createElement(
          'svg',
          {
            width: ''.concat(i, 'px'),
            height: ''.concat(o, 'px'),
            viewBox: '0 0 18 18',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            preserveAspectRatio: 'xMidYMid',
          },
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: r,
            })
          )
        )
      )
    }
    function Vr(e) {
      var t = e.content,
        n = e.footer,
        r = e.handleClick,
        o = e.open,
        i = e.positionWrapper,
        a = e.showCloseButton,
        s = e.title,
        c = e.styles,
        l = {
          content: y.isValidElement(t)
            ? t
            : y.createElement('div', { className: '__floater__content', style: c.content }, t),
        }
      return (
        s &&
          (l.title = y.isValidElement(s)
            ? s
            : y.createElement('div', { className: '__floater__title', style: c.title }, s)),
        n &&
          (l.footer = y.isValidElement(n)
            ? n
            : y.createElement('div', { className: '__floater__footer', style: c.footer }, n)),
        (a || i) &&
          !A.boolean(o) &&
          (l.close = y.createElement($r, { styles: c.close, handleClick: r })),
        y.createElement(
          'div',
          { className: '__floater__container', style: c.container },
          l.close,
          l.title,
          l.content,
          l.footer
        )
      )
    }
    function ha(e) {
      var t = (0, Gt.default)(fa, e.options || {})
      return {
        wrapper: {
          cursor: 'help',
          display: 'inline-flex',
          flexDirection: 'column',
          zIndex: t.zIndex,
        },
        wrapperPosition: { left: -1e3, position: 'absolute', top: -1e3, visibility: 'hidden' },
        floater: {
          display: 'inline-block',
          filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
          maxWidth: 300,
          opacity: 0,
          position: 'relative',
          transition: 'opacity 0.3s',
          visibility: 'hidden',
          zIndex: t.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: 'visible' },
        floaterWithAnimation: {
          opacity: 1,
          transition: 'opacity 0.3s, transform 0.2s',
          visibility: 'visible',
        },
        floaterWithComponent: { maxWidth: '100%' },
        floaterClosing: { opacity: 0, visibility: 'visible' },
        floaterCentered: {
          left: '50%',
          position: 'fixed',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        container: {
          backgroundColor: '#fff',
          color: '#666',
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: 'relative',
          zIndex: 10,
        },
        title: {
          borderBottom: '1px solid #555',
          color: '#555',
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18,
        },
        content: { fontSize: 15 },
        close: {
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: 0,
          color: '#555',
          fontSize: 0,
          height: 15,
          outline: 'none',
          padding: 10,
          position: 'absolute',
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: 'none',
        },
        footer: { borderTop: '1px solid #ccc', fontSize: 13, marginTop: 10, paddingTop: 5 },
        arrow: {
          color: '#fff',
          display: 'inline-flex',
          length: 16,
          margin: 8,
          position: 'absolute',
          spread: 32,
        },
        options: t,
      }
    }
    function Ce() {
      return !!(typeof window < 'u' && window.document && window.document.createElement)
    }
    function Xr(e) {
      return e ? e.getBoundingClientRect() : null
    }
    function Ea(e = !0) {
      let { body: t, documentElement: n } = document
      if (!t || !n) return 0
      if (e) {
        let r = [
            t.scrollHeight,
            t.offsetHeight,
            n.clientHeight,
            n.scrollHeight,
            n.offsetHeight,
          ].sort((i, a) => i - a),
          o = Math.floor(r.length / 2)
        return r.length % 2 === 0 ? (r[o - 1] + r[o]) / 2 : r[o]
      }
      return Math.max(
        t.scrollHeight,
        t.offsetHeight,
        n.clientHeight,
        n.scrollHeight,
        n.offsetHeight
      )
    }
    function Pe(e) {
      return typeof e == 'string' ? document.querySelector(e) : e
    }
    function Sa(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e)
    }
    function Pt(e, t, n) {
      if (!e) return De()
      let r = (0, Ir.default)(e)
      if (r) {
        if (r.isSameNode(De())) return n ? document : De()
        if (!(r.scrollHeight > r.offsetHeight) && !t) return (r.style.overflow = 'initial'), De()
      }
      return r
    }
    function dt(e, t) {
      if (!e) return !1
      let n = Pt(e, t)
      return n ? !n.isSameNode(De()) : !1
    }
    function Oa(e) {
      return e.offsetParent !== document.body
    }
    function ot(e, t = 'fixed') {
      if (!e || !(e instanceof HTMLElement)) return !1
      let { nodeName: n } = e,
        r = Sa(e)
      return n === 'BODY' || n === 'HTML'
        ? !1
        : r && r.position === t
          ? !0
          : e.parentNode
            ? ot(e.parentNode, t)
            : !1
    }
    function wa(e) {
      var t
      if (!e) return !1
      let n = e
      for (; n && n !== document.body; ) {
        if (n instanceof HTMLElement) {
          let { display: r, visibility: o } = getComputedStyle(n)
          if (r === 'none' || o === 'hidden') return !1
        }
        n = (t = n.parentElement) != null ? t : null
      }
      return !0
    }
    function Ta(e, t, n) {
      var r
      let o = Xr(e),
        i = Pt(e, n),
        a = dt(e, n),
        s = 0,
        c = (r = o?.top) != null ? r : 0
      return (
        i instanceof HTMLElement &&
          ((s = i.scrollTop),
          !a && !ot(e) && (c += s),
          i.isSameNode(De()) || (c += De().scrollTop)),
        Math.floor(c - t)
      )
    }
    function Ia(e, t, n) {
      var r
      if (!e) return 0
      let { offsetTop: o = 0, scrollTop: i = 0 } = (r = (0, Ir.default)(e)) != null ? r : {},
        a = e.getBoundingClientRect().top + i
      o && (dt(e, n) || Oa(e)) && (a -= o)
      let s = Math.floor(a - t)
      return s < 0 ? 0 : s
    }
    function De() {
      var e
      return (e = document.scrollingElement) != null ? e : document.documentElement
    }
    function Ra(e, t) {
      let { duration: n, element: r } = t
      return new Promise((o, i) => {
        let { scrollTop: a } = r,
          s = e > a ? e - a : a - e
        Qo.default.top(r, e, { duration: s < 100 ? 50 : n }, c =>
          c && c.message !== 'Element already at target scroll position' ? i(c) : o()
        )
      })
    }
    function Qr(e = navigator.userAgent) {
      let t = e
      return (
        typeof window > 'u'
          ? (t = 'node')
          : document.documentMode
            ? (t = 'ie')
            : /Edge/.test(e)
              ? (t = 'edge')
              : window.opera || e.includes(' OPR/')
                ? (t = 'opera')
                : typeof window.InstallTrigger < 'u'
                  ? (t = 'firefox')
                  : window.chrome
                    ? (t = 'chrome')
                    : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) &&
                      (t = 'safari'),
        t
      )
    }
    function _e(e) {
      let t = [],
        n = r => {
          if (typeof r == 'string' || typeof r == 'number') t.push(r)
          else if (Array.isArray(r)) r.forEach(o => n(o))
          else if (an(r)) {
            let { children: o } = r.props
            Array.isArray(o) ? o.forEach(i => n(i)) : n(o)
          }
        }
      return n(e), t.join(' ').trim()
    }
    function Ca(e, t) {
      return !C.plainObject(e) || !C.array(t) ? !1 : Object.keys(e).every(n => t.includes(n))
    }
    function _a(e) {
      let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        n = e.replace(t, (o, i, a, s) => i + i + a + a + s + s),
        r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n)
      return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : []
    }
    function pr(e) {
      return e.disableBeacon || e.placement === 'center'
    }
    function dr() {
      return !['chrome', 'safari', 'firefox', 'opera'].includes(Qr())
    }
    function Ae({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
      let o = r ? console.warn || console.error : console.log
      t &&
        (n && e
          ? (console.groupCollapsed(
              `%creact-joyride: ${n}`,
              'color: #ff0044; font-weight: bold; font-size: 12px;'
            ),
            Array.isArray(e)
              ? e.forEach(i => {
                  C.plainObject(i) && i.key
                    ? o.apply(console, [i.key, i.value])
                    : o.apply(console, [i])
                })
              : o.apply(console, [e]),
            console.groupEnd())
          : console.error('Missing title or data props'))
    }
    function Pa(e) {
      return Object.keys(e)
    }
    function Zr(e, ...t) {
      if (!C.plainObject(e)) throw new TypeError('Expected an object')
      let n = {}
      for (let r in e) ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]))
      return n
    }
    function xa(e, ...t) {
      if (!C.plainObject(e)) throw new TypeError('Expected an object')
      if (!t.length) return e
      let n = {}
      for (let r in e) ({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r])
      return n
    }
    function Aa(e) {
      let {
        isFirstStep: t,
        lifecycle: n,
        previousLifecycle: r,
        scrollToFirstStep: o,
        step: i,
        target: a,
      } = e
      return (
        !i.disableScrolling &&
        (!t || o || n === k.TOOLTIP) &&
        i.placement !== 'center' &&
        (!i.isFixed || !ot(a)) &&
        r !== n &&
        [k.BEACON, k.TOOLTIP].includes(n)
      )
    }
    function Da(e, t) {
      var n, r, o, i, a
      let { floaterProps: s, styles: c } = e,
        l = (0, Et.default)((n = t.floaterProps) != null ? n : {}, s ?? {}),
        p = (0, Et.default)(c ?? {}, (r = t.styles) != null ? r : {}),
        u = (0, Et.default)(Ma, p.options || {}),
        d = t.placement === 'center' || t.disableBeacon,
        { width: f } = u
      window.innerWidth > 480 && (f = 380),
        'width' in u &&
          (f =
            typeof u.width == 'number' && window.innerWidth < u.width
              ? window.innerWidth - 30
              : u.width)
      let h = {
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: u.zIndex,
        },
        b = {
          beacon: {
            ...nt,
            display: d ? 'none' : 'inline-block',
            height: u.beaconSize,
            position: 'relative',
            width: u.beaconSize,
            zIndex: u.zIndex,
          },
          beaconInner: {
            animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
            backgroundColor: u.primaryColor,
            borderRadius: '50%',
            display: 'block',
            height: '50%',
            left: '50%',
            opacity: 0.7,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
          },
          beaconOuter: {
            animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
            backgroundColor: `rgba(${_a(u.primaryColor).join(',')}, 0.2)`,
            border: `2px solid ${u.primaryColor}`,
            borderRadius: '50%',
            boxSizing: 'border-box',
            display: 'block',
            height: '100%',
            left: 0,
            opacity: 0.9,
            position: 'absolute',
            top: 0,
            transformOrigin: 'center',
            width: '100%',
          },
          tooltip: {
            backgroundColor: u.backgroundColor,
            borderRadius: 5,
            boxSizing: 'border-box',
            color: u.textColor,
            fontSize: 16,
            maxWidth: '100%',
            padding: 15,
            position: 'relative',
            width: f,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: 'center' },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: '20px 10px' },
          tooltipFooter: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 15,
          },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: { ...nt, backgroundColor: u.primaryColor, borderRadius: 4, color: '#fff' },
          buttonBack: { ...nt, color: u.primaryColor, marginLeft: 'auto', marginRight: 5 },
          buttonClose: {
            ...nt,
            color: u.textColor,
            height: 14,
            padding: 15,
            position: 'absolute',
            right: 0,
            top: 0,
            width: 14,
          },
          buttonSkip: { ...nt, color: u.textColor, fontSize: 14 },
          overlay: { ...h, backgroundColor: u.overlayColor, mixBlendMode: 'hard-light' },
          overlayLegacy: { ...h },
          overlayLegacyCenter: { ...h, backgroundColor: u.overlayColor },
          spotlight: { ...fr, backgroundColor: 'gray' },
          spotlightLegacy: {
            ...fr,
            boxShadow: `0 0 0 9999px ${u.overlayColor}, ${u.spotlightShadow}`,
          },
          floaterStyles: {
            arrow: {
              color:
                (a = (i = (o = l?.styles) == null ? void 0 : o.arrow) == null ? void 0 : i.color) !=
                null
                  ? a
                  : u.arrowColor,
            },
            options: { zIndex: u.zIndex + 100 },
          },
          options: u,
        }
      return (0, Et.default)(b, p)
    }
    function ja(e) {
      return xa(
        e,
        'beaconComponent',
        'disableCloseOnEsc',
        'disableOverlay',
        'disableOverlayClose',
        'disableScrolling',
        'disableScrollParentFix',
        'floaterProps',
        'hideBackButton',
        'hideCloseButton',
        'locale',
        'showProgress',
        'showSkipButton',
        'spotlightClicks',
        'spotlightPadding',
        'styles',
        'tooltipComponent'
      )
    }
    function Ue(e, t) {
      var n, r, o, i, a, s
      let c = t ?? {},
        l = vt.default.all([ka, ja(e), c], { isMergeableObject: C.plainObject }),
        p = Da(e, l),
        u = dt(Pe(l.target), l.disableScrollParentFix),
        d = vt.default.all([
          Na,
          (n = e.floaterProps) != null ? n : {},
          (r = l.floaterProps) != null ? r : {},
        ])
      return (
        (d.offset = l.offset),
        (d.styles = (0, vt.default)((o = d.styles) != null ? o : {}, p.floaterStyles)),
        (d.offset +=
          (a = (i = e.spotlightPadding) != null ? i : l.spotlightPadding) != null ? a : 0),
        l.placementBeacon && d.wrapperOptions && (d.wrapperOptions.placement = l.placementBeacon),
        u && d.options.preventOverflow && (d.options.preventOverflow.boundariesElement = 'window'),
        {
          ...l,
          locale: vt.default.all([eo, (s = e.locale) != null ? s : {}, l.locale || {}]),
          floaterProps: d,
          styles: Zr(p, 'floaterStyles'),
        }
      )
    }
    function to(e, t = !1) {
      return C.plainObject(e)
        ? e.target
          ? !0
          : (Ae({
              title: 'validateStep',
              data: 'target is missing from the step',
              warn: !0,
              debug: t,
            }),
            !1)
        : (Ae({ title: 'validateStep', data: 'step must be an object', warn: !0, debug: t }), !1)
    }
    function hr(e, t = !1) {
      return C.array(e)
        ? e.every(n => to(n, t))
        : (Ae({ title: 'validateSteps', data: 'steps must be an array', warn: !0, debug: t }), !1)
    }
    function Ba(e) {
      return new Fa(e)
    }
    function Wa({ styles: e }) {
      return q('div', {
        key: 'JoyrideSpotlight',
        className: 'react-joyride__spotlight',
        'data-test-id': 'spotlight',
        style: e,
      })
    }
    function qa({ styles: e, ...t }) {
      let { color: n, height: r, width: o, ...i } = e
      return y.createElement(
        'button',
        { style: i, type: 'button', ...t },
        y.createElement(
          'svg',
          {
            height: typeof r == 'number' ? `${r}px` : r,
            preserveAspectRatio: 'xMidYMid',
            version: '1.1',
            viewBox: '0 0 18 18',
            width: typeof o == 'number' ? `${o}px` : o,
            xmlns: 'http://www.w3.org/2000/svg',
          },
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: n,
            })
          )
        )
      )
    }
    function Va(e) {
      let {
          backProps: t,
          closeProps: n,
          continuous: r,
          index: o,
          isLastStep: i,
          primaryProps: a,
          size: s,
          skipProps: c,
          step: l,
          tooltipProps: p,
        } = e,
        {
          content: u,
          hideBackButton: d,
          hideCloseButton: f,
          hideFooter: h,
          locale: b,
          showProgress: N,
          showSkipButton: v,
          styles: T,
          title: m,
        } = l,
        { back: g, close: O, last: B, next: _, skip: V } = b,
        H = { primary: O }
      return (
        r &&
          ((H.primary = i ? B : _),
          N && (H.primary = q('span', null, H.primary, ' (', o + 1, '/', s, ')'))),
        H.primary &&
          (H.primary = q(
            'button',
            { 'data-test-id': 'button-primary', style: T.buttonNext, type: 'button', ...a },
            H.primary
          )),
        v &&
          !i &&
          (H.skip = q(
            'button',
            {
              'aria-live': 'off',
              'data-test-id': 'button-skip',
              style: T.buttonSkip,
              type: 'button',
              ...c,
            },
            V
          )),
        !d &&
          o > 0 &&
          (H.back = q(
            'button',
            { 'data-test-id': 'button-back', style: T.buttonBack, type: 'button', ...t },
            g
          )),
        (H.close = !f && q($a, { 'data-test-id': 'button-close', styles: T.buttonClose, ...n })),
        q(
          'div',
          {
            key: 'JoyrideTooltip',
            'aria-label': _e(m) || _e(u),
            className: 'react-joyride__tooltip',
            style: T.tooltip,
            ...p,
          },
          q(
            'div',
            { style: T.tooltipContainer },
            m && q('h1', { 'aria-label': _e(m), style: T.tooltipTitle }, m),
            q('div', { style: T.tooltipContent }, u)
          ),
          !h &&
            q(
              'div',
              { style: T.tooltipFooter },
              q('div', { style: T.tooltipFooterSpacer }, H.skip),
              H.back,
              H.primary
            ),
          H.close
        )
      )
    }
    function cs({ step: e, steps: t, onClose: n, onComplete: r }) {
      let [o, i] = ue(null),
        a = bn()
      return (
        ae(() => {
          let s
          return (
            i(c => {
              let l = t.findIndex(({ key: p }) => p === e)
              return l === -1 ? null : l === c ? c : ((s = setTimeout(i, 500, l)), null)
            }),
            () => clearTimeout(s)
          )
        }, [e, t]),
        o === null
          ? null
          : y.createElement(Qa, {
              continuous: !0,
              steps: t,
              stepIndex: o,
              spotlightPadding: 0,
              disableCloseOnEsc: !0,
              disableOverlayClose: !0,
              disableScrolling: !0,
              callback: s => {
                s.action === $.CLOSE && n(), s.action === $.NEXT && s.index === s.size - 1 && r()
              },
              floaterProps: {
                disableAnimation: !0,
                styles: {
                  arrow: { length: 20, spread: 2 },
                  floater: {
                    filter:
                      a.base === 'light'
                        ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                        : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
                  },
                },
              },
              tooltipComponent: ls,
              styles: {
                overlay: {
                  mixBlendMode: 'unset',
                  backgroundColor: t[o]?.target === 'body' ? 'rgba(27, 28, 29, 0.2)' : 'none',
                },
                spotlight: {
                  backgroundColor: 'none',
                  border: `solid 2px ${a.color.secondary}`,
                  boxShadow: '0px 0px 0px 9999px rgba(27, 28, 29, 0.2)',
                },
                tooltip: { width: 280, color: a.color.lightest, background: a.color.secondary },
                options: {
                  zIndex: 9998,
                  primaryColor: a.color.secondary,
                  arrowColor: a.color.secondary,
                },
              },
            })
      )
    }
    function ws({ api: e }) {
      let [t, n] = ue(!0),
        [r, o] = ue(!1),
        [i, a] = ue('1:Intro'),
        [s, c] = ue(),
        [l, p] = ue(),
        [u, d] = ue(),
        [f, h] = ue(),
        b = Je(
          _ => {
            try {
              let { id: V, refId: H } = e.getCurrentStoryData() || {}
              ;(V !== _ || H !== void 0) && e.selectStory(_)
            } catch {}
          },
          [e]
        ),
        N = Je(() => {
          let _ = new URL(window.location.href),
            V = decodeURIComponent(_.searchParams.get('path'))
          ;(_.search = `?path=${V}&onboarding=false`),
            history.replaceState({}, '', _.href),
            e.setQueryParams({ onboarding: 'false' }),
            n(!1)
        }, [e, n]),
        v = Je(() => {
          e.emit(Wn, { step: '6:FinishedOnboarding', type: 'telemetry' }),
            b('configure-your-project--docs'),
            N()
        }, [e, b, N])
      if (
        (ae(() => {
          e.setQueryParams({ onboarding: 'true' }),
            b('example-button--primary'),
            e.togglePanel(!0),
            e.togglePanelPosition('bottom'),
            e.setSelectedPanel('addon-controls')
        }, [e, b]),
        ae(() => {
          let _ = new MutationObserver(() => {
            c(document.getElementById('control-primary')),
              p(document.getElementById('save-from-controls')),
              d(document.getElementById('create-new-story-form'))
          })
          return _.observe(document.body, { childList: !0, subtree: !0 }), () => _.disconnect()
        }, []),
        ae(() => {
          a(_ =>
            ['1:Intro', '5:StoryCreated', '6:FinishedOnboarding'].includes(_)
              ? _
              : u
                ? '4:CreateStory'
                : l
                  ? '3:SaveFromControls'
                  : s
                    ? '2:Controls'
                    : '1:Intro'
          )
        }, [u, s, l]),
        ae(
          () =>
            e.on(un, ({ payload: _, success: V }) => {
              !V ||
                !_?.newStoryName ||
                (h(_),
                o(!0),
                a('5:StoryCreated'),
                setTimeout(() => e.clearNotification('save-story-success')))
            }),
          [e]
        ),
        ae(() => e.emit(Wn, { step: i, type: 'telemetry' }), [e, i]),
        !t)
      )
        return null
      let T = f?.sourceFileContent,
        m = T?.lastIndexOf(`export const ${f?.newStoryExportName}`),
        g = T?.slice(m).trim(),
        O = T?.slice(0, m).split(`
`).length,
        B = [
          {
            key: '2:Controls',
            target: '#control-primary',
            title: 'Interactive story playground',
            content: y.createElement(
              y.Fragment,
              null,
              'See how a story renders with different data and state without touching code. Try it out by toggling this button.',
              y.createElement(Bn, { targetSelector: '#control-primary', pulsating: !0 })
            ),
            offset: 20,
            placement: 'right',
            disableBeacon: !0,
            disableOverlay: !0,
            spotlightClicks: !0,
            onNextButtonClick: () => {
              document.querySelector('#control-primary').click()
            },
          },
          {
            key: '3:SaveFromControls',
            target: 'button[aria-label="Create new story with these settings"]',
            title: 'Save your changes as a new story',
            content: y.createElement(
              y.Fragment,
              null,
              'Great! Storybook stories represent the key states of each of your components. After modifying a story, you can save your changes from here or reset it.',
              y.createElement(Bn, {
                targetSelector: "button[aria-label='Create new story with these settings']",
              })
            ),
            offset: 6,
            placement: 'top',
            disableBeacon: !0,
            disableOverlay: !0,
            spotlightClicks: !0,
            onNextButtonClick: () => {
              document
                .querySelector('button[aria-label="Create new story with these settings"]')
                .click()
            },
            styles: { tooltip: { width: 400 } },
          },
          {
            key: '5:StoryCreated',
            target: '#storybook-explorer-tree [data-selected="true"]',
            title: 'You just added your first story!',
            content: y.createElement(
              y.Fragment,
              null,
              'Well done! You just created your first story from the Storybook manager. This automatically added a few lines of code in',
              ' ',
              y.createElement(Es, null, f?.sourceFileName),
              '.',
              g &&
                y.createElement(
                  kt,
                  { theme: Lt(gn.dark) },
                  y.createElement(
                    Ss,
                    null,
                    y.createElement(
                      mn,
                      { language: 'jsx', showLineNumbers: !0, startingLineNumber: O },
                      g
                    )
                  )
                )
            ),
            offset: 12,
            placement: 'right',
            disableBeacon: !0,
            disableOverlay: !0,
            styles: { tooltip: { width: 400 } },
          },
        ]
      return y.createElement(
        kt,
        { theme: Os },
        r && y.createElement(Do, null),
        i === '1:Intro'
          ? y.createElement(vs, { onDismiss: () => a('2:Controls') })
          : y.createElement(cs, { step: i, steps: B, onClose: N, onComplete: v })
      )
    }
    var po,
      gr,
      fo,
      br,
      ho,
      mo,
      le,
      yo,
      je,
      go,
      bo,
      $t,
      vo,
      vr,
      Eo,
      Er,
      Sr,
      So,
      Oo,
      wo,
      To,
      Io,
      wn,
      Ro,
      Tn,
      In,
      Rn,
      Cn,
      _n,
      Pn,
      xn,
      An,
      Nn,
      kn,
      Ln,
      _o,
      Po,
      xo,
      Mn,
      bt,
      be,
      rt,
      Ao,
      Mt,
      Dt,
      Dn,
      We,
      jt,
      jn,
      Or,
      Fn,
      No,
      ko,
      Mo,
      Do,
      Wn,
      jo,
      Fo,
      Un,
      Hn,
      Bo,
      Go,
      Yo,
      Vo,
      C,
      Qo,
      Ir,
      vt,
      Et,
      S,
      it,
      Zo,
      ni,
      ri,
      Vn,
      Kn,
      ai,
      si,
      Ge,
      se,
      Si,
      Wr,
      Ft,
      Bt,
      Li,
      Mi,
      Ct,
      Zn,
      Gt,
      Di,
      ji,
      Fi,
      A,
      Ui,
      Hi,
      er,
      tr,
      zi,
      Yt,
      na,
      ra,
      oa,
      U,
      et,
      Yr,
      qr,
      da,
      Kr,
      Jr,
      fa,
      ma,
      ya,
      tn,
      ga,
      ba,
      va,
      P,
      $,
      pe,
      k,
      D,
      tt,
      Na,
      eo,
      ka,
      La,
      Ma,
      nt,
      fr,
      no,
      mr,
      Fa,
      Ua,
      Ha,
      za,
      Ga,
      Ya,
      $a,
      Ka,
      Ja,
      Xa,
      ro,
      Qa,
      Za,
      es,
      ts,
      ns,
      rs,
      os,
      is,
      as,
      ss,
      ls,
      us,
      oo,
      ps,
      ds,
      fs,
      hs,
      ms,
      ys,
      gs,
      bs,
      yr,
      vs,
      Es,
      Ss,
      Os,
      ao = ce(() => {
        X()
        Q()
        Z()
        ht()
        ht()
        yn()
        Nt()
        vn()
        yt()
        yt()
        On()
        ;(po = Object.create),
          (gr = Object.defineProperty),
          (fo = Object.getOwnPropertyDescriptor),
          (br = Object.getOwnPropertyNames),
          (ho = Object.getPrototypeOf),
          (mo = Object.prototype.hasOwnProperty),
          (le = (e, t) =>
            function () {
              return t || (0, e[br(e)[0]])((t = { exports: {} }).exports, t), t.exports
            }),
          (yo = (e, t, n, r) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
              for (let o of br(t))
                !mo.call(e, o) &&
                  o !== n &&
                  gr(e, o, { get: () => t[o], enumerable: !(r = fo(t, o)) || r.enumerable })
            return e
          }),
          (je = (e, t, n) => (
            (n = e != null ? po(ho(e)) : {}),
            yo(t || !e || !e.__esModule ? gr(n, 'default', { value: e, enumerable: !0 }) : n, e)
          )),
          (go = le({
            '../../node_modules/scroll/index.js'(e, t) {
              var n = new Error('Element already at target scroll position'),
                r = new Error('Scroll cancelled'),
                o = Math.min,
                i = Date.now
              t.exports = { left: a('scrollLeft'), top: a('scrollTop') }
              function a(l) {
                return function (p, u, d, f) {
                  ;(d = d || {}),
                    typeof d == 'function' && ((f = d), (d = {})),
                    typeof f != 'function' && (f = c)
                  var h = i(),
                    b = p[l],
                    N = d.ease || s,
                    v = isNaN(d.duration) ? 350 : +d.duration,
                    T = !1
                  return b === u ? f(n, p[l]) : requestAnimationFrame(g), m
                  function m() {
                    T = !0
                  }
                  function g(O) {
                    if (T) return f(r, p[l])
                    var B = i(),
                      _ = o(1, (B - h) / v),
                      V = N(_)
                    ;(p[l] = V * (u - b) + b),
                      _ < 1
                        ? requestAnimationFrame(g)
                        : requestAnimationFrame(function () {
                            f(null, p[l])
                          })
                  }
                }
              }
              function s(l) {
                return 0.5 * (1 - Math.cos(Math.PI * l))
              }
              function c() {}
            },
          })),
          (bo = le({
            '../../node_modules/scrollparent/scrollparent.js'(e, t) {
              ;(function (n, r) {
                typeof define == 'function' && define.amd
                  ? define([], r)
                  : typeof t == 'object' && t.exports
                    ? (t.exports = r())
                    : (n.Scrollparent = r())
              })(e, function () {
                function n(o) {
                  var i = getComputedStyle(o, null).getPropertyValue('overflow')
                  return i.indexOf('scroll') > -1 || i.indexOf('auto') > -1
                }
                function r(o) {
                  if (o instanceof HTMLElement || o instanceof SVGElement) {
                    for (var i = o.parentNode; i.parentNode; ) {
                      if (n(i)) return i
                      i = i.parentNode
                    }
                    return document.scrollingElement || document.documentElement
                  }
                }
                return r
              })
            },
          })),
          ($t = le({
            '../../node_modules/deepmerge/dist/cjs.js'(e, t) {
              var n = function (m) {
                return r(m) && !o(m)
              }
              function r(m) {
                return !!m && typeof m == 'object'
              }
              function o(m) {
                var g = Object.prototype.toString.call(m)
                return g === '[object RegExp]' || g === '[object Date]' || s(m)
              }
              var i = typeof Symbol == 'function' && Symbol.for,
                a = i ? Symbol.for('react.element') : 60103
              function s(m) {
                return m.$$typeof === a
              }
              function c(m) {
                return Array.isArray(m) ? [] : {}
              }
              function l(m, g) {
                return g.clone !== !1 && g.isMergeableObject(m) ? v(c(m), m, g) : m
              }
              function p(m, g, O) {
                return m.concat(g).map(function (B) {
                  return l(B, O)
                })
              }
              function u(m, g) {
                if (!g.customMerge) return v
                var O = g.customMerge(m)
                return typeof O == 'function' ? O : v
              }
              function d(m) {
                return Object.getOwnPropertySymbols
                  ? Object.getOwnPropertySymbols(m).filter(function (g) {
                      return Object.propertyIsEnumerable.call(m, g)
                    })
                  : []
              }
              function f(m) {
                return Object.keys(m).concat(d(m))
              }
              function h(m, g) {
                try {
                  return g in m
                } catch {
                  return !1
                }
              }
              function b(m, g) {
                return (
                  h(m, g) &&
                  !(Object.hasOwnProperty.call(m, g) && Object.propertyIsEnumerable.call(m, g))
                )
              }
              function N(m, g, O) {
                var B = {}
                return (
                  O.isMergeableObject(m) &&
                    f(m).forEach(function (_) {
                      B[_] = l(m[_], O)
                    }),
                  f(g).forEach(function (_) {
                    b(m, _) ||
                      (h(m, _) && O.isMergeableObject(g[_])
                        ? (B[_] = u(_, O)(m[_], g[_], O))
                        : (B[_] = l(g[_], O)))
                  }),
                  B
                )
              }
              function v(m, g, O) {
                ;(O = O || {}),
                  (O.arrayMerge = O.arrayMerge || p),
                  (O.isMergeableObject = O.isMergeableObject || n),
                  (O.cloneUnlessOtherwiseSpecified = l)
                var B = Array.isArray(g),
                  _ = Array.isArray(m),
                  V = B === _
                return V ? (B ? O.arrayMerge(m, g, O) : N(m, g, O)) : l(g, O)
              }
              v.all = function (m, g) {
                if (!Array.isArray(m)) throw new Error('first argument should be an array')
                return m.reduce(function (O, B) {
                  return v(O, B, g)
                }, {})
              }
              var T = v
              t.exports = T
            },
          })),
          (vo = le({
            '../../node_modules/react-is/cjs/react-is.development.js'(e) {
              ;(function () {
                var t = typeof Symbol == 'function' && Symbol.for,
                  n = t ? Symbol.for('react.element') : 60103,
                  r = t ? Symbol.for('react.portal') : 60106,
                  o = t ? Symbol.for('react.fragment') : 60107,
                  i = t ? Symbol.for('react.strict_mode') : 60108,
                  a = t ? Symbol.for('react.profiler') : 60114,
                  s = t ? Symbol.for('react.provider') : 60109,
                  c = t ? Symbol.for('react.context') : 60110,
                  l = t ? Symbol.for('react.async_mode') : 60111,
                  p = t ? Symbol.for('react.concurrent_mode') : 60111,
                  u = t ? Symbol.for('react.forward_ref') : 60112,
                  d = t ? Symbol.for('react.suspense') : 60113,
                  f = t ? Symbol.for('react.suspense_list') : 60120,
                  h = t ? Symbol.for('react.memo') : 60115,
                  b = t ? Symbol.for('react.lazy') : 60116,
                  N = t ? Symbol.for('react.block') : 60121,
                  v = t ? Symbol.for('react.fundamental') : 60117,
                  T = t ? Symbol.for('react.responder') : 60118,
                  m = t ? Symbol.for('react.scope') : 60119
                function g(w) {
                  return (
                    typeof w == 'string' ||
                    typeof w == 'function' ||
                    w === o ||
                    w === p ||
                    w === a ||
                    w === i ||
                    w === d ||
                    w === f ||
                    (typeof w == 'object' &&
                      w !== null &&
                      (w.$$typeof === b ||
                        w.$$typeof === h ||
                        w.$$typeof === s ||
                        w.$$typeof === c ||
                        w.$$typeof === u ||
                        w.$$typeof === v ||
                        w.$$typeof === T ||
                        w.$$typeof === m ||
                        w.$$typeof === N))
                  )
                }
                function O(w) {
                  if (typeof w == 'object' && w !== null) {
                    var ne = w.$$typeof
                    switch (ne) {
                      case n:
                        var Oe = w.type
                        switch (Oe) {
                          case l:
                          case p:
                          case o:
                          case a:
                          case i:
                          case d:
                            return Oe
                          default:
                            var nn = Oe && Oe.$$typeof
                            switch (nn) {
                              case c:
                              case u:
                              case b:
                              case h:
                              case s:
                                return nn
                              default:
                                return ne
                            }
                        }
                      case r:
                        return ne
                    }
                  }
                }
                var B = l,
                  _ = p,
                  V = c,
                  H = s,
                  te = n,
                  Ne = u,
                  Ve = o,
                  ke = b,
                  Be = h,
                  Ke = r,
                  Te = a,
                  Ie = i,
                  he = d,
                  Re = !1
                function xt(w) {
                  return (
                    Re ||
                      ((Re = !0),
                      console.warn(
                        'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                      )),
                    ft(w) || O(w) === l
                  )
                }
                function ft(w) {
                  return O(w) === p
                }
                function E(w) {
                  return O(w) === c
                }
                function x(w) {
                  return O(w) === s
                }
                function W(w) {
                  return typeof w == 'object' && w !== null && w.$$typeof === n
                }
                function j(w) {
                  return O(w) === u
                }
                function L(w) {
                  return O(w) === o
                }
                function z(w) {
                  return O(w) === b
                }
                function M(w) {
                  return O(w) === h
                }
                function F(w) {
                  return O(w) === r
                }
                function G(w) {
                  return O(w) === a
                }
                function K(w) {
                  return O(w) === i
                }
                function Y(w) {
                  return O(w) === d
                }
                ;(e.AsyncMode = B),
                  (e.ConcurrentMode = _),
                  (e.ContextConsumer = V),
                  (e.ContextProvider = H),
                  (e.Element = te),
                  (e.ForwardRef = Ne),
                  (e.Fragment = Ve),
                  (e.Lazy = ke),
                  (e.Memo = Be),
                  (e.Portal = Ke),
                  (e.Profiler = Te),
                  (e.StrictMode = Ie),
                  (e.Suspense = he),
                  (e.isAsyncMode = xt),
                  (e.isConcurrentMode = ft),
                  (e.isContextConsumer = E),
                  (e.isContextProvider = x),
                  (e.isElement = W),
                  (e.isForwardRef = j),
                  (e.isFragment = L),
                  (e.isLazy = z),
                  (e.isMemo = M),
                  (e.isPortal = F),
                  (e.isProfiler = G),
                  (e.isStrictMode = K),
                  (e.isSuspense = Y),
                  (e.isValidElementType = g),
                  (e.typeOf = O)
              })()
            },
          })),
          (vr = le({
            '../../node_modules/react-is/index.js'(e, t) {
              t.exports = vo()
            },
          })),
          (Eo = le({
            '../../node_modules/object-assign/index.js'(e, t) {
              var n = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable
              function i(s) {
                if (s == null)
                  throw new TypeError('Object.assign cannot be called with null or undefined')
                return Object(s)
              }
              function a() {
                try {
                  if (!Object.assign) return !1
                  var s = new String('abc')
                  if (((s[5] = 'de'), Object.getOwnPropertyNames(s)[0] === '5')) return !1
                  for (var c = {}, l = 0; l < 10; l++) c['_' + String.fromCharCode(l)] = l
                  var p = Object.getOwnPropertyNames(c).map(function (d) {
                    return c[d]
                  })
                  if (p.join('') !== '0123456789') return !1
                  var u = {}
                  return (
                    'abcdefghijklmnopqrst'.split('').forEach(function (d) {
                      u[d] = d
                    }),
                    Object.keys(Object.assign({}, u)).join('') === 'abcdefghijklmnopqrst'
                  )
                } catch {
                  return !1
                }
              }
              t.exports = a()
                ? Object.assign
                : function (s, c) {
                    for (var l, p = i(s), u, d = 1; d < arguments.length; d++) {
                      l = Object(arguments[d])
                      for (var f in l) r.call(l, f) && (p[f] = l[f])
                      if (n) {
                        u = n(l)
                        for (var h = 0; h < u.length; h++) o.call(l, u[h]) && (p[u[h]] = l[u[h]])
                      }
                    }
                    return p
                  }
            },
          })),
          (Er = le({
            '../../node_modules/prop-types/lib/ReactPropTypesSecret.js'(e, t) {
              var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              t.exports = n
            },
          })),
          (Sr = le({
            '../../node_modules/prop-types/lib/has.js'(e, t) {
              t.exports = Function.call.bind(Object.prototype.hasOwnProperty)
            },
          })),
          (So = le({
            '../../node_modules/prop-types/checkPropTypes.js'(e, t) {
              var n = function () {}
              ;(r = Er()),
                (o = {}),
                (i = Sr()),
                (n = function (s) {
                  var c = 'Warning: ' + s
                  typeof console < 'u' && console.error(c)
                  try {
                    throw new Error(c)
                  } catch {}
                })
              var r, o, i
              function a(s, c, l, p, u) {
                for (var d in s)
                  if (i(s, d)) {
                    var f
                    try {
                      if (typeof s[d] != 'function') {
                        var h = Error(
                          (p || 'React class') +
                            ': ' +
                            l +
                            ' type `' +
                            d +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof s[d] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        )
                        throw ((h.name = 'Invariant Violation'), h)
                      }
                      f = s[d](c, d, p, l, null, r)
                    } catch (N) {
                      f = N
                    }
                    if (
                      (f &&
                        !(f instanceof Error) &&
                        n(
                          (p || 'React class') +
                            ': type specification of ' +
                            l +
                            ' `' +
                            d +
                            '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                            typeof f +
                            '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                        ),
                      f instanceof Error && !(f.message in o))
                    ) {
                      o[f.message] = !0
                      var b = u ? u() : ''
                      n('Failed ' + l + ' type: ' + f.message + (b ?? ''))
                    }
                  }
              }
              ;(a.resetWarningCache = function () {
                o = {}
              }),
                (t.exports = a)
            },
          })),
          (Oo = le({
            '../../node_modules/prop-types/factoryWithTypeCheckers.js'(e, t) {
              var n = vr(),
                r = Eo(),
                o = Er(),
                i = Sr(),
                a = So(),
                s = function () {}
              s = function (l) {
                var p = 'Warning: ' + l
                typeof console < 'u' && console.error(p)
                try {
                  throw new Error(p)
                } catch {}
              }
              function c() {
                return null
              }
              t.exports = function (l, p) {
                var u = typeof Symbol == 'function' && Symbol.iterator,
                  d = '@@iterator'
                function f(E) {
                  var x = E && ((u && E[u]) || E[d])
                  if (typeof x == 'function') return x
                }
                var h = '<<anonymous>>',
                  b = {
                    array: m('array'),
                    bigint: m('bigint'),
                    bool: m('boolean'),
                    func: m('function'),
                    number: m('number'),
                    object: m('object'),
                    string: m('string'),
                    symbol: m('symbol'),
                    any: g(),
                    arrayOf: O,
                    element: B(),
                    elementType: _(),
                    instanceOf: V,
                    node: Ve(),
                    objectOf: te,
                    oneOf: H,
                    oneOfType: Ne,
                    shape: Be,
                    exact: Ke,
                  }
                function N(E, x) {
                  return E === x ? E !== 0 || 1 / E === 1 / x : E !== E && x !== x
                }
                function v(E, x) {
                  ;(this.message = E),
                    (this.data = x && typeof x == 'object' ? x : {}),
                    (this.stack = '')
                }
                v.prototype = Error.prototype
                function T(E) {
                  var x = {},
                    W = 0
                  function j(z, M, F, G, K, Y, w) {
                    if (((G = G || h), (Y = Y || F), w !== o)) {
                      if (p) {
                        var ne = new Error(
                          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                        )
                        throw ((ne.name = 'Invariant Violation'), ne)
                      } else if (typeof console < 'u') {
                        var Oe = G + ':' + F
                        !x[Oe] &&
                          W < 3 &&
                          (s(
                            'You are manually calling a React.PropTypes validation function for the `' +
                              Y +
                              '` prop on `' +
                              G +
                              '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                          ),
                          (x[Oe] = !0),
                          W++)
                      }
                    }
                    return M[F] == null
                      ? z
                        ? M[F] === null
                          ? new v(
                              'The ' +
                                K +
                                ' `' +
                                Y +
                                '` is marked as required ' +
                                ('in `' + G + '`, but its value is `null`.')
                            )
                          : new v(
                              'The ' +
                                K +
                                ' `' +
                                Y +
                                '` is marked as required in ' +
                                ('`' + G + '`, but its value is `undefined`.')
                            )
                        : null
                      : E(M, F, G, K, Y)
                  }
                  var L = j.bind(null, !1)
                  return (L.isRequired = j.bind(null, !0)), L
                }
                function m(E) {
                  function x(W, j, L, z, M, F) {
                    var G = W[j],
                      K = he(G)
                    if (K !== E) {
                      var Y = Re(G)
                      return new v(
                        'Invalid ' +
                          z +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + Y + '` supplied to `' + L + '`, expected ') +
                          ('`' + E + '`.'),
                        { expectedType: E }
                      )
                    }
                    return null
                  }
                  return T(x)
                }
                function g() {
                  return T(c)
                }
                function O(E) {
                  function x(W, j, L, z, M) {
                    if (typeof E != 'function')
                      return new v(
                        'Property `' +
                          M +
                          '` of component `' +
                          L +
                          '` has invalid PropType notation inside arrayOf.'
                      )
                    var F = W[j]
                    if (!Array.isArray(F)) {
                      var G = he(F)
                      return new v(
                        'Invalid ' +
                          z +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + G + '` supplied to `' + L + '`, expected an array.')
                      )
                    }
                    for (var K = 0; K < F.length; K++) {
                      var Y = E(F, K, L, z, M + '[' + K + ']', o)
                      if (Y instanceof Error) return Y
                    }
                    return null
                  }
                  return T(x)
                }
                function B() {
                  function E(x, W, j, L, z) {
                    var M = x[W]
                    if (!l(M)) {
                      var F = he(M)
                      return new v(
                        'Invalid ' +
                          L +
                          ' `' +
                          z +
                          '` of type ' +
                          ('`' + F + '` supplied to `' + j + '`, expected a single ReactElement.')
                      )
                    }
                    return null
                  }
                  return T(E)
                }
                function _() {
                  function E(x, W, j, L, z) {
                    var M = x[W]
                    if (!n.isValidElementType(M)) {
                      var F = he(M)
                      return new v(
                        'Invalid ' +
                          L +
                          ' `' +
                          z +
                          '` of type ' +
                          ('`' +
                            F +
                            '` supplied to `' +
                            j +
                            '`, expected a single ReactElement type.')
                      )
                    }
                    return null
                  }
                  return T(E)
                }
                function V(E) {
                  function x(W, j, L, z, M) {
                    if (!(W[j] instanceof E)) {
                      var F = E.name || h,
                        G = ft(W[j])
                      return new v(
                        'Invalid ' +
                          z +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + G + '` supplied to `' + L + '`, expected ') +
                          ('instance of `' + F + '`.')
                      )
                    }
                    return null
                  }
                  return T(x)
                }
                function H(E) {
                  if (!Array.isArray(E))
                    return (
                      arguments.length > 1
                        ? s(
                            'Invalid arguments supplied to oneOf, expected an array, got ' +
                              arguments.length +
                              ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                          )
                        : s('Invalid argument supplied to oneOf, expected an array.'),
                      c
                    )
                  function x(W, j, L, z, M) {
                    for (var F = W[j], G = 0; G < E.length; G++) if (N(F, E[G])) return null
                    var K = JSON.stringify(E, function (Y, w) {
                      var ne = Re(w)
                      return ne === 'symbol' ? String(w) : w
                    })
                    return new v(
                      'Invalid ' +
                        z +
                        ' `' +
                        M +
                        '` of value `' +
                        String(F) +
                        '` ' +
                        ('supplied to `' + L + '`, expected one of ' + K + '.')
                    )
                  }
                  return T(x)
                }
                function te(E) {
                  function x(W, j, L, z, M) {
                    if (typeof E != 'function')
                      return new v(
                        'Property `' +
                          M +
                          '` of component `' +
                          L +
                          '` has invalid PropType notation inside objectOf.'
                      )
                    var F = W[j],
                      G = he(F)
                    if (G !== 'object')
                      return new v(
                        'Invalid ' +
                          z +
                          ' `' +
                          M +
                          '` of type ' +
                          ('`' + G + '` supplied to `' + L + '`, expected an object.')
                      )
                    for (var K in F)
                      if (i(F, K)) {
                        var Y = E(F, K, L, z, M + '.' + K, o)
                        if (Y instanceof Error) return Y
                      }
                    return null
                  }
                  return T(x)
                }
                function Ne(E) {
                  if (!Array.isArray(E))
                    return (
                      s('Invalid argument supplied to oneOfType, expected an instance of array.'), c
                    )
                  for (var x = 0; x < E.length; x++) {
                    var W = E[x]
                    if (typeof W != 'function')
                      return (
                        s(
                          'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                            xt(W) +
                            ' at index ' +
                            x +
                            '.'
                        ),
                        c
                      )
                  }
                  function j(L, z, M, F, G) {
                    for (var K = [], Y = 0; Y < E.length; Y++) {
                      var w = E[Y],
                        ne = w(L, z, M, F, G, o)
                      if (ne == null) return null
                      ne.data && i(ne.data, 'expectedType') && K.push(ne.data.expectedType)
                    }
                    var Oe = K.length > 0 ? ', expected one of type [' + K.join(', ') + ']' : ''
                    return new v(
                      'Invalid ' + F + ' `' + G + '` supplied to ' + ('`' + M + '`' + Oe + '.')
                    )
                  }
                  return T(j)
                }
                function Ve() {
                  function E(x, W, j, L, z) {
                    return Te(x[W])
                      ? null
                      : new v(
                          'Invalid ' +
                            L +
                            ' `' +
                            z +
                            '` supplied to ' +
                            ('`' + j + '`, expected a ReactNode.')
                        )
                  }
                  return T(E)
                }
                function ke(E, x, W, j, L) {
                  return new v(
                    (E || 'React class') +
                      ': ' +
                      x +
                      ' type `' +
                      W +
                      '.' +
                      j +
                      '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                      L +
                      '`.'
                  )
                }
                function Be(E) {
                  function x(W, j, L, z, M) {
                    var F = W[j],
                      G = he(F)
                    if (G !== 'object')
                      return new v(
                        'Invalid ' +
                          z +
                          ' `' +
                          M +
                          '` of type `' +
                          G +
                          '` ' +
                          ('supplied to `' + L + '`, expected `object`.')
                      )
                    for (var K in E) {
                      var Y = E[K]
                      if (typeof Y != 'function') return ke(L, z, M, K, Re(Y))
                      var w = Y(F, K, L, z, M + '.' + K, o)
                      if (w) return w
                    }
                    return null
                  }
                  return T(x)
                }
                function Ke(E) {
                  function x(W, j, L, z, M) {
                    var F = W[j],
                      G = he(F)
                    if (G !== 'object')
                      return new v(
                        'Invalid ' +
                          z +
                          ' `' +
                          M +
                          '` of type `' +
                          G +
                          '` ' +
                          ('supplied to `' + L + '`, expected `object`.')
                      )
                    var K = r({}, W[j], E)
                    for (var Y in K) {
                      var w = E[Y]
                      if (i(E, Y) && typeof w != 'function') return ke(L, z, M, Y, Re(w))
                      if (!w)
                        return new v(
                          'Invalid ' +
                            z +
                            ' `' +
                            M +
                            '` key `' +
                            Y +
                            '` supplied to `' +
                            L +
                            '`.\nBad object: ' +
                            JSON.stringify(W[j], null, '  ') +
                            `
Valid keys: ` +
                            JSON.stringify(Object.keys(E), null, '  ')
                        )
                      var ne = w(F, Y, L, z, M + '.' + Y, o)
                      if (ne) return ne
                    }
                    return null
                  }
                  return T(x)
                }
                function Te(E) {
                  switch (typeof E) {
                    case 'number':
                    case 'string':
                    case 'undefined':
                      return !0
                    case 'boolean':
                      return !E
                    case 'object':
                      if (Array.isArray(E)) return E.every(Te)
                      if (E === null || l(E)) return !0
                      var x = f(E)
                      if (x) {
                        var W = x.call(E),
                          j
                        if (x !== E.entries) {
                          for (; !(j = W.next()).done; ) if (!Te(j.value)) return !1
                        } else
                          for (; !(j = W.next()).done; ) {
                            var L = j.value
                            if (L && !Te(L[1])) return !1
                          }
                      } else return !1
                      return !0
                    default:
                      return !1
                  }
                }
                function Ie(E, x) {
                  return E === 'symbol'
                    ? !0
                    : x
                      ? x['@@toStringTag'] === 'Symbol' ||
                        (typeof Symbol == 'function' && x instanceof Symbol)
                      : !1
                }
                function he(E) {
                  var x = typeof E
                  return Array.isArray(E)
                    ? 'array'
                    : E instanceof RegExp
                      ? 'object'
                      : Ie(x, E)
                        ? 'symbol'
                        : x
                }
                function Re(E) {
                  if (typeof E > 'u' || E === null) return '' + E
                  var x = he(E)
                  if (x === 'object') {
                    if (E instanceof Date) return 'date'
                    if (E instanceof RegExp) return 'regexp'
                  }
                  return x
                }
                function xt(E) {
                  var x = Re(E)
                  switch (x) {
                    case 'array':
                    case 'object':
                      return 'an ' + x
                    case 'boolean':
                    case 'date':
                    case 'regexp':
                      return 'a ' + x
                    default:
                      return x
                  }
                }
                function ft(E) {
                  return !E.constructor || !E.constructor.name ? h : E.constructor.name
                }
                return (
                  (b.checkPropTypes = a),
                  (b.resetWarningCache = a.resetWarningCache),
                  (b.PropTypes = b),
                  b
                )
              }
            },
          })),
          (wo = le({
            '../../node_modules/prop-types/index.js'(e, t) {
              ;(n = vr()), (r = !0), (t.exports = Oo()(n.isElement, r))
              var n, r
            },
          })),
          (To = le({
            '../../node_modules/react-innertext/index.js'(e, t) {
              var n = function (i) {
                  return Object.prototype.hasOwnProperty.call(i, 'props')
                },
                r = function (i, a) {
                  return i + o(a)
                },
                o = function (i) {
                  return i === null || typeof i == 'boolean' || typeof i > 'u'
                    ? ''
                    : typeof i == 'number'
                      ? i.toString()
                      : typeof i == 'string'
                        ? i
                        : Array.isArray(i)
                          ? i.reduce(r, '')
                          : n(i) && Object.prototype.hasOwnProperty.call(i.props, 'children')
                            ? o(i.props.children)
                            : ''
                }
              ;(o.default = o), (t.exports = o)
            },
          })),
          (Io =
            '@keyframes Bc2PgW_ya{to{translate:0 var(--sh)}}@keyframes Bc2PgW_xa{to{translate:var(--xlp)0}}@keyframes Bc2PgW_r{50%{rotate:var(--hr)180deg}to{rotate:var(--r)360deg}}.Bc2PgW_c{z-index:1200;width:0;height:0;position:relative;overflow:visible}.Bc2PgW_p{animation:xa var(--dc)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:Bc2PgW_xa}.Bc2PgW_p>div{animation:ya var(--dc)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--w);height:var(--h);animation-name:Bc2PgW_ya;position:absolute;top:0;left:0}.Bc2PgW_p>div:before{content:"";background-color:var(--bgc);animation:r var(--rd)infinite linear;border-radius:var(--br);width:100%;height:100%;animation-name:Bc2PgW_r;display:block}'),
          (wn = 'Bc2PgW_p'),
          (Ro = 'Bc2PgW_c'),
          (Tn = ['#FFC700', '#FF0000', '#2E3191', '#41BBC7']),
          (In = 3500),
          (Rn = 0.5),
          (Cn = 150),
          (_n = 'mix'),
          (Pn = 12),
          (xn = ''),
          (An = !0),
          (Nn = 800),
          (kn = 1600)
        ;(Ln = 200),
          (_o = 800),
          (Po = 0.1),
          (xo = 0.3),
          (Mn = 0.5),
          (bt = Math.abs),
          (be = Math.random),
          (rt = Math.round),
          (Ao = Math.max),
          (Mt = e => document.createElement(e)),
          (Dt = (e, t) => e.appendChild(t)),
          (Dn = (e, t) =>
            Array.from({ length: e }, (n, r) => ({
              color: t[r % t.length],
              degree: (360 * r) / e,
            }))),
          (We = (e, t = 2) => rt((e + Number.EPSILON) * 10 ** t) / 10 ** t),
          (jt = (e, t, n, r, o) => ((e - t) * (o - r)) / (n - t) + r),
          (jn = (e, t) => (e + t > 360 ? e + t - 360 : e + t)),
          (Or = () => be() > 0.5),
          (Fn = Object.entries),
          (No = 6),
          (ko = e => e !== 1 && Or())
        ;(Mo = ee.div({
          zIndex: 9999,
          position: 'fixed',
          top: 0,
          left: '50%',
          width: '50%',
          height: '100%',
        })),
          (Do = y.memo(function ({
            timeToFade: e = 5e3,
            colors: t = ['#CA90FF', '#FC521F', '#66BF3C', '#FF4785', '#FFAE00', '#1EA7FD'],
            ...n
          }) {
            return y.createElement(
              Mo,
              null,
              y.createElement(Lo, {
                colors: t,
                particleCount: 200,
                duration: 5e3,
                stageHeight: window.innerHeight,
                stageWidth: window.innerWidth,
                destroyAfterDone: !0,
                ...n,
              })
            )
          }))
        Wn = 'STORYBOOK_ADDON_ONBOARDING_CHANNEL'
        ;(jo = wr('function')),
          (Fo = e => e === null),
          (Un = e => Object.prototype.toString.call(e).slice(8, -1) === 'RegExp'),
          (Hn = e => !Bo(e) && !Fo(e) && (jo(e) || typeof e == 'object')),
          (Bo = wr('undefined'))
        ;(Go = [
          'Array',
          'ArrayBuffer',
          'AsyncFunction',
          'AsyncGenerator',
          'AsyncGeneratorFunction',
          'Date',
          'Error',
          'Function',
          'Generator',
          'GeneratorFunction',
          'HTMLElement',
          'Map',
          'Object',
          'Promise',
          'RegExp',
          'Set',
          'WeakMap',
          'WeakSet',
        ]),
          (Yo = ['bigint', 'boolean', 'null', 'number', 'string', 'symbol', 'undefined'])
        Vo = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue']
        I.array = Array.isArray
        I.arrayOf = (e, t) => (!I.array(e) && !I.function(t) ? !1 : e.every(n => t(n)))
        I.asyncGeneratorFunction = e => Rt(e) === 'AsyncGeneratorFunction'
        I.asyncFunction = de('AsyncFunction')
        I.bigint = Ye('bigint')
        I.boolean = e => e === !0 || e === !1
        I.date = de('Date')
        I.defined = e => !I.undefined(e)
        I.domElement = e =>
          I.object(e) &&
          !I.plainObject(e) &&
          e.nodeType === 1 &&
          I.string(e.nodeName) &&
          Vo.every(t => t in e)
        I.empty = e =>
          (I.string(e) && e.length === 0) ||
          (I.array(e) && e.length === 0) ||
          (I.object(e) && !I.map(e) && !I.set(e) && Object.keys(e).length === 0) ||
          (I.set(e) && e.size === 0) ||
          (I.map(e) && e.size === 0)
        I.error = de('Error')
        I.function = Ye('function')
        I.generator = e => I.iterable(e) && I.function(e.next) && I.function(e.throw)
        I.generatorFunction = de('GeneratorFunction')
        I.instanceOf = (e, t) => (!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype)
        I.iterable = e => !I.nullOrUndefined(e) && I.function(e[Symbol.iterator])
        I.map = de('Map')
        I.nan = e => Number.isNaN(e)
        I.null = e => e === null
        I.nullOrUndefined = e => I.null(e) || I.undefined(e)
        I.number = e => Ye('number')(e) && !I.nan(e)
        I.numericString = e => I.string(e) && e.length > 0 && !Number.isNaN(Number(e))
        I.object = e => !I.nullOrUndefined(e) && (I.function(e) || typeof e == 'object')
        I.oneOf = (e, t) => (I.array(e) ? e.indexOf(t) > -1 : !1)
        I.plainFunction = de('Function')
        I.plainObject = e => {
          if (Rt(e) !== 'Object') return !1
          let t = Object.getPrototypeOf(e)
          return t === null || t === Object.getPrototypeOf({})
        }
        I.primitive = e => I.null(e) || $o(typeof e)
        I.promise = de('Promise')
        I.propertyOf = (e, t, n) => {
          if (!I.object(e) || !t) return !1
          let r = e[t]
          return I.function(n) ? n(r) : I.defined(r)
        }
        I.regexp = de('RegExp')
        I.set = de('Set')
        I.string = Ye('string')
        I.symbol = Ye('symbol')
        I.undefined = Ye('undefined')
        I.weakMap = de('WeakMap')
        I.weakSet = de('WeakSet')
        C = I
        ;(Qo = je(go(), 1)),
          (Ir = je(bo(), 1)),
          (vt = je($t(), 1)),
          (Et = je($t(), 1)),
          (S = je(wo())),
          (it = typeof window < 'u' && typeof document < 'u' && typeof navigator < 'u'),
          (Zo = (function () {
            for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
              if (it && navigator.userAgent.indexOf(e[t]) >= 0) return 1
            return 0
          })())
        ;(ni = it && window.Promise), (ri = ni ? ei : ti)
        ;(Vn = it && !!(window.MSInputMethodContext && document.documentMode)),
          (Kn = it && /MSIE 10/.test(navigator.userAgent))
        ;(ai = function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }),
          (si = (function () {
            function e(t, n) {
              for (var r = 0; r < n.length; r++) {
                var o = n[r]
                ;(o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o)
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          })()),
          (Ge = function (e, t, n) {
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
            )
          }),
          (se =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            })
        Si = it && /Firefox/i.test(navigator.userAgent)
        ;(Wr = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ]),
          (Ft = Wr.slice(3))
        Bt = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }
        ;(Li = {
          shift: { order: 100, enabled: !0, fn: Ai },
          offset: { order: 200, enabled: !0, fn: Pi, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: xi,
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: { order: 400, enabled: !0, fn: Ri },
          arrow: { order: 500, enabled: !0, fn: wi, element: '[x-arrow]' },
          flip: {
            order: 600,
            enabled: !0,
            fn: Ii,
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: { order: 700, enabled: !1, fn: ki },
          hide: { order: 800, enabled: !0, fn: Ni },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: Oi,
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: { order: 900, enabled: !0, fn: bi, onLoad: vi, gpuAcceleration: void 0 },
        }),
          (Mi = {
            placement: 'bottom',
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: Li,
          }),
          (Ct = (function () {
            function e(t, n) {
              var r = this,
                o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
              ai(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(r.update)
                }),
                (this.update = ri(this.update.bind(this))),
                (this.options = se({}, e.Defaults, o)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(se({}, e.Defaults.modifiers, o.modifiers)).forEach(function (a) {
                  r.options.modifiers[a] = se(
                    {},
                    e.Defaults.modifiers[a] || {},
                    o.modifiers ? o.modifiers[a] : {}
                  )
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (a) {
                    return se({ name: a }, r.options.modifiers[a])
                  })
                  .sort(function (a, s) {
                    return a.order - s.order
                  })),
                this.modifiers.forEach(function (a) {
                  a.enabled &&
                    Rr(a.onLoad) &&
                    a.onLoad(r.reference, r.popper, r.options, a, r.state)
                }),
                this.update()
              var i = this.options.eventsEnabled
              i && this.enableEventListeners(), (this.state.eventsEnabled = i)
            }
            return (
              si(e, [
                {
                  key: 'update',
                  value: function () {
                    return pi.call(this)
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    return di.call(this)
                  },
                },
                {
                  key: 'enableEventListeners',
                  value: function () {
                    return hi.call(this)
                  },
                },
                {
                  key: 'disableEventListeners',
                  value: function () {
                    return yi.call(this)
                  },
                },
              ]),
              e
            )
          })())
        Ct.Utils = window.PopperUtils
        Ct.placements = Wr
        Ct.Defaults = Mi
        ;(Zn = Ct),
          (Gt = je($t())),
          (Di = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue']),
          (ji = [
            'Array',
            'ArrayBuffer',
            'AsyncFunction',
            'AsyncGenerator',
            'AsyncGeneratorFunction',
            'Date',
            'Error',
            'Function',
            'Generator',
            'GeneratorFunction',
            'HTMLElement',
            'Map',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'WeakMap',
            'WeakSet',
          ]),
          (Fi = ['bigint', 'boolean', 'null', 'number', 'string', 'symbol', 'undefined'])
        R.array = Array.isArray
        R.arrayOf = function (e, t) {
          return !R.array(e) && !R.function(t)
            ? !1
            : e.every(function (n) {
                return t(n)
              })
        }
        R.asyncGeneratorFunction = function (e) {
          return _t(e) === 'AsyncGeneratorFunction'
        }
        R.asyncFunction = fe('AsyncFunction')
        R.bigint = $e('bigint')
        R.boolean = function (e) {
          return e === !0 || e === !1
        }
        R.date = fe('Date')
        R.defined = function (e) {
          return !R.undefined(e)
        }
        R.domElement = function (e) {
          return (
            R.object(e) &&
            !R.plainObject(e) &&
            e.nodeType === 1 &&
            R.string(e.nodeName) &&
            Di.every(function (t) {
              return t in e
            })
          )
        }
        R.empty = function (e) {
          return (
            (R.string(e) && e.length === 0) ||
            (R.array(e) && e.length === 0) ||
            (R.object(e) && !R.map(e) && !R.set(e) && Object.keys(e).length === 0) ||
            (R.set(e) && e.size === 0) ||
            (R.map(e) && e.size === 0)
          )
        }
        R.error = fe('Error')
        R.function = $e('function')
        R.generator = function (e) {
          return R.iterable(e) && R.function(e.next) && R.function(e.throw)
        }
        R.generatorFunction = fe('GeneratorFunction')
        R.instanceOf = function (e, t) {
          return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype
        }
        R.iterable = function (e) {
          return !R.nullOrUndefined(e) && R.function(e[Symbol.iterator])
        }
        R.map = fe('Map')
        R.nan = function (e) {
          return Number.isNaN(e)
        }
        R.null = function (e) {
          return e === null
        }
        R.nullOrUndefined = function (e) {
          return R.null(e) || R.undefined(e)
        }
        R.number = function (e) {
          return $e('number')(e) && !R.nan(e)
        }
        R.numericString = function (e) {
          return R.string(e) && e.length > 0 && !Number.isNaN(Number(e))
        }
        R.object = function (e) {
          return !R.nullOrUndefined(e) && (R.function(e) || typeof e == 'object')
        }
        R.oneOf = function (e, t) {
          return R.array(e) ? e.indexOf(t) > -1 : !1
        }
        R.plainFunction = fe('Function')
        R.plainObject = function (e) {
          if (_t(e) !== 'Object') return !1
          var t = Object.getPrototypeOf(e)
          return t === null || t === Object.getPrototypeOf({})
        }
        R.primitive = function (e) {
          return R.null(e) || Wi(typeof e)
        }
        R.promise = fe('Promise')
        R.propertyOf = function (e, t, n) {
          if (!R.object(e) || !t) return !1
          var r = e[t]
          return R.function(n) ? n(r) : R.defined(r)
        }
        R.regexp = fe('RegExp')
        R.set = fe('Set')
        R.string = $e('string')
        R.symbol = $e('symbol')
        R.undefined = $e('undefined')
        R.weakMap = fe('WeakMap')
        R.weakSet = fe('WeakSet')
        A = R
        ;(Ui = Ur('function')),
          (Hi = function (e) {
            return e === null
          }),
          (er = function (e) {
            return Object.prototype.toString.call(e).slice(8, -1) === 'RegExp'
          }),
          (tr = function (e) {
            return !zi(e) && !Hi(e) && (Ui(e) || typeof e == 'object')
          }),
          (zi = Ur('undefined')),
          (Yt = function (e) {
            var t = typeof Symbol == 'function' && Symbol.iterator,
              n = t && e[t],
              r = 0
            if (n) return n.call(e)
            if (e && typeof e.length == 'number')
              return {
                next: function () {
                  return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
                },
              }
            throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
          })
        ;(na = { flip: { padding: 20 }, preventOverflow: { padding: 10 } }),
          (ra =
            'The typeValidator argument must be a function with the signature function(props, propName, componentName).'),
          (oa = 'The error message is optional, but must be a string if provided.')
        ;(U = {
          INIT: 'init',
          IDLE: 'idle',
          OPENING: 'opening',
          OPEN: 'open',
          CLOSING: 'closing',
          ERROR: 'error',
        }),
          (et = Me.createPortal !== void 0)
        Yr = (function (e) {
          ut(n, e)
          var t = pt(n)
          function n() {
            return lt(this, n), t.apply(this, arguments)
          }
          return (
            ct(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ve() && (this.node || this.appendNode(), et || this.renderPortal())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  ve() && (et || this.renderPortal())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  !ve() ||
                    !this.node ||
                    (et || Me.unmountComponentAtNode(this.node),
                    this.node &&
                      this.node.parentNode === document.body &&
                      (document.body.removeChild(this.node), (this.node = void 0)))
                },
              },
              {
                key: 'appendNode',
                value: function () {
                  var r = this.props,
                    o = r.id,
                    i = r.zIndex
                  this.node ||
                    ((this.node = document.createElement('div')),
                    o && (this.node.id = o),
                    i && (this.node.style.zIndex = i),
                    document.body.appendChild(this.node))
                },
              },
              {
                key: 'renderPortal',
                value: function () {
                  if (!ve()) return null
                  var r = this.props,
                    o = r.children,
                    i = r.setRef
                  if ((this.node || this.appendNode(), et)) return Me.createPortal(o, this.node)
                  var a = Me.unstable_renderSubtreeIntoContainer(
                    this,
                    o.length > 1 ? y.createElement('div', null, o) : o[0],
                    this.node
                  )
                  return i(a), null
                },
              },
              {
                key: 'renderReact16',
                value: function () {
                  var r = this.props,
                    o = r.hasChildren,
                    i = r.placement,
                    a = r.target
                  return o ? this.renderPortal() : a || i === 'center' ? this.renderPortal() : null
                },
              },
              {
                key: 'render',
                value: function () {
                  return et ? this.renderReact16() : null
                },
              },
            ]),
            n
          )
        })(y.Component)
        re(Yr, 'propTypes', {
          children: S.default.oneOfType([S.default.element, S.default.array]),
          hasChildren: S.default.bool,
          id: S.default.oneOfType([S.default.string, S.default.number]),
          placement: S.default.string,
          setRef: S.default.func.isRequired,
          target: S.default.oneOfType([S.default.object, S.default.string]),
          zIndex: S.default.number,
        })
        qr = (function (e) {
          ut(n, e)
          var t = pt(n)
          function n() {
            return lt(this, n), t.apply(this, arguments)
          }
          return (
            ct(n, [
              {
                key: 'parentStyle',
                get: function () {
                  var r = this.props,
                    o = r.placement,
                    i = r.styles,
                    a = i.arrow.length,
                    s = { pointerEvents: 'none', position: 'absolute', width: '100%' }
                  return (
                    o.startsWith('top')
                      ? ((s.bottom = 0), (s.left = 0), (s.right = 0), (s.height = a))
                      : o.startsWith('bottom')
                        ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = a))
                        : o.startsWith('left')
                          ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                          : o.startsWith('right') && ((s.left = 0), (s.top = 0)),
                    s
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.placement,
                    i = r.setArrowRef,
                    a = r.styles,
                    s = a.arrow,
                    c = s.color,
                    l = s.display,
                    p = s.length,
                    u = s.margin,
                    d = s.position,
                    f = s.spread,
                    h = { display: l, position: d },
                    b,
                    N = f,
                    v = p
                  return (
                    o.startsWith('top')
                      ? ((b = '0,0 '
                          .concat(N / 2, ',')
                          .concat(v, ' ')
                          .concat(N, ',0')),
                        (h.bottom = 0),
                        (h.marginLeft = u),
                        (h.marginRight = u))
                      : o.startsWith('bottom')
                        ? ((b = ''
                            .concat(N, ',')
                            .concat(v, ' ')
                            .concat(N / 2, ',0 0,')
                            .concat(v)),
                          (h.top = 0),
                          (h.marginLeft = u),
                          (h.marginRight = u))
                        : o.startsWith('left')
                          ? ((v = f),
                            (N = p),
                            (b = '0,0 '
                              .concat(N, ',')
                              .concat(v / 2, ' 0,')
                              .concat(v)),
                            (h.right = 0),
                            (h.marginTop = u),
                            (h.marginBottom = u))
                          : o.startsWith('right') &&
                            ((v = f),
                            (N = p),
                            (b = ''
                              .concat(N, ',')
                              .concat(v, ' ')
                              .concat(N, ',0 0,')
                              .concat(v / 2)),
                            (h.left = 0),
                            (h.marginTop = u),
                            (h.marginBottom = u)),
                    y.createElement(
                      'div',
                      { className: '__floater__arrow', style: this.parentStyle },
                      y.createElement(
                        'span',
                        { ref: i, style: h },
                        y.createElement(
                          'svg',
                          {
                            width: N,
                            height: v,
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                          y.createElement('polygon', { points: b, fill: c })
                        )
                      )
                    )
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
        re(qr, 'propTypes', {
          placement: S.default.string.isRequired,
          setArrowRef: S.default.func.isRequired,
          styles: S.default.object.isRequired,
        })
        da = ['color', 'height', 'width']
        $r.propTypes = {
          handleClick: S.default.func.isRequired,
          styles: S.default.object.isRequired,
        }
        Vr.propTypes = {
          content: S.default.node.isRequired,
          footer: S.default.node,
          handleClick: S.default.func.isRequired,
          open: S.default.bool,
          positionWrapper: S.default.bool.isRequired,
          showCloseButton: S.default.bool.isRequired,
          styles: S.default.object.isRequired,
          title: S.default.node,
        }
        Kr = (function (e) {
          ut(n, e)
          var t = pt(n)
          function n() {
            return lt(this, n), t.apply(this, arguments)
          }
          return (
            ct(n, [
              {
                key: 'style',
                get: function () {
                  var r = this.props,
                    o = r.disableAnimation,
                    i = r.component,
                    a = r.placement,
                    s = r.hideArrow,
                    c = r.status,
                    l = r.styles,
                    p = l.arrow.length,
                    u = l.floater,
                    d = l.floaterCentered,
                    f = l.floaterClosing,
                    h = l.floaterOpening,
                    b = l.floaterWithAnimation,
                    N = l.floaterWithComponent,
                    v = {}
                  return (
                    s ||
                      (a.startsWith('top')
                        ? (v.padding = '0 0 '.concat(p, 'px'))
                        : a.startsWith('bottom')
                          ? (v.padding = ''.concat(p, 'px 0 0'))
                          : a.startsWith('left')
                            ? (v.padding = '0 '.concat(p, 'px 0 0'))
                            : a.startsWith('right') && (v.padding = '0 0 0 '.concat(p, 'px'))),
                    [U.OPENING, U.OPEN].indexOf(c) !== -1 && (v = J(J({}, v), h)),
                    c === U.CLOSING && (v = J(J({}, v), f)),
                    c === U.OPEN && !o && (v = J(J({}, v), b)),
                    a === 'center' && (v = J(J({}, v), d)),
                    i && (v = J(J({}, v), N)),
                    J(J({}, u), v)
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.component,
                    i = r.handleClick,
                    a = r.hideArrow,
                    s = r.setFloaterRef,
                    c = r.status,
                    l = {},
                    p = ['__floater']
                  return (
                    o
                      ? y.isValidElement(o)
                        ? (l.content = y.cloneElement(o, { closeFn: i }))
                        : (l.content = o({ closeFn: i }))
                      : (l.content = y.createElement(Vr, this.props)),
                    c === U.OPEN && p.push('__floater__open'),
                    a || (l.arrow = y.createElement(qr, this.props)),
                    y.createElement(
                      'div',
                      { ref: s, className: p.join(' '), style: this.style },
                      y.createElement('div', { className: '__floater__body' }, l.content, l.arrow)
                    )
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
        re(Kr, 'propTypes', {
          component: S.default.oneOfType([S.default.func, S.default.element]),
          content: S.default.node,
          disableAnimation: S.default.bool.isRequired,
          footer: S.default.node,
          handleClick: S.default.func.isRequired,
          hideArrow: S.default.bool.isRequired,
          open: S.default.bool,
          placement: S.default.string.isRequired,
          positionWrapper: S.default.bool.isRequired,
          setArrowRef: S.default.func.isRequired,
          setFloaterRef: S.default.func.isRequired,
          showCloseButton: S.default.bool,
          status: S.default.string.isRequired,
          styles: S.default.object.isRequired,
          title: S.default.node,
        })
        Jr = (function (e) {
          ut(n, e)
          var t = pt(n)
          function n() {
            return lt(this, n), t.apply(this, arguments)
          }
          return (
            ct(n, [
              {
                key: 'render',
                value: function () {
                  var r = this.props,
                    o = r.children,
                    i = r.handleClick,
                    a = r.handleMouseEnter,
                    s = r.handleMouseLeave,
                    c = r.setChildRef,
                    l = r.setWrapperRef,
                    p = r.style,
                    u = r.styles,
                    d
                  if (o)
                    if (y.Children.count(o) === 1)
                      if (!y.isValidElement(o)) d = y.createElement('span', null, o)
                      else {
                        var f = A.function(o.type) ? 'innerRef' : 'ref'
                        d = y.cloneElement(y.Children.only(o), re({}, f, c))
                      }
                    else d = o
                  return d
                    ? y.createElement(
                        'span',
                        {
                          ref: l,
                          style: J(J({}, u), p),
                          onClick: i,
                          onMouseEnter: a,
                          onMouseLeave: s,
                        },
                        d
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
        re(Jr, 'propTypes', {
          children: S.default.node,
          handleClick: S.default.func.isRequired,
          handleMouseEnter: S.default.func.isRequired,
          handleMouseLeave: S.default.func.isRequired,
          setChildRef: S.default.func.isRequired,
          setWrapperRef: S.default.func.isRequired,
          style: S.default.object,
          styles: S.default.object.isRequired,
        })
        fa = { zIndex: 100 }
        ;(ma = ['arrow', 'flip', 'offset']),
          (ya = ['position', 'top', 'right', 'bottom', 'left']),
          (tn = (function (e) {
            ut(n, e)
            var t = pt(n)
            function n(r) {
              var o
              return (
                lt(this, n),
                (o = t.call(this, r)),
                re(we(o), 'setArrowRef', function (i) {
                  o.arrowRef = i
                }),
                re(we(o), 'setChildRef', function (i) {
                  o.childRef = i
                }),
                re(we(o), 'setFloaterRef', function (i) {
                  o.floaterRef = i
                }),
                re(we(o), 'setWrapperRef', function (i) {
                  o.wrapperRef = i
                }),
                re(we(o), 'handleTransitionEnd', function () {
                  var i = o.state.status,
                    a = o.props.callback
                  o.wrapperPopper && o.wrapperPopper.instance.update(),
                    o.setState({ status: i === U.OPENING ? U.OPEN : U.IDLE }, function () {
                      var s = o.state.status
                      a(s === U.OPEN ? 'open' : 'close', o.props)
                    })
                }),
                re(we(o), 'handleClick', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.open
                  if (!A.boolean(s)) {
                    var c = o.state,
                      l = c.positionWrapper,
                      p = c.status
                    ;(o.event === 'click' || (o.event === 'hover' && l)) &&
                      (St({
                        title: 'click',
                        data: [{ event: a, status: p === U.OPEN ? 'closing' : 'opening' }],
                        debug: o.debug,
                      }),
                      o.toggle())
                  }
                }),
                re(we(o), 'handleMouseEnter', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.open
                  if (!(A.boolean(s) || Wt())) {
                    var c = o.state.status
                    o.event === 'hover' &&
                      c === U.IDLE &&
                      (St({
                        title: 'mouseEnter',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      clearTimeout(o.eventDelayTimeout),
                      o.toggle())
                  }
                }),
                re(we(o), 'handleMouseLeave', function () {
                  var i = o.props,
                    a = i.event,
                    s = i.eventDelay,
                    c = i.open
                  if (!(A.boolean(c) || Wt())) {
                    var l = o.state,
                      p = l.status,
                      u = l.positionWrapper
                    o.event === 'hover' &&
                      (St({
                        title: 'mouseLeave',
                        data: [{ key: 'originalEvent', value: a }],
                        debug: o.debug,
                      }),
                      s
                        ? [U.OPENING, U.OPEN].indexOf(p) !== -1 &&
                          !u &&
                          !o.eventDelayTimeout &&
                          (o.eventDelayTimeout = setTimeout(function () {
                            delete o.eventDelayTimeout, o.toggle()
                          }, s * 1e3))
                        : o.toggle(U.IDLE))
                  }
                }),
                (o.state = {
                  currentPlacement: r.placement,
                  needsUpdate: !1,
                  positionWrapper: r.wrapperOptions.position && !!r.target,
                  status: U.INIT,
                  statusWrapper: U.INIT,
                }),
                (o._isMounted = !1),
                (o.hasMounted = !1),
                ve() &&
                  window.addEventListener('load', function () {
                    o.popper && o.popper.instance.update(),
                      o.wrapperPopper && o.wrapperPopper.instance.update()
                  }),
                o
              )
            }
            return (
              ct(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (ve()) {
                      var r = this.state.positionWrapper,
                        o = this.props,
                        i = o.children,
                        a = o.open,
                        s = o.target
                      ;(this._isMounted = !0),
                        St({
                          title: 'init',
                          data: {
                            hasChildren: !!i,
                            hasTarget: !!s,
                            isControlled: A.boolean(a),
                            positionWrapper: r,
                            target: this.target,
                            floater: this.floaterRef,
                          },
                          debug: this.debug,
                        }),
                        this.hasMounted || (this.initPopper(), (this.hasMounted = !0)),
                        !i && s && A.boolean(a)
                    }
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (r, o) {
                    if (ve()) {
                      var i = this.props,
                        a = i.autoOpen,
                        s = i.open,
                        c = i.target,
                        l = i.wrapperOptions,
                        p = Xi(o, this.state),
                        u = p.changedFrom,
                        d = p.changed
                      if (r.open !== s) {
                        var f
                        A.boolean(s) && (f = s ? U.OPENING : U.CLOSING), this.toggle(f)
                      }
                      ;(r.wrapperOptions.position !== l.position || r.target !== c) &&
                        this.changeWrapperPosition(this.props),
                        d('status', U.IDLE) && s
                          ? this.toggle(U.OPEN)
                          : u('status', U.INIT, U.IDLE) && a && this.toggle(U.OPEN),
                        this.popper && d('status', U.OPENING) && this.popper.instance.update(),
                        this.floaterRef &&
                          (d('status', U.OPENING) || d('status', U.CLOSING)) &&
                          pa(this.floaterRef, 'transitionend', this.handleTransitionEnd),
                        d('needsUpdate', !0) && this.rebuildPopper()
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    ve() &&
                      ((this._isMounted = !1),
                      this.popper && this.popper.instance.destroy(),
                      this.wrapperPopper && this.wrapperPopper.instance.destroy())
                  },
                },
                {
                  key: 'initPopper',
                  value: function () {
                    var r = this,
                      o =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.target,
                      i = this.state.positionWrapper,
                      a = this.props,
                      s = a.disableFlip,
                      c = a.getPopper,
                      l = a.hideArrow,
                      p = a.offset,
                      u = a.placement,
                      d = a.wrapperOptions,
                      f =
                        u === 'top' || u === 'bottom'
                          ? 'flip'
                          : ['right', 'bottom-end', 'top-end', 'left', 'top-start', 'bottom-start']
                    if (u === 'center') this.setState({ status: U.IDLE })
                    else if (o && this.floaterRef) {
                      var h = this.options,
                        b = h.arrow,
                        N = h.flip,
                        v = h.offset,
                        T = zr(h, ma)
                      new Zn(o, this.floaterRef, {
                        placement: u,
                        modifiers: J(
                          {
                            arrow: J({ enabled: !l, element: this.arrowRef }, b),
                            flip: J({ enabled: !s, behavior: f }, N),
                            offset: J({ offset: '0, '.concat(p, 'px') }, v),
                          },
                          T
                        ),
                        onCreate: function (g) {
                          var O
                          if (
                            ((r.popper = g),
                            !((O = r.floaterRef) !== null && O !== void 0 && O.isConnected))
                          ) {
                            r.setState({ needsUpdate: !0 })
                            return
                          }
                          c(g, 'floater'),
                            r._isMounted &&
                              r.setState({ currentPlacement: g.placement, status: U.IDLE }),
                            u !== g.placement &&
                              setTimeout(function () {
                                g.instance.update()
                              }, 1)
                        },
                        onUpdate: function (g) {
                          r.popper = g
                          var O = r.state.currentPlacement
                          r._isMounted &&
                            g.placement !== O &&
                            r.setState({ currentPlacement: g.placement })
                        },
                      })
                    }
                    if (i) {
                      var m = A.undefined(d.offset) ? 0 : d.offset
                      new Zn(this.target, this.wrapperRef, {
                        placement: d.placement || u,
                        modifiers: {
                          arrow: { enabled: !1 },
                          offset: { offset: '0, '.concat(m, 'px') },
                          flip: { enabled: !1 },
                        },
                        onCreate: function (g) {
                          ;(r.wrapperPopper = g),
                            r._isMounted && r.setState({ statusWrapper: U.IDLE }),
                            c(g, 'wrapper'),
                            u !== g.placement &&
                              setTimeout(function () {
                                g.instance.update()
                              }, 1)
                        },
                      })
                    }
                  },
                },
                {
                  key: 'rebuildPopper',
                  value: function () {
                    var r = this
                    this.floaterRefInterval = setInterval(function () {
                      var o
                      ;(o = r.floaterRef) !== null &&
                        o !== void 0 &&
                        o.isConnected &&
                        (clearInterval(r.floaterRefInterval),
                        r.setState({ needsUpdate: !1 }),
                        r.initPopper())
                    }, 50)
                  },
                },
                {
                  key: 'changeWrapperPosition',
                  value: function (r) {
                    var o = r.target,
                      i = r.wrapperOptions
                    this.setState({ positionWrapper: i.position && !!o })
                  },
                },
                {
                  key: 'toggle',
                  value: function (r) {
                    var o = this.state.status,
                      i = o === U.OPEN ? U.CLOSING : U.OPENING
                    A.undefined(r) || (i = r), this.setState({ status: i })
                  },
                },
                {
                  key: 'debug',
                  get: function () {
                    var r = this.props.debug
                    return (
                      r || (ve() && 'ReactFloaterDebug' in window && !!window.ReactFloaterDebug)
                    )
                  },
                },
                {
                  key: 'event',
                  get: function () {
                    var r = this.props,
                      o = r.disableHoverToClick,
                      i = r.event
                    return i === 'hover' && Wt() && !o ? 'click' : i
                  },
                },
                {
                  key: 'options',
                  get: function () {
                    var r = this.props.options
                    return (0, Gt.default)(na, r || {})
                  },
                },
                {
                  key: 'styles',
                  get: function () {
                    var r = this,
                      o = this.state,
                      i = o.status,
                      a = o.positionWrapper,
                      s = o.statusWrapper,
                      c = this.props.styles,
                      l = (0, Gt.default)(ha(c), c)
                    if (a) {
                      var p
                      ;[U.IDLE].indexOf(i) === -1 || [U.IDLE].indexOf(s) === -1
                        ? (p = l.wrapperPosition)
                        : (p = this.wrapperPopper.styles),
                        (l.wrapper = J(J({}, l.wrapper), p))
                    }
                    if (this.target) {
                      var u = window.getComputedStyle(this.target)
                      this.wrapperStyles
                        ? (l.wrapper = J(J({}, l.wrapper), this.wrapperStyles))
                        : ['relative', 'static'].indexOf(u.position) === -1 &&
                          ((this.wrapperStyles = {}),
                          a ||
                            (ya.forEach(function (d) {
                              r.wrapperStyles[d] = u[d]
                            }),
                            (l.wrapper = J(J({}, l.wrapper), this.wrapperStyles)),
                            (this.target.style.position = 'relative'),
                            (this.target.style.top = 'auto'),
                            (this.target.style.right = 'auto'),
                            (this.target.style.bottom = 'auto'),
                            (this.target.style.left = 'auto')))
                    }
                    return l
                  },
                },
                {
                  key: 'target',
                  get: function () {
                    if (!ve()) return null
                    var r = this.props.target
                    return r
                      ? A.domElement(r)
                        ? r
                        : document.querySelector(r)
                      : this.childRef || this.wrapperRef
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var r = this.state,
                      o = r.currentPlacement,
                      i = r.positionWrapper,
                      a = r.status,
                      s = this.props,
                      c = s.children,
                      l = s.component,
                      p = s.content,
                      u = s.disableAnimation,
                      d = s.footer,
                      f = s.hideArrow,
                      h = s.id,
                      b = s.open,
                      N = s.showCloseButton,
                      v = s.style,
                      T = s.target,
                      m = s.title,
                      g = y.createElement(
                        Jr,
                        {
                          handleClick: this.handleClick,
                          handleMouseEnter: this.handleMouseEnter,
                          handleMouseLeave: this.handleMouseLeave,
                          setChildRef: this.setChildRef,
                          setWrapperRef: this.setWrapperRef,
                          style: v,
                          styles: this.styles.wrapper,
                        },
                        c
                      ),
                      O = {}
                    return (
                      i ? (O.wrapperInPortal = g) : (O.wrapperAsChildren = g),
                      y.createElement(
                        'span',
                        null,
                        y.createElement(
                          Yr,
                          {
                            hasChildren: !!c,
                            id: h,
                            placement: o,
                            setRef: this.setFloaterRef,
                            target: T,
                            zIndex: this.styles.options.zIndex,
                          },
                          y.createElement(Kr, {
                            component: l,
                            content: p,
                            disableAnimation: u,
                            footer: d,
                            handleClick: this.handleClick,
                            hideArrow: f || o === 'center',
                            open: b,
                            placement: o,
                            positionWrapper: i,
                            setArrowRef: this.setArrowRef,
                            setFloaterRef: this.setFloaterRef,
                            showCloseButton: N,
                            status: a,
                            styles: this.styles,
                            title: m,
                          }),
                          O.wrapperInPortal
                        ),
                        O.wrapperAsChildren
                      )
                    )
                  },
                },
              ]),
              n
            )
          })(y.Component))
        re(tn, 'propTypes', {
          autoOpen: S.default.bool,
          callback: S.default.func,
          children: S.default.node,
          component: cr(S.default.oneOfType([S.default.func, S.default.element]), function (e) {
            return !e.content
          }),
          content: cr(S.default.node, function (e) {
            return !e.component
          }),
          debug: S.default.bool,
          disableAnimation: S.default.bool,
          disableFlip: S.default.bool,
          disableHoverToClick: S.default.bool,
          event: S.default.oneOf(['hover', 'click']),
          eventDelay: S.default.number,
          footer: S.default.node,
          getPopper: S.default.func,
          hideArrow: S.default.bool,
          id: S.default.oneOfType([S.default.string, S.default.number]),
          offset: S.default.number,
          open: S.default.bool,
          options: S.default.object,
          placement: S.default.oneOf([
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end',
            'auto',
            'center',
          ]),
          showCloseButton: S.default.bool,
          style: S.default.object,
          styles: S.default.object,
          target: S.default.oneOfType([S.default.object, S.default.string]),
          title: S.default.node,
          wrapperOptions: S.default.shape({
            offset: S.default.number,
            placement: S.default.oneOf([
              'top',
              'top-start',
              'top-end',
              'bottom',
              'bottom-start',
              'bottom-end',
              'left',
              'left-start',
              'left-end',
              'right',
              'right-start',
              'right-end',
              'auto',
            ]),
            position: S.default.bool,
          }),
        })
        re(tn, 'defaultProps', {
          autoOpen: !1,
          callback: ur,
          debug: !1,
          disableAnimation: !1,
          disableFlip: !1,
          disableHoverToClick: !1,
          event: 'click',
          eventDelay: 0.4,
          getPopper: ur,
          hideArrow: !1,
          offset: 15,
          placement: 'bottom',
          showCloseButton: !1,
          styles: {},
          target: null,
          wrapperOptions: { position: !1 },
        })
        ;(ga = je(To(), 1)),
          (ba = Object.defineProperty),
          (va = (e, t, n) =>
            t in e
              ? ba(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
              : (e[t] = n)),
          (P = (e, t, n) => (va(e, typeof t != 'symbol' ? t + '' : t, n), n)),
          ($ = {
            INIT: 'init',
            START: 'start',
            STOP: 'stop',
            RESET: 'reset',
            PREV: 'prev',
            NEXT: 'next',
            GO: 'go',
            CLOSE: 'close',
            SKIP: 'skip',
            UPDATE: 'update',
          }),
          (pe = {
            TOUR_START: 'tour:start',
            STEP_BEFORE: 'step:before',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            STEP_AFTER: 'step:after',
            TOUR_END: 'tour:end',
            TOUR_STATUS: 'tour:status',
            TARGET_NOT_FOUND: 'error:target_not_found',
            ERROR: 'error',
          }),
          (k = {
            INIT: 'init',
            READY: 'ready',
            BEACON: 'beacon',
            TOOLTIP: 'tooltip',
            COMPLETE: 'complete',
            ERROR: 'error',
          }),
          (D = {
            IDLE: 'idle',
            READY: 'ready',
            WAITING: 'waiting',
            RUNNING: 'running',
            PAUSED: 'paused',
            SKIPPED: 'skipped',
            FINISHED: 'finished',
            ERROR: 'error',
          })
        tt = mt !== void 0
        ;(Na = {
          options: { preventOverflow: { boundariesElement: 'scrollParent' } },
          wrapperOptions: { offset: -18, position: !0 },
        }),
          (eo = {
            back: 'Back',
            close: 'Close',
            last: 'Last',
            next: 'Next',
            open: 'Open the dialog',
            skip: 'Skip',
          }),
          (ka = {
            event: 'click',
            placement: 'bottom',
            offset: 10,
            disableBeacon: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrollParentFix: !1,
            disableScrolling: !1,
            hideBackButton: !1,
            hideCloseButton: !1,
            hideFooter: !1,
            isFixed: !1,
            locale: eo,
            showProgress: !1,
            showSkipButton: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
          }),
          (La = {
            continuous: !1,
            debug: !1,
            disableCloseOnEsc: !1,
            disableOverlay: !1,
            disableOverlayClose: !1,
            disableScrolling: !1,
            disableScrollParentFix: !1,
            getHelpers: void 0,
            hideBackButton: !1,
            run: !0,
            scrollOffset: 20,
            scrollDuration: 300,
            scrollToFirstStep: !1,
            showSkipButton: !1,
            showProgress: !1,
            spotlightClicks: !1,
            spotlightPadding: 10,
            steps: [],
          }),
          (Ma = {
            arrowColor: '#fff',
            backgroundColor: '#fff',
            beaconSize: 36,
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            primaryColor: '#f04',
            spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            textColor: '#333',
            width: 380,
            zIndex: 100,
          }),
          (nt = {
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: 0,
            color: '#555',
            cursor: 'pointer',
            fontSize: 16,
            lineHeight: 1,
            padding: 8,
            WebkitAppearance: 'none',
          }),
          (fr = { borderRadius: 4, position: 'absolute' })
        ;(no = {
          action: 'init',
          controlled: !1,
          index: 0,
          lifecycle: k.INIT,
          origin: null,
          size: 0,
          status: D.IDLE,
        }),
          (mr = Pa(Zr(no, 'controlled', 'size'))),
          (Fa = class {
            constructor(e) {
              P(this, 'beaconPopper'),
                P(this, 'tooltipPopper'),
                P(this, 'data', new Map()),
                P(this, 'listener'),
                P(this, 'store', new Map()),
                P(this, 'addListener', o => {
                  this.listener = o
                }),
                P(this, 'setSteps', o => {
                  let { size: i, status: a } = this.getState(),
                    s = { size: o.length, status: a }
                  this.data.set('steps', o),
                    a === D.WAITING && !i && o.length && (s.status = D.RUNNING),
                    this.setState(s)
                }),
                P(this, 'getPopper', o =>
                  o === 'beacon' ? this.beaconPopper : this.tooltipPopper
                ),
                P(this, 'setPopper', (o, i) => {
                  o === 'beacon' ? (this.beaconPopper = i) : (this.tooltipPopper = i)
                }),
                P(this, 'cleanupPoppers', () => {
                  ;(this.beaconPopper = null), (this.tooltipPopper = null)
                }),
                P(this, 'close', (o = null) => {
                  let { index: i, status: a } = this.getState()
                  a === D.RUNNING &&
                    this.setState({
                      ...this.getNextState({ action: $.CLOSE, index: i + 1, origin: o }),
                    })
                }),
                P(this, 'go', o => {
                  let { controlled: i, status: a } = this.getState()
                  if (i || a !== D.RUNNING) return
                  let s = this.getSteps()[o]
                  this.setState({
                    ...this.getNextState({ action: $.GO, index: o }),
                    status: s ? a : D.FINISHED,
                  })
                }),
                P(this, 'info', () => this.getState()),
                P(this, 'next', () => {
                  let { index: o, status: i } = this.getState()
                  i === D.RUNNING &&
                    this.setState(this.getNextState({ action: $.NEXT, index: o + 1 }))
                }),
                P(this, 'open', () => {
                  let { status: o } = this.getState()
                  o === D.RUNNING &&
                    this.setState({
                      ...this.getNextState({ action: $.UPDATE, lifecycle: k.TOOLTIP }),
                    })
                }),
                P(this, 'prev', () => {
                  let { index: o, status: i } = this.getState()
                  i === D.RUNNING &&
                    this.setState({ ...this.getNextState({ action: $.PREV, index: o - 1 }) })
                }),
                P(this, 'reset', (o = !1) => {
                  let { controlled: i } = this.getState()
                  i ||
                    this.setState({
                      ...this.getNextState({ action: $.RESET, index: 0 }),
                      status: o ? D.RUNNING : D.READY,
                    })
                }),
                P(this, 'skip', () => {
                  let { status: o } = this.getState()
                  o === D.RUNNING &&
                    this.setState({ action: $.SKIP, lifecycle: k.INIT, status: D.SKIPPED })
                }),
                P(this, 'start', o => {
                  let { index: i, size: a } = this.getState()
                  this.setState({
                    ...this.getNextState({ action: $.START, index: C.number(o) ? o : i }, !0),
                    status: a ? D.RUNNING : D.WAITING,
                  })
                }),
                P(this, 'stop', (o = !1) => {
                  let { index: i, status: a } = this.getState()
                  ;[D.FINISHED, D.SKIPPED].includes(a) ||
                    this.setState({
                      ...this.getNextState({ action: $.STOP, index: i + (o ? 1 : 0) }),
                      status: D.PAUSED,
                    })
                }),
                P(this, 'update', o => {
                  var i, a
                  if (!Ca(o, mr))
                    throw new Error(`State is not valid. Valid keys: ${mr.join(', ')}`)
                  this.setState({
                    ...this.getNextState(
                      {
                        ...this.getState(),
                        ...o,
                        action: (i = o.action) != null ? i : $.UPDATE,
                        origin: (a = o.origin) != null ? a : null,
                      },
                      !0
                    ),
                  })
                })
              let { continuous: t = !1, stepIndex: n, steps: r = [] } = e ?? {}
              this.setState(
                {
                  action: $.INIT,
                  controlled: C.number(n),
                  continuous: t,
                  index: C.number(n) ? n : 0,
                  lifecycle: k.INIT,
                  origin: null,
                  status: r.length ? D.READY : D.IDLE,
                },
                !0
              ),
                (this.beaconPopper = null),
                (this.tooltipPopper = null),
                (this.listener = null),
                this.setSteps(r)
            }
            getState() {
              return this.store.size
                ? {
                    action: this.store.get('action') || '',
                    controlled: this.store.get('controlled') || !1,
                    index: parseInt(this.store.get('index'), 10),
                    lifecycle: this.store.get('lifecycle') || '',
                    origin: this.store.get('origin') || null,
                    size: this.store.get('size') || 0,
                    status: this.store.get('status') || '',
                  }
                : { ...no }
            }
            getNextState(e, t = !1) {
              var n, r, o, i, a
              let { action: s, controlled: c, index: l, size: p, status: u } = this.getState(),
                d = C.number(e.index) ? e.index : l,
                f = c && !t ? l : Math.min(Math.max(d, 0), p)
              return {
                action: (n = e.action) != null ? n : s,
                controlled: c,
                index: f,
                lifecycle: (r = e.lifecycle) != null ? r : k.INIT,
                origin: (o = e.origin) != null ? o : null,
                size: (i = e.size) != null ? i : p,
                status: f === p ? D.FINISHED : (a = e.status) != null ? a : u,
              }
            }
            getSteps() {
              let e = this.data.get('steps')
              return Array.isArray(e) ? e : []
            }
            hasUpdatedState(e) {
              let t = JSON.stringify(e),
                n = JSON.stringify(this.getState())
              return t !== n
            }
            setState(e, t = !1) {
              let n = this.getState(),
                {
                  action: r,
                  index: o,
                  lifecycle: i,
                  origin: a = null,
                  size: s,
                  status: c,
                } = { ...n, ...e }
              this.store.set('action', r),
                this.store.set('index', o),
                this.store.set('lifecycle', i),
                this.store.set('origin', a),
                this.store.set('size', s),
                this.store.set('status', c),
                t &&
                  (this.store.set('controlled', e.controlled),
                  this.store.set('continuous', e.continuous)),
                this.listener && this.hasUpdatedState(n) && this.listener(this.getState())
            }
            getHelpers() {
              return {
                close: this.close,
                go: this.go,
                info: this.info,
                next: this.next,
                open: this.open,
                prev: this.prev,
                reset: this.reset,
                skip: this.skip,
              }
            }
          })
        ;(Ua = Wa),
          (Ha = class extends Le {
            constructor() {
              super(...arguments),
                P(this, 'isActive', !1),
                P(this, 'resizeTimeout'),
                P(this, 'scrollTimeout'),
                P(this, 'scrollParent'),
                P(this, 'state', { isScrolling: !1, mouseOverSpotlight: !1, showSpotlight: !0 }),
                P(this, 'hideSpotlight', () => {
                  let { continuous: e, disableOverlay: t, lifecycle: n } = this.props,
                    r = [k.BEACON, k.COMPLETE, k.ERROR]
                  return t || (e ? r.includes(n) : n !== k.TOOLTIP)
                }),
                P(this, 'handleMouseMove', e => {
                  let { mouseOverSpotlight: t } = this.state,
                    { height: n, left: r, position: o, top: i, width: a } = this.spotlightStyles,
                    s = o === 'fixed' ? e.clientY : e.pageY,
                    c = o === 'fixed' ? e.clientX : e.pageX,
                    l = s >= i && s <= i + n,
                    p = c >= r && c <= r + a && l
                  p !== t && this.updateState({ mouseOverSpotlight: p })
                }),
                P(this, 'handleScroll', () => {
                  let { target: e } = this.props,
                    t = Pe(e)
                  if (this.scrollParent !== document) {
                    let { isScrolling: n } = this.state
                    n || this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                      clearTimeout(this.scrollTimeout),
                      (this.scrollTimeout = window.setTimeout(() => {
                        this.updateState({ isScrolling: !1, showSpotlight: !0 })
                      }, 50))
                  } else ot(t, 'sticky') && this.updateState({})
                }),
                P(this, 'handleResize', () => {
                  clearTimeout(this.resizeTimeout),
                    (this.resizeTimeout = window.setTimeout(() => {
                      this.isActive && this.forceUpdate()
                    }, 100))
                })
            }
            componentDidMount() {
              let {
                  debug: e,
                  disableScrolling: t,
                  disableScrollParentFix: n = !1,
                  target: r,
                } = this.props,
                o = Pe(r)
              ;(this.scrollParent = Pt(o ?? document.body, n, !0)),
                (this.isActive = !0),
                !t &&
                  dt(o, !0) &&
                  Ae({
                    title: 'step has a custom scroll parent and can cause trouble with scrolling',
                    data: [{ key: 'parent', value: this.scrollParent }],
                    debug: e,
                  }),
                window.addEventListener('resize', this.handleResize)
            }
            componentDidUpdate(e) {
              var t
              let { lifecycle: n, spotlightClicks: r } = this.props,
                { changed: o } = Ot(e, this.props)
              o('lifecycle', k.TOOLTIP) &&
                ((t = this.scrollParent) == null ||
                  t.addEventListener('scroll', this.handleScroll, { passive: !0 }),
                setTimeout(() => {
                  let { isScrolling: i } = this.state
                  i || this.updateState({ showSpotlight: !0 })
                }, 100)),
                (o('spotlightClicks') || o('disableOverlay') || o('lifecycle')) &&
                  (r && n === k.TOOLTIP
                    ? window.addEventListener('mousemove', this.handleMouseMove, !1)
                    : n !== k.TOOLTIP &&
                      window.removeEventListener('mousemove', this.handleMouseMove))
            }
            componentWillUnmount() {
              var e
              ;(this.isActive = !1),
                window.removeEventListener('mousemove', this.handleMouseMove),
                window.removeEventListener('resize', this.handleResize),
                clearTimeout(this.resizeTimeout),
                clearTimeout(this.scrollTimeout),
                (e = this.scrollParent) == null ||
                  e.removeEventListener('scroll', this.handleScroll)
            }
            get overlayStyles() {
              let { mouseOverSpotlight: e } = this.state,
                { disableOverlayClose: t, placement: n, styles: r } = this.props,
                o = r.overlay
              return (
                dr() && (o = n === 'center' ? r.overlayLegacyCenter : r.overlayLegacy),
                {
                  cursor: t ? 'default' : 'pointer',
                  height: Ea(),
                  pointerEvents: e ? 'none' : 'auto',
                  ...o,
                }
              )
            }
            get spotlightStyles() {
              var e, t, n
              let { showSpotlight: r } = this.state,
                {
                  disableScrollParentFix: o = !1,
                  spotlightClicks: i,
                  spotlightPadding: a = 0,
                  styles: s,
                  target: c,
                } = this.props,
                l = Pe(c),
                p = Xr(l),
                u = ot(l),
                d = Ta(l, a, o)
              return {
                ...(dr() ? s.spotlightLegacy : s.spotlight),
                height: Math.round(((e = p?.height) != null ? e : 0) + a * 2),
                left: Math.round(((t = p?.left) != null ? t : 0) - a),
                opacity: r ? 1 : 0,
                pointerEvents: i ? 'none' : 'auto',
                position: u ? 'fixed' : 'absolute',
                top: d,
                transition: 'opacity 0.2s',
                width: Math.round(((n = p?.width) != null ? n : 0) + a * 2),
              }
            }
            updateState(e) {
              this.isActive && this.setState(t => ({ ...t, ...e }))
            }
            render() {
              let { showSpotlight: e } = this.state,
                { onClickOverlay: t, placement: n } = this.props,
                { hideSpotlight: r, overlayStyles: o, spotlightStyles: i } = this
              if (r()) return null
              let a = n !== 'center' && e && q(Ua, { styles: i })
              if (Qr() === 'safari') {
                let { mixBlendMode: s, zIndex: c, ...l } = o
                ;(a = q('div', { style: { ...l } }, a)), delete o.backgroundColor
              }
              return q(
                'div',
                {
                  className: 'react-joyride__overlay',
                  'data-test-id': 'overlay',
                  onClick: t,
                  role: 'presentation',
                  style: o,
                },
                a
              )
            }
          }),
          (za = class extends Le {
            constructor() {
              super(...arguments), P(this, 'node', null)
            }
            componentDidMount() {
              let { id: e } = this.props
              Ce() &&
                ((this.node = document.createElement('div')),
                (this.node.id = e),
                document.body.appendChild(this.node),
                tt || this.renderReact15())
            }
            componentDidUpdate() {
              Ce() && (tt || this.renderReact15())
            }
            componentWillUnmount() {
              !Ce() ||
                !this.node ||
                (tt || ln(this.node),
                this.node.parentNode === document.body &&
                  (document.body.removeChild(this.node), (this.node = null)))
            }
            renderReact15() {
              if (!Ce()) return
              let { children: e } = this.props
              this.node && cn(this, e, this.node)
            }
            renderReact16() {
              if (!Ce() || !tt) return null
              let { children: e } = this.props
              return this.node ? mt(e, this.node) : null
            }
            render() {
              return tt ? this.renderReact16() : null
            }
          }),
          (Ga = class {
            constructor(e, t) {
              if (
                (P(this, 'element'),
                P(this, 'options'),
                P(this, 'canBeTabbed', n => {
                  let { tabIndex: r } = n
                  return r === null || r < 0 ? !1 : this.canHaveFocus(n)
                }),
                P(this, 'canHaveFocus', n => {
                  let r = /input|select|textarea|button|object/,
                    o = n.nodeName.toLowerCase()
                  return (
                    ((r.test(o) && !n.getAttribute('disabled')) ||
                      (o === 'a' && !!n.getAttribute('href'))) &&
                    this.isVisible(n)
                  )
                }),
                P(this, 'findValidTabElements', () =>
                  [].slice.call(this.element.querySelectorAll('*'), 0).filter(this.canBeTabbed)
                ),
                P(this, 'handleKeyDown', n => {
                  let { code: r = 'Tab' } = this.options
                  n.code === r && this.interceptTab(n)
                }),
                P(this, 'interceptTab', n => {
                  n.preventDefault()
                  let r = this.findValidTabElements(),
                    { shiftKey: o } = n
                  if (!r.length) return
                  let i = document.activeElement ? r.indexOf(document.activeElement) : 0
                  i === -1 || (!o && i + 1 === r.length)
                    ? (i = 0)
                    : o && i === 0
                      ? (i = r.length - 1)
                      : (i += o ? -1 : 1),
                    r[i].focus()
                }),
                P(this, 'isHidden', n => {
                  let r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
                    o = window.getComputedStyle(n)
                  return r && !n.innerHTML
                    ? !0
                    : (r && o.getPropertyValue('overflow') !== 'visible') ||
                        o.getPropertyValue('display') === 'none'
                }),
                P(this, 'isVisible', n => {
                  let r = n
                  for (; r; )
                    if (r instanceof HTMLElement) {
                      if (r === document.body) break
                      if (this.isHidden(r)) return !1
                      r = r.parentNode
                    }
                  return !0
                }),
                P(this, 'removeScope', () => {
                  window.removeEventListener('keydown', this.handleKeyDown)
                }),
                P(this, 'checkFocus', n => {
                  document.activeElement !== n &&
                    (n.focus(), window.requestAnimationFrame(() => this.checkFocus(n)))
                }),
                P(this, 'setFocus', () => {
                  let { selector: n } = this.options
                  if (!n) return
                  let r = this.element.querySelector(n)
                  r && window.requestAnimationFrame(() => this.checkFocus(r))
                }),
                !(e instanceof HTMLElement))
              )
                throw new TypeError('Invalid parameter: element must be an HTMLElement')
              ;(this.element = e),
                (this.options = t),
                window.addEventListener('keydown', this.handleKeyDown, !1),
                this.setFocus()
            }
          }),
          (Ya = class extends Le {
            constructor(e) {
              if (
                (super(e),
                P(this, 'beacon', null),
                P(this, 'setBeaconRef', r => {
                  this.beacon = r
                }),
                e.beaconComponent)
              )
                return
              let t = document.head || document.getElementsByTagName('head')[0],
                n = document.createElement('style')
              ;(n.id = 'joyride-beacon-animation'),
                e.nonce && n.setAttribute('nonce', e.nonce),
                n.appendChild(
                  document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `)
                ),
                t.appendChild(n)
            }
            componentDidMount() {
              let { shouldFocus: e } = this.props
              C.domElement(this.beacon) || console.warn('beacon is not a valid DOM element'),
                setTimeout(() => {
                  C.domElement(this.beacon) && e && this.beacon.focus()
                }, 0)
            }
            componentWillUnmount() {
              let e = document.getElementById('joyride-beacon-animation')
              e?.parentNode && e.parentNode.removeChild(e)
            }
            render() {
              let {
                  beaconComponent: e,
                  continuous: t,
                  index: n,
                  isLastStep: r,
                  locale: o,
                  onClickOrHover: i,
                  size: a,
                  step: s,
                  styles: c,
                } = this.props,
                l = C.string(o.open) ? o.open : (0, ga.default)(o.open),
                p = {
                  'aria-label': l,
                  onClick: i,
                  onMouseEnter: i,
                  ref: this.setBeaconRef,
                  title: l,
                },
                u
              return (
                e
                  ? (u = q(e, { continuous: t, index: n, isLastStep: r, size: a, step: s, ...p }))
                  : (u = q(
                      'button',
                      {
                        key: 'JoyrideBeacon',
                        className: 'react-joyride__beacon',
                        'data-test-id': 'button-beacon',
                        style: c.beacon,
                        type: 'button',
                        ...p,
                      },
                      q('span', { style: c.beaconInner }),
                      q('span', { style: c.beaconOuter })
                    )),
                u
              )
            }
          })
        $a = qa
        ;(Ka = Va),
          (Ja = class extends Le {
            constructor() {
              super(...arguments),
                P(this, 'handleClickBack', e => {
                  e.preventDefault()
                  let { helpers: t } = this.props
                  t.prev()
                }),
                P(this, 'handleClickClose', e => {
                  e.preventDefault()
                  let { helpers: t } = this.props
                  t.close('button_close')
                }),
                P(this, 'handleClickPrimary', e => {
                  e.preventDefault()
                  let { continuous: t, helpers: n } = this.props
                  if (!t) {
                    n.close('button_primary')
                    return
                  }
                  n.next()
                }),
                P(this, 'handleClickSkip', e => {
                  e.preventDefault()
                  let { helpers: t } = this.props
                  t.skip()
                }),
                P(this, 'getElementsProps', () => {
                  let { continuous: e, isLastStep: t, setTooltipRef: n, step: r } = this.props,
                    o = _e(r.locale.back),
                    i = _e(r.locale.close),
                    a = _e(r.locale.last),
                    s = _e(r.locale.next),
                    c = _e(r.locale.skip),
                    l = e ? s : i
                  return (
                    t && (l = a),
                    {
                      backProps: {
                        'aria-label': o,
                        'data-action': 'back',
                        onClick: this.handleClickBack,
                        role: 'button',
                        title: o,
                      },
                      closeProps: {
                        'aria-label': i,
                        'data-action': 'close',
                        onClick: this.handleClickClose,
                        role: 'button',
                        title: i,
                      },
                      primaryProps: {
                        'aria-label': l,
                        'data-action': 'primary',
                        onClick: this.handleClickPrimary,
                        role: 'button',
                        title: l,
                      },
                      skipProps: {
                        'aria-label': c,
                        'data-action': 'skip',
                        onClick: this.handleClickSkip,
                        role: 'button',
                        title: c,
                      },
                      tooltipProps: { 'aria-modal': !0, ref: n, role: 'alertdialog' },
                    }
                  )
                })
            }
            render() {
              let {
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  setTooltipRef: r,
                  size: o,
                  step: i,
                } = this.props,
                { beaconComponent: a, tooltipComponent: s, ...c } = i,
                l
              if (s) {
                let p = {
                  ...this.getElementsProps(),
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  size: o,
                  step: c,
                  setTooltipRef: r,
                }
                l = q(s, { ...p })
              } else
                l = q(Ka, {
                  ...this.getElementsProps(),
                  continuous: e,
                  index: t,
                  isLastStep: n,
                  size: o,
                  step: i,
                })
              return l
            }
          }),
          (Xa = class extends Le {
            constructor() {
              super(...arguments),
                P(this, 'scope', null),
                P(this, 'tooltip', null),
                P(this, 'handleClickHoverBeacon', e => {
                  let { step: t, store: n } = this.props
                  ;(e.type === 'mouseenter' && t.event !== 'hover') ||
                    n.update({ lifecycle: k.TOOLTIP })
                }),
                P(this, 'setTooltipRef', e => {
                  this.tooltip = e
                }),
                P(this, 'setPopper', (e, t) => {
                  var n
                  let { action: r, lifecycle: o, step: i, store: a } = this.props
                  t === 'wrapper' ? a.setPopper('beacon', e) : a.setPopper('tooltip', e),
                    a.getPopper('beacon') &&
                      a.getPopper('tooltip') &&
                      o === k.INIT &&
                      a.update({ action: r, lifecycle: k.READY }),
                    (n = i.floaterProps) != null && n.getPopper && i.floaterProps.getPopper(e, t)
                }),
                P(this, 'renderTooltip', e => {
                  let { continuous: t, helpers: n, index: r, size: o, step: i } = this.props
                  return q(Ja, {
                    continuous: t,
                    helpers: n,
                    index: r,
                    isLastStep: r + 1 === o,
                    setTooltipRef: this.setTooltipRef,
                    size: o,
                    step: i,
                    ...e,
                  })
                })
            }
            componentDidMount() {
              let { debug: e, index: t } = this.props
              Ae({ title: `step:${t}`, data: [{ key: 'props', value: this.props }], debug: e })
            }
            componentDidUpdate(e) {
              var t
              let {
                  action: n,
                  callback: r,
                  continuous: o,
                  controlled: i,
                  debug: a,
                  helpers: s,
                  index: c,
                  lifecycle: l,
                  status: p,
                  step: u,
                  store: d,
                } = this.props,
                { changed: f, changedFrom: h } = Ot(e, this.props),
                b = s.info(),
                N = o && n !== $.CLOSE && (c > 0 || n === $.PREV),
                v = f('action') || f('index') || f('lifecycle') || f('status'),
                T = h('lifecycle', [k.TOOLTIP, k.INIT], k.INIT),
                m = f('action', [$.NEXT, $.PREV, $.SKIP, $.CLOSE]),
                g = i && c === e.index
              if (
                (m &&
                  (T || g) &&
                  r({
                    ...b,
                    index: e.index,
                    lifecycle: k.COMPLETE,
                    step: e.step,
                    type: pe.STEP_AFTER,
                  }),
                u.placement === 'center' &&
                  p === D.RUNNING &&
                  f('index') &&
                  n !== $.START &&
                  l === k.INIT &&
                  d.update({ lifecycle: k.READY }),
                v)
              ) {
                let O = Pe(u.target),
                  B = !!O
                B && wa(O)
                  ? (h('status', D.READY, D.RUNNING) || h('lifecycle', k.INIT, k.READY)) &&
                    r({ ...b, step: u, type: pe.STEP_BEFORE })
                  : (console.warn(B ? 'Target not visible' : 'Target not mounted', u),
                    r({ ...b, type: pe.TARGET_NOT_FOUND, step: u }),
                    i || d.update({ index: c + (n === $.PREV ? -1 : 1) }))
              }
              h('lifecycle', k.INIT, k.READY) &&
                d.update({ lifecycle: pr(u) || N ? k.TOOLTIP : k.BEACON }),
                f('index') &&
                  Ae({ title: `step:${l}`, data: [{ key: 'props', value: this.props }], debug: a }),
                f('lifecycle', k.BEACON) && r({ ...b, step: u, type: pe.BEACON }),
                f('lifecycle', k.TOOLTIP) &&
                  (r({ ...b, step: u, type: pe.TOOLTIP }),
                  this.tooltip &&
                    ((this.scope = new Ga(this.tooltip, { selector: '[data-action=primary]' })),
                    this.scope.setFocus())),
                h('lifecycle', [k.TOOLTIP, k.INIT], k.INIT) &&
                  ((t = this.scope) == null || t.removeScope(), d.cleanupPoppers())
            }
            componentWillUnmount() {
              var e
              ;(e = this.scope) == null || e.removeScope()
            }
            get open() {
              let { lifecycle: e, step: t } = this.props
              return pr(t) || e === k.TOOLTIP
            }
            render() {
              let {
                  continuous: e,
                  debug: t,
                  index: n,
                  nonce: r,
                  shouldScroll: o,
                  size: i,
                  step: a,
                } = this.props,
                s = Pe(a.target)
              return !to(a) || !C.domElement(s)
                ? null
                : q(
                    'div',
                    { key: `JoyrideStep-${n}`, className: 'react-joyride__step' },
                    q(
                      tn,
                      {
                        ...a.floaterProps,
                        component: this.renderTooltip,
                        debug: t,
                        getPopper: this.setPopper,
                        id: `react-joyride-step-${n}`,
                        open: this.open,
                        placement: a.placement,
                        target: a.target,
                      },
                      q(Ya, {
                        beaconComponent: a.beaconComponent,
                        continuous: e,
                        index: n,
                        isLastStep: n + 1 === i,
                        locale: a.locale,
                        nonce: r,
                        onClickOrHover: this.handleClickHoverBeacon,
                        shouldFocus: o,
                        size: i,
                        step: a,
                        styles: a.styles,
                      })
                    )
                  )
            }
          }),
          (ro = class extends Le {
            constructor(e) {
              super(e),
                P(this, 'helpers'),
                P(this, 'store'),
                P(this, 'callback', a => {
                  let { callback: s } = this.props
                  C.function(s) && s(a)
                }),
                P(this, 'handleKeyboard', a => {
                  let { index: s, lifecycle: c } = this.state,
                    { steps: l } = this.props,
                    p = l[s]
                  c === k.TOOLTIP &&
                    a.code === 'Escape' &&
                    p &&
                    !p.disableCloseOnEsc &&
                    this.store.close('keyboard')
                }),
                P(this, 'handleClickOverlay', () => {
                  let { index: a } = this.state,
                    { steps: s } = this.props
                  Ue(this.props, s[a]).disableOverlayClose || this.helpers.close('overlay')
                }),
                P(this, 'syncState', a => {
                  this.setState(a)
                })
              let { debug: t, getHelpers: n, run: r, stepIndex: o } = e
              ;(this.store = Ba({ ...e, controlled: r && C.number(o) })),
                (this.helpers = this.store.getHelpers())
              let { addListener: i } = this.store
              Ae({
                title: 'init',
                data: [
                  { key: 'props', value: this.props },
                  { key: 'state', value: this.state },
                ],
                debug: t,
              }),
                i(this.syncState),
                n && n(this.helpers),
                (this.state = this.store.getState())
            }
            componentDidMount() {
              if (!Ce()) return
              let { debug: e, disableCloseOnEsc: t, run: n, steps: r } = this.props,
                { start: o } = this.store
              hr(r, e) && n && o(),
                t || document.body.addEventListener('keydown', this.handleKeyboard, { passive: !0 })
            }
            componentDidUpdate(e, t) {
              if (!Ce()) return
              let { action: n, controlled: r, index: o, lifecycle: i, status: a } = this.state,
                { debug: s, run: c, stepIndex: l, steps: p } = this.props,
                { stepIndex: u, steps: d } = e,
                { reset: f, setSteps: h, start: b, stop: N, update: v } = this.store,
                { changed: T } = Ot(e, this.props),
                { changed: m, changedFrom: g } = Ot(t, this.state),
                O = Ue(this.props, p[o]),
                B = !oe(d, p),
                _ = C.number(l) && T('stepIndex'),
                V = Pe(O.target)
              if (
                (B && (hr(p, s) ? h(p) : console.warn('Steps are not valid', p)),
                T('run') && (c ? b(l) : N()),
                _)
              ) {
                let te = C.number(u) && u < l ? $.NEXT : $.PREV
                n === $.STOP && (te = $.START),
                  [D.FINISHED, D.SKIPPED].includes(a) ||
                    v({ action: n === $.CLOSE ? $.CLOSE : te, index: l, lifecycle: k.INIT })
              }
              !r &&
                a === D.RUNNING &&
                o === 0 &&
                !V &&
                (this.store.update({ index: o + 1 }),
                this.callback({ ...this.state, type: pe.TARGET_NOT_FOUND, step: O }))
              let H = { ...this.state, index: o, step: O }
              if (m('action', [$.NEXT, $.PREV, $.SKIP, $.CLOSE]) && m('status', D.PAUSED)) {
                let te = Ue(this.props, p[t.index])
                this.callback({
                  ...H,
                  index: t.index,
                  lifecycle: k.COMPLETE,
                  step: te,
                  type: pe.STEP_AFTER,
                })
              }
              if (m('status', [D.FINISHED, D.SKIPPED])) {
                let te = Ue(this.props, p[t.index])
                r ||
                  this.callback({
                    ...H,
                    index: t.index,
                    lifecycle: k.COMPLETE,
                    step: te,
                    type: pe.STEP_AFTER,
                  }),
                  this.callback({ ...H, type: pe.TOUR_END, step: te, index: t.index }),
                  f()
              } else
                g('status', [D.IDLE, D.READY], D.RUNNING)
                  ? this.callback({ ...H, type: pe.TOUR_START })
                  : (m('status') || m('action', $.RESET)) &&
                    this.callback({ ...H, type: pe.TOUR_STATUS })
              this.scrollToStep(t),
                O.placement === 'center' &&
                  a === D.RUNNING &&
                  i === k.INIT &&
                  this.store.update({ lifecycle: k.READY })
            }
            componentWillUnmount() {
              let { disableCloseOnEsc: e } = this.props
              e || document.body.removeEventListener('keydown', this.handleKeyboard)
            }
            scrollToStep(e) {
              let { index: t, lifecycle: n, status: r } = this.state,
                {
                  debug: o,
                  disableScrollParentFix: i = !1,
                  scrollDuration: a,
                  scrollOffset: s = 20,
                  scrollToFirstStep: c = !1,
                  steps: l,
                } = this.props,
                p = Ue(this.props, l[t]),
                u = Pe(p.target),
                d = Aa({
                  isFirstStep: t === 0,
                  lifecycle: n,
                  previousLifecycle: e.lifecycle,
                  scrollToFirstStep: c,
                  step: p,
                  target: u,
                })
              if (r === D.RUNNING && d) {
                let f = dt(u, i),
                  h = Pt(u, i),
                  b = Math.floor(Ia(u, s, i)) || 0
                Ae({
                  title: 'scrollToStep',
                  data: [
                    { key: 'index', value: t },
                    { key: 'lifecycle', value: n },
                    { key: 'status', value: r },
                  ],
                  debug: o,
                })
                let N = this.store.getPopper('beacon'),
                  v = this.store.getPopper('tooltip')
                if (n === k.BEACON && N) {
                  let { offsets: T, placement: m } = N
                  !['bottom'].includes(m) && !f && (b = Math.floor(T.popper.top - s))
                } else if (n === k.TOOLTIP && v) {
                  let { flipped: T, offsets: m, placement: g } = v
                  ;['top', 'right', 'left'].includes(g) && !T && !f
                    ? (b = Math.floor(m.popper.top - s))
                    : (b -= p.spotlightPadding)
                }
                ;(b = b >= 0 ? b : 0),
                  r === D.RUNNING &&
                    Ra(b, { element: h, duration: a }).then(() => {
                      setTimeout(() => {
                        var T
                        ;(T = this.store.getPopper('tooltip')) == null || T.instance.update()
                      }, 10)
                    })
              }
            }
            render() {
              if (!Ce()) return null
              let { index: e, lifecycle: t, status: n } = this.state,
                {
                  continuous: r = !1,
                  debug: o = !1,
                  nonce: i,
                  scrollToFirstStep: a = !1,
                  steps: s,
                } = this.props,
                c = n === D.RUNNING,
                l = {}
              if (c && s[e]) {
                let p = Ue(this.props, s[e])
                ;(l.step = q(Xa, {
                  ...this.state,
                  callback: this.callback,
                  continuous: r,
                  debug: o,
                  helpers: this.helpers,
                  nonce: i,
                  shouldScroll: !p.disableScrolling && (e !== 0 || a),
                  step: p,
                  store: this.store,
                })),
                  (l.overlay = q(
                    za,
                    { id: 'react-joyride-portal' },
                    q(Ha, {
                      ...p,
                      continuous: r,
                      debug: o,
                      lifecycle: t,
                      onClickOverlay: this.handleClickOverlay,
                    })
                  ))
              }
              return q('div', { className: 'react-joyride' }, l.step, l.overlay)
            }
          })
        P(ro, 'defaultProps', La)
        ;(Qa = ro),
          (Za = ee.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.secondary : t === 'secondary' ? e.color.lighter : t === 'outline' ? 'transparent' : t === 'white' ? e.color.lightest : e.color.secondary)};
  color: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.lightest : t === 'secondary' || t === 'outline' ? e.darkest : t === 'white' ? e.color.secondary : e.color.lightest)};
  box-shadow: ${({ variant: e }) => (e === 'secondary' || e === 'outline' ? '#D9E8F2 0 0 0 1px inset' : 'none')};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: e }) => e.typography.fonts.base};
  transition: background-color, box-shadow, color, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme: e, variant: t }) => (t === 'primary' ? '#0b94eb' : t === 'secondary' ? '#eef4f9' : t === 'outline' ? 'transparent' : t === 'white' ? e.color.lightest : '#0b94eb')};
    color: ${({ theme: e, variant: t }) => (t === 'primary' ? e.color.lightest : t === 'secondary' || t === 'outline' ? e.darkest : t === 'white' ? e.color.darkest : e.color.lightest)};
  }

  &:focus {
    box-shadow: ${({ variant: e }) => (e === 'primary' ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.2)' : e === 'secondary' || e === 'outline' ? 'inset 0 0 0 1px #0b94eb' : e === 'white' ? 'none' : 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)')};
  }
`),
          (es = on(function ({ children: e, onClick: t, variant: n = 'primary', ...r }, o) {
            return y.createElement(Za, { ref: o, onClick: t, variant: n, ...r }, e)
          })),
          (ts = ee.div`
  padding: 15px;
  border-radius: 5px;
`),
          (ns = ee.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
          (rs = ee.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin: -5px -5px 5px 0;
`),
          (os = ee.div`
  line-height: 18px;
  font-weight: 700;
  font-size: 14px;
  margin: 5px 5px 5px 0;
`),
          (is = ee.p`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  text-wrap: balance;
  margin: 0;
  margin-top: 5px;
`),
          (as = ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`),
          (ss = ee.span`
  font-size: 13px;
`),
          (ls = ({
            index: e,
            size: t,
            step: n,
            closeProps: r,
            primaryProps: o,
            tooltipProps: i,
          }) => (
            ae(() => {
              let a = document.createElement('style')
              return (
                (a.id = '#sb-onboarding-arrow-style'),
                (a.innerHTML = `
      .__floater__arrow { container-type: size; }
      .__floater__arrow span { background: ${gt.secondary}; }
      .__floater__arrow span::before, .__floater__arrow span::after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        background: ${gt.secondary};
        box-shadow: 0 0 0 2px ${gt.secondary};
        border-radius: 3px;
        flex: 0 0 2px;
      }
      @container (min-height: 1px) {
        .__floater__arrow span { flex-direction: column; }
      }
    `),
                document.head.appendChild(a),
                () => {
                  let s = document.querySelector('#sb-onboarding-arrow-style')
                  s && s.remove()
                }
              )
            }, []),
            y.createElement(
              ts,
              { ...i, style: n.styles?.tooltip },
              y.createElement(
                ns,
                null,
                y.createElement(
                  rs,
                  null,
                  n.title && y.createElement(os, null, n.title),
                  y.createElement(
                    hn,
                    { ...r, onClick: r.onClick, variant: 'solid' },
                    y.createElement(Sn, null)
                  )
                ),
                y.createElement(is, null, n.content)
              ),
              y.createElement(
                as,
                { id: 'buttonNext' },
                y.createElement(ss, null, e + 1, ' of ', t),
                !n.hideNextButton &&
                  y.createElement(
                    es,
                    { ...o, onClick: n.onNextButtonClick || o.onClick, variant: 'white' },
                    e + 1 === t ? 'Done' : 'Next'
                  )
              )
            )
          ))
        ;(us = Xe({ from: { opacity: 0 }, to: { opacity: 1 } })),
          (oo = Xe({
            from: { transform: 'translate(0, 20px)', opacity: 0 },
            to: { transform: 'translate(0, 0)', opacity: 1 },
          })),
          (ps = Xe({
            from: { opacity: 0, transform: 'scale(0.8)' },
            to: { opacity: 1, transform: 'scale(1)' },
          })),
          (ds = Xe({
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          })),
          (fs = ee.div(({ visible: e }) => ({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            opacity: e ? 1 : 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1e3,
            transition: 'opacity 1s 0.5s',
          }))),
          (hs = ee.div({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            animation: `${us} 2s`,
            background: `
    radial-gradient(90% 90%, #ff4785 0%, #db5698 30%, #1ea7fdcc 100%),
    radial-gradient(circle, #ff4785 0%, transparent 80%),
    radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 20%, transparent 40%),
    radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 18%, transparent 30%)`,
            '&::before': {
              opacity: 0.5,
              background: `
      radial-gradient(circle at 30% 40%, #fc521f99 0%, #fc521f66 10%, transparent 20%),
      radial-gradient(circle at 75% 75%, #fc521f99 0%, #fc521f77 8%, transparent 20%)`,
              content: '""',
              position: 'absolute',
              top: '-50vw',
              left: '-50vh',
              transform: 'translate(-50%, -50%)',
              width: 'calc(100vw + 100vh)',
              height: 'calc(100vw + 100vh)',
              animation: `${ds} 12s linear infinite`,
            },
          })),
          (ms = ee.div(({ visible: e }) => ({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            width: '90vw',
            minWidth: 290,
            maxWidth: 410,
            opacity: e ? 1 : 0,
            transition: 'opacity 0.5s',
            h1: { fontSize: 45, fontWeight: 'bold', animation: `${oo} 1.5s 1s backwards` },
          }))),
          (ys = ee.div({
            display: 'flex',
            marginTop: 40,
            div: {
              display: 'flex',
              flexBasis: '33.33%',
              flexDirection: 'column',
              alignItems: 'center',
              animation: `${oo} 1s backwards`,
              '&:nth-child(1)': { animationDelay: '2s' },
              '&:nth-child(2)': { animationDelay: '2.5s' },
              '&:nth-child(3)': { animationDelay: '3s' },
            },
            svg: { marginBottom: 10 },
          })),
          (gs = ee.button({
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            width: 48,
            height: 48,
            padding: 0,
            borderRadius: '50%',
            border: 0,
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            transition: 'background 0.2s',
            animation: `${ps} 1.5s 4s backwards`,
            '&:hover, &:focus': { background: 'rgba(255, 255, 255, 0.4)' },
          })),
          (bs = ee(En)({ width: 30, color: 'white' })),
          (yr = ee.svg(({ progress: e }) => ({
            position: 'absolute',
            top: -1,
            left: -1,
            width: '50px!important',
            height: '50px!important',
            transform: 'rotate(-90deg)',
            color: 'white',
            circle: {
              r: '24',
              cx: '25',
              cy: '25',
              fill: 'transparent',
              stroke: e ? 'currentColor' : 'transparent',
              strokeWidth: '1',
              strokeLinecap: 'round',
              strokeDasharray: Math.PI * 48,
            },
          }))),
          (vs = ({ onDismiss: e, duration: t = 6e3 }) => {
            let [n, r] = ue(-4e5 / t),
              [o, i] = ue(!0),
              a = n >= 100,
              s = Je(() => {
                i(!1)
                let c = setTimeout(e, 1500)
                return () => clearTimeout(c)
              }, [e])
            return (
              ae(() => {
                if (!t) return
                let c = 1e3 / 50,
                  l = 100 / (t / c),
                  p = setInterval(() => r(u => u + l), c)
                return () => clearInterval(p)
              }, [t]),
              ae(() => {
                a && s()
              }, [a, s]),
              y.createElement(
                fs,
                { visible: o },
                y.createElement(hs, null),
                y.createElement(
                  ms,
                  { visible: o },
                  y.createElement('h1', null, 'Meet your new frontend workshop'),
                  y.createElement(
                    ys,
                    null,
                    y.createElement(
                      'div',
                      null,
                      y.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '33', height: '32' },
                        y.createElement('path', {
                          d: 'M4.06 0H32.5v28.44h-3.56V32H.5V3.56h3.56V0Zm21.33 7.11H4.06v21.33h21.33V7.11Z',
                          fill: 'currentColor',
                        })
                      ),
                      'Development'
                    ),
                    y.createElement(
                      'div',
                      null,
                      y.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32' },
                        y.createElement('path', {
                          d: 'M15.95 32c-1.85 0-3.1-1.55-3.1-3.54 0-1.1.45-2.78 1.35-5.03.9-2.3 1.35-4.51 1.35-6.81a22.21 22.21 0 0 0-5.1 3.67c-2.5 2.47-4.95 4.9-7.55 4.9-1.6 0-2.9-1.1-2.9-2.43 0-1.46 1.35-2.91 4.3-3.62 1.45-.36 3.1-.75 4.95-1.06 1.8-.31 3.8-1.02 5.9-2.08a23.77 23.77 0 0 0-6.1-2.12C5.3 13.18 2.3 12.6 1 11.28.35 10.6 0 9.9 0 9.14 0 7.82 1.2 6.8 2.95 6.8c2.65 0 5.75 3.1 7.95 5.3 1.1 1.1 2.65 2.21 4.65 3.27v-.57c0-1.77-.15-3.23-.55-4.3-.8-2.11-2.05-5.43-2.05-6.97 0-2.04 1.3-3.54 3.1-3.54 1.75 0 3.1 1.41 3.1 3.54 0 1.06-.45 2.78-1.35 5.12-.9 2.35-1.35 4.6-1.35 6.72 2.85-1.59 2.5-1.41 4.95-3.5 2.35-2.29 4-3.7 4.9-4.23.95-.58 1.9-.84 2.9-.84 1.6 0 2.8.97 2.8 2.34 0 1.5-1.25 2.78-4.15 3.62-1.4.4-3.05.75-4.9 1.1-1.9.36-3.9 1.07-6.1 2.13a23.3 23.3 0 0 0 5.95 2.08c3.65.7 6.75 1.32 8.15 2.6.7.67 1.05 1.33 1.05 2.08 0 1.33-1.2 2.43-2.95 2.43-2.95 0-6.75-4.15-8.2-5.61-.7-.7-2.2-1.72-4.4-2.96v.57c0 1.9.45 4.03 1.3 6.32.85 2.3 1.3 3.94 1.3 4.95 0 2.08-1.35 3.54-3.1 3.54Z',
                          fill: 'currentColor',
                        })
                      ),
                      'Testing'
                    ),
                    y.createElement(
                      'div',
                      null,
                      y.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '33', height: '32' },
                        y.createElement('path', {
                          d: 'M.5 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Zm16 12.44A12.44 12.44 0 0 1 4.3 13.53a8 8 0 1 0 9.73-9.73 12.44 12.44 0 1 1 2.47 24.64ZM12.06 16a4.44 4.44 0 1 1 0-8.89 4.44 4.44 0 0 1 0 8.89Z',
                          fill: 'currentColor',
                          fillRule: 'evenodd',
                        })
                      ),
                      'Documentation'
                    )
                  ),
                  y.createElement(
                    gs,
                    { onClick: s },
                    y.createElement(bs, null),
                    y.createElement(
                      yr,
                      { xmlns: 'http://www.w3.org/2000/svg' },
                      y.createElement('circle', null)
                    ),
                    y.createElement(
                      yr,
                      { xmlns: 'http://www.w3.org/2000/svg', progress: !0 },
                      y.createElement('circle', {
                        strokeDashoffset: Math.PI * 48 * (1 - Math.max(0, Math.min(n, 100)) / 100),
                      })
                    )
                  )
                )
              )
            )
          }),
          (Es = ee.span(({ theme: e }) => ({
            display: 'inline-flex',
            borderRadius: 3,
            padding: '0 5px',
            marginBottom: -2,
            opacity: 0.8,
            fontFamily: e.typography.fonts.mono,
            fontSize: 11,
            border: e.base === 'dark' ? e.color.darkest : e.color.lightest,
            color: e.base === 'dark' ? e.color.lightest : e.color.darkest,
            backgroundColor: e.base === 'dark' ? 'black' : e.color.light,
            boxSizing: 'border-box',
            lineHeight: '17px',
          }))),
          (Ss = ee.div(({ theme: e }) => ({
            background: e.background.content,
            borderRadius: 3,
            marginTop: 15,
            padding: 10,
            fontSize: e.typography.size.s1,
            '.linenumber': { opacity: 0.5 },
          }))),
          (Os = Lt())
      })
    X()
    Q()
    Z()
    X()
    Q()
    Z()
    ht()
    yt()
    Nt()
    X()
    Q()
    Z()
    var Lc = __STORYBOOK_API__,
      {
        ActiveTabs: Mc,
        Consumer: Dc,
        ManagerContext: jc,
        Provider: Fc,
        RequestResponseError: Bc,
        addons: fn,
        combineParameters: Wc,
        controlOrMetaKey: Uc,
        controlOrMetaSymbol: Hc,
        eventMatchesShortcut: zc,
        eventToShortcut: Gc,
        experimental_MockUniversalStore: Yc,
        experimental_UniversalStore: qc,
        experimental_requestResponse: $c,
        experimental_useUniversalStore: Vc,
        isMacLike: Kc,
        isShortcutTaken: Jc,
        keyToSymbol: Xc,
        merge: Qc,
        mockChannel: Zc,
        optionOrAltSymbol: eu,
        shortcutMatchesShortcut: tu,
        shortcutToHumanString: nu,
        types: ru,
        useAddonState: ou,
        useArgTypes: iu,
        useArgs: au,
        useChannel: su,
        useGlobalTypes: lu,
        useGlobals: cu,
        useParameter: uu,
        useSharedState: pu,
        useStoryPrepared: du,
        useStorybookApi: fu,
        useStorybookState: hu,
      } = __STORYBOOK_API__
    var Ts = sn(() => Promise.resolve().then(() => (ao(), io)))
    fn.register('@storybook/addon-onboarding', async e => {
      let t = e.getUrlState(),
        n = t.path === '/onboarding' || t.queryParams.onboarding === 'true'
      e.once(pn, () => {
        if (
          !(
            e.getData('example-button--primary') ||
            document.getElementById('example-button--primary')
          )
        ) {
          console.warn(
            '[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling'
          )
          return
        }
        if (!n || window.innerWidth < 730) return
        e.togglePanel(!0), e.togglePanelPosition('bottom'), e.setSelectedPanel('addon-controls')
        let r = document.createElement('div')
        ;(r.id = 'storybook-addon-onboarding'),
          document.body.appendChild(r),
          Me.render(
            y.createElement(
              rn,
              { fallback: y.createElement('div', null) },
              y.createElement(Ts, { api: e })
            ),
            r
          )
      })
    })
  })()
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
