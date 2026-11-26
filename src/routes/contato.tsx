import { createFileRoute } from '@tanstack/react-router';
import { ContactSection, PageHeading } from '@/components/site';
import { pageHead } from '@/lib/business';
export const Route = createFileRoute('/contato')({
  head: () => pageHead('Contato e orçamento', 'Solicite orçamento pelo WhatsApp (31) 99222-6589. Rua Dr. Floriano de Lemos, 386, Industrial, Contagem – MG. Segunda a sábado, 07h às 18h.'),
  component: ContactPage,
});
function ContactPage() { return <><PageHeading eyebrow="Contato" title="Sua ideia. Nossa conversa." description="Fale com a Michael Estrutura e Serralheria para consultar serviços e solicitar seu orçamento." /><ContactSection /></>; }