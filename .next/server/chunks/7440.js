exports.id = 7440;
exports.ids = [7440];
exports.modules = {

/***/ 1953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5992);
/* harmony import */ var _mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mdi_material_ui_Close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6603);
/* harmony import */ var mdi_material_ui_Close__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Close__WEBPACK_IMPORTED_MODULE_17__);
// ** React Imports


// ** MUI Imports















// ** Icons Imports

const ImgStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)("img")(({ theme  })=>({
        width: 120,
        height: 120,
        marginRight: theme.spacing(6.25),
        borderRadius: theme.shape.borderRadius
    }));
const ButtonStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_16___default()))(({ theme  })=>({
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "center"
        }
    }));
const ResetButtonStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_16___default()))(({ theme  })=>({
        marginLeft: theme.spacing(4.5),
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginLeft: 0,
            textAlign: "center",
            marginTop: theme.spacing(4)
        }
    }));
const TabAccount = ()=>{
    // ** State
    const { 0: openAlert , 1: setOpenAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: imgSrc , 1: setImgSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/images/avatars/1.png");
    const onChange = (file)=>{
        const reader = new FileReader();
        const { files  } = file.target;
        if (files && files.length !== 0) {
            reader.onload = ()=>setImgSrc(reader.result);
            reader.readAsDataURL(files[0]);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_14___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                container: true,
                spacing: 7,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            marginTop: 4.8,
                            marginBottom: 3
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImgStyled, {
                                    src: imgSrc,
                                    alt: "Profile Pic"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonStyled, {
                                            component: "label",
                                            variant: "contained",
                                            htmlFor: "account-settings-upload-image",
                                            children: [
                                                "Upload New Photo",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    hidden: true,
                                                    type: "file",
                                                    onChange: onChange,
                                                    accept: "image/png, image/jpeg",
                                                    id: "account-settings-upload-image"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResetButtonStyled, {
                                            color: "error",
                                            variant: "outlined",
                                            onClick: ()=>setImgSrc("/images/avatars/1.png"),
                                            children: "Reset"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            variant: "body2",
                                            sx: {
                                                marginTop: 5
                                            },
                                            children: "Allowed PNG or JPEG. Max size of 800K."
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                            fullWidth: true,
                            label: "Username",
                            placeholder: "johnDoe",
                            defaultValue: "johnDoe"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                            fullWidth: true,
                            label: "Name",
                            placeholder: "John Doe",
                            defaultValue: "John Doe"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                            fullWidth: true,
                            type: "email",
                            label: "Email",
                            placeholder: "johnDoe@example.com",
                            defaultValue: "johnDoe@example.com"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15___default()), {
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: "Role"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    label: "Role",
                                    defaultValue: "admin",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "admin",
                                            children: "Admin"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "author",
                                            children: "Author"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "editor",
                                            children: "Editor"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "maintainer",
                                            children: "Maintainer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "subscriber",
                                            children: "Subscriber"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_15___default()), {
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: "Status"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    label: "Status",
                                    defaultValue: "active",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "active",
                                            children: "Active"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "inactive",
                                            children: "Inactive"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            value: "pending",
                                            children: "Pending"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                            fullWidth: true,
                            label: "Company",
                            placeholder: "ABC Pvt. Ltd.",
                            defaultValue: "ABC Pvt. Ltd."
                        })
                    }),
                    openAlert ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            mb: 3
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_5___default()), {
                            severity: "warning",
                            sx: {
                                "& a": {
                                    fontWeight: 400
                                }
                            },
                            action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                                size: "small",
                                color: "inherit",
                                "aria-label": "close",
                                onClick: ()=>setOpenAlert(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_Close__WEBPACK_IMPORTED_MODULE_17___default()), {
                                    fontSize: "inherit"
                                })
                            }),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_12___default()), {
                                    children: "Your email is not confirmed. Please check your inbox."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/",
                                    onClick: (e)=>e.preventDefault(),
                                    children: "Resend Confirmation"
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        item: true,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_16___default()), {
                                variant: "contained",
                                sx: {
                                    marginRight: 3.5
                                },
                                children: "Save Changes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_16___default()), {
                                type: "reset",
                                variant: "outlined",
                                color: "secondary",
                                children: "Reset"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabAccount);


