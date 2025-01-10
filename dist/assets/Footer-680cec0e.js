import{c as o,s as r,j as e,L as i}from"./index-cf7696a4.js";import{b as c,c as l,d,e as m,f as h}from"./index.esm-0f13d08e.js";const p="/assets/2-2bbe0bb0.png",s=o`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,x=o`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,g=r.footer`
  background: #000000;
  color: white;
  padding: 5rem 0 2rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, ${t=>t.theme.colors.primary}, ${t=>t.theme.colors.accent});
  }
`,f=r.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`,a=r.div`
  animation: ${s} 0.6s ease-out;

  h3 {
    font-family: ${t=>t.theme.fonts.heading};
    color: ${t=>t.theme.colors.accent};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background: ${t=>t.theme.colors.accent};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 60px;
    }

    @media (max-width: 768px) {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`,j=r(a)`
  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(10px);
    }

    @media (max-width: 768px) {
      justify-content: center;
      &:hover {
        transform: translateY(-5px);
      }
    }

    svg {
      color: ${t=>t.theme.colors.accent};
      font-size: 1.2rem;
    }

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${t=>t.theme.colors.accent};
      }
    }
  }
`,b=r(a)`
  .hours-grid {
    display: grid;
    gap: 0.8rem;
  }

  .day-row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
      border-bottom-color: ${t=>t.theme.colors.accent};
      transform: translateX(10px);
    }

    @media (max-width: 768px) {
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
`,v=r(a)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`,u=r(i)`
  display: block;
  transition: transform 0.3s ease;

  img {
    height: 120px;
    width: auto;
    filter: brightness(1);
  }

  &:hover {
    animation: ${x} 1s ease infinite;
  }
`,w=r.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: white;
    font-size: 1.8rem;
    transition: all 0.3s ease;

    &:hover {
      color: ${t=>t.theme.colors.accent};
      transform: translateY(-5px);
    }
  }
`,y=r.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  animation: ${s} 0.6s ease-out;

  a {
    color: ${t=>t.theme.colors.accent};
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }

  .developer-credit {
    margin-top: 1rem;
    font-size: 0.8rem;
    opacity: 0.6;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }

    a {
      color: ${t=>t.theme.colors.accent};
      margin: 0;
    }
  }
`,F=()=>{const t=n=>{window.location.pathname==="/"&&(n.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))};return e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsxs(j,{children:[e.jsx("h3",{children:"Kontakt"}),e.jsxs("div",{className:"contact-item",children:[e.jsx(c,{}),e.jsx("a",{href:"tel:+4947219656511",children:"04721 96 56 511"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx(l,{}),e.jsx("a",{href:"mailto:info@haar-ambiente.de",children:"info@haar-ambiente.de"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx(d,{}),e.jsx("p",{children:"Ahnstraße 22, 27472 Cuxhaven"})]})]}),e.jsxs(b,{children:[e.jsx("h3",{children:"Öffnungszeiten"}),e.jsxs("div",{className:"hours-grid",children:[e.jsxs("div",{className:"day-row",children:[e.jsx("span",{children:"Montag"}),e.jsx("span",{children:"Geschlossen"})]}),e.jsxs("div",{className:"day-row",children:[e.jsx("span",{children:"Dienstag - Freitag"}),e.jsx("span",{children:"09:00 - 18:00"})]}),e.jsxs("div",{className:"day-row",children:[e.jsx("span",{children:"Samstag"}),e.jsx("span",{children:"08:00 - 13:00"})]}),e.jsxs("div",{className:"day-row",children:[e.jsx("span",{children:"Sonntag"}),e.jsx("span",{children:"Geschlossen"})]})]})]}),e.jsxs(v,{children:[e.jsx(u,{to:"/",onClick:t,children:e.jsx("img",{src:p,alt:"Haar Ambiente Logo"})}),e.jsxs(w,{children:[e.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(m,{})}),e.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(h,{})})]})]})]}),e.jsxs(y,{children:[e.jsxs("p",{children:["© ",new Date().getFullYear()," Haar Ambiente"]}),e.jsxs("div",{children:[e.jsx("a",{href:"/impressum",children:"Impressum"}),e.jsx("a",{href:"/datenschutz",children:"Datenschutz"}),e.jsx("a",{href:"/agb",children:"AGB"})]}),e.jsxs("div",{className:"developer-credit",children:["Entwickelt von ",e.jsx("a",{href:"https://rodriguez-digital.de",target:"_blank",rel:"noopener noreferrer",children:"Kadir Diego Padin Rodriguez"})]})]})]})};export{F as default};
//# sourceMappingURL=Footer-680cec0e.js.map
