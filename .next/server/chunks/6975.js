"use strict";
exports.id = 6975;
exports.ids = [6975];
exports.modules = {

/***/ 5267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1528);
/* harmony import */ var _mui_material_Zoom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Zoom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4156);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
// ** MUI Imports




const ScrollToTopStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        zIndex: 11,
        position: "fixed",
        right: theme.spacing(6),
        bottom: theme.spacing(10)
    }));
const ScrollToTop = (props)=>{
    // ** Props
    const { children , className  } = props;
    // ** init trigger
    const trigger = _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector("body");
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Zoom__WEBPACK_IMPORTED_MODULE_1___default()), {
        in: trigger,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);


/***/ }),

/***/ 4591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J6": () => (/* binding */ SettingsContext),
/* harmony export */   "ix": () => (/* binding */ SettingsConsumer),
/* harmony export */   "mu": () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5193);
// ** React Imports


// ** ThemeConfig Import

const initialSettings = {
    themeColor: "primary",
    mode: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].mode */ .Z.mode,
    contentWidth: src_configs_themeConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].contentWidth */ .Z.contentWidth
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    saveSettings: ()=>null,
    settings: initialSettings
});
const SettingsProvider = ({ children  })=>{
    // ** State
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        ...initialSettings
    });
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    });
};
const SettingsConsumer = SettingsContext.Consumer;


/***/ }),

/***/ 8073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_core_context_settingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4591);


const useSettings = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(src_core_context_settingsContext__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J6);


/***/ }),

/***/ 4397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/FooterContent.js
// ** MUI Imports





const FooterContent = ()=>{
    // ** Var
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("md"));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                sx: {
                    mr: 2
                },
                children: [
                    `© ${new Date().getFullYear()}, Made `,
                    ` by `,
                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        target: "_blank",
                        href: "https://aadynamics.co.za/",
                        children: "AA Dynamics"
                    })
                ]
            }),
            hidden ? null : /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    "& :not(:last-child)": {
                        mr: 4
                    }
                }
            })
        ]
    });
};
/* harmony default export */ const footer_FooterContent = (FooterContent);

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/index.js
// ** MUI Imports



// ** Footer Content Component

const Footer = (props)=>{
    // ** Props
    const { settings , footerContent: userFooterContent  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "footer",
        className: "layout-footer",
        sx: {
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            className: "footer-content-container",
            sx: {
                width: "100%",
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                padding: theme.spacing(4, 6),
                ...contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                        maxWidth: 1440
                    }
                }
            },
            children: userFooterContent ? userFooterContent(props) : /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterContent, {})
        })
    });
};
/* harmony default export */ const footer = (Footer);


/***/ }),

/***/ 6188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
// ** MUI Imports




const AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
        transition: "none",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 6),
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const Toolbar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default()))(({ theme  })=>({
        width: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: `${theme.spacing(0)} !important`,
        minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
        transition: "padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out"
    }));
const LayoutAppBar = (props)=>{
    // ** Props
    const { settings , verticalAppBarContent: userVerticalAppBarContent  } = props;
    // ** Hooks
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppBar, {
        elevation: 0,
        color: "default",
        className: "layout-navbar",
        position: "static",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toolbar, {
            className: "navbar-content-container",
            sx: {
                ...contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                        maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
                    }
                }
            },
            children: userVerticalAppBarContent && userVerticalAppBarContent(props) || null
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutAppBar);


/***/ }),

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "react-perfect-scrollbar"
var external_react_perfect_scrollbar_ = __webpack_require__(5162);
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_);
// EXTERNAL MODULE: external "@mui/material/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__(4180);
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/Drawer.js
// ** MUI Imports



