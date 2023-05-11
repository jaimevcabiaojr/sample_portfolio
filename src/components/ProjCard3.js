import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkIcon from "@mui/icons-material/Link";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjCard3() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            3
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Usable Site with Database "
        subheader="Customer's Info Taker.(solo)"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://photos.app.goo.gl/itVSzorvMaxRFvRx9"
        alt="Capture.png"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This Site was created due to the need of our Own shop .
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          sx={{ ml: 3 }}
          aria-label="share"
          href="https://capstone-react-mui.vercel.app/"
        >
          <LinkIcon />
          <Typography sx={{ ml: 1 }}>link</Typography>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" paragraph>
            Toolkit and Library :
          </Typography>
          <Typography paragraph>Front End : Material Ui & Css</Typography>
          <Typography paragraph>Back End:MongoDB</Typography>
          <Typography variant="h6" paragraph>
            Short Discription
          </Typography>
          <Typography>
            This project was one important project for me hence we can use this
            as our Customer's data taker . this site is already deployed and
            tested working via any Browser.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
