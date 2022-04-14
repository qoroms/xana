import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Categories } from 'constants/filter.constants';
import HeaderActions from 'actions/header.actions';
import FilterActions from 'actions/filter.actions';
import Header from 'components/header';

import umansExample from 'assets/imgs/Xanabot.gif';
import logoLight from 'assets/svgs/Logo.svg';
import logoDark from 'assets/svgs/black_logo.svg';
// import fantomLogo from 'assets/svgs/fantom_logo_white.svg';
import card1 from 'assets/svgs/card1.svg';
import card2 from 'assets/svgs/card2.svg';
import card3 from 'assets/svgs/card3.svg';
import card4 from 'assets/svgs/card4.svg';
// import search from 'assets/svgs/magnifier.svg';
import { ThemeProvider } from 'styled-components';
import styles from './styles.module.scss';
import { useDarkMode } from '../useDarkMode';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import { Grid } from '@material-ui/core';
import { Carousel } from '@trendyol-js/react-carousel';
import { $ } from 'react-jquery-plugin';
const cards = [
  {
    icon: card1,
    title: 'Create NFTs',
    description:
      'Using Xana you can list your collection and publish your NFTs to the Ethereum blockchain.',
    path: '/',
  },
  {
    icon: card2,
    title: 'Earn Xana',
    description:
      "This is the world's first collect and create to earn NFT marketplace. You get rewards for using Xana platform.",
    path: '/',
  },
  {
    icon: card3,
    title: 'Fast Payments',
    description:
      'We never escrow your funds. Xana is a fully decentralized NFT marketplace and you get paid as soon as sale is completed.',
    path: '/',
  },
  {
    icon: card4,
    title: 'Low Fees',
    description:
      'We charge the lowest fees of any major NFT platform. Only 0.96%.',
    path: '/explore',
  },
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // if (!componentMounted) {
  //   return <div />;
  // }

  useEffect(() => {
    dispatch(HeaderActions.toggleSearchbar(false));
    dispatch(FilterActions.updateCategoryFilter(null));
  }, []);

  const handleViewCategory = id => {
    dispatch(FilterActions.updateCategoryFilter(id === 'all' ? null : id));
    history.push('/explore');
  };

  const renderAboutCard = (key, icon, title, desc, path) => (
    <div
      className={styles.aboutCard}
      key={key}
      style={{
        border: theme === 'light' ? '' : 'solid 1px rgb(255, 255, 255, 0.2)',
      }}
    >
      <NavLink to={path} className={styles.aboutCardLink}>
        <div className={styles.cardIconWrapper}>
          <img src={icon} />
        </div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDesc}>{desc}</div>
      </NavLink>
    </div>
  );

  const renderCategoryCard = (key, icon, label, extra = false) => (
    <div
      className={styles.categoryCard}
      key={key}
      onClick={() => handleViewCategory(key)}
      style={{
        borderColor:
          theme == 'light' ? 'rgb(255, 255, 255, 0.2)' : 'rgb(0, 0, 0, 0.1)',
      }}
    >
      <div className={styles.cardIconWrapper2}>
        <img src={icon} />
      </div>
      <div className={cx(styles.cardLabelWrapper, extra && styles.extraCard)}>
        <div className={styles.cardLabel}>{label}</div>
        <div className={styles.browseBtn}>
          <ChevronRightIcon className={styles.browseBtnIcon} />
        </div>
      </div>
    </div>
  );
  const handleLefitClick = () => {
    $('#leftButton').trigger('click');
  };
  const handleRightClick = () => {
    $('#rightButton').trigger('click');
  };
  return (
    <ThemeProvider theme={themeMode}>
      <div className={styles.container}>
        <GlobalStyles />
        <Header border theme={theme} toggleTheme={toggleTheme} />
        <div className={styles.body}>
          <Grid
            className={styles.main}
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              lg={4}
              className={styles.mainLeft}
            >
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <div
                    className={styles.title}
                  >{`Create and collect to earn on Xana`}</div>
                  <div className={styles.subtitle}>
                    {`Xana is the world's first NFT marketplace where you can list
                    and collect NFTs while earning Xana token as a reward.`}
                  </div>
                </Grid>
                <Grid item>
                  <Link
                    to="/explore"
                    className={styles.exploreButton}
                    style={{
                      backgroundColor: theme === 'light' ? '#ac91d1' : 'white',
                      color: 'black',
                    }}
                  >
                    Explore
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11} sm={11} md={7} lg={6} className={styles.card}>
              <Grid item>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'left',
                    alignItems: 'center',
                    padding: '10px 0px 5px 20px',
                  }}
                >
                  <div
                    className={styles.circlebutton}
                    style={{ boxShadow: '4px 4px 2px 1px #C8B4E3' }}
                  ></div>
                  <div
                    className={styles.circlebutton}
                    style={{ boxShadow: '4px 4px 2px 1px #A9C6D1' }}
                  ></div>
                  <div className={styles.circlebutton}></div>
                </div>
                <hr style={{ color: 'black', width: '94%' }} />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
                style={{
                  padding: '13px 0px 26px 0',
                }}
              >
                <Grid item xs={11} sm={5} md={6} className={styles.cardMedia}>
                  <img src={umansExample} />
                </Grid>
                <Grid item xs={11} sm={6} md={5}>
                  <div className={styles.cardInfo}>
                    <div className={styles.cardCategory}>Xana 1st NFT</div>
                    <div className={styles.cardName}>Zora Labs Collection</div>
                    <div className={styles.cardDescription}>
                      Bid on the first NFT ever listed on Xana. This will
                      increase in value as Xana gains popularity and a special
                      utility will be announced soon.
                    </div>
                  </div>
                  <Link
                    to="https://xana.org/explore/0xada24530284602c993901d01ad0b0c27cefab1fb/1"
                    className={styles.exploreButton}
                    style={{
                      // background: 'transparent',
                      // color: 'black',
                      border: 'solid 1px',
                    }}
                  >
                    Go to auction
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={styles.about}>
            <div className={styles.aboutInner}>
              <div className={styles.aboutTitle}>Benefits</div>
              <div className={styles.aboutCards}>
                {cards.map((card, key) =>
                  renderAboutCard(
                    key,
                    card.icon,
                    card.title,
                    card.description,
                    card.path
                  )
                )}
              </div>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item className={styles.aboutTitle}>
                  Categories
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs={5}>
                      <button
                        className={styles.CarouselLeftButton}
                        onClick={handleLefitClick}
                      >
                        <ChevronLeftIcon />
                      </button>
                    </Grid>
                    <Grid item xs={5}>
                      <button
                        className={styles.CarouselRightButton}
                        onClick={handleRightClick}
                      >
                        <ChevronRightIcon />
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div className={styles.categories}>
                <Carousel
                  show={4.5}
                  swiping={true}
                  transition={0.5}
                  rightArrow={
                    <button id="rightButton" style={{ display: 'none' }}>
                      <ChevronRightIcon />
                    </button>
                  }
                  leftArrow={
                    <button
                      id="leftButton"
                      style={{ display: 'none' }}
                      // className={styles.CarouselLeftButton}
                    >
                      .
                    </button>
                  }
                  // responsive={true}
                >
                  {Categories.map(cat =>
                    renderCategoryCard(cat.id, cat.icon, cat.label)
                  )}
                  {/* {renderCategoryCard('all', search, 'Explore All NFTs', true)} */}
                </Carousel>
              </div>
            </div>
          </div>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.footer}
          >
            <Grid item xs={6} sm={4}>
              <img
                src={theme === 'light' ? logoLight : logoDark}
                alt="logo"
                className={styles.logo}
              />
            </Grid>
            {/* <Grid item xs={6} sm={8} md={5} lg={4}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                style={{ marginLeft: 'auto' }}
              >
                <Grid item xs={11} sm={4}>
                  <a
                    style={{ textDecoration: 'none', padding: '0 10%' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.termly.io/document/privacy-policy/7db4b9fc-aa5d-4f80-bfa1-27120ff982ba"
                  >
                    Privacy Policy
                  </a>
                </Grid>
                <Grid item xs={11} sm={4}>
                  <a
                    style={{ textDecoration: 'none', padding: '0 10%' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.termly.io/document/cookie-policy/c79f1a78-08a2-4da2-85f0-846a461cde81"
                  >
                    Cookie Policy
                  </a>
                </Grid>
                <Grid item xs={11} sm={4}>
                  <a
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://app.termly.io/document/terms-of-use-for-online-marketplace/1f69b33f-65ba-40d9-bf63-b28e357f7c34"
                  >
                    Terms of Service
                  </a>
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