const SwipeableDrawer = (0,styles_.styled)((SwipeableDrawer_default()))({
    overflowX: "hidden",
    transition: "width .25s ease-in-out",
    "& ul": {
        listStyle: "none"
    },
    "& .MuiListItem-gutters": {
        paddingLeft: 4,
        paddingRight: 4
    },
    "& .MuiDrawer-paper": {
        left: "unset",
        right: "unset",
        overflowX: "hidden",
        transition: "width .25s ease-in-out, box-shadow .25s ease-in-out"
    }
});
const Drawer = (props)=>{
    // ** Props
    const { hidden , children , navWidth , navVisible , setNavVisible  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // Drawer Props for Mobile & Tablet screens
    const MobileDrawerProps = {
        open: navVisible,
        onOpen: ()=>setNavVisible(true),
        onClose: ()=>setNavVisible(false),
        ModalProps: {
            keepMounted: true // Better open performance on mobile.
        }
    };
    // Drawer Props for Desktop screens
    const DesktopDrawerProps = {
        open: true,
        onOpen: ()=>null,
        onClose: ()=>null
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SwipeableDrawer, {
        className: "layout-vertical-nav",
        variant: hidden ? "temporary" : "permanent",
        ...hidden ? {
            ...MobileDrawerProps
        } : {
            ...DesktopDrawerProps
        },
        PaperProps: {
            sx: {
                width: navWidth
            }
        },
        sx: {
            width: navWidth,
            "& .MuiDrawer-paper": {
                borderRight: 0,
                backgroundColor: theme.palette.background.default
            }
        },
        children: children
    });
};
/* harmony default export */ const navigation_Drawer = (Drawer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(8369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: ./src/configs/themeConfig.js
var themeConfig = __webpack_require__(5193);
;// CONCATENATED MODULE: ./src/layouts/components/UserIcon.js

const UserIcon = (props)=>{
    // ** Props
    const { icon , iconProps  } = props;
    const IconTag = icon;
    let styles;
    /* styles = {
      color: 'red',
      fontSize: '2rem'
    } */ // @ts-ignore
    return /*#__PURE__*/ jsx_runtime_.jsx(IconTag, {
        ...iconProps,
        style: {
            ...styles
        }
    });
};
/* harmony default export */ const components_UserIcon = (UserIcon);

;// CONCATENATED MODULE: ./src/@core/layouts/utils.js
/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */ const handleURLQueries = (router, path)=>{
    if (Object.keys(router.query).length && path) {
        const arr = Object.keys(router.query);
        return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]]) && path !== "/";
    }
    return false;
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavLink.js
// ** Next Imports



// ** MUI Imports







// ** Configs Import

// ** Custom Components Imports

// ** Utils

// ** Styled Components
const MenuNavLink = (0,styles_.styled)((ListItemButton_default()))(({ theme  })=>({
        width: "100%",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        color: theme.palette.text.primary,
        padding: theme.spacing(2.25, 3.5),
        transition: "opacity .25s ease-in-out",
        "&.active, &.active:hover": {
            boxShadow: theme.shadows[3],
            backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
        },
        "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
            color: `${theme.palette.common.white} !important`
        }
    }));
