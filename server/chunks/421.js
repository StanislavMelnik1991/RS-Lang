"use strict";
exports.id = 421;
exports.ids = [421];
exports.modules = {

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const GithubButton = ({
  label,
  href
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
  label: label,
  bg: 'purple.400',
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: href,
    isExternal: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
      borderRadius: '50%',
      width: 50,
      height: 50,
      alt: label,
      src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    })
  })
});

const Footer = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
  bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.50', 'gray.900'),
  color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.700', 'gray.200'),
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Container, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack,
    maxW: '6xl',
    py: 4,
    direction: {
      base: 'column',
      md: 'row'
    },
    spacing: 4,
    justify: {
      base: 'center',
      md: 'space-between'
    },
    align: {
      base: 'center',
      md: 'center'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
      href: "https://rs.school/js/",
      isExternal: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: '/rs_school_js.svg',
        alt: "RSSchool Logo",
        width: 100,
        height: 50
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
      children: "\xA9 2022 Powered by RSSchool. All rights reserved"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
      direction: 'row',
      spacing: 6,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(GithubButton, {
        label: 'Alex',
        href: 'https://github.com/alexger95'
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(GithubButton, {
        label: 'Ksu',
        href: 'https://github.com/KseniyaMelnik'
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(GithubButton, {
        label: 'Stas',
        href: 'https://github.com/StanislavMelnik1991'
      })]
    })]
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(513);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Navigation/index.ts
const NAV_ITEMS = [{
  label: 'Учебник',
  href: '/textbook'
}, {
  label: 'Игры',
  children: [{
    label: 'Аудиовызов',
    subLabel: 'Улучшай восприятие речи на слух',
    href: '#'
  }, {
    label: 'Спринт',
    subLabel: 'Повторяй изученные слова',
    href: '/sprint'
  }]
}, {
  label: 'Статистика',
  href: '/stats'
}];
/* harmony default export */ const Navigation = (NAV_ITEMS);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navigation/DesktopSubNav/index.tsx





const DesktopSubNav = ({
  label,
  href,
  subLabel
}) => /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
  href: href,
  role: 'group',
  display: 'block',
  p: 2,
  rounded: 'md',
  _hover: {
    bg: (0,react_.useColorModeValue)('pink.50', 'gray.900')
  },
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
    direction: 'row',
    align: 'center',
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        transition: 'all .3s ease',
        _groupHover: {
          color: 'pink.400'
        },
        fontWeight: 500,
        children: label
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontSize: 'sm',
        children: subLabel
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      transition: 'all .3s ease',
      transform: 'translateX(-10px)',
      opacity: 0,
      _groupHover: {
        opacity: '100%',
        transform: 'translateX(0)'
      },
      justify: 'flex-end',
      align: 'center',
      flex: 1,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
        color: 'pink.400',
        w: 5,
        h: 5,
        as: icons_.ChevronRightIcon
      })
    })]
  })
});

/* harmony default export */ const Navigation_DesktopSubNav = (DesktopSubNav);
;// CONCATENATED MODULE: ./components/Navigation/DesktopNav/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const DesktopNav = () => {
  const linkColor = (0,react_.useColorModeValue)('gray.600', 'gray.200');
  const linkHoverColor = (0,react_.useColorModeValue)('gray.800', 'white');
  const popoverContentBgColor = (0,react_.useColorModeValue)('white', 'gray.800');
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
    direction: 'row',
    spacing: 4,
    alignItems: 'center',
    children: Navigation.map(navItem => /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover, {
        trigger: 'hover',
        placement: 'bottom-start',
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.PopoverTrigger, {
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
            p: 2,
            href: navItem.href ?? '#',
            fontSize: 'lg',
            fontWeight: 500,
            color: linkColor,
            _hover: {
              textDecoration: 'none',
              color: linkHoverColor
            },
            children: navItem.label
          })
        }), navItem.children && /*#__PURE__*/jsx_runtime_.jsx(react_.PopoverContent, {
          border: 0,
          boxShadow: 'xl',
          bg: popoverContentBgColor,
          p: 4,
          rounded: 'xl',
          minW: 'sm',
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
            children: navItem.children.map(child => /*#__PURE__*/jsx_runtime_.jsx(Navigation_DesktopSubNav, _objectSpread({}, child), child.label))
          })
        })]
      })
    }, navItem.label))
  });
};

