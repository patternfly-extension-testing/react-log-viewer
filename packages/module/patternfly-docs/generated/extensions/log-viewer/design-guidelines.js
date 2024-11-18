import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import srcImport0 from '../../../content/extensions/react-log-viewer/design-guidelines/./img/logviewer.png';
import srcImport1 from '../../../content/extensions/react-log-viewer/design-guidelines/./img/logviewerdark.png';
import srcImport2 from '../../../content/extensions/react-log-viewer/design-guidelines/./img/logviewerclear.png';
import srcImport3 from '../../../content/extensions/react-log-viewer/design-guidelines/./img/logviewercog.png';
import srcImport4 from '../../../content/extensions/react-log-viewer/design-guidelines/./img/logviewersearch.png';
const pageData = {
  "id": "Log viewer",
  "section": "extensions",
  "subsection": "",
  "deprecated": false,
  "template": false,
  "beta": false,
  "demo": false,
  "newImplementationLink": false,
  "source": "design-guidelines",
  "tabName": null,
  "slug": "/extensions/log-viewer/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/module/patternfly-docs/content/extensions/react-log-viewer/design-guidelines/design-guidelines.md",
  "relPath": "packages/module/patternfly-docs/content/extensions/react-log-viewer/design-guidelines/design-guidelines.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`A `}
      <strong {...{"className":""}}>
        {`log viewer`}
      </strong>
      {` is a preconfigured component that gives you the option to visualize your log content. Log viewer renders log output in real time in a clear and structured way.`}
    </p>
    <AutoLinkHeader {...{"id":"light-theme-log-viewer","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Light theme log viewer`}
    </AutoLinkHeader>
    <img src={srcImport0} width={srcImport0.width} height={srcImport0.height} {...{"alt":"Log Viewer","className":"ws-img "}}>
    </img>
    <ol {...{"className":"pf-v6-c-content--ol ws-ol "}}>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Type of log dropdown menu:`}
        </strong>
        {` Allow users to switch between different types of logs.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Search bar:`}
        </strong>
        {` Use to look up historical logs. The results will be highlighted in the log.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Pause button:`}
        </strong>
        {` Play and stop your log content viewing, instead of scrolling through.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Clear log:`}
        </strong>
        {` Clear the displayed log output.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Cog:`}
        </strong>
        {` House settings such as wrapping lines, showing timestamps, and displaying line numbers.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Export:`}
        </strong>
        {` Export log content.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Download:`}
        </strong>
        {` Download the log file.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        <strong {...{"className":""}}>
          {`Fullscreen:`}
        </strong>
        {` Expand log viewer to full screen.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"dark-theme-log-viewer","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Dark theme log viewer`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`We recommend using the light theme editor by default, but there is also a dark theme log viewer
available. All log viewer functionality remains the same whether a light or dark theme is used.`}
    </p>
    <img src={srcImport1} width={srcImport1.width} height={srcImport1.height} {...{"alt":"Dark theme log viewer","className":"ws-img "}}>
    </img>
    <AutoLinkHeader {...{"id":"usability","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Usability`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`Use a log viewer when:`}
    </p>
    <ul {...{"className":"pf-v6-c-content--ul ws-ul "}}>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`The user can manipulate 1 large log file or multiple log files at the same time.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`You want to create a more readable and accessible environment for the user.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`The user may actively search for specific logs within a large log file.`}
      </li>
      <li {...{"className":"pf-v6-c-content--li ws-li "}}>
        {`The user shares files frequently with other users or teams.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"log-viewer-functionality","headingLevel":"h2","className":"ws-title ws-h2"}}>
      {`Log viewer functionality`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"with-popover","headingLevel":"h3","className":"ws-title ws-h3"}}>
      {`With popover`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`The clear log button opens up a popover with further options, to prevent a user from accidentally clearing their log content.`}
    </p>
    <img src={srcImport2} width={srcImport2.width} height={srcImport2.height} {...{"alt":"Clear this log popover open on a Log viewer","className":"ws-img "}}>
    </img>
    <AutoLinkHeader {...{"id":"with-dropdown-drilldown-and-search-expanded","headingLevel":"h3","className":"ws-title ws-h3"}}>
      {`With dropdown, drilldown, and search expanded`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`The cog icon in the log viewer toolbar allows you to store content options such as timestamps or line numbers for better orientation within the log viewer.`}
    </p>
    <img src={srcImport3} width={srcImport3.width} height={srcImport3.height} {...{"alt":"Cog options open on a Log viewer","className":"ws-img "}}>
    </img>
    <AutoLinkHeader {...{"id":"with-search-results","headingLevel":"h3","className":"ws-title ws-h3"}}>
      {`With search results`}
    </AutoLinkHeader>
    <p {...{"className":"pf-v6-c-content--p ws-p "}}>
      {`The search bar provides highlighted search results for better findability within a log viewer’s content.`}
    </p>
    <img src={srcImport4} width={srcImport4.width} height={srcImport4.height} {...{"alt":"Log Viewer with highlighted search results","className":"ws-img "}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ExtensionsLogViewerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
