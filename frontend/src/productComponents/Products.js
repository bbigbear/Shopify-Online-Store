import ProductCard from "./ProductCard";
import { useAuth } from "../authenticate/AuthContext";
import Loader from '../components/Loader'

// Basic method to import images
import watch1 from "../images/watches/watch1.webp";
import watch2 from "../images/watches/watch2.webp";
import watch3 from "../images/watches/watch3.webp";
import watch4 from "../images/watches/watch4.webp";
import watch5 from "../images/watches/watch5.webp";

import band1 from "../images/bands/band1.webp";
import band2 from "../images/bands/band2.webp";
import band3 from "../images/bands/band3.webp";
import band4 from "../images/bands/band4.webp";
import band5 from "../images/bands/band5.webp";

const watchImages = [watch1, watch2, watch3,watch4,watch5];
const bandImages = [band1, band2, band3,band4,band5];

const productImages = watchImages.concat(bandImages);

function Products() {
  const { productsData, productsLoaded,userData } = useAuth();

  if (!productsLoaded) {
    return <Loader />
  }
  return (
    <div id="product-cards">

      {
        productsData.map((product,index) =>
          <ProductCard product={product} key={product.product_id} image={productImages[index]} userData={userData} />

        )
      }


    </div>
  );
}

export default Products;
