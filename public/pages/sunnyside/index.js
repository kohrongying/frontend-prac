import styles from './style.module.scss';
import Logo from './images/logo.svg'
import ImgTransform from './images/desktop/image-transform.jpg';
import ImgStandOut from './images/desktop/image-stand-out.jpg';
import ImgGraphic from './images/desktop/image-graphic-design.jpg';

const Prac = () => (
  <>
  <Landing />
	<section class={styles.grid}>
    <article class={styles.service}>
      <div class={styles.service__text_wrapper}>
        <h3>Transform your brand</h3>
        <p>We are a full-service creative agency specialising in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</p>
        <a class={styles.link}>LEARN MORE</a>
      </div>
    </article>

    <article class={styles.service}>
      <img src={ImgTransform} class={styles.service__bg}/>
    </article>

    <article class={styles.service}>
      <img src={ImgStandOut} class={styles.service__bg}/>
    </article>

    <article class={styles.service}>
      <div class={styles.service__text_wrapper}>
        <h3>Stand out to the right audience</h3>
        <p>Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places.</p>
        <a class={styles.link}>LEARN MORE</a>
      </div>
    </article>

    <article data-bg="graphic">  
      <div class={styles.service__img__text_wrapper}>
        <h4>Graphic Design</h4>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
      </div>    
    </article>

    <article data-bg="photography">  
      <div class={styles.service__img__text_wrapper}>
        <h4>Photography</h4>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>    
    </article>


	</section>
  </>
);

const Landing = () => (
	<section class={styles.landing}>
    <nav class={styles.nav}>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <ul class={styles.nav__items}>
        <li class={styles.nav__item}>About</li>
        <li class={styles.nav__item}>Services</li>
        <li class={styles.nav__item}>Projects</li>
        <li class={styles.nav__item}>Contact</li>
      </ul>
    </nav>
		<h1 class={styles.landing__title}>WE ARE CREATIVES</h1>
	</section>
)

export default Prac;
