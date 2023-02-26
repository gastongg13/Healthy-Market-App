import React from "react";
import { useState } from "react";
import { productsFetch } from "../actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";
import Paginated from "./Paginated";
import { changePage } from "./../slices/productSlice";
import Filter from "./Filter"; // importamos el componente Filter

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);
  const currentPage = useSelector((state) => state.allProducts.currentPage);
  const [load, setLoad] = useState(true);
  const [filters, setFilters] = useState({ filterBy: "", categoryValue: "" }); // añadimos el estado "filters"

  const [productsPerPage] = useState(10);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfTheFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfTheFirstProduct,
    indexOfLastProduct
  );

  const paginado = (pageNumber) => dispatch(changePage(pageNumber));

  useEffect(() => {
    dispatch(productsFetch()).then(() => setLoad(false));
  }, [dispatch]);

  if (load) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <h4 className="grid place-content-center w-full my-10 font-bold text-3xl">
        Todos Los Productos
      </h4>
      <Filter filters={filters} setFilters={setFilters} />{" "}
      {/* pasamos el estado "filters" y su función "setFilters" al componente Filter */}
      <Cards currentProduct={currentProduct} />
      <Paginated
        productsPerPage={productsPerPage}
        products={products.length}
        paginado={paginado}
      />
      <Footer />
    </>
  );
};

export default Products;
