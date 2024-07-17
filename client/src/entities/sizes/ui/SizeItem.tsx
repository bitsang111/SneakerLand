import React, { useState } from 'react';
import { Sneaker } from '../../sneakers/types/sneakerType';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { useNavigate } from 'react-router-dom';
import { createBasketThunk } from '../../basket/basketSlice';

type SizeItemProps = {
  sneaker: Sneaker;
};

const SizeItem = ({ sneaker }: SizeItemProps): JSX.Element => {
  console.log('sneaker', sneaker);

  const dispatch = useAppDispatch();
  const { sizes } = useAppSelector((state) => state.sizes);
  const { sexes } = useAppSelector((state) => state.sexes);
  const { sneakers } = useAppSelector((state) => state.sneakers);
  const [newSize, setNewSize] = useState(0);
  const [newSex, setNewSex] = useState(0);
  const navigate = useNavigate();

  console.log(newSex, newSize);

  const updatedSneaker = {
    ...sneaker,
    sizeId: newSize !== null ? newSize : sneaker.sizeId,
    sexId: newSex !== null ? newSex : sneaker.sexId,
  };

  console.log('updatedSneaker', updatedSneaker);

  const basketSneaker = sneakers.filter((sneak) => sneak.articul === updatedSneaker.articul && sneak.sizeId ===updatedSneaker.sizeId && sneak.sexId ===updatedSneaker.sexId);
  console.log('basketSneaker', basketSneaker);
//   console.log(basketSneaker[0].id);
  

  //Роут на баскет
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    void dispatch(createBasketThunk(basketSneaker[0].id));
  };

  return (
    <div className=" SizeItem">
      <p>Для оформления заказа выберите размер и пол</p>

      <form onSubmit={onHandleSubmit}>
        <label htmlFor="size-select">
          <select onChange={(e) => setNewSize(+e.target.value)} name="size" id="size-select">
            <option value="">Размер</option>
            {sizes.map((size) => (
              <option value={size.id}>{size.size}</option>
            ))}
          </select>
        </label>

        <label htmlFor="sex-select">
          <select onChange={(e) => setNewSex(+e.target.value)} name="sex" id="sex-select">
            <option value="">Пол</option>
            {sexes.map((sex) => (
              <option value={sex.id}>{sex.title}</option>
            ))}
          </select>
        </label>
        <button type="submit">Добавить</button>
      </form>
      <button onClick={() => navigate('/sneakers')}>Назад</button>
    </div>
  );
};
export default SizeItem;
