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
    description:'Lockout/tagout (LOTO) devices install on machinery, electrical equipment, and plumbing systems to reduce the risk of injuries from unintended startups during maintenance. They’re an integral part of a complete procedure designed to meet the OSHA standard for the Control of Hazardous Energy (Lockout/Tagout). The LOTO kit includes items like Padlocks, valve lockouts, cable Lockouts, tags, hasps, ties and other accessories.AS Fire & Safety carries a multitude of products for complete lockout solutions for your electrical, circuit breaker, or mechanical kit requirements  ',
    image: lotoitems,
  },
  {
    id:37 ,
    name: " Self Contained Breathing Apparatus    ",
    description:'A self-contained breathing apparatus (SCBA) is a device worn to provide breathable air in environments with oxygen deficiency, smoke, dangerous gases, and other airborne contaminants that may be otherwise dangerous to breathe. Workers handling hazardous materials or operating in contaminated zones are typically required to wear a self-contained breathing apparatus. Only positive-pressure SCBAs are recommended for entry into atmospheres that are immediately dangerous to life and health (IDLH). AS Fire & Safety has a stock of SCBAs from 15 Minutes to 90 Minutes in Steel and Carbon Cylinders.    ',
    image:selfcontainebreathing ,
  },
  {
    id:38 ,
    name: " Single and Multi Gas Detectors    ",
    description:'Gas hazards can be broadly categorised as either asphyxiating (depriving the body of oxygen), toxic, or combustible. For petrochemical processing facilities, wastewater treatment plants, and a host of other industries, understanding the potential gas hazards in a given environment is an essential part of ensuring personnel safety. AS Fire & Safety can supply both single and multi gas detectors. Honeywell, MSA, Drager and Chinese single and multi gas detectors can be supplied to our clients.    ',
    image:singlegas ,
  },
  {
    id:39 ,
    name: " Electrical Gloves ",
    description:'Electrical-insulating gloves and protectors are made of dielectric materials to protect workers from electrical shock. Rubber gloves (sometimes called lineman’s gloves) are worn by electricians working on power lines. Leather protectors are worn over rubber gloves to protect against pinholes or punctures that can damage rubber gloves. Electrical-insulating glove kits include rubber gloves and leather protectors together. Gloves from 00 to 4 with protector can be arranged at very competitive prices.    ',
    image:electricalglove ,
  },
  {
    id:40 ,
    name: " Bio-Hazard Bags and Bins    ",
    description:'Biohazard waste bags are important for making sure that potentially dangerous waste material is disposed of properly and doesn’t end up hurting people, animals, or the environment. From 18 Ltr to 120 Ltr bags in different colors with certification are available. Waste bins from 4 ltr to 1200 Ltr capacity manufactured from fresh material can be supplied at very competitive prices.',
    image:biozardbag ,
  },{
    id:41 ,
    name: "Road Barriers    ",
    description:'Road barriers, Plastic Barriers, Water-filled road barriers, road separators, road jersey barriers, and security barriers. Efficient road barriers and a controlling system have become the need of the hour these days. Also, with an increasing number of vehicles in populated areas such as offices, hospitals, public places, and residential premises. Safety Cones, Cat Eyes, Edge Protectors, Delineators and Speed Breakers can be supplied. AS Fire & Safety provides the services of installation of Cat Eyes, Edge Protectors and Speed Breakers. ',
    image:roadbarrier ,
  },
  {
    id:42 ,
    name: " Explosion Proof Torches    ",
    description:'Explosion-proof flashlights are designed to be used in a “Hazardous Location,”. A “Hazardous Location,” defined as places where fire or explosion hazards may exist due to flammable gases, flammable liquid–produced vapors, combustible liquid–produced vapors, combustible dusts, or ignitable fibers/flyings present in the air in quantities sufficient to produce explosive or ignitable mixtures. Besides, safety flashlight help employees for emergency situation and keeping them safe on the job. Explosion proof torches for working in hazardous zones, 0, 1and 2 are available.    ',
    image:explosiontorch ,
  },
  {
    id:43 ,
    name: " Arc Flash Suit    ",
    description: 'Get full body protection from arc flash clothing for heat exposure. Each arc flash suit includes an arc flash hood and either full body arc flash coveralls or a combination of arc flash coat and bib overall pants. AS Fire & Safety offered arc flash suits meet or exceed NFPA Standards for the particular Hazard Risk Category. We offer arch flash suits from 8Cal/m2 to 140Cal/m2.    '
    ,
    image:arcflashsuit ,
  },
  {
    id:44 ,
    name: " Fire Fighting Suit    ",
    description:'We supply fully certified fire fighter suits with enhanced thermal protection. Our suits have been manufactured to meet industry’s standards. AS Fire & Safety fire fighter suits will enable your teams to fight fires in all types of fire fighting situation efficiently.    ',
    image: firefightsuit,
  },
  {
    id:45 ,
    name: "  Cut Resistance Glove    ",
    description:'Hand injuries are the most common injuries sustained in the work place. There are many types of hand injuries which may cause loss of thousands of working hours in the long run in any industry. AS Fire & Safety offers different solutions to avoid hand injuries in different working environments. We offer from simple cotton gloves to impact resistance gloves to high temperature resistance gloves.    ',
    image: cutresistanceglove,
  },

  {
    id:46 ,
    name: " Safety Shoe-PEZZOL    ",
    description:'When you are working in a dynamic environment, then you are always prone to injuries if you do not use proper safety items and the prime target of such injury is the worker’s foot. A safety shoe can protect the worker from foot injury and it is necessary to use a certified Safety Shoe instead of any shoe. AS Fire & Safety has stock of safety shoes which meet EN and CE Certifications.    ',
    image: safetyshoepezzol,
  },
  {
    id:47 ,
    name: " Full Face Mask    ",
    description:'Respiratory damage can cause lethal injury if the proper respiratory safety items are not used in working environments where a worker is exposed to dangerous chemicals or gases. Proper use of half and full face masks is also very important. AS Fire & Safety has disposable and reusable masks which meet CE and EN Certifications.    ',
    image: fullfacemask,
  },
  {
    id:48 ,
    name: "  Self Retracting Lifeline    ",
    description:'When you are working at height, then a minor mistake can cause a lot of damage not only to the property but to the life of a worker as well. So, use of a fall protection device is a must to avoid any sort of damage. Full Body harness with lanyards are commonly available but a certified harness from an authentic source can protect you and your worker. All fall protection equipment such as lanyards, full body harness, lineman belts and SRLs can be arranged at very competitive prices.    ',
    image: selfretracting,
  },
  





];

export default ProductItem;
