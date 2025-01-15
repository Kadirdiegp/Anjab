import{s as t,m as r,r as s,j as i}from"./index-d811ee04.js";const f=t(r.section)`
  padding: 6rem 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${n=>n.theme.colors.background};
`,x=t(r.div)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`,p=t(r.h2)`
  font-size: 3.5rem;
  color: ${n=>n.theme.colors.text};
  text-align: center;
  margin-bottom: 4rem;
  font-family: "Italiana", serif;
`,g=t(r.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  width: 100%;
  padding: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,u=t(r.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,b=t(r.div)`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`,w=t(r.div)`
  padding: 2rem;
  width: 100%;
  text-align: center;
  background: white;
`,v=t(r.h3)`
  font-size: 1.8rem;
  color: #333333;
  margin: 0 0 0.5rem 0;
  font-family: "Italiana", serif;
  font-weight: 600;
`,y=t(r.p)`
  font-size: 1.1rem;
  color: #666666;
  margin: 0 0 1rem 0;
  font-weight: 500;
`,M=t(r.p)`
  font-size: 1rem;
  color: #555555;
  line-height: 1.6;
  opacity: 0.9;
`,H=()=>{const[n,c]=s.useState(!1),a=s.useRef(null);s.useEffect(()=>{const e=new IntersectionObserver(([o])=>{o.isIntersecting&&(c(!0),e.unobserve(o.target))},{threshold:.1});return a.current&&e.observe(a.current),()=>{a.current&&e.unobserve(a.current)}},[]);const d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,when:"beforeChildren",staggerChildren:.2}}},l={hidden:{opacity:0,y:20},visible:e=>({opacity:1,y:0,transition:{delay:e*.2,duration:.5}})},m=[{name:"Anja Behrens",role:"Geschäftsführerin & Friseurmeisterin",bio:"Mit über 20 Jahren Erfahrung leitet Anja unser Team mit Leidenschaft und Expertise.",image:"https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"},{name:"Sarah Schmidt",role:"Friseurmeisterin",bio:"Sarah ist spezialisiert auf Farbtechniken und kreative Schnitte.",image:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"},{name:"Lisa Meyer",role:"Friseurin",bio:"Lisa ist unsere Expertin für Hochsteckfrisuren und Styling.",image:"https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"}];return i.jsx(f,{ref:a,initial:"hidden",animate:n?"visible":"hidden",variants:d,children:i.jsxs(x,{children:[i.jsx(p,{children:"Unser Team"}),i.jsx(g,{children:m.map((e,o)=>i.jsxs(u,{custom:o,variants:l,initial:"hidden",animate:n?"visible":"hidden",whileHover:{y:-10,transition:{duration:.3}},children:[i.jsx(b,{whileHover:{scale:1.05},transition:{duration:.3},children:i.jsx("img",{src:e.image,alt:e.name,loading:"lazy",onError:h=>{console.error("Image failed to load:",e.image),h.currentTarget.src="https://via.placeholder.com/400x400?text=Bild+nicht+verfügbar"}})}),i.jsxs(w,{children:[i.jsx(v,{children:e.name}),i.jsx(y,{children:e.role}),i.jsx(M,{children:e.bio})]})]},o))})]})})};export{H as A};
//# sourceMappingURL=About-d34dd03e.js.map
