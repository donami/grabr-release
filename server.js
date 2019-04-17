module.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=25)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("graphql-tag")},function(e,t){e.exports=require("react-apollo")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("@fortawesome/free-solid-svg-icons")},function(e,t){e.exports=require("react-apollo-hooks")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-dom/server")},function(e,t,a){e.exports=a.p+"assets/img/placeholder-image.6af1ec6645410a41d5339508a83b86f9.png"},function(e,t){e.exports=require("react-modal")},function(e,t){},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("@fortawesome/fontawesome-svg-core")},function(e,t){e.exports=require("react-dom")},function(e,t,a){e.exports=a.p+"assets/img/logo.c32aefbfa58d85e6bd2309835ea937e5.png"},function(e,t){e.exports=require("react-image-fallback")},function(e,t,a){e.exports=a.p+"assets/img/loading.7ba725daacaf4be4af44f22da092452b.gif"},function(e,t){e.exports=require("@fortawesome/react-fontawesome")},function(e,t){e.exports=require("apollo-cache-inmemory")},function(e,t){e.exports=require("apollo-client")},function(e,t){e.exports=require("apollo-link")},function(e,t){e.exports=require("apollo-link-error")},function(e,t){e.exports=require("apollo-link-http")},function(e,t){e.exports=require("apollo-link-state")},function(e,t,a){e.exports=a(33)},function(e,t){e.exports=require("cross-fetch/polyfill")},function(e,t){e.exports=require("react-hot-loader")},function(e,t,a){(t=e.exports=a(29)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Gentium+Basic);",""]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600);",""]),t.push([e.i,"*{margin:0}*,html{padding:0}html{border:0;font-family:Poppins,serif;font-size:14px}#root,#root>div,body,html{height:100%}.cursor{cursor:pointer}@keyframes loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes button-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var r=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),l=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[a].concat(l).concat([r]).join("\n")}var i;return[a].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var l=this[r][0];null!=l&&(n[l]=!0)}for(r=0;r<e.length;r++){var i=e[r];null!=i[0]&&n[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),t.push(i))}},t}},function(e,t){e.exports=require("apollo-link-ws")},function(e,t){e.exports=require("apollo-utilities")},function(e,t){e.exports=require("subscriptions-transport-ws")},function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),l=a(2),i=a(5),o=a(8),c=a(7),s=a.n(c),d=a(12),m=a(6),u=(a(27),a(3)),p=a(13),g=a(4);var h=Object(u.withRouter)(class extends n.PureComponent{componentDidUpdate(e){this.props.location!==e.location&&window.scrollTo(0,0)}render(){return this.props.children}});const f=()=>{throw new Error("Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.")},b=r.a.createContext({showModal:f,hideModal:f});var E=a(14),y=a.n(E);const v=Object(n.memo)(({modals:e,container:t=r.a.Fragment})=>y.a.createPortal(r.a.createElement(t,null,Object.keys(e).map(t=>{const a=e[t];return r.a.createElement(a,{key:t})})),document.body)),x=({container:e,children:t})=>{const[a,l]=Object(n.useState)({}),i=Object(n.useCallback)((e,t)=>l(a=>Object.assign({},a,{[e]:t})),[]),o=Object(n.useCallback)(e=>l(t=>{const a=Object.assign({},t);return delete a[e],a}),[]),c=Object(n.useMemo)(()=>({showModal:i,hideModal:o}),[]);return r.a.createElement(b.Provider,{value:c},r.a.createElement(r.a.Fragment,null,t,"undefined"!=typeof document&&r.a.createElement(v,{modals:a,container:e})))},w=(()=>{let e=0;return()=>`${++e}`})(),k=(e,t=[])=>{const a=Object(n.useMemo)(w,[]),r=Object(n.useMemo)(()=>e,t),l=Object(n.useContext)(b),[i,o]=Object(n.useState)(!1),c=Object(n.useCallback)(()=>o(!0),[]),s=Object(n.useCallback)(()=>o(!1),[]);return Object(n.useEffect)(()=>(i?l.showModal(a,r):l.hideModal(a),()=>l.hideModal(a)),[r,i]),[c,s]};a(11);const{default:C,css:I,createGlobalStyle:S,keyframes:j,ThemeProvider:O}=m;var $=C,F=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};const q=r.a.createContext(null),P=e=>r.a.createElement("div",Object.assign({style:{position:"fixed",right:0,top:0}},e)),M=({children:e,onDismiss:t,type:a})=>r.a.createElement(z,{onClick:t,type:a},e),z=$.div.withConfig({componentId:"h1aavh-0"})(["cursor:pointer;font-size:1em;margin:10px;padding:10px;background:#00adde;color:#fff;border-radius:5px;&:hover{opacity:0.5;}",""],({type:e})=>"success"===e?I(["background:#4cb050;"]):"error"===e?I(["background:#e51c24;"]):"warning"===e?I(["background:#ff9700;"]):"info"===e?I(["background:#00adde;"]):null);let N=0;const L=({children:e})=>{const[t,a]=r.a.useState([]),n=e=>{const n=t.filter(t=>t.id!==e);a(n)},l=e=>()=>n(e);return r.a.createElement(q.Provider,{value:{add:e=>{const n={content:e,id:N++};a([...t,n])},remove:n}},e,r.a.createElement(P,null,t.map(e=>{var{content:t,id:a}=e,n=F(e,["content","id"]);return r.a.createElement(M,Object.assign({key:a,Toast:M,type:t.type||"success",onDismiss:l(a)},n),t.message)})))},_=()=>r.a.useContext(q);a(28);const T=S`
  body {
    color: ${e=>e.theme.colors.text};
  }

  a {
    color: ${e=>e.theme.colors.brand};
  }

  /* ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
  } */

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f7498e;
    background-image: -webkit-gradient(linear, 0 0, 0 100%,
                      color-stop(.5, rgba(255, 255, 255, .2)),
                      color-stop(.5, transparent), to(transparent));
  }
`;var A=a(1),R=a.n(A),Q=R.a`
  query AllCategories($root: Boolean, $limit: Int) {
    allCategories(filter: { root: $root, limit: $limit }) {
      id
      title
      root
      parent
      children {
        id
        title
      }
    }
  }
`,D=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};var U=e=>{var{children:t,divided:a=!1,as:n="h3",primary:l=!1,secondary:i=!1,accent:o=!1,brand:c=!1,className:s}=e,d=D(e,["children","divided","as","primary","secondary","accent","brand","className"]);return r.a.createElement(V,Object.assign({as:n,divided:a,primary:l,accent:o,brand:c,secondary:i,className:s?`${s} heading`:"heading"},d),t)};const V=$.h3.withConfig({componentId:"h9s1rl-0"})(["text-transform:uppercase;font-weight:300;",""],e=>{if(e.divided){let t=e.theme.colors.brand;return e.primary?t=e.theme.colors.primary:e.secondary?t=e.theme.colors.secondary:e.accent?t=e.theme.colors.accent:e.brand&&(t=e.theme.colors.brand),I(["position:relative;border-bottom:#eee 1px solid;border-color:rgba(255,255,255,0.1);padding-bottom:",";margin-bottom:",";&::before{content:'';background:",";height:2px;width:40px;position:absolute;bottom:0;left:0;}"],e.theme.spacing.small,e.theme.spacing.small,t)}return null});var G=()=>r.a.createElement(B,{className:"loader"});const B=$.div.withConfig({componentId:"sc-19cq5u9-0"})(["text-align:center;z-index:1000;width:2.28571429rem;height:2.28571429rem;font-size:1em;position:relative;vertical-align:middle;margin:0;left:0;top:0;transform:none;display:block;margin-left:auto;margin-right:auto;&:before,&:after{width:2.28571429rem;height:2.28571429rem;margin:0 0 0 -1.14285714rem;}&:before{position:absolute;content:'';top:0;left:50%;width:100%;height:100%;border-radius:500rem;border:0.2em solid rgba(0,0,0,0.1);}&:after{position:absolute;content:'';top:0;left:50%;width:100%;height:100%;-webkit-animation:loader 0.6s linear;animation:loader 0.6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 transparent transparent;border-style:solid;border-width:0.2em;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent;}"]);var H=({childLimit:e})=>r.a.createElement(l.Query,{query:Q,variables:{root:!0}},({data:t,loading:a})=>a?r.a.createElement(G,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null,r.a.createElement(U,{as:"h3"},"Top Categories")),r.a.createElement(K,null,t.allCategories.map(t=>r.a.createElement(J,{key:t.id},r.a.createElement("h4",null,r.a.createElement(u.Link,{to:`/category/${t.id}`},t.title)),t.children&&t.children.length>0&&r.a.createElement(Y,null,(t.children||[]).slice(0,e||999).map((e,a)=>r.a.createElement(u.Link,{to:`/category/${e.id}`,key:e.id},a<t.children.length-1?`${e.title}, `:e.title))))))));const K=$.ul.withConfig({componentId:"sc-1t56c39-0"})(["list-style:none;h4{font-size:1rem;}a{color:",";text-decoration:none;}"],e=>e.theme.colors.text),W=$.div.withConfig({componentId:"sc-1t56c39-1"})(["background:",";color:#fff;padding:",";"],e=>e.theme.colors.primary,e=>e.theme.spacing.normal),J=$.li.withConfig({componentId:"sc-1t56c39-2"})(["padding:",";border-bottom:1px solid #f1f1f1;h4 a:hover{color:",";}&:last-child{border-bottom:none;}"],e=>e.theme.spacing.normal,e=>e.theme.colors.accent),Y=$.div.withConfig({componentId:"sc-1t56c39-3"})(["font-size:0.8rem;a{&:hover{text-decoration:underline;}}"]);var X=({className:e})=>r.a.createElement(Z,{className:e},"Copyright © 2019 - Grabr.io");const Z=$.div.withConfig({componentId:"sc-1gkkczw-0"})(["padding:",";background-color:",";"],e=>e.theme.spacing.huge,e=>e.theme.colors.darker);var ee=R.a`
  mutation Search($query: String) {
    search(query: $query) @client {
      search
    }
  }
`,te=R.a`
  query($filter: ProductFilter) {
    allProducts(filter: $filter) {
      id
      title
      image
    }
  }
