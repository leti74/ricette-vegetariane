import { Navigationbar } from "../components/Navigationbar";
import "./Perche.css";
import { Footer } from "../components/Footer";
import { PercheVeg } from "../components/PercheVeg";
export const Perche = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <PercheVeg
        percheIMG="public/allevamenti.jpg"
        percheTitolo1="Perché gli animali meritano equità."
        percheTesto="Spesso distinguiamo tra “animali da compagnia” e“animali da allevamento”, ma
            questa divisione è artificiale. Un maiale può essere affettuoso
            quanto un cane, e una mucca può legarsi profondamente al proprio
            piccolo. Solo alcuni animali ricevono amore, mentre altri vengono
            sfruttati. Cambiare prospettiva significa riconoscere che tutti gli
            animali sentono, soffrono, desiderano vivere
            . Con una dieta vegetale, possiamo contribuire a salvare centinaia
            di vite ogni ann, è un gesto potente, che parte da una semplice
            scelta."
        percheTitolo2="Il vero costo della
              carne."
        percheParagrafo=" Nel solo territorio italiano, centinaia di milioni di animali vengono allevati e uccisi ogni anno per diventare cibo. Dietro
              alle confezioni sugli scaffali, ci sono storie di polli cresciuti
              in meno di due mesi, di conigli uccisi a tre mesi, e di mucche che
              non vivono neanche un quarto del tempo che la
              natura concederebbe loro . I luoghi in cui vengono allevati sono
              spesso affollati, privi di stimoli e pieni di sofferenza
              invisibile. In quelle strutture, il tempo non passa: si
              sopravvive, in attesa del giorno in cui tutto finirà. Per
              prevenire comportamenti “pericolosi” causati dallo stress del
              sovraffollamento, gli animali vengono mutilati: becchi, code, corna.
              I maialini sono castrati senza anestesia. Questi interventi
              avvengono su esseri senzienti, che provano dolore. In gabbie
              strette, recinti spogli o capannoni, gli animali non possono
              esprimere i loro comportamenti naturali. Vivono privati di tutto
              ciò che renderebbe la loro vita degna di essere vissuta. I pesci
              sono spesso i grandi dimenticati. Nonostante provino dolore,
              vengono allevati in condizioni densamente sovraffollate, immersi
              in acque inquinate o stagnanti. Spesso non c'è alcuna
              regolamentazione sulla loro macellazione: vengono lasciati morire
              lentamente, fuori dall'acqua, in modo che non soffochino le nostre
              coscienze. Eppure, anche loro lottano per la vita."
        percheStyle="tema-animali"
      ></PercheVeg>

      <PercheVeg
        percheIMG="ambiente.jpg"
        percheTitolo1="Perché è il nostro pianeta e la nostra responsabilità"
        percheTesto="La Terra è l’unica casa che abbiamo, e custodirla è una scelta che va ben oltre il nostro presente: significa proteggere ogni essere vivente che la abita. E se da piccoli ci insegnano a spegnere le luci o a non sprecare l’acqua, nessuno ci spiega che il gesto più potente lo compiamo ogni giorno: scegliendo cosa mangiare."
        percheTitolo2="L'impatto enorme sul pianeta."
        percheParagrafo="Immagina milioni di animali trasformare ogni giorno mangimi vegetali in carne, latte o uova. Sembra semplice, ma è una delle “conversioni energetiche” più inefficienti esistenti: usiamo enormi quantità di cereali e legumi per nutrire animali invece di destinarli direttamente alle persone. A livello globale, la maggior parte della soia coltivata finisce nei mangimi, e solo una piccolissima parte arriva sulle nostre tavole. Una dieta vegetale, al contrario, utilizza meno risorse e contribuisce a un uso più equo del cibo sulla Terra. Quando parliamo di cambiamento climatico, pensiamo a fabbriche e automobili. Ma c’è un’altra fonte, più silenziosa ma ancora più impattante: gli allevamenti. Le emissioni di metano e protossido di azoto da parte degli animali sono tra le più pericolose per il riscaldamento globale.
        Ci dicono di chiudere il rubinetto mentre ci laviamo i denti per risparmiare acqua—un gesto utile, ma poco incisivo se paragonato alla quantità d’acqua necessaria a produrre carne e derivati animali. Ogni hamburger richiede migliaia di litri d’acqua, non solo per l’animale stesso ma per coltivare il suo cibo e gestire i rifiuti che produce. Spostare le nostre scelte verso un’alimentazione vegetale significa ridurre in modo concreto il nostro impatto idrico, ogni giorno."
        percheStyle="tema-pianeta"
      ></PercheVeg>

      <PercheVeg
        percheIMG="benessere.jpg"
        percheTitolo1="Perché la nostra salute dipende dal cibo e dall'ambiente in cui viviamo."
        percheTesto="Seguire un’alimentazione vegetale rappresenta una strategia nutrizionale consigliata in tutte le fasi della vita. Le ricerche scientifiche più recenti confermano che un regime a base vegetale può offrire numerosi vantaggi per la salute generale, se ben bilanciato e pianificato. Numerosi professionisti in ambito medico e nutrizionale affermano che le diete vegane e vegetariane correttamente strutturate sono perfettamente adeguate da un punto di vista nutrizionale e possono contribuire positivamente alla prevenzione e gestione di molte malattie croniche."
        percheTitolo2="Il potere di una dieta vegetale."
        percheParagrafo="Le patologie cardiovascolari sono ancora oggi una delle principali cause di morte a livello globale. Uno stile di vita sano, che includa un’alimentazione ricca di cibi vegetali, può svolgere un ruolo cruciale nel ridurre i fattori di rischio come il colesterolo alto e la pressione sanguigna elevata.
        Inoltre, il consumo regolare di frutta, verdura, cereali integrali, legumi e frutta secca è un'arma potente contro il diabete di tipo 2 e l’obesità, spesso aggravati da un eccessivo consumo di carne e zuccheri semplici. La zootecnia intensiva comporta effetti negativi non solo per gli animali, ma anche per l’uomo e l’ambiente. L’uso sistemico di antibiotici negli allevamenti contribuisce alla resistenza antimicrobica, mentre l’inquinamento prodotto dalle deiezioni animali e dalla deforestazione compromette la qualità dell’aria e dell’acqua.
        Inoltre, la maggior parte delle malattie infettive emergenti ha origine da uno stretto contatto tra esseri umani e animali, spesso favorito dagli allevamenti intensivi e dalla distruzione degli habitat naturali. È proprio in questi contesti che i virus compiono il cosiddetto “salto di specie”, generando nuove zoonosi."
        percheStyle="tema-salute"
      ></PercheVeg>
      <Footer></Footer>
    </>
  );
};
