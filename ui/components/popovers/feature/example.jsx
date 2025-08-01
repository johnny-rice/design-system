// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../base/example';
import { Footer } from '../walkthrough/example';
import _ from '../../../shared/helpers';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    context: 'Feature',
    id: 'feature-default',
    label: 'Feature default [dark]',
    element: (
      <Popover
        className="slds-popover_dark slds-nubbin_left"
        title="Dialog Title"
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__body">
            <p className="slds-text-heading_small">
              Shelly, it seems you frequent this record. Try favoriting it for
              easy access.
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  
];

export let examples = [
  {
    context: 'Feature',
    id: 'icon-text-dark',
    label: 'With icon and text [dark]',
    element: (
      <Popover
        className="slds-popover_dark  slds-nubbin_left"
        title="Dialog Title"
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="favorite"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <p className="slds-text-heading_small">
              Shelly, it seems you frequent this record. Try favoriting it for
              easy access.
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Feature',
    id: 'icon-header-text-link-dark',
    label: 'With icon, header, text, and link [dark]',
    element: (
      <Popover
        className="slds-popover_dark  slds-nubbin_left"
        headingId={headingUniqueId}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="smiley_and_people"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Feature title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                Learn More
              </a>
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Feature',
    id: 'icon-header-text-dark',
    label: 'With icon, header, and text [dark]',
    element: (
      <Popover
        className="slds-popover_dark  slds-nubbin_left"
        headingId={headingUniqueId}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="description"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Feature title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Feature',
    id: 'icon-header-text-footer-dark',
    label: 'With icon, header, text, and footer [dark]',
    element: (
      <Popover
        className="slds-popover_dark  slds-nubbin_left"
        headingId={headingUniqueId}
        footer={<Footer learnMoreButton />}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="favorite"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Feature title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Feature',
    deprecated: true,
    id: 'icon-text',
    label: 'Deprecated – With icon and text',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
        title="Dialog Title"
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="favorite"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <p className="slds-text-heading_small">
              Shelly, it seems you frequent this record. Try favoriting it for
              easy access.
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Feature',
    deprecated: true,
    id: 'icon-header-text-link',
    label: 'Deprecated – With icon, header, text, and link',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
        headingId={headingUniqueId}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="smiley_and_people"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Feature title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <a href="#" onClick={e => e.preventDefault()}>
                Learn More
              </a>
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Feature',
    deprecated: true,
    id: 'icon-header-text',
    label: 'Deprecated – With icon, header, and text',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
        headingId={headingUniqueId}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="description"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Feature title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </Popover>
    )
  },
  {
    context: 'Feature',
    deprecated: true,
    id: 'icon-header-text-footer',
    label: 'Deprecated – With icon, header, text, and footer',
    element: (
      <Popover
        className="slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
        headingId={headingUniqueId}
        footer={<Footer learnMoreButton />}
        closeButton
        inverse
      >
        <div className="slds-media">
          <div className="slds-media__figure">
            <span
              className="slds-icon_container"
              title="description of icon when needed"
            >
              <SvgIcon
                className="slds-icon slds-icon_small slds-icon-text-default"
                sprite="utility"
                symbol="favorite"
              />
              <span className="slds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div className="slds-media__body">
            <h2 id={headingUniqueId} className="slds-text-heading_small">
              Feature title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </Popover>
    )
  }
];
