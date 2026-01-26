import useFetch from "../hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data.slice(0, 10).map((item) => (
        <div key={item.id}>
          <img src={item.images[0]} alt={item.title} width="150" />
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Products;
