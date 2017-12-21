import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CardTemplate from '../CardTemplate';

const styles = theme => ({
  paragraph: {
    paddingTop: 10,
  },
});

const PopCulture = ({ classes }) => (
  <CardTemplate headline="Popkulturelle Schweinereien">
    <Typography component="p" className={classes.paragraph}>
      Fantasievolle Hundkatzenschweinereien tauchen in der populären Kultur immer wieder auf. Dem
      'Hundkatzen'-Teil besonders gerecht wird Nikelodeons 'Catdog' - ein Katzen/Hund Hybrid, der
      unpraktischerweise aus zwei zusammengefügten Vorderteilen besteht. Zu allem Unglück besitzt
      Catdog auch noch zwei getrennte Persönlichkeiten, die so verschieden sind wie, nun ja, Hund
      und Katze.
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(PopCulture);
