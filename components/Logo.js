import React from 'react';
import styled from 'styled-components';
import FullScreenSection from './FullScreenSection';

const SVGContainer = styled.svg`
  display: block;
  fill: var(--color-fg, white);

  ${FullScreenSection} & {
    margin: auto;
    min-width: 20em;
    top: 30%;
    width: 50%;
  }
`;

function Logo() {
  return (
    <SVGContainer viewBox="0 0 562 81" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-1227.000000, -1698.000000)">
        <g transform="translate(1227.000000, 1691.000000)">
          <g transform="translate(0.000000, 7.000000)">
            <g transform="translate(96.000000, 0.000000)">
              <path d="M3.11416145,24.0706932 C2.96618996,24.0706932 2.81821847,24.0165152 2.70479869,23.9095851 C2.47871027,23.694299 2.47871027,23.3457067 2.70479869,23.1325592 L24.1524027,2.77804571 C24.3784911,2.56347251 24.7442886,2.56347251 24.9715037,2.77804571 C25.1975922,2.99333178 25.1975922,3.34085481 24.9715037,3.55542801 L3.52314864,23.9095851 C3.41198224,24.0165152 3.26175738,24.0706932 3.11416145,24.0706932 Z" />
              <path d="M60.3040164,78.3480889 C60.1549182,78.3480889 60.0069467,78.2946239 59.8942781,78.1869808 C59.6674385,77.9724076 59.6674385,77.6241717 59.8942781,77.4095985 L81.3411309,57.055085 C81.5672193,56.839799 81.9352703,56.839799 82.1598564,57.055085 C82.3859449,57.2700147 82.3859449,57.6168248 82.1598564,57.8324673 L60.7133792,78.1869808 C60.5995838,78.2942674 60.4516123,78.3480889 60.3040164,78.3480889 Z" />
              <path d="M0.731970654,35.3778454 C0.583999162,35.3778454 0.43602767,35.3247367 0.322607897,35.2170937 C0.0965194757,35.0025205 0.0965194757,34.6553539 0.322607897,34.4397114 L36.0663611,0.517185569 C36.2928251,0.302612369 36.6582471,0.302612369 36.8854622,0.517185569 C37.1119262,0.731758768 37.1119262,1.07999468 36.8854622,1.29456787 L1.14133341,35.2170937 C1.02791364,35.3243803 0.879566584,35.3778454 0.731970654,35.3778454 Z" />
              <path d="M48.3885557,80.6085927 C48.2417109,80.6085927 48.0926127,80.5551276 47.9791929,80.4474845 C47.7542312,80.2329113 47.7542312,79.8846754 47.9791929,79.6701022 L83.7233217,45.7465071 C83.9494101,45.5312211 84.3163344,45.5312211 84.5424228,45.7465071 C84.7685112,45.9610803 84.7685112,46.3082469 84.5424228,46.5238894 L48.7979184,80.4474845 C48.6856253,80.5551276 48.5380294,80.6085927 48.3885557,80.6085927 Z" />
              <path d="M0.731970654,44.4234245 C0.583999162,44.4234245 0.43602767,44.3710288 0.322607897,44.2633857 C0.0965194757,44.0488125 0.0965194757,43.7005766 0.322607897,43.4849341 L45.5973777,0.517185569 C45.8234661,0.302612369 46.1903903,0.302612369 46.4164788,0.517185569 C46.6433183,0.731758768 46.6433183,1.07999468 46.4164788,1.29456787 L1.14133341,44.2633857 C1.02791364,44.3706723 0.879566584,44.4234245 0.731970654,44.4234245 Z" />
              <path d="M38.8579147,80.6085927 C38.7095676,80.6085927 38.560845,80.5551276 38.4485519,80.4474845 C38.2213368,80.2329113 38.2213368,79.8846754 38.4485519,79.6701022 L83.7233217,36.7002151 C83.9494101,36.4856419 84.3163344,36.4856419 84.5424228,36.7002151 C84.7685112,36.9147883 84.7685112,37.2626678 84.5424228,37.4786667 L39.2672774,80.4474845 C39.1538577,80.5551276 39.0058862,80.6085927 38.8579147,80.6085927 Z" />
              <path d="M1.92550721,52.3398211 C1.77528234,52.3398211 1.62731085,52.2856432 1.51501776,52.178713 C1.28780265,51.9641398 1.28780265,51.6159039 1.51501776,51.4013307 L53.9374866,1.64815029 C54.163575,1.43286422 54.5304993,1.43286422 54.7550855,1.64815029 C54.9823006,1.86272349 54.9823006,2.20989009 54.7550855,2.4255326 L2.33411884,52.178713 C2.22069907,52.2852868 2.07272757,52.3398211 1.92550721,52.3398211 Z" />
              <path d="M4.30657131,59.1241837 C4.15747314,59.1241837 4.00950164,59.0710751 3.89720856,58.9630756 C3.66999345,58.7485024 3.66999345,58.4006229 3.89720856,58.1860497 L61.0859368,3.91007973 C61.3120252,3.69479366 61.6789495,3.69479366 61.9050379,3.91007973 C62.1311263,4.12465293 62.1311263,4.47181954 61.9050379,4.68746204 L4.71630963,58.9630756 C4.6025143,59.0710751 4.45454281,59.1241837 4.30657131,59.1241837 Z" />
              <path d="M7.88154754,64.7775816 C7.73282492,64.7775816 7.58447787,64.724473 7.47105809,64.6164735 C7.24496967,64.4019003 7.24496967,64.0540208 7.47105809,63.8394476 L67.0427283,7.30154816 C67.2688167,7.08697496 67.6357409,7.08697496 67.8618294,7.30154816 C68.0879178,7.51683423 68.0879178,7.86435726 67.8618294,8.07893046 L8.29128586,64.6164735 C8.17749052,64.724473 8.02951903,64.7775816 7.88154754,64.7775816 Z" />
              <path d="M23.3693555,77.2160549 C23.2213841,77.2160549 23.0734126,77.1625898 22.9599928,77.0549468 C22.7350311,76.8403736 22.7350311,76.4921377 22.9599928,76.2775645 L80.1487211,22.0019509 C80.3755606,21.7870213 80.7413581,21.7870213 80.9674466,22.0019509 C81.1957884,22.2165241 81.1957884,22.5644036 80.9674466,22.7789768 L23.7787183,77.0549468 C23.6664252,77.1622334 23.517327,77.2160549 23.3693555,77.2160549 Z" />
              <path d="M12.6455536,69.3014405 C12.4987088,69.3014405 12.3484839,69.2483318 12.2361908,69.1406888 C12.0101024,68.9261156 12.0101024,68.578949 12.2361908,68.3633065 L71.8093632,11.825407 C72.0365783,11.610121 72.4023759,11.610121 72.6284643,11.825407 C72.8553039,12.0399802 72.8553039,12.3871468 72.6284643,12.6027893 L13.0552919,69.1406888 C12.9414966,69.2479754 12.7935251,69.3014405 12.6455536,69.3014405 Z" />
              <path d="M17.4121885,73.8242301 C17.264217,73.8242301 17.1173722,73.7696957 17.0028258,73.6631219 C16.7767374,73.4478359 16.7767374,73.1003128 17.0028258,72.8857396 L76.5748715,16.3478402 C76.8009599,16.133267 77.1663819,16.133267 77.3950993,16.3478402 C77.6196855,16.5624134 77.6196855,16.9106493 77.3950993,17.1252225 L17.8219268,73.6631219 C17.7092582,73.7696957 17.56016,73.8242301 17.4121885,73.8242301 Z" />
              <path d="M30.5189324,79.4769151 C30.3698343,79.4769151 30.2218628,79.42345 30.1095697,79.3158069 C29.8823546,79.1012337 29.8823546,78.7540671 30.1095697,78.5384246 L82.5305363,28.7852442 C82.7588781,28.570671 83.1235489,28.570671 83.350764,28.7852442 C83.5779792,28.9998174 83.5779792,29.3476969 83.350764,29.5633394 L30.9282952,79.3154505 C30.8148754,79.4230935 30.6669039,79.4769151 30.5189324,79.4769151 Z" />
            </g>
            <path d="M84.5521874,40.1255447 C84.5521874,62.287178 65.6309901,80.2525152 42.2789104,80.2525152 C18.9294597,80.2525152 0,62.287178 0,40.1255447 C0,17.9664065 18.9294597,0 42.279286,0 C65.6309901,0 84.5521874,17.9664065 84.5521874,40.1255447 Z" />
          </g>
          <text fontFamily="Roboto" fontSize="72" fontWeight="100">
            <tspan x="221" y="67">
              BASE TWO
            </tspan>
          </text>
        </g>
      </g>
    </SVGContainer>
  );
}

export default Logo;
