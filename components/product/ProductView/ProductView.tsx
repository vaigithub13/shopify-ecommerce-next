import cn from "classnames";
import { FC, useEffect, useState } from "react";
import s from "./ProductView.module.css";
import { Button, Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import { ProductSlider, Swatch } from "@components/product";
import { Choices, getVariant } from "../helpers";
import { useUI } from "@components/ui/context";
import useAddItem from "@framework/cart/use-add-item";
import { useApiProvider } from "@common";

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({});
  const [isLoading, setIsLoading] = useState(false);
  const variant = getVariant(product, choices);

  const addItem = useAddItem();

  const { hooks, fetcher } = useApiProvider();

  const { openSidebar } = useUI();

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
        // variantOption: variant?.options,
        quantity: 1,
      };
      setIsLoading(true);
      const output = await addItem(item);
      setIsLoading(false);
      openSidebar();
    } catch {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <div className={cn(s.root, "fit", "mb-5")}>
        <div className={cn(s.productDisplay, "fit")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `} {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((opt) => (
              <div key={opt.id} className="pb-4">
                <h2 className="uppercase font-medium">{opt.displayName}</h2>
                <div className="flex flex-row py-4">
                  {opt.values.map((ov) => {
                    const activeChoice = choices[opt.displayName.toLowerCase()];
                    return (
                      <Swatch
                        key={`${opt.id}-${ov.label}`}
                        label={ov.label}
                        color={ov.hexColor}
                        active={activeChoice === ov.label.toLowerCase()}
                        variant={opt.displayName}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [opt.displayName.toLowerCase()]:
                              ov.label.toLowerCase(),
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button
              className={s.button}
              onClick={addToCart}
              isLoading={isLoading}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