`;var ae=Object(l.compose)(Object(l.graphql)(ee))(({mutate:e,className:t})=>{const[a,i]=Object(n.useState)(""),o=function(e,t){const[a,r]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const a=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(a)}},[e,t]),a}(a,500),c=Object(n.useRef)(null),s=Object(n.useRef)(null);Object(n.useEffect)(()=>{o&&e({variables:{query:o}})},[o]),Object(n.useEffect)(()=>(document.addEventListener("click",d,!1),()=>{document.removeEventListener("click",d,!1)}),[]);const d=e=>{c.current&&!c.current.contains(e.target)&&(i(""),s.current&&(s.current.value=""))};return r.a.createElement(ne,{className:t,ref:c},o&&r.a.createElement(le,null,r.a.createElement("h3",null,"Search results"),r.a.createElement(l.Query,{query:te,variables:{filter:{title_contains:o}}},({data:e,loading:t})=>t?r.a.createElement(G,null):e.allProducts&&!e.allProducts.length?r.a.createElement("p",null,"No matches."):r.a.createElement("ul",null,e.allProducts.slice(0,10).map(e=>r.a.createElement("li",{key:e.id},r.a.createElement(u.Link,{to:`/product/${e.id}`},e.title)))))),r.a.createElement(re,{ref:s,placeholder:"Search...",onChange:e=>i(e.target.value)}))});const ne=$.div.withConfig({componentId:"sc-137b3me-0"})(["position:relative;width:100%;"]),re=$.input.withConfig({componentId:"sc-137b3me-1"})(["padding:0.5em;width:calc(100% - 1em - 2px);border:none;border-radius:",";background-color:#f7f9fa;outline:none;&:focus{outline:none;box-shadow:0 0 0 1px rgba(0,123,255,0.5);}"],e=>e.theme.radius),le=$.div.withConfig({componentId:"sc-137b3me-2"})(["position:absolute;top:45px;width:calc(100% - 30px - 2px);padding:15px;background:#fff;border:"," 1px solid;color:",";a{color:",";}h3{font-weight:300;color:",";text-transform:uppercase;border-bottom:"," 1px solid;padding-bottom:",";margin-bottom:",";}ul{list-style:none;padding:0;margin:0;font-size:1em;}li{margin:"," 0;}"],e=>e.theme.colors.border,e=>e.theme.colors.darkText,e=>e.theme.colors.darkText,e=>e.theme.colors.secondary,e=>e.theme.colors.light,e=>e.theme.spacing.small,e=>e.theme.spacing.small,e=>e.theme.spacing.normal);var ie=a(15),oe=a.n(ie);var ce=({className:e})=>r.a.createElement(se,null,r.a.createElement(me,null,r.a.createElement(ue,null,r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/"},"Sign in")),r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/admin"},"Admin")))),r.a.createElement(de,{className:e},r.a.createElement("div",{className:"logo"},r.a.createElement(u.Link,{to:"/"},r.a.createElement("img",{src:oe.a,alt:"Logo"}))),r.a.createElement(pe,{className:"navigation"},r.a.createElement(l.Query,{query:Q,variables:{root:!0,limit:6}},({data:{allCategories:e},loading:t})=>t||!e?null:r.a.createElement("ul",null,e.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement(u.Link,{to:`/category/${e.id}`},e.title)))))),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement(ae,{className:"search-field"}))));const se=$.div.withConfig({componentId:"sc-14bmzvn-0"})(["background:#f3f3f3;"]),de=$.div.withConfig({componentId:"sc-14bmzvn-1"})(["display:flex;align-items:center;margin-bottom:",";padding:0 ",";color:",";background:#fff;a{color:",";text-decoration:none;}.logo{flex:1;margin-right:50px;img{max-width:140px;}}.navigation{flex:4;}.search-wrapper{flex:2;display:flex;justify-content:flex-end;.search-field{max-width:300px;}}"],e=>e.theme.spacing.normal,e=>e.theme.spacing.normal,e=>e.theme.colors.text,e=>e.theme.colors.text),me=$.div.withConfig({componentId:"sc-14bmzvn-2"})(["display:flex;justify-content:flex-end;align-items:center;height:50px;padding:0 ",";"],e=>e.theme.spacing.normal),ue=$.ul.withConfig({componentId:"sc-14bmzvn-3"})(["display:flex;list-style:none;a{text-decoration:none;}li{margin-right:",";}"],e=>e.theme.spacing.normal),pe=$.div.withConfig({componentId:"sc-14bmzvn-4"})(["a{color:",";text-decoration:none;font-weight:bold;transition:color 300ms ease-in-out;&:hover{color:",";}}ul{list-style:none;display:flex;justify-content:flex-start;li{margin:0 ",";}}"],e=>e.theme.colors.brand,e=>e.theme.colors.accent,e=>e.theme.spacing.normal);var ge=({children:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{className:"header"}),r.a.createElement(he,{className:"content"},e),r.a.createElement(X,{className:"footer"}));const he=$.div.withConfig({componentId:"sc-1e1ueji-0"})(["padding:",";background-color:#f3f3f3;"],e=>e.theme.spacing.normal);var fe=()=>r.a.createElement(ge,null,r.a.createElement("h1",null,"Categories Page"),r.a.createElement(H,null)),be=R.a`
  query($id: Int!, $categoryFilter: [UniqueFilterInput]) {
    category(id: $id) {
      id
      title
      parent
      trail
      children {
        id
        title
      }
      filters {
        key
        values
      }
      products(categoryFilter: $categoryFilter) {
        id
        title
        image
        filters {
          id
          key
          values
        }
        listings {
          id
        }
        cheapestListing {
          id
          price
        }
      }
    }
  }
`,Ee=R.a`
  query AllProductsCursor(
    $categoryIds: [Int]
    $first: Int
    $after: String
    $filters: [UniqueFilterInput]
  ) {
    allProductsCursor(
      categoryIds: $categoryIds
      first: $first
      after: $after
      filters: $filters
    ) {
      pageInfo {
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          cheapestListing {
            id
            url
            price
            site
          }
          image
          listings {
            id
            url
            price
            site
          }
          filters {
            id
            key
            values
          }
        }
      }
    }
  }
