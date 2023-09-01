import { ProductProps } from "../../../model/ProductProps";
import "./styles.css";

const ProductItem: React.FC<ProductProps> = (props) => {
  return (
    <div>
      <p>
        {props.sku}
        <br />
        {props.name}
        <br />
        {props.price}
        <br />
        {props.product_type === "Furniture" &&
          `Dimensions: ${props.product_attribute} `}
        {props.product_type === "DVD" && `Size: ${props.product_attribute} MB`}
        {props.product_type === "Book" &&
          `Weight: ${props.product_attribute} KG`}
      </p>
    </div>
  );
};

export default ProductItem;
