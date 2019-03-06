// ==UserScript==
// @name         Hide GOG heroes
// @description  Hide hero images from the redesigned GOG game pages. Puts the price box back in the old place. This changes should make the desktop browsing experience more pleasant.
// @namespace    https://github.com/BattleMage
// @homepage     https://github.com/BattleMage/gog-anti-hero
// @version      0.1
// @author       BattleMage
// @match        https://www.gog.com/game/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('.productcard-player {display:none;}');
    GM_addStyle('.product-actions {position: relative; width: auto; right: auto;}');
    GM_addStyle('@media (min-width: 737px) { .productcard-basics {padding-top: 65px;} }');

    let productPrice = document.getElementsByClassName('product-actions hide-when-content-is-expanded ng-scope')[0];
    let sideColumn = document.getElementsByClassName('layout-side-col')[0];
    let whyGog = sideColumn.getElementsByClassName('why-gog')[0];
    let summarySection = document.getElementsByClassName('layout-side-col')[0].getElementsByClassName('content-summary-section')[0];
    sideColumn.insertBefore(
        productPrice,
        whyGog
    );
})();