`;var ye=$.button.withConfig({componentId:"bdarxo-0"})(["cursor:pointer;display:inline-block;min-height:1em;outline:0;border:none;vertical-align:baseline;background:#e0e1e2 none;color:rgba(0,0,0,0.6);font-family:Poppins,serif;margin:0 0.25em 0 0;padding:0.78571429em 1.5em 0.78571429em;text-transform:none;text-shadow:none;font-weight:700;line-height:1em;font-style:normal;text-align:center;text-decoration:none;border-radius:0.28571429rem;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,0.15) inset;user-select:none;transition:opacity 0.1s ease,background-color 0.1s ease,color 0.1s ease,box-shadow 0.1s ease,background 0.1s ease;-webkit-tap-highlight-color:transparent;&:hover{background-color:#cacbcd;background-image:none;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,0.15) inset;color:rgba(0,0,0,0.8);}"," "," &:disabled{background-color:#555;opacity:0.3;cursor:default;pointer-events:none;&:hover{background-color:#555;}}"],e=>e.primary?I(["background-color:#2185d0;color:#fff;text-shadow:none;background-image:none;&:hover{background-color:#1678c2;color:#fff;text-shadow:none;}"]):e.secondary?I(["background-color:",";color:#fff;text-shadow:none;background-image:none;&:hover{background-color:#2ca179;color:#fff;text-shadow:none;}"],e=>e.theme.colors.secondary):null,e=>e.loading?I(["position:relative;cursor:default;text-shadow:none !important;color:transparent !important;opacity:1;pointer-events:auto;-webkit-transition:all 0s linear,opacity 0.1s ease;transition:all 0s linear,opacity 0.1s ease;&:before{position:absolute;content:'';top:calc(50% - 2px);left:calc(50% - 2px);margin:-0.64285714em 0 0 -0.64285714em;width:1.28571429em;height:1.28571429em;border-radius:500rem;border:0.2em solid rgba(0,0,0,0.15);}&:after{position:absolute;content:'';top:calc(50% - 2px);left:calc(50% - 2px);margin:-0.64285714em 0 0 -0.64285714em;width:1.28571429em;height:1.28571429em;-webkit-animation:button-spin 0.6s linear;animation:button-spin 0.6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#fff transparent transparent;border-style:solid;border-width:0.2em;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent;}"]):null);var ve=$.div.withConfig({componentId:"sc-1ixb472-0"})(["background:#fff;padding:",";border-radius:",";color:",";"],e=>e.theme.spacing.normal,e=>e.theme.radius,e=>e.theme.colors.darkText),xe=a(16),we=a.n(xe),ke=a(9),Ce=a.n(ke),Ie=a(17),Se=a.n(Ie),je=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};var Oe=e=>{var{image:t,title:a}=e,n=je(e,["image","title"]);const l=(t||"").split("/"),i=t&&-1===["blank.gif"].indexOf(l[l.length-1])?t:Ce.a;return r.a.createElement(we.a,Object.assign({src:i,fallbackImage:Ce.a,alt:a||"",initialImage:Se.a,className:"product-image"},n))};const $e=({listings:e,cheapestListing:t})=>e.length&&t?r.a.createElement(r.a.Fragment,null,e.length," shops, from ",t.price," USD"):r.a.createElement(r.a.Fragment,null,"0 shops"),Fe=$(ve).withConfig({componentId:"sc-15xrvs6-0"})(["display:flex;flex-direction:row;margin-bottom:",";"],e=>e.theme.spacing.normal),qe=$.div.withConfig({componentId:"sc-15xrvs6-1"})(["flex:1;"]),Pe=$.div.withConfig({componentId:"sc-15xrvs6-2"})(["flex:1;"]),Me=$.div.withConfig({componentId:"sc-15xrvs6-3"})(["flex:1;"]),ze=$.div.withConfig({componentId:"sc-15xrvs6-4"})(["flex:1;"]);var Ne=({product:e})=>r.a.createElement(Fe,{className:"product-list-item"},r.a.createElement(qe,{className:"product-list-item-image"},r.a.createElement(Oe,{image:e.image,title:e.title})),r.a.createElement(Pe,{className:"product-list-item-title"},r.a.createElement(u.Link,{to:`/product/${e.id}`},e.title)),r.a.createElement(Me,{className:"product-list-item-info"},r.a.createElement($e,{listings:e.listings||[],cheapestListing:e.cheapestListing})),r.a.createElement(ze,{className:"product-list-item-more"},r.a.createElement(ye,{type:"button",secondary:!0,to:`/product/${e.id}`,as:u.Link},"More")));var Le=({products:e,categorized:t=!1,horizontal:a=!1})=>{const l=((e,t,a=10)=>{const[r,l]=Object(n.useState)([]);return t?(Object(n.useEffect)(()=>{const t=e.reduce((e,t)=>{const n=e.find(e=>e.categoryId===t.category.id);return n?n.items.length<a&&n.items.push(t):e.push({categoryId:t.category.id,categoryTitle:t.category.title,items:[t]}),e},[]);l(t)},[e]),r):e})(e,t);return t?e.length?r.a.createElement(Ae,null,l.map((e,t)=>r.a.createElement(Re,{key:t},r.a.createElement(U,{divided:!0},e.categoryTitle),r.a.createElement(Qe,null,e.items.map(e=>r.a.createElement(Ne,{key:e.id,product:e})))))):r.a.createElement(r.a.Fragment,null,"No products here..."):a?e.length?r.a.createElement(_e,null,e.map(e=>r.a.createElement(Te,{key:e.id},r.a.createElement(Ne,{product:e})))):r.a.createElement(ve,null,"No products here..."):r.a.createElement("div",null,!e.length&&r.a.createElement(ve,null,"No products here..."),!!e.length&&r.a.createElement(r.a.Fragment,null,e.map(e=>r.a.createElement(Ne,{key:e.id,product:e}))))};const _e=$.div.withConfig({componentId:"sc-1yozdb2-0"})(["display:flex;flex-wrap:wrap;.product-list-item{display:flex;flex-direction:column;align-items:center;padding:",";box-sizing:border-box;height:100%;img{max-width:100%;}}.product-list-item-more{margin-top:",";}.product-list-item-title{max-width:90%;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;a{text-decoration:none;}}"],e=>e.theme.spacing.normal,e=>e.theme.spacing.normal),Te=$.div.withConfig({componentId:"sc-1yozdb2-1"})(["flex:0 0 25%;max-width:25%;padding:",";box-sizing:border-box;"],e=>e.theme.spacing.normal),Ae=$.div.withConfig({componentId:"sc-1yozdb2-2"})([""]),Re=$.div.withConfig({componentId:"sc-1yozdb2-3"})(["margin-bottom:",";background-color:rgba(255,255,255,0.1);border:1px solid;border-color:rgba(255,255,255,0.1);border-radius:4px;padding:",";"],e=>e.theme.spacing.large,e=>e.theme.spacing.large),Qe=$.div.withConfig({componentId:"sc-1yozdb2-4"})(["display:flex;flex-direction:row;overflow:auto;flex-wrap:nowrap;padding:"," 0;.product-list-item{flex-direction:column;align-items:center;margin:0 ",";padding:",";border-radius:",";background-color:#fff;font-size:0.8rem;}.product-list-item-image{width:100%;text-align:center;display:flex;justify-content:center;align-items:center;img{width:96px;}}.product-list-item-more{width:100%;text-align:right;flex-grow:0;display:none;margin-top:",";}.product-list-item-info{display:none;}.product-list-item-title{max-width:150px;text-align:center;display:flex;align-items:flex-end;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:",";a{text-decoration:none;}}> *{flex:0 0 auto;}"],e=>e.theme.spacing.large,e=>e.theme.spacing.huge,e=>e.theme.spacing.normal,e=>e.theme.radius,e=>e.theme.spacing.normal,e=>e.theme.spacing.small);var De=({filter:e,onChange:t,activeFilters:a})=>{const n=t=>{const n=a.find(t=>t.key===e.key);return!!(n&&n.values.indexOf(t)>-1)},l=e.values.reduce((e,t)=>e.indexOf(t)>-1?e:(e.push(t),e),[]);return r.a.createElement(Ue,null,r.a.createElement(Ve,null,e.key),l.map((e,a)=>r.a.createElement(Ge,{key:a},r.a.createElement("input",{defaultChecked:n(e),id:`${e}_${a}`,type:"checkbox",key:a,onChange:a=>{t(a,e)}}),r.a.createElement(Be,{selected:n(e),htmlFor:`${e}_${a}`},e))))};const Ue=$.div.withConfig({componentId:"j3pbuj-0"})(["margin-bottom:",";"],e=>e.theme.spacing.normal),Ve=$.h4.withConfig({componentId:"j3pbuj-1"})(["text-transform:uppercase;font-size:0.9rem;"]),Ge=$.div.withConfig({componentId:"j3pbuj-2"})(["display:flex;align-items:center;cursor:pointer;font-size:0.8rem;label{cursor:pointer;}input{margin-right:5px;}"]),Be=$.label.withConfig({componentId:"j3pbuj-3"})(["color:",";"],e=>e.selected?e.theme.colors.accent:e.theme.colors.text),He=$.div.withConfig({componentId:"y1l2tn-0"})([""]),Ke=$.div.withConfig({componentId:"y1l2tn-1"})(["background-color:#fff;padding:",";color:",";border-radius:4px;"],e=>e.theme.spacing.normal,e=>e.theme.colors.text),We=$.div.withConfig({componentId:"y1l2tn-2"})(["background:",";color:#fff;padding:",";"],e=>e.theme.colors.primary,e=>e.theme.spacing.normal);var Je=({heading:e,children:t,className:a})=>r.a.createElement(He,{className:a},e&&r.a.createElement(We,null,r.a.createElement(U,{as:"h3"},e)),r.a.createElement(Ke,null,t));var Ye=({match:{params:e}})=>{const[t,a]=Object(n.useState)([]);return r.a.createElement(ge,null,r.a.createElement(l.Query,{query:be,variables:{id:e.id},fetchPolicy:"cache-and-network"},({data:e,loading:n})=>n?r.a.createElement(G,null):r.a.createElement(l.Query,{query:Ee,variables:{filters:t.map(({key:e,values:t})=>({key:e,values:t})),first:10,categoryIds:e.category.trail}},({data:n,loading:l,fetchMore:i})=>{if(l)return r.a.createElement(G,null);const o=n&&n.allProductsCursor&&n.allProductsCursor.edges?n.allProductsCursor.edges.map(e=>e.node):[];return r.a.createElement(Ze,null,r.a.createElement(et,null,r.a.createElement("h1",null,"Browsing ",r.a.createElement("em",null,'"',e.category.title,'"'))),r.a.createElement(tt,{display:(!!e.category.children.length||!(!e.category.filters||!e.category.filters.length)).toString()},r.a.createElement(r.a.Fragment,null,!!e.category.children.length&&r.a.createElement(Je,{heading:"Categories"},e.category.children.map(e=>r.a.createElement("div",{key:e.id},r.a.createElement(Xe,{to:`/category/${e.id}`},e.title)))),!!(e.category.filters||[]).length&&r.a.createElement(Je,{heading:"Filters"},(e.category.filters||[]).map(e=>r.a.createElement(De,{key:e.key,filter:e,activeFilters:t,onChange:(n,r)=>{const l=t.find(t=>t.key===e.key);if(l){const n=l.values.find(e=>r===e),i=t.map(t=>(t.key===e.key&&(t.id=Math.random(),t.values=n?t.values.filter(e=>e!==r):[...t.values,r]),t)).filter(e=>0!==e.values.length);a(i)}else a([...t,{id:Math.random(),key:e.key,values:[r]}])}}))))),r.a.createElement(at,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(Le,{horizontal:!0,products:o}),n.allProductsCursor&&n.allProductsCursor.pageInfo&&r.a.createElement(nt,null,r.a.createElement(ye,{secondary:!0,disabled:!n.allProductsCursor.pageInfo.endCursor,onClick:()=>{i({query:Ee,variables:{categoryIds:e.category.trail,after:n.allProductsCursor.pageInfo.endCursor,first:10},updateQuery:(e,{fetchMoreResult:t})=>Object.assign({},e,{allProductsCursor:Object.assign({},e.allProductsCursor,{edges:[...e.allProductsCursor.edges,...t.allProductsCursor.edges],pageInfo:t.allProductsCursor.pageInfo})})})}},"Show more..."))))))})))};const Xe=$(u.Link).withConfig({componentId:"rn9ed9-0"})(["display:inline-block;padding:",";text-decoration:none;border-radius:5px;background:",";color:#fff;margin-bottom:",";transition:all 300ms ease-in-out;&:hover{opacity:0.8;}"],e=>`${e.theme.spacing.tiny} ${e.theme.spacing.small}`,e=>e.theme.colors.secondary,e=>e.theme.spacing.small),Ze=$.div.withConfig({componentId:"rn9ed9-1"})(["display:flex;flex-wrap:wrap;"]),et=$.div.withConfig({componentId:"rn9ed9-2"})(["width:100%;margin-bottom:",";"],e=>e.theme.spacing.huge),tt=$.div.withConfig({componentId:"rn9ed9-3"})(["flex:2;margin-right:",";display:",";h2{margin-bottom:",";}"],e=>e.theme.spacing.huge,e=>"true"===e.display?"block":"none",e=>e.theme.spacing.normal),at=$.div.withConfig({componentId:"rn9ed9-4"})(["flex:6;max-width:100%;"]),nt=$.div.withConfig({componentId:"rn9ed9-5"})(["border:#eee 1px solid;border-radius:",";padding:",";margin:",";background:#fff;text-align:center;"],e=>e.theme.radius,e=>e.theme.spacing.normal,e=>e.theme.spacing.normal);var rt=R.a`
  query($id: Int!) {
    product(id: $id) {
      id
      title
      image
      listings {
        id
        url
        price
        site
      }
      filters {
        id
        key
        values
      }
    }
  }
