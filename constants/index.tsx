import { eight, five, four, nine, one, seven, six, three, two } from "@public/assets/gallery";
import {
  facebook,
  instagram,
  shieldTick,
  support,
  tiktok,
  truckFast,
  twitter,
  youtube,
} from "@public/assets/icons";
import {
  heroBackground,
  medicalOutreach,
  recruit,
  buildPartnership,
  maintainAccountability,
  encourageGrowth,
  evaluateAdjust,
} from "@public/assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const footerLinks = [
  // {
  //   title: "Products",
  //   links: [
  //     { name: "Air Force 1", link: "/" },
  //     { name: "Air Max 1", link: "/" },
  //     { name: "Air Jordan 1", link: "/" },
  //     { name: "Air Force 2", link: "/" },
  //     { name: "Nike Waffle Racer", link: "/" },
  //     { name: "Nike Cortez", link: "/" },
  //   ],
  // },
  // {
  //   title: "Help",
  //   links: [
  //     { name: "About us", link: "/" },
  //     { name: "FAQs", link: "/" },
  //     { name: "How it works", link: "/" },
  //     { name: "Privacy policy", link: "/" },
  //     { name: "Payment policy", link: "/" },
  //   ],
  // },
  {
    title: "Support Us",
    links: [
      // { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+233 247040277", link: "tel:+233247040277" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/EVANGELISTern",
  },
  // { src: twitter, alt: "twitter logo", link: "" },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/tlcm_global/",
  },
  {
    src: tiktok,
    alt: "tiktok logo",
    link: "https://www.tiktok.com/@evangelist_ernest_gyamfi?is_from_webapp=1&sender_device=pc",
  },
  {
    src: youtube,
    alt: "youtube logo",
    link: "https://www.youtube.com/@evangelisternestadugyamfi9360",
  },
];

export const RolesAndResponsibilities = [
  {
    label: "Recruit volunteers",
    text: "We seek out medical professionals and support staff who are passionate about the mission and share the values of the organization.",
    image: recruit,
  },
  {
    label: "Build partnerships",
    text: "Establish relationships with local healthcare providers, community leaders, and other organizations to better serve the needs of the community.",
    image: buildPartnership,
  },
  {
    label: "Plan medical outreaches",
    text: "We organize medical clinics, health education programs, and other health-related events to serve the community.",
    image: medicalOutreach,
  },
  {
    label: "Maintain accountability",
    text: "We ensure that the organization is transparent in its practices, financial management, and decision-making.",
    image: maintainAccountability,
  },
  {
    label: "Encourage spiritual growth",
    text: "We provide opportunities for beneficiaries to grow in their faith through crusade, discipleship, and other means of worship.",
    image: encourageGrowth,
  },
  {
    label: "Evaluate and adjust",
    text: "Regularly evaluate the effectiveness of programs and adjust as necessary to better serve the community and meet the mission's objectives.",
    image: evaluateAdjust,
  },
];

export const gallery = {
  resources: [
    {
      title: "Find me on Twitter",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: one,
    },
    {
      title: "Welcome to Ark Labs",
      link: "https://ark-labs.co.uk",
      imageUrl: two,
    },
    {
      title: "Some sort of third title",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: three,
    },
    {
      title: "A personal site perhaps?",
      link: "https://robkendal.co.uk",
      imageUrl: four,
    },
    {
      title: "Super item number five",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: five,
    },
    {
      title: "Super item number six",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: six,
    },
    {
      title: "Super item number eight",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: eight,
    },
  ],
};
