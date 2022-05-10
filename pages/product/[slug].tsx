import { Layout } from "@components/common";
import { ProductView } from "@components/product";
import { Container } from "@components/ui";
import { getConfig } from "@framework/api/config";
import { getAllProductsPaths, getProduct } from "@framework/product";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);

  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const variables = {
    slug: params?.slug,
  };
  const { product } = await getProduct({ config, variables });
  return {
    props: {
      product,
    },
  };
};

export default function ProductDetailPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>{product && <ProductView product={product} />}</>;
}

ProductDetailPage.Layout = Layout;
