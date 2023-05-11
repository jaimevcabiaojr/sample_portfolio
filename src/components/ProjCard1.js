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

export default function ProjCard1() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Clone Site "
        subheader="Globe Telecom Ph.(solo)"
      />
      <CardMedia
        component="img"
        height="194"
        image="Capture2.png"
        alt="Capture2.png"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is My Very First Project Using HTML Css and Javascript.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton
          sx={{ ml: 3 }}
          aria-label="share"
          href="https://clonesite-liard.vercel.app/"
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
          <Typography variant="h6" paragraph>Toolkit and Library :</Typography>
          <Typography paragraph>Front End : Bootstrap & Css</Typography>
          <Typography paragraph>
            Back End: None
          </Typography>
          <Typography variant="h6" paragraph>
            Short Discription
          </Typography>
          <Typography>
           This projects main Goal is  to copy the visual side  of  a  given website 
           some parts that is required to work is the manu and the first page.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
