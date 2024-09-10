import Alert from '@mui/material/Alert';

export default function ErrorMessage({message}) {
    return (
        <div style={{marginBottom: "20px"}}>
            <Alert severity="error">{message}</Alert>
        </div>
    )
}