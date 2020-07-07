import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  TableContainer,
  Table,
  TableThead,
  TableTh,
  TableTr,
  TableTd,
} from './Legend.styles';

const Legend = ({ data }) => {
  const renderLegend = data.map(({ label, value, color, count }) => {
    return (
      <TableTr key={uuidv4()}>
        <TableTd style={{ backgroundColor: color }} />
        <TableTd>{label}</TableTd>
        <TableTd>{(Math.round(value * 100) / 100).toFixed(2)}%</TableTd>
        <TableTd>{count}</TableTd>
      </TableTr>
    );
  });
  return (
    <TableContainer>
      <Table data-testid="legend-table">
        <TableThead>
          <TableTr>
            <TableTh>Color</TableTh>
            <TableTh>Breed</TableTh>
            <TableTh>Percentage</TableTh>
            <TableTh>Image Count</TableTh>
          </TableTr>
        </TableThead>
        <tbody>{renderLegend}</tbody>
      </Table>
    </TableContainer>
  );
};

Legend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number,
      color: PropTypes.string,
      count: PropTypes.number,
    }),
  ).isRequired,
};

export default Legend;
