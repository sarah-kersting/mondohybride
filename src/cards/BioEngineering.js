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

const BioEngineering = ({ classes }) => (
  <CardTemplate
    headline="Bioengineering und Schweinereien - die Technik"
    image="https://burst.shopifycdn.com/photos/black-brown-goat_925x.jpg"
  >
    <Typography component="p" className={classes.paragraph}>
      Hundkatzenschweinereien sind ein neues Phänomen. Es seit kurzem ist es möglich, auch außerhalb
      von Laboratorien mit millionenteuren Hochleistungsgeräten unaufwändig seine eigenen kleinen
      Hybridwesen zu erzeugen. So hätte es noch vor wenigen Jahren wie Science Fiction geklungen,
      aus der DNA eines verstorbenen Hamsters und eines Kanarienvogels einen neuen kleinen Liebling
      für das Töchterlein zu schaffen, der einzigartig ist. Heute sind solche Sachen keine
      Seltenheit mehr. (Da Hundekatzenschweinereien momentan noch kurzlebig sind, sind sie als
      Geschenke für Kinder eher ungeeignet, wenn man sich die aus ihrem plötzlichen Ableben
      entstehenden Dramen vermeiden will. Anm. des Red.) Die Technik, die diesen Durchbruch
      ermöglichte, ist die populär als 'Genschere' bekannte biochemische Methode Crisp/Cas, which
      was published first in 2012.
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(BioEngineering);
