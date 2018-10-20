// hand picker offers
import poas from "old-assets/img/backgrounds/poas.png";
import baldi from "old-assets/img/backgrounds/baldi.png";
import tabacon from "old-assets/img/backgrounds/tabacon.png";
import tortuga from "old-assets/img/backgrounds/tortuga.png";
import manuelAntonio from "old-assets/img/backgrounds/manuel-antonio.png";
// low rates offers
import iglesiaGrecia from "old-assets/img/backgrounds/iglesia-grecia.png";
import laPaz from "old-assets/img/backgrounds/la-paz.png";
import canopy from "old-assets/img/backgrounds/canopy.png";
import ramLuna from "old-assets/img/backgrounds/ram-luna.png";
import whiteWaterRafting from "old-assets/img/backgrounds/white-water-rafting.png";

import calypsoPdf from "old-assets/db/pdf/calypso.pdf";
import manuelAntonioPdf from "old-assets/db/pdf/manuel-antonio.pdf";
import comboTourPdf from "old-assets/db/pdf/combo-tour.pdf";
import ramLunaPdf from "old-assets/db/pdf/ram-luna.pdf";

export const handPickedOffers = className => [
  {
    title: "Combo Tour Poas Volcano",
    price: 120,
    image: poas,
    pdf: comboTourPdf,
    className,
    more: [
      "Duration: 11 hours.\n Availability : Year round.\n Includes: Transportation, Guided tour, Entrance fees, Breakfast and lunch.",
      "Learn more about the golden bean of Costa Rica (the Coffee plantation), continuing to the wonderful Poas Volcano and finally visit to the lush and unique animal rescue center with a 5 different and beautifull waterfalls (La Paz Waterfall Gardens)."
    ]
  },
  {
    title: "Hot Springs Arenal Baldí",
    image: baldi,
    className
  },
  {
    title: "Hot Springs Arenal Tabacón",
    image: tabacon,
    className
  },
  {
    title: "Catamarán Adventure Tortuga Island Calypso Cruisses",
    price: 145,
    image: tortuga,
    pdf: calypsoPdf,
    className,
    more: [
      "Duration: 14 hours.\n Availability: Year-round.\n Includes: Transportation, guide tour, typical breakfast, luch and soft beverages.",
      "Visiting Turtle Island beach aboard of the Calypso cruises is on of the best options of white sand beach locatedd in the Gulf of Nicoya approximately 1:30 minutes of Puntarenas, where you also will enjoy snorkeling and banana boat tour."
    ]
  },
  {
    title: "White Sand Beach Manuel Antonio National Park",
    price: 115,
    image: manuelAntonio,
    pdf: manuelAntonioPdf,
    className,
    more: [
      "Duration: 12 hours.\n Availability: Year around.\n Includes: Transportation, guided tour, admissions, breakfast and lunch.",
      "Explore the most famous Manuel Antonio National Park and enjoy a full day on the tropical rainforest sorrounded with many species of animals and spend a wonderful time at white sand and clean blue water beach."
    ]
  }
];
export const lowRatesOffers = className => [
  {
    title: "Combo Tour Poas Volcano",
    price: 120,
    image: iglesiaGrecia,
    pdf: comboTourPdf,
    className,
    more: [
      "Duration: 11 hours.\n Availability : Year round.\n Includes: Transportation, Guided tour, Entrance fees, Breakfast and lunch.",
      "Learn more about the golden bean of Costa Rica (the Coffee plantation), continuing to the wonderful Poas Volcano and finally visit to the lush and unique animal rescue center with a 5 different and beautifull waterfalls (La Paz Waterfall Gardens)."
    ]
  },
  {
    title: "Animal Rescue Center La Paz Waterfall Gardens",
    image: laPaz,
    className
  },
  {
    title: "Zip Lines Adventure Canopy Tour",
    image: canopy,
    className
  },
  {
    title: "Dinner at the point of view Ram Luna",
    price: 50,
    image: ramLuna,
    pdf: ramLunaPdf,
    className,
    more: [
      "Duration: Runs all day.\n Availability: Year round.\n Includes: Transportation, Bilingual certified guide tour and Pick up: from your hotel.",
      "If you want to have the perfect dinner time in a wonderful restaurant (Point of view Ram luna), this is your best option; where you can see the whole central valley at night."
    ]
  },
  {
    title: "Fun And Adventure White Water Rafting",
    image: whiteWaterRafting,
    className
  }
];