const MenuItemTextMetaWrapper = (0,styles_.styled)((Box_default()))({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "opacity .25s ease-in-out",
    ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
        overflow: "hidden"
    }
});
const VerticalNavLink = ({ item , navVisible , toggleNavVisibility  })=>{
    // ** Hooks
    const router = (0,router_.useRouter)();
    const IconTag = item.icon;
    const isNavLinkActive = ()=>{
        if (router.pathname === item.path || handleURLQueries(router, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
        disablePadding: true,
        className: "nav-link",
        disabled: item.disabled || false,
        sx: {
            mt: 1.5,
            px: "0 !important"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            passHref: true,
            href: item.path === undefined ? "/" : `${item.path}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuNavLink, {
                component: "a",
                className: isNavLinkActive() ? "active" : "",
                ...item.openInNewTab ? {
                    target: "_blank"
                } : null,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (navVisible) {
                        toggleNavVisibility();
                    }
                },
                sx: {
                    pl: 5.5,
                    ...item.disabled ? {
                        pointerEvents: "none"
                    } : {
                        cursor: "pointer"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                        sx: {
                            mr: 2.5,
                            color: "text.primary",
                            transition: "margin .25s ease-in-out"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                            icon: IconTag
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextMetaWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
                                    noWrap: true
                                },
                                children: item.title
                            }),
                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item.badgeContent,
                                color: item.badgeColor || "primary",
                                sx: {
                                    height: 20,
                                    fontWeight: 500,
                                    marginLeft: 1.25,
                                    "& .MuiChip-label": {
                                        px: 1.5,
                                        textTransform: "capitalize"
                                    }
                                }
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavLink = (VerticalNavLink);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/ListSubheader"
var ListSubheader_ = __webpack_require__(9685);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavSectionTitle.js
// ** MUI Imports





// ** Styled Components
const ListSubheader = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
        component: "li",
        ...props
    }))(({ theme  })=>({
        lineHeight: 1,
        display: "flex",
        position: "relative",
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(2),
        backgroundColor: "transparent",
        transition: "padding-left .25s ease-in-out"
    }));
const TypographyHeaderText = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontSize: "0.75rem",
        lineHeight: "normal",
        letterSpacing: "0.21px",
        textTransform: "uppercase",
        color: theme.palette.text.disabled,
        fontWeight: theme.typography.fontWeightMedium
    }));
const VerticalNavSectionTitle = (props)=>{
    // ** Props
    const { item  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(ListSubheader, {
        className: "nav-section-title",
        sx: {
            px: 0,
            py: 1.75,
            color: theme.palette.text.disabled,
            "& .MuiDivider-root:before, & .MuiDivider-root:after, & hr": {
                borderColor: `rgba(${theme.palette.customColors.main}, 0.12)`
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
            textAlign: "left",
            sx: {
                m: 0,
                width: "100%",
                lineHeight: "normal",
                textTransform: "uppercase",
                "&:before, &:after": {
                    top: 7,
                    transform: "none"
                },
                "& .MuiDivider-wrapper": {
                    px: 2.5,
                    fontSize: "0.75rem",
                    letterSpacing: "0.21px"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(TypographyHeaderText, {
                noWrap: true,
                children: item.sectionTitle
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavSectionTitle = (VerticalNavSectionTitle);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavItems.js
// ** Custom Menu Components




const resolveNavItemComponent = (item)=>{
    if (item.sectionTitle) return navigation_VerticalNavSectionTitle;
    return navigation_VerticalNavLink;
};
const VerticalNavItems = (props)=>{
    // ** Props
    const { verticalNavItems  } = props;
    const RenderMenuItems = verticalNavItems?.map((item, index)=>{
        const TagName = resolveNavItemComponent(item);
        return /*#__PURE__*/ (0,external_react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    });
};
/* harmony default export */ const navigation_VerticalNavItems = (VerticalNavItems);

;// CONCATENATED MODULE: ./public/images/logos/bornhigh.svg
/* harmony default export */ const bornhigh = ({"src":"/_next/static/media/bornhigh.f464762c.svg","height":80,"width":200});
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavHeader.js
// ** Next Import


// ** MUI Imports



// ** Configs

// ** Logo

// ** Styled Components
const MenuHeaderWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: theme.spacing(4.5),
        transition: "padding .25s ease-in-out",
        minHeight: theme.mixins.toolbar.minHeight
    }));
const HeaderTitle = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        lineHeight: "normal",
        textTransform: "uppercase",
        color: theme.palette.text.primary,
        transition: "opacity .25s ease-in-out, margin .25s ease-in-out"
    }));
const StyledLink = (0,styles_.styled)("a")({
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
});
const VerticalNavHeader = (props)=>{
    // ** Props
    const { verticalNavMenuBranding: userVerticalNavMenuBranding  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuHeaderWrapper, {
        className: "nav-header",
        sx: {
            pl: 6
        },
        children: userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: themeConfig/* default.logoPath */.Z.logoPath,
                    alt: "bornhigh logo"
                })
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavHeader = (VerticalNavHeader);

// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.js
var hex_to_rgba = __webpack_require__(1946);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/index.js
// ** React Import


// ** MUI Import



// ** Third Party Components

// ** Component Imports



// ** Util Import

const StyledBoxForShadow = (0,styles_.styled)((Box_default()))({
    top: 50,
    left: -8,
    zIndex: 2,
    height: 75,
    display: "none",
    position: "absolute",
    pointerEvents: "none",
    width: "calc(100% + 15px)",
    "&.d-block": {
        display: "block"
    }
});
const Navigation = (props)=>{
    // ** Props
    const { hidden , afterVerticalNavMenuContent , beforeVerticalNavMenuContent , verticalNavMenuContent: userVerticalNavMenuContent  } = props;
    // ** States
    const { 0: groupActive , 1: setGroupActive  } = (0,external_react_.useState)([]);
    const { 0: currentActiveGroup , 1: setCurrentActiveGroup  } = (0,external_react_.useState)([]);
    // ** Ref
    const shadowRef = (0,external_react_.useRef)(null);
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Fixes Navigation InfiniteScroll
    const handleInfiniteScroll = (ref)=>{
        if (ref) {
            // @ts-ignore
            ref._getBoundingClientRect = ref.getBoundingClientRect;
            ref.getBoundingClientRect = ()=>{
                // @ts-ignore
                const original = ref._getBoundingClientRect();
                return {
                    ...original,
                    height: Math.floor(original.height)
                };
            };
        }
    };
    // ** Scroll Menu
    const scrollMenu = (container)=>{
        container = hidden ? container.target : container;
        if (shadowRef && container.scrollTop > 0) {
            // @ts-ignore
            if (!shadowRef.current.classList.contains("d-block")) {
                // @ts-ignore
                shadowRef.current.classList.add("d-block");
            }
        } else {
            // @ts-ignore
            shadowRef.current.classList.remove("d-block");
        }
    };
    const ScrollWrapper = hidden ? (Box_default()) : (external_react_perfect_scrollbar_default());
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(navigation_Drawer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavHeader, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxForShadow, {
                ref: shadowRef,
                sx: {
                    background: `linear-gradient(${theme.palette.background.default} 40%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.1)} 95%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.05)})`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: "100%",
                    position: "relative",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollWrapper, {
                    containerRef: (ref)=>handleInfiniteScroll(ref),
                    ...hidden ? {
                        onScroll: (container)=>scrollMenu(container),
                        sx: {
                            height: "100%",
                            overflowY: "auto",
                            overflowX: "hidden"
                        }
                    } : {
                        options: {
                            wheelPropagation: false
                        },
                        onScrollY: (container)=>scrollMenu(container)
                    },
                    children: [
                        beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            },
                            children: userVerticalNavMenuContent ? userVerticalNavMenuContent(props) : /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                className: "nav-items",
                                sx: {
                                    transition: "padding .25s ease",
                                    pr: 4.5
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                                    groupActive: groupActive,
                                    setGroupActive: setGroupActive,
                                    currentActiveGroup: currentActiveGroup,
                                    setCurrentActiveGroup: setCurrentActiveGroup,
                                    ...props
                                })
                            })
                        })
                    ]
                })
            }),
            afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null
        ]
    });
};
/* harmony default export */ const navigation = (Navigation);


/***/ }),

/***/ 5193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const themeConfig = {
    // ** Layout Configs
    templateName: "Born high" /* App Name */ ,
    mode: "light" /* light | dark */ ,
    contentWidth: "boxed" /* full | boxed */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    menuTextTruncate: true,
    navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false,
    logoPath: "/images/logos/bornhigh.svg" /* true | false */ 
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeConfig);


/***/ }),

/***/ 4846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ vertical_AppBarContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
// EXTERNAL MODULE: external "mdi-material-ui/Menu"
var Menu_ = __webpack_require__(6381);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "mdi-material-ui/Magnify"
var Magnify_ = __webpack_require__(8689);
// EXTERNAL MODULE: external "mdi-material-ui/WeatherNight"
var WeatherNight_ = __webpack_require__(1276);
// EXTERNAL MODULE: external "mdi-material-ui/WeatherSunny"
var WeatherSunny_ = __webpack_require__(1571);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/ModeToggler.js


// ** Icons Imports


const ModeToggler = (props)=>{
    // ** Props
    const { settings , saveSettings  } = props;
    const handleModeChange = (mode)=>{
        saveSettings({
            ...settings,
            mode
        });
    };
    const handleModeToggle = ()=>{
        if (settings.mode === "light") {
            handleModeChange("dark");
        } else {
            handleModeChange("light");
        }
    };
    return /*#__PURE__*/ _jsx(IconButton, {
        color: "inherit",
        "aria-haspopup": "true",
        onClick: handleModeToggle,
        children: settings.mode === "dark" ? /*#__PURE__*/ _jsx(WeatherSunny, {}) : /*#__PURE__*/ _jsx(WeatherNight, {})
    });
};
/* harmony default export */ const shared_components_ModeToggler = ((/* unused pure expression or super */ null && (ModeToggler)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Menu"
var material_Menu_ = __webpack_require__(8125);
var material_Menu_default = /*#__PURE__*/__webpack_require__.n(material_Menu_);
// EXTERNAL MODULE: external "@mui/material/Badge"
var Badge_ = __webpack_require__(5168);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "mdi-material-ui/CogOutline"
var CogOutline_ = __webpack_require__(1453);
var CogOutline_default = /*#__PURE__*/__webpack_require__.n(CogOutline_);
// EXTERNAL MODULE: external "mdi-material-ui/CurrencyUsd"
var CurrencyUsd_ = __webpack_require__(5890);
// EXTERNAL MODULE: external "mdi-material-ui/EmailOutline"
var EmailOutline_ = __webpack_require__(754);
// EXTERNAL MODULE: external "mdi-material-ui/LogoutVariant"
var LogoutVariant_ = __webpack_require__(5788);
var LogoutVariant_default = /*#__PURE__*/__webpack_require__.n(LogoutVariant_);
// EXTERNAL MODULE: external "mdi-material-ui/AccountOutline"
var AccountOutline_ = __webpack_require__(7143);
var AccountOutline_default = /*#__PURE__*/__webpack_require__.n(AccountOutline_);
// EXTERNAL MODULE: external "mdi-material-ui/MessageOutline"
var MessageOutline_ = __webpack_require__(6384);
// EXTERNAL MODULE: external "mdi-material-ui/HelpCircleOutline"
var HelpCircleOutline_ = __webpack_require__(5442);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/UserDropdown.js
// ** React Imports



// ** Next Import

// ** MUI Imports









// ** Icons Imports







// ** Styled Components
const BadgeContentSpan = (0,styles_.styled)("span")(({ theme  })=>({
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
    }));
const UserDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    // ** Hooks
    const router = (0,router_.useRouter)();
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = (url)=>{
        if (url) {
            router.push(url);
        }
        setAnchorEl(null);
    };
    const styles = {
        py: 2,
        px: 4,
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        textDecoration: "none",
        "& svg": {
            fontSize: "1.375rem",
            color: "text.secondary"
        }
    };
    const handleLogout = async ()=>{
        try {
            await external_axios_default().get(`${"http://localhost:5000"}/logout`, {
                withCredentials: true
            });
            sessionStorage.removeItem("token");
            router.push("/login");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                overlap: "circular",
                onClick: handleDropdownOpen,
                sx: {
                    ml: 2,
                    cursor: "pointer"
                },
                badgeContent: /*#__PURE__*/ jsx_runtime_.jsx(BadgeContentSpan, {}),
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    alt: "John Doe",
                    onClick: handleDropdownOpen,
                    sx: {
                        width: 40,
                        height: 40
                    },
                    src: "/images/avatars/1.png"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((material_Menu_default()), {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: ()=>handleDropdownClose(),
                sx: {
                    "& .MuiMenu-paper": {
                        width: 230,
                        marginTop: 4
                    }
                },
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "account-settings",
                            passHref: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: styles,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((AccountOutline_default()), {
                                        sx: {
                                            marginRight: 2
                                        }
                                    }),
                                    "Profile"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        sx: {
                            p: 0
                        },
                        onClick: ()=>handleDropdownClose(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "settings",
                            passHref: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: styles,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((CogOutline_default()), {
                                        sx: {
                                            marginRight: 2
                                        }
                                    }),
                                    "Settings"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        sx: {
                            py: 2
                        },
                        onClick: handleLogout,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((LogoutVariant_default()), {
                                sx: {
                                    marginRight: 2,
                                    fontSize: "1.375rem",
                                    color: "text.secondary"
                                }
                            }),
                            "Logout"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const shared_components_UserDropdown = (UserDropdown);

// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(8369);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
// EXTERNAL MODULE: external "mdi-material-ui/BellOutline"
var BellOutline_ = __webpack_require__(2135);
// EXTERNAL MODULE: external "react-perfect-scrollbar"
var external_react_perfect_scrollbar_ = __webpack_require__(5162);
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/NotificationDropdown.js
// ** React Imports


// ** MUI Imports










// ** Icons Imports

// ** Third Party Components

// ** Styled Menu component
const Menu = (0,styles_.styled)((material_Menu_default()))(({ theme  })=>({
        "& .MuiMenu-paper": {
            width: 380,
            overflow: "hidden",
            marginTop: theme.spacing(4),
            [theme.breakpoints.down("sm")]: {
                width: "100%"
            }
        },
        "& .MuiMenu-list": {
            padding: 0
        }
    }));
// ** Styled MenuItem component
const MenuItem = (0,styles_.styled)((MenuItem_default()))(({ theme  })=>({
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`
    }));
