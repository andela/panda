import React from 'react';
import styles from '../../../style.css';
import flat from 'file!../../../images/flat.png';
import pie_chart from 'file!../../../images/pie-chart.png';
import user from 'file!../../../images/user.png';
import seo from 'file!../../../images/seo.png';
import rocks from 'file!../../../images/rocks.png';
import facebook from 'file!../../../images/facebook.png';
import google from 'file!../../../images/google.png';
import linkedin from 'file!../../../images/linkedin.png';

const styleElement = {
  backgroundImage: 'url('+ rocks +')'
};

export default class Content extends React.Component {
  render() {
    return (
      <div>

        <section>
          <aside>
            <h4>What we do?</h4>
            <p>Why us what we offer us what we</p>
            <div className={styles.text_}>
              <article>
                <div className={styles.icon}><img src={user}/></div>
                <h4> Subheading </h4>
                <p> Dummy text of the printing and type editting industry.Lorem Ipsum Dummy</p>
              </article>
              <article>
                <div className={styles.icon}><img src={pie_chart}/></div>
                <h4> Subheading </h4>
                <p> Dummy text of the printing and type editting industry.Lorem Ipsum Dummy</p>
              </article>
            </div>
          </aside>
          <aside> <img src={flat}/></aside>
        </section>

        <section className={styles.register}>
          <aside> <img src={seo}/></aside>
          <aside>
            <h4>What we do?</h4>
            <p>Why us what we offer us what we</p>
            <div className={styles.text_}>
              <article>
                <div className={styles.icon}>
                <img src={user}/>
              </div>
                <h4> Subheading </h4>
                <p> Dummy text of the printing and type editting industry.Lorem Ipsum Dummy</p>
              </article>
              <article>
                <div className={styles.icon}>
                  <img src={pie_chart}/>
                </div>
                <h4> Subheading </h4>
                <p> Dummy text of the printing and type editting industry.Lorem Ipsum Dummy</p>
              </article>
            </div>
          </aside>
        </section>

        <section className={styles.calltoaction}>
          <div className={styles.rocks} style={styleElement}>
            <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className={styles.action_}> GET STARTED </div>
          </div>
        </section>

        <footer>
          <div className={styles.social_icons}>
            <img src={facebook}/>
            <img src={google}/>
            <img src={linkedin}/>
          </div>
          <p>Copyrights @ panda analytics 2016 </p>
        </footer>

      </div>
    );
  }
}
