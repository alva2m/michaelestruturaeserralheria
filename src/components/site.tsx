import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, MapPin, Phone, Clock3, Menu, X, Frame, Boxes, Construction, Zap, MoveUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { business, services, whatsappUrl } from '@/lib/business';
const gate = { asset_id: 'trabalho-1', url: '/images/trabalho-1.webp' };
const roof = { asset_id: 'trabalho-2', url: '/images/trabalho-2.webp' };
const gateDetail = { asset_id: 'trabalho-3', url: '/images/trabalho-3.webp' };
const ladder = { asset_id: 'trabalho-4', url: '/images/trabalho-4.webp' };

const navigation = [
  { to: '/', label: 'Início' }, { to: '/sobre', label: 'A empresa' },
  { to: '/servicos', label: 'Serviços' }, { to: '/trabalhos', label: 'Trabalhos' },
  { to: '/contato', label: 'Contato' },
] as const;
const photographs = [
  { image: roof, title: 'Estrutura metálica', alt: 'Estrutura metálica de cobertura em área externa' },
  { image: gate, title: 'Trabalho em metal', alt: 'Peças de portão metálico na oficina' },
  { image: ladder, title: 'Detalhes em metal', alt: 'Escada metálica branca com proteção circular' },
  { image: gateDetail, title: 'Serralheria', alt: 'Outro ângulo das peças de portão metálico na oficina' },
];
const serviceIcons = [Construction, Boxes, Frame, Zap];

