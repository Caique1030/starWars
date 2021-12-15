import React, { useContext } from 'react';
import { InputLabel } from '@mui/material';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const filterColum = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const filterNumber = ['escolhe', 'maior que', 'menor que', 'igual a'];
  const { setInput,
    setSelectCollum,
    setSelectNumber,
    setNumber,
    verifyLength,
    selectCollum } = useContext(PlanetsContext);
  return (
    <div>
      <InputLabel htmlFor="name">
        Filtrar por nome:
        <input
          name="name"
          data-testid="name-filter"
          type="text"
          onChange={ ({ target }) => setInput(target.value) }
        />
      </InputLabel>
      <InputLabel htmlFor="colum filter">
        Colum filter:
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setSelectCollum(target.value) }
        >
          {verifyLength() === true ? filterColum
            .filter((element) => element !== selectCollum)
            .map((element, index) => <option key={ index }>{element}</option>)
            : filterColum
              .map((element, index) => <option key={ index }>{element}</option>)}
        </select>
      </InputLabel>
      <InputLabel htmlFor="number">
        Number filter:
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setSelectNumber(target.value) }
        >
          {filterNumber.map((element) => <option key={ element }>{element}</option>)}
        </select>
      </InputLabel>
      <InputLabel htmlFor="value">
        Value filter:
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </InputLabel>
    </div>
  );
}

export default Input;