`;var lt=({product:e,listing:t})=>r.a.createElement(it,null,r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:e.title})),r.a.createElement(ot,null,"$",t.price),r.a.createElement(ct,null,t.site),r.a.createElement("div",null,r.a.createElement(st,{href:t.url,target:"_blank"},"See offer")));const it=$.div.withConfig({componentId:"rdm6wk-0"})(["display:flex;align-items:center;justify-content:space-between;img{max-width:40%;}"]),ot=$.div.withConfig({componentId:"rdm6wk-1"})(["color:",";"],e=>e.theme.colors.primary),ct=$.div.withConfig({componentId:"rdm6wk-2"})(["color:",";a{color:",";}"],e=>e.theme.colors.accent,e=>e.theme.colors.accent),st=$.a.withConfig({componentId:"rdm6wk-3"})(["display:block;text-decoration:none;color:#fff;background:#1b95e0;padding:5px 10px;"]);var dt=a(18),mt=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};var ut=e=>{var{pointer:t}=e,a=mt(e,["pointer"]);return r.a.createElement(pt,{pointer:!!t},r.a.createElement(dt.FontAwesomeIcon,Object.assign({},a)))};const pt=$("div").withConfig({componentId:"sc-17w6gjc-0"})(["display:inline-block;",""],e=>e.pointer&&I(["cursor:pointer;"]));var gt=()=>r.a.createElement(ht,null,r.a.createElement(ut,{title:"Add to favorites",icon:"star"}),r.a.createElement("span",null,"Add to favorites"));const ht=$.div.withConfig({componentId:"sc-12ui1yk-0"})(["span{margin-left:",";}"],e=>e.theme.spacing.tiny),ft=$.div.withConfig({componentId:"sc-151po8z-0"})(["display:flex;justify-content:space-between;margin-bottom:",";"],e=>e.theme.spacing.huge),bt=$.div.withConfig({componentId:"sc-151po8z-1"})(["flex:2;display:flex;"]),Et=$.div.withConfig({componentId:"sc-151po8z-2"})(["max-width:25%;text-align:center;margin-right:",";flex:1;img{max-width:100%;}"],e=>e.theme.spacing.normal),yt=$.div.withConfig({componentId:"sc-151po8z-3"})(["flex:1;h3{color:",";}"],e=>e.theme.colors.secondary),vt=$.div.withConfig({componentId:"sc-151po8z-4"})(["flex:1;display:flex;justify-content:flex-end;"]),xt=$.div.withConfig({componentId:"sc-151po8z-5"})(["h3{margin-bottom:",";}"],e=>e.theme.spacing.normal);var wt=({match:{params:e}})=>r.a.createElement(ge,null,r.a.createElement(Je,null,r.a.createElement(l.Query,{query:rt,variables:{id:e.id}},({data:e,loading:t})=>t?r.a.createElement(G,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(ft,null,r.a.createElement(bt,null,r.a.createElement(Et,null,r.a.createElement("img",{src:e.product.image,alt:e.product.title})),r.a.createElement(yt,null,r.a.createElement(U,null,e.product.title),r.a.createElement("p",null,e.product.title))),r.a.createElement(vt,null,r.a.createElement(gt,{product:e.product}))),e.product.filters&&!!e.product.filters.length&&r.a.createElement(n.Fragment,null,r.a.createElement(It,null,r.a.createElement("li",null,r.a.createElement("a",{className:"active",href:"#"},"Technical Details"))),r.a.createElement(kt,null,r.a.createElement(U,{as:"h3"},"Technical Details"),r.a.createElement(Ct,null,r.a.createElement("div",null,r.a.createElement("strong",null,"Product Name")),r.a.createElement("div",null,e.product.title)),e.product.filters.map((e,t)=>r.a.createElement(Ct,{key:t},r.a.createElement("div",null,r.a.createElement("strong",null,e.key)),r.a.createElement("div",null,e.values))))),r.a.createElement(xt,null,r.a.createElement(U,{divided:!0},"Available at"),!e.product.listings&&r.a.createElement("p",null,"No listings exists for this product."),(e.product.listings||[]).map(t=>r.a.createElement(lt,{key:t.id,listing:t,product:e.product})))))));const kt=$.div.withConfig({componentId:"sc-151po8z-6"})(["margin-bottom:",";"],e=>e.theme.spacing.normal),Ct=$.div.withConfig({componentId:"sc-151po8z-7"})(["display:flex;justify-content:space-between;> div{flex:1;}"]),It=$.ul.withConfig({componentId:"sc-151po8z-8"})(["padding:0;border-width:0 0 1px 0;border-style:solid;border-color:#ebebeb;list-style:none;list-style-image:none;margin:0 0 -0.1rem 0;overflow:hidden;margin-bottom:",";li{float:left;margin:0;margin-right:0.5rem;&:first-child{margin-left:",";}a{display:block;position:relative;outline:0;z-index:1;padding:10px;border:1px solid #ebebeb;margin:0 0 -0.1rem 0;background:#f9f9f9;color:#22313f;font-size:1em;text-decoration:none;&.active{z-index:1;padding:9px 10px 10px 10px;border-width:2px 1px 1px 1px;border-color:"," #ebebeb #fff #ebebeb;background:#fff;color:#000;}}}"],e=>e.theme.spacing.normal,e=>e.theme.spacing.small,e=>e.theme.colors.primary);var St=()=>r.a.createElement(ge,null,"SearchPage"),jt=R.a`
  mutation {
    runFetchers {
      id
      title
    }
  }
`,Ot=a(10),$t=a.n(Ot);const Ft={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",width:"60%",maxHeight:"80%",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$t.a.setAppElement("#root");var qt=({hideModal:e,header:t,children:a})=>r.a.createElement($t.a,{isOpen:!0,style:Ft},r.a.createElement(Pt,null,t&&r.a.createElement(Mt,null,t),r.a.createElement(zt,{onClick:e},"Close")),r.a.createElement(Nt,null,a));const Pt=$.div.withConfig({componentId:"uc0tl5-0"})(["display:flex;justify-content:flex-end;align-items:center;border-bottom:"," 1px solid;margin-bottom:",";height:50px;"],e=>e.theme.colors.light,e=>e.theme.spacing.normal),Mt=$.h3.withConfig({componentId:"uc0tl5-1"})(["text-transform:uppercase;flex:1;"]),zt=$.div.withConfig({componentId:"uc0tl5-2"})(["cursor:pointer;border:#ccc 1px solid;padding:5px 10px;"]),Nt=$.div.withConfig({componentId:"uc0tl5-3"})(["margin-bottom:",";"],e=>e.theme.spacing.normal);var Lt=R.a`
  mutation UpdateCategory($id: Int!, $title: String, $parentId: Int) {
    updateCategory(id: $id, title: $title, parentId: $parentId) {
      id
      title
    }
  }
`;var _t=$.input.withConfig({componentId:"sc-1jlmg84-0"})(["padding:",";border:"," 1px solid;border-radius:5px;&:focus{outline:"," 1px solid;}"],e=>e.theme.spacing.small,e=>e.theme.colors.light,e=>e.theme.colors.primary),Tt=R.a`
  mutation AddCategory($title: String!, $parentId: Int) {
    addCategory(title: $title, parentId: $parentId) {
      id
      title
      root
      children {
        id
        title
      }
    }
  }
`;var At=$.div.withConfig({componentId:"pkai4z-0"})(["display:inline-block;background:",";color:#fff;padding:5px 10px;border-radius:5px;"],e=>e.theme.colors.primary);var Rt=({onSelect:e,title:t,preselected:a,ignoreIds:l})=>{const[o,c]=Object(n.useState)([]),[s,d]=Object(n.useState)(void 0),{data:m,loading:u}=Object(i.useQuery)(Q);return Object(n.useEffect)(()=>{if(!u){const e=a?m.allCategories.find(e=>e.id===a):null;e&&d(e)}},[m.allCategories,u]),u?r.a.createElement(G,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,!s&&r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("label",null,t),r.a.createElement(_t,{onChange:e=>{if(e.target.value.length>1){const t=m.allCategories.filter(t=>{const a=new RegExp(e.target.value,"i");return!((l||[]).indexOf(t.id)>-1)&&a.test(t.title)});c(t)}else c([])}}),!!o.length&&r.a.createElement(Qt,null,o.map(t=>r.a.createElement("li",{key:t.id},r.a.createElement(Dt,{onClick:()=>{e(t),d(t),c([])}},t.title))))),s&&r.a.createElement(At,{onClick:()=>{d(void 0),e(void 0)}},s.title)))};const Qt=$.ul.withConfig({componentId:"sc-4mibvu-0"})(["list-style:none;border:"," 1px solid;padding:",";"],e=>e.theme.colors.light,e=>e.theme.spacing.small),Dt=$.div.withConfig({componentId:"sc-4mibvu-1"})(["cursor:pointer;"]);var Ut=$.div.withConfig({componentId:"sc-1dl3iyt-0"})(["label{display:block;}margin-bottom:",";"],e=>e.theme.spacing.normal);var Vt=()=>{const[e,t]=Object(n.useState)(""),[a,i]=Object(n.useState)(void 0);return r.a.createElement(l.Mutation,{mutation:Tt,refetchQueries:[{query:Q}]},n=>r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t=>{t.preventDefault(),e.length?n({variables:{title:e,parentId:a?a.id:void 0}}):console.log("Missing required fields.")}},r.a.createElement(Ut,null,r.a.createElement("label",null,"Title"),r.a.createElement(_t,{type:"text",placeholder:"Title",onChange:e=>{t(e.target.value)}})),r.a.createElement(Ut,null,r.a.createElement(Rt,{title:"Select parent category (leave empty for root)",onSelect:e=>i(e||void 0)}),a&&r.a.createElement("div",null,"Category will be placed in: ",a.title)),r.a.createElement(ye,{type:"submit"},"Add"))))},Gt=R.a`
  mutation DeleteCategory($id: Int!) {
    deleteCategory(id: $id) {
      id
      title
      __typename
    }
  }
