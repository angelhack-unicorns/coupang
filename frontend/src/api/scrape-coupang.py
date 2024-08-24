import requests
import re
from bs4 import BeautifulSoup

url_start = 'https://www.coupang.com/np/search?component=&q='
url_end = '&channel=user'

headers = {
  "authority": "www.coupang.com",
  "method": "GET",
  "path": "/np/search?component=&q=socks&channel=user",
  "scheme": "https",
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "accept-encoding": "gzip, deflate, br, zstd",
  "accept-language": "en-US,en;q=0.9",
  "cache-control": "max-age=0",
  "priority": "u=0, i",
  "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "macOS",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "none",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

class CoupangScraper:
  def get_page_content(self, url):
    response = requests.get(url, headers=headers, timeout=10)
    if response.status_code == 200:
      return response.text
    return None
  def parse_products(self, page_content):
    image_urls = []
    soup = BeautifulSoup(page_content, 'html.parser')
    product_ul = soup.find('ul', id='productList')
    product_lis = product_ul.find_all('li')
    top_product_lis = []
    for product_li in product_lis:
      product_li_a = product_li.find('a', recursive=False)
      if not product_li_a:
        break
      product_li_span = product_li_a.find('span', recursive=False)
      if product_li_span and 'number' in product_li_span.get('class', []):
        top_product_lis.append(product_li)
    print("started printing: ")
    for product_li in top_product_lis:
      a = product_li.find('a', recursive=False)

      # gets the href of the product link
      href = a.get('href')
      product_url = f'https://www.coupang.com{href}'
      
      dl = a.find('dl', recursie=False)
      img = dl.find('img')
      src = img.get('src')
      src = re.sub(r'^[^a-zA-Z0-9]+', '', src)

      dd = dl.find('dd', recursive=False)
      div = dd.find('div', recursive=False)
      div_name = div.find('div', class_="name", recursive=False)
      name = div_name.get_text()
      
      div_price_area = div.find('div', class_="price-area", recursive=False)
      div_price_wrap = div_price_area.find('div', class_="price-wrap", recursive=False)
      div_price = div_price_wrap.find('div', class_="price", recursive=False)
      em_sale = div_price.find('em', class_="sale", recursive=False)
      strong_price_value = em_sale.find('strong', class_="price-value", recursive=False)
      price = strong_price_value.get_text()

      image_urls.append({
        "product_url": product_url,
        "src": src,
        "name": name,
        "price": price
      })
    return image_urls
  def make_request(self, item):
    url = url_start + item + url_end
    page_content = self.get_page_content(url)
    if page_content:
      return self.parse_products(page_content)
    return None


def main():
  coupang_scraper = CoupangScraper()

if __name__ == "__main__":
  main()