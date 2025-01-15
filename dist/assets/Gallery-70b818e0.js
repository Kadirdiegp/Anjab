import{s as i,j as t}from"./index-d811ee04.js";const o=i.section`
  padding: 6rem 0;
  background: #fff;
`,l=i.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,s=i.h2`
  font-family: ${a=>a.theme.fonts.heading};
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${a=>a.theme.colors.primary};
  text-align: center;
  font-weight: 400;
`,n=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,f=i.div`
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
`,m=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`,d=()=>{const a=[{url:"https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Elegante Hochsteckfrisur"},{url:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Moderne Haarschnitte"},{url:"https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Kreative Färbetechniken"},{url:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Natürliche Looks"},{url:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Brautfrisuren"},{url:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",alt:"Styling Inspiration"}];return t.jsx(o,{id:"galerie",children:t.jsxs(l,{children:[t.jsx(s,{children:"Galerie"}),t.jsx(n,{children:a.map((e,r)=>t.jsx(f,{children:t.jsx(m,{src:e.url,alt:e.alt})},r))})]})})};export{d as default};
//# sourceMappingURL=Gallery-70b818e0.js.map
