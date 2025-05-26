"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
// images
import { FaChevronRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndexIot, setActiveIndexIot] = useState<number>(0);
  const [activeIndexProduct, setActiveIndexProduct] = useState<number>(0);
  const [activeIndexProducts, setActiveIndexProducts] = useState<number>(0);
  const [activeIndexAboutUs, setActiveIndexAboutUs] = useState<number>(0);
  const [activeIndexMedia, setActiveIndexMedia] = useState<number>(0);

  // const [isOpen, setIsOpen] = useState(false);
  const [isIotSolutionsOpen, setIsIotSolutionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutusOpen, setIsAboutUsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const dropdownIotRef = useRef<HTMLLIElement>(null);
  const dropdownServicesRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMobileMenu = (toggleFunction: () => void) => {
    toggleMenu();
    toggleFunction();
  };

  const toggleIotSolutions = () => {
    setIsIotSolutionsOpen((prev) => !prev);
    setIsServicesOpen(false);
    setIsProductsOpen(false);
    setIsAboutUsOpen(false);
    setIsMediaOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsIotSolutionsOpen(false);
    setIsProductsOpen(false);
    setIsAboutUsOpen(false);
    setIsMediaOpen(false);
  };

  const toggleProducts = () => {
    setIsProductsOpen((prev) => !prev);
    setIsIotSolutionsOpen(false);
    setIsServicesOpen(false);
    setIsAboutUsOpen(false);
    setIsMediaOpen(false);
  };

  const toggleAboutUs = () => {
    setIsAboutUsOpen((prev) => !prev);
    setIsIotSolutionsOpen(false);
    setIsServicesOpen(false);
    setIsProductsOpen(false);
    setIsMediaOpen(false);
  };

  const toggleMedia = () => {
    setIsMediaOpen((prev) => !prev);
    setIsIotSolutionsOpen(false);
    setIsServicesOpen(false);
    setIsProductsOpen(false);
    setIsAboutUsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownIotRef.current &&
        !dropdownIotRef.current.contains(event.target as Node)
      ) {
        setIsIotSolutionsOpen(false);
      }
      if (
        dropdownServicesRef.current &&
        !dropdownServicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const iotSolutiosItems = [
    {
      title: "Industrial Solutions Overview",
      desTitle: "Industrial Solutions Overview",
      learnMoreLink: "/our-industrial-solutions",
      description:
        "Transform customer support with skills designed to efficiently solve recurring issues.",
      links: ["Applications", "Industries", "Who you are"],
    },
    {
      title: "Energy Monitoring",
      desTitle: "Energy Monitoring",
      learnMoreLink: "/energy-consumption-monitoring",
      description:
        "Track and optimize energy usage to reduce costs and improve sustainability.",
      links: [
        "Energy Efficiency",
        "Consumption Trends",
        "Sustainability Reports",
      ],
    },
    {
      title: "Condition Monitoring",
      desTitle: "Condition Monitoring",
      learnMoreLink: "/machine-condition-monitoring",
      description:
        "Monitor equipment health to reduce downtime and improve maintenance planning.",
      links: [
        "Predictive Maintenance",
        "Sensor Data Analysis",
        "Failure Prevention",
      ],
    },
    {
      title: "Productivity Monitoring",
      desTitle: "Productivity Monitoring",
      learnMoreLink: "/oee-and-production-monitoring",
      description:
        "Enhance production efficiency with real-time monitoring and analytics.",
      links: [
        "Process Optimization",
        "Manufacturing Insights",
        "Reports & Analytics",
      ],
    },
  ];
  const productSolutionsItems = [
    {
      title: "Overview",
      desTitle: "Product Development Overview",
      learnMoreLink: "/our-process",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
      links: [
        "Why Us",
        "Design & Development ",
        "Our Process",
        "Production and supply",
      ],
    },
    {
      title: "Capabilities",
      desTitle: "Capabilities Overview",
      learnMoreLink: "/services-overview",
      description:
        "Enhance production efficiency with real-time monitoring and analytics.",
      links: [
        "Process Optimization",
        "Manufacturing Insights",
        "Reports & Analytics",
      ],
    },
    {
      title: "Projects",
      desTitle: "Projects",
      learnMoreLink: "/our-works",
      description:
        "Monitor equipment health to reduce downtime and improve maintenance planning.",
      links: [
        "Predictive Maintenance",
        "Sensor Data Analysis",
        "Failure Prevention",
      ],
    },
  ];

  const productsItems = [
    {
      title: "Edge Connect Series",
      desTitle: "Edge Connect Series Overview",
      learnMoreLink: "/",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Field Connect Series",
      desTitle: "Field Connect Series Overview",
      learnMoreLink: "/",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
    },
  ];
  const aboutUsItems = [
    {
      title: "Overview",
      desTitle: "About Us Overview",
      learnMoreLink: "/about-us",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Team",
      desTitle: "Our Team Overview",
      learnMoreLink: "/our-team",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Careers",
      desTitle: "Careers Overview",
      learnMoreLink: "/",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
    },
  ];

  const mediaItems = [
    {
      title: "Blogs",
      desTitle: "Blogs Overview",
      learnMoreLink: "/blogs",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
    },
    {
      title: "Press",
      desTitle: "Press Overview",
      learnMoreLink: "/",
      description:
        "Transform customer support with skills designed to efficiently solve recurring.",
    },
  ];

  return (
    <>
      <div className="hidden min-[768px]:flex">
        <div className="relative group">
          {/* Menu Button */}
          <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-[12.25px] text-white lg:px-[20px] px-[10px] flex items-center lg:gap-3 gap-1.5 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
            Industrial IoT Solutions{" "}
            <FaChevronDown className="w-[12px] transform transition-all duration-300" />
          </button>

          {/* Mega Menu Container */}
          <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
            <div className="flex min-[1350px]:max-w-[1279px] mx-auto w-full">
              {/* Left Panel - Navigation Items */}
              <div className="2xl:w-[345px] h-full lg:w-[330px] w-[310px] lg:border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] pb-[30px]">
                <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">
                  Industrial IoT Solutions
                </span>
                <ul>
                  {iotSolutiosItems.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveIndexIot(index)}
                      className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${
                        activeIndexIot === index
                          ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]"
                          : "hover:text-[#3563E9]"
                      }`}
                    >
                      <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 py-1.5 flex group-hover:text-[15px] smooth">
                        {item.title}
                      </span>
                      <span>
                        <FaChevronRight className="text-[11px]" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Panel - Separate Sections for Each Item */}
              <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] lg:border-s-0 border-s 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">
                {iotSolutiosItems.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-300 w-full items-start gap-[15px] max-[1024px]:flex-wrap ${
                      activeIndexIot === index
                        ? "opacity-100 flex"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <div className="2xl:w-[277px] max-[1024px]:w-full">
                      <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">
                        Description
                      </span>
                      <h3 className="text-[14px] font-medium text-black">
                        {item.desTitle}
                      </h3>
                      <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">
                        {item.description}
                      </p>
                      <div className="flex justify-start">
                        <Link
                          href={item.learnMoreLink}
                          className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold"
                        >
                          <span className="text-[14px]">Learn More</span>{" "}
                          <MdArrowOutward className="ms-2.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="text-[14px] text-black w-[calc(100%_-_277px)] font-medium max-[1024px]:w-full">
                      <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex lg:mt-0 mt-4 lg:mb-0 mb-3">
                        More
                      </span>
                      <div className="grid grid-cols-2 gap-2 lg:gap-y-8 gap-y-4 xl:pb-0 pb-8">
                        {item.links.map((link, idx) => (
                          <Link key={idx} href="#" className="">
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Menu Button */}
          <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-[12.25px] text-white lg:px-[20px] px-[10px] flex items-center lg:gap-3 gap-1.5 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
            Product Development{" "}
            <FaChevronDown className="w-[12px] transform transition-all duration-300" />
          </button>

          {/* Mega Menu Container */}
          <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
            <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
              {/* Left Panel - Navigation Items */}
              <div className="2xl:w-[345px] lg:w-[330px] w-[310px] lg:border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] pb-[30px]">
                <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">
                  Product Development
                </span>
                <ul>
                  {productSolutionsItems.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveIndexProduct(index)}
                      className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${
                        activeIndexProduct === index
                          ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]"
                          : "hover:text-[#3563E9]"
                      }`}
                    >
                      <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 py-1.5 flex group-hover:text-[15px] smooth">
                        {item.title}
                      </span>
                      <span>
                        <FaChevronRight className="text-[11px]" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Panel - Separate Sections for Each Item */}
              <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] lg:border-s-0 border-s 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px]">
                {productSolutionsItems.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-300 w-full items-start gap-[15px] max-[1024px]:flex-wrap ${
                      activeIndexProduct === index
                        ? "opacity-100 flex"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <div className="2xl:w-[277px] max-[1024px]:w-full">
                      <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">
                        Description
                      </span>
                      <h3 className="text-[14px] font-medium text-black">
                        {item.desTitle}
                      </h3>
                      <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">
                        {item.description}
                      </p>
                      <div className="flex justify-start">
                        <Link
                          href={item.learnMoreLink}
                          className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold"
                        >
                          <span className="text-[14px]">Learn More</span>{" "}
                          <MdArrowOutward className="ms-2.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="text-[14px] text-black w-[calc(100%_-_277px)] font-medium max-[1024px]:w-full">
                      <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex lg:mt-0 mt-4 lg:mb-0 mb-3">
                        More
                      </span>
                      <div className="grid grid-cols-2 gap-2 lg:gap-y-8 gap-y-4 xl:pb-0 pb-8">
                        {item.links.map((link, idx) => (
                          <Link key={idx} href="#" className="">
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Menu Button */}
          <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-[12.25px] text-white lg:px-[20px] px-[10px] flex items-center lg:gap-3 gap-1.5 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
            Products{" "}
            <FaChevronDown className="w-[12px] transform transition-all duration-300" />
          </button>

          {/* Mega Menu Container */}
          <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
            <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
              {/* Left Panel - Navigation Items */}
              <div className="2xl:w-[345px] lg:w-[330px] w-[310px] lg:border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] pb-[30px]">
                <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">
                  Products
                </span>
                <ul>
                  {productsItems.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveIndexProducts(index)}
                      className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${
                        activeIndexProducts === index
                          ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]"
                          : "hover:text-[#3563E9]"
                      }`}
                    >
                      <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 py-1.5 flex group-hover:text-[15px] smooth">
                        {item.title}
                      </span>
                      <span>
                        <FaChevronRight className="text-[11px]" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Panel - Separate Sections for Each Item */}
              <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] lg:border-s-0 border-s 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] xl:pb-0 pb-8">
                {productsItems.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-300 w-full items-start gap-[15px] max-[1024px]:flex-wrap ${
                      activeIndexProducts === index
                        ? "opacity-100 flex"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <div className="2xl:w-[277px]">
                      <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">
                        Description
                      </span>
                      <h3 className="text-[14px] font-medium text-black">
                        {item.desTitle}
                      </h3>
                      <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">
                        {item.description}
                      </p>
                      <div className="flex justify-start">
                        <Link
                          href={item.learnMoreLink}
                          className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold"
                        >
                          <span className="text-[14px]">Learn More</span>{" "}
                          <MdArrowOutward className="ms-2.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Menu Button */}
          <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-[12.25px] text-white lg:px-[20px] px-[10px] flex items-center lg:gap-3 gap-1.5 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
            About Us{" "}
            <FaChevronDown className="w-[12px] transform transition-all duration-300" />
          </button>

          {/* Mega Menu Container */}
          <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
            <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
              {/* Left Panel - Navigation Items */}
              <div className="2xl:w-[345px] lg:w-[330px] w-[310px] lg:border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] pb-[30px]">
                <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">
                  About Us
                </span>
                <ul>
                  {aboutUsItems.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveIndexAboutUs(index)}
                      className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${
                        activeIndexAboutUs === index
                          ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]"
                          : "hover:text-[#3563E9]"
                      }`}
                    >
                      <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 py-1.5 flex group-hover:text-[15px] smooth">
                        {item.title}
                      </span>
                      <span>
                        <FaChevronRight className="text-[11px]" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Panel - Separate Sections for Each Item */}
              <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] lg:border-s-0 border-s 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] xl:pb-0 pb-8">
                {aboutUsItems.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-300 w-full items-start gap-[15px] max-[1024px]:flex-wrap ${
                      activeIndexAboutUs === index
                        ? "opacity-100 flex"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <div className="2xl:w-[277px]">
                      <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">
                        Description
                      </span>
                      <h3 className="text-[14px] font-medium text-black">
                        {item.desTitle}
                      </h3>
                      <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">
                        {item.description}
                      </p>
                      <div className="flex justify-start">
                        <Link
                          href={item.learnMoreLink}
                          className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold"
                        >
                          <span className="text-[14px]">Learn More</span>{" "}
                          <MdArrowOutward className="ms-2.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Menu Button */}
          <button className="nav-btn 2xl:text-[18px] xl:text-[13.5px] text-[12.25px] text-white lg:px-[20px] px-[10px] max-[1279px]:!pe-0 flex items-center lg:gap-3 gap-1.5 2xl:py-[38px] xl:py-[19.5px] py-[16.5px]">
            Media{" "}
            <FaChevronDown className="w-[12px] transform transition-all duration-300" />
          </button>

          {/* Mega Menu Container */}
          <div className="group-hover:flex group-hover:opacity-100 dropdown-menu fixed hidden opacity-0 2xl:top-[99px] xl:top-[62px] left-0 right-0 bg-white border shadow-lg 2xl:px-[20px] xl:px-[15px] flex-col w-full px-[20px]">
            <div className="flex items-start min-[1350px]:max-w-[1279px] mx-auto w-full">
              {/* Left Panel - Navigation Items */}
              <div className="2xl:w-[345px] lg:w-[330px] w-[310px] lg:border-r 2xl:pe-[30px]  pe-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] pb-[30px]">
                <span className="text-[13px] text-[#4B5563] ps-[15px] pb-3 flex">
                  Media
                </span>
                <ul>
                  {mediaItems.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveIndexMedia(index)}
                      className={`group pe-[15px] ps-[35px] hover:ps-[15px] w-full cursor-pointer flex rounded-[6px] justify-between items-center smooth text-[#4B5563] hover:text-[#3563E9] ${
                        activeIndexMedia === index
                          ? "bg-[rgba(55,99,233,0.1)] !ps-[15px] font-semibold !text-[#3563E9]"
                          : "hover:text-[#3563E9]"
                      }`}
                    >
                      <span className="2xl:text-[14px] text-[13.5px] text-nowrap 2xl:py-2.5 xl:py-2 py-1.5 flex group-hover:text-[15px] smooth">
                        {item.title}
                      </span>
                      <span>
                        <FaChevronRight className="text-[11px]" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Panel - Separate Sections for Each Item */}
              <div className="2xl:w-[calc(100%_-_345px)] w-[calc(100%_-_330px)] lg:border-s-0 border-s 2xl:ps-[30px] ps-[20px] pt-[23px] 2xl:pb-[45px] lg:pb-[35px] xl:pb-0 pb-8">
                {mediaItems.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-300 w-full items-start gap-[15px] max-[1024px]:flex-wrap ${
                      activeIndexMedia === index
                        ? "opacity-100 flex"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <div className="2xl:w-[277px]">
                      <span className="text-[13px] text-[#4B5563] 2xl:pb-8 xl:pb-6 lg:pb-4 flex">
                        Description
                      </span>
                      <h3 className="text-[14px] font-medium text-black">
                        {item.desTitle}
                      </h3>
                      <p className="text-[12px] text-[#4B5563] mt-2.5 mb-6 max-w-[230px] opacity-80">
                        {item.description}
                      </p>
                      <div className="flex justify-start">
                        <Link
                          href={item.learnMoreLink}
                          className="flex items-center h-[40px] px-[18px] bg-[#3563E9] transition-all duration-500 hover:bg-black rounded-[8px] text-white font-semibold"
                        >
                          <span className="text-[14px]">Learn More</span>{" "}
                          <MdArrowOutward className="ms-2.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="min-[768px]:hidden text-white focus:outline-none togglebtn z-[20]"
        onClick={toggleMenu}
      >
        <svg
          className="h-[32px] w-[32px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div
        className={`xl:hidden bg-white w-full absolute left-0 top-[62px] min-h-[calc(100vh_-_62px)] flex flex-col justify-between transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="xl:hidden ">
          <ul className="flex flex-col">
            <li className="relative">
              <button
                onClick={toggleIotSolutions}
                className="py-[18px] flex items-center justify-between w-full text-black font-normal text-base border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]"
              >
                Industrial IoT Solutions{" "}
                <FaChevronDown
                  className={`ml-2 transform transition-all duration-300 ${
                    isIotSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isIotSolutionsOpen && (
                <div className="flex flex-col mb-3">
                  <Link
                    href="/our-industrial-solutions"
                    className="text-black text-[14px] transition-all duration-1000 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleIotSolutions)}
                  >
                    Industrial Solutions Overview
                  </Link>
                  <Link
                    href="/energy-consumption-monitoring"
                    className="text-black text-[14px] transition-all duration-1000 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleIotSolutions)}
                  >
                    Energy Monitoring
                  </Link>
                  <Link
                    href="/machine-condition-monitoring"
                    className="text-black text-[14px] transition-all duration-1000 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleIotSolutions)}
                  >
                    Condition Monitoring
                  </Link>
                  <Link
                    href="/oee-and-production-monitoring"
                    className="text-black text-[14px] transition-all duration-1000 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleIotSolutions)}
                  >
                    Productivity Monitoring
                  </Link>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={toggleServices}
                className="py-[18px] flex items-center justify-between w-full text-black font-normal text-base border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]"
              >
                Product Development{" "}
                <FaChevronDown
                  className={`ml-2 transform transition-all duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="flex flex-col mb-3">
                  <Link
                    href="/our-process"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleServices)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/services-overview"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleServices)}
                  >
                    Capabilities
                  </Link>
                  <Link
                    href="/our-works"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleServices)}
                  >
                    Projects
                  </Link>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={toggleProducts}
                className="py-[18px] flex items-center justify-between w-full text-black font-normal text-base border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]"
              >
                Products{" "}
                <FaChevronDown
                  className={`ml-2 transform transition-all duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="flex flex-col mb-3">
                  <Link
                    href="/"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleProducts)}
                  >
                    Edge Connect Series
                  </Link>
                  <Link
                    href="/"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleProducts)}
                  >
                    Field Connect Series
                  </Link>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={toggleAboutUs}
                className="py-[18px] flex items-center justify-between w-full text-black font-normal text-base border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]"
              >
                About Us{" "}
                <FaChevronDown
                  className={`ml-2 transform transition-all duration-300 ${
                    isAboutusOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutusOpen && (
                <div className="flex flex-col mb-3">
                  <Link
                    href="/about-us"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleAboutUs)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/our-team"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleAboutUs)}
                  >
                    Team
                  </Link>
                  <Link
                    href="/"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleAboutUs)}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={toggleMedia}
                className="py-[18px] flex items-center justify-between w-full text-black font-normal text-base border-t border-t-[#E5E5E5] px-[20px] focus:text-[#3563E9]"
              >
                Media{" "}
                <FaChevronDown
                  className={`ml-2 transform transition-all duration-300 ${
                    isMediaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMediaOpen && (
                <div className="flex flex-col mb-3">
                  <Link
                    href="/blogs"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleMedia)}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/"
                    className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                    onClick={() => handleCloseMobileMenu(toggleMedia)}
                  >
                    Press
                  </Link>
                </div>
              )}
            </li>
          </ul>
          <div className="px-[20px] lg:pt-10 md:pt-7 pt-6 pb-5 md:w-auto w-full">
            <Link
              className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[200px] xl:max-w-[153.5px] lg:max-w-[136.44px] md:max-w-[123px] 2xl:h-[60px] xl:h-[45px] md:h-[41px] h-[48px] flex justify-center items-center py-[2px] 2xl:text-[19px] xl:text-[14.25px] text-[16px] md:text-[12.67px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white md:max-w-auto max-w-full"
              href="/contact-us"
              onClick={() => toggleMenu()}
            >
              contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
