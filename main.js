/**
 * Community Plugin Command - Obsidian Plugin
 * ==================
 * Adds a new Ribbon command to directly open the Community Plugins setting tab
 *
 */

const obsidian = require('obsidian');
const CmdName = 'Open Community Plugins Browser';

class OpenCommunityPluginsBrowser extends obsidian.Plugin {
  constructor() {
    super(...arguments);
  }

  async onload() {
    this.addRibbonIcon('plug-2', CmdName, this.openBrowser.bind(this));

    this.addCommand({
      id: 'open-community-plugins',
      name: CmdName,
      callback: this.openBrowser.bind(this),
    });

    console.log('%c' + this.manifest.name + ' ' + this.manifest.version +
    ' loaded', 'background-color: indigo; padding:4px; border-radius:4px');
  }

  openBrowser() {
    this.app.workspace.protocolHandlers.get('show-plugin')({ id: ' ' });
  }
}

module.exports = {
  default: OpenCommunityPluginsBrowser,
};
