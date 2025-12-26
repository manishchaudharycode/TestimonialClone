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

export interface IListOne {
    to:string;
    title: string;
}
export const listOne : IListOne[] =[
  {
    to:"/Our Wall of Love",
    title:"Our Wall of Love"
  },
  {
    to:"/Embed widgets",
    title:"Embed widgets"
  },
  {
    to:"/Chrome/extension",
    title:"Chrome extension"
  },
  {
    to:"/Slack/app",
    title:"Slack app"
  },
  {
    to:"/Hopin app",
    title:"Hopin app"
  },
  {
    to:"/Pricing",
    title:"Pricing"
  },
  {
    to:"/Features",
    title:"Features"
  },
  {
    to:"/AI features",
    title:"AI features"
  },
  {
    to:"/Integrations",
    title:"Integrations"
  },
  {
    to:"https://www.youtube.com/watch?v=a-qT9pbOHkg",
    title:"Product demo"
  },
  {
    to:"/Status page",
    title:"Status page"
  }
]
export interface IListTwo {
    to:string;
    title: string;
}
export const listTwo : IListTwo [] = [
  {
    to:"https://help.testimonial.to/en/",
    title:"Help center"
  },
  {
    to:"https://testimonial.to/resources",
    title:"Our blog"
  },
  {
    to:"/Tutorials",
    title:"Tutorials"
  },
  {
    to:"https://testimonial.to/customer-stories",
    title:"Customer stories"
  },
  {
    to:"https://www.youtube.com/@testimonial",
    title:"YouTube channel"
  },
  {
    to:"/affiliates",
    title:"Join affiliate program"
  },
  {
    to:"/Privacy policy",
    title:"Privacy policy"
  },
  {
    to:"/tos",
    title:"Terms of Service"
  },
  {
    to:"/Cookies",
    title:"Cookie policy"
  }
]
export interface IListThree {
    to:string;
    title: string;
}
export const listThree : IListThree [] = [
  {
    to:"/agency",
    title:"Agencies"
  },
   {
    to:"https://testimonial.to/customers#b2b-companies",
    title:"B2B companies"
  },
   {
    to:"https://testimonial.to/customers/course-creator",
    title:"Course creators"
  },
   {
    to:"https://testimonial.to/customers#ecommerce-retail",
    title:"eCommerce"
  },
   {
    to:"https://testimonial.to/customers#consumer-apps",
    title:"Consumer apps"
  },
]
export interface IListFour {
    to:string;
    title: string;
}
export const listFour : IListFour [] = [
  {
    to:"https://testimonial.to/tools/case-study-generator",
    title:"Case study generator"
  },
  {
    to:"https://testimonial.to/features",
    title:"Testimonial questions generator"
  },
  {
    to:"https://testimonial.to/tools/google",
    title:"Google Business reviews"
  },
  {
    to:"https://testimonial.to/tools/yelp",
    title:"Yelp reviews"
  },
  {
    to:"https://testimonial.new",
    title:"Testimonial.new"
  },
  {
    to:"https://reviewtoimage.com/",
    title:"ReviewToImage.com"
  },
  {
    to:"https://seeyafuture.me",
    title:"SeeyaFuture.me"
  },
  {
    to:"https://streetinterview.ai/",
    title:"Street Interview AI"
  },
  {
    to:"https://typo.domains/",
    title:"Typo.domains"
  },
  {
    to:"https://pdfparser.com/",
    title:"PDF Parser"
  },
  {
    to:"https://testimonial.to/tools",
    title:"Other free tools"
  },
  
]

