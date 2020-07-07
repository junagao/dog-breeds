import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';
import { Legend } from 'components';
import { H1, Footer, Link } from './Chart.styles';

const Chart = ({ dogs }) => {
  const [hovered, setHovered] = useState(null);

  const totalDogsImagesCount = dogs.reduce(
    (acc, amount) => acc + amount.dogsCount,
    0,
  );

  const rainbow = (min, max, val) => {
    const minHue = 0;
    const maxHue = 357;
    const curPercent = (val - min) / (max - min);
    const colString = `hsl(${
      curPercent * (maxHue - minHue) + minHue
    },100%,50%)`;
    return colString;
  };

  const data = dogs.map(({ breed, dogsCount }, index) => ({
    label: breed,
    value: (dogsCount / totalDogsImagesCount) * 100,
    color: rainbow(0, 94, index),
    count: dogsCount,
  }));

  function makeTooltipContent({ label, value }) {
    return `${label} ${(Math.round(value * 100) / 100).toFixed(2)}%`;
  }

  return (
    <div data-tip="" data-for="chart" data-testid="pie-chart">
      <H1>Images by Dog Breed (%)</H1>
      <PieChart
        data={data}
        style={{ height: '500px' }}
        onMouseOver={(_, index) => setHovered(index)}
        onMouseOut={() => setHovered(null)}
      />
      <ReactTooltip
        id="chart"
        getContent={() =>
          typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
        }
      />
      <Footer>
        Data source:{' '}
        <Link href="https://dog.ceo/dog-api/documentation/" target="_blank">
          Dog API
        </Link>
      </Footer>
      <Legend data={data} />
    </div>
  );
};

Chart.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      breed: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Chart;
