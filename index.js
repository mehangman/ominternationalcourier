<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OM International Courier Services</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .section {
            padding: 6rem 0;
        }
        @media (max-width: 768px) {
            .section {
                padding: 4rem 0;
            }
        }

        .delhi-focus {
            font-size: 1.25rem;
            font-weight: bold;
            color: #e65100;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        .logo-img {
            height: 40px;
            object-fit: contain;
            margin: 0 8px;
        }
        #partner-logos {
            background-color: #f3f4f6; /* Default background for the section */
        }
        .white-logo {
            background-color: white;
            padding: 5px;
            border-radius: 4px;
        }
        .black-logo {
            background-color: black;
            padding: 5px;
            border-radius: 4px;
        }
        .purple-logo{
            background-color: purple;
            padding: 5px;
            border-radius: 4px;
        }
        .tracking-section {
            background-color: #e0f7fa; /* Light cyan background */
            padding: 8rem 0;
            text-align: center;
        }
        @media (max-width: 768px) {
            .tracking-section {
                padding: 4rem 0;
            }
        }

        .tracking-form {
            display: inline-flex;
            align-items: center;
            padding: 0.5rem;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-top: 2rem;
            flex-wrap: nowrap;
            width: 100%; /* Make form full width on small screens */
            max-width: 600px; /* Limit max width of form */
            margin-left: auto;
            margin-right: auto;
        }

        @media (max-width: 768px) {
            .tracking-form {
                flex-direction: column;
                align-items: stretch;
                padding: 1rem;
                box-sizing: border-box;
            }
        }

        .tracking-form select {
            padding: 0.75rem;
            border: none;
            border-right: 1px solid #ccc;
            font-size: 1rem;
            border-radius: 0.5rem 0 0 0.5rem;
            flex: 1;
            min-width: 120px;
            appearance: none;  /* Remove default arrow */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); /* Add custom arrow */
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 1em;
        }
        @media (max-width: 768px) {
            .tracking-form select {
                border-right: none;
                border-bottom: 1px solid #ccc;
                border-radius: 0.5rem 0.5rem 0 0;
            }
        }

        .tracking-form input {
            padding: 0.75rem;
            border: none;
            font-size: 1rem;
            width: 100%;
            flex: 1;
        }

        @media (max-width: 768px) {
            .tracking-form input {
                border-radius: 0;
                box-sizing: border-box;
            }
        }
        .tracking-form button {
            padding: 0.75rem 1.5rem;
            background-color: #f59e0b; /* Yellow color */
            color: #1e293b;  /* Dark text color */
            border: none;
            border-radius: 0 0.5rem 0.5rem 0;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            white-space: nowrap;
        }

        @media (max-width: 768px) {
            .tracking-form button {
                border-radius: 0 0 0.5rem 0.5rem;
                width: 100%;
            }
        }

        .tracking-form button:hover {
            background-color: #d97706; /* Darker yellow on hover */
        }

        .partner-options {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
            gap: 1rem;
        }

        .partner-options img {
            height: 50px;
            object-fit: contain;
            cursor: pointer;
            transition: transform 0.2s ease;
            border-radius: 0.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            background-color: white;
        }

        .partner-options img:hover {
            transform: scale(1.1);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        }
        .service-card {
            background-color: #ffffff;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
            transform: translateY(-0.5rem);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        .service-card h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #1e293b;
        }

        .service-card p {
            font-size: 1rem;
            color: #4b5563;
            line-height: 1.75;
        }

        .service-icon {
            width: 4rem;
            height: 4rem;
            margin-bottom: 1.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f0f4f8;
            color: #6b7280;
        }

        .header-bg {
            background-color: #blue-600;
        }

        .header-text-color{
            color: #FFFFFF;
        }

        .nav-text-color {
            color: #FFFFFF;
        }

        .nav-text-hover:hover {
            color: #yellow-300;
        }

        /* Add responsive styles for the navigation */
        .nav-links {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: 0;
            height: 100%;
            width: 250px;
            background-color: #2563eb; /* Tailwind blue-700 */
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            z-index: 20;
            padding-top: 4rem;
            align-items: flex-start;
        }

        .nav-links.open {
            transform: translateX(0);
        }

        .nav-links li {
            margin-bottom: 1.5rem;
            margin-left: 1rem;
        }

        .nav-links li a {
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 500;
        }

        .nav-links li a:hover {
            color: #f59e0b; /* Tailwind yellow-400 */
        }

        #menu-button {
            display: none; /* Hide on larger screens */
            position: fixed;
            top: 1rem;
            right: 1rem;
            background-color: #f59e0b;
            color: #1e293b;
            padding: 0.5rem;
            border-radius: 0.375rem;
            cursor: pointer;
            z-index: 30;
        }

        @media (max-width: 768px) {
            #menu-button {
                display: block; /* Show on small screens */
            }
            .nav-links {
                align-items: center;
            }
        }
        .close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
    </style>
