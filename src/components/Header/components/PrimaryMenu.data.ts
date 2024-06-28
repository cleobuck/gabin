export const PrimaryMenuData = [
  {
    label: "Accueil",
    href: "#home",
  },
  {
    label: "Nos services",
    href: "#about",
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
    href: "#services",
    children: [
      {
        label: "Strecht",
        href: "/services/stretch",
      },
      {
        label: "Silhouette",
        href: "/services/silhouette",
      },
    ],
  },
  {
    label: "À propos",
    href: "#contact",
    children: [
      {
        label: "Qui Sommes nous",
        href: "/about/whoarewe",
      },
      {
        label: "Nos valeurs",
        href: "/about/values",
      },
      {
        label: "FAQ",
        href: "/about/FAQ",
      },
    ],
  },
];
