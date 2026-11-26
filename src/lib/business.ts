export const business = {
  name: 'Michael Estrutura e Serralheria',
  phone: '(31) 99222-6589',
  address: 'Rua Dr. Floriano de Lemos, 386 - Industrial, Contagem - MG, 32235-380',
  message: 'Olá! Gostaria de saber mais sobre os serviços de serralheria.',
  hours: 'Segunda a sábado: 07h às 18h',
  sunday: 'Domingo: fechado',
};
export const whatsappUrl = `https://wa.me/5531992226589?text=${encodeURIComponent(business.message)}`;
export const services = [
  { title: 'Estruturas metálicas', description: 'Trabalhos com metal e estruturas para diferentes necessidades.', icon: 'structure' },
  { title: 'Artigos metálicos', description: 'Fabricação de artigos em metal. Consulte as possibilidades para seu projeto.', icon: 'metal' },
  { title: 'Esquadrias metálicas', description: 'Trabalhos de serralheria voltados a esquadrias em metal.', icon: 'frame' },
  { title: 'Serviços de soldagem', description: 'Entre em contato para conversar sobre sua necessidade de soldagem.', icon: 'welding' },
];
export function pageHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | Michael Estrutura e Serralheria` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | Michael Estrutura e Serralheria` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] };
}