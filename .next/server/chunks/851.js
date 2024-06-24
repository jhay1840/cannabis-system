"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MemberWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/Fab"
var Fab_ = __webpack_require__(3661);
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "mdi-material-ui/ArrowUp"
var ArrowUp_ = __webpack_require__(6206);
var ArrowUp_default = /*#__PURE__*/__webpack_require__.n(ArrowUp_);
// EXTERNAL MODULE: ./src/configs/themeConfig.js
var themeConfig = __webpack_require__(5193);
// EXTERNAL MODULE: ./src/@core/layouts/components/vertical/appBar/index.js
var appBar = __webpack_require__(6188);
// EXTERNAL MODULE: ./src/@core/layouts/components/vertical/navigation/index.js + 8 modules
var navigation = __webpack_require__(229);
// EXTERNAL MODULE: ./src/@core/layouts/components/shared-components/footer/index.js + 1 modules
var footer = __webpack_require__(4397);
// EXTERNAL MODULE: ./src/@core/components/scroll-to-top/index.js
var scroll_to_top = __webpack_require__(5267);
// EXTERNAL MODULE: ./src/@core/styles/libs/react-datepicker/index.js
var react_datepicker = __webpack_require__(8745);
;// CONCATENATED MODULE: ./src/@core/layouts/MemberLayout.js
// ** React Imports


// ** MUI Imports



// ** Icons Imports

// ** Theme Config Import

// ** Components




// ** Styled Component

const VerticalLayoutWrapper = (0,styles_.styled)("div")({
    height: "100%",
    display: "flex"
});
const MainContentWrapper = (0,styles_.styled)((Box_default()))({
    flexGrow: 1,
    minWidth: 0,
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
});
const ContentWrapper = (0,styles_.styled)("main")(({ theme  })=>({
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(6),
        transition: "padding .25s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const MemberLayout = (props)=>{
    // ** Props
    const { settings , children , scrollToTop  } = props;
    // ** Vars
    const { contentWidth  } = settings;
    const navWidth = themeConfig/* default.navigationSize */.Z.navigationSize;
    // ** States
    const { 0: navVisible , 1: setNavVisible  } = (0,external_react_.useState)(false);
    // ** Toggle Functions
    const toggleNavVisibility = ()=>setNavVisible(!navVisible);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(VerticalLayoutWrapper, {
                className: "layout-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navigation/* default */.Z, {
                        navWidth: navWidth,
                        navVisible: navVisible,
                        setNavVisible: setNavVisible,
                        toggleNavVisibility: toggleNavVisibility,
                        ...props
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContentWrapper, {
                        className: "layout-content-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(appBar/* default */.Z, {
                                toggleNavVisibility: toggleNavVisibility,
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContentWrapper, {
                                className: "layout-page-content",
                                sx: {
                                    ...contentWidth === "boxed" && {
                                        mx: "auto",
                                        "@media (min-width:1440px)": {
                                            maxWidth: 1440
                                        },
                                        "@media (min-width:1200px)": {
                                            maxWidth: "100%"
                                        }
                                    }
                                },
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker/* default */.Z, {
                                sx: {
                                    zIndex: 11
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    id: "react-datepicker-portal"
                                })
                            })
                        ]
                    })
                ]
            }),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top/* default */.Z, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowUp_default()), {})
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_MemberLayout = (MemberLayout);

// EXTERNAL MODULE: external "mdi-material-ui/AccountCogOutline"
var AccountCogOutline_ = __webpack_require__(2542);
// EXTERNAL MODULE: external "mdi-material-ui/Account"
var Account_ = __webpack_require__(9922);
var Account_default = /*#__PURE__*/__webpack_require__.n(Account_);
// EXTERNAL MODULE: external "mdi-material-ui/HomeOutline"
var HomeOutline_ = __webpack_require__(2350);
var HomeOutline_default = /*#__PURE__*/__webpack_require__.n(HomeOutline_);
// EXTERNAL MODULE: external "mdi-material-ui/ClipboardListOutline"
var ClipboardListOutline_ = __webpack_require__(2382);
// EXTERNAL MODULE: external "mdi-material-ui/Cog"
var Cog_ = __webpack_require__(5489);
;// CONCATENATED MODULE: ./src/navigation/memberVertical/index.js
// ** Icon imports





const memberVertical_navigation = ()=>{
    return [
        {
            title: "Dashboard",
            icon: (HomeOutline_default()),
            path: "/user/"
        },
        {
            title: "Profile",
            icon: (Account_default()),
            path: "/user/profile"
        }
    ];
};
/* harmony default export */ const memberVertical = (memberVertical_navigation);

// EXTERNAL MODULE: ./src/layouts/components/vertical/AppBarContent.js + 3 modules
var AppBarContent = __webpack_require__(4846);
// EXTERNAL MODULE: ./src/@core/hooks/useSettings.js
var useSettings = __webpack_require__(8073);
;// CONCATENATED MODULE: ./src/components/MemberWrapper.js









const MemberWrapper = ({ children  })=>{
    const { settings , saveSettings  } = (0,useSettings/* useSettings */.r)();
    const router = (0,router_.useRouter)();
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("lg"));
    (0,external_react_.useEffect)(()=>{
        const checkAuthentication = async ()=>{
            // Get the JWT token from session storage
            const token = sessionStorage.getItem("token");
            if (!token) {
                // Redirect to login if token is not found
                router.push("/login");
                return;
            }
            try {
                const response = await external_axios_default().get(`${"http://3.83.33.251:5000"}/api/public/user-type`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Include JWT token in Authorization header
                    },
                    withCredentials: true
                });
                console.log(response.data);
                if (response.data !== "member") {
                    router.push("/login") // Redirect to login if not authenticated as a member
                    ;
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                router.push("/login") // Redirect to login in case of error
                ;
            }
        };
        checkAuthentication();
    }, [
        router
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(layouts_MemberLayout, {
        hidden: hidden,
        settings: "boxed",
        saveSettings: saveSettings,
        verticalNavItems: memberVertical(),
        verticalAppBarContent: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(AppBarContent/* default */.Z, {
                hidden: hidden,
                settings: settings,
                saveSettings: saveSettings,
                toggleNavVisibility: props.toggleNavVisibility
            }),
        children: children
    });
};
/* harmony default export */ const components_MemberWrapper = (MemberWrapper);


/***/ })

};
;