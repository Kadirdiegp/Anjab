import{s as i,r as a,u,j as o,L as m}from"./index-cf7696a4.js";import{F as b,a as f}from"./index.esm-0f13d08e.js";const k="/assets/HAAR-abbdc6c3.png",v=i.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.$isScrolled?"#fff":"transparent"};
  box-shadow: ${e=>e.$isScrolled?"0 2px 10px rgba(0, 0, 0, 0.1)":"none"};
  transition: all 0.3s ease;
`,j=i.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,w=i(m)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  img {
    height: 50px;
    width: auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`,y=i.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    background: ${e=>e.theme.colors.background};
    padding: 5rem 2rem;
    transform: translateX(${e=>e.$isOpen?"0":"100%"});
    transition: transform 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    gap: 1rem;
  }
`,t=i(m)`
  color: ${e=>e.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: ${e=>e.theme.colors.primary};
    background: ${e=>e.theme.colors.backgroundLight};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 1rem;
    border-radius: 8px;

    &:hover {
      background: ${e=>e.theme.colors.backgroundLight};
    }
  }
`,$=i.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.primary};
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 1001;

  &:hover {
    color: ${e=>e.theme.colors.primaryDark};
  }

  @media (max-width: 768px) {
    display: block;
  }
`,C=i.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${e=>e.$isOpen?1:0};
    visibility: ${e=>e.$isOpen?"visible":"hidden"};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
  }
`,E=()=>{const[e,c]=a.useState(!1),[h,x]=a.useState(!1),l=u().pathname==="/";a.useEffect(()=>{const s=()=>{x(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),a.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]);const r=s=>{if(n(),l){const d=document.getElementById(s);d&&d.scrollIntoView({behavior:"smooth"})}},p=()=>{c(!e)},n=()=>{c(!1)},g=s=>{l&&(s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})),n()};return o.jsxs(o.Fragment,{children:[o.jsx(v,{$isScrolled:h,children:o.jsxs(j,{children:[o.jsx(w,{to:"/",onClick:g,children:o.jsx("img",{src:k,alt:"Haar Ambiente Logo"})}),o.jsx($,{onClick:p,"aria-label":"Toggle menu",children:e?o.jsx(b,{}):o.jsx(f,{})}),o.jsx(y,{$isOpen:e,children:l?o.jsxs(o.Fragment,{children:[o.jsx(t,{to:"/",onClick:()=>r("home"),children:"Home"}),o.jsx(t,{to:"/",onClick:()=>r("services"),children:"Services"}),o.jsx(t,{to:"/",onClick:()=>r("galerie"),children:"Galerie"}),o.jsx(t,{to:"/",onClick:()=>r("about"),children:"Über uns"}),o.jsx(t,{to:"/",onClick:()=>r("contact"),children:"Kontakt"})]}):o.jsxs(o.Fragment,{children:[o.jsx(t,{to:"/",onClick:n,children:"Home"}),o.jsx(t,{to:"/#services",onClick:n,children:"Services"}),o.jsx(t,{to:"/#galerie",onClick:n,children:"Galerie"}),o.jsx(t,{to:"/#about",onClick:n,children:"Über uns"}),o.jsx(t,{to:"/#contact",onClick:n,children:"Kontakt"})]})})]})}),o.jsx(C,{$isOpen:e,onClick:n})]})};export{E as default};
//# sourceMappingURL=Navbar-7cd9676c.js.map
