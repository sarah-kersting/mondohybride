import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minHeight: 180,
  },
  media: {
    height: 300,
  },
};

const CardTemplate = ({ classes, headline, image, children }) => (
  <Card className={classes.card}>
    {image && <CardMedia className={classes.media} image={image} title={headline} />}
    <CardContent>
      <Typography type="title" component="h2">
        {headline}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export default withStyles(styles)(CardTemplate);