/* harmony default export */ const Navigation_DesktopNav = (DesktopNav);
;// CONCATENATED MODULE: ./components/Navigation/MobileNav/index.tsx
function MobileNav_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function MobileNav_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? MobileNav_ownKeys(Object(source), !0).forEach(function (key) { MobileNav_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : MobileNav_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MobileNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MobileNavItem = ({
  label,
  children,
  href
}) => {
  const {
    isOpen,
    onToggle
  } = (0,react_.useDisclosure)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
    spacing: 4,
    onClick: children && onToggle,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      py: 2,
      as: react_.Link,
      href: href ?? '#',
      justify: 'space-between',
      align: 'center',
      _hover: {
        textDecoration: 'none'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontWeight: 600,
        color: (0,react_.useColorModeValue)('gray.600', 'gray.200'),
        children: label
      }), children && /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
        as: icons_.ChevronDownIcon,
        transition: 'all .25s ease-in-out',
        transform: isOpen ? 'rotate(180deg)' : '',
        w: 6,
        h: 6
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Collapse, {
      in: isOpen,
      animateOpacity: true,
      style: {
        marginTop: '0!important'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
        mt: 2,
        pl: 4,
        borderLeft: 1,
        borderStyle: 'solid',
        borderColor: (0,react_.useColorModeValue)('gray.200', 'gray.700'),
        align: 'start',
        children: children && children.map(child => /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
          py: 2,
          href: child.href,
          children: child.label
        }, child.label))
      })
    })]
  });
};

const MobileNav = () => /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
  bg: (0,react_.useColorModeValue)('white', 'gray.800'),
  p: 4,
  display: {
    md: 'none'
  },
  children: Navigation.map(navItem => /*#__PURE__*/jsx_runtime_.jsx(MobileNavItem, MobileNav_objectSpread({}, navItem), navItem.label))
});

/* harmony default export */ const Navigation_MobileNav = (MobileNav);
// EXTERNAL MODULE: ./hooks/redux.ts
var redux = __webpack_require__(919);
// EXTERNAL MODULE: ./store/reducers/AuthSlice.ts
var AuthSlice = __webpack_require__(672);
;// CONCATENATED MODULE: ./components/Header/index.tsx











const Header = () => {
  const {
    isOpen,
    onToggle
  } = (0,react_.useDisclosure)();
  const dispatch = (0,redux/* useAppDispatch */.T)();
  const {
    isLoggedIn,
    name
  } = (0,redux/* useAppSelector */.C)(state => state.authReducer);

  const logout = () => {
    dispatch(AuthSlice/* authSlice.actions.logout */.G.actions.logout());
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "RS Lang"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/dictionary.svg"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        bg: (0,react_.useColorModeValue)('white', 'gray.800'),
        color: (0,react_.useColorModeValue)('gray.600', 'white'),
        minH: '60px',
        py: {
          base: 2
        },
        px: {
          base: 4
        },
        borderBottom: 1,
        borderStyle: 'solid',
        borderColor: (0,react_.useColorModeValue)('gray.200', 'gray.900'),
        align: 'center',
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
          flex: {
            base: 1,
            md: 'auto'
          },
          ml: {
            base: -2
          },
          display: {
            base: 'flex',
            md: 'none'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
            onClick: onToggle,
            icon: isOpen ? /*#__PURE__*/jsx_runtime_.jsx(icons_.CloseIcon, {
              w: 3,
              h: 3
            }) : /*#__PURE__*/jsx_runtime_.jsx(icons_.HamburgerIcon, {
              w: 5,
              h: 5
            }),
            variant: 'ghost',
            "aria-label": 'Toggle Navigation'
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          flex: {
            base: 1
          },
          justify: {
            base: 'center',
            md: 'start'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
            href: '/',
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
              src: "/dictionary.svg",
              alt: "Logo",
              width: 100,
              height: 50
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
            display: {
              base: 'none',
              md: 'flex'
            },
            ml: 10,
            children: /*#__PURE__*/jsx_runtime_.jsx(Navigation_DesktopNav, {})
          })]
        }), !isLoggedIn && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
          flex: {
            base: 1,
            md: 0
          },
          justify: 'flex-end',
          direction: 'row',
          spacing: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            as: 'a',
            fontSize: 'lg',
            fontWeight: 400,
            variant: 'link',
            href: '/login',
            children: "\u0412\u043E\u0439\u0442\u0438"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            display: {
              base: 'none',
              md: 'inline-flex'
            },
            as: 'a',
            fontSize: 'lg',
            fontWeight: 600,
            color: 'white',
            bg: 'purple.400',
            href: '/sign-up',
            _hover: {
              bg: 'purple.300'
            },
            children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
          })]
        }), isLoggedIn && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
          flex: {
            base: 1,
            md: 0
          },
          justify: 'flex-end',
          direction: 'row',
          spacing: 6,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
            name: name,
            bg: 'purple.300'
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            as: 'a',
            fontSize: 'lg',
            fontWeight: 400,
            variant: 'link',
            onClick: logout,
            children: "\u0412\u044B\u0445\u043E\u0434"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Collapse, {
        in: isOpen,
        animateOpacity: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Navigation_MobileNav, {})
      })]
    })]
  });
};

/* harmony default export */ const components_Header = (Header);

/***/ }),

/***/ 919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ })

};
;