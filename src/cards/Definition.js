import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import CardTemplate from '../CardTemplate';

const styles = theme => ({
  paragraph: {
    paddingTop: 10,
    fontSize: '16px',
  },
  subheading: {
    paddingTop: 15,
    fontSize: '18px',
    fontWeight: 500,
  },
});

const Definition = ({ classes }) => (
  <CardTemplate headline="Hundkatzenschweinerei - Was ist das?">
    <Typography component="p" className={classes.paragraph}>
      Eine Hundkatzenschweinerei ist das Ergebnis einer erfolgreichen Hybridisierung von Organismen
      mittels gezielter Genomveränderung durch biochemische Methoden wie Crispr/Cas, wenn sie in
      einem nicht-institutionellen Rahmen erfolgt. Der Begriff kommt aus der deutschen
      do-it-yourself Biologie oder Biohacking Szene. Er ist dabei sowohl humorvoll gemeint, aber
      deutet auch die ethischen Probleme an, die durch das Erzeugen gentechnisch veränderter Hybride
      aufgeworfen werden.
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(Definition);
