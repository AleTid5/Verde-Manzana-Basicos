import React from 'react';

const services = [
  {
    id: 1,
    service: 'Acrylic ',
    category: 'Nails Enhancements',
    price: '(Full Set / Fill In)',
    description: (<span>It is designed to protect your nails. Acrylic nails make your nails stronger and gives them a natural look.</span>)
  },
  {
    id: 2,
    service: 'Gel Builder',
    category: 'Nails Enhancements',
    price: '(Full Set / Fill In)',
    description: 'The revolutionary nail enhancement, less chemical and order-free, gives your nails a natural look and feel. Add a French-manicure for more elegant look.'
  },
  {
    id: 3,
    service: 'SNS Nails',
    category: 'Nails Enhancements',
    price: '(Full Set / Fill In)',
    description: 'Pink and White Powder Nail Dip, a fiberglas-like nail enhancement.'
  },
  {
    id: 4,
    service: 'Solar Pink & White Nails',
    category: 'Nails Enhancements',
    price: '(Full Set / Fill In Pink w/Gel / Fill In Pink & White)',
    description: 'This service consists of basic manicure services, nail trim, shaping of nails, soaking, clearning, ' +
    'cuticles, hand massage using collagen cream, application of collagen mask, healing herbal gloves, and, ' +
    'the application of polish. It also includes healing herbal neck wrap.'
  },
  {
    id: 5,
    service: 'LCN Gel Nails Pink & White',
    category: 'Nails Enhancements',
    price: '(Full Set / Fill In Pink / Fill In Pink & White)',
    description: 'LCN Gel Nail is the most popular, most advance type of gel nail available today. Made with high quality soft resin that provides a super glossy finish.'
  },
  {
    id: 6,
    service: 'Shellac Manicure / Take Off ',
    category: 'Natural Nails Hand Treatment',
    price: '',
    description: 'A Brush-on polish-like color gel that is hardened by UV light. It adds protection to natural nails with stronger, long-lasting wear. It can be applied to any Manicure or nail.'
  },
  {
    id: 7,
    service: 'Refreshing Hand Treatment ',
    category: 'Natural Nails Hand Treatment',
    price: '',
    description: 'Basic Manicure: Includes cleansing nail, shaping cuticle care, dry skin exfoliate cream massage and polish. (Paraffin Available)'
  },
  {
    id: 8,
    service: "LCN’s Signature Hand Treatment",
    category: 'Natural Nails Hand Treatment',
    price: '',
    description: 'Collagen Vitamin E. Refreshing Hand Treatment service followed by collagen mask. A Vitamin contains special anti-aging property that absorb into the skin, help the skin nourish and be smooth.'
  },
  {
    id: 9,
    service: 'Grand LCN Manicure',
    category: 'Natural Nails Hand Treatment',
    price: '',
    description: 'Incorporated Warm Basalt Stone massage with Signature Hand Treatment for total relaxation. Extra shoulder and arm massage for 10 minutes.'
  },
  {
    id: 10,
    service: 'Refreshing Foot Treatment ',
    category: 'Luxurious Pedicures',
    price: '',
    description: 'An Enjoying 35 minute pedicure! Basic pedicure includes cleaning the nail, shaping, cuticle care and an organic sugar scrub. It is used to exfoliate the skin. Also a warm towel therapy massage w/ scented lotion and polish.(Paraffin Available).' 
                  
  },
  {
    id: 11,
    service: "LCN’s Signature Foot Treatment ",
    category: 'Luxurious Pedicures',
    price: '',
    description: 'An Enjoying 45 Minute Pedicure! A hydrating foot treatment . It includes foot exfoliation, nail shaping, cuticle care, callus reduction, and a salt scrub. Foot mask and steamed towel wraps or (paraffin wrap), application of oil (or lotion), massage w/ hot stone and desired polish. '
  },
  {
    id: 12,
    service: "LCN’s Grand Foot Treatment",
    category: 'Luxurious Pedicures',
    price: '',
    description: 'An Enjoying 45 Minute Pedicure! (Collagen vitamin E) Pedicure. Revive those sore and worn out feet with a relaxing collagen foot treatment. This starts with a warm foot soak. Followed by cuticle care, callus reduction, milk and honey sea salt to exfoliate your skin. Your feet will be very soft once wrapped in a collagen mask, they are placed in warm mittens. The heat from the mittens helps the anti-aging property of the collagen absorb into the skin. An additional hot stone massage, warm towel, lotion and polish. '
  },
  {
    id: 13,
    service: "LCN’s Extreme Spa Pedicure ",
    category: 'Luxurious Pedicures',
    price: '',
    description: "An Enjoying 60 Minute Pedicure! Rejuvenate the feet with the extreme LCN pedicure treatment. It will naturally moisturize, exfoliate and intensive callus treatment. Fresh slices of orange and lemon are added to the soak followed by a gentle application of our milk and honey sea salt. Must mask butter, (or green tea mint) steamed towel wraps, hot stone massage and necklace relax leave feet feeling soft, smooth, refreshed included with paraffin wrap and desired polish."
  },
  {
    id: 14,
    service: 'Eyebrows Wax',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 15,
    service: 'Lip & Chin',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 16,
    service: 'Sideburns',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 14,
    service: 'Full Face',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 15,
    service: 'Under Arm',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 16,
    service: 'Toe',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 16,
    service: 'Half Arm',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 17,
    service: 'Half Legs / Full Legs',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 18,
    service: 'Bikini / Brazilian Bikini',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 19,
    service: 'Back',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 20,
    service: 'Chest',
    category: 'Waxing',
    price: '',
    description: ''
  },
  {
    id: 21,
    service: 'Manicure',
    category: "Kids' Services",
    price: '',
    description: ''
  },
  {
    id: 22,
    service: 'Pedicure',
    category: "Kids' Services",
    price: '',
    description: ''
  },
  {
    id: 23,
    service: 'Polish Hand/Toes',
    category: "Kids' Services",
    price: '',
    description: ''
  },
  {
    id: 24,
    service: 'Seven Years Old and Under',
    category: "Kids' Services",
    price: '',
    description: ''
  },
  {
    id: 25,
    service: 'Free Sample Design',
    category: "Kids' Services",
    price: '',
    description: ''
  },
  {
    id: 26,
    service: 'Nail Repair',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 27,
    service: 'Polish Change',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 28,
    service: 'French Polish Change',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 29,
    service: 'Nails Take-Off New Set',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 30,
    service: 'Take-Off Only',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 31,
    service: 'Nails Cut Down File',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 32,
    service: 'Paraffin Add On (Hand or Feet)',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 33,
    service: 'French Manicure Add On',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 34,
    service: 'Nail Design (Two Nails)',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 35,
    service: 'French Manicure Gel Polish Add On',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 36,
    service: 'Shellac Gel Polish Change',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 37,
    service: 'With Take Off',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 40,
    service: 'Shellac Manicure',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 41,
    service: 'With French',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 42,
    service: 'Shellac Gel Polish Change Feet',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 43,
    service: 'Shellac with Pedicure',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 44,
    service: 'Shellac French Pedicure',
    category: "Additional",
    price: '',
    description: ''
  },
  {
    id: 45,
    service: 'Foot Massage (10 minutes / 20 minutes)',
    category: "Additional",
    price: '',
    description: ''
  },

]

export default services;