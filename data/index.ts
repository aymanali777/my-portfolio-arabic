import { links } from "@/config";

export const navItems = [
  { name: "نبذة عني", link: "#about" },
  { name: "المشاريع", link: "#projects" },
  { name: "الشهادات", link: "#testimonials" },
  { name: "تواصل معي", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "شغف دائم لتطوير الذات وتعلم تقنيات جديدة مثل الذكاء الاصطناعي.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "دقة في إنجاز الأعمال وإدارة المشاريع بجودة عالية.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "المهارات التقنية",
    description: "أطمح دائماً للأفضل",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "متخصص تقنية معلومات ومطور ويب مهتم بالتكنولوجيا.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "بالإضافة إلى البرمجة، خبير في صيانة الأجهزة وإدارة المخزون.",
    description: "معلومات إضافية",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "هل تود بدء مشروع جديد معي؟",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "منصة متجر إلكتروني (E-Commerce)",
    des: "تصميم وتطوير متجر إلكتروني متكامل باستخدام WordPress يشمل عرض المنتجات، سلة التسوق، وعملية الدفع وتخصيص القوالب والإضافات لتلبية متطلبات الأعمال وتوفير تصميم متجاوب.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 2,
    title: "تطبيق تعلم اللغة الإنجليزية",
    des: "تطوير تطبيق تفاعلي لتعلم اللغة الإنجليزية باستخدام Flutter يعمل على Android و iOS، مع تنفيذ واجهات استخدام سهلة وتوفير تمارين للمفردات واختبارات تفاعلية.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
    sourceCode: "",
  },
] as const;

export const testimonials = [
  {
    quote: `شهادة متخصصة في أساسيات وتطبيقات الأمن السيبراني.`,
    name: "مقدمة في الأمن السيبراني",
    title: "مقدمة في الأمن السيبراني — منصة إدراك (أكتوبر 2024)",
    img: "https://www.google.com/s2/favicons?domain=edraak.org&sz=128",
  },
  {
    quote: `دورة تدريبية في مبادئ وأساسيات الأمن السيبراني.`,
    name: "أساسيات الأمن السيبراني",
    title: "أساسيات الأمن السيبراني — منصة إدراك (أكتوبر 2024)",
    img: "https://www.google.com/s2/favicons?domain=edraak.org&sz=128",
  },
  {
    quote: `دورة شاملة في حماية الأنظمة الرقمية من الاختراقات الأمنية وتأمين الشبكات.`,
    name: "حماية الأنظمة من الاختراقات",
    title: "حماية الأنظمة من الاختراقات — منصة إدراك (أكتوبر 2024)",
    img: "https://www.google.com/s2/favicons?domain=edraak.org&sz=128",
  },
  {
    quote: `حاصل على دورة متخصصة في صيانة ومعالجة أجهزة الكمبيوتر والهواتف الذكية.`,
    name: "أساسيات صيانة اللاب توب",
    title: "أساسيات صيانة اللاب توب — منصة معارف (أغسطس 2023)",
    img: "https://www.google.com/s2/favicons?domain=m3aarf.com&sz=128",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "HTML5",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "CSS3",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Flutter",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Python",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "مطور ويب وتطبيقات — عمل حر",
    desc: "طوير تطبيقات ويب وتطبيقات هاتف محمول باستخدام HTML، CSS، JavaScript، Python، وFlutter، وإدارة مشاريع برمجية متكاملة.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "أخصائي تقنية المعلومات وإدارة المخزون",
    desc: "إدارة المخزون الرقمي وتنفيذ عمليات الجرد اليومي والمطابقة، وصيانة الأجهزة الحاسوبية وإعداد تقارير المبيعات بكفاءة عالية.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "Email",
    img: "/git.svg",
    link: "mailto:aymnali777113419@gmail.com",
  },
] as const;

export const techStack = {
  stack1: ["HTML", "CSS", "JavaScript"],
  stack2: ["Flutter", "Python", "WordPress"],
} as const;
