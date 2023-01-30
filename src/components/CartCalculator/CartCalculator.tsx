import { getCart, useAppSelector } from "store";
import { CalculatorContainer, Total, Text } from "./styles";

export const CartCalculator = () => {
  const cart = useAppSelector(getCart);

  const amountArray = Object.values(cart.amount);
  const pricesArray = cart.cart.map((item) => Math.round(Number(item.price.slice(1))));

  const getPrice = (arr1: number[], arr2: number[]) => {
    const resultArr: number[] = [];
    console.log(`resultArr = ${resultArr}`);

    for (let index = 0; index < arr1.length; index++) {
      resultArr.push(arr1[index] * arr2[index]);
    }
    const total = resultArr.reduce((acc, num) => acc + num, 0);
    return total;
  };

  const total = getPrice(amountArray, pricesArray);
  const vat = total * 0.2;

  return (
    <CalculatorContainer>
      <Total>Total: {total}$</Total>
    </CalculatorContainer>
  );
};