`;var Bt=({children:e})=>r.a.createElement(Ht,null,e);const Ht=$.table.withConfig({componentId:"sc-1mxdfy-0"})(["width:100%;background:#fff;margin:1em 0;border:1px solid rgba(34,36,38,0.15);-webkit-box-shadow:none;box-shadow:none;border-radius:0.28571429rem;text-align:left;color:rgba(0,0,0,0.87);border-collapse:separate;border-spacing:0;thead th{cursor:auto;background:#f9fafb;text-align:inherit;color:rgba(0,0,0,0.87);padding:0.92857143em 0.78571429em;vertical-align:inherit;font-style:none;font-weight:700;text-transform:none;border-bottom:1px solid rgba(34,36,38,0.1);}td,th{padding:0.78571429em 0.78571429em;}"]),Kt=({category:e})=>{const{add:t}=_(),[a,i]=k(()=>{const[a,o]=Object(n.useState)(e),[c,s]=Object(n.useState)(void 0);return r.a.createElement(qt,{hideModal:i,header:"Edit Category"},r.a.createElement("form",null,r.a.createElement(Yt,null,r.a.createElement(_t,{type:"text",defaultValue:e.title,onChange:e=>{o(Object.assign({},a,{title:e.target.value}))}})),r.a.createElement(Yt,null,r.a.createElement(Rt,{ignoreIds:[e.id],preselected:e.parent,title:"Select parent category (leave empty for root)",onSelect:e=>s(e||void 0)}),c&&r.a.createElement("div",null,"Category will be placed in: ",c.title)),r.a.createElement(Jt,null,r.a.createElement(l.Mutation,{mutation:Lt},(n,{loading:l})=>r.a.createElement(ye,{disabled:l,loading:l,type:"button",onClick:()=>{n({variables:{id:e.id,title:a.title,parentId:c&&c.id}}),t({type:"success",message:"Category was updated."}),i()}},"Save")),r.a.createElement(ye,{type:"button",onClick:i},"Cancel"))))});return r.a.createElement("tr",null,r.a.createElement("td",null,e.title),r.a.createElement("td",null,r.a.createElement(ut,{icon:"edit",pointer:!0,onClick:a,style:{marginRight:5}}),r.a.createElement(l.Mutation,{mutation:Gt,update:(e,{data:{deleteCategory:t}})=>{const{allCategories:a}=e.readQuery({query:Q,variables:{root:!0}});e.writeQuery({query:Q,data:{allCategories:a.filter(e=>e.id!==t.id)}})}},a=>r.a.createElement(ut,{icon:"trash",pointer:!0,onClick:()=>{a({variables:{id:e.id}}),t({type:"success",message:"Category was removed"})}}))))};var Wt=()=>{const[e,t]=k(()=>r.a.createElement(qt,{hideModal:t,header:"Add Category"},r.a.createElement(Vt,null)));return r.a.createElement(l.Query,{query:Q},({data:t,loading:a})=>a?r.a.createElement(G,null):r.a.createElement("div",null,r.a.createElement(Xt,null,r.a.createElement(U,null,"Manage Categories"),r.a.createElement(ut,{icon:"plus-square",onClick:e,pointer:!0})),!t.allCategories.length&&r.a.createElement("div",null,"No categories.exists yet."),r.a.createElement(Bt,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Edit"))),r.a.createElement("tbody",null,t.allCategories.map(e=>r.a.createElement(Kt,{category:e,key:e.id}))))))};const Jt=$.div.withConfig({componentId:"c6tbjp-0"})(["button{margin-right:",";}"],e=>e.theme.spacing.normal),Yt=$.div.withConfig({componentId:"c6tbjp-1"})(["margin-bottom:",";"],e=>e.theme.spacing.normal),Xt=$.div.withConfig({componentId:"c6tbjp-2"})(["display:flex;justify-content:space-between;> h3{flex:1;}"]);var Zt=R.a`
  {
    allProducts {
      id
      title
      image
      main
      filters {
        id
        key
        values
      }
      variations {
        id
        title
        main
      }
      category {
        id
        title
      }
      listings {
        id
      }
    }
  }
`,ea=R.a`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id) {
      id
      title
      __typename
    }
  }
`,ta=R.a`
  mutation UpdateProduct(
    $id: Int!
    $title: String
    $filters: [AddProductFilters]
    $categoryId: Int
  ) {
    updateProduct(
      id: $id
      title: $title
      filters: $filters
      categoryId: $categoryId
    ) {
      id
      title
      category {
        id
        title
        __typename
      }
      filters {
        id
        key
        values
      }
    }
  }
`,aa=R.a`
  mutation FetchFilters($listingId: Int!) {
    fetchFilters(listingId: $listingId) {
      id
      title
      filters {
        id
        key
        values
      }
    }
  }
`,na=R.a`
  mutation DeleteFilter($id: Int!) {
    deleteFilter(id: $id) {
      id
      key
      values
      __typename
    }
  }
`,ra=R.a`
  mutation UpdateFilter($id: Int!, $key: String, $values: String) {
    updateFilter(id: $id, key: $key, values: $values) {
      id
      key
      values
      __typename
    }
  }
`;var la=({filter:e})=>{const[t,a]=Object(n.useState)(!1),[i,o]=Object(n.useState)(e.values),[c,s]=Object(n.useState)(e.key);return r.a.createElement("div",null,r.a.createElement("strong",null,e.key)," ",r.a.createElement(ia,null,t?r.a.createElement(ut,{icon:"window-close",title:"Cancel",onClick:()=>a(!1)}):r.a.createElement(ut,{icon:"edit",title:"Edit filter",onClick:()=>a(!0)})," ",r.a.createElement(l.Mutation,{mutation:na},t=>r.a.createElement(ut,{icon:"trash",title:"Remove filter",onClick:()=>{t({variables:{id:e.id}})}}))),r.a.createElement("br",null),t&&r.a.createElement(l.Mutation,{mutation:ra},t=>r.a.createElement(n.Fragment,null,r.a.createElement(Ut,null,r.a.createElement("label",null,"Key"),r.a.createElement(_t,{type:"text",defaultValue:e.key,onChange:e=>{s(e.target.value)},placeholder:"Key"})),r.a.createElement(Ut,null,r.a.createElement("label",null,"Values (separate with colon)"),r.a.createElement(_t,{type:"text",defaultValue:e.values,onChange:e=>{o(e.target.value)},placeholder:"Values"})),r.a.createElement(ye,{onClick:a=>{a.preventDefault(),t({variables:{key:c,values:i,id:e.id}})},primary:!0},"Save"),r.a.createElement(ye,{onClick:e=>{e.preventDefault(),a(!1)}},"Cancel"))),!t&&r.a.createElement(n.Fragment,null,e.values))};const ia=$.div.withConfig({componentId:"sc-1qii8d9-0"})(["float:right;i,svg{cursor:pointer;}"]);var oa=({productId:e})=>{const[t,a]=Object(n.useState)(""),[i,o]=Object(n.useState)("");return r.a.createElement(l.Mutation,{mutation:ta},l=>r.a.createElement(n.Fragment,null,r.a.createElement(Ut,null,r.a.createElement("label",null,"Key"),r.a.createElement(_t,{type:"text",defaultValue:t,onChange:e=>{a(e.target.value)},placeholder:"Key"})),r.a.createElement(Ut,null,r.a.createElement("label",null,"Values (separate with colon)"),r.a.createElement(_t,{type:"text",defaultValue:i,onChange:e=>{o(e.target.value)},placeholder:"Values"})),r.a.createElement(ye,{onClick:a=>{a.preventDefault(),l({variables:{id:e,filters:[{key:t,values:i}]}})},primary:!0},"Save")))};var ca=({title:e,children:t})=>{const[a,l]=Object(n.useState)(!1);return r.a.createElement(sa,null,r.a.createElement(U,{className:"accordion-title",as:"h4",onClick:()=>l(!a)},a?r.a.createElement(ut,{icon:"caret-down"}):r.a.createElement(ut,{icon:"caret-right"}),e),a&&r.a.createElement(da,null,t))};const sa=$.div.withConfig({componentId:"sc-1c3p6ht-0"})(["margin-bottom:",";border:#eee 1px solid;padding:",";border-radius:",";.accordion-title{cursor:pointer;i,svg{margin-right:",";}}"],e=>e.theme.spacing.normal,e=>e.theme.spacing.normal,e=>e.theme.radius,e=>e.theme.spacing.small),da=$.div.withConfig({componentId:"sc-1c3p6ht-1"})([""]);var ma=R.a`
  mutation Combine($productIds: [Int]!, $mainId: Int!) {
    combine(productIds: $productIds, mainId: $mainId) {
      id
      title
      main
    }
  }
`;var ua=Object(l.compose)(Object(l.graphql)(ee))(({mutate:e,className:t,change:a})=>{const[i,o]=Object(n.useState)(""),[c,s]=Object(n.useState)(null),d=function(e,t){const[a,r]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const a=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(a)}},[e,t]),a}(i,500),m=Object(n.useRef)(null),u=Object(n.useRef)(null);Object(n.useEffect)(()=>{d&&e({variables:{query:d}})},[d]),Object(n.useEffect)(()=>(document.addEventListener("click",p,!1),()=>{document.removeEventListener("click",p,!1)}),[]);const p=e=>{m.current&&!m.current.contains(e.target)&&(o(""),u.current&&(u.current.value=""))},g=e=>{s(e),a&&a(e)};return r.a.createElement(pa,{className:t,ref:m},r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Selected: ",c.title),r.a.createElement("span",{onClick:()=>g(void 0)},"Clear"))),r.a.createElement(r.a.Fragment,null,!c&&r.a.createElement(r.a.Fragment,null,d&&r.a.createElement(ha,null,r.a.createElement("h3",null,"Search results"),r.a.createElement(l.Query,{query:te,variables:{filter:{title_contains:d}}},({data:e,loading:t})=>t?r.a.createElement(G,null):e.allProducts&&!e.allProducts.length?r.a.createElement("p",null,"No matches."):r.a.createElement("ul",null,e.allProducts.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement("span",{onClick:()=>{g(e)}},e.title)))))),r.a.createElement(ga,{ref:u,placeholder:"Search...",onChange:e=>o(e.target.value)}))))});const pa=$.div.withConfig({componentId:"sc-1we3xgp-0"})(["position:relative;width:100%;"]),ga=$.input.withConfig({componentId:"sc-1we3xgp-1"})(["padding:0.5em;width:calc(100% - 1em - 2px);border:none;border-radius:",";background-color:#f7f9fa;outline:none;&:focus{outline:none;box-shadow:0 0 0 1px rgba(0,123,255,0.5);}"],e=>e.theme.radius),ha=$.div.withConfig({componentId:"sc-1we3xgp-2"})(["position:absolute;top:45px;width:calc(100% - 30px - 2px);padding:15px;background:#fff;border:"," 1px solid;color:",";a{color:",";}h3{font-weight:300;color:",";text-transform:uppercase;border-bottom:"," 1px solid;padding-bottom:",";margin-bottom:",";}ul{list-style:none;padding:0;margin:0;font-size:1em;}li{margin:"," 0;}"],e=>e.theme.colors.border,e=>e.theme.colors.darkText,e=>e.theme.colors.darkText,e=>e.theme.colors.secondary,e=>e.theme.colors.light,e=>e.theme.spacing.small,e=>e.theme.spacing.small,e=>e.theme.spacing.normal);var fa=R.a`
  mutation Split($productId: Int!) {
    split(productId: $productId) {
      id
      title
      main
    }
  }
