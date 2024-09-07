interface Products {
  id: 1,
  title: string,
  image: string,
  price: number,
  description: string,
  brand: string,
  model: string,
  color: string,
  category: string,
  discount: number
}

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
