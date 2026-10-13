window.CLIENT = {
  name: 'Capital Fence', logo: 'assets/logo-eagle-flag.png', logoAlt: 'Capital Fence eagle and American flag logo',
  heroPhoto: {src:'assets/hero-home-unfenced.png', alt:'Yellow home with a porch, flowers and an open lawn; fence builds as you scroll', credit:'EDITED REFERENCE PHOTO · SCROLL TO BUILD', source:''},
  city: 'Cabot', state: 'Arkansas', county: 'Lonoke County',
  serviceAreas: ['Cabot', 'Austin', 'Ward', 'Lonoke', 'Beebe', 'Vilonia', 'Sherwood'],
  phone: '501-247-3918', phoneE164: '+15012473918', whatsapp: '15012473918',
  email: 'capitalfencear@gmail.com', website: 'https://www.capitalfencear.com/', contactUrl: 'https://www.capitalfencear.com/contact',
  reviewsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJEd60aYxpbYkRm3XI6zIdzdc',
  rating: '5.0', reviews: 87, ownerOperated: true,
  theme: {ink:'#183e32', cream:'#f7f5ed', accent:'#c65e35', bodyFont:'Arial, sans-serif', headingFont:'Arial, sans-serif'},
  copy: {
    title: 'Capital Fence | Cabot, Arkansas', description: 'Owner-operated fencing in Cabot and Lonoke County. Explore materials and plan your free local estimate.',
    eyebrow: 'RESIDENTIAL FENCING', headline: ['A little privacy.', 'A lot more ', 'home.'],
    intro: 'Make room for backyard mornings, a place to play, and a space that’s yours. Thoughtfully built fences for Cabot and the surrounding communities.',
    cta: 'Get a free estimate ↗', localNote: 'Free local estimates · Cabot, Arkansas · Lonoke County',
    materialsTitle: 'Find your kind of fence.', materialsIntro: 'Privacy, an open view, or a little of both. Compare the everyday tradeoffs before you choose.',
    workTitle: 'Real fences. Real backyards.', workIntro: 'Fence photos from the official Capital Fence website. Explore the finishes, details, and possibilities for your own property.',
    servicesTitle: 'From the first post to the final gate.', servicesIntro: 'Work directly with an owner-operated local business. Tell us what you need and we’ll help you find a practical way forward.',
    quoteTitle: 'A clearer starting point.', quoteIntro: 'Choose a material and give us a rough idea of your project. Send your plan to request a free local estimate.',
    priceNote: 'Illustrative planning prices, not approved Capital Fence rates. Removal, terrain, permits, and unusual access are excluded. Final pricing requires a site visit.'
  },
  materials: [
    {id:'wood', name:'Wood privacy', tag:'YOUR BACKYARD RETREAT', low:25, high:45, upkeep:'Stain or seal periodically', lifespan:'Typically 15–20 years with care', description:'Warm, natural character with the privacy to make your yard feel like home.', photo:'assets/wood.jpg'},
    {id:'vinyl', name:'Vinyl', tag:'LESS UPKEEP, MORE WEEKENDS', low:35, high:60, upkeep:'Wash as needed', lifespan:'Typically 20–30 years', description:'A clean finish and easy maintenance for an everyday outdoor space.', photo:null},
    {id:'chain', name:'Chain link', tag:'PRACTICAL & OPEN', low:15, high:30, upkeep:'Inspect fittings and tension', lifespan:'Typically 15–25 years', description:'An economical boundary that keeps the view open and gives pets room to roam.', photo:null},
    {id:'metal', name:'Ornamental metal', tag:'A FRAME FOR YOUR LANDSCAPE', low:30, high:55, upkeep:'Inspect finish; touch up damage', lifespan:'Typically 20–30+ years', description:'An open, architectural finish for gardens, pools, and welcoming front yards.', photo:'assets/metal.png'}
  ],
  photos: [
    {src:'assets/wood.jpg', alt:'Wood privacy fence with lattice top beside a backyard patio', caption:'Wood privacy · Lattice detail', source:'https://www.capitalfencear.com/'},
    {src:'assets/metal.png', alt:'Black ornamental metal fence around a landscaped garden', caption:'Ornamental metal · An open view', source:'https://www.capitalfencear.com/'},
    {src:'assets/privacy.jpg', alt:'Wood fence beside a brick home and porch', caption:'Wood fencing · Everyday privacy', source:'https://www.capitalfencear.com/'}
  ],
  services: ['Residential fencing', 'Commercial fencing', 'Custom gates', 'Fence repair & replacement', 'Privacy fencing', 'Chain link fencing', 'Ornamental fencing', 'Vinyl fencing'],
  quote: {defaultMaterial:'wood', defaultHeight:'6', defaultFootage:150, heights:[{value:'4',label:'4 feet',factor:0.85},{value:'6',label:'6 feet',factor:1},{value:'8',label:'8 feet',factor:1.25}], gates:[{value:'0',label:'No gates',count:0,low:0,high:0},{value:'1',label:'1 walk gate',count:1,low:250,high:600},{value:'2',label:'2 walk gates',count:2,low:500,high:1200},{value:'drive',label:'1 double / drive gate',count:1,low:700,high:1600}]},
  verification: {ratings:'5.0 and 87 reviews supplied in client brief; verify before public launch',email:'Found in official website JSON-LD, October 13, 2026; confirm delivery',whatsapp:'Uses listed business phone; account availability unconfirmed',photos:'Official website assets; Google Business Profile provenance unconfirmed',prices:'Demo planning ranges; contractor approval needed'}
};

