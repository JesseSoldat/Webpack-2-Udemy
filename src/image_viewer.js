import small from '../assets/small.jpg';
import big from '../assets/big.jpg';

import './image_viewer.css';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);