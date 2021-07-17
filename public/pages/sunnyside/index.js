import styles from './style.module.scss';
import Logo from './images/logo.svg'
import ImgTransform from './images/desktop/image-transform.jpg';
import ImgStandOut from './images/desktop/image-stand-out.jpg';
import ImgGraphic from './images/desktop/image-graphic-design.jpg';
import ImgPhotography from './images/desktop/image-photography.jpg';
import ImgLanding from './images/desktop/image-header.jpg';
import ImgEmily from './images/image-emily.jpg';
import ImgJennie from './images/image-jennie.jpg';
import ImgThomas from './images/image-thomas.jpg';
import ImgMilk from './images/desktop/image-gallery-milkbottles.jpg';
import ImgCone from './images/desktop/image-gallery-cone.jpg';
import ImgOrange from './images/desktop/image-gallery-orange.jpg';
import ImgCube from './images/desktop/image-gallery-sugarcubes.jpg';

const Prac = () => (
  <>
  <Landing />
	<section class={styles.grid}>
    <article class={styles.service}>
      <div class={styles.service__text_wrapper}>
        <h2>Transform your brand</h2>
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
        <h2>Stand out to the right audience</h2>
        <p>Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places.</p>
        <a class={styles.link}>LEARN MORE</a>
      </div>
    </article>

    <article class={styles.service} data-bg="graphic"  style={{ backgroundImage: `url(${ImgGraphic})` }}>  
      <div class={styles.service__img__text_wrapper}>
        <h5>Graphic Design</h5>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
      </div>    
    </article>

    <article class={styles.service} data-bg="photography" style={{ backgroundImage: `url(${ImgPhotography})` }}>  
      <div class={styles.service__img__text_wrapper}>
        <h5>Photography</h5>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>    
    </article>
	</section>

  <section class={styles.testimonial}>
    <h5>CLIENT TESTIMONIALS</h5>
    <div class={styles.testimonial__grid}>
      <div class={styles.testimonial__item}>
        <img src={ImgEmily} alt="emily" />
        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

        <h6>Emily R.</h6>
        <span>Marketing Director</span>
      </div>

      <div class={styles.testimonial__item}>
        <img src={ImgThomas} alt="thomas" />
        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

        <h6>Thomas S.</h6>
        <span>Chief Operating Officer</span>
      </div>

      <div class={styles.testimonial__item}>
        <img src={ImgJennie} alt="jennie" />
        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

        <h6>Jennie F.</h6>
        <span>Business Owner</span>
      </div>
    </div>
  </section>

  <section class={styles.gallery}>
    <img src={ImgMilk} class={styles.service__bg}/>
    <img src={ImgOrange} class={styles.service__bg}/>
    <img src={ImgCone} class={styles.service__bg}/>
    <img src={ImgCube} class={styles.service__bg}/>
  </section>
  </>
);

const Landing = () => (
	<section class={styles.landing} style={{ backgroundImage: `url(${ImgLanding})` }}>    
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