const styles = {
    maxHeight: 349,
    "& .MuiMenuItem-root:last-of-type": {
        border: 0
    }
};
// ** Styled PerfectScrollbar component
const PerfectScrollbar = (0,styles_.styled)((external_react_perfect_scrollbar_default()))({
    ...styles
});
// ** Styled Avatar component
const Avatar = (0,styles_.styled)((Avatar_default()))({
    width: "2.375rem",
    height: "2.375rem",
    fontSize: "1.125rem"
});
// ** Styled component for the title in MenuItems
const MenuItemTitle = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        flex: "1 1 100%",
        overflow: "hidden",
        fontSize: "0.875rem",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        marginBottom: theme.spacing(0.75)
    }));
// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = (0,styles_.styled)((Typography_default()))({
    flex: "1 1 100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
});
const NotificationDropdown = ()=>{
    // ** States
    const { 0: anchorEl , 1: setAnchorEl  } = useState(null);
    // ** Hook
    const hidden = useMediaQuery((theme)=>theme.breakpoints.down("lg"));
    const handleDropdownOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleDropdownClose = ()=>{
        setAnchorEl(null);
    };
    const ScrollWrapper = ({ children  })=>{
        if (hidden) {
            return /*#__PURE__*/ _jsx(Box, {
                sx: {
                    ...styles,
                    overflowY: "auto",
                    overflowX: "hidden"
                },
                children: children
            });
        } else {
            return /*#__PURE__*/ _jsx(PerfectScrollbar, {
                options: {
                    wheelPropagation: false,
                    suppressScrollX: true
                },
                children: children
            });
        }
    };
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx(IconButton, {
                color: "inherit",
                "aria-haspopup": "true",
                onClick: handleDropdownOpen,
                "aria-controls": "customized-menu",
                children: /*#__PURE__*/ _jsx(BellOutline, {})
            }),
            /*#__PURE__*/ _jsxs(Menu, {
                anchorEl: anchorEl,
                open: Boolean(anchorEl),
                onClose: handleDropdownClose,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                children: [
                    /*#__PURE__*/ _jsx(MenuItem, {
                        disableRipple: true,
                        children: /*#__PURE__*/ _jsxs(Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Typography, {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Notifications"
                                }),
                                /*#__PURE__*/ _jsx(Chip, {
                                    size: "small",
                                    label: "8 New",
                                    color: "primary",
                                    sx: {
                                        height: 20,
                                        fontSize: "0.75rem",
                                        fontWeight: 500,
                                        borderRadius: "10px"
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsxs(ScrollWrapper, {
                        children: [
                            /*#__PURE__*/ _jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(Avatar, {
                                            alt: "Flora",
                                            src: "/images/avatars/4.png"
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mx: 4,
                                                flex: "1 1",
                                                display: "flex",
                                                overflow: "hidden",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(MenuItemTitle, {
                                                    children: "Congratulation Flora! \uD83C\uDF89"
                                                }),
                                                /*#__PURE__*/ _jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Won the monthly best seller badge"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "caption",
                                            sx: {
                                                color: "text.disabled"
                                            },
                                            children: "Today"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(Avatar, {
                                            sx: {
                                                color: "common.white",
                                                backgroundColor: "primary.main"
                                            },
                                            children: "VU"
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mx: 4,
                                                flex: "1 1",
                                                display: "flex",
                                                overflow: "hidden",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(MenuItemTitle, {
                                                    children: "New user registered."
                                                }),
                                                /*#__PURE__*/ _jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "5 hours ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "caption",
                                            sx: {
                                                color: "text.disabled"
                                            },
                                            children: "Yesterday"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(Avatar, {
                                            alt: "message",
                                            src: "/images/avatars/5.png"
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mx: 4,
                                                flex: "1 1",
                                                display: "flex",
                                                overflow: "hidden",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(MenuItemTitle, {
                                                    children: "New message received \uD83D\uDC4B\uD83C\uDFFB"
                                                }),
                                                /*#__PURE__*/ _jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "You have 10 unread messages"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "caption",
                                            sx: {
                                                color: "text.disabled"
                                            },
                                            children: "11 Aug"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "paypal",
                                            src: "/images/misc/paypal.png"
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mx: 4,
                                                flex: "1 1",
                                                display: "flex",
                                                overflow: "hidden",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(MenuItemTitle, {
                                                    children: "Paypal"
                                                }),
                                                /*#__PURE__*/ _jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "Received Payment"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "caption",
                                            sx: {
                                                color: "text.disabled"
                                            },
                                            children: "25 May"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx(Avatar, {
                                            alt: "order",
                                            src: "/images/avatars/3.png"
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mx: 4,
                                                flex: "1 1",
                                                display: "flex",
                                                overflow: "hidden",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(MenuItemTitle, {
                                                    children: "Revised Order \uD83D\uDCE6"
                                                }),
                                                /*#__PURE__*/ _jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "New order revised from john"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "caption",
                                            sx: {
                                                color: "text.disabled"
                                            },
                                            children: "19 Mar"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(MenuItem, {
                                onClick: handleDropdownClose,
                                children: /*#__PURE__*/ _jsxs(Box, {
                                    sx: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("img", {
                                            width: 38,
                                            height: 38,
                                            alt: "chart",
                                            src: "/images/misc/chart.png"
                                        }),
                                        /*#__PURE__*/ _jsxs(Box, {
                                            sx: {
                                                mx: 4,
                                                flex: "1 1",
                                                display: "flex",
                                                overflow: "hidden",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ _jsx(MenuItemTitle, {
                                                    children: "Finance report has been generated"
                                                }),
                                                /*#__PURE__*/ _jsx(MenuItemSubtitle, {
                                                    variant: "body2",
                                                    children: "25 hrs ago"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Typography, {
                                            variant: "caption",
                                            sx: {
                                                color: "text.disabled"
                                            },
                                            children: "27 Dec"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(MenuItem, {
                        disableRipple: true,
                        sx: {
                            py: 3.5,
                            borderBottom: 0,
                            borderTop: (theme)=>`1px solid ${theme.palette.divider}`
                        },
                        children: /*#__PURE__*/ _jsx(Button, {
                            fullWidth: true,
                            variant: "contained",
                            onClick: handleDropdownClose,
                            children: "Read All Notifications"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const shared_components_NotificationDropdown = ((/* unused pure expression or super */ null && (NotificationDropdown)));

;// CONCATENATED MODULE: ./src/layouts/components/vertical/AppBarContent.js
// ** MUI Imports






// ** Icons Imports


// ** Components



const AppBarContent = (props)=>{
    // ** Props
    const { hidden , settings , saveSettings , toggleNavVisibility  } = props;
    // ** Hook
    const hiddenSm = useMediaQuery_default()((theme)=>theme.breakpoints.down("sm"));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                className: "actions-left",
                sx: {
                    mr: 2,
                    display: "flex",
                    alignItems: "center"
                },
                children: hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    color: "inherit",
                    onClick: toggleNavVisibility,
                    sx: {
                        ml: -2.75,
                        ...hiddenSm ? {} : {
                            mr: 3.5
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                }) : null
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                className: "actions-right",
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(shared_components_UserDropdown, {})
            })
        ]
    });
};
/* harmony default export */ const vertical_AppBarContent = (AppBarContent);


/***/ })

};
;