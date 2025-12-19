export interface IPlans {
  title: string;
  imageUrl: string;
  description: string;
  starter: boolean;
  starterPlus: boolean;
  premium: boolean;
  ultimate: boolean;
}

export const plansData: IPlans[] = [
  {
    title: "Testimonial landing page",
    description: "Create a public landing page to showcase testimonials.",
    imageUrl: "https://testimonial.to/static/media/your-space.70a12c6e.png",
    starter: true,
    starterPlus: true,
    premium: true,
    ultimate: true,
  },
  {
    title: "Public Wall of Love page",
    description: "Display testimonials publicly on a branded wall.",
    imageUrl:
      "https://testimonial.to/static/media/wall-of-love-light.c2777316.png",
    starter: true,
    starterPlus: true,
    premium: true,
    ultimate: true,
  },
  {
    title: "Video download",
    description: "Download collected testimonials as video files.",
    imageUrl: "",
    starter: true,
    starterPlus: true,
    premium: true,
    ultimate: true,
  },
  {
    title: "Video auto transcription",
    description: "Automatic transcription of recorded videos.",
    imageUrl: "",
    starter: true,
    starterPlus: true,
    premium: true,
    ultimate: true,
  },
  {
    title: "AI space creator",
    description: "Generate content automatically with AI.",
    imageUrl: "",
    starter: true,
    starterPlus: true,
    premium: true,
    ultimate: true,
  },
  {
    title: "AI style generator",
    description: "Rewrite testimonials using various tones and formats.",
    imageUrl: "",
    starter: true,
    starterPlus: true,
    premium: true,
    ultimate: true,
  },
  {
    title: "AI case study generator",
    description: "Automatically generate case studies from testimonials.",
    imageUrl: "",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Custom domain",
    description: "Use your own branded custom domain.",
    imageUrl: "",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Custom theme color",
    description: "Fully customize theme and brand colors.",
    imageUrl: "https://testimonial.to/static/media/custom-color.f1f8256b.png",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Page localization",
    description: "Support multiple languages and localized content.",
    imageUrl: "",
    starter: false,
    starterPlus: true,
    premium: true,
    ultimate: true,
  },
  {
    title: "Your message in a video",
    description: "Attach personal introduction messages to testimonials.",
    imageUrl:
      "https://testimonial.to/static/media/your-video-message.509025b5.png",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Custom cards",
    description: "Design custom testimonial display cards.",
    imageUrl: "https://source.unsplash.com/random/?cards,design",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Portfolio page",
    description: "Create a dedicated portfolio page.",
    imageUrl:
      "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/0b049d8c-7163-4ca7-ec54-b30cf654ea00/public",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Video metrics",
    description: "Track performance of video testimonials.",
    imageUrl: "https://testimonial.to/static/media/video-metrics.6775d096.png",
    starter: false,
    starterPlus: false,
    premium: false,
    ultimate: true,
  },
  {
    title: "Sentiment analysis",
    description: "AI-powered emotional sentiment evaluation.",
    imageUrl:
      "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/fa9397d8-9950-48b9-16bb-57b1b96ac600/public",
    starter: false,
    starterPlus: false,
    premium: false,
    ultimate: true,
  },
  {
    title: "Star rating snippet",
    description: "Embed a testimonial rating widget.",
    imageUrl:
      "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/4643e083-22a3-4557-264f-08d998bac400/public",
    starter: false,
    starterPlus: false,
    premium: false,
    ultimate: true,
  },
  {
    title: "REST API",
    description: "Programmatic access to testimonial data.",
    imageUrl: "",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Webhook",
    description: "Send real-time trigger events to other apps.",
    imageUrl: "",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
  {
    title: "Zapier + Make Integrations",
    description: "Connect to automation tools like Zapier and Make.",
    imageUrl: "",
    starter: false,
    starterPlus: false,
    premium: true,
    ultimate: true,
  },
];

interface IPricing {
  title: string;
  subtitle: string;
  price: number;
  priceSubtitle: string;
  headline: string;
  features: string[];
  cta: string;
}

export const pricingData: IPricing[] = [
  {
    title: "Starter",
    subtitle: "For hobbies 🎁",
    price: 0,
    headline: "Free forever, features include:",
    priceSubtitle: "(Forever free)",
    features: ["1 space", "2 video textimonails in total"],
    cta: "",
  },
];

export interface Ifeatures {
  svgUrl: string;
  titleF: string;
  subTitle: string;
}

export const featuresData: Ifeatures[] = [
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Dedicated page",
    subTitle:
      "For each of your businesses, it will have a dedicated space page with a unique link. Your customers can directly go there to submit a text or a video testimonial.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Embeddable Wall of love",
    subTitle:
      "It's a page to show all your selected testimonials. You can even add the whole wall to your own site with an iframe embed code.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Dashboard page",
    subTitle:
      "You will have a dashboard page to manage all your spaces. You can add/update/remove the space as you want.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Video download",
    subTitle:
      "You will have the access to download the video in the MP4 format with its original resolution.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Video embed",
    subTitle:
      "One-line embed code is available for each video. You can paste it in any no-code platform. We take care of all hosting and streaming.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Your video message",
    subTitle:
      "You can add your own video in the space page. It's more personal and may help encourage customers send you their best shoutouts.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Custom domain",
    subTitle:
      "You can add the custom domain for each space. The link can be testimonial.your-product.com, or whatever you like.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Custom color",
    subTitle:
      "You can add a custom color for buttons to make it more fit into your own brand.",
  },
  {
    svgUrl: "http://www.w3.org/2000/svg",
    titleF: "Dark or light theme",
    subTitle:
      "You can choose dark or light theme for the product page to better fit your website style.",
  },
];