`;var ba=({product:e})=>{const[t,a]=Object(n.useState)(null);return r.a.createElement("div",null,e.variations&&!!e.variations.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"This is a variation of:"),r.a.createElement(l.Mutation,{mutation:fa},t=>r.a.createElement("div",null,e.variations.map(a=>r.a.createElement("div",{key:a.id},a.title," ",0===e.main&&r.a.createElement(ut,{pointer:!0,title:"Split",icon:"cut",onClick:()=>{t({variables:{productId:a.id}})}})))))),0===e.main&&r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Add variation"),r.a.createElement(ua,{change:e=>{a(e)}})),r.a.createElement(l.Mutation,{mutation:ma},a=>r.a.createElement(ye,{type:"button",disabled:!t,onClick:n=>{if(n.preventDefault(),!t)return;const r=[t.id];r.indexOf(e.id)>-1||a({variables:{productIds:r,mainId:e.id}})}},"Save")))};const Ea=({product:e})=>{const{add:t}=_(),[a,i]=k(()=>{const[a,o]=Object(n.useState)(e);return r.a.createElement(qt,{hideModal:i,header:"Edit Product"},r.a.createElement("form",null,r.a.createElement(xa,null,r.a.createElement(_t,{type:"text",defaultValue:e.title,onChange:e=>{o(Object.assign({},a,{title:e.target.value}))}})),r.a.createElement(xa,null,r.a.createElement("label",null,"Select category"),r.a.createElement(Rt,{preselected:e.category&&e.category.id||void 0,onSelect:e=>{o(Object.assign({},a,{category:e}))}})),e.filters&&!!e.filters.length&&r.a.createElement("div",null,r.a.createElement(U,{as:"h3"},"Filters"),(e.filters||[]).map(e=>r.a.createElement(la,{filter:e,key:e.id}))),r.a.createElement(ca,{title:"Add filter"},r.a.createElement(oa,{productId:e.id})),r.a.createElement(ca,{title:"Variations"},r.a.createElement(ba,{product:e})),r.a.createElement(wa,null,e.listings&&e.listings[0]&&r.a.createElement(l.Mutation,{mutation:aa,update:(e,{data:{fetchFilters:t}})=>{const{allProducts:a}=e.readQuery({query:Zt}),n=a.findIndex(e=>e.id===t.id);e.writeQuery({query:Zt,data:{allProducts:[...a.slice(0,n),Object.assign({},a[n],{filters:t.filters}),...a.slice(n+1)]}})}},(a,{loading:n})=>r.a.createElement(ye,{type:"button",loading:n,disabled:n,primary:!0,onClick:async n=>{if(n.preventDefault(),e.listings&&e.listings[0])try{await a({variables:{listingId:e.listings[0].id}}),t({type:"success",message:"Filters was fetched."})}catch(n){t({type:"error",message:"Something went wrong."})}}},"Fetch filters"))),r.a.createElement(va,null,r.a.createElement(l.Mutation,{mutation:ta},(n,{loading:l})=>r.a.createElement(ye,{disabled:l,loading:l,type:"button",onClick:()=>{n({variables:{id:e.id,title:a.title,categoryId:a.category&&a.category.id}}),t({type:"success",message:"Product was updated."}),i()}},"Save")),r.a.createElement(ye,{type:"button",onClick:i},"Cancel"))))});return r.a.createElement("tr",null,r.a.createElement("td",null,e.title,"  ",r.a.createElement(u.Link,{to:`/product/${e.id}`},r.a.createElement(ut,{icon:"external-link-alt",pointer:!0,title:"Go to product"}))),r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement(ut,{pointer:!0,icon:"edit",onClick:a})),r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement(l.Mutation,{mutation:ea,update:(e,{data:{deleteProduct:t}})=>{const{allProducts:a}=e.readQuery({query:Zt});e.writeQuery({query:Zt,data:{allProducts:a.filter(e=>e.id!==t.id)}})}},a=>r.a.createElement(ut,{pointer:!0,icon:"trash",onClick:()=>{a({variables:{id:e.id}}),t({type:"success",message:"Product was removed"})}}))))};var ya=()=>{const{data:{allProducts:e},loading:t}=Object(i.useQuery)(Zt),[a,l]=((e,t,a)=>{const[r,l]=Object(n.useState)([]);return Object(n.useEffect)(()=>{l(e||[])},[t]),[r,t=>{const n=e.filter(e=>new RegExp(t,"i").test(e[a]));l(n)}]})(e,t,"title");return t?r.a.createElement(G,null):r.a.createElement(n.Fragment,null,r.a.createElement(_t,{type:"text",placeholder:"Filter...",onChange:e=>l(e.target.value)}),r.a.createElement(Bt,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,a.map(e=>r.a.createElement(Ea,{key:e.id,product:e})))))};const va=$.div.withConfig({componentId:"sc-25nkeo-0"})(["button{margin-right:",";}"],e=>e.theme.spacing.normal),xa=$.div.withConfig({componentId:"sc-25nkeo-1"})(["margin-bottom:",";"],e=>e.theme.spacing.normal),wa=$.div.withConfig({componentId:"sc-25nkeo-2"})(["margin-bottom:",";"],e=>e.theme.spacing.normal);var ka=R.a`
  {
    allFetchers {
      id
      lastFetched
      site {
        __typename
        id
        title
      }
      url
      category {
        id
        title
      }
    }
  }
`,Ca=R.a`
  mutation DeleteFetcher($id: Int!) {
    deleteFetcher(id: $id) {
      id
      site
      url
      __typename
    }
  }
`,Ia=R.a`
  mutation RunFetcher($fetcherId: Int!) {
    runFetcher(fetcherId: $fetcherId) {
      id
      title
    }
  }
`,Sa=R.a`
  mutation UpdateFetcher(
    $id: Int!
    $siteId: Int!
    $url: String
    $categoryId: Int
  ) {
    updateFetcher(
      id: $id
      siteId: $siteId
      url: $url
      categoryId: $categoryId
    ) {
      __typename
      id
      site {
        id
        title
      }
      url
      category {
        id
        title
      }
    }
  }
`,ja=R.a`
  mutation AddFetcher($url: String!, $siteId: Int!, $categoryId: Int!) {
    addFetcher(url: $url, siteId: $siteId, categoryId: $categoryId) {
      id
      url
      site {
        __typename
        id
        title
      }
      category {
        id
      }
    }
  }
`,Oa=R.a`
  {
    allSites {
      id
      title
      url
    }
  }
