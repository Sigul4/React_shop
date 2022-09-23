import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ProductAdd from "./ProductAdd";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  const [goods, setGoods] = useState([]);
  const [visibility, setVisibility] = useState("hidden");
  const [_id, setId] = useState("");

  useEffect(() => {
    console.log("products изменился", products);
    setGoods(products);
  }, [products]);

  console.log("goods", goods);

  const filterGoods = () => {
    setGoods(goods.filter((elem) => elem._id !== _id));
  };

  const showPopUp = (id) => {
    setVisibility("visible");
    setId(id);
  };
  const hidePopUp = () => {
    setVisibility("hidden");
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductAdd products={goods} addProduct={setGoods} />
        {goods
          ? goods.map((product) => {
              return (
                <>
                  <Card
                    style={{
                      visibility: `${visibility}`,
                      zIndex: "5",
                      position: "fixed",
                      width: "500px",
                      height: "500px",
                      top: "50%",
                      left: "50%",
                      marginTop: "-250px",
                      marginLeft: "-250px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        filterGoods();
                        hidePopUp();
                      }}
                    >
                      yes
                    </Button>
                    <Button onClick={() => hidePopUp()}>no</Button>
                  </Card>
                  {product.title ? (
                    <ProductCard product={{ product }} onDelete={showPopUp} />
                  ) : (
                    ""
                  )}
                </>
              );
            })
          : ""}
      </Box>
    </>
  );
};
export { ProductsList };

