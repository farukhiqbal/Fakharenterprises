import cbs from "../../images/cbs-Panel.webp";
import ecolight from "../../images/24VDc-Eco-Light-1.webp";
import addressable from "../../images/Addressable-24V-DC-Easy-Light-1.webp";
import fire5kg from "../../images/CO2-5KG-1.webp";
import fire30kg1 from "../../images/CO2-30kg-1.webp";
import dcp1kg from "../../images/DCP-1KG-1.webp";
import dcp6kg from "../../images/DCP-6Kg-BC-1.webp";
import mkb50kg from "../../images/MBK14-500PA-WLD-1.webp";
import foam from "../../images/FOam-1.webp";
import fireball from "../../images/MBK15-FIREBALL.webp";
import pipebox from "../../images/591_4-1.webp";
import firereel from "../../images/1700_1-1.webp";
import barrel from "../../images/Dry-Barrel-Fire-Hydrant-1.webp";
import branchpipe from "../../images/Branch-Pipe-1.webp";
import breaching from "../../images/Breaching-Inlet-for-Dry-Riser.webp";
import firepipe from "../../images/Fire-Hose-1.webp";
import sprinkler from "../../images/sprinkler.webp";
import sprinkler2 from "../../images/sprinkler2.webp";
import firesuppression from "../../images/fire-suppressionsystem.webp";
import firesuppression2 from "../../images/HFC-227ea-vds-2.webp";
import firesuppression3 from "../../images/MOBIAK-DIAS1.webp";
import firesuppression4 from "../../images/MOBIAK-FIRE-IG-541-1.webp";
import helomit from '../../images/V-Gard-BLue.webp'
import jogger from '../../images/x1100n-Safety-Joggers-1.webp'
import glaves from '../../images/WElding-GLoves_.webp'
import goggles  from '../../images/Welding-Goggles.webp' 
import safetyharness from '../../images/Safety-Harness-UNi-.webp'
import safetyharness2 from '../../images/Safety-Vest-1.webp'
import singlegas from   '../../images/siglegasdetectors.png'
import electricalglove from '../../images/electrical gloves.png'
import biozardbag from '../../images/bio-hazardbag.png'
import roadbarrier from '../../images/roadbarriers.png'
import explosiontorch from '../../images/explosiontorches.png'
import  arcflashsuit from '../../images/arcflashsuit.png'
import firefightsuit from '../../images/firefightsuit.png'
import cutresistanceglove from '../../images/cutresistanceglove.png'
import lotoitems from '../../images/lotoitems.png'
import selfcontainebreathing from '../../images/selfcontainbreathing.png'
import safetyshoepezzol from '../../images/safetyshoe-pezzol.png'
import fullfacemask from '../../images/fullfacemask.png'
import selfretracting from '../../images/selretraacting lifeline.png'








