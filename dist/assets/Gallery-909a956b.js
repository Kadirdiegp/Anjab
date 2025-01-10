import{s as a,j as t}from"./index-cf7696a4.js";const o=a.section`
  padding: 6rem 0;
  background: #fff;
`,s=a.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,l=a.span`
  font-size: 4rem;
  opacity: 0.5;
  font-family: ${i=>i.theme.fonts.heading};
  display: block;
  margin-bottom: 1rem;
  color: #000;
`,f=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,n=a.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`,d=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`,x=()=>{const i=[{url:"https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Elegante Hochsteckfrisur"},{url:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Moderne Haarschnitte"},{url:"https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Kreative Färbetechniken"},{url:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Natürliche Looks"},{url:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Brautfrisuren"},{url:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Styling Inspiration"}];return t.jsx(o,{id:"galerie",children:t.jsxs(s,{children:[t.jsx(l,{children:"02"}),t.jsx(f,{children:i.map((r,e)=>t.jsx(n,{children:t.jsx(d,{src:r.url,alt:r.alt})},e))})]})})};export{x as default};
//# sourceMappingURL=Gallery-909a956b.js.map
