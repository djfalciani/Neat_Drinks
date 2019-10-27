import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


// const GreenRadio = withStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600]
//     }
//   },
//   checked: {}
// })(props => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [value, setSelectedValue] = React.useState("personal");
//   const [value, setValue] = React.useState('female');


  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {/* <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        label="business"
        name="dialog-radio-button"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        label="personal"
        name="dialog-radio-button"
        inputProps={{ "aria-label": "B" }}
      /> */}
      <RadioGroup aria-label="account type" name="account-type" value={value} onChange={handleChange}>
          <FormControlLabel value="business" control={<Radio />} label="business" />
          <FormControlLabel value="personal" control={<Radio />} label="personal" />
        </RadioGroup>
    </div>
  );
}