import s from "./Usernav.module.css";
import Link from "next/link";
import React from "react";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";
import useCart from "@framework/cart/use-cart";
import { LineItem } from "@common/types/cart";

const Usernav = () => {
  const { openSidebar } = useUI();
  const { data } = useCart();

  const itemsCount =
    data?.lineItems.reduce((count: number, item: LineItem) => {
      return count + item.quantity;
    }, 0) ?? 0;

  // console.log(data);
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          {" "}
          <Cart onClick={openSidebar} />
          {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
