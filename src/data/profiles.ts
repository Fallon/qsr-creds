const PROFILES = [
  {
    slug: "nikki_baker",
    name: "Nikki Baker",
    location: "msp",
    title: "CEO",
    image: "nikki_baker.jpg",
    description: "",
    bio: "Baker took the role after a decades-long career in advertising as a creative. Nikki brings her creative acumen to the role, including her recent leadership over the Walmart partnership, leading a five-agency team creating innovative campaigns such as the award-winning “RomCommerce” 23-episodic series and the internet-breaking Mean Girls campaign, among hundreds of other campaigns together with the brand over the past few years. As CEO, Baker’s leadership builds upon one of Fallon’s founding beliefs by delivering work that outsmarts vs. outspends the competition.",
    linkedin: "https://www.linkedin.com/in/nikkibakercreative"
  },
  {
    slug: "leslie_shaffer",
    name: "Leslie Shaffer",
    location: "msp",
    title: "CCO",
    image: "leslie_shaffer.jpg",
    description: "",
    bio: "As Chief Creative Officer of Fallon, Leslie is proudly in charge of all the weirdos. She’s also proud of Fallon’s focus on brand voice and that no two are the same. With a deliberate “no house style,” Fallon creates work for brands ranging from Walmart to Mattress Firm to Cuisinart to Disney. Leslie works with brands to unlock big creative ideas that connect with people and change their business. Her work has been recognized at Cannes, Clios, One Show, and Effie’s, but her favorite recognition comes in the form of texts from friends that read, “Did you do this?!?”",
    linkedin: "https://www.linkedin.com/in/lesliershaffer"
  },
  {
    slug: "james_fox",
    name: "James Fox",
    location: "nyc",
    title: "Chief Strategy Officer",
    image: "james_fox.jpg",
    description: "",
    bio: "James is an award-winning international strategist with experience across advertising, design, brand, media, and finance. He’s held Global CSO roles for major ad networks and served as the first Global Head of Brand Strategy for Goldman Sachs. His experience includes leading strategy at UM, the world's largest media agency, and serving as CEO of Red Peak, which he sold in 2016.\n\nJames has developed successful brand platforms for global clients, earning multiple accolades for effectiveness and innovation including pioneering AI and data integration. With degrees from LSE and University of Leeds, he’s a respected thought leader, published author, and international speaker shaping the future of marketing strategy.",
    linkedin: "https://www.linkedin.com/in/james-fox-0783411"
  },
  {
    slug: "lauren_pulwer",
    name: "Lauren Pulwer",
    location: "nyc",
    title: "Managing Director",
    image: "lauren_pulwer.jpg",
    description: "",
    bio: "As Managing Director, Lauren Pulwer is leading the day-to-day operations. Prior to joining Fallon in March 2025, Lauren spent the last 13+ years within Publicis Groupe, leading teams across L’Oréal and, more recently, Walmart. On the Walmart business, Lauren was the Managing Director, helping to lead the business across a five-agency creative team that consistently grew year over year while increasing the output of dozens of successful campaigns, spanning a Gilmore Girls reunion, Mean Girls reunion, a first-of-its-kind 23 episode RomCom series, and so much more. Prior to Publicis, Lauren spent time at Arnold New York, McCann, and Ogilvy working across brands like Avon, Verizon, Intel, Kohler, and more.",
    linkedin: "https://www.linkedin.com/in/james-fox-0783411"
  },
  {
    slug: "chris_campbell",
    name: "Chris Campbell",
    location: "msp",
    title: "Head of Accounts",
    image: "chris_campbell.webp",
    description: "",
    bio: "Chris has spent the last 20 years leading large-scale clients to outsized growth. He cut his teeth in advertising working on Porsche, launching the Cayenne and the Cayman, and running their American LeMans racing communications. From there, he launched the Love campaign for Subaru, which skyrocketed their growth. With his knowledge and passion for automotive, he then went to work with Ford Commercial, helped Chrysler bounce back after bankruptcy, and ran multiple streams of business for the Cadillac account.\n\nOver the last ten years, Chris has stewarded Arby’s account at Fallon. Through that, he’s learned the importance of transparency and knowing the client’s business as well as they do. Seen as a true partner, he’s helped bring everything from comms support to product and menu innovation. The acclaimed ‘We Have the Meats’ campaign grew Arby’s same store sales for 10 straight years driving AUVs from $800k to $1.45MM.\n\nChris and his work have been recognized for numerous industry awards, multiple Effies, Lions, and more. His parents are also very proud of him.\n\nChris collects hobbies. Recently, fly fishing, woodworking, basic home maintenance, small engine repair, and landscaping have been the focus. He has a nine-year-old daughter, a German Wirehaired Pointer, and a wife who is out of his league. They all mostly like him.",
    linkedin: "https://www.linkedin.com/in/campbellca/"
  },
  {
    slug: "erin_simle",
    name: "Erin Simle",
    location: "msp",
    title: "Head of Production",
    image: "erin_simle.webp",
    description: "",
    bio: "As Head of Production at Fallon, Erin Simle leads her production team with a respect for exceptional creativity and fierce efficiency. With over a decade of QSR and food-related work on her reel, she works to find ways to achieve the best-in-class craft and creativity matched with speed and efficiency for an evolving media landscape.\n\nAs a part of Publicis Productions and fueled by Production Intelligence, Erin and the production team are able to unlock value across all content needs. From content production origination through adaptation, localization and versioning. Bridging needs from creative craft, agile content fit for platform and personalized content at scale.",
    linkedin: "https://www.linkedin.com/in/erinsimle/"
  },
  {
    slug: "joe_johnson",
    name: "Joe Johnson",
    location: "msp",
    title: "Group Creative Director",
    image: "joe_johnson.webp",
    description: "",
    bio: "There are many Joe Johnsons in America. This Joe Johnson is a Group Creative Director at Fallon.\n\nOver the span of his career, Joe has been a visual designer, art director, and creative director, working on brands like Nike, Verizon, Intel, Walmart, and Mastercard before finding his way to Fallon. His years at Fallon have been spent crafting, launching, and leading campaigns for consumer packaged goods (International Delight, Silk, Woodford Reserve, Bertolli), financial products (H&R Block, Rocket Mortgage, TaxAct), and retail brands (Arby’s, Massage Envy).\n\nJohnson has steered the creative ship for Arby’s over the last 5 years. His work for Arby’s has been recognized via Cannes Lions, D&AD, Clios, AICP, Andy, ADDY, EFFIES, as well as being recognized by a ton of regular people who eat sandwiches and are not creative advertising awards judges.\n\nOutside of work, Joe likes to grill/smoke BBQ, maintain his DuoLingo streak, read old comic books, collect tattoos, and spend time with his family— wife, teen daughter, and cockapoo.",
    linkedin: "https://www.linkedin.com/in/hirejoejohnson/"
  },
  {
    slug: "payton_gallogly",
    name: "Payton Gallogly",
    location: "msp",
    title: "Senior Account Director",
    image: "payton_gallogly.webp",
    description: "",
    bio: "Payton is a Senior Account Director, who is fueled by solving business challenges through creative. Payton has spent her entire 12-year career at Fallon working across a wide category of brands, including ESPN, Children’s Defense Fund, Rocket Mortgage, Quicken Loans, International Delight, and most notably, Arby’s.\n\nPayton has spent the last 10 years (which also happens to be a third of her lifetime) leading the Arby’s machine. She thrives on the fast-paced nature of the QSR industry and loves to help uncover big ideas that break into culture in new ways. She has run more LTO campaigns than she can count, launched products the category has never seen before, and has had her hand in a number of award-winning cultural activations.\n\nTo make the most impact and drive business results it takes trust and partnership between client and agency. Payton prioritizes leading with honesty and humility, and through her tenured relationship with Arby’s, her and her team’s work has contributed to consistent sales growth, traffic to stores by younger and diverse guests, and reimagining loyalty in the modern fast-food landscape.\n\nOutside of work, Payton enjoys playing decent (at best) rounds of golf, traveling, and spending time with her black golden retriever, Scout.",
    linkedin: "https://www.linkedin.com/in/paytongallogly"
  },
  {
    slug: "emma_johnsen",
    name: "Emma Johnsen",
    location: "msp",
    title: "Strategy Director",
    image: "emma_johnsen.webp",
    description: "",
    bio: "Emma is a Strategy Director immersed in all corners of culture – IRL and URL. Emma’s great passion is the science & art of food – how people eat, how brains respond, how it shapes identities, and what trends are taking the culinary world by storm.\n\nAs a West Coaster who spent her 20s in New York and is now living in the Midwest, Emma deeply understands the U.S. varied food cultures. Her strategic POV is shaped by intensive research, time in the kitchen with culinary teams, interviewing food professionals like butchers and restaurateurs, and experimenting as a home chef. She’s applied her expertise to QSR with Arby’s, CPG with Nestle, Entenmann’s, and Sugar in the Raw, coffee with OXO, and spirits for the William Grant & Sons portfolio.\n\nDuring her three years as the lead strategist on Arby’s, Emma tackled every brief from brand campaigns and LTOs to value. Beyond the day-to-day, she ran proactive idea brainstorms, participated in menu innovation sessions, and ran cultural workshops for clients. In 2025, she and the Arby’s team were awarded an Effie for their “Free Sandwich Month” campaign for excellence in strategic and creative thinking.\n\nOutside of work, Emma is often playing the latest video game release, collecting VHS tapes, or walking to the Twin’s stadium to enjoy $5 baseball and a hot dog.",
    linkedin: "https://www.linkedin.com/in/pindellemma"
  },
  {
    slug: "ashley_kim",
    name: "Ashley Kim",
    location: "msp",
    title: "Senior Program Manager",
    image: "ashley_kim.webp",
    description: "",
    bio: "Ashley is a Senior Program Manager who combines creative problem solving with her knack for process and organization to navigate teams deftly through projects of all sizes and complexities. A challenge seeker and puzzle lover, Ashley chases the thrill of finding and creating order within chaos. As the lead PM on Arby’s since joining Fallon just over a year ago, she has successfully operationalized the team to be more nimble and efficient in order to deliver quality national integrated campaigns and cultural activations at the speed of retail.\n\nAshley’s biggest joy in life—and the main way she explores new cultures and stays connected to her own—is eating good food. Naturally, her favorite brands she’s worked on previously have been the likes of General Mills, King Arthur Baking Company, CLIF Bar and Company, and Sociable Cider Werks, though her experience spans a wide variety of industries including sports, hospitality, agriculture, and finance.\n\nIn her spare time, Ashley loves exploring new restaurants and coffee shops, watching mukbang videos, making latte art, looting treasure chests in video games, and hanging out with her corgi.",
    linkedin: "https://www.linkedin.com/in/ashleyakim/"
  },
  {
    slug: "mara_keller",
    name: "Mara Keller",
    location: "msp",
    title: "Group Social Director",
    image: "mara_keller.webp",
    description: "",
    bio: "Mara is a Group Social Director, with over a decade of experience uniting brands and internet culture. Mara has spent most of that decade at Fallon, working across categories including spirits, hospitality, entertainment, and QSR.\n\nHer expertise has created break-through moments for brands like Arby’s, Paramount+, and SHOWTIME. She’s helped Arby’s trend on TikTok and fostered fandoms for series like Shameless, Yellowjackets, and Dexter. Her work has helped drive the success of Arby’s brand activations over the last five years, consistently earning national media coverage and even recognition from Cannes.\n\nOutside of work, Mara is living out her unrealized dreams of being a competitive figure skater, working in her garden, and planning her next hiking trip.",
    linkedin: "https://www.linkedin.com/in/marakeller/"
  },
  {
    slug: "cassie_dkae_lendway",
    name: "Cassie D’kae Lendway",
    location: "msp",
    title: "Senior Account Director",
    image: "cassie_dkae_lendway.webp",
    description: "",
    bio: "In Cassie's 15 year career she's straddled the line between public relations and advertising, leading team's to create culture-centric work for a variety of food & beverage brands. She got her start building award-winning experiential campaigns for Caribou Coffee during the height of the chain's national expansion efforts as a publicly traded company, as well as launching social channels and content strategies for Land O' Lakes.\n\nMore recently, Cassie has spearheaded creative activations for Heineken, in addition to establishing a foundational influencer program for the Dutch-based brewer. She's also executed integrated campaigns for CPG brands like Cheez-It, Truvia, Arla Foods & Edwards Desserts.\n\nWhile at American Dairy Queen, Cassie led the company's publicity driving initiatives, generating record earned coverage and consumer engagements for the QSR. Whether in-house or agency-side, Cassie believes that fluid collaboration and transparency drive the strongest results and most fulfilling partnerships.\n\nCassie lives in Minneapolis with her husband, son and two dogs. In her spare time, she's typically wanderlusting (her baby got his first passport stamp at three months old!), exploring her local food and coffee scene or obsessing over interior design.",
    linkedin: "https://www.linkedin.com/in/cassiedkae/"
  },
  {
    slug: "melanie_castell",
    name: "Melanie Castell",
    location: "nyc",
    title: "Account Director",
    image: "melanie_castell.webp",
    description: "",
    bio: "Melanie Castell is an Account Director with extensive experience leading brand work across a broad range of categories, from CPG to QSR. She joined Fallon in 2021, where most recently she spent two years leading work on Arby’s, overseeing high-impact 360° campaigns across TV, digital, social, and experiential activations. Her efforts helped strengthen the brand’s connection with diverse audiences through culturally relevant and strategically crafted campaigns.\n\nBeyond Arby’s, Melanie has led integrated campaign development for KeyBank and steered award-winning creative and product initiatives for Frontdoor, a digital home services platform. Prior to Fallon, she drove global campaigns for major brands including Unilever, Schick, Purex, and Diageo.\n\nKnown for her collaborative spirit and trusted counsel, Melanie thrives on building strong, enduring relationships with client partners and team members. Her leadership is grounded in transparency, empathy, and a shared passion for creating work that truly connects.\n\nWhen she’s not building brand connections, this New York native is likely mapping out her next travel adventure.",
    linkedin: "https://www.linkedin.com/in/melanie-castell"
  },
  {
    slug: "carlos_savage",
    name: "Carlos Savage",
    location: "msp",
    title: "Associate Creative Director",
    image: "carlos_savage.webp",
    description: "",
    bio: "Carlos Savage grew up in adland, landing his first job as a writer in New Zealand at 19 years old.\n\nIn almost 20 years since, he’s worked at some of the best agencies in New Zealand, Australia, and for the past 10 years the USA, where his campaigns have been recognized globally at every major industry awards show. Throughout his career he has been deeply immersed in little brands like Burger King, McDonald’s, Chipotle, Domino’s and most recently Arby’s. All of which today are now some of the world’s largest, most successful and most profitable QSR brands in the world. Coincidence? You decide.",
    linkedin: "https://www.linkedin.com/in/savagecarlos"
  },
  {
    slug: "steve_torres",
    name: "Steve Torres",
    location: "nyc",
    title: "Art Director",
    image: "steve_torres.webp",
    description: "",
    bio: "Steve is an Art Director with more than a decade of experience on brands from AT&T to Rolex to Raising Cane’s. He has been with Fallon for 4 years now, working with his partner Neil to create award-winning campaigns and activations for Arby’s and a variety of clients.\n\nOriginally from Indiana, Steve’s love of food came from his nostalgia for the great chain restaurants of America. But now in New York, he’s always on the lookout to try new restaurants. When it comes to food creative, Steve’s art direction stems from his own appetite — his goal is always to make himself hungry for the food on his screen, and often succeeds!\n\nWhen he’s not coming up with ideas for work or thinking about his next meal, Steve makes a mean cappuccino and spends his evenings moonlighting as a competitive ballroom dancer.",
    linkedin: "https://www.linkedin.com/in/steve-torres-33a70b30"
  },
  {
    slug: "neil_lopez",
    name: "Neil Lopez",
    location: "nyc",
    title: "Copywriter",
    image: "neil_lopez.webp",
    description: "",
    bio: "For 10+ years Neil has worked across agencies big, small, and fun-sized (Fallon). In that time, he has developed campaigns for such brands as Arby’s, Walmart, AT&T, Listerine, Raising Cane’s, Rolex, NBA, National Geographic, 7-Eleven, and YouTube. Neil is all about telling brand stories with distinct voices that people will actually care about, all while having fun doing it. Along the way, Neil has won shiny awards and influenced bottom-line business growth, sometimes at the same time.\n\nIn Neil’s time with Arby’s he has made other brands desperately jealous. Highlights include: ideating new menu items, revealing the brand voice Ving Rhames to the masses, making Anthony Anderson and Cedric Entertainer make fun of each other at a BBQ, and paying college running backs to just say, “I’m going to Arby’s tonight.”\n\nOutside the office, Neil obsessively follows food and restaurant culture like some people follow fantasy basketball teams (which he is also guilty of), and cooks homemade Filipino and Korean meals that can be delivered to New Yorkers via the app Shef. He’s also a dad to a bossy lil 1 year old, and honestly, that is his real job.",
    linkedin: "https://www.linkedin.com/in/neillopez"
  },
  {
    slug: "adam_chorney",
    name: "Adam Chorney",
    location: "msp",
    title: "Group Strategy Director",
    image: "adam_chorney.webp",
    description: "",
    bio: "Adam Chorney has been in Minneapolis working as a strategist at Fallon for the past 20 years. He  moved here to learn from the agency’s pioneering connection planning department, where he spent 6 years primarily leading the NBC Universal media account, and eventually rising to become Director of Connection Planning. In recent years Adam has been more of an all-purpose strategist, leading brand strategy for many of our biggest clients, including Cadillac, H&R Block, and Arby’s. He’s also developed a bit of a specialty in food brands of late, working across the Jack Link’s portfolio of meat snacks brands, the Mizkan portfolio of sauce brands (particularly Bertolli pasta sauce), and Cuisinart’s lineup of kitchen appliances.\n\nAdam’s team’s work has regularly been recognized for creativity and effectiveness at the EFFIES, Cannes Lions, Creative Media Awards, and Jay Chiat Strategy Awards.\n\nPrior to Fallon, Chorney was in New York at The Media Kitchen, where he worked on creative media strategies for brands like Sci Fi Channel and Delta’s Song Airlines.\n\nOn the home front, Adam, his wife Jessica, and their suddenly teenaged daughter Lucinda are living the Minneapolis transplant’s dream with an old house on a creek in the heart of the city.",
    linkedin: "https://www.linkedin.com/in/adamchorney"
  },
  {
    slug: "julia_frayne",
    name: "Julia Frayne",
    location: "msp",
    title: "Account Director",
    image: "julia_frayne.webp",
    description: "",
    bio: "Julia is an Account Director who has been at Fallon for almost 8 years. She got her start in advertising working on several CPG brands from the Danone portfolio including Silk and International Delight, as well as Massage Envy. From there she transitioned into the world of QSR working on Arby’s ample experience leading National Campaigns, LTO’s and award winning activations. She also helped bring to life the world’s first ever shoppable movie for Walmart’s holiday campaign, paving the way for how companies tackle the future of social commerce.\n\nShe thrives on working hip to hip with strategy, production and creative teams to bring smart, breakthrough work to life in new and interesting ways. Julia leads with positivity and builds strong, trusting relationships with all of her clients and agency partners.\n\nWhen not working, Julia loves to travel the world, 43 countries and counting. If you have a trip planned, she has a spreadsheet of recommendations to share with you. When not traveling, she calls Minneapolis home with her three chickens.",
    linkedin: "https://www.linkedin.com/in/julia-frayne-8aba7668/"
  },
  {
    slug: "brandon_fields",
    name: "Brandon Fields",
    location: "nyc",
    title: "Account Supervisor",
    image: "brandon_fields.webp",
    description: "",
    bio: "Brandon Fields is an Account Supervisor and a native of New York City, having been with Fallon for just over a year. He is passionate about fostering strong relationships and creating collaborative environments to produce the best work possible. No stranger to Publicis Groupe, Brandon began his career at Sapient Razorfish, where he worked on CPG and tech brands, including Church and Dwight and Samsung.\n\nPrior to joining Fallon, Brandon spent three years at Wieden & Kennedy, managing vehicle reveals and launches for iconic nameplates such as Mustang, F-150, Bronco, and their SUV lineup.\n\nAt Fallon, Brandon hit the ground running. He has led national campaigns, limited-time offers, and activations for the Arby’s brand, enjoying every moment. His most recent project was the Arby’s AC Barbecue campaign, where he collaborated with well-known comedians and actors Anthony Anderson and Cedric the Entertainer. This campaign featured their signature BBQ sauces paired with Arby’s 1/4lb pulled pork and 1/4lb brisket sandwiches. Brandon thrives on collaboration and works closely with strategy, creative, and production teams to make the impossible possible.\n\nBrandon enjoys watching a good show in his free time, traveling solo, and exploring new culinary experiences.",
    linkedin: "https://www.linkedin.com/in/bfields630"
  },
];

export default PROFILES;