try {
  ;(() => {
    var l = __REACT__,
      {
        Children: ae,
        Component: ie,
        Fragment: ue,
        Profiler: pe,
        PureComponent: ce,
        StrictMode: me,
        Suspense: de,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: be,
        cloneElement: _e,
        createContext: Se,
        createElement: ye,
        createFactory: Te,
        createRef: Oe,
        forwardRef: ve,
        isValidElement: Ce,
        lazy: fe,
        memo: ke,
        startTransition: Ie,
        unstable_act: Ee,
        useCallback: v,
        useContext: xe,
        useDebugValue: Ae,
        useDeferredValue: he,
        useEffect: x,
        useId: ge,
        useImperativeHandle: Re,
        useInsertionEffect: De,
        useLayoutEffect: Le,
        useMemo: we,
        useReducer: Be,
        useRef: D,
        useState: L,
        useSyncExternalStore: Pe,
        useTransition: Me,
        version: Ne,
      } = __REACT__
    var Fe = __STORYBOOK_API__,
      {
        ActiveTabs: Ge,
        Consumer: Ke,
        ManagerContext: Ye,
        Provider: $e,
        RequestResponseError: qe,
        addons: A,
        combineParameters: ze,
        controlOrMetaKey: je,
        controlOrMetaSymbol: Ze,
        eventMatchesShortcut: Je,
        eventToShortcut: Qe,
        experimental_MockUniversalStore: Xe,
        experimental_UniversalStore: et,
        experimental_requestResponse: tt,
        experimental_useUniversalStore: ot,
        isMacLike: rt,
        isShortcutTaken: nt,
        keyToSymbol: lt,
        merge: st,
        mockChannel: at,
        optionOrAltSymbol: it,
        shortcutMatchesShortcut: ut,
        shortcutToHumanString: pt,
        types: w,
        useAddonState: ct,
        useArgTypes: mt,
        useArgs: dt,
        useChannel: bt,
        useGlobalTypes: B,
        useGlobals: h,
        useParameter: _t,
        useSharedState: St,
        useStoryPrepared: yt,
        useStorybookApi: P,
        useStorybookState: Tt,
      } = __STORYBOOK_API__
    var kt = __STORYBOOK_COMPONENTS__,
      {
        A: It,
        ActionBar: Et,
        AddonPanel: xt,
        Badge: At,
        Bar: ht,
        Blockquote: gt,
        Button: Rt,
        ClipboardCode: Dt,
        Code: Lt,
        DL: wt,
        Div: Bt,
        DocumentWrapper: Pt,
        EmptyTabContent: Mt,
        ErrorFormatter: Nt,
        FlexBar: Ut,
        Form: Vt,
        H1: Ht,
        H2: Wt,
        H3: Ft,
        H4: Gt,
        H5: Kt,
        H6: Yt,
        HR: $t,
        IconButton: M,
        IconButtonSkeleton: qt,
        Icons: g,
        Img: zt,
        LI: jt,
        Link: Zt,
        ListItem: Jt,
        Loader: Qt,
        Modal: Xt,
        OL: eo,
        P: to,
        Placeholder: oo,
        Pre: ro,
        ProgressSpinner: no,
        ResetWrapper: lo,
        ScrollArea: so,
        Separator: N,
        Spaced: ao,
        Span: io,
        StorybookIcon: uo,
        StorybookLogo: po,
        Symbols: co,
        SyntaxHighlighter: mo,
        TT: bo,
        TabBar: _o,
        TabButton: So,
        TabWrapper: yo,
        Table: To,
        Tabs: Oo,
        TabsState: vo,
        TooltipLinkList: U,
        TooltipMessage: Co,
        TooltipNote: fo,
        UL: ko,
        WithTooltip: V,
        WithTooltipPure: Io,
        Zoom: Eo,
        codeCommon: xo,
        components: Ao,
        createCopyToClipboardFunction: ho,
        getStoryHref: go,
        icons: Ro,
        interleaveSeparators: Do,
        nameSpaceClassNames: Lo,
        resetComponents: wo,
        withReset: Bo,
      } = __STORYBOOK_COMPONENTS__
    var G = { type: 'item', value: '' },
      K = (o, t) => ({
        ...t,
        name: t.name || o,
        description: t.description || o,
        toolbar: {
          ...t.toolbar,
          items: t.toolbar.items.map(e => {
            let r = typeof e == 'string' ? { value: e, title: e } : e
            return (
              r.type === 'reset' &&
                t.toolbar.icon &&
                ((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
              { ...G, ...r }
            )
          }),
        },
      }),
      Y = ['reset'],
      $ = o => o.filter(t => !Y.includes(t.type)).map(t => t.value),
      _ = 'addon-toolbars',
      q = async (o, t, e) => {
        e &&
          e.next &&
          (await o.setAddonShortcut(_, {
            label: e.next.label,
            defaultShortcut: e.next.keys,
            actionName: `${t}:next`,
            action: e.next.action,
          })),
          e &&
            e.previous &&
            (await o.setAddonShortcut(_, {
              label: e.previous.label,
              defaultShortcut: e.previous.keys,
              actionName: `${t}:previous`,
              action: e.previous.action,
            })),
          e &&
            e.reset &&
            (await o.setAddonShortcut(_, {
              label: e.reset.label,
              defaultShortcut: e.reset.keys,
              actionName: `${t}:reset`,
              action: e.reset.action,
            }))
      },
      z = o => t => {
        let {
            id: e,
            toolbar: { items: r, shortcuts: n },
          } = t,
          p = P(),
          [S, i] = h(),
          s = D([]),
          u = S[e],
          C = v(() => {
            i({ [e]: '' })
          }, [i]),
          f = v(() => {
            let a = s.current,
              m = a.indexOf(u),
              d = m === a.length - 1 ? 0 : m + 1,
              c = s.current[d]
            i({ [e]: c })
          }, [s, u, i]),
          k = v(() => {
            let a = s.current,
              m = a.indexOf(u),
              d = m > -1 ? m : 0,
              c = d === 0 ? a.length - 1 : d - 1,
              b = s.current[c]
            i({ [e]: b })
          }, [s, u, i])
        return (
          x(() => {
            n &&
              q(p, e, {
                next: { ...n.next, action: f },
                previous: { ...n.previous, action: k },
                reset: { ...n.reset, action: C },
              })
          }, [p, e, n, f, k, C]),
          x(() => {
            s.current = $(r)
          }, []),
          l.createElement(o, { cycleValues: s.current, ...t })
        )
      },
      H = ({ currentValue: o, items: t }) =>
        o != null && t.find(e => e.value === o && e.type !== 'reset'),
      j = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t })
        if (e) return e.icon
      },
      Z = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t })
        if (e) return e.title
      },
      J = ({ active: o, disabled: t, title: e, icon: r, description: n, onClick: p }) =>
        l.createElement(
          M,
          { active: o, title: n, disabled: t, onClick: t ? () => {} : p },
          r && l.createElement(g, { icon: r, __suppressDeprecationWarning: !0 }),
          e ? `\xA0${e}` : null
        ),
      Q = ({
        right: o,
        title: t,
        value: e,
        icon: r,
        hideIcon: n,
        onClick: p,
        disabled: S,
        currentValue: i,
      }) => {
        let s =
            r &&
            l.createElement(g, {
              style: { opacity: 1 },
              icon: r,
              __suppressDeprecationWarning: !0,
            }),
          u = { id: e ?? '_reset', active: i === e, right: o, title: t, disabled: S, onClick: p }
        return r && !n && (u.icon = s), u
      },
      X = z(
        ({
          id: o,
          name: t,
          description: e,
          toolbar: { icon: r, items: n, title: p, preventDynamicIcon: S, dynamicTitle: i },
        }) => {
          let [s, u, C] = h(),
            [f, k] = L(!1),
            a = s[o],
            m = !!a,
            d = o in C,
            c = r,
            b = p
          S || (c = j({ currentValue: a, items: n }) || c),
            i && (b = Z({ currentValue: a, items: n }) || b),
            !b && !c && console.warn(`Toolbar '${t}' has no title or icon`)
          let W = v(
            E => {
              u({ [o]: E })
            },
            [o, u]
          )
          return l.createElement(
            V,
            {
              placement: 'top',
              tooltip: ({ onHide: E }) => {
                let F = n
                  .filter(({ type: I }) => {
                    let R = !0
                    return I === 'reset' && !a && (R = !1), R
                  })
                  .map(I =>
                    Q({
                      ...I,
                      currentValue: a,
                      disabled: d,
                      onClick: () => {
                        W(I.value), E()
                      },
                    })
                  )
                return l.createElement(U, { links: F })
              },
              closeOnOutsideClick: !0,
              onVisibleChange: k,
            },
            l.createElement(J, {
              active: f || m,
              disabled: d,
              description: e || '',
              icon: c,
              title: b || '',
            })
          )
        }
      ),
      ee = () => {
        let o = B(),
          t = Object.keys(o).filter(e => !!o[e].toolbar)
        return t.length
          ? l.createElement(
              l.Fragment,
              null,
              l.createElement(N, null),
              t.map(e => {
                let r = K(e, o[e])
                return l.createElement(X, { key: e, id: e, ...r })
              })
            )
          : null
      }
    A.register(_, () =>
      A.add(_, {
        title: _,
        type: w.TOOL,
        match: ({ tabId: o }) => !o,
        render: () => l.createElement(ee, null),
      })
    )
  })()
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
