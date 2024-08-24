// // test.tsx

// import { useCoupangScraper } from '../api/scrape-coupang';

// export default function Test() {
//   const { data, isLoading, error } = useCoupangScraper();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {(error as Error).message}</div>;

//   return (
//     <div>
//       <h1>Coupang Products</h1>
//       {data &&
//         data.map((product, index) => (
//           <div key={index}>
//             <h2>{product.name}</h2>
//             <img src={product.src} alt={product.name} />
//             <p>Price: {product.price}</p>
//             <a
//               href={product.product_url}
//               target='_blank'
//               rel='noopener noreferrer'
//             >
//               View on Coupang
//             </a>
//           </div>
//         ))}
//     </div>
//   );
// }