`;var $a=({defaultSiteId:e})=>{const[t,a]=Object(n.useState)(""),[i,o]=Object(n.useState)(e||"-1"),[c,s]=Object(n.useState)(""),{add:d}=_();return r.a.createElement(l.Mutation,{mutation:ja,update:(e,{data:{addFetcher:t}})=>{const{allFetchers:a}=e.readQuery({query:ka});e.writeQuery({query:ka,data:{allFetchers:a.concat(t)}})}},e=>r.a.createElement(Fa,null,r.a.createElement("h3",null,"Add Fetcher"),r.a.createElement("form",{onSubmit:a=>{a.preventDefault(),t.length&&c.length&&i&&"-1"!==i?(e({variables:{url:t,siteId:+i,categoryId:+c}}),d({type:"success",message:"Fetcher was added."})):console.log("Missing required fields.")}},r.a.createElement(Ut,null,r.a.createElement("label",null,"URL"),r.a.createElement(_t,{type:"text",placeholder:"URL",onChange:e=>{a(e.target.value)}})),r.a.createElement(Ut,null,r.a.createElement("label",null,"Site"),r.a.createElement(l.Query,{query:Oa},({data:{allSites:e},loading:t})=>t?r.a.createElement(G,null):r.a.createElement("select",{defaultValue:i,onChange:e=>{o(e.target.value)}},r.a.createElement("option",{value:"-1"},"Select site..."),(e||[]).map(e=>r.a.createElement("option",{key:e.id,value:e.id},e.title))))),r.a.createElement(Ut,null,r.a.createElement(Rt,{title:"Select category",onSelect:e=>{s(e?e.id.toString():"")}})),r.a.createElement(ye,{type:"submit"},"Add"))))};const Fa=$.div.withConfig({componentId:"sc-1qt8nwe-0"})(["label{display:block;}"]),qa=({fetcher:e,sites:t,runFetcher:a})=>{const{add:i}=_(),[o,c]=Object(n.useState)(!1),[s,d]=k(()=>{const[a,o]=Object(n.useState)(e);return r.a.createElement(qt,{hideModal:d,header:"Edit Fetcher"},r.a.createElement("form",null,r.a.createElement(Ut,null,r.a.createElement("label",null,"Site"),r.a.createElement("select",{onChange:e=>{o(Object.assign({},a,{siteId:e.target.value}))}},r.a.createElement("option",{value:"-1"},"Select site..."),t.map(e=>r.a.createElement("option",{key:e.id,value:e.id},e.title)))),r.a.createElement(Ut,null,r.a.createElement("label",null,"URL"),r.a.createElement(_t,{type:"text",defaultValue:e.url,placeholder:"URL",onChange:e=>{o(Object.assign({},a,{url:e.target.value}))}})),r.a.createElement(Ut,null,r.a.createElement(Rt,{title:"Select category",onSelect:e=>o(Object.assign({},a,{category:e||void 0}))})),r.a.createElement(Ma,null,r.a.createElement(l.Mutation,{mutation:Sa},(t,{loading:n})=>r.a.createElement(ye,{disabled:n,loading:n,type:"button",onClick:()=>{a.siteId&&"-1"!==a.siteId?(t({variables:{id:e.id,siteId:+a.siteId,url:a.url,categoryId:a.category&&a.category.id}}),i({type:"success",message:"Fetcher was updated."}),d()):i({type:"error",message:"You need to select a site."})}},"Save")),r.a.createElement(ye,{type:"button",onClick:d},"Cancel"))))});return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,e.site.title)," ",r.a.createElement("br",null),r.a.createElement("p",{style:{maxWidth:200,wordBreak:"break-word"}},e.url)),r.a.createElement("td",null,e.lastFetched?(e=>{const t=new Date(+e);return new Intl.DateTimeFormat("en-GB").format(t)})(e.lastFetched):"Never"),r.a.createElement("td",null,o?r.a.createElement("span",null,"Loading..."):r.a.createElement(ye,{disabled:o,type:"button",onClick:()=>{c(!0),a({variables:{fetcherId:e.id}}).then(()=>{c(!1),i({type:"success",message:"Fetched!"})}).catch(e=>{c(!1),i({type:"error",message:"Unable to fetch!"})})}},"Fetch")),r.a.createElement("td",null,r.a.createElement(ut,{icon:"edit",pointer:!0,onClick:s,style:{marginRight:5}}),r.a.createElement(l.Mutation,{mutation:Ca,update:(e,{data:{deleteFetcher:t}})=>{const{allFetchers:a}=e.readQuery({query:ka});e.writeQuery({query:ka,data:{allFetchers:a.filter(e=>e.id!==t.id)}})}},t=>r.a.createElement(ut,{icon:"trash",pointer:!0,onClick:()=>{t({variables:{id:e.id}}),i({type:"success",message:"Fetcher was removed"})}}))))};var Pa=()=>{const e=Object(i.useMutation)(Ia),[t,a]=k(()=>r.a.createElement(qt,{hideModal:a,header:"Add Fetcher"},r.a.createElement($a,null)));return r.a.createElement(l.Query,{query:Oa},({data:{allSites:a},loading:n})=>n?r.a.createElement(G,null):r.a.createElement(l.Query,{query:ka},({data:{allFetchers:n},loading:l})=>l?r.a.createElement(G,null):r.a.createElement("div",null,r.a.createElement(za,null,r.a.createElement(U,null,"Manage Fetchers"),r.a.createElement(ut,{icon:"plus-square",onClick:t,pointer:!0})),!n.length&&r.a.createElement("div",null,"No fetchers added yet."),!!n.length&&r.a.createElement(Bt,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Fetcher"),r.a.createElement("th",null,"Last fetched"),r.a.createElement("th",null,"Fetch"),r.a.createElement("th",null,"Edit"))),r.a.createElement("tbody",null,n.map(t=>r.a.createElement(qa,{key:t.id,sites:a||[],fetcher:t,runFetcher:e})))))))};const Ma=$.div.withConfig({componentId:"ysogdo-0"})(["button{margin-right:",";}"],e=>e.theme.spacing.normal),za=$.div.withConfig({componentId:"ysogdo-1"})(["display:flex;justify-content:space-between;> h3{flex:1;}"]);var Na=({label:e})=>r.a.createElement(La,{to:"/admin"},r.a.createElement(ut,{icon:"arrow-circle-left"}),e||"Back");const La=$(u.Link).withConfig({componentId:"favtrd-0"})(["text-decoration:none;i,svg{margin-right:",";}"],e=>e.theme.spacing.small);var _a=R.a`
  mutation DeleteSite($id: Int!) {
    deleteSite(id: $id) {
      id
      title
      url
      __typename
    }
  }
`,Ta=R.a`
  mutation UpdateSite($id: Int!, $title: String, $url: String) {
    updateSite(id: $id, title: $title, url: $url) {
      id
      title
      url
      fetchers {
        id
      }
    }
  }
`,Aa=R.a`
  mutation AddSite($title: String!, $url: String!) {
    addSite(title: $title, url: $url) {
      id
      title
      url
      fetchers {
        id
      }
    }
  }
`;var Ra=()=>{const[e,t]=Object(n.useState)(""),[a,i]=Object(n.useState)("");return r.a.createElement(l.Mutation,{mutation:Aa,update:(e,{data:{addSite:t}})=>{const{allSites:a}=e.readQuery({query:Oa});e.writeQuery({query:Oa,data:{allSites:a.concat(t)}})}},n=>r.a.createElement("div",null,r.a.createElement("h3",null,"Add Site"),r.a.createElement("form",{onSubmit:t=>{t.preventDefault(),e.length&&a.length?n({variables:{title:e,url:a}}):console.log("Missing required fields.")}},r.a.createElement("div",null,r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",placeholder:"Title",onChange:e=>{t(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"URL"),r.a.createElement("input",{type:"text",placeholder:"http://",onChange:e=>{i(e.target.value)}})),r.a.createElement(ye,{type:"submit"},"Add"))))};$.span.withConfig({componentId:"sc-15t0tpv-0"})(["cursor:pointer;"]);const Qa=({site:e})=>{const{add:t}=_(),[a,i]=k(()=>{const[a,o]=Object(n.useState)(e);return r.a.createElement(qt,{hideModal:i,header:"Edit Site"},r.a.createElement("form",null,r.a.createElement(Va,null,r.a.createElement("label",null,"Title"),r.a.createElement(_t,{type:"text",defaultValue:e.title,placeholder:"Title",onChange:e=>{o(Object.assign({},a,{title:e.target.value}))}})),r.a.createElement(Va,null,r.a.createElement("label",null,"URL"),r.a.createElement(_t,{type:"text",defaultValue:e.url,placeholder:"http://",onChange:e=>{o(Object.assign({},a,{url:e.target.value}))}})),r.a.createElement(Ua,null,r.a.createElement(l.Mutation,{mutation:Ta},(n,{loading:l})=>r.a.createElement(ye,{disabled:l,loading:l,type:"button",onClick:()=>{n({variables:{id:e.id,title:a.title,url:a.url}}),t({type:"success",message:"Site was updated."}),i()}},"Save")),r.a.createElement(ye,{type:"button",onClick:i},"Cancel"))))});return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(u.Link,{to:`/admin/site/${e.id}`},e.title)),r.a.createElement("td",null,r.a.createElement(ut,{icon:"edit",pointer:!0,onClick:a,style:{marginRight:5}}),r.a.createElement(l.Mutation,{mutation:_a,update:(e,{data:{deleteSite:t}})=>{const{allSites:a}=e.readQuery({query:Oa});e.writeQuery({query:Oa,data:{allSites:a.filter(e=>e.id!==t.id)}})}},a=>r.a.createElement(ut,{icon:"trash",pointer:!0,onClick:()=>{a({variables:{id:e.id}}),t({type:"success",message:"Site was removed"})}}))))};var Da=()=>{const[e,t]=k(()=>r.a.createElement(qt,{hideModal:t,header:"Add Site"},r.a.createElement(Ra,null)));return r.a.createElement(l.Query,{query:Oa},({data:{allSites:t},loading:a})=>a?r.a.createElement(G,null):r.a.createElement("div",null,r.a.createElement(Ga,null,r.a.createElement(U,null,"Manage Sites"),r.a.createElement(ut,{icon:"plus-square",onClick:e,pointer:!0})),!t.length&&r.a.createElement("div",null,"No sites added yet."),!!t.length&&r.a.createElement(Bt,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Site"),r.a.createElement("th",null,"Edit"))),r.a.createElement("tbody",null,t.map(e=>r.a.createElement(Qa,{key:e.id,site:e}))))))};const Ua=$.div.withConfig({componentId:"b52my-0"})(["button{margin-right:",";}"],e=>e.theme.spacing.normal),Va=$.div.withConfig({componentId:"b52my-1"})(["label{display:block;}margin-bottom:",";"],e=>e.theme.spacing.normal),Ga=$.div.withConfig({componentId:"b52my-2"})(["display:flex;justify-content:space-between;> h3{flex:1;}"]);var Ba=R.a`
  query($id: Int!) {
    site(id: $id) {
      __typename
      id
      title
      url
      fetchers {
        __typename
        id
        url
        category {
          __typename
          id
          title
        }
      }
    }
  }
`,Ha=R.a`
  mutation RunSitemapCrawler($siteId: Int!) {
    runSiteMapCrawler(siteId: $siteId) {
      url
      title
    }
  }
