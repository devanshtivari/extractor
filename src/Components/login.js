import * as React from 'react';
import '../css/login.css';
import axios from 'axios';
import Spinner from './spinner';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextFeild from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {useNavigate} from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const[name , setname] = React.useState();
  const[loading,setloading] = React.useState(false);

  const [values , setValues] = React.useState({
    password: '',
    showPassword: false,
  })

   const handleChange = (prop) => (event) => {
     setValues({ ...values, [prop]: event.target.value });
   };

   const handleClickShowPassword = () => {
     setValues({
       ...values,
       showPassword: !values.showPassword,
     });
   };

   const handleMouseDownPassword = (event) => {
     event.preventDefault();
   };
  
   const submit = async() => {
      setloading(true);
      if(!name || !values.password ){
        alert("Please enter all the feilds");
        setloading(false);
        return;
      }

      try{
        const config = {
          headers : {
            "Content-type" : "application/json",
          },
        };

        const password = values.password;

        const {data} = await axios.post(
          "http://localhost:5000/login",
          {name , password},
          config,
        )
        setloading(false);
        console.log("user login successful");
        navigate('/admin');
      }
      catch(e){
        console.log(e);
        setloading(false);
        alert("Bad credentials");
      }
   }

  return (
    <div className="login-box">
      <div className="login-box-name">
        <TextFeild
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          style={{ width: "100%" }}
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </div>
      <div className="login-box-password">
        <FormControl style={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="login-box-button">
        <Button variant="contained" onClick={submit}>
         Sign In
        </Button>
      </div>
    </div>
  );
}
