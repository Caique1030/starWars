import React, { useContext } from 'react';
import { InputLabel, Input, Select, MenuItem } from '@mui/material';
import PlanetsContext from '../context/PlanetsContext';

function InputO() {
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
        <Input
          name="name"
          data-testid="name-filter"
          type="text"
          onChange={ ({ target }) => setInput(target.value) }
        />
      </InputLabel>
      <InputLabel htmlFor="colum filter">
        Colum filter:
        <Select
          data-testid="column-filter"
          onChange={ ({ target }) => setSelectCollum(target.value) }
        >
          {verifyLength() === true ? filterColum
            .filter((element) => element !== selectCollum)
            .map((element, index) => <MenuItem key={ index }>{element}</MenuItem>)
            : filterColum
              .map((element, index) => <MenuItem key={ index }>{element}</MenuItem>)}
        </Select>
      </InputLabel>
      <InputLabel htmlFor="number">
        Number filter:
        <Select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setSelectNumber(target.value) }
        >
          {filterNumber.map((element) => <MenuItem key={ element }>{element}</MenuItem>)}
        </Select>
      </InputLabel>
      <InputLabel htmlFor="value">
        Value filter:
        <Input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </InputLabel>
    </div>
  );
}

export default InputO;
