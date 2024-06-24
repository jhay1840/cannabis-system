"use strict";
exports.id = 2159;
exports.ids = [2159];
exports.modules = {

/***/ 6077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__);
// ** MUI Imports







// ** Icons Imports
// import DotsVertical from 'mdi-material-ui/DotsVertical'
const CardStatsVertical = (props)=>{
    // ** Props
    const { title , subtitle , color , icon , stats , trend , trendNumber  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default()), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                    sx: {
                        display: "flex",
                        marginBottom: 5.5,
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                boxShadow: 3,
                                marginRight: 4,
                                color: "common.white",
                                backgroundColor: `${color}.main`
                            },
                            children: icon
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                            size: "small",
                            "aria-label": "settings",
                            className: "card-more-options",
                            sx: {
                                color: "text.secondary"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        fontWeight: 600,
                        fontSize: "0.875rem"
                    },
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                    sx: {
                        marginTop: 1.5,
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: 1.5,
                        alignItems: "flex-start"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                            variant: "h6",
                            sx: {
                                mr: 2
                            },
                            children: stats
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                            component: "sup",
                            variant: "caption",
                            sx: {
                                color: trend === "positive" ? "success.main" : "error.main"
                            },
                            children: trendNumber
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                    variant: "caption",
                    children: subtitle
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardStatsVertical);
CardStatsVertical.defaultProps = {
    color: "primary",
    trend: "positive"
};


/***/ }),

/***/ 8424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
// ** Next Import

// ! To avoid 'Window is not defined' error
const ReactApexcharts = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\@core\\components\\react-apexcharts\\index.js -> " + "react-apexcharts"
        ]
    },
    ssr: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactApexcharts);


/***/ }),

/***/ 1238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4100);
/* harmony import */ var mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_core_components_react_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8424);









const BarGraphReport = ({ data , closeDate  })=>{
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // Function to get the week label for a given date (Monday to Sunday)
    const getWeekLabel = (date)=>{
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay() + 1) // Monday
        ;
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6) // Sunday
        ;
        const options = {
            month: "short",
            day: "numeric"
        };
        return `${startOfWeek.toLocaleDateString("en-US", options)} - ${endOfWeek.toLocaleDateString("en-US", options)}`;
    };
    // Initialize weekly usage data
    var weeklyUsageData = Array.from({
        length: 7
    }, (_, index)=>{
        const currentDate = new Date(closeDate) // Using closeDate instead of currentDate
        ;
        const closestMonday = new Date(currentDate);
        closestMonday.setDate(currentDate.getDate() - currentDate.getDay() + 1) // Closest Monday to closeDate
        ;
        closestMonday.setDate(closestMonday.getDate() - index * 7) // Adjust for past weeks
        ;
        const weekStart = new Date(closestMonday);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6) // Calculate end of the week
        ;
        return {
            weekLabel: getWeekLabel(weekStart),
            startDate: weekStart,
            endDate: weekEnd,
            usage: 0
        };
    }).reverse() // Reverse to have the oldest week first
    ;
    // Calculate usage per week based on startOfDayQty and endOfDayQty
    data.forEach((item)=>{
        const itemDate = new Date(item.closeDate);
        // Find the matching week in weeklyUsageData
        const matchingWeek = weeklyUsageData.find((week)=>itemDate >= week.startDate && itemDate <= week.endDate);
        if (matchingWeek) {
            // Calculate usage based on start date and end date of the week
            const usage = item.startOfDayQty - item.endOfDayQty;
            matchingWeek.usage += usage;
        }
    });
    const options = {
        chart: {
            type: "line",
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        stroke: {
            width: 2,
            curve: "smooth",
            colors: [
                theme.palette.primary.main
            ]
        },
        markers: {
            size: 5,
            colors: [
                theme.palette.primary.main
            ],
            strokeColors: theme.palette.background.paper,
            strokeWidth: 2
        },
        grid: {
            strokeDashArray: 7,
            padding: {
                top: -1,
                right: 0,
                left: -12,
                bottom: 5
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: [
            theme.palette.primary.main
        ],
        xaxis: {
            categories: weeklyUsageData.map((item)=>item.weekLabel),
            tickPlacement: "on",
            labels: {
                show: true,
                style: {
                    fontSize: "12px"
                }
            },
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true
            }
        },
        yaxis: {
            show: true,
            tickAmount: 4,
            labels: {
                offsetX: -17,
                formatter: (value)=>`${value > 999 ? `${(value / 1000).toFixed(0)}` : value} grams`
            }
        },
        tooltip: {
            y: {
                formatter: (value)=>`${value} grams`
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_4___default()), {
                title: "Last 7 Weeks Usage",
                titleTypographyProps: {
                    sx: {
                        lineHeight: "2rem !important",
                        letterSpacing: "0.15px !important"
                    }
                },
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                    size: "small",
                    "aria-label": "settings",
                    className: "card-more-options",
                    sx: {
                        color: "text.secondary"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_7___default()), {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    "& .apexcharts-xcrosshairs.apexcharts-active": {
                        opacity: 0
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_react_apexcharts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    type: "line",
                    height: 315,
                    options: options,
                    series: [
                        {
                            data: weeklyUsageData.map((item)=>item.usage)
                        }
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarGraphReport);


/***/ })

};
;