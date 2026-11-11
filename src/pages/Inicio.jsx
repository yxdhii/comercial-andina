import React, { useState } from "react";
import {
  ArrowRight,
  Bell,
  Search,
  Laptop,
  Headphones,
  Monitor,
  Keyboard,
  Plus,
  Heart,
  Image as ImageIcon,
} from "lucide-react";
import { products, categories, soles } from "../data/products";
import ProductImage from "../components/ProductImage";
import { useCart } from "../context/CartContext";
const icons = {
  Laptops: Laptop,
  Audífonos: Headphones,
  Monitores: Monitor,
  Accesorios: Keyboard,
};
export default function Inicio({ onNavigate, notify, setSearch, setCategory }) {
  const { add } = useCart();
  const [q, setQ] = useState("");
  const [favorites, setFavorites] = useState([]);
  const goSearch = (e) => {
    e.preventDefault();
    setSearch(q);
    setCategory("Todos");
    onNavigate("catalogo");
  };
  const goCategory = (cat) => {
    setSearch("");
    setCategory(cat);
    onNavigate("catalogo");
  };
  const addProduct = (id) => {
    add(id);
    notify("Producto agregado al carrito");
  };
  return (
    <>
      <header className="home-top">
        <div className="brand-row">
          <span className="brand-avatar">CA</span>
          <div>
            <small>TECNOLOGÍA PREMIUM</small>
            <strong>Comercial Andina</strong>
          </div>
        </div>
        <div className="top-actions">
          <button
            aria-label="Notificaciones"
            onClick={() => notify("No tienes notificaciones nuevas")}
          >
            <Bell size={19} />
          </button>
          <button
            aria-label="Ir a búsqueda"
            onClick={() => goCategory("Todos")}
          >
            <Search size={20} />
          </button>
        </div>
      </header>
      <div className="page-body home-body">
        <section className="hero">
          <img
            className="hero-background"
            src={`${import.meta.env.BASE_URL}images/banner-workstation.jpg`}
            alt="Laptop y estación de trabajo de alto rendimiento"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="hero-label">LANZAMIENTO 2026</span>
            <h1>Nueva Era en Laptops &amp; Workstations</h1>
            <p>
              Potencia y tecnología de alto rendimiento para llevar tus
              proyectos más lejos.
            </p>
            <button onClick={() => goCategory("Laptops")}>
              Ver catálogo <ArrowRight size={15} />
            </button>
          </div>
        </section>

        <div className="section-head">
          <h2>Categorías</h2>
          <button onClick={() => goCategory("Todos")}>Ver todas</button>
        </div>
        <div className="category-scroll">
          {categories.slice(1).map((cat) => {
            const Icon = icons[cat];
            return (
              <button
                key={cat}
                onClick={() => goCategory(cat)}
                className="category-pill"
              >
                <Icon size={15} />
                {cat}
              </button>
            );
          })}
        </div>
        <div className="section-head recommendations">
          <div>
            <h2>Recomendados para ti</h2>
            <p>Equipos premium con envío prioritario en Lima y provincias</p>
          </div>
        </div>
        <div className="featured-grid">
          {products.slice(0, 4).map((p) => (
            <article className="featured-card" key={p.id}>
              <div className="featured-photo">
                <ProductImage product={p} />
                {p.badge && <span className="stock-tag">{p.badge}</span>}
                <button
                  className="favorite"
                  aria-label={
                    (favorites.includes(p.id) ? "Quitar de" : "Agregar a") +
                    " favoritos: " +
                    p.name
                  }
                  aria-pressed={favorites.includes(p.id)}
                  onClick={() =>
                    setFavorites((f) =>
                      f.includes(p.id)
                        ? f.filter((id) => id !== p.id)
                        : [...f, p.id],
                    )
                  }
                >
                  <Heart
                    size={16}
                    fill={favorites.includes(p.id) ? "#d34e64" : "none"}
                  />
                </button>
              </div>
              <div className="featured-details">
                <span className="product-label">{p.label}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="featured-footer">
                  <div>
                    <del>{soles(p.oldPrice)}</del>
                    <strong>{soles(p.price)}</strong>
                  </div>
                  <button
                    className="circle-add"
                    onClick={() => addProduct(p.id)}
                    aria-label={"Agregar " + p.name + " al carrito"}
                  >
                    <Plus size={19} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
