import './App.css';
import './Product.css';
import product from './Images/nayan.jpg'

function Product() {
  return (
    <div class="row">
    <div class="coumn">   
    <img src={product} width="400px"></img> 
    </div>
    <div class ="column">
    <p> Frequent and new collectionsto cater to variety seeking customers
    Full fledged design studio and largest design team in the country
    Each piece is designed by team of award winning designers 
    Adjudged the most admired jewelry brand in 2004At Tanishq, we strive to deliver excellence, consistently. We've brought to the market a whole new standard of business ethics and product reliability, in the process bringing about a transformation in which jewellery is bought or sold in India. With innovations like the Karatmeter to check the purity of gold, the brand has won over the customer’s hearts. Our constant endeavour is to maintain the highest standard and quality of our gold, diamonds and precious stones used in our jewel pieces. We implement extensive quality checks and only source our diamonds ethically from known, trusted and certified suppliers. At Tanishq, we also take great pride in offering an unparalleled retail experience that takes into consideration our customer's unique needs and preferences..</p>
    </div>
    
    </div>
  );
}

export default Product;

