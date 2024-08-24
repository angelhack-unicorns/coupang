// scrape-coupang.ts

import { useQuery } from '@tanstack/react-query';
import { categories } from './fetch-categories';

const URL_START = 'https://www.coupang.com/np/search?component=&q=';
const URL_END = '&channel=user';

const headers = {
  authority: 'www.coupang.com',
  method: 'GET',
  path: '/np/search?component=&q=socks&channel=user',
  scheme: 'https',
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-encoding': 'gzip, deflate, br, zstd',
  'accept-language': 'en-US,en;q=0.9',
  'cache-control': 'max-age=0',
  priority: 'u=0, i',
  'sec-ch-ua':
    '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': 'macOS',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
};

interface ProductInfo {
  product_url: string;
  src: string;
  name: string;
  price: string;
}

const getPageContent = async (url: string): Promise<string> => {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.text();
};

const parseProducts = (pageContent: string): ProductInfo[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(pageContent, 'text/html');
  const productUl = doc.getElementById('productList');
  if (!productUl) return [];

  const topProductLis = Array.from(productUl.querySelectorAll('li')).filter(
    (li) => li.querySelector('a > span.number')
  );

  return topProductLis
    .map((productLi) => {
      const a = productLi.querySelector('a');
      if (!a) return null;

      const href = a.getAttribute('href');
      const productUrl = `https://www.coupang.com${href}`;

      const img = a.querySelector('dl img');
      const src = img?.getAttribute('src')?.replace(/^[^a-zA-Z0-9]+/, '') || '';

      const name = a.querySelector('dl dd div.name')?.textContent || '';
      const price =
        a.querySelector(
          'dl dd div.price-area div.price-wrap div.price em.sale strong.price-value'
        )?.textContent || '';

      return {
        product_url: productUrl,
        src,
        name,
        price,
      };
    })
    .filter((product): product is ProductInfo => product !== null);
};

const fetchCoupangProducts = async (q: string): Promise<ProductInfo[]> => {
  const url = `${URL_START}${q}${URL_END}`;
  const pageContent = await getPageContent(url);
  return parseProducts(pageContent);
};

export const useCoupangScraper = () => {
  const q = categories.items[1].name.toLowerCase().replace(/\s+/g, '+');

  return useQuery({
    queryKey: ['coupangProducts', q],
    queryFn: () => fetchCoupangProducts(q),
  });
};
