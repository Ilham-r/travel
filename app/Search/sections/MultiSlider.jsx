import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const valuetext = (value) => {
  return `$${value}`;
};

const minDistance = 1;

const MultiSlider = ({ priceRange, setPriceRange }) => {
  const handleChange1 = (newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ]);
    }
  };

  return (
    <Box sx={{ width: 270 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={priceRange}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        valueLabelFormat={valuetext}
        getAriaValueText={valuetext}
        disableSwap
        min={50}
        max={1200}
        sx={{ color: "#8DD3BB" }}
      />
    </Box>
  );
};
export default MultiSlider;
