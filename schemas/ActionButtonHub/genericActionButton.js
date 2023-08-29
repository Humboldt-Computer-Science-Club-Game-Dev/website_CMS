import actionButtonBase from './actionButtonBase';

const SLUG = 'generic';

export default (() => {
   let genericActionButton = actionButtonBase();
   genericActionButton.setKeyValue('name', `${SLUG}ActionButton`);
   return genericActionButton;
})();
