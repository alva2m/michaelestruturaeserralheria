import { createFileRoute } from '@tanstack/react-router';
import { GallerySection, PageHeading, QuoteBand } from '@/components/site';
import { pageHead } from '@/lib/business';
export const Route = createFileRoute('/trabalhos')({
  head: () => pageHead('Galeria de trabalhos', 'Veja fotografias reais dos trabalhos em metal e estruturas da Michael Estrutura e Serralheria, localizada em Contagem, Minas Gerais.'),
  component: WorksPage,
});
function WorksPage() { return <><PageHeading eyebrow="Galeria de trabalhos" title="O metal em cada detalhe." description="Fotografias dos trabalhos da Michael Estrutura e Serralheria." /><GallerySection /><QuoteBand /></>; }