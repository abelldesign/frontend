<template>
  <div id="app" itemscope itemtype='http://schema.org/LocalBusiness'>
    <HeaderLayout />
    <router-view></router-view>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout'
import FooterLayout from '@/components/FooterLayout'

export default {
  name: 'app',
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style lang="less">
@turquoise: #90c5c2;
@sky: #e0f2f1;
@grey: #b1c2c1;
@slate: #3c3c3b;

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
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  color: @slate;
	vertical-align: baseline;
  line-height: 1.5em;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
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

a {
  text-decoration: none;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
  line-height: 60px;
}

main {
  font-family: 'Lato', sans-serif;
  padding: 20px;
}

.container {
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 1000px;
    margin: 0 auto;
  }
}

.content-summary {
  h1 {
    margin: 0;
  }

  .description {
    margin-top: 10px;
  }
}

.content {
  .item {
    margin-top: 50px;

    &:after {
      display: block;
      content: ' ';
      clear: both;
    }
  }

  h2 {
    display: block;
    width: 100%;
    font-size: 24px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .description {
    margin-bottom: 20px;
  }
}

.image-container {
  &:after {
    content: " ";
    display: block;
    clear: both;
  }

  li {
    display: block;
    width: 42%;
    float: left;
    padding-right: 4%;
    margin-bottom: 20px;

    img {
      display: block;
      width: 100%;
    }
  }
}

</style>
