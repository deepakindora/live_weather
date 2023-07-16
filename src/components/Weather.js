import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Room';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import { useQuery } from "react-query";

function Weather() {
  const [searchedVal, setSearchedVal] = useState("ajmer");
  const [weather, setweather] = useState("ajmer");

  //
  const handleInput = (event) => {
    let searchString = event.target.value.split(' ')
    if(searchString.length > 2){
        event.preventDefault()
        event.stopPropagation()
    } else {
        setSearchedVal(event.target.value)
    }
  }
  
  // fetch weather data by open weather API 
  useEffect(() => {
    const fetchweather = async () => {
      const responce = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchedVal}&units=metric&appid=5b8ac55a5ae3982760f7e99d30fbf836`);
      //console.log(responce);
      setweather(responce.data.main);
    }
    fetchweather();    
  },[searchedVal])

  return (
    <div className="center">
    <center>  
    <h2 className='title'>Live Weather</h2>
    <Card sx={{ maxWidth: 345 }} style={{background:"rgb(25 118 210 / 33%)"}}>
      <div className='title colorWhite'>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Search Location <input type="search" name="location" className="search" value={searchedVal} onChange={(e) => handleInput(e)}></input>
          </Typography>
          <PlaceIcon className='pin' sx={{ color: "red" }}/> <span className='cityname'>{searchedVal.toUpperCase()}</span>
          <div className='temp'>
            <h1> <WbSunnyIcon sx={{ color: "yellow" }}/> {weather?.temp} °C</h1>
          </div>
          <div className='minmax'>
            Min: {weather?.temp_min} °C  |  Max: {weather?.temp_max} °C
          </div>
        </CardContent>
      </div>
      <CardActions>
        <Button size="small" className='colorWhite'>
          Share
        </Button>
      </CardActions>
    </Card>
    </center>
    </div>
  )
}

export default Weather
