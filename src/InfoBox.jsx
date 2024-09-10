import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';


export default function InfoBox({info}) {
    const HOT_URL = "https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1487762488615-8a011458b53e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const PLEASANT_URL = "https://images.unsplash.com/photo-1703473959427-4529e1f8a9c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    // let info = {
    //     city: "Delhi",
    //     feelsLike: 24.84,
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze",
    // }

    return (
        <div className="infobox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image = {info.humidity > 80 ? RAIN_URL : info.temp < 15 ? COLD_URL : info.temp > 30 ? HOT_URL : PLEASANT_URL}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5"     component="div">
                    {info.city} {
                    info.humidity > 80 
                    ? <ThunderstormTwoToneIcon /> 
                    : info.temp < 15 
                    ? <AcUnitTwoToneIcon /> 
                    : info.temp > 30 
                    ? <LocalFireDepartmentTwoToneIcon /> 
                    : <WbSunnyTwoToneIcon />}
                  </Typography>
                  <Typography variant="body2" component="span" >
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                  </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}