export function WhatsAppIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.8 11.6a8.8 8.8 0 0 1-13 7.8L3 21l1.5-4.6A8.8 8.8 0 1 1 20.8 11.6Z"/><path d="M8.2 7.5c-.8.2-1.3 1.3-.9 2.4 1 2.8 3.3 5 6.3 5.7 1.1.3 2.1-.3 2.3-1.2l-2.3-1.5-1.1 1c-1.6-.7-2.7-1.8-3.3-3.3l.8-1.1-1.3-2Z"/></svg>;
}
export function Brand() {
  return <Link to="/" className="brand" aria-label="Michael Estrutura e Serralheria — início">
    <svg viewBox="0 0 44 52" className="brand-symbol" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true"><path d="M4 47V6l18 16L40 6v41M13 47V27l9 8 9-8v20"/><path d="M3 49h38" strokeWidth="2"/></svg>
    <span><span className="brand-name">MICHAEL</span><span className="brand-subtitle">ESTRUTURA E SERRALHERIA</span></span>
  </Link>;
}
export function QuoteButton({ label = 'Solicitar orçamento', className }: { label?: string; className?: string }) {
  return <Button variant="industrial" size="project" asChild className={className}><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{label}<ArrowUpRight /></a></Button>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="site-container topbar-inner"><span><MapPin />Industrial, Contagem – MG</span><span className="topbar-hours"><Clock3 />Segunda a sábado, 07h às 18h</span><a href="tel:+5531992226589" className="flex items-center gap-2"><Phone className="size-3" />{business.phone}</a></div></div>
    <header className="site-header"><div className="site-container header-inner"><Brand /><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }}>{item.label}</Link>)}</nav><QuoteButton className="header-quote" /><Button variant="ghost" size="icon" className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Navegação móvel">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}<QuoteButton /></nav>}</header>
  </>;
}
export function Hero() {
  return <><section className="hero"><img className="hero-photo" src={roof.url} alt="Estrutura de cobertura metálica, trabalho da Michael Estrutura e Serralheria" fetchPriority="high" /><div className="site-container hero-inner"><div className="eyebrow">Michael Estrutura e Serralheria</div><h1>Soluções em<br /><span>estruturas</span> e<br />serralheria<span>.</span></h1><p className="hero-copy">Conheça nosso trabalho e entre em contato para solicitar informações e orçamentos.</p><div className="hero-actions"><QuoteButton /><Link to="/trabalhos" className="hero-secondary">Conheça os trabalhos <ArrowUpRight className="size-4" /></Link></div><div className="hero-location"><MapPin />Bairro Industrial · Contagem, Minas Gerais</div></div><span className="hero-caption">METAL QUE GANHA FORMA</span></section><div className="discipline-band"><div className="site-container disciplines">{services.map((service,index) => { const Icon = serviceIcons[index] ?? Construction; return <div key={service.title} className="discipline"><Icon /><span>{service.title}</span></div>; })}</div></div></>;
}
export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-heading"><div className="site-container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
export function ServicesSection({ preview = false }: { preview?: boolean }) {
  return <section className="section"><div className="site-container"><div className="section-header"><div><div className="eyebrow">O que fazemos</div><h2 className="section-title">Metal, forma e possibilidades.</h2></div>{preview && <Link to="/servicos" className="text-link">Conheça nossos serviços <ArrowUpRight /></Link>}</div><div className="services-grid">{services.map((service,index) => { const Icon = serviceIcons[index] ?? Construction; return <article className="service" key={service.title}><div className="service-top"><Icon /><span className="service-number">0{index+1}</span></div><h3>{service.title}</h3><p>{service.description}</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar sobre o projeto <ArrowUpRight /></a></article>; })}</div></div></section>;
}
export function AboutSection({ preview = false }: { preview?: boolean }) {
  return <section className="section paper-section"><div className="site-container about-grid"><div className="about-photo-wrap"><img src={gate.url} alt="Peças metálicas na oficina da Michael Estrutura e Serralheria" className="about-photo" loading="lazy" /></div><div className="about-text"><div className="eyebrow">A nossa empresa</div><h2 className="section-title">Michael Estrutura<br />e Serralheria.</h2><p>No bairro Industrial, em Contagem, a Michael Estrutura e Serralheria atua com trabalhos em metal e estruturas.</p><p>Cada necessidade começa com uma conversa. Apresente sua ideia e consulte as possibilidades de trabalho para o seu projeto.</p><div className="about-detail"><MapPin /><span>Industrial, Contagem – Minas Gerais</span></div>{preview ? <Link to="/sobre" className="text-link">Conheça a empresa <ArrowUpRight /></Link> : <QuoteButton label="Converse com a Michael" />}</div></div></section>;
}
export function GallerySection({ preview = false }: { preview?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const photo = selected === null ? undefined : photographs[selected];
  return <section className="section"><div className="site-container"><div className="section-header"><div><div className="eyebrow">Do metal ao resultado</div><h2 className="section-title">Nosso trabalho, de perto.</h2><p className="section-intro">Registros reais dos trabalhos da Michael Estrutura e Serralheria.</p></div>{preview && <Link to="/trabalhos" className="text-link">Ver todos os trabalhos <ArrowUpRight /></Link>}</div><div className="gallery-grid">{photographs.map((item,index) => <article key={item.image.asset_id}><Button variant="ghost" className="work-button" onClick={() => setSelected(index)} aria-label={`Ampliar foto: ${item.alt}`}><img src={item.image.url} alt={item.alt} loading="lazy" /><span className="work-expand"><MoveUpRight /></span></Button><div className="work-label"><span>{item.title}</span><small>0{index+1} / 04</small></div></article>)}</div></div><Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="gallery-modal"><DialogTitle>{photo?.title ?? 'Trabalho em metal'}</DialogTitle><DialogDescription className="sr-only">Fotografia real dos trabalhos da empresa</DialogDescription>{photo && <img src={photo.image.url} alt={photo.alt} />}<div className="gallery-controls"><Button variant="steel" size="icon" aria-label="Foto anterior" onClick={() => setSelected(current => current === null ? 0 : (current + photographs.length - 1) % photographs.length)}><ChevronLeft /></Button><span>{selected === null ? 0 : selected + 1} / {photographs.length}</span><Button variant="steel" size="icon" aria-label="Próxima foto" onClick={() => setSelected(current => current === null ? 0 : (current + 1) % photographs.length)}><ChevronRight /></Button></div></DialogContent></Dialog></section>;
}
export function QuoteBand() {
  return <section className="quote-band"><div className="site-container quote-inner"><div><h2>Seu próximo projeto começa aqui.</h2><p>Conte o que você precisa. Vamos conversar sobre as possibilidades.</p></div><QuoteButton label="Solicitar orçamento" className="quote-cta" /></div></section>;
}
export function ContactSection() {
  return <section className="section"><div className="site-container contact-grid"><div><div className="eyebrow">Contato e localização</div><h2 className="section-title">Vamos falar sobre<br />o seu projeto?</h2><p className="section-intro">Entre em contato com a Michael para solicitar informações e orçamento.</p><div className="mt-7"><QuoteButton label="Conversar pelo WhatsApp" /></div></div><div className="contact-details"><div className="contact-item"><Phone /><div><h3>Telefone e WhatsApp</h3><a href="tel:+5531992226589">{business.phone}</a></div></div><div className="contact-item"><MapPin /><div><h3>Onde estamos</h3><p>Rua Dr. Floriano de Lemos, 386<br />Industrial, Contagem – MG<br />CEP 32235-380</p></div></div><div className="contact-item"><Clock3 /><div><h3>Horários de funcionamento</h3><p>{business.hours}<br />{business.sunday}</p></div></div></div></div></section>;
}
export function Footer() {
  return <><footer className="site-footer"><div className="site-container"><div className="footer-grid"><div className="footer-brand"><Brand /><p>Trabalhos em metal e estruturas.<br />Industrial, Contagem – MG.</p></div><div><h3>Navegação</h3><nav className="footer-links" aria-label="Navegação do rodapé">{navigation.map(item => <Link to={item.to} key={item.to}>{item.label}</Link>)}</nav></div><div><h3>Contato</h3><a href="tel:+5531992226589">{business.phone}</a><p>Rua Dr. Floriano de Lemos, 386<br />Industrial, Contagem – MG<br />CEP 32235-380</p></div><div><h3>Funcionamento</h3><p>Segunda a sábado<br />07h às 18h<br />Domingo: fechado</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4">Fale pelo WhatsApp <ArrowRight className="size-3" /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Michael Estrutura e Serralheria. Todos os direitos reservados.</span><span>Contagem, Minas Gerais</span></div></div></footer><Button asChild className="floating-whatsapp" size="icon"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Michael pelo WhatsApp" title="Conversar pelo WhatsApp"><WhatsAppIcon /></a></Button></>;
}