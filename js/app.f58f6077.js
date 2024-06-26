(function () {
    'use strict';
    var e = {
            149: function (e, t, n) {
                var r = n(130),
                    o = n(768),
                    c = n(782),
                    a = n(387),
                    s = n(232);
                const u = (e) => (
                        (0, o.Qi)('data-v-6e3c384f'), (e = e()), (0, o.jt)(), e
                    ),
                    l = { class: 'convertation-history container' },
                    i = u(() =>
                        (0, o.Lk)(
                            'h1',
                            { class: 'convertation-history header' },
                            'Convertation history:',
                            -1,
                        ),
                    );
                var d = (0, o.pM)({
                        __name: 'ConvertationHistory',
                        setup(e) {
                            const t = (0, c.Pj)(),
                                n = (0, o.EW)(
                                    () =>
                                        t.getters[
                                            'convert/getCurrenciesHistory'
                                        ],
                                ),
                                a = (e) => {
                                    t.commit(
                                        'convert/addConvertListItemToHistoryArray',
                                        e,
                                    );
                                },
                                u = () => {
                                    t.commit('convert/cleanCurrenciesHistory');
                                };
                            (0, o.sV)(() => {
                                const e = localStorage.getItem(
                                    'convertListItemsArray',
                                );
                                if (e) {
                                    const t = JSON.parse(e);
                                    0 === n.value.length && a(t);
                                }
                            });
                            const d = () => {
                                localStorage.removeItem(
                                    'convertListItemsArray',
                                ),
                                    localStorage.removeItem('convertListItem'),
                                    u();
                            };
                            return (e, t) => {
                                const c = (0, o.g2)('ButtonComponent');
                                return (
                                    (0, o.uX)(),
                                    (0, o.CE)('div', l, [
                                        i,
                                        (0, o.bF)(
                                            c,
                                            {
                                                'button-style':
                                                    'cleanup-history',
                                                onClick: d,
                                            },
                                            {
                                                default: (0, o.k6)(() => [
                                                    (0, o.eW)(
                                                        'Cleanup history',
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                        (0, o.bF)(
                                            r.F,
                                            {
                                                name: 'convertation-history list',
                                            },
                                            {
                                                default: (0, o.k6)(() => [
                                                    ((0, o.uX)(!0),
                                                    (0, o.CE)(
                                                        o.FK,
                                                        null,
                                                        (0, o.pI)(
                                                            n.value,
                                                            (e) => (
                                                                (0, o.uX)(),
                                                                (0, o.CE)(
                                                                    'div',
                                                                    {
                                                                        key: e,
                                                                        class: 'convertation-history list-item',
                                                                    },
                                                                    (0, s.v_)(
                                                                        e,
                                                                    ),
                                                                    1,
                                                                )
                                                            ),
                                                        ),
                                                        128,
                                                    )),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                    ])
                                );
                            };
                        },
                    }),
                    v = n(241);
                const p = (0, v.A)(d, [['__scopeId', 'data-v-6e3c384f']]);
                var m = p,
                    y = n(574),
                    _ = n(144);
                const f = { class: 'navbar' },
                    k = { class: 'navbar__btns' };
                var b = (0, o.pM)({
                    __name: 'NavBar',
                    setup(e) {
                        const t = (0, _.KR)([
                            {
                                id: (0, y.A)(),
                                name: 'Currency converter',
                                link: '/converter',
                            },
                            {
                                id: (0, y.A)(),
                                name: 'Receipts',
                                link: '/funds',
                            },
                            {
                                id: (0, y.A)(),
                                name: 'Tax obligations',
                                link: '/#',
                            },
                            {
                                id: (0, y.A)(),
                                name: 'Paying taxes',
                                link: '/#',
                            },
                            { id: (0, y.A)(), name: 'About', link: '/#' },
                        ]);
                        return (e, n) => {
                            const r = (0, o.g2)('ButtonComponent');
                            return (
                                (0, o.uX)(),
                                (0, o.CE)('div', f, [
                                    (0, o.Lk)(
                                        'div',
                                        {
                                            class: 'navbar_title',
                                            onClick:
                                                n[0] ||
                                                (n[0] = (t) =>
                                                    e.$router.push('/')),
                                        },
                                        " Entrepreneur's personal account ",
                                    ),
                                    (0, o.Lk)('div', k, [
                                        ((0, o.uX)(!0),
                                        (0, o.CE)(
                                            o.FK,
                                            null,
                                            (0, o.pI)(
                                                t.value,
                                                (t) => (
                                                    (0, o.uX)(),
                                                    (0, o.Wv)(
                                                        r,
                                                        {
                                                            'button-style':
                                                                'nav-button',
                                                            key: t.id,
                                                            onClick: (n) =>
                                                                e.$router.push(
                                                                    t.link,
                                                                ),
                                                        },
                                                        {
                                                            default: (0, o.k6)(
                                                                () => [
                                                                    (0, o.eW)(
                                                                        (0,
                                                                        s.v_)(
                                                                            t.name,
                                                                        ),
                                                                        1,
                                                                    ),
                                                                ],
                                                            ),
                                                            _: 2,
                                                        },
                                                        1032,
                                                        ['onClick'],
                                                    )
                                                ),
                                            ),
                                            128,
                                        )),
                                    ]),
                                ])
                            );
                        };
                    },
                });
                const C = (0, v.A)(b, [['__scopeId', 'data-v-5abd9cae']]);
                var h = C;
                const g = (e) => (
                        (0, o.Qi)('data-v-0696a8a2'), (e = e()), (0, o.jt)(), e
                    ),
                    L = { class: 'footer-component' },
                    I = g(() =>
                        (0, o.Lk)(
                            'div',
                            { className: 'copyright' },
                            [
                                (0, o.Lk)('p', null, [
                                    (0, o.eW)(' © 2023 All rights reserved '),
                                    (0, o.Lk)('br'),
                                    (0, o.Lk)(
                                        'a',
                                        {
                                            href: 'https://github.com/kreker2112/-urrency-converter.git',
                                        },
                                        ' Project repo ',
                                    ),
                                ]),
                            ],
                            -1,
                        ),
                    ),
                    A = [I];
                function S(e, t) {
                    return (0, o.uX)(), (0, o.CE)('footer', L, A);
                }
                const E = {},
                    U = (0, v.A)(E, [
                        ['render', S],
                        ['__scopeId', 'data-v-0696a8a2'],
                    ]);
                var B = U;
                const O = { class: 'currency-layout' };
                var R = (0, o.pM)({
                    __name: 'currencyLayout',
                    setup(e) {
                        return (e, t) => (
                            (0, o.uX)(),
                            (0, o.CE)(
                                o.FK,
                                null,
                                [
                                    (0, o.bF)(h),
                                    (0, o.Lk)('div', O, [
                                        (0, o.RG)(e.$slots, 'default'),
                                        (0, o.bF)(m, {
                                            class: 'convertation-history__component',
                                        }),
                                    ]),
                                    (0, o.bF)(B),
                                ],
                                64,
                            )
                        );
                    },
                });
                const j = (0, v.A)(R, [['__scopeId', 'data-v-48169678']]);
                var P = j;
                const F = { class: 'default-layout' };
                var H = (0, o.pM)({
                    __name: 'defaultLayout',
                    setup(e) {
                        return (e, t) => (
                            (0, o.uX)(),
                            (0, o.CE)(
                                o.FK,
                                null,
                                [
                                    (0, o.bF)(h),
                                    (0, o.Lk)('div', F, [
                                        (0, o.RG)(e.$slots, 'default'),
                                    ]),
                                    (0, o.bF)(B),
                                ],
                                64,
                            )
                        );
                    },
                });
                const N = (0, v.A)(H, [['__scopeId', 'data-v-816168d8']]);
                var X = N;
                const V = { class: 'app' };
                var M = (0, o.pM)({
                    __name: 'App',
                    setup(e) {
                        const t = { currencyLayout: P, defaultLayout: X },
                            n = (0, c.Pj)(),
                            r = (0, a.lq)(),
                            s = (0, o.EW)(() => t[r.meta.layout]),
                            u = (e) => {
                                n.commit(
                                    'convert/addConvertListItemToHistoryArray',
                                    e,
                                );
                            },
                            l = () => {
                                const e = JSON.parse(
                                        localStorage.getItem(
                                            'convertListItemsArray',
                                        ),
                                    ),
                                    t = e;
                                u(t);
                            };
                        return (
                            (0, o.sV)(() => {
                                l();
                            }),
                            (e, t) => {
                                const n = (0, o.g2)('router-view');
                                return (
                                    (0, o.uX)(),
                                    (0, o.CE)('div', V, [
                                        ((0, o.uX)(),
                                        (0, o.Wv)((0, o.$y)(s.value), null, {
                                            default: (0, o.k6)(() => [
                                                (0, o.bF)(n),
                                            ]),
                                            _: 1,
                                        })),
                                    ])
                                );
                            }
                        );
                    },
                });
                const W = M;
                var $ = W;
                const x = (e) => (
                        (0, o.Qi)('data-v-2b8ace32'), (e = e()), (0, o.jt)(), e
                    ),
                    w = { class: 'header__container' },
                    D = x(() =>
                        (0, o.Lk)(
                            'h1',
                            { class: 'header__title' },
                            " Welcome to the entrepreneur's personal account! Here you can convert currency, store data on cash receipts funds, calculation of income for the period, calculation of the amount of taxes and formation of budget payments ",
                            -1,
                        ),
                    ),
                    K = [D];
                function T(e, t) {
                    return (0, o.uX)(), (0, o.CE)('header', w, K);
                }
                const Q = {},
                    q = (0, v.A)(Q, [
                        ['render', T],
                        ['__scopeId', 'data-v-2b8ace32'],
                    ]);
                var J = q,
                    G = n(660),
                    z = n.n(G);
                const Y = (e) => (
                        (0, o.Qi)('data-v-63118d7c'), (e = e()), (0, o.jt)(), e
                    ),
                    Z = { class: 'input-form' },
                    ee = Y(() =>
                        (0, o.Lk)('h2', null, 'Currency converter', -1),
                    ),
                    te = { class: 'bank-select__container' },
                    ne = Y(() =>
                        (0, o.Lk)(
                            'h2',
                            { class: 'bank-select__header' },
                            'Please, select a bank:',
                            -1,
                        ),
                    ),
                    re = Y(() =>
                        (0, o.Lk)(
                            'option',
                            {
                                disabled: '',
                                value: '',
                                selected: '',
                                class: 'select-option__disabled',
                            },
                            ' Select a bank ',
                            -1,
                        ),
                    ),
                    oe = Y(() =>
                        (0, o.Lk)(
                            'option',
                            { value: 'monobank' },
                            'Monobank',
                            -1,
                        ),
                    ),
                    ce = Y(() =>
                        (0, o.Lk)('option', { value: 'nbu' }, 'NBU', -1),
                    ),
                    ae = [re, oe, ce];
                var se = (0, o.pM)({
                    __name: 'InputForm',
                    setup(e) {
                        const t = (0, c.Pj)(),
                            n = (0, a.rd)(),
                            s = (0, _.KR)(''),
                            u = (0, _.KR)(''),
                            l = () => {
                                s.value && u.value
                                    ? i()
                                    : z().Notify.failure(
                                          'Input the amount and select the bank!!',
                                      );
                            },
                            i = () => {
                                t.commit('convert/setAmount', s.value),
                                    n.push({ name: 'currenciesList' });
                            },
                            d = () => {
                                t.commit('convert/setAmount', s.value);
                            },
                            v = () => {
                                t.commit('convert/setSelectedBank', u.value);
                            };
                        return (e, t) => {
                            const n = (0, o.g2)('CurrencyInput'),
                                c = (0, o.g2)('ButtonComponent');
                            return (
                                (0, o.uX)(),
                                (0, o.CE)('div', null, [
                                    (0, o.Lk)('div', Z, [
                                        ee,
                                        (0, o.Lk)('div', te, [
                                            ne,
                                            (0, o.bo)(
                                                (0, o.Lk)(
                                                    'select',
                                                    {
                                                        ref: 'bankSelect',
                                                        id: 'bank-select',
                                                        class: 'bank-select__list',
                                                        name: 'bank',
                                                        'onUpdate:modelValue':
                                                            t[0] ||
                                                            (t[0] = (e) =>
                                                                (u.value = e)),
                                                        onChange: v,
                                                    },
                                                    ae,
                                                    544,
                                                ),
                                                [[r.u1, u.value]],
                                            ),
                                        ]),
                                        (0, o.bF)(
                                            n,
                                            {
                                                modelValue: s.value,
                                                'onUpdate:modelValue':
                                                    t[1] ||
                                                    (t[1] = (e) =>
                                                        (s.value = e)),
                                                onInput: d,
                                            },
                                            null,
                                            8,
                                            ['modelValue'],
                                        ),
                                        (0, o.bF)(
                                            c,
                                            {
                                                'button-style': 'button',
                                                onClick: (0, r.D$)(l, [
                                                    'prevent',
                                                ]),
                                            },
                                            {
                                                default: (0, o.k6)(() => [
                                                    (0, o.eW)(
                                                        'Select currency',
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                    ]),
                                ])
                            );
                        };
                    },
                });
                const ue = (0, v.A)(se, [['__scopeId', 'data-v-63118d7c']]);
                var le = ue;
                const ie = { class: 'converter-page' },
                    de = { class: 'input-form__container' };
                var ve = (0, o.pM)({
                    __name: 'ConverterPage',
                    setup(e) {
                        return (e, t) => (
                            (0, o.uX)(),
                            (0, o.CE)('div', ie, [
                                (0, o.Lk)('div', de, [(0, o.bF)(le)]),
                            ])
                        );
                    },
                });
                const pe = (0, v.A)(ve, [['__scopeId', 'data-v-f7b27ac6']]);
                var me = pe;
                const ye = { class: 'currencies__list', ref: 'currenciesList' },
                    _e = { class: 'fieldset__container' },
                    fe = (0, o.Lk)(
                        'legend',
                        {
                            for: 'currency-select',
                            class: 'currencies-legend__header',
                        },
                        ' Please, select the currency to convert ',
                        -1,
                    ),
                    ke = { class: 'selected-bank' },
                    be = (0, o.Lk)('strong', null, 'Bank selected:', -1),
                    Ce = { class: 'amount__sum' },
                    he = (0, o.Lk)('strong', null, 'Amount to exchange:', -1),
                    ge = { class: 'currency currency-select' },
                    Le = (0, o.Lk)(
                        'option',
                        {
                            class: 'currency currency-select__option_USD',
                            value: 'USD',
                        },
                        ' USD (U.S. dollar) ',
                        -1,
                    ),
                    Ie = (0, o.Lk)(
                        'option',
                        {
                            class: 'currency currency-select__option_EUR',
                            value: 'EUR',
                        },
                        ' EUR (Euro) ',
                        -1,
                    ),
                    Ae = [Le, Ie],
                    Se = { class: 'currencies__container' },
                    Ee = { class: 'currency__item' },
                    Ue = { class: 'currency-label', for: 'convertUSDtoUAH' },
                    Be = { class: 'currency__item' },
                    Oe = { class: 'currency-label', for: 'convertUAHtoUSD' },
                    Re = { class: 'buttons__contaier' };
                var je = (0, o.pM)({
                    __name: 'CurrenciesList',
                    setup(e) {
                        const t = (0, c.Pj)(),
                            n = (0, a.rd)();
                        let u = (0, _.KR)(''),
                            l = (0, _.KR)('');
                        const i = (0, _.KR)(HTMLSelectElement),
                            d = t.getters['convert/getAmount'],
                            v =
                                t.getters[
                                    'convert/getSelectedBank'
                                ].toUpperCase(),
                            p = (e) => {
                                t.commit('convert/setValueInput', e);
                            },
                            m = (e) => {
                                t.commit('convert/setOptionInput', e);
                            },
                            y = () => {
                                t.commit('convert/findCurrencieCode');
                            },
                            f = () => {
                                t.commit(
                                    'convert/findCurrencieWithCurrencyCode',
                                );
                            },
                            k = () => {
                                t.commit('convert/calculateCurrency');
                            },
                            b = () => {
                                t.commit('convert/makeConvertListItem');
                            },
                            C = () => {
                                t.commit(
                                    'convert/addConvertListItemToHistoryArray',
                                );
                            },
                            h = () => {
                                t.dispatch('convert/fetchCurrencies');
                            },
                            g = () => {
                                k(), b(), C(), n.push({ name: 'resultPage' });
                            },
                            L = () => {
                                const e = i.value,
                                    t = e.options[e.selectedIndex].value;
                                localStorage.setItem('optionInput', t), m(t);
                            },
                            I = () => {
                                const e = document.querySelector(
                                    'input[type="radio"]:checked',
                                );
                                p(e.value);
                            },
                            A = () => {
                                h(), L(), y(), f();
                            },
                            S = () => {
                                L(),
                                    y(),
                                    f(),
                                    (l.value =
                                        localStorage.getItem('optionInput') ||
                                        '');
                            },
                            E = () => {
                                n.push({ name: 'converterPage' });
                            };
                        return (
                            (0, o.sV)(() => {
                                (u.value = d),
                                    h(),
                                    A(),
                                    I(),
                                    (l.value =
                                        localStorage.getItem('optionInput') ||
                                        '');
                            }),
                            (e, t) => {
                                const n = (0, o.g2)('ButtonComponent');
                                return (
                                    (0, o.uX)(),
                                    (0, o.CE)(
                                        'div',
                                        ye,
                                        [
                                            (0, o.Lk)('fieldset', _e, [
                                                fe,
                                                (0, o.Lk)('div', ke, [
                                                    be,
                                                    (0, o.eW)(
                                                        ' ' +
                                                            (0, s.v_)(
                                                                (0, _.R1)(v),
                                                            ),
                                                        1,
                                                    ),
                                                ]),
                                                (0, o.Lk)('div', Ce, [
                                                    he,
                                                    (0, o.eW)(
                                                        ' ' +
                                                            (0, s.v_)(
                                                                (0, _.R1)(u),
                                                            ),
                                                        1,
                                                    ),
                                                ]),
                                                (0, o.Lk)('div', ge, [
                                                    (0, o.Lk)(
                                                        'select',
                                                        {
                                                            ref_key:
                                                                'currencySelect',
                                                            ref: i,
                                                            id: 'currency-select',
                                                            class: 'currency currency-select__list',
                                                            name: 'currency',
                                                            onChange: S,
                                                        },
                                                        Ae,
                                                        544,
                                                    ),
                                                ]),
                                                (0, o.Lk)('div', Se, [
                                                    (0, o.Lk)('div', Ee, [
                                                        (0, o.Lk)('input', {
                                                            id: 'rateBuy',
                                                            type: 'radio',
                                                            class: 'option-input radio',
                                                            name: 'convert',
                                                            value: 'rateBuy',
                                                            checked: '',
                                                            onClick: I,
                                                        }),
                                                        (0, o.Lk)(
                                                            'label',
                                                            Ue,
                                                            'UAH to ' +
                                                                (0, s.v_)(
                                                                    (0, _.R1)(
                                                                        l,
                                                                    ),
                                                                ),
                                                            1,
                                                        ),
                                                    ]),
                                                    (0, o.Lk)('div', Be, [
                                                        (0, o.Lk)('input', {
                                                            id: 'rateSell',
                                                            type: 'radio',
                                                            class: 'option-input radio',
                                                            name: 'convert',
                                                            value: 'rateSell',
                                                            onClick: I,
                                                        }),
                                                        (0, o.Lk)(
                                                            'label',
                                                            Oe,
                                                            (0, s.v_)(
                                                                (0, _.R1)(l),
                                                            ) + ' to UAH',
                                                            1,
                                                        ),
                                                    ]),
                                                ]),
                                                (0, o.Lk)('div', Re, [
                                                    (0, o.bF)(
                                                        n,
                                                        {
                                                            'button-style':
                                                                'currencies-list',
                                                            onClick: (0, r.D$)(
                                                                g,
                                                                ['prevent'],
                                                            ),
                                                        },
                                                        {
                                                            default: (0, o.k6)(
                                                                () => [
                                                                    (0, o.eW)(
                                                                        ' Convert ',
                                                                    ),
                                                                ],
                                                            ),
                                                            _: 1,
                                                        },
                                                    ),
                                                    (0, o.bF)(
                                                        n,
                                                        {
                                                            'button-style':
                                                                'currencies-list',
                                                            onClick: (0, r.D$)(
                                                                E,
                                                                ['prevent'],
                                                            ),
                                                        },
                                                        {
                                                            default: (0, o.k6)(
                                                                () => [
                                                                    (0, o.eW)(
                                                                        ' Cancel operation ',
                                                                    ),
                                                                ],
                                                            ),
                                                            _: 1,
                                                        },
                                                    ),
                                                ]),
                                            ]),
                                        ],
                                        512,
                                    )
                                );
                            }
                        );
                    },
                });
                const Pe = je;
                var Fe = Pe;
                const He = (e) => (
                        (0, o.Qi)('data-v-38557f4b'), (e = e()), (0, o.jt)(), e
                    ),
                    Ne = { class: 'result-page' },
                    Xe = { class: 'result__container' },
                    Ve = He(() =>
                        (0, o.Lk)(
                            'h1',
                            { class: 'result__container-header' },
                            'Результат',
                            -1,
                        ),
                    ),
                    Me = { class: 'buttons__contaier' };
                var We = (0, o.pM)({
                    __name: 'ResultPage',
                    setup(e) {
                        const t = (0, c.Pj)(),
                            n = (0, a.rd)(),
                            r = t.getters['convert/getResult'],
                            u = t.getters['convert/getOptionInput'],
                            l = () => {
                                n.push('/converter');
                            };
                        return (e, t) => {
                            const n = (0, o.g2)('ButtonComponent');
                            return (
                                (0, o.uX)(),
                                (0, o.CE)('div', Ne, [
                                    (0, o.Lk)('div', Xe, [
                                        Ve,
                                        (0, o.Lk)(
                                            'span',
                                            null,
                                            (0, s.v_)((0, _.R1)(r)) +
                                                ' ' +
                                                (0, s.v_)((0, _.R1)(u)),
                                            1,
                                        ),
                                    ]),
                                    (0, o.Lk)('div', Me, [
                                        (0, o.bF)(
                                            n,
                                            {
                                                'button-style': 'cancel-result',
                                                onClick: l,
                                            },
                                            {
                                                default: (0, o.k6)(() => [
                                                    (0, o.eW)(
                                                        ' Back to the beginning ',
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                        ),
                                    ]),
                                ])
                            );
                        };
                    },
                });
                const $e = (0, v.A)(We, [['__scopeId', 'data-v-38557f4b']]);
                var xe = $e;
                const we = (e) => (
                        (0, o.Qi)('data-v-98e4c510'), (e = e()), (0, o.jt)(), e
                    ),
                    De = we(() =>
                        (0, o.Lk)(
                            'header',
                            { class: 'funds__container' },
                            [
                                (0, o.Lk)(
                                    'h1',
                                    { class: 'funds__title' },
                                    ' Data on cash receipts will be displayed here. ',
                                ),
                            ],
                            -1,
                        ),
                    ),
                    Ke = [De];
                function Te(e, t) {
                    return (0, o.uX)(), (0, o.CE)('div', null, Ke);
                }
                const Qe = {},
                    qe = (0, v.A)(Qe, [
                        ['render', Te],
                        ['__scopeId', 'data-v-98e4c510'],
                    ]);
                var Je = qe;
                const Ge = [
                        {
                            path: '/',
                            component: J,
                            name: 'introPage',
                            meta: { layout: 'defaultLayout' },
                        },
                        {
                            path: '/converter',
                            component: me,
                            name: 'converterPage',
                            meta: { layout: 'currencyLayout' },
                        },
                        {
                            path: '/converter/currencies',
                            component: Fe,
                            name: 'currenciesList',
                            meta: { layout: 'currencyLayout' },
                        },
                        {
                            path: '/converter/result',
                            component: xe,
                            name: 'resultPage',
                            meta: { layout: 'currencyLayout' },
                        },
                        {
                            path: '/funds',
                            component: Je,
                            name: 'enteringFunds',
                            meta: { layout: 'defaultLayout' },
                        },
                    ],
                    ze = (0, a.aE)({
                        history: (0, a.LA)('/converter.github.io/'),
                        routes: Ge,
                    });
                var Ye = ze;
                const Ze = { class: 'currency-input__container' },
                    et = ['value'];
                var tt = (0, o.pM)({
                    __name: 'CurrencyInput',
                    props: {
                        modelValue: { type: [String, Number], required: !0 },
                    },
                    emits: ['update:modelValue'],
                    setup(e, { emit: t }) {
                        const n = e,
                            r = t,
                            c = (e) => {
                                const t = e.target.value;
                                r('update:modelValue', t);
                            },
                            a = () => {
                                r('update:modelValue', '');
                            };
                        return (e, t) => {
                            const r = (0, o.g2)('ButtonComponent'),
                                s = (0, o.gN)('focus');
                            return (
                                (0, o.uX)(),
                                (0, o.CE)('div', Ze, [
                                    (0, o.bo)(
                                        (0, o.Lk)(
                                            'input',
                                            {
                                                value: n.modelValue,
                                                class: 'input',
                                                type: 'number',
                                                placeholder: 'Введите сумму',
                                                onInput: c,
                                            },
                                            null,
                                            40,
                                            et,
                                        ),
                                        [[s]],
                                    ),
                                    (0, o.bF)(
                                        r,
                                        {
                                            'button-style':
                                                'currency-input_cleanup',
                                            onClick: a,
                                        },
                                        {
                                            default: (0, o.k6)(() => [
                                                (0, o.eW)(' Clear '),
                                            ]),
                                            _: 1,
                                        },
                                    ),
                                ])
                            );
                        };
                    },
                });
                const nt = (0, v.A)(tt, [['__scopeId', 'data-v-520054cf']]);
                var rt = nt,
                    ot = (0, o.pM)({
                        __name: 'ButtonComponent',
                        props: {
                            buttonStyle: { type: String, default: 'button' },
                        },
                        setup(e) {
                            const t = e;
                            return (e, n) => (
                                (0, o.uX)(),
                                (0, o.CE)(
                                    'button',
                                    {
                                        class: (0, s.C4)([
                                            'button',
                                            t.buttonStyle,
                                        ]),
                                    },
                                    [(0, o.RG)(e.$slots, 'default')],
                                    2,
                                )
                            );
                        },
                    });
                const ct = (0, v.A)(ot, [['__scopeId', 'data-v-0099e478']]);
                var at = ct,
                    st = [rt, at],
                    ut = {
                        mounted(e) {
                            e.focus();
                        },
                        name: 'focus',
                    },
                    lt = [ut],
                    it = n(355);
                const dt = { 840: 'USD', 978: 'EUR', 980: 'UAH' },
                    vt = {
                        state: () => ({
                            amount: '',
                            currenciesHistory: [],
                            cachedCurrencies: [],
                            optionInput: '',
                            radioInput: '',
                            currencyCode: 0,
                            currencyObject: {
                                rateBuy: 0,
                                rateSell: 0,
                                rate: 0,
                            },
                            result: 0,
                            convertListItem: '',
                            selectedBank: '',
                        }),
                        getters: {
                            getAmount: (e) => e.amount,
                            getCurrenciesHistory: (e) => e.currenciesHistory,
                            getCachedCurrencies: (e) => e.cachedCurrencies,
                            getOptionInput: (e) => e.optionInput,
                            getRadioInput: (e) => e.radioInput,
                            getCurrencyCode: (e) => e.currencyCode,
                            getCurrencyObject: (e) => e.currencyObject,
                            getResult: (e) => e.result,
                            getConvertListItem: (e) => e.convertListItem,
                            getSelectedBank: (e) => e.selectedBank,
                        },
                        mutations: {
                            setAmount: (e, t) => (e.amount = t),
                            cleanCurrenciesHistory: (e) =>
                                (e.currenciesHistory = []),
                            setCachedCurrencies: (e, t) => {
                                e.cachedCurrencies = t;
                            },
                            setOptionInput: (e, t) => {
                                e.optionInput = t;
                            },
                            setValueInput: (e, t) => {
                                e.radioInput = t;
                            },
                            findCurrencieCode: (e) => {
                                const t = e.optionInput,
                                    n = Object.keys(dt).find(
                                        (e) => dt[parseInt(e)] === t,
                                    ),
                                    r = Number(n);
                                e.currencyCode = r;
                            },
                            findCurrencieWithCurrencyCode: (e) => {
                                const t = e.cachedCurrencies,
                                    n = e.currencyCode;
                                t.find((t) => {
                                    ((t.currencyCodeA === n &&
                                        980 === t.currencyCodeB) ||
                                        t.r030 === n) &&
                                        (e.currencyObject = t);
                                });
                            },
                            calculateCurrency: (e) => {
                                const t = { ...e.currencyObject },
                                    n = Number(e.amount),
                                    r = t.rate,
                                    o = t.rateBuy,
                                    c = t.rateSell,
                                    a =
                                        'rateBuy' === e.radioInput
                                            ? n / o || n / r
                                            : n * c || n * r,
                                    s = a.toFixed(2);
                                return (e.result = Number(s));
                            },
                            makeConvertListItem: (e) => {
                                const t = e.amount,
                                    n = e.optionInput,
                                    r = e.selectedBank,
                                    o = 'rateBuy' === e.radioInput ? 'UAH' : n,
                                    c = 'rateBuy' === e.radioInput ? n : 'UAH',
                                    a = e.result,
                                    s = `${r.toUpperCase()}: ${t} ${o} = ${a} ${c}`;
                                e.convertListItem = s;
                            },
                            addConvertListItemToHistoryArray(e) {
                                const t =
                                    JSON.parse(
                                        localStorage.getItem(
                                            'convertListItemsArray',
                                        ),
                                    ) || [];
                                (e.currenciesHistory = t),
                                    e.convertListItem &&
                                        (t.unshift(e.convertListItem),
                                        localStorage.setItem(
                                            'convertListItemsArray',
                                            JSON.stringify(t),
                                        ));
                            },
                            setSelectedBank: (e, t) => {
                                e.selectedBank = t;
                            },
                        },
                        actions: {
                            fetchCurrencies: async ({
                                commit: e,
                                state: t,
                            }) => {
                                const n = t.selectedBank;
                                if (n) {
                                    const t = {
                                        NODE_ENV: 'production',
                                        VUE_APP_MONOBANK_URL:
                                            'https://api.monobank.ua/bank/currency',
                                        VUE_APP_NBU_URL:
                                            'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
                                        BASE_URL: '/converter.github.io/',
                                    }[`VUE_APP_${n.toUpperCase()}_URL`];
                                    try {
                                        const n = await it.A.get(t),
                                            r = n.data;
                                        e('setCachedCurrencies', r);
                                    } catch (r) {
                                        r.response && 429 === r.response.status
                                            ? console.log('Too many requests')
                                            : console.error(r);
                                    }
                                }
                            },
                        },
                        namespaced: !0,
                    };
                var pt = vt,
                    mt = n(131);
                Symbol();
                const yt = (0, c.y$)({
                    modules: { convert: pt },
                    plugins: [
                        (0, mt.A)({
                            key: 'currency',
                            paths: ['convert.cachedCurrencies'],
                        }),
                    ],
                });
                var _t = yt;
                const ft = (0, r.Ef)({ render: () => (0, o.h)($) });
                st.forEach((e) => {
                    ft.component(e.__name, e);
                }),
                    lt.forEach((e) => {
                        ft.directive(e.name, e);
                    }),
                    ft.use(Ye).use(_t).mount('#app');
            },
        },
        t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var c = (t[r] = { exports: {} });
        return e[r].call(c.exports, c, c.exports, n), c.exports;
    }
    (n.m = e),
        (function () {
            var e = [];
            n.O = function (t, r, o, c) {
                if (!r) {
                    var a = 1 / 0;
                    for (i = 0; i < e.length; i++) {
                        (r = e[i][0]), (o = e[i][1]), (c = e[i][2]);
                        for (var s = !0, u = 0; u < r.length; u++)
                            (!1 & c || a >= c) &&
                            Object.keys(n.O).every(function (e) {
                                return n.O[e](r[u]);
                            })
                                ? r.splice(u--, 1)
                                : ((s = !1), c < a && (a = c));
                        if (s) {
                            e.splice(i--, 1);
                            var l = o();
                            void 0 !== l && (t = l);
                        }
                    }
                    return t;
                }
                c = c || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > c; i--)
                    e[i] = e[i - 1];
                e[i] = [r, o, c];
            };
        })(),
        (function () {
            n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e['default'];
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, { a: t }), t;
            };
        })(),
        (function () {
            n.d = function (e, t) {
                for (var r in t)
                    n.o(t, r) &&
                        !n.o(e, r) &&
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
            };
        })(),
        (function () {
            n.g = (function () {
                if ('object' === typeof globalThis) return globalThis;
                try {
                    return this || new Function('return this')();
                } catch (e) {
                    if ('object' === typeof window) return window;
                }
            })();
        })(),
        (function () {
            n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            };
        })(),
        (function () {
            n.r = function (e) {
                'undefined' !== typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            };
        })(),
        (function () {
            var e = { 524: 0 };
            n.O.j = function (t) {
                return 0 === e[t];
            };
            var t = function (t, r) {
                    var o,
                        c,
                        a = r[0],
                        s = r[1],
                        u = r[2],
                        l = 0;
                    if (
                        a.some(function (t) {
                            return 0 !== e[t];
                        })
                    ) {
                        for (o in s) n.o(s, o) && (n.m[o] = s[o]);
                        if (u) var i = u(n);
                    }
                    for (t && t(r); l < a.length; l++)
                        (c = a[l]), n.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
                    return n.O(i);
                },
                r = (self['webpackChunkcurrency_converter'] =
                    self['webpackChunkcurrency_converter'] || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var r = n.O(void 0, [504], function () {
        return n(149);
    });
    r = n.O(r);
})();
//# sourceMappingURL=app.f58f6077.js.map