`;var Ka=({match:{params:e}})=>{const{add:t}=_(),[a,n]=k(()=>e.id?r.a.createElement(qt,{hideModal:n,header:"Add Fetcher"},r.a.createElement($a,{defaultSiteId:e.id})):r.a.createElement("div",null,"Not found"));return e.id?r.a.createElement(l.Query,{query:Ba,variables:{id:e.id}},({data:{site:e},loading:n})=>n?r.a.createElement(G,null):e?r.a.createElement("div",null,r.a.createElement(ye,{type:"button",primary:!0,onClick:a},"Add fetcher"),r.a.createElement(l.Mutation,{mutation:Ha},(a,{loading:n})=>r.a.createElement(ye,{type:"button",disabled:n,onClick:()=>{a({variables:{siteId:e.id}}).then(()=>{t({type:"success",message:"Crawled sitemap!"})}).catch(()=>{t({type:"error",message:"Something went wrong..."})})}},n?"Crawling...":"Crawl Sitemap")),r.a.createElement(U,null,e.title),r.a.createElement("strong",null,"URL:")," ",e.url,r.a.createElement("h5",null,"Fetchers"),!(e.fetchers||[]).length&&r.a.createElement("em",null,"No fetchers attached to this site."),(e.fetchers||[]).map(e=>r.a.createElement("div",{key:e.id},e.url," -"," ",e.category?e.category.title:r.a.createElement("em",null,"NoCategory")))):r.a.createElement("div",null,"404 NOT_FOUND")):null};var Wa=({match:{params:e}})=>{const{add:t}=_();return r.a.createElement(ge,null,r.a.createElement(U,null,"Dashboard"),e.page&&r.a.createElement(Na,null),r.a.createElement(Ja,null,r.a.createElement(Ya,null,r.a.createElement(u.Switch,null,r.a.createElement(u.Route,{path:"/admin/categories",component:Wt}),r.a.createElement(u.Route,{path:"/admin/products",component:ya}),r.a.createElement(u.Route,{path:"/admin/fetchers",component:Pa}),r.a.createElement(u.Route,{path:"/admin/site/:id",component:Ka}),r.a.createElement(u.Route,{path:"/admin/sites",component:Da}),r.a.createElement(u.Route,{render:()=>r.a.createElement(n.Fragment,null,r.a.createElement(Za,null,r.a.createElement(u.Link,{className:"admin-nav-item",to:"/admin/categories"},"Manage categories"),r.a.createElement(u.Link,{className:"admin-nav-item",to:"/admin/products"},"Manage products"),r.a.createElement(u.Link,{className:"admin-nav-item",to:"/admin/fetchers"},"Manage fetchers"),r.a.createElement(u.Link,{className:"admin-nav-item",to:"/admin/sites"},"Manage sites")),r.a.createElement(en,null,r.a.createElement(tn,null,r.a.createElement("div",null,"Total Sites"),r.a.createElement("span",null,"47")),r.a.createElement(tn,null,r.a.createElement("div",null,"Total Categories"),r.a.createElement("span",null,"32")),r.a.createElement(tn,null,r.a.createElement("div",null,"Total Products"),r.a.createElement("span",null,"1123"))))}))),r.a.createElement(Xa,null,r.a.createElement(l.Mutation,{mutation:jt},(e,{loading:a})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null,"Update database"),r.a.createElement(ye,{type:"button",disabled:a,onClick:async()=>{await e(),t({message:"Ran all fetchers successfully.",type:"success"})}},a?"Fetching...":"Run fetcher for all listings"))))))};const Ja=$.div.withConfig({componentId:"sc-14eszzy-0"})(["display:flex;justify-content:space-between;background-color:#fff;padding:",";"],e=>e.theme.spacing.normal),Ya=$.div.withConfig({componentId:"sc-14eszzy-1"})(["flex:2;margin-right:",";overflow-x:auto;"],e=>e.theme.spacing.normal),Xa=$.div.withConfig({componentId:"sc-14eszzy-2"})(["flex:1;"]),Za=$.div.withConfig({componentId:"sc-14eszzy-3"})(["margin-bottom:",";.admin-nav-item{display:inline-block;margin:0 ",";padding:"," ",";color:#6c7293;text-decoration:none;border-radius:",";transition:background-color 200ms ease-in-out;&:hover{background-color:#f5f5f9;color:",";}&:first-child{margin:0;}}"],e=>e.theme.spacing.normal,e=>e.theme.spacing.normal,e=>e.theme.spacing.small,e=>e.theme.spacing.normal,e=>e.theme.radius,e=>e.theme.colors.secondary),en=$.div.withConfig({componentId:"sc-14eszzy-4"})(["display:flex;flex-wrap:wrap;> div{flex:1;max-width:33%;margin:0 ",";box-sizing:border-box;&:first-child{margin-left:0;}@media screen and (max-width:700px){min-width:100%;margin:0;margin-bottom:",";}}"],e=>e.theme.spacing.normal,e=>e.theme.spacing.normal),tn=$.div.withConfig({componentId:"sc-14eszzy-5"})(["padding:"," ",";border:#eee 1px solid;border-radius:",";font-size:1.2rem;font-weight:500;text-align:center;display:flex;flex-direction:column;justify-content:center;> div{font-size:1rem;}"],e=>e.theme.spacing.small,e=>e.theme.spacing.normal,e=>e.theme.radius);var an=()=>r.a.createElement(H,{childLimit:5});var nn=$(Je).withConfig({componentId:"sc-166ueat-0"})(["border-radius:0;"]);var rn=class extends n.PureComponent{constructor(){super(...arguments),this.state={dynamic:null}}render(){return n.createElement(ge,null,n.createElement(ln,null,n.createElement(on,null,n.createElement(an,null)),n.createElement(cn,null,n.createElement(nn,null,n.createElement(U,{as:"h1",divided:!0,brand:!0},"Welcome!"),n.createElement(l.Query,{query:Zt},({data:e,loading:t})=>t?n.createElement(G,null):n.createElement(Le,{categorized:!0,products:e.allProducts||[]}))))))}};const ln=$.div.withConfig({componentId:"sc-1w1gogp-0"})(["display:flex;align-items:flex-start;height:100%;"]),on=$.div.withConfig({componentId:"sc-1w1gogp-1"})(["flex:1;flex-basis:30%;min-width:200px;max-width:200px;background-color:#fff;border-radius:4px;margin-right:",";"],e=>e.theme.spacing.huge),cn=$.div.withConfig({componentId:"sc-1w1gogp-2"})(["flex:3;flex-basis:70%;max-width:calc(100% - 200px - "," - 2px);margin-left:",";h1{margin-bottom:",";}"],e=>e.theme.spacing.huge,e=>e.theme.spacing.normal,e=>e.theme.spacing.huge);var sn=[{component:St,exact:!0,path:"/search"},{component:Ye,exact:!0,path:"/category/:id"},{component:wt,exact:!0,path:"/product/:id"},{component:fe,exact:!0,path:"/categories"},{component:Wa,exact:!0,path:"/admin/:page?/:id?"},{component:rn,exact:!0,path:"/"}];p.library.add(g.faPlusCircle,g.faPlusSquare,g.faPlus,g.faStar,g.faEdit,g.faTrash,g.faExternalLinkAlt,g.faCut,g.faArrowCircleLeft,g.faWindowClose,g.faCaretRight,g.faCaretDown);var dn=()=>n.createElement(mn,null,n.createElement(T,null),n.createElement(s.a,null,n.createElement("title",null,"Grabr.io")),n.createElement(h,null,n.createElement(L,null,n.createElement(x,null,n.createElement(u.Switch,null,sn.map(e=>n.createElement(u.Route,Object.assign({key:e.path},e))))))));const mn=$.div.withConfig({componentId:"pwgwqn-0"})(["display:flex;flex-direction:column;height:100%;justify-content:space-between;.header{height:100px;min-height:100px;max-height:100px;}.content{display:block;flex:1;}"]);var un=a(19),pn=a(20),gn=a(21),hn=a(22),fn=a(23),bn=(a(30),a(31),a(32),a(24)),En=R.a`
  {
    state @client {
      count
    }
  }
`,yn=R.a`
  {
    state @client {
      search
    }
  }
`;function vn(e){function t(t){return e.readQuery({query:t}).state}function a(t){return e.writeData({data:{state:t}})}const n={cache:e,resolvers:{Mutation:{search(e,{query:n}){const r=t(yn),l=Object.assign({},r,{search:n});return a(l),l},incrementCount(){const e=t(En),n=Object.assign({},e,{count:e.count+1});return a(n),n}}},defaults:{state:{__typename:"State",count:0,search:"initialsearch"}}};return Object(bn.withClientState)(n)}var xn={colors:{primary:"#41b3a3",secondary:"#3bbe91",lighter:"#e8a87c",brand:"#f7498e",accent:"#fb9a68",text:"#555",darkText:"#555",light:"#f2efe8",border:"#ccc",darker:"#140028"},spacing:{tiny:"3.75px",small:"7.5px",normal:"15px",large:"25px",huge:"30px"},radius:"4px"};class wn extends n.PureComponent{render(){const{css:e,helmet:t,html:a,js:r,styles:l,window:i={}}=this.props;return n.createElement("html",Object.assign({lang:"en",prefix:"og: http://ogp.me/ns#"},t.htmlAttributes.toString()),n.createElement("head",null,t.title.toComponent(),n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),n.createElement("meta",{httpEquiv:"Content-Language",content:"en"}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.meta.toComponent(),t.style.toComponent(),t.link.toComponent(),e&&n.createElement("link",{rel:"stylesheet",href:e}),l,t.script.toComponent(),t.noscript.toComponent()),n.createElement("body",Object.assign({},t.bodyAttributes.toComponent()),n.createElement("div",{id:"root",dangerouslySetInnerHTML:{__html:a}}),n.createElement("script",{dangerouslySetInnerHTML:{__html:Object.keys(i).reduce((e,t)=>e+=`window.${t}=${JSON.stringify(i[t])};`,"")}})),n.createElement("script",{src:r}))}}t.default=function(e){return async t=>{const a=function(){const e=new un.InMemoryCache,t=new fn.HttpLink({credentials:"same-origin",uri:"http://localhost:3030/graphql"});return new pn.ApolloClient({cache:e,link:gn.ApolloLink.from([Object(hn.onError)(({graphQLErrors:e,networkError:t})=>{e&&e.map(({message:e,locations:t,path:a})=>console.log(`[GraphQL error]: Message: ${e}, Location: ${t}, Path: ${a}`)),t&&console.log(`[Network error]: ${t}`)}),vn(e),t]),ssrMode:!0})}(),r=new m.ServerStyleSheet,c={},u=n.createElement(m.StyleSheetManager,{sheet:r.instance},n.createElement(O,{theme:xn},n.createElement(l.ApolloProvider,{client:a},n.createElement(i.ApolloProvider,{client:a},n.createElement(d.StaticRouter,{location:t.request.url,context:c},n.createElement(dn,null))))));if(await Object(l.getDataFromTree)(u),[301,302].includes(c.status))return t.status=c.status,void t.redirect(c.url);if(404===c.status)return t.status=404,void(t.body="Not found");const p=o.renderToString(u),g=o.renderToString(n.createElement(wn,{css:e.client.main("css"),helmet:s.a.renderStatic(),html:p,js:e.client.main("js"),styles:r.getStyleElement(),window:{__APOLLO_STATE__:a.extract()}}));t.type="text/html",t.body=`<!DOCTYPE html>${g}`}}}]);
//# sourceMappingURL=server.js.map