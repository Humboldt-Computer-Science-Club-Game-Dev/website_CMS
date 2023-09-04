/* // First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator' */

// Then import schema types from any plugins that might expose them
/* import schemaTypes from 'all:part:@sanity/base/schema-type' */
import genericActionButton from './ActionButtonHub/genericActionButton'
import siteSettings from './siteSettings'
import pivotalDisplaySection from './pivotalDisplaySection/index'
import page from './page'
import landingPageSection from './landingPageSection/index'
import sectionTitle from './Component/sectionTitle'
import FeaturedVideo from './FeaturedVideo'
import Decision from './Decision'
import DecisionFeild from './Decision/DecisionFeild'
import ThematicDisplay from './ThematicDisplay'
import StandaloneText from './StandaloneText'
import StandardRichText from './RichTexts/StandardRichText'
import ImageStorage from './ImageStorage'
import HorizontalRule from './HorizontalRule'
import EmailUsForm from './EmailUsForm'
import EventDisplay from './EventDisplay'
import Event from './Event'
import Footer from './Footer'
import Gallery from './Gallery'
import CustomPadding from './Component/CustomPadding'
import Map from './Map'
import SignIn from './SignIn'
import SignUp from './SignUp'
import AccountHeader from './AccountHeader'
import TitheHistory from './TitheHistory'
import GivePayment from './GivePayment'
import {marginAndPadding} from './components/MarginAndPadding'
import stylishDisplay from './StylishDisplay'
import MeetingScheduler from './MeetingScheduler'
import TemporaryFaithLifeGiving from './TemporaryFaithLifeGiving'
import Card from './Card'
import CardDisplay from './CardDisplay'
import NavMenu, {MainNavMenu} from './NavMenu'
import PersistantNav from './PersistantNav'
import SubsplashGiving from './SubsplashGiving'
import LinkHub from './LinkHub'
import OnlineIntake from './OnlineIntake'
import QueryIntake from './QueryIntake'
import Requisition from './Requisition'
import Reimbursement from './Reimbursement'
import DiscordInvite from './DiscordInvite'

export const schemaTypes = [
  genericActionButton,
  siteSettings,
  ...landingPageSection,
  ...pivotalDisplaySection,
  sectionTitle,
  HorizontalRule,
  page,
  FeaturedVideo,
  DecisionFeild,
  Decision,
  ThematicDisplay,
  StandaloneText,
  StandardRichText,
  ImageStorage,
  EmailUsForm,
  Event,
  EventDisplay,
  Footer,
  CustomPadding,
  Gallery,
  Map,
  SignUp,
  SignIn,
  AccountHeader,
  TitheHistory,
  GivePayment,
  marginAndPadding,
  stylishDisplay,
  MeetingScheduler,
  TemporaryFaithLifeGiving,
  Card,
  CardDisplay,
  NavMenu,
  MainNavMenu,
  PersistantNav,
  SubsplashGiving,
  LinkHub,
  OnlineIntake,
  QueryIntake,
  Requisition,
  Reimbursement,
  DiscordInvite,
]