export interface IName {
  text: string;
}

export const appName : IName[] =[
  {
    text:"All Integrations"
  },
  {
    text:"Popular"
  },
  {
    text:"Ecommerce"
  },
  {
    text:"Website Builders"
  },
  {
    text:"Online Creators"
  },
  {
    text:"Form Builders"
  },
  {
    text:"Newsletters"
  },
  {
    text:"Social Media"
  },
  {
    text:"Online Courses"
  },
  {
    text:"Virtual Events"
  },
  {
    text:"Real Estate"
  },
  {
    text:"Review Platforms"
  },
  {
    text:"Customer Support"
  },
  {
    text:"App Stores"
  },
  {
    text:" Travel"
  },
  {
    text:"Local Business"
  },
  {
    text:"Custom"
  },
]

export interface IBrand {
  title: string;
  image: string;
  description: string;
  tags: string[];
}

export const brandsTable : IBrand[] = [
  {
    title:"wbflow",
    description:"joewo",
    image:"iman",
    tags:["Popular","Ecommerce"]
  }
]

export interface IList {
  PRODUCTS?: {
    to:string;
    title1: string;
  };
  Resources?: {
    to:string;
    title2: string;
  };
  Customers?:{
    to:string;
    title3:string
  };
  Freetools?:{
    to:string;
    title4:string
  }
}

export interface IList {
  PRODUCTS?: {
    to: string;
    title1: string;
  };
  Resources?: {
    to: string;
    title2: string;
  };
  Customers?: {
    to: string;
    title3: string;
  };
  Freetools?: {
    to: string;
    title4: string;
  };
}

export const allList: IList[] = [

  {
    PRODUCTS: {
      to: "",
      title1: ""
    }
  },
  {
    PRODUCTS: {
      to: "/product2",
      title1: "Product 2"
    }
  },
  {
    PRODUCTS: {
      to: "/product3",
      title1: "Product 3"
    }
  },
  {
    PRODUCTS: {
      to: "/product4",
      title1: "Product 4"
    }
  },
  {
    PRODUCTS: {
      to: "/product5",
      title1: "Product 5"
    }
  },
  {
    PRODUCTS: {
      to: "/product6",
      title1: "Product 6"
    }
  },
  {
    PRODUCTS: {
      to: "/product7",
      title1: "Product 7"
    }
  },
  {
    PRODUCTS: {
      to: "/product8",
      title1: "Product 8"
    }
  },
  {
    PRODUCTS: {
      to: "/product9",
      title1: "Product 9"
    }
  },
  {
    PRODUCTS: {
      to: "/product10",
      title1: "Product 10"
    }
  },
   {
    PRODUCTS: {
      to: "/product10",
      title1: "Product 11"
    }
  },
  {
    Resources: {
      to: "/resource1",
      title2: "Resource 1"
    }
  },
  {
    Resources: {
      to: "/resource2",
      title2: "Resource 2"
    }
  },
  {
    Resources: {
      to: "/resource3",
      title2: "Resource 3"
    }
  },
  {
    Resources: {
      to: "/resource4",
      title2: "Resource 4"
    }
  },
  {
    Resources: {
      to: "/resource5",
      title2: "Resource 5"
    }
  },
  {
    Resources: {
      to: "/resource6",
      title2: "Resource 6"
    }
  },
  {
    Resources: {
      to: "/resource7",
      title2: "Resource 7"
    }
  },
  {
    Resources: {
      to: "/resource8",
      title2: "Resource 8"
    }
  },
  {
    Resources: {
      to: "/resource9",
      title2: "Resource 9"
    }
  },
  {
    Resources: {
      to: "/resource10",
      title2: "Resource 10"
    }
  },
  {
    Resources: {
      to: "/resource10",
      title2: "Resource 10"
    }
  },
  // Customers
  {
    Customers: {
      to: "/customers",
      title3: "Customer Stories"
    }
  },
  {
    Customers: {
      to: "/customers",
      title3: "Customer Stories"
    }
  },
  {
    Customers: {
      to: "/customers",
      title3: "Customer Stories"
    }
  },
  {
    Customers: {
      to: "/customers",
      title3: "Customer Stories"
    }
  },
  // Freetools
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  },
  {
    Freetools: {
      to: "/freetools",
      title4: "Free Tools"
    }
  }, 
];