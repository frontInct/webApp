try {
  ;(() => {
    var c = __REACT__,
      {
        Children: B,
        Component: P,
        Fragment: R,
        Profiler: f,
        PureComponent: D,
        StrictMode: L,
        Suspense: E,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: U,
        cloneElement: v,
        createContext: x,
        createElement: H,
        createFactory: M,
        createRef: F,
        forwardRef: N,
        isValidElement: G,
        lazy: W,
        memo: u,
        startTransition: K,
        unstable_act: Y,
        useCallback: p,
        useContext: V,
        useDebugValue: q,
        useDeferredValue: z,
        useEffect: d,
        useId: Z,
        useImperativeHandle: J,
        useInsertionEffect: Q,
        useLayoutEffect: X,
        useMemo: $,
        useReducer: j,
        useRef: oo,
        useState: eo,
        useSyncExternalStore: no,
        useTransition: to,
        version: co,
      } = __REACT__
    var lo = __STORYBOOK_API__,
      {
        ActiveTabs: io,
        Consumer: uo,
        ManagerContext: po,
        Provider: mo,
        RequestResponseError: So,
        addons: s,
        combineParameters: _o,
        controlOrMetaKey: ho,
        controlOrMetaSymbol: Co,
        eventMatchesShortcut: bo,
        eventToShortcut: Ao,
        experimental_MockUniversalStore: yo,
        experimental_UniversalStore: To,
        experimental_requestResponse: go,
        experimental_useUniversalStore: ko,
        isMacLike: Oo,
        isShortcutTaken: wo,
        keyToSymbol: Bo,
        merge: Po,
        mockChannel: Ro,
        optionOrAltSymbol: fo,
        shortcutMatchesShortcut: Do,
        shortcutToHumanString: Lo,
        types: m,
        useAddonState: Eo,
        useArgTypes: Uo,
        useArgs: vo,
        useChannel: xo,
        useGlobalTypes: Ho,
        useGlobals: S,
        useParameter: Mo,
        useSharedState: Fo,
        useStoryPrepared: No,
        useStorybookApi: _,
        useStorybookState: Go,
      } = __STORYBOOK_API__
    var qo = __STORYBOOK_COMPONENTS__,
      {
        A: zo,
        ActionBar: Zo,
        AddonPanel: Jo,
        Badge: Qo,
        Bar: Xo,
        Blockquote: $o,
        Button: jo,
        ClipboardCode: oe,
        Code: ee,
        DL: ne,
        Div: te,
        DocumentWrapper: ce,
        EmptyTabContent: re,
        ErrorFormatter: Ie,
        FlexBar: ae,
        Form: se,
        H1: le,
        H2: ie,
        H3: ue,
        H4: pe,
        H5: de,
        H6: me,
        HR: Se,
        IconButton: h,
        IconButtonSkeleton: _e,
        Icons: he,
        Img: Ce,
        LI: be,
        Link: Ae,
        ListItem: ye,
        Loader: Te,
        Modal: ge,
        OL: ke,
        P: Oe,
        Placeholder: we,
        Pre: Be,
        ProgressSpinner: Pe,
        ResetWrapper: Re,
        ScrollArea: fe,
        Separator: De,
        Spaced: Le,
        Span: Ee,
        StorybookIcon: Ue,
        StorybookLogo: ve,
        Symbols: xe,
        SyntaxHighlighter: He,
        TT: Me,
        TabBar: Fe,
        TabButton: Ne,
        TabWrapper: Ge,
        Table: We,
        Tabs: Ke,
        TabsState: Ye,
        TooltipLinkList: Ve,
        TooltipMessage: qe,
        TooltipNote: ze,
        UL: Ze,
        WithTooltip: Je,
        WithTooltipPure: Qe,
        Zoom: Xe,
        codeCommon: $e,
        components: je,
        createCopyToClipboardFunction: on,
        getStoryHref: en,
        icons: nn,
        interleaveSeparators: tn,
        nameSpaceClassNames: cn,
        resetComponents: rn,
        withReset: In,
      } = __STORYBOOK_COMPONENTS__
    var pn = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: dn,
        AccessibilityIcon: mn,
        AccessibilityIgnoredIcon: Sn,
        AddIcon: _n,
        AdminIcon: hn,
        AlertAltIcon: Cn,
        AlertIcon: bn,
        AlignLeftIcon: An,
        AlignRightIcon: yn,
        AppleIcon: Tn,
        ArrowBottomLeftIcon: gn,
        ArrowBottomRightIcon: kn,
        ArrowDownIcon: On,
        ArrowLeftIcon: wn,
        ArrowRightIcon: Bn,
        ArrowSolidDownIcon: Pn,
        ArrowSolidLeftIcon: Rn,
        ArrowSolidRightIcon: fn,
        ArrowSolidUpIcon: Dn,
        ArrowTopLeftIcon: Ln,
        ArrowTopRightIcon: En,
        ArrowUpIcon: Un,
        AzureDevOpsIcon: vn,
        BackIcon: xn,
        BasketIcon: Hn,
        BatchAcceptIcon: Mn,
        BatchDenyIcon: Fn,
        BeakerIcon: Nn,
        BellIcon: Gn,
        BitbucketIcon: Wn,
        BoldIcon: Kn,
        BookIcon: Yn,
        BookmarkHollowIcon: Vn,
        BookmarkIcon: qn,
        BottomBarIcon: zn,
        BottomBarToggleIcon: Zn,
        BoxIcon: Jn,
        BranchIcon: Qn,
        BrowserIcon: Xn,
        ButtonIcon: $n,
        CPUIcon: jn,
        CalendarIcon: ot,
        CameraIcon: et,
        CameraStabilizeIcon: nt,
        CategoryIcon: tt,
        CertificateIcon: ct,
        ChangedIcon: rt,
        ChatIcon: It,
        CheckIcon: at,
        ChevronDownIcon: st,
        ChevronLeftIcon: lt,
        ChevronRightIcon: it,
        ChevronSmallDownIcon: ut,
        ChevronSmallLeftIcon: pt,
        ChevronSmallRightIcon: dt,
        ChevronSmallUpIcon: mt,
        ChevronUpIcon: St,
        ChromaticIcon: _t,
        ChromeIcon: ht,
        CircleHollowIcon: Ct,
        CircleIcon: bt,
        ClearIcon: At,
        CloseAltIcon: yt,
        CloseIcon: Tt,
        CloudHollowIcon: gt,
        CloudIcon: kt,
        CogIcon: Ot,
        CollapseIcon: wt,
        CommandIcon: Bt,
        CommentAddIcon: Pt,
        CommentIcon: Rt,
        CommentsIcon: ft,
        CommitIcon: Dt,
        CompassIcon: Lt,
        ComponentDrivenIcon: Et,
        ComponentIcon: Ut,
        ContrastIcon: vt,
        ContrastIgnoredIcon: xt,
        ControlsIcon: Ht,
        CopyIcon: Mt,
        CreditIcon: Ft,
        CrossIcon: Nt,
        DashboardIcon: Gt,
        DatabaseIcon: Wt,
        DeleteIcon: Kt,
        DiamondIcon: Yt,
        DirectionIcon: Vt,
        DiscordIcon: qt,
        DocChartIcon: zt,
        DocListIcon: Zt,
        DocumentIcon: Jt,
        DownloadIcon: Qt,
        DragIcon: Xt,
        EditIcon: $t,
        EllipsisIcon: jt,
        EmailIcon: oc,
        ExpandAltIcon: ec,
        ExpandIcon: nc,
        EyeCloseIcon: tc,
        EyeIcon: cc,
        FaceHappyIcon: rc,
        FaceNeutralIcon: Ic,
        FaceSadIcon: ac,
        FacebookIcon: sc,
        FailedIcon: lc,
        FastForwardIcon: ic,
        FigmaIcon: uc,
        FilterIcon: pc,
        FlagIcon: dc,
        FolderIcon: mc,
        FormIcon: Sc,
        GDriveIcon: _c,
        GithubIcon: hc,
        GitlabIcon: Cc,
        GlobeIcon: bc,
        GoogleIcon: Ac,
        GraphBarIcon: yc,
        GraphLineIcon: Tc,
        GraphqlIcon: gc,
        GridAltIcon: kc,
        GridIcon: Oc,
        GrowIcon: wc,
        HeartHollowIcon: Bc,
        HeartIcon: Pc,
        HomeIcon: Rc,
        HourglassIcon: fc,
        InfoIcon: Dc,
        ItalicIcon: Lc,
        JumpToIcon: Ec,
        KeyIcon: Uc,
        LightningIcon: vc,
        LightningOffIcon: xc,
        LinkBrokenIcon: Hc,
        LinkIcon: Mc,
        LinkedinIcon: Fc,
        LinuxIcon: Nc,
        ListOrderedIcon: Gc,
        ListUnorderedIcon: Wc,
        LocationIcon: Kc,
        LockIcon: Yc,
        MarkdownIcon: Vc,
        MarkupIcon: qc,
        MediumIcon: zc,
        MemoryIcon: Zc,
        MenuIcon: Jc,
        MergeIcon: Qc,
        MirrorIcon: Xc,
        MobileIcon: $c,
        MoonIcon: jc,
        NutIcon: or,
        OutboxIcon: er,
        OutlineIcon: C,
        PaintBrushIcon: nr,
        PaperClipIcon: tr,
        ParagraphIcon: cr,
        PassedIcon: rr,
        PhoneIcon: Ir,
        PhotoDragIcon: ar,
        PhotoIcon: sr,
        PhotoStabilizeIcon: lr,
        PinAltIcon: ir,
        PinIcon: ur,
        PlayAllHollowIcon: pr,
        PlayBackIcon: dr,
        PlayHollowIcon: mr,
        PlayIcon: Sr,
        PlayNextIcon: _r,
        PlusIcon: hr,
        PointerDefaultIcon: Cr,
        PointerHandIcon: br,
        PowerIcon: Ar,
        PrintIcon: yr,
        ProceedIcon: Tr,
        ProfileIcon: gr,
        PullRequestIcon: kr,
        QuestionIcon: Or,
        RSSIcon: wr,
        RedirectIcon: Br,
        ReduxIcon: Pr,
        RefreshIcon: Rr,
        ReplyIcon: fr,
        RepoIcon: Dr,
        RequestChangeIcon: Lr,
        RewindIcon: Er,
        RulerIcon: Ur,
        SaveIcon: vr,
        SearchIcon: xr,
        ShareAltIcon: Hr,
        ShareIcon: Mr,
        ShieldIcon: Fr,
        SideBySideIcon: Nr,
        SidebarAltIcon: Gr,
        SidebarAltToggleIcon: Wr,
        SidebarIcon: Kr,
        SidebarToggleIcon: Yr,
        SpeakerIcon: Vr,
        StackedIcon: qr,
        StarHollowIcon: zr,
        StarIcon: Zr,
        StatusFailIcon: Jr,
        StatusIcon: Qr,
        StatusPassIcon: Xr,
        StatusWarnIcon: $r,
        StickerIcon: jr,
        StopAltHollowIcon: oI,
        StopAltIcon: eI,
        StopIcon: nI,
        StorybookIcon: tI,
        StructureIcon: cI,
        SubtractIcon: rI,
        SunIcon: II,
        SupportIcon: aI,
        SweepIcon: sI,
        SwitchAltIcon: lI,
        SyncIcon: iI,
        TabletIcon: uI,
        ThumbsUpIcon: pI,
        TimeIcon: dI,
        TimerIcon: mI,
        TransferIcon: SI,
        TrashIcon: _I,
        TwitterIcon: hI,
        TypeIcon: CI,
        UbuntuIcon: bI,
        UndoIcon: AI,
        UnfoldIcon: yI,
        UnlockIcon: TI,
        UnpinIcon: gI,
        UploadIcon: kI,
        UserAddIcon: OI,
        UserAltIcon: wI,
        UserIcon: BI,
        UsersIcon: PI,
        VSCodeIcon: RI,
        VerifiedIcon: fI,
        VideoIcon: DI,
        WandIcon: LI,
        WatchIcon: EI,
        WindowsIcon: UI,
        WrenchIcon: vI,
        XIcon: xI,
        YoutubeIcon: HI,
        ZoomIcon: MI,
        ZoomOutIcon: FI,
        ZoomResetIcon: NI,
        iconList: GI,
      } = __STORYBOOK_ICONS__
    var l = 'storybook/outline',
      b = 'outline',
      A = u(function () {
        let [t, r] = S(),
          i = _(),
          I = [!0, 'true'].includes(t[b]),
          a = p(() => r({ [b]: !I }), [I])
        return (
          d(() => {
            i.setAddonShortcut(l, {
              label: 'Toggle Outline',
              defaultShortcut: ['alt', 'O'],
              actionName: 'outline',
              showInMenu: !1,
              action: a,
            })
          }, [a, i]),
          c.createElement(
            h,
            { key: 'outline', active: I, title: 'Apply outlines to the preview', onClick: a },
            c.createElement(C, null)
          )
        )
      })
    s.register(l, () => {
      s.add(l, {
        title: 'Outline',
        type: m.TOOL,
        match: ({ viewMode: t, tabId: r }) => !!(t && t.match(/^(story|docs)$/)) && !r,
        render: () => c.createElement(A, null),
      })
    })
  })()
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
