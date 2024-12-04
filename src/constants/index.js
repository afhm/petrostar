import { highlightFirstVideo, highlightFourthVideo, highlightSecondVideo, highlightThirdVideo } from '../utils';

export const navLists = ['Store', 'Mac', 'iPhone', 'Support'];

export const hightlightsSlides = [
  {
    id: 1,

    video: highlightFirstVideo,
    videoDuration: 5,
  },
  {
    id: 2,

    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,

    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,

    video: highlightFourthVideo,
    videoDuration: 5,
  },
];

export const sizes = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' },
];

export const footerLinks = ['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal', 'Site Map'];
