import { describe, expect, it } from 'vitest';
import { business, whatsappUrl } from '@/lib/business';

describe('Confirmed contact details', () => {
  it('sends quote requests to the supplied WhatsApp number and message', () => {
    const url = new URL(whatsappUrl);
    expect(url.origin + url.pathname).toBe('https://wa.me/5531992226589');
    expect(url.searchParams.get('text')).toBe('Olá! Gostaria de saber mais sobre os serviços de serralheria.');
  });
  it('keeps the supplied opening hours', () => {
    expect(business.hours).toBe('Segunda a sábado: 07h às 18h');
    expect(business.sunday).toBe('Domingo: fechado');
  });
});