import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
	/* main color */
	--color-1: #10012D;
	--color-2: #23005B;
	--color-3: #3A008B;
	--color-4: #00B3C1;
	--color-5: #C0EEF7;
	--color-6: #F8F8F8;


	/* shades of gray */
	--gray-0: #868E96;
	--gray-1: #212529;

     /* fonts */
  --font   : 'Teko', sans-serif;
  --font-df: 'Roboto', sans-serif;

     /* font size */
	--font-size-1: 128px;
	--font-size-2:  28px;
	--font-size-3:  20px;
	--font-size-4:  15px;

	/* font weigth */
	--font-weigth-1: 800px;
	--font-weigth-2: 700px;
	--font-weigth-3: 400px;
}


.container{
	width: 100%;
	max-width:1200px;
	margin: 0 auto;
}

/* Reset CSS */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, main {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
     box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	max-width: 100vw;
  	height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;

export default GlobalStyles;
