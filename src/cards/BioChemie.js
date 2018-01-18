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

const BioChemie = ({ classes }) => (
  <CardTemplate headline="BioChemie und Schweinereien">
    <Typography component="p" className={classes.paragraph}>
      Einen gute Hundkatzenschweinerei ist das Ergebnis einer erfolgreichen Hybridisierung von Organismen
      mittels gezielter Genomveränderung durch biochemische Methoden wie Crispr/Cas, wenn sie in
      einem nicht-institutionellen Rahmen erfolgt. Der Begriff kommt aus der deutschen
      do-it-yourself Biologie oder Biohacking Szene. Er ist dabei sowohl humorvoll gemeint, aber
      deutet auch die ethischen Probleme an, die durch das Erzeugen gentechnisch veränderter Hybride
      aufgeworfen werden.
    </Typography>
    <Typography component="p" className={classes.paragraph}>
      Die Hybridisierung von Organsismen, welche im Pflanzenbau bereits gängige Praxis ist, findet
      seit mehreren Jahren zunehmendes Interesse in der Zoologie und Haustierzucht. In
      nicht-institutionellem Rahmen gelingt es immer häufiger Hund und Katze zusammenzubringen und
      Hybride zu schaffen, die sonst nur in Kinderbüchern zu bewundern sind. Durch die liberale
      Gesetzgebung und unverhältnismäßig hohe Anzahl von Haustierhaltern, hat sich die do-it
      yourself-Biologie weltweit durchgesetzt. Nicht zuletzt aber durch die bahnbrechenden Erfolge
      einer lokalen Biohacking Szene hat sich Berlin zur Hochburg der Hundkatzenschweinerein
      entwickelt. Allein in diesem Jahr wurden in Berliner Tierheimen, bei Tierärzten, im Tierpark
      und im Zoo 1.241 tierische Hybride registriert. In digitalen Haustierportalen ist das
      Interesse an Hundkatzenschweinerein gigantisch – eine große Dunkelziffer lässt sich nur
      vermuten.
    </Typography>
    <Typography component="p" type="subheading" className={classes.subheading}>
      Entstehung der DIY Biologie
    </Typography>
    <Typography component="p" className={classes.paragraph}>
      Die Wurzeln der gängigen Methoden der Hundkatzenschweinerein liegen in der Biotechnologie.
      Bahnbrechende Forschungsergebnisse zum Thema „Genome editing and animal hybride development
      with CRispR/CAS“ des Instituts für Angewandte Hundkatzenschweinerein um die Jahrundertwende,
      verhalfen der Biohacking Szene zum Durchbruch. Einer der ehemaligen Mitarbeiter des Instituts
      ist …..Er fasste kurz nach der Veröffentlichung der Forschungsergebnisse den Entschluss die
      Informationen aufzuarbeiten und der breiten Bevölkerung zur Verfügung zu stellen. So entstand
      der Verein Hybridliebhaber e.V., welcher seither im Mittelpunkt tierischer Hybridentwicklungen
      steht. Der Verein zählt zur Mitte diesen Jahres 5830 Mitglieder. 54% sind private Katzen- oder
      Hundehalter und ca. 37% lassen sich gewerblichen Agrarbetrieben zuordnen.
    </Typography>
    <Typography component="p" type="subheading" className={classes.subheading}>
      Biochemische Grundelage der Hundkatzenschweinerei
    </Typography>
    <Typography component="p" className={classes.paragraph}>
      Die Hybridisierung insbesondere von tierischen Organismen mag auf den ersten Blick modernen
      Zauberlehringsversuchen anmuten. Schaut man genauer hin, so Kreuzungen aus Hund und und Katze,
      …. oder …. Sind seit Jahren gängiege Praxis und Bioengineering und Schweinereien - die Technik
      Die Technik zum kreuzen Wie wird .. h eute eingesetzt Moderne Zauberlehrlingsversuche
    </Typography>
  </CardTemplate>
);

export default withStyles(styles)(BioChemie);
