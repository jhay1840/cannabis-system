"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 4895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
// ** MUI imports

const ApexChartWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        "& .apexcharts-canvas": {
            "& line[stroke='transparent']": {
                display: "none"
            },
            "& .apexcharts-xaxis > line, & .apexcharts-yaxis > line": {
                stroke: theme.palette.divider
            },
            "& .apexcharts-xaxis-tick, & .apexcharts-yaxis-tick": {
                stroke: theme.palette.divider
            },
            "& .apexcharts-tooltip": {
                boxShadow: theme.shadows[3],
                borderColor: theme.palette.divider,
                background: theme.palette.background.paper,
                "& .apexcharts-tooltip-title": {
                    fontWeight: 600,
                    borderColor: theme.palette.divider,
                    background: theme.palette.background.paper
                },
                "&.apexcharts-theme-dark": {
                    "& .apexcharts-tooltip-text-label, & .apexcharts-tooltip-text-value": {
                        color: theme.palette.common.white
                    }
                },
                "& .bar-chart": {
                    padding: theme.spacing(2, 2.5)
                }
            },
            "& .apexcharts-xaxistooltip": {
                borderColor: theme.palette.divider,
                background: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                "& .apexcharts-xaxistooltip-text": {
                    color: theme.palette.text.primary
                },
                "&:after": {
                    borderBottomColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default
                },
                "&:before": {
                    borderBottomColor: theme.palette.divider
                }
            },
            "& .apexcharts-yaxistooltip": {
                borderColor: theme.palette.divider,
                background: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                "& .apexcharts-yaxistooltip-text": {
                    color: theme.palette.text.primary
                },
                "&:after": {
                    borderLeftColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default
                },
                "&:before": {
                    borderLeftColor: theme.palette.divider
                }
            },
            "& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel": {
                filter: "none",
                fontWeight: 400,
                fill: theme.palette.text.primary,
                fontFamily: `${theme.typography.fontFamily} !important`
            },
            "& .apexcharts-pie-label": {
                filter: "none",
                fill: theme.palette.common.white
            },
            "& .apexcharts-pie": {
                "& .apexcharts-datalabel-label, .apexcharts-datalabel-value": {
                    fontSize: "1.5rem"
                }
            },
            "& .apexcharts-marker": {
                boxShadow: "none"
            },
            "& .apexcharts-legend-series": {
                margin: `${theme.spacing(0.75, 2)} !important`,
                "& .apexcharts-legend-text": {
                    marginLeft: theme.spacing(0.75),
                    color: `${theme.palette.text.primary} !important`
                }
            },
            "& .apexcharts-xcrosshairs, & .apexcharts-ycrosshairs, & .apexcharts-gridline": {
                stroke: theme.palette.divider
            },
            "& .apexcharts-heatmap-rect": {
                stroke: theme.palette.mode === "light" ? theme.palette.background.paper : theme.palette.background.default
            },
            "& .apexcharts-radialbar > g > g:first-of-type .apexcharts-radialbar-area": {
                stroke: theme.palette.background.default
            },
            "& .apexcharts-radar-series polygon": {
                stroke: theme.palette.divider,
                fill: theme.palette.background.paper
            },
            "& .apexcharts-radar-series line": {
                stroke: theme.palette.divider
            }
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApexChartWrapper);


/***/ }),

/***/ 3119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9830);
/* harmony import */ var mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mdi_material_ui_ClipboardAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4667);
/* harmony import */ var mdi_material_ui_ClipboardAlert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ClipboardAlert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mdi_material_ui_CurrencyUsd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5890);
/* harmony import */ var mdi_material_ui_CurrencyUsd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_CurrencyUsd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4100);
/* harmony import */ var mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var mdi_material_ui_Cannabis__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4697);
/* harmony import */ var mdi_material_ui_Cannabis__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Cannabis__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var mdi_material_ui_AccountGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8582);
/* harmony import */ var mdi_material_ui_AccountGroup__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_AccountGroup__WEBPACK_IMPORTED_MODULE_14__);
// ** MUI Imports









// ** Icons Imports






const StatisticsCard = ({ data  })=>{
    const salesData = [
        {
            stats: data.outOfStockCount,
            color: "warning",
            title: "Out of Stock",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_ClipboardAlert__WEBPACK_IMPORTED_MODULE_10___default()), {
                sx: {
                    fontSize: "1.75rem"
                }
            })
        },
        {
            stats: data.totalProductsCount,
            title: "Cannabis Products",
            color: "primary",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_Cannabis__WEBPACK_IMPORTED_MODULE_13___default()), {
                sx: {
                    fontSize: "1.75rem"
                }
            })
        },
        {
            stats: data.memberCount,
            title: "Members",
            color: "success",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_AccountGroup__WEBPACK_IMPORTED_MODULE_14___default()), {
                sx: {
                    fontSize: "1.75rem"
                }
            })
        }
    ];
    const renderStats = ()=>{
        return salesData.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                item: true,
                xs: 12,
                sm: 4,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default()), {
                            variant: "rounded",
                            sx: {
                                mr: 3,
                                width: 44,
                                height: 44,
                                boxShadow: 3,
                                color: "common.white",
                                backgroundColor: `${item.color}.main`
                            },
                            children: item.icon
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                            sx: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    variant: "caption",
                                    children: item.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    variant: "h6",
                                    children: item.stats
                                })
                            ]
                        })
                    ]
                }, index)
            }, index));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5___default()), {
                title: "Overview",
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                    size: "small",
                    "aria-label": "settings",
                    className: "card-more-options",
                    sx: {
                        color: "text.secondary"
                    }
                }),
                subheader: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                    variant: "body2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                            component: "span",
                            sx: {
                                fontWeight: 600,
                                color: "text.primary"
                            }
                        }),
                        " Overall Data"
                    ]
                }),
                titleTypographyProps: {
                    sx: {
                        mb: 2.5,
                        lineHeight: "2rem !important",
                        letterSpacing: "0.15px !important"
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default()), {
                sx: {
                    pt: (theme)=>`${theme.spacing(3)} !important`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                    container: true,
                    spacing: [
                        5,
                        0
                    ],
                    children: renderStats()
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatisticsCard);


/***/ })

};
;