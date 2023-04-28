import * as C from './styles';
import { Context } from '../../Contexts/Context';
import { useContext } from "react";
import { UserDataInfoType } from '../../Types/types';

type Props = {
    itemImgToShow: string;
    nameItem: string;
    generalPrice: string;
    actualPrice: string;
}

const ItemToBuyGeneralArea = ({itemImgToShow, nameItem, generalPrice, actualPrice}: Props) => {
  const {state, dispatch} = useContext(Context);

  const updateCarItem = (e:React.MouseEvent<HTMLButtonElement>) => {
    if(state.user.isLogged) {
      let Users:UserDataInfoType[] = JSON.parse(localStorage.getItem('Users') || '[]');

      const checkIndex = (element:UserDataInfoType, index: number, array:UserDataInfoType[]) => {
          return element.name === state.user.name
      }
      let elementIndex = Users.findIndex(checkIndex);

      let CheckIfCartItemAlreadyExists = Users[elementIndex].cartItem
      .some((carItemName) => {
        return carItemName === nameItem;
      });

      if(CheckIfCartItemAlreadyExists) {
        return false;
      }

      Users[elementIndex].cartItem.push(nameItem);

      localStorage.setItem('Users', JSON.stringify(Users));
  }

  alert('Login before you buy');
}

  return (
    <C.Container>
        <img src={itemImgToShow} alt='deye-panel'/>
        <C.RightSideDesc>
            <h1>{nameItem}</h1>
            <span>{generalPrice}</span>
            <h2>{actualPrice}</h2>
            <p>Code: 000000</p>
            <p>
              This is only the price of the Solar Panel. If you want to include our instalation 
              you can check the cost of the whole process while you complete formulation when 
              you click in buy now.*
            </p>
            <button onClick={updateCarItem}>Buy Now</button>
        </C.RightSideDesc>
    </C.Container>
  )
}

export default ItemToBuyGeneralArea;