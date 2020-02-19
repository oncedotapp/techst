import { createGlobalStyle } from 'styled-components';

/**
 * GT Super
 */
import gtSuperDisplayRegularOtf from './assets/fonts/GTSuper/GT-Super-Display-Regular.otf';
import gtSuperDisplayRegularTtf from './assets/fonts/GTSuper/GT-Super-Display-Regular.ttf';
import gtSuperDisplayRegularWoff from './assets/fonts/GTSuper/GT-Super-Display-Regular.woff';
import gtSuperDisplayRegularWoff2 from './assets/fonts/GTSuper/GT-Super-Display-Regular.woff2';

import gtSuperDisplaySuperOtf from './assets/fonts/GTSuper/GT-Super-Display-Super.otf';
import gtSuperDisplaySuperTtf from './assets/fonts/GTSuper/GT-Super-Display-Super.ttf';
import gtSuperDisplaySuperWoff from './assets/fonts/GTSuper/GT-Super-Display-Super.woff';
import gtSuperDisplaySuperWoff2 from './assets/fonts/GTSuper/GT-Super-Display-Super.woff2';

/**
 * SF UI
 */
import sfUiDisplayBlack from './assets/fonts/SF-UI/SF-UI-Display-Black.otf';
import sfUiDisplayBold from './assets/fonts/SF-UI/SF-UI-Display-Bold.otf';
import sfUiDisplayHeavy from './assets/fonts/SF-UI/SF-UI-Display-Heavy.otf';
import sfUiDisplayLight from './assets/fonts/SF-UI/SF-UI-Display-Light.otf';
import sfUiDisplayMedium from './assets/fonts/SF-UI/SF-UI-Display-Medium.otf';
import sfUiDisplayRegular from './assets/fonts/SF-UI/SF-UI-Display-Regular.otf';
import sfUiDisplaySemibold from './assets/fonts/SF-UI/SF-UI-Display-Semibold.otf';
import sfUiDisplayThin from './assets/fonts/SF-UI/SF-UI-Display-Thin.otf';
import sfUiDisplayUltralight from './assets/fonts/SF-UI/SF-UI-Display-Ultralight.otf';

/**
 * HeptaSlab
 */
import heptaSlabBlack from './assets/fonts/HeptaSlab/HeptaSlab-Black.ttf';
import heptaSlabBold from './assets/fonts/HeptaSlab/HeptaSlab-Bold.ttf';
import heptaSlabExtraBold from './assets/fonts/HeptaSlab/HeptaSlab-ExtraBold.ttf';
import heptaSlabExtraLight from './assets/fonts/HeptaSlab/HeptaSlab-ExtraLight.ttf';
import heptaSlabLight from './assets/fonts/HeptaSlab/HeptaSlab-Light.ttf';
import heptaSlabMedium from './assets/fonts/HeptaSlab/HeptaSlab-Medium.ttf';
import heptaSlabRegular from './assets/fonts/HeptaSlab/HeptaSlab-Regular.ttf';
import heptaSlabSemibold from './assets/fonts/HeptaSlab/HeptaSlab-SemiBold.ttf';
import heptaSlabThin from './assets/fonts/HeptaSlab/HeptaSlab-Thin.ttf';

/**
 * Merriweather
 */
import merriweatherBlack from './assets/fonts/Merriweather/Merriweather-Black.ttf';
import merriweatherBlackItalic from './assets/fonts/Merriweather/Merriweather-BlackItalic.ttf';
import merriweatherBold from './assets/fonts/Merriweather/Merriweather-Bold.ttf';
import merriweatherBoldItalic from './assets/fonts/Merriweather/Merriweather-BoldItalic.ttf';
import merriweatherItalic from './assets/fonts/Merriweather/Merriweather-Italic.ttf';
import merriweatherLight from './assets/fonts/Merriweather/Merriweather-Light.ttf';
import merriweatherLightItalic from './assets/fonts/Merriweather/Merriweather-LightItalic.ttf';
import merriweatherRegular from './assets/fonts/Merriweather/Merriweather-Regular.ttf';

/**
 * Montserrat
 */
