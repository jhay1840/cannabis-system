"use strict";
exports.id = 6078;
exports.ids = [6078];
exports.modules = {

/***/ 6078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




const DashboardWrapper = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const checkAuthentication = async ()=>{
            // Get the JWT token from session storage
            const token = sessionStorage.getItem("token");
            if (!token) {
                // Redirect to login if token is not found
                router.push("/login");
                return;
            }
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"http://localhost:5000"}/api/public/user-type`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Include JWT token in Authorization header
                    },
                    withCredentials: true
                });
                console.log(response.data);
                if (response.data === "false") {
                    router.push("/login") // Redirect to login if not authenticated
                    ;
                } else if (response.data === "member") {
                    router.push("/user") // Redirect to user dashboard for members
                    ;
                }
            // Add more conditions for other user types if needed
            } catch (error) {
                console.error("Error checking authentication:", error);
                router.push("/login") // Redirect to login in case of error
                ;
            }
        };
        checkAuthentication();
    }, [
        router
    ]) // Add router to the dependency array
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardWrapper);


/***/ })

};
;