const ProductItem = [
  {
    id: 1,
    name: "Fire Extinguishers",
    image:
      "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-extinguishers.jpg",
  },
  {
    id: 2,
    name: "Fire Alarm/Detection Systems",
    image:
      "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-alarm.jpg",
  },
  {
    id: 3,
    name: "Fire Suppression Systems",
    image:
      "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-suppression.jpg",
  },
  {
    id: 4,
    name: "Fire Fighting Systems",
    image:
      "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/fire-fighting.jpg",
  },
  {
    id: 5,
    name: "Emergency Lighting Systems",
    image:
      "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/emergency-lighting.jpg",
  },
  {
    id: 6,
    name: "PPE",
    image:
      "https://www.capitalsolutions.pk/wp-content/themes/capital-solutions/img/safety/featured/ppe.jpg",
  },

  { id: 7, name: "Central Battery System 24V DC CB", image: cbs },
  {
    id: 8,
    name: "Central Battery System 24V DC Eco Light    ",
    image: ecolight,
  },
  {
    id: 9,
    name: "Central Battery System Addressable Emergency Luminaries 24V DC     ",
    image: addressable,
  },

  { id: 10, name: "6Lt ABF Fire Extinguisher Portable   ", image: fire5kg },

  {
    id: 11,
    name: "Fire Extinguishers CO2 30KG        ",
    image: fire30kg1,
  },
  {
    id: 12,
    name: "Fire Extinguishers DCP 1KG        ",
    image: dcp1kg,
  },
  {
    id: 13,
    name: "Fire Extinguishers DCP 6KG BC     ",
    image: dcp6kg,
  },
  {
    id: 14,
    name: "Fire Extinguishers DCP 50Kg        ",
    image: mkb50kg,
  },
  {
    id: 15,
    name: "Water – AFFF 9Ltr        ",
    image: foam,
  },
  { id: 16, name: "Fire Extinguishers Ball  ", image: fireball },

  { id: 17, name: "Fire Fighting Sprinkler 1/2″          ", image: sprinkler },
  {
    id: 18,
    name: "Fire Fighting Branch pipe  ",
    image: branchpipe,
  },
  {
    id: 19,
    name: "Fire Fighting Breaching Inlet for Dry Riser          ",
    image: breaching,
  },

  { id: 20, name: "Forestry Fire Hose          ", image: firepipe },

  {
    id: 21,
    name: "Fire Fighting Cabinets          ",
    image: pipebox,
  },
  { id: 22, name: "Fire Fighting Reel        ", image: firereel },

  {
    id: 23,
    name: "Fire Fighting Dry Barrel Fire Hydrant      ",
    image: barrel,
  },
  {
    id: 24,
    name: " Fire Fighting Sprinkler 3/4”            ",
    image: sprinkler2,
  },
  {
    id: 25,
    name: "  Fire Suppression System CO2            ",
    image: firesuppression,
  },

  {
    id: 26,
    name: "Fire Suppression System FK-5-1-12 NOVEC            ",
    image: firesuppression2,
  },
  {
    id: 27,
    name: "Fire Suppression System HFC-227ea FM200    ",
    image: firesuppression2,
  },


  {
    id: 28,
    name: "Wet Chemical Fire Suppression System    ",
    image: firesuppression3,
  },

  {
    id: 29,
    name: "Fire Suppression System IG 541 Certified    ",
    image: firesuppression4,
  },

  
  {
    id:30 ,
    name: "PPE Safety Helmets     ",
    image: helomit ,
  },

  {
    id:31 ,
    name: "PPE Safety Shoes    ",
    image:jogger ,
  },
  {
    id: 32,
    name: "PPE Safety Gloves    ",
    image: glaves,
  },
  {
    id: 33,
    name: "PPE Safety Goggles    ",
    image: goggles,
  },
  {
    id:34 ,
    name: "SAFETY HARNESS UNI 1    ",
    image:safetyharness ,
  },
  {
    id:35 ,
    name: "PPE Safety Vest    ",
    image:safetyharness2 ,
  },
    
  {
    id:36 ,
    name: " Loto Items    ",
    // title:'Electrical Safety Suit (ess)    ',
    image: lotoitems,
  },
  {
    id:37 ,
    name: " Self Contained Breathing Apparatus    ",
    image:selfcontainebreathing ,
  },
  {
    id:38 ,
    name: " Single and Multi Gas Detectors    ",
    image:singlegas ,
  },
  {
    id:39 ,
    name: " Electrical Gloves ",
    image:electricalglove ,
  },
  {
    id:40 ,
    name: " Bio-Hazard Bags and Bins    ",
    image:biozardbag ,
  },{
    id:41 ,
    name: "Road Barriers    ",
    image:roadbarrier ,
  },
  {
    id:42 ,
    name: " Explosion Proof Torches    ",
    image:explosiontorch ,
  },
  {
    id:43 ,
    name: " Arc Flash Suit    ",
    image:arcflashsuit ,
  },
  {
    id:44 ,
    name: " Fire Fighting Suit    ",
    image: firefightsuit,
  },
  {
    id:45 ,
    name: "  Cut Resistance Glove    ",
    image: cutresistanceglove,
  },

  {
    id:46 ,
    name: " Safety Shoe-PEZZOL    ",
    image: safetyshoepezzol,
  },
  {
    id:47 ,
    name: " Full Face Mask    ",
    image: fullfacemask,
  },
  {
    id:48 ,
    name: "  Self Retracting Lifeline    ",
    image: selfretracting,
  },
  





];

export default ProductItem;