/***/ }),

/***/ 9210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5374);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6096);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6563);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_core_styles_libs_react_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8745);
// ** React Imports


// ** MUI Imports













// ** Third Party Imports

// ** Styled Components

const CustomInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
        inputRef: ref,
        label: "Birth Date",
        fullWidth: true,
        ...props
    });
});
const TabInfo = ()=>{
    // ** State
    const { 0: date , 1: setDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                container: true,
                spacing: 7,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        sx: {
                            marginTop: 4.8
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                            fullWidth: true,
                            multiline: true,
                            label: "Bio",
                            minRows: 2,
                            placeholder: "Bio",
                            defaultValue: "The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant \uD83D\uDE0E, scalable \uD83D\uDE00, and lightning \uD83D\uDE0D fast search and discovery experiences."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_styles_libs_react_datepicker__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_15___default()), {
                                selected: date,
                                showYearDropdown: true,
                                showMonthDropdown: true,
                                id: "account-settings-date",
                                placeholderText: "MM-DD-YYYY",
                                customInput: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomInput, {}),
                                onChange: (date)=>setDate(date)
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                            fullWidth: true,
                            type: "number",
                            label: "Phone",
                            placeholder: "(123) 456-7890"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                            fullWidth: true,
                            label: "Website",
                            placeholder: "https://example.com/",
                            defaultValue: "https://themeselection.com/"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    children: "Country"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    label: "Country",
                                    defaultValue: "USA",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "USA",
                                            children: "USA"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "UK",
                                            children: "UK"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "Australia",
                                            children: "Australia"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "Germany",
                                            children: "Germany"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    id: "form-layouts-separator-multiple-select-label",
                                    children: "Languages"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    multiple: true,
                                    defaultValue: [
                                        "English"
                                    ],
                                    id: "account-settings-multiple-select",
                                    labelId: "account-settings-multiple-select-label",
                                    input: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        label: "Languages",
                                        id: "select-multiple-language"
                                    }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "English",
                                            children: "English"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "French",
                                            children: "French"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "Spanish",
                                            children: "Spanish"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "Portuguese",
                                            children: "Portuguese"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "Italian",
                                            children: "Italian"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "German",
                                            children: "German"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            value: "Arabic",
                                            children: "Arabic"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    sx: {
                                        fontSize: "0.875rem"
                                    },
                                    children: "Gender"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    row: true,
                                    defaultValue: "male",
                                    "aria-label": "gender",
                                    name: "account-settings-info-radio",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            value: "male",
                                            label: "Male",
                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            value: "female",
                                            label: "Female",
                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            value: "other",
                                            label: "Other",
                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_3___default()), {})
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        item: true,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "contained",
                                sx: {
                                    marginRight: 3.5
                                },
                                children: "Save Changes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                type: "reset",
                                variant: "outlined",
                                color: "secondary",
                                onClick: ()=>setDate(null),
                                children: "Reset"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabInfo);


/***/ }),

/***/ 8313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8961);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mdi_material_ui_KeyOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5169);
/* harmony import */ var mdi_material_ui_KeyOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_KeyOutline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(360);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mdi_material_ui_LockOpenOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6996);
/* harmony import */ var mdi_material_ui_LockOpenOutline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_LockOpenOutline__WEBPACK_IMPORTED_MODULE_17__);
// ** React Imports


// ** MUI Imports












// ** Icons Imports




