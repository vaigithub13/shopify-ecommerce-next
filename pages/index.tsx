import { InferGetServerSidePropsType } from "next";
import { getAllProducts } from "@framework/product";

import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const product = await getAllProducts(config);

  return {
    props: {
      product,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  product,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid layout="A">
        {product.map((prod) => {
          return <ProductCard key={prod.id} product={prod} />;
        })}
      </Grid>
      <Hero
        headline="Cookies,Ice cream and Muffin"
        description="Lemon drops marzipan sugar plum bear claw candy canes dragée muffin. Gummi bears cake tootsie roll lemon drops cheesecake cotton candy icing carrot cake. Carrot cake chocolate cake chocolate cake sweet donut ice cream. Halvah icing apple pie croissant cake cake sesame snaps cookie. Cake ice cream jujubes macaroon cheesecake tart dragée. Apple pie bonbon powder tiramisu liquorice jelly brownie sweet biscuit. Croissant carrot cake biscuit wafer danish fruitcake carrot cake candy canes gingerbread. Cotton candy cheesecake bear claw sweet shortbread powder. Pie toffee oat cake shortbread cheesecake topping. Jelly-o icing chocolate cake pudding chocolate cake gummi bears apple pie wafer muffin."
      />
      <Marquee>
        {product.map((prod) => {
          return <ProductCard variant="slim" key={prod.id} product={prod} />;
        })}
      </Marquee>
      <Grid layout="B">
        {product.map((prod) => {
          return <ProductCard key={prod.id} product={prod} />;
        })}
      </Grid>
      <Marquee variant={"secondary"}>
        {product.map((prod) => {
          return <ProductCard variant="slim" key={prod.id} product={prod} />;
        })}
      </Marquee>
    </>
  );
}
Home.Layout = Layout;