</head>
<body class="bg-gray-100">
    <header class="header-bg text-white py-4 flex justify-between items-center shadow-md sticky top-0 z-10 ">
        <div class="logo text-xl font-bold ml-4 flex items-center">
            <img src="https://via.placeholder.com/50" alt="OM International Logo" class="mr-2 rounded-full">
            <span class="text-yellow-400">OM</span> International
        </div>
        <nav class="mr-4">
            <ul class="nav-links" id="nav-links">
                <li class="close-button" id="close-menu-button">&times;</li>
                <li><a href="#services" class="nav-text-color nav-text-hover no-underline transition duration-300">Services</a></li>
                <li><a href="#rates" class="nav-text-color nav-text-hover no-underline transition duration-300">Rates</a></li>
                <li><a href="#contact" class="nav-text-color nav-text-hover no-underline transition duration-300">Contact</a></li>
                <li><a href="#track-shipment" class="nav-text-color nav-text-hover no-underline transition duration-300">Track</a></li>
                <li><a href="#partner-logos" class="nav-text-color nav-text-hover no-underline transition duration-300">Partners</a></li>
            </ul>
        </nav>
        <button id="menu-button" class="md:hidden">☰</button>
    </header>

    <section class="hero bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 text-center py-20 px-4 rounded-md flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold mb-6 text-blue-700">Your Trusted Courier Partner</h1>
        <p class="text-lg mb-8 text-gray-700 max-w-2xl">
            Reliable and efficient courier services for domestic and international shipments.  We ensure safe and timely delivery of your parcels.
        </p>
        <p class="text-md mb-6 text-gray-600">
            <span class="delhi-focus">Operating from New Delhi</span>, we provide dedicated courier solutions with a focus on customer satisfaction.
        </p>
        <button onclick="window.location.href='mailto:ominternationalcep@gmail.com?subject=Quotation Request&body=Dear OM International Team,%0d%0a%0d%0aI would like to request a quotation for courier services. Please find my company details below:%0d%0a%0d%0aCompany Name:%0d%0aCompany Address:%0d%0aContact Person:%0d%0aPhone Number:%0d%0aEmail Address:%0d%0a%0d%0aDetails of Shipment:%0d%0a%0d%0aLooking forward to hearing from you soon.%0d%0a%0d%0aSincerely,%0d%0a[Your Name]'" class="bg-yellow-500 hover:bg-yellow-600 text-blue-700 font-semibold rounded-full shadow-md py-3 px-6 transition duration-300 text-lg">
            Get a Quote
        </button>
    </section>

    <section id="services" class="section bg-gray-100 py-16 px-4 text-center rounded-md">
        <h2 class="text-2xl font-bold mb-8 text-blue-700">Our Services</h2>
        <div class="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div class="service-card">
                <div class="service-icon">
                    <img src="https://images.seeklogo.com/logo-png/48/2/food-delivery-symbol-logo-png_seeklogo-486549.png" alt="Domestic Delivery"
                         class=" rounded-md">
                </div>
                <h3>Domestic Courier Services</h3>
                <p>
                    Fast and reliable delivery across India. Handling parcels of all categories with efficiency.
                </p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <img src="https://cdn-icons-png.freepik.com/512/4003/4003701.png" alt="International Delivery"
                         class=" rounded-md">
                </div>
                <h3>International Courier Services</h3>
                <p>
                    Expedited and reliable international courier options for global reach.
                </p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <img src="https://static.vecteezy.com/system/resources/previews/004/331/629/non_2x/parcel-tracking-green-flat-design-long-shadow-glyph-icon-package-location-monitoring-order-status-postal-tracking-delivery-service-cardboard-box-with-map-pin-silhouette-illustration-vector.jpg" alt="Tracking" class=" rounded-md">
                </div>
                <h3>State-of-the-Art Tracking</h3>
                <p>
                    Real-time tracking facility for all consignments to maintain transparency.
                </p>

            </div>
            <div class="service-card">
                <div class="service-icon">
                    <img src="https://w7.pngwing.com/pngs/105/727/png-transparent-network-people-business-icon-social-friends-connection-networking-social-network-relationships.png" alt="Network"
                         class=" rounded-md">
                </div>
                <h3>Extensive Network</h3>
                <p>
                    Strong collaboration with franchises to maximize service coverage.
                </p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt95K_K41p7MD4rmCp9ho3QyOjNFN56YT5sQ&s" alt="Custom Solutions"
                         class=" rounded-md">
                </div>
                <h3>Customized Solutions</h3>
                <p>
                    Tailored offerings to cater to individual or business needs.
                </p>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/14367/14367953.png" alt="Franchise Adaptability"
                         class=" rounded-md">
                </div>
                <h3>Adaptability to Franchises</h3>
                <p>
                    Efficiently work in tandem with other franchises.
                </p>
            </div>
        </div>
    </section>

    <section id="rates" class="section bg-blue-100 py-16 px-4 text-center rounded-md">
        <h2 class="text-2xl font-bold mb-8 text-blue-700">Our Rates</h2>
        <p class="text-lg text-gray-700 mb-6">
            To get detailed information about our rates, please get in touch with us.
        </p>
        <p class="text-lg text-gray-700 mb-6">
            You can reach us by clicking the "Get a Quote" button or sending us an email with your requirements.
        </p>
        <button onclick="window.location.href='#contact'" class="bg-purple-500 text-white py-3 px-6 rounded-full hover:bg-purple-600 transition duration-300 font-semibold shadow-md">
            Request a Quote
        </button>
    </section>

    <section id="area" class="section bg-gray-100 py-16 px-4 text-center rounded-md">
        <h2 class="text-2xl font-bold mb-8 text-blue-700">Service Areas</h2>
        <p class="text-lg text-gray-700 mb-6">
            We operate primarily from New Delhi, with a strong network to serve a wide range of locations.
        </p>
        <div class="flex flex-wrap justify-center gap-6 mt-8">
            <div class="bg-white rounded-lg shadow-md p-4 text-center w-full sm:w-auto hover:shadow-lg transition-duration-300">
                <h3 class="font-semibold text-blue-600 mb-2">North India</h3>
                <ul style="text-align: left" class="list-disc list-inside text-gray-700">
                    <li>Delhi</li>
                    <li>NCR</li>
                    <li>Haryana</li>
                    <li>Punjab</li>
                    <li>Uttar Pradesh</li>
                    <li>Rajasthan</li>
                    <li>Himachal Pradesh</li>
                    <li>Jammu & Kashmir</li>
                </ul>
            </div>
            <div class="bg-white rounded-lg shadow-md p-4 text-center w-full sm:w-auto hover:shadow-lg transition-duration-300">
                <h3 class="font-semibold text-blue-600 mb-2">East India</h3>
                <ul style="text-align: left" class="list-disc list-inside text-gray-700">
                    <li>Bihar</li>
                    <li>Jharkhand</li>
                    <li>West Bengal</li>
                    <li>Odisha</li>
                    <li>North East States</li>
                </ul>
            </div>
            <div class="bg-white rounded-lg shadow-md p-4 text-center w-full sm:w-auto hover:shadow-lg transition-duration-300">
                <h3 class="font-semibold text-blue-600 mb-2">West India</h3>
                <ul style="text-align: left" class="list-disc list-inside text-gray-700">
                    <li>Maharashtra</li>
                    <li>Gujarat</li>
                    <li>Madhya Pradesh</li>
                    <li>Goa</li>
                </ul>
            </div>
            <div class="bg-white rounded-lg shadow-md p-4 text-center w-full sm:w-auto hover:shadow-lg transition-duration-300">
                <h3 class="font-semibold text-blue-600 mb-2">South India</h3>
                <ul style="text-align: left" class="list-disc list-inside text-gray-700">
                    <li>Karnataka</li>
                    <li>Tamil Nadu</li>
                    <li>Andhra Pradesh</li>
                    <li>Telangana</li>
                    <li>Kerala</li>
                </ul>
            </div>
        </div>
        <p class="mt-8 text-gray-600 text-lg">
            For international shipments and specific service areas, please <a href="#contact"
                                                                           class="text-blue-500 hover:text-blue-700 font-semibold no-underline">contact us</a> for detailed service
            availability and arrangements.
        </p>
    </section>

    <section id="contact" class="section bg-gradient-to-br from-purple-100 to-blue-100 py-16 px-4 text-center rounded-md">
        <h2 class="text-2xl font-bold mb-8 text-blue-700">Contact Us</h2>
        <div class="contact-info bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <p class="text-lg text-indigo-700 mb-4">
                <strong>Get a Quote / More Information</strong>
            </p>
            <p class="text-gray-700 mb-4">
                To request a quote or inquire about our services, please reach out to us via:
            </p>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div>
                    <strong>Phone:</strong>
                    <a href="tel:+919560264547" class="text-blue-500 hover:text-blue-700 no-underline">
                        +91 9560264547
                    </a>,
                    <a href="tel:+918766338468" class="text-blue-500 hover:text-blue-700 no-underline">
                        +91-8766338468
                    </a>
                </div>
            </div>
            <div class="flex justify-center items-center mt-4">
                <div>
                    <strong>Email:</strong>
                    <a href="mailto:ominternationalcep@gmail.com?subject=Quotation Request&body=Dear OM International Team,%0d%0a%0d%0aI would like to request a quotation for courier services. Please find my company details below:%0d%0a%0d%0aCompany Name:%0d%0aCompany Address:%0d%0aContact Person:%0d%0aPhone Number:%0d%0aEmail Address:%0d%0a%0d%0aDetails of Shipment:%0d%0a%0d%0aLooking forward to hearing from you soon.%0d%0a%0d%0aSincerely,%0d%0a[Your Name]"
                       class="text-blue-500 hover:text-blue-700 no-underline">
                        ominternationalcep@gmail.com
                    </a>
                </div>
            </div>
            <br />
            <p class="text-gray-700">
                Our team is ready to assist you with your courier needs. We are located at:
            </p>
            <p class="text-indigo-700 mt-4">
                253, A/6, 2nd Floor, Shahpur Jat, New Delhi-110049
            </p>
        </div>
    </section>

    <section id="track-shipment" class="tracking-section">
        <h2 class="text-2xl font-bold mb-4 text-blue-700">Track Your Shipment</h2>
        <p class="text-lg text-gray-700 mb-6">
            Select a courier partner and enter your tracking number to track your shipment.
        </p>

        <div class="tracking-form">
            <select id="courier-партner">
                <option value="dtdc">DTDC</option>
                <option value="tpc">Professional Couriers</option>
                <option value="bluedart">Blue Dart</option>
                <option value="delhivery">Delhivery</option>
                <option value="fedex">FedEx</option>
                <option value="aramex">Aramex</option>
            </select>
            <input type="text" id="tracking-number" placeholder="Enter your tracking number">
            <button onclick="trackShipment()">Track Your Shipment</button>
        </div>
    </section>

    <section id="partner-logos" class="section bg-gray-100 py-12 px-4 text-center ">
        <h2 class="text-2xl font-bold mb-8 text-blue-700">Our Partners</h2>
        <div class="flex flex-wrap justify-center space-x-4">
            <img class="logo-img white-logo" src="https://www.dtdc.in/img/logos/logo.png" alt="DTDC Logo" >
            <img class="logo-img" src="https://www.tpcindia.com/images/logo.png" alt="Professional Couriers Logo">
            <img class="logo-img" src="https://www.bluedart.com/image/layout_set_logo?img_id=1414225&t=1743950364083" alt="BlueDart Logo">
            <img class="logo-img black-logo" src="https://www.delhivery.com/_nuxt/img/Delhivery_logo.dcef706.png" alt="Delhivery Logo">
            <img class="logo-img purple-logo" src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" alt="FedEx Logo">
            <img class="logo-img" src="https://www.aramex.com/Sitefinity/WebsiteTemplates/aramex/App_Themes/aramex/Images/Aramex%20logo%20English.webp" alt="Aramex Logo">
        </div>
    </section>

    <footer class="bg-gray-800 text-white py-4 text-center ">
        <p>© 2025 OM International. All rights reserved.</p>
    </footer>

    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        function trackShipment() {
            const courier = document.getElementById("courier-партner").value;
            const trackingNumber = document.getElementById("tracking-number").value;
            let trackingUrl = "";

            switch (courier) {
                case "dtdc":
                    trackingUrl = "https://www.dtdc.in/tracking/tracking.asp";
                    break;
                case "tpc":
                    trackingUrl = "https://www.tpcindia.com/track-shipment.aspx";
                    break;
                case "bluedart":
                    trackingUrl = "https://www.bluedart.com/tracking";
                    break;
                case "delhivery":
                    trackingUrl = "https://www.delhivery.com/track";
                    break;
                case "fedex":
                    trackingUrl = "https://www.fedex.com/en-in/tracking.html";
                    break;
                case "aramex":
                    trackingUrl = "https://www.aramex.com/track/shipments";
                    break;
                default:
                    alert("Please select a courier partner.");
                    return;
            }

            if (trackingNumber) {
                trackingUrl += `?no=${trackingNumber}`; // Append tracking number.  May need adjustment for each site.
                window.open(trackingUrl, "_blank");
            } else {
                alert("Please enter your tracking number.");
            }
        }

        document.querySelectorAll('.partner-options img').forEach(img => {
            img.addEventListener('click', () => {
                const courier = img.dataset.courier;
                document.getElementById('courier-партner').value = courier;
            });
        });

        function handlePhoneClick(element) {
            const phoneNumber = element.textContent;
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const isAndroid = /android/i.test(navigator.userAgent);

            if (isIOS || isAndroid) {
                window.location.href = `tel:${phoneNumber}`;
            } else {
                const tempInput = document.createElement("input");
                tempInput.value = phoneNumber;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                alert(`Phone number ${phoneNumber} copied to clipboard!`);
            }
        }

        const menuButton = document.getElementById('menu-button');
        const navLinks = document.getElementById('nav-links');
        const closeMenuButton = document.getElementById('close-menu-button');
        const navLinksList = document.querySelectorAll('.nav-links li a');

        menuButton.addEventListener('click', () => {
            navLinks.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        closeMenuButton.addEventListener('click', () => {
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });

        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('open') && !navLinks.contains(event.target) && event.target !== menuButton) {
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    </script>
</body>
</html>
