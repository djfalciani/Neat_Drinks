import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";



export default function RadioButtons() {
  const [value, setSelectedValue] = React.useState("personal");


  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioGroup aria-label="account type" name="account-type" value={value} onChange={handleChange}>
          <FormControlLabel value="1" control={<Radio />} label="business" />
          <FormControlLabel value="2" control={<Radio />} label="personal" />
        </RadioGroup>
    </div>
  );
}