const TabSecurity = ()=>{
    // ** States
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        newPassword: "",
        currentPassword: "",
        showNewPassword: false,
        confirmNewPassword: "",
        showCurrentPassword: false,
        showConfirmNewPassword: false
    });
    // Handle Current Password
    const handleCurrentPasswordChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowCurrentPassword = ()=>{
        setValues({
            ...values,
            showCurrentPassword: !values.showCurrentPassword
        });
    };
    const handleMouseDownCurrentPassword = (event)=>{
        event.preventDefault();
    };
    // Handle New Password
    const handleNewPasswordChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowNewPassword = ()=>{
        setValues({
            ...values,
            showNewPassword: !values.showNewPassword
        });
    };
    const handleMouseDownNewPassword = (event)=>{
        event.preventDefault();
    };
    // Handle Confirm New Password
    const handleConfirmNewPasswordChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowConfirmNewPassword = ()=>{
        setValues({
            ...values,
            showConfirmNewPassword: !values.showConfirmNewPassword
        });
    };
    const handleMouseDownConfirmNewPassword = (event)=>{
        event.preventDefault();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10___default()), {
                sx: {
                    paddingBottom: 0
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                container: true,
                                spacing: 5,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        item: true,
                                        xs: 12,
                                        sx: {
                                            marginTop: 4.75
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    htmlFor: "account-settings-current-password",
                                                    children: "Current Password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    label: "Current Password",
                                                    value: values.currentPassword,
                                                    id: "account-settings-current-password",
                                                    type: values.showCurrentPassword ? "text" : "password",
                                                    onChange: handleCurrentPasswordChange("currentPassword"),
                                                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        position: "end",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            edge: "end",
                                                            "aria-label": "toggle password visibility",
                                                            onClick: handleClickShowCurrentPassword,
                                                            onMouseDown: handleMouseDownCurrentPassword,
                                                            children: values.showCurrentPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_14___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_16___default()), {})
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        item: true,
                                        xs: 12,
                                        sx: {
                                            marginTop: 6
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    htmlFor: "account-settings-new-password",
                                                    children: "New Password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    label: "New Password",
                                                    value: values.newPassword,
                                                    id: "account-settings-new-password",
                                                    onChange: handleNewPasswordChange("newPassword"),
                                                    type: values.showNewPassword ? "text" : "password",
                                                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        position: "end",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            edge: "end",
                                                            onClick: handleClickShowNewPassword,
                                                            "aria-label": "toggle password visibility",
                                                            onMouseDown: handleMouseDownNewPassword,
                                                            children: values.showNewPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_14___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_16___default()), {})
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    htmlFor: "account-settings-confirm-new-password",
                                                    children: "Confirm New Password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    label: "Confirm New Password",
                                                    value: values.confirmNewPassword,
                                                    id: "account-settings-confirm-new-password",
                                                    type: values.showConfirmNewPassword ? "text" : "password",
                                                    onChange: handleConfirmNewPasswordChange("confirmNewPassword"),
                                                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        position: "end",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            edge: "end",
                                                            "aria-label": "toggle password visibility",
                                                            onClick: handleClickShowConfirmNewPassword,
                                                            onMouseDown: handleMouseDownConfirmNewPassword,
                                                            children: values.showConfirmNewPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_14___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_16___default()), {})
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            sm: 6,
                            xs: 12,
                            sx: {
                                display: "flex",
                                marginTop: [
                                    7.5,
                                    2.5
                                ],
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: 183,
                                alt: "avatar",
                                height: 256,
                                src: "/images/pages/pose-m-1.png"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    margin: 0
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            mt: 1.75,
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_KeyOutline__WEBPACK_IMPORTED_MODULE_15___default()), {
                                sx: {
                                    marginRight: 3
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                                variant: "h6",
                                children: "Two-factor authentication"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            mt: 5.75,
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                maxWidth: 368,
                                display: "flex",
                                textAlign: "center",
                                alignItems: "center",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    variant: "rounded",
                                    sx: {
                                        width: 48,
                                        height: 48,
                                        color: "common.white",
                                        backgroundColor: "primary.main"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_LockOpenOutline__WEBPACK_IMPORTED_MODULE_17___default()), {
                                        sx: {
                                            fontSize: "1.75rem"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    sx: {
                                        fontWeight: 600,
                                        marginTop: 3.5,
                                        marginBottom: 3.5
                                    },
                                    children: "Two factor authentication is not enabled yet."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    variant: "body2",
                                    children: "Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. Learn more."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            mt: 11
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                variant: "contained",
                                sx: {
                                    marginRight: 3.5
                                },
                                children: "Save Changes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                type: "reset",
                                variant: "outlined",
                                color: "secondary",
                                onClick: ()=>setValues({
                                        ...values,
                                        currentPassword: "",
                                        newPassword: "",
                                        confirmNewPassword: ""
                                    }),
                                children: "Reset"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabSecurity);


/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;