import Image from 'next/image'
import './ProductDetails.scss'

const ProductDetailsİmages = ({ data }) => {
  return (
    <div className="product-images">
      <div className="images-left">
        <div className="image-1">
          <Image fill src={`/${data.img}`} alt="Product" />
        </div>
        <div className="image-2">
          <Image fill src={`/${data.img}`} alt="Product" />
        </div>
      </div>

      <div className="main-img">
        <Image fill src={`/${data.img}`} alt="Product" />
      </div>
    </div>
  )
}

export default ProductDetailsİmages
