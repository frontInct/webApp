try {
  ;(() => {
    var A = __STORYBOOK_API__,
      {
        ActiveTabs: k,
        Consumer: O,
        ManagerContext: T,
        Provider: g,
        RequestResponseError: U,
        addons: p,
        combineParameters: w,
        controlOrMetaKey: f,
        controlOrMetaSymbol: v,
        eventMatchesShortcut: D,
        eventToShortcut: x,
        experimental_MockUniversalStore: P,
        experimental_UniversalStore: M,
        experimental_requestResponse: R,
        experimental_useUniversalStore: C,
        isMacLike: B,
        isShortcutTaken: E,
        keyToSymbol: I,
        merge: K,
        mockChannel: N,
        optionOrAltSymbol: G,
        shortcutMatchesShortcut: L,
        shortcutToHumanString: Y,
        types: q,
        useAddonState: F,
        useArgTypes: H,
        useArgs: j,
        useChannel: V,
        useGlobalTypes: z,
        useGlobals: J,
        useParameter: Q,
        useSharedState: W,
        useStoryPrepared: X,
        useStorybookApi: Z,
        useStorybookState: $,
      } = __STORYBOOK_API__
    var m = (() => {
        let e
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
              ? (e = globalThis)
              : typeof window < 'u'
                ? (e = window)
                : typeof self < 'u'
                  ? (e = self)
                  : (e = {}),
          e
        )
      })(),
      d = 'tag-filters',
      a = 'static-filter'
    p.register(d, e => {
      let i = Object.entries(m.TAGS_OPTIONS ?? {}).reduce((o, s) => {
        let [t, l] = s
        return l.excludeFromSidebar && (o[t] = !0), o
      }, {})
      e.experimental_setFilter(a, o => {
        let s = o.tags ?? []
        return (s.includes('dev') || o.type === 'docs') && s.filter(t => i[t]).length === 0
      })
    })
  })()
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
