import React, { useContext } from 'react';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Input from '../components/Input';
import PlanetsContext from '../context/PlanetsContext';

function TableO() {
  const
    { data,
      selectCollum,
      selectNumber,
      inputNumber,
      setToggleSearch,
      filteredArray,
      setFilters,
    } = useContext(PlanetsContext);
  if (data === undefined) {
    return <p>Loading...</p>;
  }
  const handleClick = () => {
    const newObj = {
      column: selectCollum,
      comparison: selectNumber,
      value: inputNumber,
    };
    /* Source: https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-react-component */
    setToggleSearch((prevState) => !prevState);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues.concat(newObj),
      ],
    }));
  };
  return (
    <fieldset>
      <Input />
      <Button
        data-testid="button-filter"
        onClick={ () => handleClick() }
        variant="contained"
        type="button"
      >
        Pesquisar
      </Button>
      <TableContainer component={ Paper }>
        <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {data.length !== 0 && Object.keys(data[0])
                .filter((element) => element !== 'residents')
                .map((element, index) => (
                  <th className="th" key={ index }>{element}</th>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredArray(data, selectCollum, selectNumber, inputNumber)
              .map((element, index) => (
                <TableRow key={ index }>
                  <TableCell className="tr">{element.name}</TableCell>
                  <TableCell className="tr">{element.rotation_period}</TableCell>
                  <TableCell className="tr">{element.orbital_period}</TableCell>
                  <TableCell className="tr">{element.diameter}</TableCell>
                  <TableCell className="tr">{element.climate}</TableCell>
                  <TableCell className="tr">{element.gravity}</TableCell>
                  <TableCell className="tr">{element.terrain}</TableCell>
                  <TableCell className="tr">{element.surface_water}</TableCell>
                  <TableCell className="tr">{element.population}</TableCell>
                  <TableCell className="tr">{element.films}</TableCell>
                  <TableCell className="tr">{element.created}</TableCell>
                  <TableCell className="tr">{element.edited}</TableCell>
                  <TableCell className="tr">{element.url}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </fieldset>
  );
}

export default TableO;
