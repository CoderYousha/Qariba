import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ image, title, subTitle, description, btn1, btn2, onClickBtn1, onClickBtn2 }) {
    return (
        <Card sx={{ maxWidth: 345 }} dir="rtl">

            {
                image &&
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="green iguana"
                />
            }
            <CardContent>
                {
                    title &&
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                }
                {
                    subTitle &&
                    <Typography gutterBottom variant="body1" component="div">
                        {subTitle}
                    </Typography>
                }
                {
                    description &&
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                }
            </CardContent>
            <CardActions>
                {
                    btn1 &&
                    <Button size="small" onClick={onClickBtn1}>{btn1}</Button>
                }
                {
                    btn2 &&
                    <Button size="small" onClick={onClickBtn2}>{btn2}</Button>
                }
            </CardActions>
        </Card>
    );
}