import { createFileRoute } from '@tanstack/react-router';
import { ServicesSection, PageHeading, QuoteBand } from '@/components/site';
import { pageHead } from '@/lib/business';
export const Route = createFileRoute('/servicos')({
  head: () => pageHead('Serviços de serralheria', 'Estruturas metálicas, artigos metálicos, esquadrias e soldagem. Converse com a Michael Estrutura e Serralheria em Contagem sobre seu projeto.'),
  component: ServicesPage,
});
function ServicesPage() { return <><PageHeading eyebrow="Serviços" title="Possibilidades em metal." description="Conheça nossas áreas de trabalho. Para confirmar a disponibilidade e os detalhes do que você precisa, fale diretamente com a Michael." /><ServicesSection /><QuoteBand /></>; }