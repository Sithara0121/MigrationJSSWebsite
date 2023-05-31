import React, { FC } from 'react';
import { RichText, Image, Field } from '@sitecore-jss/sitecore-jss-react';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from '../styles.module.css';
interface HeroProps {
  fields: {
    heroimg: ImageField;
    herotext: Field<string>;
  };
}

const Hero: FC<HeroProps> = ({ fields }) => (
  <div className={styles.hero}>
    <div className={styles.heroImg}>
      <Image field={fields.heroimg} />
    </div>
    <React.Fragment>
      <RichText
        field={fields.herotext}
        tag="section"
        className={styles.herotext}
        editable={false}
        data-sample="other-attributes-pass-through"
      />
    </React.Fragment>
    <div className={styles.heroCTA}>
      <button>FIND YOUR WATCH</button>
      <button>FIND A BOUTIQUE</button>
      <button>FIND YOUR STRAP</button>
    </div>
  </div>
);

export default Hero;
