import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$${value}`;
}

const minDistance = 1;

export default function MultiSlider() {
  const [value1, setValue1] = React.useState([50, 1200]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: 270 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value1}
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
}
