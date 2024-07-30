export const PrimaryMenuData = [
  {
    label: "Accueil",
    href: "#home",
  },
  {
    label: "Nos services",

    children: [
      {
        label: "Mariages",
        href: "/services/weddings",
      },
      {
        label: "Entreprises",
        href: "/services/business",
      },
      {
        label: "Collectivités",
        href: "/services/collectives",
      },
      {
        label: "Événements",
        href: "/services/events",
      },
    ],
  },
  {
    label: "Nos tentes",
    children: [
      {
        label: "Strecht",
        href: "/tents/stretch",
      },
      {
        label: "Silhouette",
        href: "/tents/silhouette",
      },
    ],
  },
  {
    label: "À propos",
    children: [
      {
        label: "Qui Sommes nous",
        href: "/about#who",
      },
      {
        label: "Nos valeurs",
        href: "/about#values",
      },
      {
        label: "FAQ",
        href: "/about#FAQ",
      },
    ],
  },
];