import montserratBlack from './assets/fonts/Montserrat/Montserrat-Black.ttf';
import montserratBlackItalic from './assets/fonts/Montserrat/Montserrat-BlackItalic.ttf';
import montserratBold from './assets/fonts/Montserrat/Montserrat-Bold.ttf';
import montserratBoldItalic from './assets/fonts/Montserrat/Montserrat-BoldItalic.ttf';
import montserratExtraBold from './assets/fonts/Montserrat/Montserrat-ExtraBold.ttf';
import montserratExtraBoldItalic from './assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf';
import montserratExtraLight from './assets/fonts/Montserrat/Montserrat-ExtraLight.ttf';
import montserratExtraLightItalic from './assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf';
import montserratItalic from './assets/fonts/Montserrat/Montserrat-Italic.ttf';
import montserratLight from './assets/fonts/Montserrat/Montserrat-Light.ttf';
import montserratLightItalic from './assets/fonts/Montserrat/Montserrat-LightItalic.ttf';
import montserratMedium from './assets/fonts/Montserrat/Montserrat-Medium.ttf';
import montserratMediumItalic from './assets/fonts/Montserrat/Montserrat-MediumItalic.ttf';
import montserratRegular from './assets/fonts/Montserrat/Montserrat-Regular.ttf';
import montserratSemiBold from './assets/fonts/Montserrat/Montserrat-SemiBold.ttf';
import montserratSemiBoldItalic from './assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf';
import montserratThin from './assets/fonts/Montserrat/Montserrat-Thin.ttf';
import montserratThinItalic from './assets/fonts/Montserrat/Montserrat-ThinItalic.ttf';

/**
 * Oswald
 */
import oswaldBold from './assets/fonts/Oswald/Oswald-Bold.ttf';
import oswaldExtraLight from './assets/fonts/Oswald/Oswald-ExtraLight.ttf';
import oswaldLight from './assets/fonts/Oswald/Oswald-Light.ttf';
import oswaldMedium from './assets/fonts/Oswald/Oswald-Medium.ttf';
import oswaldRegular from './assets/fonts/Oswald/Oswald-Regular.ttf';
import oswaldSemiBold from './assets/fonts/Oswald/Oswald-SemiBold.ttf';

/**
 * Rufina
 */
import rufinaBold from './assets/fonts/Rufina/Rufina-Bold.ttf';
import rufinaRegular from './assets/fonts/Rufina/Rufina-Regular.ttf';

/**
 * Courier_Prime
 */
import courierPrime from './assets/fonts/Courier_Prime/CourierPrime-Regular.ttf';

/* some documentation about font-weights: https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-weight-prop */
const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    overflow: auto;
    background: #dce4ea;
  }

  body {
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }

  /**
   * Define Geomanist with its multiple weights and file format.
   * (not using eot and svg since ttf and woff cover almost every browser)
   */

  /**
   * Define GT Super
   */
  @font-face {
    font-family: 'GT Super Display';
    src: url(${gtSuperDisplayRegularOtf}) format('opentype'),
         url(${gtSuperDisplayRegularTtf}) format('truetype'),
         url(${gtSuperDisplayRegularWoff}) format('woff'),
         url(${gtSuperDisplayRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'GT Super Display';
    src: url(${gtSuperDisplaySuperOtf}) format('opentype'),
         url(${gtSuperDisplaySuperTtf}) format('truetype'),
         url(${gtSuperDisplaySuperWoff}) format('woff'),
         url(${gtSuperDisplaySuperWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  /**
   * Define SF UI
   */
  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayBlack}) format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayHeavy}) format('opentype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayMedium}) format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplaySemibold}) format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayThin}) format('opentype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF UI Display';
    src: url(${sfUiDisplayUltralight}) format('opentype');
    font-weight: 100;
    font-style: normal;
  }

/**
* Define Hepta Slab
*/
  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabBlack}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabExtraBold}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabSemibold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hepta Slab';
    src: url(${heptaSlabThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

/**
* Define Merriweather
*/
  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherBlack}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherBlackItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherRegular}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(${merriweatherItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

/**
* Define Montserrat
*/
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratBlack}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratBlackItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratExtraBold}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratExtraBoldItalic}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratExtraLightItalic}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratThinItalic}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

/**
* Define Oswald
*/
  @font-face {
    font-family: 'Oswald';
    src: url(${oswaldBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${oswaldExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${oswaldLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${oswaldMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${oswaldRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Oswald';
    src: url(${oswaldSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

/**
* Define Rufina
*/
  @font-face {
    font-family: 'Rufina';
    src: url(${rufinaBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Rufina';
    src: url(${rufinaRegular}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }


/**
* Define courierPrime
*/
  @font-face {
    font-family: 'Courier Prime';
    src: url(${courierPrime}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
