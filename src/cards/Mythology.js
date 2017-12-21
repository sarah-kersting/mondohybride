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

const Mythology = ({ classes }) => (
  <CardTemplate headline="Die Hundkatzenschweinerei in Mythologie und Geschichte">
    <Typography component="p" className={classes.paragraph}>
      Schon lange bevor die ersten 'Hundkatzenschweinereien' auf Berliner Makermessen und
      Hobbykellern das Licht der Welt erblickten, regten Hybride die Fantasie der Menschen an. Das
      kulturelle Gedächtnis der westlichen Welt ist geprägt von schrecklichen Mischwesen wie dem
      Minotaurus, Zentauren und Harpien, sowie quasi-göttlichen Wundertieren wie dem legendären
      Flügelross Pegasus. Während die meisten Menschen ein klares Bild vor Augen haben, wenn sie von
      der Sphinx hören, so gibt es ein paar Schweinereien, die nur ausgeprägte Mythologie Experten
      kennen. Ein paar der interessantesten wollen wir hier vorstellen.
    </Typography>
    <Typography component="p" type="subheading" className={classes.subheading}>
      Der Onozentaur
    </Typography>
    <Typography component="p" className={classes.paragraph}>
      Zentauren sind gewaltige und schreckliche Wesen mit Pferdeunterleib und menschlichen
      Oberkörper. Sie tauchen in der griechischen Mythologie oft als machtvolle Verkörperung unseres
      primitiven Id auf. So rauben sie in der Kentauromachie weinberauscht die Frauen der Lapithen.
      Ein anderer Zentaur, der Arzt Chiron, war hingegen ein gottartiger Heiler und Quelle tiefer
      Weisheit. So oder so, Zentauren sind nicht auf die leichte Schulter zu nehmen. Anders hingegen
      sein kleiner Vetter, der Onozentaur. Onozentauren sind Mischwesen aus Mensch und Esel - und
      damit weit weniger gewaltig. Obwohl Onozentauren von Aelian (quote) als gewalttätig
      beschrieben werden, waren sie im Vergleich vermutlich eher harmlose Hundkatzenschweinereien.
      Anders als ihre größeren Verwandten werden sie auch ohne Pferdevorderbeine dargestellt - eine
      eher wacklige Angelegenheit.
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(Mythology);
