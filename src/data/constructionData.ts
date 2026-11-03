import { ServiceItem, ProjectItem, TestimonialItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: 'SkyBuild',
  legalName: 'SkyBuild Construction & Engineering Ltd.',
  tagline: 'Building With Purpose. Built to Last.',
  establishedYear: '2014',
  phone: '+234 802 555 0192',
  phoneAlt: '+234 818 555 0194',
  email: 'info@skybuild.com',
  quoteEmail: 'quotes@skybuild.com',
  address: 'Plot 14B Commercial Boulevard, Victoria Island, Lagos',
  officeHours: 'Monday – Friday: 8:00 AM – 5:30 PM | Saturday: 9:00 AM – 1:00 PM',
  stats: {
    experienceYears: '10+',
    projectsCompleted: '150+',
    skilledProfessionals: '50+',
    safetyRecord: '100% On-Site Compliance',
    squareMetersBuilt: '850,000+ m²',
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'building-construction',
    number: '01',
    title: 'Building Construction',
    shortDesc: 'Residential and commercial construction from foundation through completion.',
    fullDesc: 'We undertake complete general building construction from site grading and earthworks through structural framing, mechanical/electrical installations, and architectural finishing. Every build is executed in adherence to international building codes, precision engineering tolerances, and agreed delivery schedules.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Multi-story commercial office developments',
      'Luxury residential estates and private homes',
      'Turnkey general contracting',
      'Strict quality assurance and structural validation'
    ],
    deliverables: [
      'Substructure and foundation engineering',
      'Reinforced concrete and superstructure framing',
      'MEP (Mechanical, Electrical, Plumbing) integration',
      'Interior finishing and handover certification'
    ]
  },
  {
    id: 'civil-engineering',
    number: '02',
    title: 'Civil Engineering',
    shortDesc: 'Civil works including drainage, foundations, site development and infrastructure.',
    fullDesc: 'Our civil engineering team manages complex geotechnical challenges, earth retention systems, deep pile foundations, municipal drainage schemes, and comprehensive land reclamation projects. We ensure your site infrastructure provides an unyielding bedrock for decades to come.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Deep foundation piling and underpinning',
      'Earthworks, grading and slope stabilization',
      'Municipal storm drainage and flood control',
      'Subsurface utility installation and culverts'
    ],
    deliverables: [
      'Topographic surveying and geotechnical evaluation',
      'Engineered retaining walls and shoring systems',
      'Comprehensive stormwater management networks',
      'Structural integrity testing and load certification'
    ]
  },
  {
    id: 'renovation-remodeling',
    number: '03',
    title: 'Renovation & Remodeling',
    shortDesc: 'Renovation and transformation of existing residential and commercial spaces.',
    fullDesc: 'Revitalize aging buildings with structural remediation, space reconfiguration, modernization of building services, and high-specification architectural redesigns. We specialize in working within occupied or active environments with minimal operational disruption.',
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Commercial corporate headquarters retrofit',
      'Residential spatial remodeling and additions',
      'Structural stabilization and facade rejuvenation',
      'Energy efficiency and HVAC modernizations'
    ],
    deliverables: [
      'Structural survey and load-bearing alterations',
      'Modern open-plan space planning and finishes',
      'Complete replacement of aged plumbing & electrical conduits',
      'Acoustic insulation and environmental upgrades'
    ]
  },
  {
    id: 'structural-works',
    number: '04',
    title: 'Structural Works',
    shortDesc: 'Concrete works, foundations, structural frames, reinforcement and other structural construction.',
    fullDesc: 'Structural integrity is the core of safe construction. We execute heavy reinforced concrete elements, pre-stressed casting, structural steel fabrication, shear walls, and seismic bracing designed by licensed structural engineers.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Cast-in-place and precast reinforced concrete',
      'Heavy structural steel frame erection',
      'Post-tensioned slabs and transfer beams',
      'Rigorous concrete cube batch testing'
    ],
    deliverables: [
      'Certified rebar scheduling and placement',
      'Engineered formwork design and falsework assembly',
      'Ultrasonic weld testing and torque verification',
      'Permanent structural load certification'
    ]
  },
  {
    id: 'roofing-exterior',
    number: '05',
    title: 'Roofing & Exterior Works',
    shortDesc: 'Roof installation, replacement, exterior finishing and related building works.',
    fullDesc: 'Protect your building envelope against extreme weather with engineered roofing systems, weather-resistant cladding, curtain wall glazing, and durable thermal insulation. Our team handles both flat commercial membrane roofs and complex pitched residential structures.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Long-span industrial metal sheet roofing',
      'Architectural standing seam and tiled roofs',
      'Composite panel rainscreen facades',
      'Waterproofing membranes and insulation systems'
    ],
    deliverables: [
      'Heavy gauge steel truss and timber structural framing',
      'Multi-layer bituminous and elastomeric waterproofing',
      'Engineered perimeter parapet capping and flashing',
      '15-year weather-tightness system warranty'
    ]
  },
  {
    id: 'road-drainage',
    number: '06',
    title: 'Road & Drainage Construction',
    shortDesc: 'Road construction, paving, drainage systems and other infrastructure works.',
    fullDesc: 'From estate access roads and commercial transit lanes to municipal arterial highways, SkyBuild constructs durable asphalt and rigid concrete pavements integrated with hydraulic storm drainage systems designed to handle high precipitation.',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Flexible asphalt and rigid reinforced concrete pavements',
      'Interlocking heavy-duty industrial paving blocks',
      'Precast open and covered drainage canals',
      'Curbing, pedestrian walkways, and traffic markings'
    ],
    deliverables: [
      'Sub-base stabilization and compaction testing (CBR)',
      'Asphalt concrete binder and wearing course laying',
      'Monolithic culverts and discharge catchpits',
      'Traffic lane demarcations and reflective signage'
    ]
  },
  {
    id: 'project-management',
    number: '07',
    title: 'Project Management',
    shortDesc: 'Planning, coordination, supervision, scheduling and quality control.',
    fullDesc: 'Keep your capital expenditure on track with disciplined construction management. We oversee procurement, contractor coordination, critical path scheduling (CPM), on-site health and safety (HSE), cost accounting, and regulatory approvals.',
    iconName: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    features: [
      'End-to-end critical path method (CPM) scheduling',
      'Vendor procurement and material logistics control',
      'Regulatory statutory approvals and inspections',
      'Bi-weekly transparent client milestone reporting'
    ],
    deliverables: [
      'Detailed master construction program and milestones',
      'Bill of Quantities (BOQ) reconciliation and cost tracking',
      'Daily site logs, quality checklists, and safety audits',
      'Punch list resolution and commissioning sign-off'
    ]
  },
  {
    id: 'property-maintenance',
    number: '08',
    title: 'Property Maintenance',
    shortDesc: 'Repairs, maintenance and improvement of existing buildings and facilities.',
    fullDesc: 'Protect your asset value and operational continuity through planned preventative maintenance and emergency structural repair programs. We service commercial real estate portfolios, residential residential complexes, and industrial assets.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Planned preventative maintenance schedules (PPM)',
      'Structural defect repair, crack injection and remediation',
      'Waterproofing renewals and damp treatment',
      'Mechanical and electrical infrastructure service'
    ],
    deliverables: [
      'Asset condition survey and lifecycle reporting',
      'Rapid response repair protocol for critical incidents',
      'Scheduled HVAC, generator, and pumping station service',
      'Tenant fit-out remediation and turnover works'
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'skyview-residential-estate',
    slug: 'skyview-residential-estate',
    title: 'SkyView Residential Estate',
    category: 'Residential',
    location: 'Coastal Ridge, Lekki Peninsula',
    client: 'Skyline Urban Properties Ltd.',
    year: '2024',
    duration: '22 Months',
    scope: 'Full Turnkey Construction of 36 Modern Luxury Townhomes & Community Center',
    budgetRange: 'Enterprise Private Development',
    description: 'A flagship master-planned residential community featuring 36 high-specification four-bedroom townhouses, an integrated clubhouse, recreation court, underground drainage infrastructure, and private access roads. Built on reclaimed coastal terrain using engineered pile foundations and cast-in-place shear reinforcement.',
    challengeSolution: {
      challenge: 'High water table and unstable alluvial sub-surface soil requiring robust moisture barrier defense and deep pile stability.',
      solution: 'Implemented 18-meter precast concrete driven piles connected by continuous grade beams with elastomeric tanking waterproofing membranes across all basements and ground slabs.'
    },
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    ],
    completedWork: [
      'Excavation and driven pile foundation installation (320 piles)',
      'Superstructure reinforced concrete frame for 36 residential units',
      'Acoustic partition walls and thermal cavity masonry',
      'Internal luxury finishes, custom cabinetry, and sanitaries',
      'Underground power cabling and dedicated transformer substation',
      'Interlocking paver access road network with central drainage culverts'
    ],
    keySpecs: [
      { label: 'Built Area', value: '14,200 m²' },
      { label: 'Residential Units', value: '36 Units' },
      { label: 'Piles Driven', value: '320 Piles' },
      { label: 'Completion Status', value: 'Delivered On Schedule' }
    ]
  },
  {
    id: 'central-business-complex',
    slug: 'central-business-complex',
    title: 'Central Business Complex',
    category: 'Commercial',
    location: 'Central Financial District, Lagos',
    client: 'Apex Capital Holdings',
    year: '2023',
    duration: '26 Months',
    scope: '14-Story Commercial Office Tower with 3-Level Subterranean Parking',
    budgetRange: 'Major Commercial Development',
    description: 'A 14-story Grade-A commercial office tower featuring a high-performance curtain wall glass envelope, double-height corporate atrium, intelligent building management system (BMS), and 3 levels of subterranean basement parking. Designed with post-tensioned concrete slabs to deliver expansive, column-free office floor plates.',
    challengeSolution: {
      challenge: 'Tight urban footprint bordered by active commercial banks and congested arterial traffic, leaving zero room for conventional material staging.',
      solution: 'Employed just-in-time (JIT) night delivery schedules, tower crane logistics optimization, and perimeter secant pile shoring walls with ground anchors.'
    },
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    ],
    completedWork: [
      'Perimeter secant pile shoring wall and 11-meter basement excavation',
      '14-story core reinforced concrete shear wall and post-tensioned slabs',
      'Unitized double-glazed low-E thermal curtain wall system',
      'Installation of 4 high-speed destination-dispatch elevators',
      'Complete VRF HVAC system and integrated fire sprinkler matrix',
      'LEED-compliant energy metering and electrical distribution'
    ],
    keySpecs: [
      { label: 'Gross Floor Area', value: '28,500 m²' },
      { label: 'Stories', value: '14 Above Ground + 3 Basement' },
      { label: 'Parking Capacity', value: '240 Vehicles' },
      { label: 'Safety Incidents', value: 'Zero Lost-Time Incidents' }
    ]
  },
  {
    id: 'riverside-apartments',
    slug: 'riverside-apartments',
    title: 'Riverside Apartments',
    category: 'Residential',
    location: 'Waterfront Boulevard, Ikoyi',
    client: 'Riverbank Estates Consortium',
    year: '2023',
    duration: '18 Months',
    scope: '6-Story Waterfront Condominium (24 Premium Luxury Apartments)',
    budgetRange: 'High-End Residential',
    description: 'A contemporary luxury waterfront condominium overlooking the coastal marina. Features floor-to-ceiling glass balconies, infinity swimming pool deck, deep cantilevered concrete overhangs, and marine-grade anti-corrosive external finishes.',
    challengeSolution: {
      challenge: 'High salinity marine environment causing rapid corrosion risk to rebar and exterior steel fixtures.',
      solution: 'Utilized epoxy-coated reinforcing rebar, silica fume concrete admixtures for low chloride permeability, and 316-marine grade stainless steel external fittings.'
    },
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80'
    ],
    completedWork: [
      'Marine sheet piling and waterfront embankment stabilization',
      'Six-story monolithic reinforced concrete structure',
      'Full exterior anti-saline silicone-modified rendering',
      'Perimeter infinity pool structural engineering and waterproof liner',
      'Custom acoustic insulation between private residences'
    ],
    keySpecs: [
      { label: 'Apartments', value: '24 Luxury Units' },
      { label: 'Floor Space', value: '8,900 m²' },
      { label: 'Structural Warranty', value: '25 Years' },
      { label: 'Handover', value: '100% Client Acceptance' }
    ]
  },
  {
    id: 'eastside-road-project',
    slug: 'eastside-road-project',
    title: 'Eastside Road Project',
    category: 'Infrastructure',
    location: 'East Industrial Transit Corridor',
    client: 'Municipal Development Authority',
    year: '2024',
    duration: '14 Months',
    scope: '4.8 km Dual-Carriageway Highway with Reinforced Stormwater Canals',
    budgetRange: 'Public-Private Infrastructure',
    description: 'Construction of a critical 4.8 km dual-carriageway arterial roadway engineered to withstand continuous heavy industrial freight traffic. Work included heavy earthwork, soil stabilization, asphaltic concrete wearing course, and 9.6 km of continuous cast-in-place concrete stormwater drainage channels.',
    challengeSolution: {
      challenge: 'Severe seasonal monsoons and expansive clay subgrade susceptible to catastrophic waterlogging and pavement cracking.',
      solution: 'Applied lime-cement soil stabilization, installed geotextile separation membranes, and constructed deep hydraulic trapezoidal drainage canals alongside the entire carriageway.'
    },
    heroImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80'
    ],
    completedWork: [
      'Clearing, grubbing, and 85,000 m³ of subgrade earth movement',
      'Cement-stabilized crushed stone base course (200 mm)',
      'Heavy-duty asphalt binder course (60 mm) and wearing course (40 mm)',
      '9,600 meters of reinforced concrete drainage canals and box culverts',
      'Installation of solar LED street lights and durable thermoplastic road markers'
    ],
    keySpecs: [
      { label: 'Length', value: '4.8 Kilometers' },
      { label: 'Drainage Channels', value: '9,600 Linear Meters' },
      { label: 'Pavement Design Life', value: '20 Years' },
      { label: 'CBR Rating', value: '> 80% After Stabilization' }
    ]
  },
  {
    id: 'modern-office-renovation',
    slug: 'modern-office-renovation',
    title: 'Modern Office Renovation',
    category: 'Renovation',
    location: 'Commerce Park, Victoria Island',
    client: 'FinTech Innovations Group',
    year: '2023',
    duration: '6 Months',
    scope: 'Complete Re-engineering & Interior Renovation of 4-Storey Corporate HQ',
    budgetRange: 'Corporate Interior & Structural Renovation',
    description: 'Transforming an outdated 1990s brick-and-mortar commercial banking office into a modern, energy-efficient corporate campus. Project encompassed partial structural demolition, mezzanine steel deck creation, acoustic ceiling upgrades, and comprehensive re-cabling of power, data, and HVAC.',
    challengeSolution: {
      challenge: 'Accelerated 6-month deadline with strict requirements to remove interior load-bearing walls without compromising the aging structure.',
      solution: 'Installed temporary hydraulic jacks, erected steel Universal Columns and Beams (UC/UB), and maintained non-destructive structural deflection telemetry throughout demolition.'
    },
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80'
    ],
    completedWork: [
      'Controlled internal demolition and waste sorting/recycling',
      'Structural steel beam transfer installation',
      'Complete MEP strip-out and modern energy-efficient ducting',
      'Acoustic glass partitions and architectural wood paneling',
      'Smart lighting controls and biometric access integration'
    ],
    keySpecs: [
      { label: 'Renovated Area', value: '4,200 m²' },
      { label: 'Energy Savings', value: '38% Reduction in Power' },
      { label: 'Timeframe', value: 'Completed 2 Weeks Early' },
      { label: 'Workstations', value: '280 Ergonomic Desks' }
    ]
  },
  {
    id: 'industrial-warehouse-facility',
    slug: 'industrial-warehouse-facility',
    title: 'Industrial Warehouse Facility',
    category: 'Industrial',
    location: 'Gateway Free Trade Logistics Park',
    client: 'Trans-Continental Freight & Logistics',
    year: '2024',
    duration: '11 Months',
    scope: 'Turnkey Construction of 18,000 m² High-Bay Logistics Distribution Hub',
    budgetRange: 'Heavy Industrial Facility',
    description: 'A purpose-built modern logistics and distribution hub featuring a 14-meter clear-span portal frame steel structure, super-flat laser-screeded concrete flooring (FM2 tolerance), 16 automated loading docks, and integrated administration offices.',
    challengeSolution: {
      challenge: 'Extremely demanding industrial floor flatness required for autonomous robotic forklifts and high-reach wire-guided stackers.',
      solution: 'Used Somero laser screed technology with continuous fiber-reinforced concrete casting in single daily pours of 1,200 m² with laser-level dry-shake hardener.'
    },
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80'
    ],
    completedWork: [
      'Ground improvement and dynamic deep compaction',
      'Fabrication and crane erection of 650 tons of structural steelwork',
      'Precision laser-screed FM2 post-tensioned concrete warehouse slab',
      '16 hydraulic dock levelers and rapid industrial roller shutters',
      'ESFR early-suppression fast-response fire sprinkler infrastructure'
    ],
    keySpecs: [
      { label: 'Enclosed Footprint', value: '18,000 m²' },
      { label: 'Clear Internal Height', value: '14.0 Meters' },
      { label: 'Loading Docks', value: '16 Hydraulic Bays' },
      { label: 'Floor Load Capacity', value: '80 kN/m²' }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation',
    description: "Understand the client's requirements, budget and project objectives.",
    details: [
      'Initial site assessment and topographic walkthrough',
      'Client functional brief and spatial requirement analysis',
      'Feasibility evaluation and preliminary budget alignment',
      'Regulatory zoning and environmental considerations review'
    ]
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Develop the project scope, schedule, design requirements and estimated costs.',
    details: [
      'Architectural and structural engineering design validation',
      'Comprehensive Bill of Quantities (BOQ) preparation',
      'Critical Path Method (CPM) baseline schedule generation',
      'Statutory development permits and compliance filings'
    ]
  },
  {
    step: '03',
    title: 'Preparation',
    description: 'Prepare materials, workforce, equipment and construction site.',
    details: [
      'Site perimeter hoarding, security, and temporary utilities',
      'Procurement contracts and vendor supply chain reservation',
      'Heavy machinery mobilization and crane positioning',
      'Site-specific Health, Safety & Environment (HSE) briefings'
    ]
  },
  {
    step: '04',
    title: 'Construction',
    description: 'Execute the work while monitoring quality, safety and progress.',
    details: [
      'Execution of substructure, framing, masonry, and envelope',
      'Daily site supervision by licensed resident civil engineers',
      'Continuous batch testing of concrete, rebar, and materials',
      'Bi-weekly transparent client progress reports with drone imagery'
    ]
  },
  {
    step: '05',
    title: 'Completion',
    description: 'Inspect the completed work, address final requirements and hand over the project.',
    details: [
      'Comprehensive internal quality punch-list verification',
      'Building services commissioning (MEP, HVAC, fire systems)',
      'Statutory occupancy certification and local authority sign-offs',
      'Complete as-built drawings, maintenance manuals, and warranties handover'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'experienced-team',
    title: 'Experienced Team',
    description: 'Skilled professionals with experience across different construction projects.',
    longText: 'Our registered civil engineers, structural specialists, project managers, and certified tradespeople bring decades of combined technical leadership to every site.',
    iconName: 'Users'
  },
  {
    id: 'quality-work',
    title: 'Quality Work',
    description: 'Careful attention to materials, workmanship and project specifications.',
    longText: 'We maintain rigorous QA/QC inspection protocols, sourcing high-grade certified materials and enforcing tight engineering tolerances throughout all build stages.',
    iconName: 'Award'
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    description: 'Construction activities are carried out with safety and responsible site practices in mind.',
    longText: 'Zero-harm HSE safety policies, daily site briefings, mandatory PPE enforcement, and continuous hazard mitigation ensure our sites operate safely every day.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'reliable-delivery',
    title: 'Reliable Delivery',
    description: 'Projects are properly planned and monitored to maintain agreed schedules and standards.',
    longText: 'Our structured scheduling methodologies, proactive logistics planning, and transparent milestone tracking guarantee predictable timelines without cost surprises.',
    iconName: 'Clock'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Engr. Babatunde Adeleke',
    role: 'Managing Director',
    company: 'Skyline Urban Properties Ltd.',
    project: 'SkyView Residential Estate',
    rating: 5,
    content: 'SkyBuild handled our 36-unit residential estate with remarkable precision. Their engineering team solved intricate alluvial foundation challenges without compromising our target handover date. The structural finish is top-tier.',
    date: 'March 2024'
  },
  {
    id: '2',
    name: 'Victoria Chinedu',
    role: 'Head of Facilities & Infrastructure',
    company: 'Apex Capital Holdings',
    project: 'Central Business Complex',
    rating: 5,
    content: 'Working with SkyBuild on our 14-story commercial office tower was an exercise in professionalism. They managed logistics in a congested district flawlessly, and completed the structural frame with zero lost-time safety incidents.',
    date: 'November 2023'
  },
  {
    id: '3',
    name: 'Marcus Sterling',
    role: 'Chief Operating Officer',
    company: 'FinTech Innovations Group',
    project: 'Modern Office Renovation',
    rating: 5,
    content: 'The renovation of our corporate headquarters had to be finished in six months flat. SkyBuild executed complex structural load transfers and delivered a high-spec interior two weeks ahead of schedule. Highly recommended.',
    date: 'August 2023'
  },
  {
    id: '4',
    name: 'Alhaji Sanusi Bello',
    role: 'Director of Civil Infrastructure',
    company: 'Municipal Development Board',
    project: 'Eastside Road Project',
    rating: 5,
    content: 'SkyBuild delivered the 4.8 km dual-carriageway and stormwater drainage system with outstanding technical diligence. Their asphalt compaction and drainage culverts have stood firm through the heaviest monsoon seasons.',
    date: 'June 2024'
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Engr. David Okonkwo, FNSE',
    role: 'Chief Executive Officer & Principal Engineer',
    experience: '22+ Years in Civil & Heavy Structural Engineering',
    education: 'M.Sc. Structural Engineering (Imperial College), B.Eng. Civil Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Arc. Folake Alabi',
    role: 'Head of Architecture & Project Planning',
    experience: '16+ Years in Urban Design & Commercial Architecture',
    education: 'M.Arch, Registered Member NIA & ARCON',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Engr. Kenneth Braimoh',
    role: 'Director of Site Operations & HSE',
    experience: '18+ Years in Infrastructure & Field Construction',
    education: 'B.Eng. Civil Engineering, NEBOSH International Certified',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Amara Williams',
    role: 'Lead Project Quantity Surveyor & Cost Controller',
    experience: '14+ Years in Construction Economics & BOQ Validation',
    education: 'B.Sc. Quantity Surveying, RQS, NIQS',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQ_DATA = [
  {
    question: 'How do I obtain a formal quote for my construction project?',
    answer: 'You can submit your initial project specifications through our online Request a Quote form or contact our office directly. We review architectural drawings, site surveys, and scope briefs to prepare a detailed preliminary estimate followed by a comprehensive Bill of Quantities.'
  },
  {
    question: 'Does SkyBuild handle building permit approvals and statutory filings?',
    answer: 'Yes. Our project management and planning division coordinates with municipal planning authorities, environmental protection agencies, and local building boards to obtain planning permits, structural approvals, and occupancy clearances.'
  },
  {
    question: 'What quality assurance protocols do you follow on-site?',
    answer: 'We enforce stringent Quality Assurance and Quality Control (QA/QC) plans. All raw materials undergo batch certification, including slump and compressive testing for concrete at 7, 14, and 28 days, tensile rebar testing, and non-destructive welding checks on structural steel.'
  },
  {
    question: 'Can you work on existing buildings while tenants remain in occupancy?',
    answer: 'Yes. Our renovation team specializes in phased occupied construction. We utilize dust containment barriers, acoustic scheduling for noisy structural works, and dedicated temporary access routes to ensure tenant safety and operational continuity.'
  },
  {
    question: 'What are your standard warranties on structural works and roofing?',
    answer: 'SkyBuild provides an industry-leading 10-year structural warranty on new building frames and foundations, along with a 5-to-15 year weather-tightness guarantee on specialized roofing and waterproofing installations.'
  }
];
