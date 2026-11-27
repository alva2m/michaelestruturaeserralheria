import { createFileRoute } from '@tanstack/react-router';
import { AboutSection, PageHeading, QuoteBand } from '@/components/site';
import { pageHead } from '@/lib/business';
export const Route = createFileRoute('/sobre')({
  head: () => pageHead('A empresa', 'Conheça a Michael Estrutura e Serralheria, empresa de trabalhos em metal e estruturas localizada no bairro Industrial, em Contagem, Minas Gerais.'),
  component: AboutPage,
});
function AboutPage() { return <><PageHeading eyebrow="A empresa" title="Metal é a nossa matéria-prima." description="Michael Estrutura e Serralheria. Trabalhos com metal e estruturas no bairro Industrial, em Contagem." /><AboutSection /><QuoteBand /></>; }