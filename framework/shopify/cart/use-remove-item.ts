import useCart from "./use-cart";
import { CheckoutLineItemsRemovePayload } from "./../schema.d";
import { checkoutToCart, getCheckoutId } from "@framework/utils";
import { MutationHook } from "@common/types/hooks";
import { Cart } from "@common/types/cart";
//Remove cart item first file

//5the step to import removeItem file
import useRemoveItem, { UseRemoveItem } from "@common/cart/use-remove-item";
import { checkoutLineItemRemoveMutation } from "@framework/utils/mutations";

export default useRemoveItem as UseRemoveItem<typeof handler>;

export type RemoveItemDescriptor = {
  fetcherInput: {
    id: string;
  };
  fetcherOutput: {
    checkoutLineItemsRemove: CheckoutLineItemsRemovePayload;
  };
  data: Cart;
};

export const handler: MutationHook<RemoveItemDescriptor> = {
  fetcherOptions: {
    query: checkoutLineItemRemoveMutation,
  },
  async fetcher({ input: { id }, options, fetch }) {
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckoutId(),
        lineItemIds: [id],
      },
    });
    const cart = checkoutToCart(data.checkoutLineItemsRemove.checkout);
    return cart;
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate: updateCart } = useCart();
      return async (input) => {
        const data = await fetch(input);
        updateCart(data, false);
        debugger;
        return data;
      };
    },
};

//second Hook.ts
