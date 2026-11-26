import { createFileRoute } from "@tanstack/react-router";
import { Hero, ServicesSection, AboutSection, GallerySection, QuoteBand, ContactSection } from '@/components/site';
import { pageHead } from '@/lib/business';
export const Route = createFileRoute("/")({
  head: () => pageHead('Soluções em estruturas e serralheria em Contagem', 'Conheça os trabalhos da Michael Estrutura e Serralheria, no bairro Industrial, Contagem. Entre em contato pelo WhatsApp e solicite seu orçamento.'),
  component: Index,
});
function Index() {
  return <><Hero /><ServicesSection preview /><AboutSection preview /><GallerySection preview /><QuoteBand /><ContactSection /></>;
}
