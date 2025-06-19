import './App.css'
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import NotFound from './NotFound';
import Home from './Home/Home';
import Posts from './Posts/Posts';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const links = [
  { link: "ԳԼԽԱՎՈՐ", route: "/", id: 1 },
  { link: "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ", route: "/posts", id: 2 },
  { link: "ԲԼՈԳ", route: "/blog", id: 3 },
  { link: "ԿՈՆՏԱԿՏՆԵՐ", route: "/contact", id: 4 },   
];

export default function App() {
    return (
      <BrowserRouter>
        <>
          <header className="header">
            <img
              src={`${import.meta.env.BASE_URL}screenshot.png`}
              alt="screenshot"
              style={{
                width: "200px",
                height: "100px",
                objectFit: "contain",
                transform: "scale(1.1)",
                objectPosition: "10% 100%",
                cursor: "pointer",
              }}
            />
            <nav className="navbar">
              {links.map((item) => {
                return (
                  <NavLink to={item.route} key={item.id}>
                    {item.link}
                  </NavLink>
                );
              })}
            </nav>
          </header>
        </>

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
}