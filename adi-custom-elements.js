const navElements = [
  {
    href: '/porady',
    title: 'Zobacz artykuły z poradami',
    label: 'Porady',
  },
  {
    href: '/koktajle',
    title: 'Zobacz galerię koktajli',
    label: 'Koktajle',
  },
  {
    href: '/recenzje',
    title: 'Zobacz recenzje',
    label: 'Recenzje',
  },
  {
    href: '/o-blogu-i-autorze.html',
    title: 'Zobacz informacje o blogu i autorze',
    label: 'O blogu i autorze',
  },
];

class AdiMainNav extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.innerHTML = `<nav class="bg-slate-50 mb-8 border-b-4 border-slate-100 text-sm font-bold font-serif">
      <ul class="container mx-auto px-2 flex flex-col md:flex-row uppercase tracking-wide">
        ${navElements.map((item, i) => {
          return `<li class="${`flex ${i === navElements.length-1 ? '' : 'border-r-2 border-slate-100'}`.trim()}">
            <a href="${item.href}" title="${item.title}" class="w-full px-8 py-2 hover:bg-slate-100">${item.label}</a>
          </li>`;
        }).join('')}
      </ul>
    </nav>`;
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define("adi-main-nav", AdiMainNav);

class AdiMainHeader extends HTMLElement {
  constructor() {
    super();
  }

  get headerElement() {
    return this.attributes['article-page'] ? 'p' : 'h1';
  }

  render() {
    this.innerHTML = `<header class="h-24"
      style="background: url(/dist/header-bg.jpg); background-position: 10% 60%; background-repeat: no-repeat; background-size: cover;"
    >
      <${this.headerElement} class="container mx-auto px-2">
        <a href="/" title="Przejdź do strony głównej" class="inline-flex">
          <svg width="250" viewBox="509.925 240.6 674.934 236.737" xmlns="http://www.w3.org/2000/svg">
            <g id="document" fill="#ffffff" fill-rule="nonzero" stroke="#ffffff" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" transform="matrix(1, 0, 0, 1, 0, 9)">
              <g id="g-1" fill="#ffffff" fill-rule="nonzero" stroke="#ffffff" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal" transform="matrix(1, 0, 0, 1, -3.212758, 5.620386)"/>
              <g id="g-2" transform="matrix(1, 0, 0, 1, -3.212758, 5.620386)" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="none" stroke-linejoin="none" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal;">
                <g id="g-3">
                  <path d="M768,169" id="Path 1" stroke-linecap="round" stroke-linejoin="round" fill="none" style="stroke: #ffffff;"/>
                  <path d="M722.04252,312.69734l-8.83034,40.74786h-29.04436l-10.42618,47.99192h40.21527l17.23512,-8.65263l2.87252,-13.28078l-17.23512,8.65263l16.27761,-75.459zM686.93395,391.07409l5.95782,-27.16524h17.97984l-5.85143,27.16524zM782.76438,376.58596l3.21829,-13.3814l-19.25652,9.65875l4.36197,-19.71995h-36.70441l-10.31979,48.29376h36.59802l2.12779,-10.0612l1.0639,-5.23182zM737.36262,390.97348l5.95782,-27.36646h14.3626l-5.95782,27.36646zM848.0078,378.79943l-19.04374,9.55814l7.55366,-35.11359h-11.06452l-10.63896,5.33244l1.17029,-5.33244h-10.95813l-13.83065,6.84162l1.48945,-6.84162h-11.06452l-10.53257,48.19315h11.06452l6.1706,-27.97014l13.83065,-6.94223l-7.66005,34.91236h11.06452l6.38338,-29.57993l10.63896,-5.33244l-7.66005,34.91236h11.17091l19.15013,-9.65875zM894.79263,376.58596l3.21829,-13.3814l-19.25652,9.65875l4.36197,-19.71995h-36.70441l-10.31979,48.29376h36.59802l2.12779,-10.0612l1.0639,-5.23182zM849.39087,390.97348l5.95782,-27.36646h14.3626l-5.95782,27.36646zM949.2907,353.24398h-11.06452l-3.51086,16.50037l-14.14982,13.3814l1.80862,-8.3508l4.68114,-21.53097h-0.10639h-10.95813h-0.10639l-3.51086,16.50037l-14.14982,13.3814l6.48977,-29.88176h-11.06452l-10.53257,48.19315h11.2773l13.93704,-13.28078l-2.87252,13.28078h11.17091l16.06483,-15.29302h9.46867l17.4213,-8.65263l3.1119,-13.28078l-17.66067,8.75324zM949.92904,436.34949l-2.34057,10.46365h26.49101l9.78784,-45.37601l18.48519,-9.45753l3.53745,-13.88446l-18.93735,9.75936l7.44727,-35.01298h-11.06452l-6.1706,28.57381l-15.95844,8.04896l7.87283,-36.62277h-11.06452l-10.53257,48.5956h13.61787l13.19231,-6.741l-9.04312,41.65337zM1063.8723,388.25695l7.44727,-34.81175h-26.06545l9.04312,-40.74786h-12.66036l-19.15013,88.73978h38.61942l12.66036,-6.43917l2.87252,-13.07956zM1035.78545,390.97348l5.95782,-27.06463h16.384l-5.85143,27.06463zM1110.57734,388.25695l7.66005,-35.11359h-36.59802l-10.31979,48.29376h13.40509l13.2987,-6.84162l-1.48945,6.84162h11.2773l19.68208,-9.75936l2.97891,-13.3814zM1084.93744,389.4643l5.63865,-25.85728h14.14982l-3.83003,17.90894zM1171.00663,365.31742l-15.10732,7.64651l4.36197,-19.71995h-11.17091l-10.31979,5.33244l1.17029,-5.43305h-11.06452l-10.53257,48.29376h11.17091l6.38338,-29.68054l10.31979,-5.23182l-4.25558,19.71995h11.06452l14.94774,-7.64651z" id="CompoundPath 1" stroke-linecap="butt" stroke-linejoin="miter" fill="#ffffff" style="stroke: #ffffff;"/>
                  <g>
                    <rect x="541.164" y="247.945" width="85.923" height="11.578" style="fill: #ffffff; stroke: #ffffff;"/>
                    <g transform="matrix(1, 0, 0, 1, 5.258484, 44.52256)">
                      <rect x="576.952" y="209.125" width="6.094" height="62.157" style="stroke-width: 1px; paint-order: fill; fill: #ffffff; stroke: #ffffff;"/>
                    </g>
                    <path style="stroke-linecap: square; fill: none; stroke: #ffffff; stroke-width: 8px;" d="M 534.503 356.824 L 585.234 310.119 L 634.354 357.629 L 634.354 432.517 L 535.308 432.518 L 534.503 356.824 Z"/>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </${this.headerElement}>
    </header>`;

    document.querySelector('#header-placeholder').remove();
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define("adi-main-header", AdiMainHeader);

const loadFonts = () => {
  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = '/dist/fonts.css';

  head.appendChild(link);
};
loadFonts();
